import InnerTitle from "@/components/jobs/index/innerTitle/innterTitle";
import PrivacyPolicyArea from "@/components/privacy/privacy-policy-area/privacyPolicyArea";
import { InnerTitleInfo } from "@/types/type";
import { Box } from "@mui/material";

const PrivacyComponents = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "حریم خصوصی ",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "حریم خصوصی  ",
    currentAddress: "/jobs",
  };
  return (
    <Box>
      <InnerTitle innerTitleInfo={innerTitleInfo} />
      <PrivacyPolicyArea />
    </Box>
  );
};

export default PrivacyComponents;
