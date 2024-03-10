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
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icons1.jsx";



import {Avatar} from "@nextui-org/react";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const path = usePathname();

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} height={undefined} width={undefined} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} height={undefined} width={undefined} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} height={undefined} width={undefined} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} height={undefined} width={undefined} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} height={undefined} width={undefined} />,
    server: <Server className="text-success" fill="currentColor" size={30} height={undefined} width={undefined} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} height={undefined} width={undefined} />,
  };


  const menuItems = [
    { name: "Home", route: "/" },
    { name: "Services", route: "/services" },
    { name: "About", route: "/about" },
 
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
      isBordered
      // shouldHideOnScroll
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
     
        <NavbarBrand>
          <AcmeLogo   />
          <Link href="/">
          <p className="font-bold text-xl text-black dark:text-white ">Webdev.ca</p>
          </Link>
        </NavbarBrand>

       
      </NavbarContent>

      <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-large"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
                
              >
                Features
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
    
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}
              href="/webdesign"
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

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

 

      <NavbarContent justify="end">
        <div className="hidden lg:block"><ThemeSwitcher/></div>
        <Button color="primary">
        Get Started
      </Button>

      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
  
        
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
