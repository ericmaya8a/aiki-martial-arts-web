"use client";

import { Switch, SwitchThumbIconProps } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function renderThumbIcon({ className, isSelected }: SwitchThumbIconProps) {
  return <div className={className}>{isSelected ? <FaSun /> : <FaMoon />}</div>;
}

export function ThemeSwitcher({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isSelected = theme === "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={className}>
      <Switch
        value={theme}
        isSelected={isSelected}
        onValueChange={(isSelected) => setTheme(isSelected ? "light" : "dark")}
        size="lg"
        color="primary"
        thumbIcon={renderThumbIcon}
      />
    </div>
  );
}
