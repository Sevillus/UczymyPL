"use client";
import React, {useEffect, useState} from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Profile from "./Profile";
import MenuIcon from "@mui/icons-material/Menu";
import EventNoteIcon from "@mui/icons-material/EventNote";
import GroupIcon from "@mui/icons-material/Group";
import HistoryIcon from "@mui/icons-material/History";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import cn from "../utils/cn";

const Header = ({ session }) => {
  const name = session?.user.name;
  const img = session?.user.image;
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname()
    useEffect(() => {
        const header = document.querySelector("header");

        function handleScroll() {
            if (window.scrollY > 0 && !scrolled) {
                setScrolled(true);
                header.classList.add("-top-12");
                header.classList.remove("top-0");
            } else if (window.scrollY === 0 && scrolled) {
                setScrolled(false);
                header.classList.add("top-0");
                header.classList.remove("-top-12");
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

  return (
    <header className={"fixed ease-out duration-300 top-0 lg:relative z-50 w-full h-24 flex flex-col  lg:flex-row lg:justify-between bg-slate-700  text-white  padding-x  lg:py-4"}>
      <div className={"flex-between mt-2 lg:mt-0"}>
        <Logo />
        <MenuIcon className={"lg:hidden"}/>
      </div>
      <div className={"hidden lg:flex justify-between items-center gap-10 "}>
        <Navbar />
        <Profile name={name} img={img} />
      </div>
      <div
        className={" lg:hidden w-full flex-between padding-x py-2 border-t-2"}
      >
          <Link href={"/teacher"}><HomeIcon className={cn(pathname==="/teacher"?"text-blue-500":"")} /></Link>
          <Link href={"/teacher/schedule"}><EventNoteIcon className={cn(pathname==="/teacher/schedule"?"text-blue-500":"")} /></Link>
          <Link href={"/teacher/students"}><GroupIcon className={cn(pathname==="/teacher/students"?"text-blue-500":"")} /></Link>
          <Link href={"/teacher/history"}><HistoryIcon className={cn(pathname==="/teacher/history"?"text-blue-500":"")} /></Link>
      </div>
    </header>
  );
};
export default Header;
