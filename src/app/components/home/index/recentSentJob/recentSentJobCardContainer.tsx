"use client";
import { Box } from "@mui/material";

import RecentSentJobCard from "@/modules/recentSentJobCard/recentSentJobCard";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../globals.css";

const RecentSentJobCardContainer = () => {
  return (
    <Box className="w-full  standardContainer  mx-auto my-8">
      <Box>
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true} // Enables infinite loop
          modules={[Pagination, Autoplay]} // Add Autoplay module here
          className="mySwiper"
          style={{ padding: "0" }} // Removes padding directly
          breakpoints={{
            // When the screen width is 1200px or more, show 3 cards
            1200: {
              slidesPerView: 3,
              spaceBetween: 20, // Optional: space between slides
            },
            // When the screen width is 768px or more, show 2 cards
            768: {
              slidesPerView: 2,
              spaceBetween: 20, // Optional: space between slides
            },
            // Default to 1 card on smaller screens
            0: {
              slidesPerView: 1,
              spaceBetween: 20, // Optional: space between slides
            },
          }}
        >
          <SwiperSlide>
            <RecentSentJobCard />
          </SwiperSlide>
          <SwiperSlide>
            <RecentSentJobCard />
          </SwiperSlide>
          <SwiperSlide>
            <RecentSentJobCard />
          </SwiperSlide>
          <SwiperSlide>
            <RecentSentJobCard />
          </SwiperSlide>
          <SwiperSlide>
            <RecentSentJobCard />
          </SwiperSlide>
          <SwiperSlide>
            <RecentSentJobCard />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default RecentSentJobCardContainer;
