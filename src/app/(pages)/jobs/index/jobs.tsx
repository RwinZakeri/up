import InnerTitle from "@/app/components/jobs/index/innerTitle/innterTitle";
import JobListingArea from "@/app/components/jobs/index/jobListingArea/jobListingArea";
import type { InnerTitleInfo } from "@/types/type";
import { Box } from "@mui/material";

const JobsComponent = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "فرصت های همکاری",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "فرصت های همکاری",
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
