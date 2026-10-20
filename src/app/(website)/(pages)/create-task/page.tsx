import PageHeader from "../../component/layout/PageHeader/page";
import FormField from "../../component/layout/FormField/page";

export default function CreateTask() {
  return (
    <div>
      <PageHeader title="Create Task" subtitle="Create a task and write the criteria AI will check against" />
      <form className="mx-auto max-w-xl space-y-4 rounded-3xl bg-white p-8 shadow-md">
        <FormField label="Task Title" placeholder="e.g. Build login page" />
        <FormField label="Assign To" placeholder="Member name" />
        <FormField label="Deadline" type="date" />
        <FormField label="Description" area placeholder="What is the task?" />
        <FormField label="Criteria (AI will check against this)" area placeholder="1. Form has validation&#10;2. Design is responsive" />
        <button type="button" className="w-full rounded-xl bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700">Assign Task</button>
      </form>
    </div>
  );
}