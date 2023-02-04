import Link from "next/link";
import { NavigationLink } from "../types";

type Props = {
  selected: string;
  links: NavigationLink[];
  className: string;
};

export const DesktopNavigation = ({ selected, links, className }: Props) => {
  return (
    <nav
      className={`${className} fixed left-6 top-1/2 h-[95%]
w-28 -translate-y-1/2 items-center justify-center rounded-md 
bg-slate-200/90`}
    >
      <ul className={`flex h-full w-full flex-col justify-evenly`}>
        {links.map((link) => {
          return (
            <li key={link.name}>
              <Link
                className="relative flex flex-col items-center justify-center text-gray-500 duration-200 hover:text-black"
                href={link.href}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
