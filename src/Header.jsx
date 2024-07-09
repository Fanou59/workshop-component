import { ShoppingBasket, User } from "lucide-react";
import { ReactSvg } from "./ReactSvg";
import { Button } from "./Button";

export const Header = () => {
  return (
    <header className="flex w-full items-center py-4">
      <h1 className="inline-flex items-center gap-2 text-lg font-bold">
        <ReactSvg size={32} />
        <span>ReactJourney</span>
      </h1>
      <div className="ml-auto flex items-center gap-4">
        <Button>
          <ShoppingBasket size="20px" />
        </Button>
        <Button>
          <User size="20px" />
        </Button>
      </div>
    </header>
  );
};
