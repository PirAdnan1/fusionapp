// hooks
import { useState } from "react";
import { useRouter } from "next/router";

// util
import clsx from "clsx";
import cn from "@/utils/cn";

// components
import Container from "./Container";
import Link from "next/link";

// hooks
import useIsMobile from "@/hooks/useIsMobile";

// icons
import Close from "@/assets/Close";
import Burger from "@/assets/Burger";
import Logo from "@/assets/Logo";

export default function Navbar() {
  const isMobile = useIsMobile(1024);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="bg-black/55">
      <Container>
        <div className="flex  lg:text-white justify-between items-center 2xl:py-7 py-4 px-4 lg:px-10 shadow-md">
          <Link href="#">
            <Logo className="text-xs pl-3" />
          </Link>
          <button
            onClick={() => setIsMenuOpen(true)}
            className={clsx(
              "pb-4 text-primary transition-colors hover:text-cool-grey-800",
              {
                hidden: !isMobile,
              }
            )}
          >
            <Burger className="text-2xl" />
          </button>
          <div
            className={clsx(
              "flex flex-grow transition-transform duration-500",
              {
                "fixed inset-0 z-50 translate-x-[100%] bg-white": isMobile,
                "!translate-x-0": isMenuOpen,
              }
            )}
          >
            <div
              className={clsx({
                "flex flex-grow items-center justify-between": !isMobile,

                "mx-auto flex max-w-sm flex-grow flex-col gap-12 text-2xl":
                  isMobile,
              })}
            >
              <div
                className={clsx("flex h-[100px] items-end justify-between", {
                  hidden: !isMobile,
                })}
              >
                <Logo className="text-xs pl-2" />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="pb-4 pr-4 text-primary transition-colors hover:text-cool-grey-800"
                >
                  <Close />
                </button>
              </div>
              <ul
                className={clsx(
                  "flex items-center lg:gap-16 gap-10 lg:ml-auto",
                  {
                    "flex-col": isMobile,
                  }
                )}
              >
                <li className="hover:text-primary text-xs text-white/90 font-bold">
                  <Link
                    href="/"
                    className={cn("border-bottom-hover pb-2", {
                      "text-primary border_on_clicked font-medium ":
                        router.pathname == "/",
                    })}
                  >
                    Home
                  </Link>
                </li>
                <li className="hover:text-primary text-xs text-white/90 font-bold">
                  <Link
                    href="/Anwaltskanzlei"
                    className={cn("border-bottom-hover pb-2", {
                      "text-primary border_on_clicked font-medium ":
                        router.pathname == "/Anwaltskanzlei",
                    })}
                  >
                    BackedAI
                  </Link>
                </li>
                <li className="hover:text-primary text-xs text-white/90 font-bold">
                  <Link
                    href="/iNSOLVENZRECHT"
                    className={cn("border-bottom-hover pb-2", {
                      "text-primary border_on_clicked font-medium ":
                        router.pathname == "/iNSOLVENZRECHT",
                    })}
                  >
                    Our Story
                  </Link>
                </li>
                <li className="hover:text-primary text-xs text-white/90 font-bold">
                  <Link
                    href="/team"
                    className={cn("border-bottom-hover pb-2", {
                      "text-primary border_on_clicked font-medium ":
                        router.pathname == "/team",
                    })}
                  >
                    New NFTs
                  </Link>
                </li>
                <li className="hover:text-primary text-xs text-white/90 font-bold">
                  <Link
                    href="/Kontakt"
                    className={cn("border-bottom-hover pb-2", {
                      "text-primary border_on_clicked font-medium ":
                        router.pathname == "/Kontakt",
                    })}
                  >
                    Best Creations
                  </Link>
                </li>
                <li className="hover:text-primary text-xs text-white/90 font-bold">
                  <Link
                    href="/Kontakt"
                    className={cn("border-bottom-hover pb-2", {
                      "text-primary border_on_clicked font-medium ":
                        router.pathname == "/Kontakt",
                    })}
                  >
                    Latest News
                  </Link>
                </li>
              </ul>
              <div
                className={clsx("flex justify-center gap-4 lg:ml-auto", {
                  "w-full mx-auto  max-w-sm flex-col": isMobile,
                })}
              >
                <button className="text-primary px-4 py-2 rounded-full border border-primary hover:bg-primary hover:text-black">
                  Sign Up
                </button>
                <button className="bg-primary px-4 py-2 rounded-full border border-primary hover:bg-transparent hover:text-primary">
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
