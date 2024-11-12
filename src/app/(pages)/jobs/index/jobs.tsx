import InnerTitle from "@/app/components/jobs/index/innerTitle/innterTitle";
import JobListingArea from "@/app/components/jobs/index/jobListingArea/jobListingArea";
import { Box } from "@mui/material";

const JobsComponent = () => {
  return (
    <Box>
      <InnerTitle />
      <JobListingArea />
    </Box>
  );
};

export default JobsComponent;
