"use client";
import Link from "next/link";
import clsx from "clsx";

export const Navbar = ({filters, currentFilter}) => {
  return (
    <nav className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      <CategoryLinks isActivefilter={!currentFilter} filter="" key="filter">
        All
        </CategoryLinks>
      {filters.map((filter) => (
        <CategoryLinks isActive={filter === currentFilter} filter = {filter} key={filter} >
        {filter}
        </CategoryLinks>
      ))}
      
    </nav>
  );
};

const CategoryLinks = ({filter, children, isActive}) => {
  return (
    <>
        <Link
          className={clsx(
            "rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200",
            {
              "font-bold":
                isActive,
            }
          )}
          href={`/?filter=${filter}`}
          key={filter}
        >
          {children}
        </Link>
    </>
  );
};