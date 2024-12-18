import BannerForm from "@/modules/form/bannerFrom";
import JobCategory from "@/modules/jobCategory/jobCategory";
import JobCategoryGender from "@/modules/jobCategoryGender/jobCategoryGender";
import NotificationJob from "@/modules/notificationJob/notificationJob";
import { Box } from "@mui/material";
import JobListStatus from "../joblistStatus/jobListStatus";
import JobsCardContainer from "../jobsCardContainer/jobsCardContainer";
const JobListingArea = () => {
  return (
    <Box className="mx-auto standardContainer">
      <Box className="w-full md:w-5/6 lg:w-full mx-auto bg-grayXlight rounded-xl">
        <BannerForm />
      </Box>
      <Box className="w-full flex gap-0 flex-col lg:flex-row">
        <Box className="w-full md:w-5/6 mx-auto lg:w-2/6  rounded-xl  px-4 ">
          <NotificationJob />
          <JobCategory />
          <JobCategoryGender />
        </Box>
        <Box className="w-full px-4  md:w-5/6 mx-auto lg:w-5/6  bg--500 rounded-xl ">
          <JobListStatus />
          <JobsCardContainer />
        </Box>
      </Box>
    </Box>
  );
};

export default JobListingArea;
