import Link from "next/link";
import { NavigationLink } from "../types";
import { BellAlertIcon } from "@heroicons/react/24/outline";
type Props = {
  selected: string;
  links: NavigationLink[];
  className: string;
};
const user = {
  admin: false,
};

export const DesktopNavigation = ({ selected, links, className }: Props) => {
  return (
    <nav
      className={`${className} fixed left-6 top-1/2 h-[95%]
w-28 -translate-y-1/2   rounded-md
bg-slate-200/90`}
    >
      <ul className={`flex h-full w-full flex-col `}>
        {links.map((link) => {
          return (
            <li key={link.name}>
              {link.name.includes("Reports") && user.admin && (
                <Link
                  className="relative mb-[55px] flex flex-col items-center justify-center text-center text-gray-500 duration-200 hover:text-black"
                  href={link.href}
                >
                  {link.name.includes("Reports") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  ) : (
                    link.icon
                  )}
                  <span>{link.name}</span>
                </Link>
              )}
              {!link.name.includes("Reports") && (
                <Link
                  className="relative mb-[55px] flex flex-col items-center justify-center text-center text-gray-500 duration-200 hover:text-black"
                  href={link.href}
                >
                  {link.name.includes("Reports") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  ) : (
                    link.icon
                  )}
                  <span>{link.name}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
