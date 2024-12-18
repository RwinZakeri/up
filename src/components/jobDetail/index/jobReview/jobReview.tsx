import AnimateLine from "@/modules/animateLine/animateLine";
import SocialShare from "@/modules/social-share/socialShare";
import { Box } from "@mui/material";

const JobReview = () => {
  return (
    <Box className=" rounded-xl p-4  boxShadowJob mt-[30px] ">
      <Box>
        <h2 className="text-[22px]">بررسی اجمالی محصول</h2>
      </Box>
      <Box className="w-[30%]">
        <AnimateLine />
      </Box>
      <ul className="flex flex-col gap-y-3  ">
        <li className="">
          منتشر شده در:
          <span className="float-left text-[#696969]">جای خالی</span>
        </li>
        <li className="">
          جای خالی:
          <span className="float-left text-[#696969]">01</span>
        </li>
        <li className="">
          نوع کار:
          <span className="float-left text-[#696969]">پاره وقت</span>
        </li>
        <li className="">
          تجربه کاری:
          <span className="float-left text-[#696969]"> 3 سال</span>
        </li>
        <li className="">
          دسته بندی:
          <span className="float-left text-[#696969]"> مالی </span>
        </li>
        <li className="">
          جنسیت:
          <span className="float-left text-[#696969]">هردو </span>
        </li>
        <li className="">
          تاریخ:
          <span className="float-left text-[#696969]">1400.02.29 </span>
        </li>
        <li className="flex items-center justify-between">
          اشتراک گذاری پست:
          <SocialShare />
        </li>
      </ul>
    </Box>
  );
};

export default JobReview;
