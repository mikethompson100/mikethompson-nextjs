"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="bg-primary color-secondary px-4 py-4 md:text-3xl border-b-4 border-b-[var(--color-tertiary)] sticky top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl md:text-2xl lg:text-3xl">Michael J. Thompson</h1>

        {/* Desktop Menu */}
        <ul className="md:pe-4 lg:pe-7 hidden md:flex space-x-6 md:text-xl lg:text-2xl">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Hamburger Menu toggle">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-primary flex flex-col items-center py-4 space-y-4 md:hidden text-xl border-b-4 border-b-[var(--color-tertiary)]">
            {links.map((link) => (
              <li key={link.name} onClick={() => setIsOpen(false)}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
