"use client";
import db from "@/db/db.json";
import CommentCard from "@/modules/commentCard/commentCard";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../globals.css";

const CommentsContainer = () => {
  const { commentSlider } = db;

  return (
    <Box className="w-full p-12 mx-auto bg-lightGreenXXXs">
      <Box className="max-w-[980px] mx-auto">
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true} // Enables infinite loop
          autoplay={{
            delay: 1000000000, // 1000 seconds in milliseconds
            disableOnInteraction: false, // Autoplay doesn't stop on user interaction
          }}
          modules={[Pagination, Autoplay]} // Add Autoplay module here
          className="mySwiper"
        >
          {commentSlider?.map((item, index) => (
            <SwiperSlide key={index}>
              <CommentCard comment={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default CommentsContainer;
