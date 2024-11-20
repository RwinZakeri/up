import InnerTitle from "@/app/components/jobs/index/innerTitle/innterTitle";
import type { InnerTitleInfo } from "@/types/type";
import { Box, Rating } from "@mui/material";

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

      <Rating name="read-only" value={1} readOnly />
    </Box>
  );
};

export default CandidatesListingComponent;
