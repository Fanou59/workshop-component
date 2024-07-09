"use client";
import { useSearchParams } from "next/navigation";
import { Card } from "@/src/Card";
import { Header } from "@/src/Header";
import { Navbar } from "@/src/Navbar";
import { REACT_CARDS } from "@/src/ReactCards";
import { Suspense } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter") || "";

  // Filtrer les cartes en fonction de la catégorie sélectionnée
  const filteredCards = filter
    ? REACT_CARDS.filter((card) => card.category === filter)
    : REACT_CARDS;

  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="mb-4 mt-8 flex flex-1 gap-4 overflow-auto max-lg:flex-col">
        <Navbar />
        <div className="size-full overflow-auto">
          <div className="grid h-fit w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Suspense fallback={<div>Loading...</div>}>
              {filteredCards.map((card, index) => (
                <Card
                  key={index}
                  name={card.name}
                  category={card.category}
                  url={card.url}
                  showCategory={filter === ""}
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
