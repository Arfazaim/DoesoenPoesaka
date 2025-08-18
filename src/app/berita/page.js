"use client";
import { useEffect, useState } from "react";

export default function BeritaPage() {
  const [berita, setBerita] = useState([]);
  const [judul, setJudul] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  // Cek apakah admin sudah login (ada token di localStorage)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAdmin(true);

    // Ambil data berita
    fetch("http://localhost:5000/api/berita")
      .then((res) => res.json())
      .then((data) => setBerita(data));
  }, []);

  // Tambah berita (hanya admin)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Anda harus login sebagai admin!");
      return;
    }

    const res = await fetch("http://localhost:5000/api/berita", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ judul, tanggal }),
    });

    if (res.ok) {
      const data = await res.json();
      setBerita([...berita, data]); // tambahkan ke list
      setJudul("");
      setTanggal("");
    } else {
      alert("Gagal menambahkan berita");
    }
  };

  // Hapus berita (hanya admin)
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Anda harus login sebagai admin!");
      return;
    }

    const res = await fetch(`http://localhost:5000/api/berita/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    if (res.ok) {
      setBerita(berita.filter((b) => b.id !== id));
    } else {
      alert("Gagal menghapus berita");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Berita Desa</h1>

      {/* Form Tambah Berita (hanya admin) */}
      {isAdmin && (
        <form
          onSubmit={handleSubmit}
          className="mb-6 p-4 bg-gray-100 rounded-lg shadow"
        >
          <input
            type="text"
            placeholder="Judul Berita"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Tanggal (misal: 18 Agustus 2025)"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Tambah Berita
          </button>
        </form>
      )}

      {/* Daftar Berita */}
      {berita.length === 0 ? (
        <p>Belum ada berita.</p>
      ) : (
        <ul>
          {berita.map((item) => (
            <li
              key={item.id}
              className="mb-4 p-3 border rounded shadow-sm bg-white flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{item.judul}</h2>
                <p className="text-gray-600">{item.tanggal}</p>
              </div>
              {isAdmin && (
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Hapus
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
