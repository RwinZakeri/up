import DreamJobCard from "@/modules/dreamJobCard/dreamJobCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { Box } from "@mui/material";
import Link from "next/link";

const DreamJobCardContainer = () => {
  return (
    <Box className="mt-12 max-w-[1440px] mx-auto px-4">
      <DreamJobCard />
      <Link
        className="block w-fit mx-auto relative group text-center text-lightGreen after:content-[''] after:block after:absolute after:w-full after:bg-highGreen after:rounded-full after:left-0 after:h-0.5 my-8"
        href={"/"}
      >
        همه دسته ها را مرور کنید{" "}
        <ArrowBackIosNewIcon
          sx={{ fontSize: 15 }}
          className="group-hover:-translate-x-3 transition-all duration-300"
        />
      </Link>
    </Box>
  );
};

export default DreamJobCardContainer;
