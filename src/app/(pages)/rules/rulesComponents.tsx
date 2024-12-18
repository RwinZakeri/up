import InnerTitle from "@/components/jobs/index/innerTitle/innterTitle";
import TermsConditionsArea from "@/components/rules/terms-conditions-area/termsConditionsArea";
import { InnerTitleInfo } from "@/types/type";
import { Box } from "@mui/material";

const RuleComponents = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "قوانین و ظوابط",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "قوانین و ظوابط",
    currentAddress: "/jobs",
  };
  return (
    <Box>
      <InnerTitle innerTitleInfo={innerTitleInfo} />
      <TermsConditionsArea />
    </Box>
  );
};

export default RuleComponents;
