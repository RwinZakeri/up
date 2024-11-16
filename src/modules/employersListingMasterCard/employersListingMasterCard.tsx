import myImg from "@/assets/images/recent-job/recent-job11.jpg";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const EmployersListingMasterCard = () => {
  return (
    <Box className="w-full p-8 bg-mainWhite relative rounded-xl flex gap-4 transition-all hover:-translate-y-2 duration-300 flex-col md:flex-row boxShadowJob">
      <Button sx={{ padding: 0 }} className="top-5 left-0 absolute ">
        <BookmarkBorderIcon />
      </Button>

      <Image
        className="w-20 h-20 rounded-full"
        src={myImg}
        width={250}
        height={250}
        alt="job"
      />
      <Box>
        <Typography className="text-xl font-medium">طراح محصول</Typography>
        <Box className="mt-4 flex items-center flex-wrap gap-6">
          <Typography className="flex items-center gap-1">
            <BusinessCenterIcon
              className="text-lg text-highGreen
            "
            />
            پزشکی
          </Typography>
          <Typography className="flex items-center gap-1">
            <FmdGoodIcon className="text-lg text-highGreen" />
            ایران استان تهران میدان آزادی
          </Typography>
          <Typography className="flex cursor-pointer items-center gap-1 text-highGreen">
            <ChatBubbleIcon className="text-lg text-highGreen" />
            ایران استان تهران میدان آزادی
          </Typography>
        </Box>
        <Button
          sx={{ padding: 0, marginTop: 2 }}
          className="w-36 h-10 p-4 lg:absolute lg:left-5 lg:bottom-5  text-sm rounded-full bg-highGreen/10 text-highGreen"
        >
          16 موقعیت باز
        </Button>
      </Box>
    </Box>
  );
};

export default EmployersListingMasterCard;
