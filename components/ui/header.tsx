"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-black/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.black),theme(colors.black),theme(colors.black))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
      {/* Site branding */}
          <div className="flex flex-1 items-center">
          <Logo />
          </div>

          {/* Desktop sign-in links */}
          <ul className="flex items-center justify-end w-full gap-3"> {/* Ensure alignment */}
            <li className="mr-2"> {/* Margin for consistent spacing */}
              <Link
                href="/signin"
                className="btn-sm relative bg-green-700 text-white rounded-2xl px-3 py-2 hover:bg-green-500 transition duration-200"
              >
                Beställ Online
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
