import { Box, Typography } from "@mui/material";
import Image from "next/image";
import about1 from "@/assets/images/about-img1.jpg";
import about2 from "@/assets/images/about-img2.jpg";
import AnimateLine from "@/modules/animateLine/animateLine";
const AboutArea = () => {
  return (
    <Box>
      <Box className="md:flex-row flex flex-col gap-y-5 justify-center items-center gap-x-5 px-6 py-7  mt-[30px]">
        <Box className="md:w-[45%] flex justify-center items-center gap-x-3">
          <Box>
            <Image className="rounded-[100px]" alt="about" src={about1}></Image>
          </Box>
          <Box>
            <Image className="rounded-[100px]" alt="about" src={about2}></Image>
          </Box>
        </Box>
        <Box className="md:w-[45%]">
          <Box>
            <Typography className="text-2xl font-medium">شرح فرصت </Typography>
          </Box>
          <Box className="w-[10%]">
            <AnimateLine />
          </Box>
          <Box className="text-[#696969]">
            <Typography className="mb-[15px] leading-[26px]">
              لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
              ایپسوم به مدت 40 سال استاندارد صنعت بوده است.لورم ایپسوم به سادگی
              ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال
              استاندارد صنعت بوده است.لورم ایپسوم به سادگی ساختار چاپ و متن را
              در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده
              است.لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
              ایپسوم به مدت 40 سال استاندارد صنعت بوده است.لورم ایپسوم به سادگی
              ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال
              استاندارد صنعت بوده است.
            </Typography>
            <Typography className="leading-[26px]">
              لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
              ایپسوم به مدت 40 سال استاندارد صنعت بوده است.لورم ایپسوم به سادگی
              ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال
              استاندارد صنعت بوده است.لورم ایپسوم به سادگی ساختار چاپ و متن را
              در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutArea;
