import JobCard from "@/modules/jobCard/jobCard";
import { Box } from "@mui/material";
const RelatedJobsContainer = () => {
  return (
    <Box className="flex flex-col gap-5 mt-10">
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </Box>
  );
};

export default RelatedJobsContainer;
