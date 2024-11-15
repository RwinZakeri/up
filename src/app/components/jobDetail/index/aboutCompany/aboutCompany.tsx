import AnimateLine from "@/modules/animateLine/animateLine";
import { Box, Button } from "@mui/material";
import Link from "next/link";

const AboutCompany = () => {
  return (
    <Box className="  p-4 shadow-slate-400 boxShadowJob mt-[30px]">
      <Box>
        <h2 className="text-[22px]"> درباره شرکت </h2>
      </Box>
      <Box className="w-[30%]">
        <AnimateLine />
      </Box>
      <ul className="flex flex-col gap-y-3  ">
        <li className="">
          دسته بندی ها:
          <span className="float-left text-[#696969]">کاربرد</span>
        </li>
        <li className="">
          ایجاد:
          <span className="float-left text-[#696969]">1986</span>
        </li>
        <li className="">
          کارمندان:
          <span className="float-left text-[#696969]"> 75 </span>
        </li>
        <li className="">
          موقعیت:
          <span className="float-left text-[#696969]"> نیویورک</span>
        </li>
        <li className="">
          شماره تلفن:
          <span className="float-left text-[#696969]"> +44 7655 897987</span>
        </li>
        <li className="">
          ایمیل:
          <span className="float-left text-[#696969]">هردو </span>
        </li>
        <li className="">
          تاریخ:
          <span className="float-left text-[#696969]"> hello@zoben.com</span>
        </li>
      </ul>
      <Box className="flex justify-between mt-[15px]">
        <h3>شبکه اجتماعی:</h3>
        <ul className="flex justify-center gap-x-2">
          <li>
            <Link href="">فیسبئک</Link>
          </li>
          <li>
            <Link href="">اینستاگرام</Link>
          </li>
          <li>
            <Link href="">توییتر</Link>
          </li>
          <li>
            <Link href="">لینکدین</Link>
          </li>
        </ul>
      </Box>
      <Box className="mt-[20px]">
        <Button className="bg-lightGreenXXs text-lightGreen py-[10px] px-[30px] text-[13px] w-full transition-all duration-[500ms] hover:bg-lightGreen hover:text-white">www.zobencontact.com</Button>
      </Box>
    </Box>
  );
};

export default AboutCompany;
