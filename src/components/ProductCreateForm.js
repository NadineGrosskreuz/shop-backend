import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductCreateForm() {
  const [nameValue, setNameValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [tagsValue, setTagsValue] = useState("");
  const router = useRouter();

  const submit = async (event) => {
    event.preventDefault();
    console.log(nameValue, categoryValue);

    const response = await fetch("/api/product/create", {
      method: "POST",
      body: JSON.stringify({
        name: nameValue,
        category: categoryValue,
        price: priceValue,
        tags: tagsValue,
        description: descriptionValue,
      }),
    });
    console.log(await response.json());
    router.push("/products");
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          name="name"
          label="Name"
          /*fullWidth*/
          value={nameValue}
          onChange={(event) => {
            setNameValue(event.target.value);
          }}
          sx={{ marginBottom: 2 }}
        />
        <input
          name="category"
          label="Category"
          /*fullWidth*/
          value={categoryValue}
          onChange={(event) => {
            setCategoryValue(event.target.value);
          }}
        />
        <input
          name="price"
          label="Price"
          /*fullWidth*/
          value={priceValue}
          onChange={(event) => {
            setPriceValue(event.target.value);
          }}
        />
        <input
          name="description"
          label="Description"
          /*fullWidth*/
          value={descriptionValue}
          onChange={(event) => {
            setDescriptionValue(event.target.value);
          }}
        />
        <input
          name="tags"
          label="Tags"
          /*fullWidth*/
          value={tagsValue}
          onChange={(event) => {
            const tagArray = event.target.value.split(",");
            setTagsValue(tagArray);
          }}
        />
        <button type="submit" variant="contained">
          Submit
        </button>
      </form>
    </>
  );
}
