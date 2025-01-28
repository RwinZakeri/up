"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export interface pathType {
  title: string;
  address: string;
}

const PageHeadPath = ({ title, path }: { title: string; path: pathType[] }) => {
  return (
    <Box>
      <Typography className="text-2xl font-bold flex items-center gap-2">
        {title} |{" "}
        {path?.map((item, index) => {
          return (
            <Box className="flex items-center" key={index + 1}>
              <Typography className="text-lg text-lightTextGray hover:text-lightGreen transition-all h-full flex items-center mt-1">
                <Link href={item.address}>{item.title}</Link>
              </Typography>
              {index + 1 !== path.length && (
                <ArrowBackIosIcon className="text-sm text-lightTextGray" />
              )}
            </Box>
          );
        })}
      </Typography>
    </Box>
  );
};

export default PageHeadPath;
