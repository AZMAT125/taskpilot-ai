import PageHeader from "../../component/layout/PageHeader/page";
import FormField from "../../component/layout/FormField/page";

export default function CreateProject() {
  return (
    <div>
      <PageHeader title="Create Project" subtitle="Start a new project for a team" />
      <form className="mx-auto max-w-xl space-y-4 rounded-3xl bg-white p-8 shadow-md">
        <FormField label="Project Name" placeholder="e.g. E-Commerce Portal" />
        <FormField label="Assign Team" placeholder="Team name" />
        <FormField label="Deadline" type="date" />
        <FormField label="Description" area placeholder="Project details" />
        <button type="button" className="w-full rounded-xl bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700">Create Project</button>
      </form>
    </div>
  );
}