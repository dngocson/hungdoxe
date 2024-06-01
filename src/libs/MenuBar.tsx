import { ChevronRightIcon } from "@radix-ui/react-icons";
import * as Menubar from "@radix-ui/react-menubar";
import { memo } from "react";
import { Fragment } from "react/jsx-runtime";
import { cn } from "../utils/cn";
interface MenuItem {
  id: number;
  label: string;
  children?: MenuItem[];
}

interface Menu {
  id: number;
  heading: string;
  item?: MenuItem[];
}

const MenuBar = memo(({ items }: { items: Menu[] }) => {
  return (
    <Menubar.Root
      className={cn(
        "container mx-auto flex  items-center justify-between rounded-md  py-4",
        "relative max-w-[1200px]",
      )}
    >
      {items.map((item) => (
        <Menubar.Menu key={item.id}>
          <Menubar.Trigger className="flex select-none items-center justify-between gap-[2px] rounded px-3 py-2 text-[15px] font-medium leading-none text-base-100 outline-none  data-[state=open]:bg-transparent">
            {item.heading}
          </Menubar.Trigger>
          {item.item && (
            <Menubar.Portal>
              <Menubar.Content
                className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
                align="start"
                sideOffset={5}
                alignOffset={-3}
              >
                <RecursiveItem items={item.item} />
              </Menubar.Content>
            </Menubar.Portal>
          )}
        </Menubar.Menu>
      ))}
      <label className="input input-sm flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </Menubar.Root>
  );
});

export default MenuBar;

const RecursiveItem = memo(({ items }: { items: MenuItem[] }) => {
  return (
    <>
      {items.map((item) => (
        <Fragment key={item.id}>
          {item.children ? (
            <Menubar.Sub>
              <Menubar.SubTrigger className="group relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
                {item.label}
                <div className="ml-auto pl-5 text-mauve9 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-base-100">
                  <ChevronRightIcon />
                </div>
              </Menubar.SubTrigger>
              <Menubar.Portal>
                <Menubar.SubContent
                  className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
                  alignOffset={-5}
                >
                  <RecursiveItem items={item.children} />
                </Menubar.SubContent>
              </Menubar.Portal>
            </Menubar.Sub>
          ) : (
            <Menubar.Item className="group relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
              {item.label}
            </Menubar.Item>
          )}
        </Fragment>
      ))}
    </>
  );
});
