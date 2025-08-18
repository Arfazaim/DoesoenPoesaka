// src/components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Desa Pusaka</div>

        <div className="flex space-x-6">
          <Link href="/" className="hover:text-yellow-300">Beranda</Link>
          <Link href="/profil" className="hover:text-yellow-300">Profil</Link>
          <Link href="/berita" className="hover:text-yellow-300">Berita</Link>
          <Link href="/kontak" className="hover:text-yellow-300">Kontak</Link>
        </div>
      </div>
    </nav>
  );
}
