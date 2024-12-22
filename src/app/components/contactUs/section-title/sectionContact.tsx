import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import { Box } from "@mui/material";
import Link from "next/link";
const SectionContact = () => {
  return (
    <Box className="my-[50px]">
      <Box className="flex justify-center items-center gap-x-5 flex-wrap">
        <Link
          href={"https://t.me/@1_UP_support"}
          className="relative transition-all duration-[500ms] hover:translate-y-[-5px] hover:border-[#b1fae8] lg:w-[23%] sm:w-[40%] w-[80%] border-[1px] border-[#f2f2f2] py-[25px] pr-[93px] pl-[18px] mt-[15px] mb-[30px] rounded-[10px]"
        >
          <Box className="">
            <EditLocationAltIcon
              sx={{ fontSize: 8 }}
              className="absolute top-[-15px] right-0 rounded-[10px] text-[#fa5f1c] bg-[#fee7dd] leading-[80px]  text-center w-[58px] h-[80px]"
            />
          </Box>
          <h3 className="text-[20px]">پشتیبانی تلکرام</h3>
          <p className="text-[gray]">@1_UP_support_1</p>
        </Link>

        <Link
          href={"https://t.me/@up_research_accelerator"}
          className="relative transition-all duration-[500ms] hover:translate-y-[-5px] hover:border-[#b1fae8] lg:w-[23%] sm:w-[40%] w-[80%] border-[1px] border-[#f2f2f2] py-[25px] pr-[93px] pl-[18px] mt-[15px] mb-[30px] rounded-[10px]"
        >
          <Box className="">
            <EditLocationAltIcon className="absolute top-[-15px] right-0 rounded-[10px] text-[#fa5f1c] bg-[#fee7dd] leading-[80px] text-[25px] text-center w-[58px] h-[80px]" />
          </Box>
          <h3 className="text-[20px]">کانال تلگرام</h3>
          <p className="text-[gray]">@up_research_accelerator</p>
        </Link>
      </Box>
    </Box>
  );
};

export default SectionContact;
