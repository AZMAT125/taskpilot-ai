import PageHeader from "../../component/layout/PageHeader/page";
import { tasks } from "../../lib/data";

const left = ["3 days left", "6 days left", "8 days left", "11 days left", "16 days left"];

export default function Deadlines() {
  return (
    <div>
      <PageHeader title="Deadlines" subtitle="Upcoming deadlines and the responsible member" />
      <div className="space-y-4">
        {tasks.map((t, i) => (
          <div key={t.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-l-4 border-slate-100 border-l-teal-500 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div><h3 className="font-bold">{t.title}</h3><p className="text-sm text-slate-500">Member: {t.member}</p></div>
            <div className="text-right">
              <p className="font-semibold">{t.due}</p>
              <p className={i < 2 ? "text-sm font-semibold text-red-500" : "text-sm text-slate-500"}>{left[i]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}