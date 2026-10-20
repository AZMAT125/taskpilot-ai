import PageHeader from "../../component/layout/PageHeader/page";
import { teams, projects, members, tasks } from "../../lib/data";

export default function Teams() {
  return (
    <div>
      <PageHeader title="Teams" subtitle="Admin ki banayi hui saari teams" actionText="Create Team" actionHref="/create-team" />
      <div className="grid gap-5 md:grid-cols-2">
        {teams.map((t) => (
          <div key={t.id} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <h3 className="text-xl font-bold text-teal-700">{t.name}</h3>
            <p className="text-sm text-slate-500">Lead: {t.lead}</p>
            <div className="mt-4 flex gap-3 text-sm">
              <span className="rounded-full bg-teal-50 px-3 py-1 text-teal-700">{t.members} members</span>
              <span className="rounded-full bg-lime-100 px-3 py-1 text-lime-800">{t.projects} projects</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
