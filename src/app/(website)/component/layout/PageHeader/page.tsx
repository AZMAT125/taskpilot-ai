// Har page ke upar wala title section
import Link from "next/link";

type Props = { title: string; subtitle: string; actionText?: string; actionHref?: string };

export default function PageHeader({ title, subtitle, actionText, actionHref }: Props) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-teal-700 to-teal-500 p-8 text-white shadow-lg">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-1 text-teal-50">{subtitle}</p>
      </div>
      {actionText && actionHref && (
        <Link href={actionHref} className="rounded-full bg-lime-300 px-6 py-3 font-semibold text-teal-950 transition hover:bg-lime-200">
          + {actionText}
        </Link>
      )}
    </div>
  );
}
