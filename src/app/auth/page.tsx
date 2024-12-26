import Form from "@/components/auth/Form";
import { InnerTitleInfo } from "@/types/type";
import { Box } from "@mui/material";
import InnerTitle from "../../components/jobs/index/innerTitle/innterTitle";

// Remove unnecessary import of block from sharp
// Remove CheckBox and Label imports as they're not being used.

const LoginPage = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "ورود / ثبت نام",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "ورود / ثبت نام",
    currentAddress: "/jobs",
  };

  return (
    <>
      <InnerTitle innerTitleInfo={innerTitleInfo} />
      <Box className="standardContainer items-start flex p-4 flex-col md:flex-row w-full justify-center gap-5">
        <Form />
        <Form loginMode={true} />
      </Box>
    </>
  );
};

export default LoginPage;
