import PageHeader from "../../component/layout/PageHeader/page";
import StatusBadge from "../../component/layout/StatusBadge/page";

const summary = [["58", "Tasks Reviewed"], ["41", "Accepted"], ["12", "Needs Changes"], ["5", "Pending"]];
const reports = [
  { task: "Build login page", member: "Ali Raza", score: 94, note: "All criteria are met." },
  { task: "Create product API", member: "Bilal Ahmed", score: 68, note: "Add error handling." },
  { task: "Design dashboard", member: "Hina Noor", score: 88, note: "Improve the mobile view." },
];

export default function Reports() {
  return (
    <div>
      <PageHeader title="Reports" subtitle="AI review reports for the admin" />
      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {summary.map(([n, l]) => (
          <div key={l} className="rounded-2xl bg-white p-5 text-center shadow-sm"><p className="text-3xl font-extrabold text-teal-600">{n}</p><p className="text-sm text-slate-500">{l}</p></div>
        ))}
      </div>
      <div className="space-y-4">
        {reports.map((r) => (
          <div key={r.task} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div><h3 className="font-bold">{r.task}</h3><p className="text-sm text-slate-500">{r.member} - {r.note}</p></div>
            <div className="flex items-center gap-3"><span className="text-2xl font-extrabold text-teal-700">{r.score}%</span><StatusBadge status={r.score >= 80 ? "Accepted" : "Needs Changes"} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}