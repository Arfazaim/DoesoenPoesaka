import { beritaData } from "@/data/berita";
import Link from "next/link";

export default function DetailBerita({ params }) {
  const { slug } = params;
  const berita = beritaData.find((b) => b.slug === slug);

  if (!berita) {
    return <div className="p-6">Berita tidak ditemukan</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{berita.judul}</h1>
      <p className="text-gray-500 text-sm mb-4">{berita.tanggal}</p>
      <img src={berita.gambar} alt={berita.judul} className="w-full h-64 object-cover rounded" />
      <p className="mt-4 text-lg leading-relaxed whitespace-pre-line">{berita.isi}</p>
      <Link href="/berita" className="text-blue-600 hover:underline block mt-6">
        ← Kembali ke Daftar Berita
      </Link>
    </div>
  );
}
