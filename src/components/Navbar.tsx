"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Новости",
    href: "/community/news",
    description: "Последние новости сообщества.",
  },
  {
    title: "Рецензии",
    href: "/community/reviews",
    description: "Отзывы и рецензии на произведения.",
  },
  {
    title: "Анонсы",
    href: "/community/announcements",
    description: "Анонсы новых произведений и событий.",
  },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <nav className="bg-blue-600 text-white p-4 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Логотип и название */}
        <div className="flex items-center space-x-2">
          <Image
            src="/img/logo.png"
            alt="Логотип сайта"
            width={32}
            height={32}
            priority
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold">Novera</span>
        </div>

        {/* Навигационное меню для десктопа */}
        <div className="hidden md:flex items-center space-x-6 justify-center flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink
                        asChild
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/works"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Каталог
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Откройте для себя лучшие произведения.
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/works/authors" title="Авторское">
                      Оригинальные работы.
                    </ListItem>
                    <ListItem href="/works/fanfics" title="Фанфики">
                      Фанфики по разным фандомам.
                    </ListItem>
                    <ListItem href="/works/chinese" title="Китайские">
                      Китайские ранобэ и фанфики.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Сообщество</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/search" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Поиск
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Кнопки для десктопа */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-blue-700 transition"
            aria-label="Переключить тему"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <Link
            href="/auth/login"
            className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            Войти / Регистрация
          </Link>
        </div>

        {/* Кнопка мобильного меню */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-blue-600 p-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="/works"
              className="hover:text-gray-200 transition"
              onClick={toggleMobileMenu}
            >
              Каталог
            </Link>
            <Link
              href="/community"
              className="hover:text-gray-200 transition"
              onClick={toggleMobileMenu}
            >
              Сообщество
            </Link>
            <Link
              href="/search"
              className="hover:text-gray-200 transition"
              onClick={toggleMobileMenu}
            >
              Поиск
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-blue-700 transition flex items-center space-x-2"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
              <span>Переключить режим</span>
            </button>
            <Link
              href="/auth/login"
              className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 transition"
              onClick={toggleMobileMenu}
            >
              Войти / Регистрация
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
