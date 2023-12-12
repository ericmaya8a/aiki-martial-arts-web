"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  semanticColors,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { constants, urls } from "./constants";
import { Logo } from "./components/Logo";

const menuItems: { text: string; url: string }[] = [
  { text: "Acerca de", url: urls.ABOUT },
  { text: "Sensei", url: urls.SENSEI },
  { text: "Horarios", url: urls.SCHEDULE },
];

export function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Navbar
      maxWidth="full"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={`${isMenuOpen ? "Close" : "Open"} menu`}
          className="sm:hidden"
          icon={isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        />
        <NavbarBrand>
          <Logo className="sm:mr-1" size="xs" isLink />
          <p className="hidden font-bold text-inherit sm:block">
            <Link href={urls.HOME}>{constants.appName}</Link>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map(({ text, url }) => (
          <NavbarItem key={text} isActive={pathname.includes(url)}>
            <Link
              href={url}
              style={{
                color: pathname.includes(url)
                  ? semanticColors.light.primary[500]
                  : undefined,
              }}
            >
              {text}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitcher />
      </NavbarContent>

      {isMenuOpen ? (
        <NavbarMenu>
          {menuItems.map(({ text, url }, index) => (
            <NavbarMenuItem
              key={`${text}-${index}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link
                className="w-full"
                href={url}
                style={{
                  color: pathname.includes(url)
                    ? semanticColors.light.primary[500]
                    : undefined,
                }}
              >
                {text}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      ) : null}
    </Navbar>
  );
}
