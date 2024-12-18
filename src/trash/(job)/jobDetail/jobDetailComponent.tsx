import InnerTitle from "@/app/components/jobs/index/innerTitle/innterTitle";
import DetailComponents from "@/modules/DetailsComponent/detailsComponent";
import DreamJobCard from "@/modules/dreamJobCard/dreamJobCard";
import { InnerTitleInfo } from "@/types/type";

const JobDetailComponent = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "جزئیات مشاغل",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "جزئیات مشاغل",
    currentAddress: "/jobDetail",
  };
  return (
    <>
      <InnerTitle innerTitleInfo={innerTitleInfo} />
      <DetailComponents topMainCard={<DreamJobCard />} />
    </>
  );
};

export default JobDetailComponent;
