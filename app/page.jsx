import { Card } from "@/src/Card";
import { Header } from "@/src/Header";
import { Navbar } from "@/src/Navbar";
import { REACT_CARDS } from "@/src/ReactCards";

export default function Home({searchParams}) {
  const currentFilter = searchParams.currentFilter
  const filters = [... new Set(REACT_CARDS.map((c)=>c.category))]
  // const category = props.searchParams.category
  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="mb-4 mt-8 flex flex-1 gap-4 overflow-auto max-lg:flex-col">
        <Navbar filters = {filters}/>
        <div className="size-full overflow-auto">
          <div className="grid h-fit w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* On doit afficher autant de card que le fichier ReactCards contien d'entrée */}
            {REACT_CARDS.filter ((card)=> {
              if (!currentFilter) return true;
              return card.category === currentFilter;
            }).map((card, index) => (
              <Card
                key={card.index}
                name={card.name}
                category={card.category}
                url={card.url}
              />
            ))}
            {/* <Card /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
