import myImage from "@/assets/images/user-img/user-img1.jpg";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const PricingPlan = () => {
  return (
    <Box className="px-[50px] py-[70px]">
      <Box className="flex justify-center items-center gap-x-4 flex-wrap gap-y-7">
        <Box className="lg:w-[45%] ">
          <Typography variant="h4" gutterBottom>
            بهترین روش های <b className="text-lightGreen">قیمت گذاری</b>
          </Typography>
          <Box className="mb-4 w-24 h-1 bg-gray-400" />
          <Typography variant="body1" className="max-w-[38rem]" paragraph>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد
          </Typography>
          <ul className="list-none flex space-x-3">
            <li>
              <Image
                src={myImage}
                alt="User 1"
                width={50}
                height={50}
                className="rounded-full"
              />
            </li>
            <li>
              <Image
                src={myImage}
                alt="User 2"
                width={50}
                height={50}
                className="rounded-full"
              />
            </li>
            <li>
              <Image
                src={myImage}
                alt="User 3"
                width={50}
                height={50}
                className="rounded-full"
              />
            </li>
            <li>
              <Image
                src={myImage}
                alt="User 4"
                width={50}
                height={50}
                className="rounded-full"
              />
            </li>
            <li>
              <Image
                src={myImage}
                alt="User 5"
                width={50}
                height={50}
                className="rounded-full"
              />
            </li>
          </ul>
          <Typography variant="h6" className="mt-2">
            2000+ کارفرمای برتر
          </Typography>
        </Box>
        <Box className="lg:w-[45%] flex justify-center items-center gap-x-4">
          <Box className="py-[50px] px-[30px] rounded-[20px] boxShadowJob text-center">
            <Box className="">
              <h2 className="text-[24px] pb-2">طرح توسعه</h2>
              <span className="text-[#696969] text-[14px] ">بسته ماهانه</span>
            </Box>
            <h3 className="lg:text-[37px] text-[#ff5b4a] py-5">
              250 تومان
              <span className="text-[18px] text-[#696969]">/ماه</span>
            </h3>
            <ul className="text-[15px] text-[#696969] flex flex-col gap-y-3">
              <li>8 فرصت ویژه</li>
              <li>20 ماهنامه پست کاری</li>
              <li>نمایش به مدت 30 روز</li>
              <li>پشتیبانی 24/7</li>
              <li>سرویس کامل</li>
            </ul>
            <Box className="mt-4">
              <Button className="bg-[#d5f3e7] text-[#00CA99] py-[12px] px-[30px] rounded-[5px] text-center">
                خرید کن{" "}
              </Button>
            </Box>
          </Box>

          <Box className="py-[50px] px-[30px] rounded-[20px] boxShadowJob text-center">
            <Box className="">
              <h2 className="text-[24px] pb-2">طرح توسعه</h2>
              <span className="text-[#696969] text-[14px] ">بسته ماهانه</span>
            </Box>
            <h3 className="lg:text-[37px] text-[#ff5b4a] py-5">
              250 تومان
              <span className="text-[18px] text-[#696969]">/ماه</span>
            </h3>
            <ul className="text-[15px] text-[#696969] flex flex-col gap-y-3">
              <li>8 فرصت ویژه</li>
              <li>20 ماهنامه پست کاری</li>
              <li>نمایش به مدت 30 روز</li>
              <li>پشتیبانی 24/7</li>
              <li>سرویس کامل</li>
            </ul>
            <Box className="mt-4">
              <Button className="bg-[#d5f3e7] text-[#00CA99] py-[12px] px-[30px] rounded-[5px] text-center">
                خرید کن{" "}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingPlan;
