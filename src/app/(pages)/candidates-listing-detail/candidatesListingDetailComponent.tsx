import CandidatesListingDetailBoxes from "@/components/candidates-listing-detail/candidatesListingDetailBoxes";
import InnerTitle from "@/components/jobs/index/innerTitle/innterTitle";
import { InnerTitleInfo } from "@/types/type";
import { Box } from "@mui/material";

const CandidatesListingDetailComponent = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "جزئیات پژوهشگران ",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "جزئیات پژوهشگران ",
    currentAddress: `/candidates-listing/${1}`,
  };

  return (
    <Box>
      <InnerTitle innerTitleInfo={innerTitleInfo} />
      <CandidatesListingDetailBoxes />
    </Box>
  );
};

export default CandidatesListingDetailComponent;
