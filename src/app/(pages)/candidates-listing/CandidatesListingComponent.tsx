import CandidatesBox from "@/app/components/candidates-listing/candidatesBoxes";
import InnerTitle from "@/app/components/jobs/index/innerTitle/innterTitle";
import type { InnerTitleInfo } from "@/types/type";
import { Box } from "@mui/material";

const CandidatesListingComponent = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "فهرست پژوهشگران ",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "فهرست پژوهشگران ",
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
