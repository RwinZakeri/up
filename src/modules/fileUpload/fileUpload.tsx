import AnimateLine from "@/modules/animateLine/animateLine";
import { Box } from "@mui/material";

const FileUpload = () => {
  return (
    <Box className="mt-[20px] bg-lightGreen flex justify-around items-center w-[90%] mx-auto py-[40px] rounded-[30px]">
      <Box>
        <h2 className="text-[40px] text-white">
          اجازه دهید کارفرمایان شما را پیدا کنند
        </h2>
        <Box className="w-[15%]">
          <AnimateLine />
        </Box>
        <p className="text-white">مشاغل خود را برای میلیون ها کاربر ماهانه تبلیغ کنید و 15.8 میلیون رزومه را در پایگاه داده ما جستجو کنید.</p>
      </Box>
      <Box >
        <input type="file" className="hidden w-0 h-0" name="upload" id="upload" placeholder="بارگذاری" />
        <label className="cursor-pointer px-[30px] py-[12px] text-[18px] text-center overflow-hidden bg-white text-black rounded transition-all duration-[500ms] hover:bg-black hover:text-white" htmlFor="upload">بارگذاری رزومه</label>
      </Box>
    </Box>
  );
};

export default FileUpload;
