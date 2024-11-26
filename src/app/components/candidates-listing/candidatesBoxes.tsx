import CandidatesWidget from "@/modules/candidates-widget/candidatesWidget";
import JobCategoryGender from "@/modules/jobCategoryGender/jobCategoryGender";
import KeyWordSearch from "@/modules/keyWordSearch/keyWordSearch";
import { Box } from "@mui/material";
import JobListStatus from "../jobs/index/joblistStatus/jobListStatus";
import CandidatesCardContainer from "./candidatesCardContainer";
const CandidatesBox = () => {
  return (
    <Box className="mx-auto standardContainer pt-24">
      <Box className="w-full flex gap-0 flex-col lg:flex-row">
        <Box className="w-full md:w-5/6 mx-auto lg:w-2/6  rounded-xl  px-4 ">
          <KeyWordSearch />
          {/* <JobCategory /> */}
          <CandidatesWidget />
          <JobCategoryGender />
        </Box>
        <Box className="w-full px-4  md:w-5/6 mx-auto lg:w-5/6  bg--500 rounded-xl ">
          <JobListStatus />
          <CandidatesCardContainer />
        </Box>
      </Box>
    </Box>
  );
};

export default CandidatesBox;
