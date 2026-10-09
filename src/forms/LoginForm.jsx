import { useActionState } from "react";
import SubmitButton from "../components/SubmitButton";

const loginAction = async (prevState, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  if (!email || !password) {
    return { error: "email/password is required", email, password };
    //it sets the value after click on submit, if form is not submitted
  }
  console.log(email);
  // await api call here
  // const res = await fetch("/api/login", { method: "POST", body: formData });
  // if (!res.ok) return { error: "Login failed" };
  await new Promise((res) => setTimeout(res, 1000));
  return { error: null, success: true };
};
const LoginForm = () => {
  const [state, formAction] = useActionState(loginAction, { error: null });

  return (
    <form action={formAction}>
      <input
        type="email"
        name="email"
        className="border rounded p-2"
        defaultValue={state.email}
      />
      <input
        type="password"
        name="password"
        className="border rounded p-2"
        defaultValue={state.password}
      />
      <SubmitButton />
      {state?.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
};
export default LoginForm;
