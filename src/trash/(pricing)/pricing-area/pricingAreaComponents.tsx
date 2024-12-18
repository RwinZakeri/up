import CounterArea from "@/app/components/about/counter-area/counter-area";
import CommentsContainer from "@/app/components/home/index/comments/comments";
import InnerTitle from "@/app/components/jobs/index/innerTitle/innterTitle";
import PricingPlan from "@/app/components/pricingArea/pricingPlan/pricingPlan";
import { InnerTitleInfo } from "@/types/type";
import { Box } from "@mui/material";

const PricingAreaComponents = () => {
    const innerTitleInfo: InnerTitleInfo = {
        title: "پلن قیمت گذاری ",
        mainRouteTitle: "خانه",
        mainRouteAddress: "/",
        current: "پلن قیمت گذاری ",
        currentAddress: "/jobs",
      };
    return ( 
        <Box>
            <InnerTitle innerTitleInfo={innerTitleInfo}/>
            <PricingPlan/>
            <CommentsContainer/>
            <CounterArea/>
        </Box>
     );
}
 
export default PricingAreaComponents;