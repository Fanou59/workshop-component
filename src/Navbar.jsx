"use client";
import { REACT_CARDS } from "./ReactCards";
import Link from "next/link";
import clsx from "clsx";

// const uniqueCategories = [
//   "All",
//   ...new Set(REACT_CARDS.map((card) => card.category)),
// ];

export const Navbar = ({filters}) => {
  return (
    <nav className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      {filters.map((filter) => (
        <CategoryLinks filter = {filter}/>
      ))}
      
    </nav>
  );
};

const CategoryLinks = ({filter}) => {
  return (
    <>
        <Link
          className={clsx(
            "rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200",
            {
              "font-bold":
                activeFilter === (filter === "All" ? "" : filter),
            }
          )}
          href={`/?filter=${filter}`}
          key={filter}
        >
          {filter}
        </Link>
    </>
  );
};
/*
Pour le menu, tu vas utiliser les Link en NextJS en utilisant des SearchParams.

En gros, l'URL va ressembler à ça : /?filter=hooks en remplaçant hooks par la catégorie.

Il faudra aussi ajouter une catégorie manuellement all qui va afficher toutes les cartes. (pour ça, il faut supprimer le searchParams de l'URL)

De ce fait, quand on clique sur un lien, on va changer l'URL et donc le contenu de la page. (qu'on fera dans la partie 3)
*/