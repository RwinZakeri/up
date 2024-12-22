import AnimateLine from "@/modules/animateLine/animateLine";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Box } from "@mui/material";

const FileUpload = () => {
  return (
    <Box className="standardContainer absolute top-[-25%] left-1/2 -translate-x-1/2 mt-5 bg-lightGreen flex justify-between items-center py-16 px-10 rounded-[30px]">
      <Box>
        <h2 className="text-[40px] text-white">
          اجازه دهید مسِئولین شما را پیدا کنند
        </h2>
        <Box className="w-[15%]">
          <AnimateLine />
        </Box>
        <p className="text-white">
          مشاغل خود را برای میلیون ها کاربر ماهانه تبلیغ کنید و 15.8 میلیون
          رزومه را در پایگاه داده ما جستجو کنید.
        </p>
      </Box>
      <Box>
        <input
          type="file"
          className="hidden w-0 h-0"
          name="upload"
          id="upload"
          placeholder="بارگذاری"
        />
        <label
          className="flex gap-2 cursor-pointer px-8 py-3 text-lg text-center overflow-hidden bg-white text-black rounded transition-all duration-[500ms] hover:bg-black hover:text-white"
          htmlFor="upload"
        >
          بارگذاری رزومه
          <UploadFileIcon />
        </label>
      </Box>
    </Box>
  );
};

export default FileUpload;
