import PageHeader from "../../component/layout/PageHeader/page";
import FormField from "../../component/layout/FormField/page";

export default function CreateTeam() {
  return (
    <div>
      <PageHeader title="Create Team" subtitle="Create a new team" />
      <form className="mx-auto max-w-xl space-y-4 rounded-3xl bg-white p-8 shadow-md">
        <FormField label="Team Name" placeholder="e.g. Web Development" />
        <FormField label="Team Lead" placeholder="Lead name" />
        <FormField label="Description" area placeholder="Describe the team" />
        <button type="button" className="w-full rounded-xl bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700">Create Team</button>
      </form>
    </div>
  );
}