import type { CommentSliderItem } from "@/types/type";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface CommentCardProps {
  comment: CommentSliderItem;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  const { title, description, profileAddress } = comment;

  return (
    <Box className="w-full flex items-center justify-center flex-col gap-2 bg-transparent bg-[#f5fbf6]">
      <Typography className="font-medium">{title}</Typography>
      <Image
        src={profileAddress} // Absolute path with leading "/"
        width={250}
        height={250}
        className="max-w-14 max-h-14 rounded-full"
        alt="person"
      />
      <Typography className="text-gray-500 text-center w-full lg:w-3/5 py-4">
        {description}
      </Typography>
    </Box>
  );
};

export default CommentCard;
