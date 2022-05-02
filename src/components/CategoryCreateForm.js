import { useRouter } from "next/router";
import { useState } from "react";

export default function CategoryCreateForm() {
  const [nameValue, setNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const router = useRouter();

  const submit = async (event) => {
    event.preventDefault();
    console.log(nameValue, descriptionValue);

    const response = await fetch("/api/category/create", {
      method: "POST",
      body: JSON.stringify({
        name: nameValue,
        description: descriptionValue,
      }),
    });
    console.log(await response.json());
    router.push("/category");
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          name="name"
          label="Name"
          placeholder="Name"
          value={nameValue}
          onChange={(event) => {
            setNameValue(event.target.value);
          }}
          sx={{ marginBottom: 2 }}
        />
        <input
          name="description"
          label="Description"
          placeholder="Beschreibung"
          value={descriptionValue}
          onChange={(event) => {
            setDescriptionValue(event.target.value);
          }}
        />
        <button type="submit" variant="contained">
          Submit
        </button>
      </form>
    </>
  );
}
