import CandidatesBox from "@/components/candidates-listing/candidatesBoxes";
import InnerTitle from "@/components/jobs/index/innerTitle/innterTitle";
import type { InnerTitleInfo } from "@/types/type";
import { Box } from "@mui/material";

const CandidatesListingComponent = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "فهرست داوطلبان",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "فهرست داوطلبان",
    currentAddress: "/candidates-listing",
  };

  return (
    <Box>
      <InnerTitle innerTitleInfo={innerTitleInfo} />
      <CandidatesBox />
    </Box>
  );
};

export default CandidatesListingComponent;
