import InnerTitle from "@/components/jobs/index/innerTitle/innterTitle";
import DetailComponents from "@/modules/DetailsComponent/detailsComponent";
import EmployersListingMasterCard from "@/modules/employersListingMasterCard/employersListingMasterCard";
import type { InnerTitleInfo } from "@/types/type";
import { Box } from "@mui/material";

const EmployerDetailComponent = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "جزئیات مسئولین ",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "جزئیات مسئولین ",
    currentAddress: "/employerDetail",
  };
  return (
    <Box>
      <InnerTitle innerTitleInfo={innerTitleInfo} />
      <DetailComponents topMainCard={<EmployersListingMasterCard />} />
    </Box>
  );
};

export default EmployerDetailComponent;
