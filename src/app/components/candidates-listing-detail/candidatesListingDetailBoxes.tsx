import CandidateDetailCustomerData from "@/modules/candidate-detail-customer-data/candidateDetailCustomerData";
import { Box } from "@mui/material";
import CandidateMainDetail from "./candidateMainDetail";
import ContentProfile from "./contentProfile";
import OtherCandidateCardContainer from "./otherCandidateCardContainer";

const CandidatesListingDetailBoxes = () => {
  return (
    <Box className="standardContainer flex gap-5 pt-24">
      <Box className="h-fit w-2/6 rounded-xl boxShadowJob">
        <ContentProfile />
        <CandidateDetailCustomerData />
      </Box>
      <Box className=" w-5/6 h-fit rounded-xl boxShadowJob ">
        <CandidateMainDetail />
      </Box>
      <Box className=" w-2/6 h-fit rounded-xl boxShadowJob bg-mainWhite px-6 pt-8">
        <OtherCandidateCardContainer />
      </Box>
    </Box>
  );
};

export default CandidatesListingDetailBoxes;
