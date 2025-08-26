import { redirect } from "next/navigation";

export default function AdminPage() {
  // ⬇️ saat user buka /admin langsung diarahkan ke /admin/login
  redirect("/admin/login");
}
