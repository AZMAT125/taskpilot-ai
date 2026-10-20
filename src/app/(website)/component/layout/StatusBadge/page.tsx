// Chhota rangeen label jo task ka status dikhata hai
const colors: Record<string, string> = {
  Accepted: "bg-emerald-100 text-emerald-700",
  Submitted: "bg-sky-100 text-sky-700",
  "Needs Changes": "bg-amber-100 text-amber-700",
  Pending: "bg-slate-100 text-slate-600",
};

export default function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[status] ?? colors.Pending}`}>
      {status}
    </span>
  );
}
