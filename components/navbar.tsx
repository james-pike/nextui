'use client'

import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  DropdownItem,
  Dropdown,
  DropdownMenu,
  DropdownTrigger
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { usePathname } from "next/navigation.js";
import { ThemeSwitcher } from "./ThemeSwitcher";
import LoginButton from "./loginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logoutbutton";
import {Avatar} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const path = usePathname();


  const menuItems = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Services", route: "/services" },
    { name: "Portfolio", route: "/portfolio" },
    { name: "Contact", route: "/contact" },
 
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the mobile menu when a menu item is clicked
  };

    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();


  return (
    <Navbar
    
    maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      shouldHideOnScroll
      isBordered
      
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
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <Link href="/">
          <p className="font-bold text-black dark:text-white ">Webdev Studio</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive={path === item.route}>
            <Link
              color={
                path == item.route
                  ? "primary"
                  : "foreground"
              }
              className="w-full"
              href={item.route}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="center" className="items-center">

 
 
</NavbarContent>

      <NavbarContent justify="end">
        <div className="hidden lg:block"><ThemeSwitcher/></div>
      
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
         {isAuthenticated == false ? 
          <LoginButton/>
          :
          <Avatar isBordered radius="sm" color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />}
          {/* <Button as={Link} color="primary" href="#" variant="flat">
            Sign In
          </Button> */}
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <NavbarMenu>
 
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index} isActive={path === item.route}>
              <Link
                color={
                  path == item.route ?
                     "primary"
                    : "foreground"
                }
                className="w-full"
                href={item.route}
                size="lg"
                onClick={handleMenuItemClick}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}

<ThemeSwitcher></ThemeSwitcher>
        </NavbarMenu>
        
      )}
    </Navbar>
  );
}
