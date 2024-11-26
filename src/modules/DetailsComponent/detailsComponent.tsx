import AboutCompany from "@/app/components/jobDetail/index/aboutCompany/aboutCompany";
import EmployerLocation from "@/app/components/jobDetail/index/employerLocation/employerLocation";
import JobDescription from "@/app/components/jobDetail/index/jobDescription/jobDescription";
import JobReview from "@/app/components/jobDetail/index/jobReview/jobReview";
import JobSkills from "@/app/components/jobDetail/index/jobSkills/jobSkills";
import Portfolio from "@/app/components/jobDetail/index/portfolio/portfolio";
import RelatedJobsContainer from "@/app/components/jobDetail/index/relatedJobs/relatedJobs";
import Videos from "@/app/components/jobDetail/index/videos/videos";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import AnimateLine from "../animateLine/animateLine";

const DetailComponents = ({ topMainCard }: { topMainCard: ReactNode }) => {
  return (
    <>
      <Box className="mt-16 standardContainer">
        {topMainCard}
        <Box className="flex justify-center flex-col shadow-none md:flex-row gap-x-5">
          <Box className="lg:w-2/6 ">
            <JobReview />
            <EmployerLocation />
            <Box className="rounded-xl p-4 shadow-slate-400 boxShadowJob mt-[30px]">
              <h2 className="text-[22px]">بررسی اجمالی محصول</h2>
              <Box className="w-[30%]">
                <AnimateLine />
              </Box>
              <JobSkills />
            </Box>
            <AboutCompany />
          </Box>
          <Box className="lg:w-4/6">
            <JobDescription />
            <Portfolio />
            <Videos />
            <RelatedJobsContainer />
          </Box>
        </Box>
      </Box>
      {/* <FileUpload /> */}
    </>
  );
};

export default DetailComponents;
