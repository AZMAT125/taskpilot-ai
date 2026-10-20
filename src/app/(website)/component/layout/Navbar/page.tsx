// Navbar: har page ke upar nazar aata hai
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Teams", href: "/teams" },
  { name: "Projects", href: "/projects" },
  { name: "Members", href: "/members" },
  { name: "Tasks", href: "/tasks" },
  { name: "Submit", href: "/submit-task" },
  { name: "Reports", href: "/reports" },
  { name: "Deadlines", href: "/deadlines" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3">
        <Link href="/" className="text-xl font-extrabold text-teal-700">TaskPilot<span className="text-lime-500">AI</span></Link>
        <div className="flex flex-wrap gap-5 text-sm font-medium text-slate-600">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-teal-600">{l.name}</Link>
          ))}
        </div>
        <div className="flex gap-2 text-sm font-semibold">
          <Link href="/login" className="rounded-full px-4 py-2 text-teal-700 hover:bg-teal-50">Login</Link>
          <Link href="/register" className="rounded-full bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">Register</Link>
        </div>
      </nav>
    </header>
  );
}
