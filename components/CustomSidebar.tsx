"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { FaCar } from "react-icons/fa";
import { useDashboard } from "@/hooks/useDashboard";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { sectionAtom } from "@/store";

export function CustomSidebar({children}: {children: React.ReactNode}) {
  const [section,setSection] = useAtom(sectionAtom)

  const links = [
    {
      label: "Available",
      href: "#",
      icon: (
        <FaCar className="text-neutral-700 dark:text-neutral-200 h-4 w-4 flex-shrink-0" />
      ),
    },
    {
      label: "Sold Cars",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Manage",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Exit",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  let handleChange= (label)=>{
    console.log(label);
    setSection(label)
    
  }
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={cn(
          " border min-h-screen h-full  border-neutral-200 dark:border-neutral-700 overflow-hidden",
          "h-full w-auto"
        )}
      >
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10 h-screen">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              <div className="mt-8 gap-2 flex flex-col gap-2">
                {links?.map((link, idx) => (
                  <div
                    key={idx}
                    className={`${
                      section === link.label &&
                      "bg-neutral-200 rounded-lg p-2 dark:bg-neutral-700"
                    }`}
                    onClick={()=>handleChange(link.label)}
                  >
                    <SidebarLink link={link} />
                  </div>
                ))}
              </div>
            </div>
          </SidebarBody>

        </Sidebar>
      
      </div>
      {children}
    </div>
  );
}

export default CustomSidebar;
