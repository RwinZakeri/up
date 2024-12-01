import SectionTitle from "@/app/components/contactUs/section-title/sectionTitle";
import AccordionQuestions from "@/app/components/frequentlyAskedQuestions/accordionQuestions/accordionQuestions";
import SectionTitleQuestions from "@/app/components/frequentlyAskedQuestions/sectionTitleQuestions/sectionTitleQuestions";
import InnerTitle from "@/app/components/jobs/index/innerTitle/innterTitle";
import { InnerTitleInfo } from "@/types/type";
import { Box } from "@mui/material";

const FrequentlyAskedQuestionsComponents = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "سوالات متداول ",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "سوالات متداول",
    currentAddress: "/jobs",
  };
  return (
    <Box>
      <InnerTitle innerTitleInfo={innerTitleInfo} />
      <SectionTitleQuestions/>
      <AccordionQuestions />
    </Box>
  );
};

export default FrequentlyAskedQuestionsComponents;
