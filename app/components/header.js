import { ShoppingBasket, User, Plus } from "lucide-react";
import { ReactSvg } from "./logoReact";
import { Button } from "./button";

export const Header = () => {
  return (
    <header className="flex w-full items-center py-4">
      <h1 className="inline-flex items-center gap-2 text-lg font-bold">
        <ReactSvg size="32px" />
        <span>ReactJourney</span>
      </h1>
      <div className="ml-auto flex items-center gap-4">
        <Button>
          <ShoppingBasket size="20px" />
        </Button>
        <Button>
          <User size="20px" />
        </Button>
        <Button variant={"plus"}>
          <Plus />
        </Button>
      </div>
    </header>
  );
};
