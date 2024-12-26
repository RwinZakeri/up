// React and Next.js imports
import Image from "next/image";

// Material UI imports
import { Box, Container, Typography } from "@mui/material";

// Custom components
import { default as EmployersListingCardContainer } from "@/components/employers-listing/employersListingCompanyCardContainer";
import EmployersListingMasterCardContainer from "@/components/employers-listing/employersListingMasterCardContainer";
import InnerTitle from "@/components/jobs/index/innerTitle/innterTitle";

// Modules
import AnimateLine from "@/modules/animateLine/animateLine";
import AnimateTitle from "@/modules/animateTitle/animateTitle";
import UsersProfile from "@/modules/usersProfile/usersProfile";

// Assets
import plantAtOfficeImage from "@/assets/images/career/career-img1.jpg";
import menAndWomen from "@/assets/images/career/career-img2.jpg";
import mensAtWorkImage from "@/assets/images/career/career-img3.jpg";
import mensAtOfficeImage from "@/assets/images/career/career-img4.jpg";
import stuImage from "@/assets/images/career/career-user.png";
/*
import mensAtOfficeImage from "@/assets/images/career/career-img4.jpg";
import menAndWomen from "@/assets/images/career/career-img2.jpg";
import plantAtOfficeImage from "@/assets/images/career/career-img1.jpg";

*/

// Types
import type { InnerTitleInfo } from "@/types/type";

const EmployersListingComponent = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "لیست مسئولین ",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "لیست مسئولین ",
    currentAddress: "/employers-listing",
  };
  return (
    <>
      <InnerTitle innerTitleInfo={innerTitleInfo} />
      <Container maxWidth="xl">
        <Box className="px-3 lg:w-3/6 mx-auto pt-16">
          <AnimateTitle
            title="شرکت برتر ثبت شده"
            description="ما نظرات کاربران خود را جمع‌آوری می‌کنیم تا بتوانید نظر صادقانه‌ای در مورد اینکه تجربه با وب‌سایت ما واقعاً چگونه است، دریافت کنید!"
          />
        </Box>
        <EmployersListingCardContainer />
      </Container>
      <Box className="w-full bg-lightGray">
        <Container maxWidth="xl" className="py-12">
          <Typography className="text-3xl font-medium">
            کارفرمای برتر
          </Typography>
          <Box className="w-fit">
            <AnimateLine />
          </Box>
          <Typography className="text-gray-500 w-2/6">
            ما نظرات کاربران خود را جمع‌آوری می‌کنیم تا بتوانید نظر صادقانه‌ای
            در مورد تجربه واقعی وب‌سایت ما داشته باشید!
          </Typography>
          <EmployersListingMasterCardContainer />
        </Container>
        <Box className="w-full bg-mainWhite py-24">
          <Container
            maxWidth="xl"
            className="flex items-center flex-col md:flex-row gap-16 md:gap-0"
          >
            <Box className="w-full md:w-1/2 flex gap-5 items-center justify-center ">
              <Box className="flex flex-col py-3 gap-5 items-center justify-between">
                <Image
                  src={plantAtOfficeImage}
                  width={300}
                  className="rounded-xl mt-8"
                  height={300}
                  alt="img"
                />
                <Image
                  src={menAndWomen}
                  width={300}
                  className="rounded-xl"
                  height={300}
                  alt="img"
                />
              </Box>
              <Box className="flex flex-col gap-5">
                <Image
                  src={mensAtWorkImage}
                  width={300}
                  className="rounded-xl"
                  height={300}
                  alt="img"
                />
                <Image
                  src={mensAtOfficeImage}
                  width={300}
                  className="rounded-xl"
                  height={300}
                  alt="img"
                />
              </Box>
            </Box>
            <Box className="w-full md:w-1/2 px-8 ">
              <Box className="mb-6">
                <Typography className="text-sm md:text-[34px] lg:text-[44px] md:leading-[50px] font-semibold">
                  کات <span className="text-highGreen ">فرصت سریع</span> به شما
                  کمک می کند تا بهترین فرصت را که مناسب شماست به دست آورید.
                </Typography>
                <Box className="w-fit">
                  <AnimateLine />
                </Box>
              </Box>
              <Box className="flex items-center gap-2">
                <Image
                  className="w-20 h-w-20"
                  src={stuImage}
                  width={250}
                  height={250}
                  alt="stu image"
                />
                <Box>
                  <Typography className="text-xl font-medium">
                    توماس آبدین
                  </Typography>
                  <Typography className="text-gray-500">
                    توسعه دهنده وب
                  </Typography>
                </Box>
              </Box>
              <Box className="mt-6">
                <Typography className="text-gray-500">
                  لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                  ایپسوم به مدت 40 سال استاندارد صنعت بوده است.لورم ایپسوم به
                  سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40
                  سال استاندارد صنعت بوده است.لورم ایپسوم به سادگی ساختار چاپ و
                  متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت
                  بوده است.
                </Typography>
              </Box>
              <Box>
                <UsersProfile />
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default EmployersListingComponent;
