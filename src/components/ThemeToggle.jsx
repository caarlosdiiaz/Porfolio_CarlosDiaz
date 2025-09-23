import { Moon, Sun } from 'lucide-react';
import React, { useEffect } from 'react'
import { cn } from '../lib/utils';

export const ThemeToggle = () => {
  // Estado para manejar el tema actual
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  // Recoger del localstorage el tema guardado y aplicarlo
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme == "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
    else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, [])

  // Cambiar el tema al hacer click en el botón
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }

  // Renderizar el botón con el icono correspondiente
  return (
    <button
      onClick={toggleTheme}
      className={cn("fixed max-sm:hidden top-5 right-5 rounded-full p-2 rounded-full transition-colors durantion-33 z-50",
        "focus:outline-hidden cursor-pointer")}>
      {isDarkMode ?
        <Sun className='h-6 w-6 text-yellow-300'/>
        :
        <Moon className='h-6 w-6 text-blue-900'/>}
    </button>
  )
}

export default ThemeToggle