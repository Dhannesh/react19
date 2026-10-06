import { useFormStatus } from "react-dom";

const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-black text-white p-2 rounded text-xl"
      disabled={pending}
    >
      {pending ? "Submitting" : "Submit"}
    </button>
  );
};

const BasicUsage = () => {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 1000));
  };
  return (
    <form action={handleSubmit}>
      <Submit />
    </form>
  );
};
export default BasicUsage;
