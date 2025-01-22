"use client";

import { NavItems } from "@/data/Navbar";
import { useState, useEffect, useCallback } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [clickedSection, setClickedSection] = useState("");
  const NAV_HEIGHT = 64;
  activeSection === "home" ? "home" : activeSection;

  // Determine if a section is substantially visible
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface SectionElement {
    id: string;
    element: HTMLElement | null;
  }

  const isSubstantiallyVisible = useCallback(
    (element: HTMLElement | null): boolean => {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) -
        Math.max(rect.top, NAV_HEIGHT);
      const sectionHeight = rect.height;
      return visibleHeight > sectionHeight * 0.3; // 30% visibility threshold
    },
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      // Only check for new active section if we're not in a click transition
      // or if the clicked section is substantially visible
      const clickedElement = clickedSection
        ? document.getElementById(clickedSection)
        : null;

      if (!clickedSection || isSubstantiallyVisible(clickedElement)) {
        const sectionElements = NavItems.map((section) => ({
          id: section.id,
          element: document.getElementById(section.id),
        }));

        const visibleSection = sectionElements.find(({ element }) =>
          isSubstantiallyVisible(element)
        );

        if (visibleSection) {
          setActiveSection(visibleSection.id);
          setClickedSection(""); // Clear clicked section when naturally scrolling
        }
      }
    };

    const debouncedHandleScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", debouncedHandleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [clickedSection, isSubstantiallyVisible]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Immediately set active and clicked section
      setActiveSection(id);
      setClickedSection(id);

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - NAV_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Clear clicked section after scroll animation (roughly 1 second)
      setTimeout(() => {
        setClickedSection("");
      }, 1000);
    }
  };

  const nickname = "< />";
  return (
    <nav className="px-4 sticky top-0 z-10 lg:px-8 w-full bg-white sm:px-6 items-center flex-col flex justify-between">
      <div className="flex items-center w-full h-20 justify-between">
        <div className="logo relative w-fit font-semibold uppercase text-2xl">
          <div className="flex gap-2 items-center">
            <span> {nickname} </span>
            <p>Ayodele Olayinka</p>
          </div>
          <span className="text-sm lowercase absolute right-0">
            theactualdev
          </span>
        </div>

        <ul className="hidden md:flex gap-20">
          {NavItems.map((item) => {
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  aria-label={item.id}
                  className="uppercase text-xl font-light hover:text-blue-500 transition-colors"
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="md:hidden ">
          <button
            aria-label="Hamburger Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-lg w-screen`}
      >
        <ul className="px-2 pt-2 pb-3 space-y-1">
          {NavItems.map((item) => (
            <li key={item.id}>
              <button
                aria-label={item.id}
                className="block px-3 py-2 text-sm hover:text-blue-500 transition-colors"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
