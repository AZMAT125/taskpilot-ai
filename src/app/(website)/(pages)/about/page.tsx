import PageHeader from "../../component/layout/PageHeader/page";

const steps = [
  "Admin creates a team and a project",
  "Admin sets the task and its criteria",
  "Member submits a GitHub repo",
  "AI checks the repo against the criteria",
  "Task is accepted and a report is generated",
];

export default function About() {
  return (
    <div>
      <PageHeader title="About TaskPilotAI" subtitle="How this tool works" />
      <div className="space-y-3">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 font-bold text-white">{i + 1}</span>
            <p className="font-medium">{s}</p>
          </div>
        ))}
      </div>
    </div>
  );
}