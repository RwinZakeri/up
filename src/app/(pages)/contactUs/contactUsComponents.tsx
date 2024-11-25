import ContactArea from "@/app/components/contactUs/contact-area/contactArea";
import SectionTitle from "@/app/components/contactUs/section-title/sectionTitle";
import InnerTitle from "@/app/components/jobs/index/innerTitle/innterTitle";
import { InnerTitleInfo } from "@/types/type";
import { Box } from "@mui/material";

const ContactUsComponents = () => {
    const innerTitleInfo: InnerTitleInfo = {
        title: "تماس با ما",
        mainRouteTitle: "خانه",
        mainRouteAddress: "/",
        current: " تماس با ما",
        currentAddress: "/jobs",
      };
    return ( 
        <Box>
            {/* <ContactUs/> */}
            <InnerTitle innerTitleInfo={innerTitleInfo}/>
            <SectionTitle/>
            <ContactArea/>
        </Box>
     );
}
 
export default ContactUsComponents;