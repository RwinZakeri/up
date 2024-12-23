"use client";

import CommentCard from "@/modules/commentCard/commentCard";
import { CommentSliderItem, myCommentComponentTypes } from "@/types/type";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../app/globals.css";

const CommentsContainer = ({ data }: myCommentComponentTypes) => {
  return (
    <Box className="w-full p-12 mx-auto bg-lightGreenXXXs my-12">
      <Box className="max-w-[980px] mx-auto">
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true} // Enables infinite loop
          autoplay={{
            delay: 10000000, // 4000 milliseconds
            disableOnInteraction: false, // Autoplay doesn't stop on user interaction
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <CommentCard comment={item as CommentSliderItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default CommentsContainer;
