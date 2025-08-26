export default function Berita() {
  return (
    <section id="berita" className="py-16 px-6 bg-gray-100">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Berita Desa</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <article className="p-4 bg-white shadow rounded-lg">
          <h3 className="font-semibold mb-2">Gotong Royong Mingguan</h3>
          <p className="text-sm text-gray-600">Kegiatan rutin masyarakat dalam menjaga kebersihan lingkungan desa.</p>
        </article>
        <article className="p-4 bg-white shadow rounded-lg">
          <h3 className="font-semibold mb-2">Pelatihan UMKM</h3>
          <p className="text-sm text-gray-600">Pelatihan keterampilan usaha kecil menengah untuk meningkatkan ekonomi warga.</p>
        </article>
        <article className="p-4 bg-white shadow rounded-lg">
          <h3 className="font-semibold mb-2">Festival Budaya Desa</h3>
          <p className="text-sm text-gray-600">Acara tahunan yang menampilkan seni budaya khas desa.</p>
        </article>
      </div>
    </section>
  );
}
