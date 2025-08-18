export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Selamat Datang di Desa Pusaka</h1>
          <p className="text-lg mb-6">
            Desa Pusaka adalah desa yang asri, penuh tradisi, dan siap menyongsong masa depan.
          </p>
          <a
            href="/profil"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500"
          >
            Lihat Profil Desa
          </a>
        </div>
      </section>

      {/* Tentang Desa */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Tentang Desa</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Desa Pusaka memiliki kekayaan alam, budaya, dan sejarah yang panjang. 
            Masyarakatnya hidup rukun, menjaga tradisi, dan berinovasi untuk kemajuan bersama.
          </p>
        </div>
      </section>

      {/* Berita Terbaru */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Berita Terbaru</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://source.unsplash.com/400x250/?village"
                alt="Berita 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Gotong Royong Mingguan</h3>
                <p className="text-gray-600 text-sm">
                  Warga desa bergotong royong membersihkan lingkungan setiap minggu untuk menjaga kebersihan.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://source.unsplash.com/400x250/?farmer"
                alt="Berita 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Panen Raya 2025</h3>
                <p className="text-gray-600 text-sm">
                  Panen raya tahun ini menghasilkan surplus beras yang siap dipasarkan ke kota.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://source.unsplash.com/400x250/?culture"
                alt="Berita 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Festival Budaya</h3>
                <p className="text-gray-600 text-sm">
                  Festival budaya tahunan menampilkan tarian tradisional, musik, dan kuliner khas desa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
