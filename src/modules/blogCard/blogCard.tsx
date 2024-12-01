import myImg from "@/assets/images/blog/blog-img1.jpg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
const BlogCard = () => {
  return (
    <Box className="group w-full md:w-[30%]">
      <Box className="w-full rounded-xl relative mb-10 ">
        <Image
          src={myImg}
          className="w-full rounded-xl group-hover:-rotate-1 group-hover:rounded-none  transition-all duration-500"
          width={450}
          height={450}
          alt="blog"
        />
        <Box className="px-4 py-1.5 absolute -bottom-3.5 hover:bg-black transition-all duration-300 cursor-pointer right-4 z-40 text-sm w-fit bg-highGreen rounded-2xl text-center text-mainWhite">
          هیئت مدیره کار
        </Box>
      </Box>

      <Box>
        <Box className="flex items-center text-gray-500 gap-5">
          <Typography> تاریخ: 14 دی 1400</Typography>
          <Typography> نظر: 2</Typography>
        </Box>
        <Typography className="font-bold mt-2.5 md:text-lg lg:text-xl max-w-96 group-hover:text-highGreen transition-all duration-300">
          چگونه یک روزمه کامل بسازیم که توجه را به خود جلب کند
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogCard;
