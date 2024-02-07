"use client";

import React from "react";
import { ModeToggle } from "./ModeToggle";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { Button } from "./ui/button";
import Link from "next/link";

export const Header = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 bg-[#dfdfdf30] dark:bg-[#20202320] backdrop-blur-[10px] z-[2]">
      <div className="flex justify-between items-center py-2 px-4 ml-auto mr-auto w-full max-w-[1400px]">
        <Link href="/">
          <h1 className="text-xl font-bold">GennYoon Blog</h1>
        </Link>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="relative pr-20"
            onClick={() => setOpen(true)}
          >
            <span className="hidden lg:inline-flex">Search Post...</span>
            <span className="inline-flex lg:hidden">Search...</span>
            <kbd className="pointer-events-none absolute right-[16px] top-[9px] hidden h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[12px] font-medium opacity-100 sm:flex">
              <span className="text-lg">⌘</span>K
            </kbd>
          </Button>
          <ModeToggle />
        </div>

        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Categories">
              <CommandItem onSelect={() => console.log("!!!")}>
                React
              </CommandItem>
              <CommandItem>NextJS</CommandItem>
              <CommandItem>NestJS</CommandItem>
              <CommandItem>Terraform</CommandItem>
              <CommandItem>AWS</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Tags">
              <CommandItem>MacOS</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    </header>
  );
};