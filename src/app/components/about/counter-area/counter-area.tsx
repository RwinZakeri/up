import AnimateLine from "@/modules/animateLine/animateLine";
import { Box } from "@mui/material";

const CounterArea = () => {
  return (
    <Box className="pt-[100px] pb-[70px]">
      <Box className="w-full flex justify-around items-center gap-x-2 flex-wrap">
        <Box className="flex flex-col justify-center items-center">
          <h3 className="text-[45px]">
            <span>14</span>
            k
          </h3>
          <Box className="w-[100%]">
            <AnimateLine />
          </Box>
          <Box className="text-[#696969] text-[14px]">
            <p>بیش از 14 هزار موقعیت شغلی باز</p>
          </Box>
        </Box>
        <Box className="flex flex-col justify-center items-center">
          <h3 className="text-[45px]">
            <span>187,113</span>
            
          </h3>
          <Box className="w-[100%]">
            <AnimateLine />
          </Box>
          <Box className="text-[#696969] text-[14px]">
            <p>1,87,113 کل شغل ارسال شده</p>
          </Box>
        </Box>
        <Box className="flex flex-col justify-center items-center">
          <h3 className="text-[45px]">
            <span>5</span>
            M
          </h3>
          <Box className="w-[100%]">
            <AnimateLine />
          </Box>
          <Box className="text-[#696969] text-[14px]">
            <p>5 میلیون کاربر فعال روزانه</p>
          </Box>
        </Box>
    
      </Box>
    </Box>
  );
};

export default CounterArea;
