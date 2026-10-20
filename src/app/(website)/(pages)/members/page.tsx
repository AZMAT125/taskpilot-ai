import PageHeader from "../../component/layout/PageHeader/page";
import { members } from "../../lib/data";

export default function Members() {
  return (
    <div>
      <PageHeader title="Team Members" subtitle="All members and their tasks" />
      <div className="grid gap-5 md:grid-cols-3">
        {members.map((m) => (
          <div key={m.id} className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition hover:shadow-md">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-lime-400 text-2xl font-bold text-white">{m.name[0]}</div>
            <h3 className="mt-3 font-bold">{m.name}</h3>
            <p className="text-sm text-slate-500">{m.role}</p>
            <p className="mt-1 text-xs text-teal-700">{m.team}</p>
            <p className="mt-3 text-sm font-semibold">{m.tasks} active tasks</p>
          </div>
        ))}
      </div>
    </div>
  );
}