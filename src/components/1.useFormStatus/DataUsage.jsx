import { useFormStatus } from "react-dom";

const Submit = () => {
  const { pending, data } = useFormStatus();

  return (
    <>
      <input
        className="border border-gray-600 rounded mx-2 w-96 h-9 p-1"
        placeholder="Search a movie"
        type="text"
        name="movieName"
        disabled={pending}
      />
      <button
        className="px-3 py-1 bg-black text-white rounded"
        disabled={pending}
      >
        {pending ? "Submitting" : "Submit"}
      </button>
      <br />
      <p className="text-3xl ml-2">
        {data ? `Searching for ${data?.get("movieName")}` : ""}
      </p>
    </>
  );
};

const DataUsage = () => {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 1000));
  };
  return (
    <form action={handleSubmit}>
      <Submit />
    </form>
  );
};
export default DataUsage;
