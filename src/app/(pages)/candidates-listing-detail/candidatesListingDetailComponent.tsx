import CandidatesListingDetailBoxes from "@/app/components/candidates-listing-detail/candidatesListingDetailBoxes";
import InnerTitle from "@/app/components/jobs/index/innerTitle/innterTitle";
import { InnerTitleInfo } from "@/types/type";
import { Box } from "@mui/material";

const CandidatesListingDetailComponent = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "جزئیات داوطلبان",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "جزئیات داوطلبان",
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
