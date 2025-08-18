import Link from "next/link";
import { beritaData } from "@/data/berita";

export default function BeritaPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Berita Desa</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {beritaData.map((item) => (
          <div
            key={item.slug}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img src={item.gambar} alt={item.judul} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.judul}</h2>
              <p className="text-gray-500 text-sm">{item.tanggal}</p>
              <p className="mt-2 text-gray-700">{item.ringkasan}</p>
              <Link
                href={`/berita/${item.slug}`}
                className="text-blue-600 hover:underline mt-3 inline-block"
              >
                Baca Selengkapnya →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
