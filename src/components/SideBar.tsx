"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { motion, useInView } from "framer-motion";
import { Separator } from "./ui/separator";
import Link from "next/link";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const list = [
  {
    group: "개발",
    childrens: [
      { title: "React", value: "react" },
      { title: "NextJS", value: "nextjs" },
      { title: "NestJS", value: "nestjs" },
      { title: "Flutter", value: "flutter" },
      { title: "Terraform", value: "terraform" },
    ],
  },
  { group: "그외", childrens: [{ title: "MacOS", value: "macos" }] },
];

export const Sidebar = () => {
  const ref = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const isInView = useInView(ref, { once: true });

  const canVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <>
      <div className="fixed bottom-14 right-5 mobile-menu block md:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="w-16 h-16 rounded-full"
            >
              <Menu size="24" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="border-none">
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
            </DrawerHeader>
            <ul>
              <h3>개발</h3>
              <ul>
                <li>React</li>
                <li>NextJS</li>
                <li>NestJS</li>
                <li>Flutter</li>
                <li>Terraform</li>
              </ul>
            </ul>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="secondary">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <motion.nav
        ref={ref}
        className="hidden md:block w-full px-4"
        variants={canVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <div className="sticky top-32">
          <div className="w-20, h-20">
            <Avatar>
              <AvatarImage
                className="w-20 h-20 rounded-full"
                src="/images/avatar.jpg"
                alt="avatar"
              />
              <AvatarFallback />
            </Avatar>
          </div>

          <ul className="w-full py-8 text-lg">
            {list.map(({ group, childrens }) => {
              if (childrens.length > 0) {
                return (
                  <div key={group}>
                    <h4 className="text-xl font-bold">{group}</h4>
                    <ul className="pl-4 my-2">
                      {childrens.map(({ title, value }) => {
                        return (
                          <Link
                            key={title}
                            className="w-full h-full"
                            href={`/category/${value}`}
                          >
                            <li className="py-1.5 cursor-pointer">{title}</li>
                          </Link>
                        );
                      })}
                    </ul>
                    <Separator className="my-2" />
                  </div>
                );
              }
            })}
          </ul>
        </div>
      </motion.nav>
    </>
  );
};
