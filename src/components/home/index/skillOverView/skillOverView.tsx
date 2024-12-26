import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box } from "@mui/material";
import Link from "next/link";
import SkillOverViewCardContainer from "./skillOverViewCardContainer";

const SkillOverView = () => {
  return (
    <Box sx={{ paddingTop: 15, paddingX: 2 }}>
      {/* <AnimateTitle title="فرصت های همکاری" description="144 شغل زنده - 20 شغل امروز اضافه شد." /> */}
      <SkillOverViewCardContainer />
      <Link
        className="block w-fit mx-auto relative group text-center text-lightGreen after:content-[''] after:block after:absolute after:w-full after:bg-highGreen after:rounded-full after:left-0 after:h-0.5 my-8"
        href={"/jobs"}
      >
        همه فرصت ها را مرور کنید
        <ArrowBackIosNewIcon
          sx={{ fontSize: 15 }}
          className="group-hover:-translate-x-3 transition-all duration-300"
        />
      </Link>
    </Box>
  );
};

export default SkillOverView;
