import AnimateLine from "@/modules/animateLine/animateLine";
import ExprienceCard from "@/modules/exprience/exprienceCard";
import { Box, Typography } from "@mui/material";
import JobSkills from "../jobDetail/index/jobSkills/jobSkills";

const CandidateMainDetail = () => {
  return (
    <Box className="p-8 pb-0">
      <Box className="pb-8 mb-8 border-b-[1px] border-gray-500/30">
        <Typography className="text-xl font-bold">درباره</Typography>
        <Box className="w-fit">
          <AnimateLine />
        </Box>
        <Typography className="text-gray-500 mb-2 text-base">
          یک حرفه ای با استعداد با پیشینه آکادمیک در فناوری اطلاعات و تجربه
          توسعه تجاری ثابت شده به عنوان توسعه دهنده ++C از سال 1999. دانش کاملی
          از چرخه عمر توسعه نرم افزار دارد. در بیش از 140 پروژه برون سپاری توسعه
          نرم افزار شرکت داشت.
        </Typography>
        <Typography className="text-gray-500  text-base">
          زبان های برنامه نویسی: C/C++، NET C++، Python، Bash، Shell، PERL،
          عبارات منظم، Python، Active-script.
        </Typography>
      </Box>
      <Box>
        <Typography className="text-xl font-bold">تجربه کاری</Typography>
        <Box className="w-fit">
          <AnimateLine />
        </Box>
        {/* expreience  card container*/}
        <Box className="flex flex-col mb-8 gap-9 py-6 border-b-[1px] border-gray-500/20">
          {/* expreience  card */}
          <ExprienceCard />
          <ExprienceCard />
        </Box>
        <Typography className="text-xl font-bold">مهارت ها</Typography>
        <Box className="w-fit">
          <AnimateLine />
        </Box>
      </Box>
      <Box className="pb-8 mb-8 border-b-[1px] border-gray-500/30">
        <JobSkills />
      </Box>
      {/* <Certificato /> */}
      <Box className="flex flex-col  gap-9 py-6 border-b-[1px] border-gray-500/20">
        {/* expreience  card */}
        <ExprienceCard />
        <ExprienceCard />
      </Box>
    </Box>
  );
};

export default CandidateMainDetail;
