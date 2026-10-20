import FormField from "../../component/layout/FormField/page";

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-lg">
      <h1 className="mb-6 text-center text-3xl font-bold text-teal-700">Register</h1>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField label="First Name" placeholder="First name" />
          <FormField label="Last Name" placeholder="Last name" />
        </div>
        <FormField label="Email" type="email" placeholder="you@example.com" />
        <FormField label="Password" type="password" placeholder="••••••••" />
        <FormField label="Retype Password" type="password" placeholder="••••••••" />
        <button type="button" className="w-full rounded-xl bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700">Register</button>
      </form>
    </div>
  );
}