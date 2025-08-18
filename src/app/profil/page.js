export default function ProfilDesa() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Profil Desa Pusaka
        </h1>

        {/* Deskripsi */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sejarah Desa</h2>
          <p className="text-gray-700 leading-relaxed">
            Desa Pusaka berdiri sejak abad ke-18 dan merupakan salah satu desa tertua di wilayah ini. 
            Masyarakatnya dikenal ramah, menjunjung tinggi nilai gotong royong, dan menjaga tradisi leluhur.
          </p>
        </section>

        {/* Data Geografis */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Letak Geografis</h2>
          <p className="text-gray-700 leading-relaxed">
            Desa Pusaka terletak di wilayah dataran rendah dengan mayoritas lahan persawahan. 
            Berbatasan langsung dengan Desa Makmur di sebelah utara dan Sungai Jernih di sebelah timur.
          </p>
        </section>

        {/* Struktur Pemerintahan */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Struktur Pemerintahan</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Kepala Desa: Bapak Andi Saputra</li>
            <li>Sekretaris Desa: Ibu Siti Aminah</li>
            <li>Kepala Dusun 1: Bapak Rudi Hartono</li>
            <li>Kepala Dusun 2: Ibu Lina Wulandari</li>
          </ul>
        </section>

        {/* Foto Desa */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Galeri Foto</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <img
              src="https://source.unsplash.com/400x300/?village,landscape"
              alt="Pemandangan Desa"
              className="w-full h-48 object-cover rounded-lg shadow"
            />
            <img
              src="https://source.unsplash.com/400x300/?ricefield"
              alt="Sawah"
              className="w-full h-48 object-cover rounded-lg shadow"
            />
            <img
              src="https://source.unsplash.com/400x300/?tradition"
              alt="Tradisi"
              className="w-full h-48 object-cover rounded-lg shadow"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
