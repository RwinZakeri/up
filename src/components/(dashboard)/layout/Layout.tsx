"use client";
import { DashboardItemsType } from "@/types/type";
import { Box } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

const DashBaordLayout = ({
  children,
  access,
}: {
  children: ReactNode;
  access: DashboardItemsType[];
}) => {
  return (
    <>
      <Box className="grid col gap-0 bg-blue-400">
        <Box className="h-[calc(100vh-80px)] bg-black sticky overflow-hidden w-1/5 top-20  shrink-0">
          <aside className="h-full overflow-y-scroll overflow-x-auto bg-blue-500 oscrollbar-hidden w-[320px] shadow-2xl">
            {access?.map((navItem) => {
              return (
                <Link
                  href={navItem.href}
                  className="w-full text-DarkGray  p-2 h-16 bg-mainWhite flex items-center hover:bg-red-200 gap-1.5 hover:bg-whiteSmoke transition-all duration-200 hover:text-highGreen group"
                >
                  <Box className="block  transition-all duration-200 text-[5px] group-hover:text-highGreen p-2 ">
                    {navItem.icon}
                  </Box>
                  {navItem.title}
                </Link>
              );
            })}
          </aside>
        </Box>

        <Box className="w-4/5 mx-auto h-[500vh] bg-red-400 p-7">{children}</Box>
      </Box>
    </>
  );
};

export default DashBaordLayout;
