"use client";
import { REACT_CARDS } from "./ReactCards";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { Suspense } from "react";

const uniqueCategories = [
  "All",
  ...new Set(REACT_CARDS.map((card) => card.category)),
];

export const Navbar = () => {
  return (
    <nav className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryLinks />
      </Suspense>
    </nav>
  );
};

const CategoryLinks = () => {
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("filter") || "";
  return (
    <>
      {uniqueCategories.map((category) => (
        <Link
          className={clsx(
            "rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200",
            {
              "font-bold":
                activeFilter === (category === "All" ? "" : category),
            }
          )}
          href={{ query: { filter: category === "All" ? "" : category } }}
          key={category}
        >
          {category}
        </Link>
      ))}
    </>
  );
};
