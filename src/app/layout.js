import "./globals.css";

export const metadata = {
  title: "Desa Pusaka",
  description: "Website Resmi Desa Pusaka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-800">
        {/* Navbar */}
        <header className="bg-green-700 text-white sticky top-0 z-50 shadow-md">
          <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <h1 className="text-xl font-bold">🌿 Desa Pusaka</h1>
            <ul className="hidden md:flex space-x-6 text-sm font-medium">
              <li><a href="#profil" className="hover:underline">Profil</a></li>
              <li><a href="#berita" className="hover:underline">Berita</a></li>
              <li><a href="#galeri" className="hover:underline">Galeri</a></li>
              <li><a href="#penduduk" className="hover:underline">Penduduk</a></li>
              <li><a href="#pemerintah" className="hover:underline">Pemerintah</a></li>
              <li><a href="#potensi" className="hover:underline">Potensi</a></li>
              <li><a href="#kontak" className="hover:underline">Kontak</a></li>
              <li><a href="#peta" className="hover:underline">Peta</a></li>
            </ul>
          </nav>
        </header>

        {/* Isi halaman */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-green-800 text-white text-center py-6 mt-10">
          <p>© {new Date().getFullYear()} Desa Pusaka. Semua Hak Dilindungi.</p>
        </footer>
      </body>
    </html>
  );
}
