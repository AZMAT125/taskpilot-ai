import FormField from "../../component/layout/FormField/page";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-lg">
      <h1 className="mb-6 text-center text-3xl font-bold text-teal-700">Login</h1>
      <form className="space-y-4">
        <FormField label="Email" placeholder="you@example.com" />
        <FormField label="Password" type="password" placeholder="••••••••" />
        <button type="button" className="w-full rounded-xl bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700">Login</button>
      </form>
    </div>
  );
}
