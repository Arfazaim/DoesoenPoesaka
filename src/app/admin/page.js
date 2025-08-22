"use client";
import { useState } from "react";

export default function AdminPage() {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/berita", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // ✅ gunakan format Bearer agar sesuai standar auth
          "Authorization": "Bearer admin123"
        },
        body: JSON.stringify({ judul, isi }),
      });

      if (!res.ok) throw new Error("Gagal tambah berita");

      await res.json();
      setPesan("✅ Berita berhasil ditambahkan");
      setJudul("");
      setIsi("");
    } catch (err) {
      setPesan("❌ " + err.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin - Tambah Berita</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Judul</label>
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Isi</label>
          <textarea
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Tambah Berita
        </button>
      </form>

      {pesan && <p className="mt-4">{pesan}</p>}
    </div>
  );
}
