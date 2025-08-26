// app/profil/page.js
export default function ProfilDesa() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Judul Halaman */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Profil Desa Pusaka
      </h1>

      {/* Sejarah Desa */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sejarah Desa</h2>
        <p className="text-gray-700 leading-relaxed">
          Desa Pusaka berdiri sejak abad ke-18 dan dikenal sebagai salah satu desa
          dengan kekayaan budaya dan tradisi yang masih terjaga hingga saat ini.
          Masyarakat hidup rukun dengan semangat gotong royong yang kuat.
        </p>
      </section>

      {/* Visi & Misi */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Visi & Misi</h2>
        <div className="bg-green-100 p-6 rounded-lg shadow">
          <h3 className="font-bold mb-2">Visi:</h3>
          <p className="mb-4">
            “Menjadi desa yang maju, mandiri, berbudaya, dan berdaya saing.”
          </p>

          <h3 className="font-bold mb-2">Misi:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Meningkatkan kualitas pendidikan dan kesehatan masyarakat.</li>
            <li>Mendorong inovasi ekonomi berbasis potensi lokal.</li>
            <li>Melestarikan budaya dan tradisi desa.</li>
            <li>Meningkatkan pelayanan publik yang transparan dan akuntabel.</li>
          </ul>
        </div>
      </section>

      {/* Struktur Pemerintahan */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Struktur Pemerintahan Desa</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <img
              src="https://source.unsplash.com/200x200/?leader"
              alt="Kepala Desa"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-bold">Budi Santoso</h3>
            <p className="text-gray-600">Kepala Desa</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <img
              src="https://source.unsplash.com/200x200/?person"
              alt="Sekretaris Desa"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-bold">Siti Aminah</h3>
            <p className="text-gray-600">Sekretaris Desa</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <img
              src="https://source.unsplash.com/200x200/?community"
              alt="Kaur Pemerintahan"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-bold">Andi Wijaya</h3>
            <p className="text-gray-600">Kaur Pemerintahan</p>
          </div>
        </div>
      </section>
    </div>
  );
}
