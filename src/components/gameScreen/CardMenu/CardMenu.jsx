import { Button } from "@headlessui/react";

function CardMenu() {
  const buttons = ["A", "B", "C", "D"];

  return (
    <div className="mt-6">
      <div className="flex space-x-1">
        {buttons.map((button) => (
          <Button
            key={button}
            className="w-20 h-20 bg-[--red] font-extrabold text-white cursor-pointer focus:outline
            focus:outline-none focus:ring focus:ring-[--red] focus:ring-offset-2 
            transition-all duration-500 ease-in-out focus:ring-[6px]"
          >
            {button}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default CardMenu;
