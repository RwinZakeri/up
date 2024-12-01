import InnerTitle from "@/app/components/jobs/index/innerTitle/innterTitle";
import AnimateLine from "@/modules/animateLine/animateLine";
import BlogCard from "@/modules/blogCard/blogCard";
import type { InnerTitleInfo } from "@/types/type";
import { Box, Typography } from "@mui/material";

const BlogComponent = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "وبلاگ شبکه ای",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "وبلاگ شبکه ای",
    currentAddress: "/blog",
  };
  return (
    <>
      <InnerTitle innerTitleInfo={innerTitleInfo} />
      <Box className="standardContainer">
        <Box className="text-center mt-20">
          <Typography className="text-4xl font-bold">
            از وبلاگ های ما
          </Typography>
          <Box className="w-full">
            <AnimateLine />
          </Box>
          <Typography className="w-full md:w-5/6 lg:w-3/6 text-gray-500 mx-auto">
            ما نظرات کاربران خود را جمع‌آوری می‌کنیم تا بتوانید نظر صادقانه‌ای
            در مورد اینکه تجربه با وب‌سایت ما واقعاً چگونه است، دریافت کنید!
          </Typography>
        </Box>

        {/* card container */}
        <Box className="px-8 md:px-0 mx-auto flex-col md:flex-row pt-10 flex items-center gap-10 flex-wrap justify-center">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Box>
      </Box>
    </>
  );
};

export default BlogComponent;
