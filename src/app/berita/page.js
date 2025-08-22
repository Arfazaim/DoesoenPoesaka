"use client";
import { useEffect, useState } from "react";

export default function BeritaPage() {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/berita")
      .then(res => res.json())
      .then(data => setBerita(data))
      .catch(err => console.error("Gagal fetch berita:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Berita Desa</h1>
      {berita.length === 0 ? (
        <p>Tidak ada berita</p>
      ) : (
        <ul className="space-y-4">
          {berita.map(b => (
            <li key={b.id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{b.judul}</h2>
              <p>{b.isi}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
