"use client";

import Link from "next/link";
import { navLinks } from "@/constants/routesGenerator";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useUser } from "@/context/UserContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <header className="text-white py-3 backdrop-blur-2xl bg-white/25 sticky top-0 z-10">
      <div className="flex items-center justify-between px-2 max-w-6xl mx-auto">
        <button className="md:w-[25%] lg:hidden p-2 flex items-center justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="p-[6px] md:px-3 md:py-1 rounded-md text-5xl md:text-6xl" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center my-3 justify-center">
                    <h2 className="font-semibold text-3xl text-yellow-500">
                      HM Masum
                    </h2>
                  </div>
                </SheetTitle>

                <SheetDescription className="mt-5 flex flex-col w-full items-center justify-center gap-5">
                  {navLinks.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className={pathname == item.path ? "text-yellow-500" : ""}
                    >
                      {item.title}
                    </Link>
                  ))}
                </SheetDescription>
              </SheetHeader>
              <SheetFooter></SheetFooter>
            </SheetContent>
          </Sheet>
        </button>

        <Link href="/" className="flex items-center w-[25%]">
          <h2 className="font-semibold md:text-2xl text-yellow-500">
            HM Masum
          </h2>
        </Link>

        {/* nav links */}
        <ul className="hidden lg:flex items-center justify-center space-x-5">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={pathname == item.path ? "text-yellow-500" : ""}
            >
              {item.title}
            </Link>
          ))}
        </ul>

        <div className="md:w-[25%] flex items-center justify-center md:justify-end gap-3 md:gap-5">
          {user ? (
            <ProfileDropdown />
          ) : (
            <Link href={`/login`}>
              <Button variant="outline" className="bg-yellow-500 border-0">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
