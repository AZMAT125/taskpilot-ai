import PageHeader from "../../component/layout/PageHeader/page";
import FormField from "../../component/layout/FormField/page";

export default function SubmitTask() {
  return (
    <div>
      <PageHeader title="Submit Task" subtitle="Submit your GitHub repo link and AI will review it" />
      <form className="mx-auto max-w-xl space-y-4 rounded-3xl bg-white p-8 shadow-md">
        <FormField label="Task" placeholder="Task name" />
        <FormField label="GitHub Repo Link" placeholder="https://github.com/username/repo" />
        <FormField label="Notes" area placeholder="Any note for the admin" />
        <button type="button" className="w-full rounded-xl bg-lime-400 py-3 font-semibold text-teal-950 hover:bg-lime-300">Submit for AI Review</button>
      </form>
    </div>
  );
}