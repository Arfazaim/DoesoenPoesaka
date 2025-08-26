"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Profil", link: "#profil" },
    { name: "Berita", link: "#berita" },
    { name: "Galeri", link: "#galeri" },
    { name: "Potensi", link: "#potensi" },
    { name: "Pemerintah", link: "#pemerintah" },
    { name: "Kontak", link: "#kontak" },
    { name: "Peta", link: "#map" },
  ];

  return (
    <nav className="fixed w-full bg-green-700 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Nama Desa */}
          <div className="text-xl font-bold">Desa Pusaka</div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="hover:text-yellow-300 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-600 px-4 py-3 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="block hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
