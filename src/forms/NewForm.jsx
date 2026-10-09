import SubmitButton from "../components/SubmitButton";

const NewForm = () => {
  const submitData = async (formData) => {
    const email = formData.get("email");
    const uname = formData.get("uname");
    console.log(email, uname);
    await new Promise((res) => setTimeout(res, 1000));
    // execute server mutation here
  };

  return (
    <div>
      <form action={submitData}>
        <div className="flex flex-col items-center justify-center gap-2">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="border rounded p-2"
          />
          <input
            type="text"
            name="uname"
            placeholder="Enter name"
            className="border rounded p-2"
          />

          <SubmitButton />
        </div>
      </form>
    </div>
  );
};
export default NewForm;
