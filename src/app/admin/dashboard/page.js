"use client";
import { useState } from "react";

export default function DashboardPage() {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/berita", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ judul, isi }),
    });

    if (res.ok) {
      setPesan("✅ Berita berhasil ditambahkan!");
      setJudul("");
      setIsi("");
    } else {
      setPesan("❌ Gagal menambahkan berita");
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dashboard Admin</h1>

      {pesan && <p className="mb-4">{pesan}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Judul Berita"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          placeholder="Isi berita"
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
          className="w-full p-2 border rounded h-32"
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Tambah Berita
        </button>
      </form>
    </div>
  );
}
