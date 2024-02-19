"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import { Link2Icon, LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function HeroSection() {
  const ref = React.useRef(null);

  const isInView = useInView(ref, { once: true });

  const canVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <motion.section ref={ref} className="w-full mb-12" variants={canVariants} initial="initial" animate={isInView ? "animate" : "initial"}>
      <div className="flex  gap-8 px-4">
        <div>
          <Avatar>
            <AvatarImage className="w-20 h-20 rounded-full" src="/images/avatar.jpg" alt="avatar" />
            <AvatarFallback />
          </Avatar>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#036CDA] to-[#15F5FD]">Hello, I&apos;m</h1>
          <h1 className="text-2xl font-bold mb-8">
            <TypeAnimation sequence={["FullStack Developer", 1000, "use NeoVim IDE", 1000, "GennYoon", 1000]} wrapper="span" speed={50} repeat={Infinity} />
          </h1>
        </div>
      </div>
      <div className="flex gap-1.5 justify-start px-4">
        <Button asChild variant="outline" size="icon" className="rounded-full">
          <a href="https://portfolio.gennyoon.net/" target="_blank">
            <Link2Icon />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon" className="rounded-full">
          <a href="https://www.linkedin.com/in/gennyoon/" target="_blank">
            <LinkedInLogoIcon />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon" className="rounded-full">
          <a href="https://github.com/gennyoon" target="_blank">
            <GitHubLogoIcon />
          </a>
        </Button>
      </div>
    </motion.section>
  );
}
