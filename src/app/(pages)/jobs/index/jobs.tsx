import InnerTitle from "@/app/components/jobs/index/innerTitle/innterTitle";
import JobListingArea from "@/app/components/jobs/index/jobListingArea/jobListingArea";
import type { InnerTitleInfo } from "@/types/type";
import { Box } from "@mui/material";

const JobsComponent = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "فهرست مشاغل",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "فهرست مشاغل",
    currentAddress: "/jobs",
  };
  return (
    <Box>
      <InnerTitle innerTitleInfo={innerTitleInfo} />
      <JobListingArea />
    </Box>
  );
};

export default JobsComponent;
