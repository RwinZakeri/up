import type { CommentSliderItem } from "@/types/type";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface CommentCardProps {
  comment: CommentSliderItem;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  const { title, description, profileAddress } = comment;

  return (
    <Box className="w-full flex standardContainer items-center justify-center flex-col gap-2 bg-transparent py-4 bg-[#f5fbf6]">
      <Typography className="font-medium text-lg">{title}</Typography>
      {profileAddress && (
        <Image
          src={profileAddress} // Absolute path with leading "/"
          width={250}
          height={250}
          className="max-w-36 max-h-3max-w-36 mt-8 rounded-full"
          alt="person"
        />
      )}

      {description && (
        <Typography className="text-gray-500 text-center w-full lg:w-4/5 py-4 text-lg">
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default CommentCard;
