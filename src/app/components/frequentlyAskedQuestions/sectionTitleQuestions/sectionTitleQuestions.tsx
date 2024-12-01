import AnimateTitle from "@/modules/animateTitle/animateTitle";
import { Box } from "@mui/material";

const SectionTitleQuestions = () => {
    return ( 
        <Box sx={{ paddingTop: 15, paddingX: 2 }}>
        <Box className="mb-5 mx-auto w-[50%]">
          <AnimateTitle
            title=" سوالات متداول کاربران ما"
            description="لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است."
          />
        </Box>
        {/* <SkillOverViewCardContainer /> */}
        
      </Box>
     );
}
 
export default SectionTitleQuestions;