import { ReactSvg } from "./ReactSvg";
import Link from "next/link";
import { BookOpenText, PlusCircle } from "lucide-react";
import { Button } from "./Button";

export const Card = ({ name, category, url, showCategory }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border p-4 shadow transition-colors hover:border-gray-300 hover:bg-gray-100">
      <div className="flex w-full items-center gap-2">
        <ReactSvg size={24} />
        <p className="text-base font-bold">React</p>
      </div>

      <p className="line-clamp-1 w-full overflow-hidden text-ellipsis text-center text-lg font-extrabold">
        {name}
      </p>

      <div className="flex w-full items-center gap-2">
        {showCategory && (
          <p className="line-clamp-1 text-start text-xs text-gray-400 ">
            {category}
          </p>
        )}

        <Link
          className="inline-flex items-center justify-center rounded-md px-3 py-1.5 ring-indigo-500 ring-offset-2 focus:outline-none focus:ring bg-gray-200 text-gray-950 hover:bg-gray-300 h-8 text-sm font-semibold ml-auto"
          href={`${url}`}
        >
          <BookOpenText size={16} />
        </Link>
        <Button variant="plus">
          <PlusCircle />
        </Button>
      </div>
    </div>
  );
};
