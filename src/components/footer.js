export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} Desa Pusaka. All rights reserved.
      </div>
    </footer>
  );
}
