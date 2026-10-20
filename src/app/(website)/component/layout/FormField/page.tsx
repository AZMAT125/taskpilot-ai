// Label + input ka jora, forms mein baar baar kaam aata hai
type Props = { label: string; placeholder?: string; type?: string; area?: boolean };

export default function FormField({ label, placeholder, type = "text", area }: Props) {
  const style = "mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100";
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      {area ? <textarea rows={4} placeholder={placeholder} className={style} /> : <input type={type} placeholder={placeholder} className={style} />}
    </label>
  );
}
