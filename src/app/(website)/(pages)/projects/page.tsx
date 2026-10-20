import PageHeader from "../../component/layout/PageHeader/page";
import { projects } from "../../lib/data";

export default function Projects() {
  return (
    <div>
      <PageHeader title="Projects" subtitle="Ongoing projects and their progress" actionText="Create Project" actionHref="/create-project" />
      <div className="space-y-4">
        {projects.map((p) => (
          <div key={p.id} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex flex-wrap justify-between gap-2">
              <div><h3 className="text-lg font-bold">{p.name}</h3><p className="text-sm text-slate-500">{p.team}</p></div>
              <p className="text-sm text-slate-500">Due: {p.due}</p>
            </div>
            <div className="mt-4 h-3 rounded-full bg-slate-100"><div className="h-3 rounded-full bg-gradient-to-r from-teal-500 to-lime-400" style={{ width: p.progress + "%" }} /></div>
            <p className="mt-1 text-right text-sm font-semibold text-teal-700">{p.progress}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}