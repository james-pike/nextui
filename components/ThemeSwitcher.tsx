// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/button";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
	
    <div>
		 <Button
     isIconOnly
    variant="flat"
    onClick={() => theme == 'dark' ? setTheme('light') : setTheme('dark')}
    className="flex items-center gap-2 px-3 py-2 rounded-md text-black dark:text-white hover:bg-gray-300 transition-colors duration-300"
  >
    {theme == 'dark' ? <FiSun /> : <FiMoon />}
 
  </Button>
  </div>
  )

};