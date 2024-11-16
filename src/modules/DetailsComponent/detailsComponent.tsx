import AboutCompany from "@/app/components/jobDetail/index/aboutCompany/aboutCompany";
import EmployerLocation from "@/app/components/jobDetail/index/employerLocation/employerLocation";
import InnerTitleJobDetail from "@/app/components/jobDetail/index/innerTitle/innerTitle";
import JobDescription from "@/app/components/jobDetail/index/jobDescription/jobDescription";
import JobReview from "@/app/components/jobDetail/index/jobReview/jobReview";
import JobSkills from "@/app/components/jobDetail/index/jobSkills/jobSkills";
import Portfolio from "@/app/components/jobDetail/index/portfolio/portfolio";
import RelatedJobsContainer from "@/app/components/jobDetail/index/relatedJobs/relatedJobs";
import Videos from "@/app/components/jobDetail/index/videos/videos";
import FileUpload from "@/modules/fileUpload/fileUpload";
import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

const DetailComponents = ({ topMainCard }: { topMainCard: ReactNode }) => {
  return (
    <>
      <Container maxWidth="xl" className="mt-16">
        {topMainCard}
        <Box className="flex justify-center flex-col shadow-none md:flex-row gap-x-5">
          <Box className="lg:w-2/6 shadow-none">
            <JobReview />
            <EmployerLocation />
            <JobSkills />
            <AboutCompany />
          </Box>
          <Box className="lg:w-4/6">
            <JobDescription />
            <Portfolio />
            <Videos />
            <RelatedJobsContainer />
          </Box>
        </Box>
      </Container>
      <FileUpload />
    </>
  );
};

export default DetailComponents;
