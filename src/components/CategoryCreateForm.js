import { useRouter } from "next/router";
import { useState } from "react";

export default function CategoryCreateForm() {
  const [contentValue, setContentValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const router = useRouter();

  const submit = async (event) => {
    event.preventDefault();
    console.log(contentValue, nameValue);

    const response = await fetch("/api/category/create", {
      method: "POST",
      body: JSON.stringify({
        content: contentValue,
        name: nameValue,
      }),
    });
    console.log(await response.json());
    router.push("/category");
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          name="content"
          label="Content"
          /* fullWidth*/
          value={contentValue}
          onChange={(event) => {
            setContentValue(event.target.value);
          }}
          sx={{ marginBottom: 2 }}
        />
        <input
          name="name"
          label="Name"
          /*fullWidth*/
          value={nameValue}
          onChange={(event) => {
            setNameValue(event.target.value);
          }}
        />
        <button type="submit" variant="contained">
          Submit
        </button>
      </form>
    </>
  );
}
