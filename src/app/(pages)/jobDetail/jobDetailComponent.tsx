import AboutCompany from "@/app/components/jobDetail/index/aboutCompany/aboutCompany";
import EmployerLocation from "@/app/components/jobDetail/index/employerLocation/employerLocation";
import InnerTitleJobDetail from "@/app/components/jobDetail/index/innerTitle/innerTitle";
import JobDescription from "@/app/components/jobDetail/index/jobDescription/jobDescription";
import JobReview from "@/app/components/jobDetail/index/jobReview/jobReview";
import JobSkills from "@/app/components/jobDetail/index/jobSkills/jobSkills";
import Portfolio from "@/app/components/jobDetail/index/portfolio/portfolio";
import DreamJobCard from "@/modules/dreamJobCard/dreamJobCard";
import { Box } from "@mui/material";

const JobDetailComponent = () => {
  return (
    <Box>
      <InnerTitleJobDetail />
      <DreamJobCard />
      <Box className="flex justify-center items-start flex-wrap gap-x-5">
        <Box className="lg:w-[30%]">
          <JobReview />
          <EmployerLocation/>
          <JobSkills />
          <AboutCompany/>
        </Box>
        <Box className="lg:w-[60%]">
          <JobDescription />
          <Portfolio/>
        </Box>
      </Box>
    </Box>
  );
};

export default JobDetailComponent;
