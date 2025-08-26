import Hero from "./components/Hero";
import Profil from "./components/Profil";
import Berita from "./components/Berita";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Profil />
      <Berita />
      {/* nanti kita tambah Galeri, Penduduk, Pemerintah, Potensi, Kontak, Peta */}
    </main>
  );
}
