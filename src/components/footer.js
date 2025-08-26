export default function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Tentang Desa */}
        <div>
          <h2 className="text-lg font-bold mb-3">Desa Pusaka</h2>
          <p className="text-sm leading-relaxed">
            Website resmi Desa Pusaka sebagai pusat informasi, layanan publik, 
            berita desa, dan potensi lokal. Mari bersama membangun desa yang lebih maju.
          </p>
        </div>

        {/* Link Cepat */}
        <div>
          <h2 className="text-lg font-bold mb-3">Link Cepat</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#profil" className="hover:text-yellow-300">Profil Desa</a></li>
            <li><a href="#berita" className="hover:text-yellow-300">Berita & Pengumuman</a></li>
            <li><a href="#galeri" className="hover:text-yellow-300">Galeri</a></li>
            <li><a href="#potensi" className="hover:text-yellow-300">Potensi Desa</a></li>
            <li><a href="#pemerintah" className="hover:text-yellow-300">Pemerintah Desa</a></li>
            <li><a href="#kontak" className="hover:text-yellow-300">Kontak</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h2 className="text-lg font-bold mb-3">Kontak</h2>
          <p className="text-sm">📍 Alamat: Jl. Raya Desa Pusaka, Siak</p>
          <p className="text-sm">📞 Telepon: 0812-3456-7890</p>
          <p className="text-sm">✉️ Email: info@desapusaka.id</p>
          <div className="flex space-x-4 mt-3">
            <a href="https://facebook.com" target="_blank" className="hover:text-yellow-300">🌐 Facebook</a>
            <a href="https://instagram.com" target="_blank" className="hover:text-yellow-300">📷 Instagram</a>
            <a href="https://wa.me/6281234567890" target="_blank" className="hover:text-yellow-300">💬 WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-green-900 text-center text-sm py-3">
        © {new Date().getFullYear()} Desa Pusaka. All rights reserved.
      </div>
    </footer>
  );
}
