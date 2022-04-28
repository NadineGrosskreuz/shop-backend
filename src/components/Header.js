import Link from "next/link";

export default function Header() {
  return (
    <>
      <Link href="/products">Produkte</Link>
      <Link href="/categories">Kategorien</Link>
      <Link href="/create-product">Produkt hinzufügen</Link>
      <Link href="/create-category">Kategorie hinzufügen</Link>
    </>
  );
}
