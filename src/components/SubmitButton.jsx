import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="bg-blue-600 text-white p-2">
      {pending ? "Submitting Securely..." : "Submit"}
    </button>
  );
};
export default SubmitButton;
