import myImg from "@/assets/images/recent-job/recent-job1.jpg";
import { Box } from "@mui/material";
import Image from "next/image";
const JobCard = () => {
  return (
    <Box className="w-full">
      <Box>
        <Image src={myImg} alt="my img" />
      </Box>
    </Box>
  );
};

export default JobCard;
