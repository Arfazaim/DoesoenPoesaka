"use client";
import { useEffect, useState } from "react";

export default function BeritaPage() {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/berita")
      .then((res) => res.json())
      .then((data) => setBerita(data))
      .catch((err) => console.error("Gagal fetch berita:", err));
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Berita Desa</h1>
      {berita.length === 0 ? (
        <p className="text-gray-500">Belum ada berita.</p>
      ) : (
        <div className="space-y-6">
          {berita.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">{item.judul}</h2>
              <p className="text-sm text-gray-600">
                {new Date(item.tanggal).toLocaleDateString("id-ID")}
              </p>
              <p className="mt-2">{item.isi}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
