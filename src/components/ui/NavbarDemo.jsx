"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive} className="bg-black/80 backdrop-blur-sm rounded-full p-2">
        <MenuItem 
          setActive={setActive} 
          active={active} 
          item="Experience"
          className="text-white/80 hover:text-white"
        >
          <div className="flex flex-col space-y-4 text-sm bg-white/90 rounded-lg p-4 border border-white/10">
            <HoveredLink href="/web-dev" className="text-white/80 hover:text-white">Backend Development</HoveredLink>
            <HoveredLink href="/interface-design" className="text-white/80 hover:text-white">Frontend Development</HoveredLink>
            <HoveredLink href="/seo" className="text-white/80 hover:text-white">Problem Solving</HoveredLink>
            <HoveredLink href="/branding" className="text-white/80 hover:text-white">Open Source</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem 
          setActive={setActive} 
          active={active} 
          item="Projects"
          className="text-white/80 hover:text-white"
        >
          <div className="flex flex-col space-y-4 text-sm bg-white/90 rounded-lg p-4 border border-white/10">
            <HoveredLink href="/project1" className="text-white/80 hover:text-white">Project 1</HoveredLink>
            <HoveredLink href="/project2" className="text-white/80 hover:text-white">Project 2</HoveredLink>
            <HoveredLink href="/project3" className="text-white/80 hover:text-white">Project 3</HoveredLink>
            <HoveredLink href="/project4" className="text-white/80 hover:text-white">Project 4</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem 
          setActive={setActive} 
          active={active} 
          item="Contact"
          className="text-white/80 hover:text-white"
        >
          <div className="flex flex-col space-y-4 text-sm bg-white/90 rounded-lg p-4 border border-white/10">
            <HoveredLink href="https://linkedin.com/in/your-profile" className="text-white/80 hover:text-white">LinkedIn</HoveredLink>
            <HoveredLink href="mailto:your.email@gmail.com" className="text-white/80 hover:text-white">Gmail</HoveredLink>
            <HoveredLink href="https://wa.me/yourwhatsappnumber" className="text-white/80 hover:text-white">WhatsApp</HoveredLink>
            <HoveredLink href="https://instagram.com/your-profile" className="text-white/80 hover:text-white">Instagram</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
