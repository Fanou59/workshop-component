import { REACT_CARDS } from "./ReactCards";
import Link from "next/link";

const uniqueCategories = [...new Set(REACT_CARDS.map((card) => card.category))];

export const Navbar = () => {
  return (
    <nav className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      <CategoryLinks />
    </nav>
  );
};

const CategoryLinks = () => {
  return (
    <>
      {uniqueCategories.map((category) => (
        <Link
          className="rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200"
          href={{ query: { filter: category === "All" ? "" : category } }}
          key={category}
        >
          {category}
        </Link>
      ))}
    </>
  );
};
