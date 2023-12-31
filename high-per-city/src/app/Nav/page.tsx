"use client"
import Image from "next/image";
import React, { useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
 
export default function Nav() {

  let[category, setCategory]= useState("global");


  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className=" top-0 left-0 right-0 botttom-0  mx-auto max-w-screen from-blue-gray-900 to-blue-gray-800 px-4 py-3"
      >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <div className="flex">
          <span>
          <Image src="/favicon.ico"
          width={60}
          height={60}
          alt="logo header" />
        </span>
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="text-xl mr-4 ml-2 cursor-pointer py-1.5 hover:text-blue-gray-400"
        >
          HighperNews
        </Typography>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="text"
            color="white"
            label="Type here..."
            className="pr-20"
            onChange={(event)=>{
              setCategory(event.target.value);
            }}
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          
        </div>
      </div>
    </Navbar>
  );
}