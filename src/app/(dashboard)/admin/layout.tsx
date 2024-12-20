import { adminAccess } from "@/db/dashboard.db";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <body className="">
        <header className="w-full h-20 bg-blue-100"></header>
        <Box className="flex gap-5 h-[calc(100vh-80px)] overflow-hidden">
          <aside className="h-full overflow-y-scroll scrollbar-hidden w-[250px] shadow-2xl ">
            {adminAccess?.map((navItem) => {
              return (
                <Link
                  href={navItem.href}
                  className="w-full text-DarkGray h-10 box-content py-2 bg-mainWhite flex items-center hover:bg-red-200 gap-1.5 hover:bg-whiteSmoke transition-all duration-200 hover:text-highGreen group"
                >
                  <Box className="block text-black transition-all duration-200 text-[5px] group-hover:text-highGreen p-2 ">
                    {navItem.icon}
                  </Box>
                  {navItem.title}
                </Link>
              );
            })}
          </aside>
          <Box className="w-full">{children}</Box>
        </Box>
      </body>
    </>
  );
};

export default AdminLayout;
