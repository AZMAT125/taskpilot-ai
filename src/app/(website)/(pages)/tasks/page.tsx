import PageHeader from "../../component/layout/PageHeader/page";
import StatusBadge from "../../component/layout/StatusBadge/page";
import { tasks } from "../../lib/data";

export default function Tasks() {
  return (
    <div>
      <PageHeader title="Tasks" subtitle="All tasks and their status" actionText="Create Task" actionHref="/create-task" />
      <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-teal-50 text-teal-800">
            <tr><th className="p-4">Task</th><th className="p-4">Member</th><th className="p-4">Due</th><th className="p-4">Status</th></tr>
          </thead>
          <tbody>
            {tasks.map((t) => (
              <tr key={t.id} className="border-t border-slate-100">
                <td className="p-4 font-medium">{t.title}</td>
                <td className="p-4">{t.member}</td>
                <td className="p-4">{t.due}</td>
                <td className="p-4"><StatusBadge status={t.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}