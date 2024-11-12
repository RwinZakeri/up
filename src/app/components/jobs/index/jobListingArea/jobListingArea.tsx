import BannerForm from "@/modules/form/bannerFrom";
import { Box, Container } from "@mui/material";
import JobListStatus from "../joblistStatus/jobListStatus";
import JobsCardContainer from "../jobsCardContainer/jobsCardContainer";

const JobListingArea = () => {
  return (
    <Container maxWidth="lg">
      <BannerForm />
      <Box className="w-full flex gap-2 flex-col">
        <Box className="w-full lg:w-2/5 h-screen bg-red-500 rounded-xl"></Box>
        <Box className="w-full lg:w-3/5 h-screen bg-blue-500 rounded-xl px-4">
          <JobListStatus />
          <JobsCardContainer />
        </Box>
      </Box>
    </Container>
  );
};

export default JobListingArea;
