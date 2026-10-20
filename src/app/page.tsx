// Home page
import Link from "next/link";

const features = [
  { icon: "👥", title: "Teams & Projects", text: "Admins create teams and projects and assign tasks to members." },
  { icon: "✅", title: "Custom Criteria", text: "Admins define clear criteria for every task." },
  { icon: "🤖", title: "AI Code Check", text: "As soon as a GitHub repo is submitted, AI checks it against the criteria." },
  { icon: "⏰", title: "Deadline Alerts", text: "Admins and members get alerts when a deadline is near." },
];
const stats = [["4", "Teams"], ["11", "Projects"], ["24", "Members"], ["58", "Tasks Reviewed"]];

export default function Home() {
  return (
    <div>
      <section className="rounded-3xl bg-gradient-to-br from-teal-800 via-teal-600 to-lime-400 p-12 text-center text-white shadow-xl">
        <p className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-sm">AI Automation Tool</p>
        <h1 className="text-4xl font-extrabold md:text-5xl">Manage teams. Review tasks. Let AI do the checking.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-teal-50">TaskPilotAI reviews tasks from GitHub repos, gives feedback, and generates reports for the admin.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/tasks" className="rounded-full bg-white px-7 py-3 font-semibold text-teal-800">View Tasks</Link>
          <Link href="/create-team" className="rounded-full border border-white px-7 py-3 font-semibold">Create Team</Link>
        </div>
      </section>
      <section className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map(([n, l]) => (
          <div key={l} className="rounded-2xl bg-white p-6 text-center shadow-sm"><p className="text-3xl font-extrabold text-teal-600">{n}</p><p className="text-slate-500">{l}</p></div>
        ))}
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"><p className="text-3xl">{f.icon}</p><h3 className="mt-2 text-lg font-bold">{f.title}</h3><p className="text-slate-500">{f.text}</p></div>
        ))}
      </section>
    </div>
  );
}