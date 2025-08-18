"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login"); // kalau tidak ada token, balik ke login
    } else {
      setIsAuth(true);
    }
  }, [router]);

  if (!isAuth) {
    return <p className="text-center mt-20">Checking authentication...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md">
        <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="font-semibold text-lg mb-2">Kelola Berita</h2>
            <p className="text-sm text-gray-600 mb-4">
              Tambah, ubah, atau hapus berita desa.
            </p>
            <button
              onClick={() => router.push("/admin/berita")}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Kelola
            </button>
          </div>

          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="font-semibold text-lg mb-2">Kelola Profil</h2>
            <p className="text-sm text-gray-600 mb-4">
              Update informasi tentang desa.
            </p>
            <button
              onClick={() => router.push("/admin/profil")}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Kelola
            </button>
          </div>

          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="font-semibold text-lg mb-2">Kelola Kontak</h2>
            <p className="text-sm text-gray-600 mb-4">
              Tambah dan perbarui informasi kontak.
            </p>
            <button
              onClick={() => router.push("/admin/kontak")}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              Kelola
            </button>
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={() => {
              localStorage.removeItem("token");
              router.push("/admin/login");
            }}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
