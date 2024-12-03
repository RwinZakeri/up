import AboutArea from "@/app/components/about/about-area/aboutArea";
import InnerTitleAbout from "@/app/components/about/innerTitleAbout/innerTitleAbout";
import type { InnerTitleInfo } from "@/types/type";
import InnerTitle from "@/app/components/jobs/index/innerTitle/innterTitle";
import { Box } from "@mui/material";
import CareerArea from "@/app/components/about/career-area/career-area";
import CommentsContainer from "@/app/components/home/index/comments/comments";
import CounterArea from "@/app/components/about/counter-area/counter-area";
import HighRateFreeLanceCard from "@/modules/highRateFreeLanceCard/highRateFreeLanceCard";
import FreelancersArea from "@/app/components/about/freelancers-area/freelancers-area";

const AboutComponent = () => {
    const innerTitleInfo: InnerTitleInfo = {
        title: "درباره ما",
        mainRouteTitle: "خانه",
        mainRouteAddress: "/",
        current: "فهرست مشاغل",
        currentAddress: "/jobs",
      };
     
    return ( 
        <Box className=" ">
            {/* <InnerTitleAbout/> */}
            <InnerTitle innerTitleInfo={innerTitleInfo}/>
            <AboutArea/>
            <CounterArea/>
            <CareerArea/>
            <CommentsContainer/>
           {/* <HighRateFreeLanceCard/> */}
           <FreelancersArea/>
        </Box>  
     );
}
 
export default AboutComponent;