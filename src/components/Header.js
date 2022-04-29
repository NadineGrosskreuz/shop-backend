import Link from "next/link";
import { HeaderOne } from "./UI/HeaderOne.styled";

export default function Header() {
  return (
    <HeaderOne>
      <Link href="/products">Produkte</Link>
      <Link href="/categories">Kategorien</Link>
      <Link href="/create-product">Produkt hinzufügen</Link>
      <Link href="/create-category">Kategorie hinzufügen</Link>
    </HeaderOne>
  );
}
