import AnimateLine from "@/modules/animateLine/animateLine";
import { InnerTitleInfo } from "@/types/type";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
} from "@mui/material";
import Link from "next/link";
import InnerTitle from "../components/jobs/index/innerTitle/innterTitle";

// Remove unnecessary import of block from sharp
// Remove CheckBox and Label imports as they're not being used.

const LoginPage = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "ورود / ثبت نام",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "فهرست مشاغل",
    currentAddress: "/jobs",
  };

  return (
    <>
      <InnerTitle innerTitleInfo={innerTitleInfo} />
      <Box className="standardContainer block lg:h-[200vh] lg:flex lg:my-[20px] ">
        <Box className="max-[478px]:mx-[20px] h-[660px] w-[645px] mr-[55px] shadow-2xl ... mt-[130px] lg:relative rounded-3xl">
          <h3 className="lg:mt-[35px] p-[20px] lg:p-0 mr-[30px] text-[24px]">
            وارد شوید
          </h3>

          <Box className="rounded-[50px] absolute lg:right-[30px] right-[100px]">
            <AnimateLine />
          </Box>

          <Box className="mt-[40px]">
            <TextField
              className="w-[560px] max-[1024px]:lg:w-[540px] mr-[30px]"
              required
              id="standard-required"
              label="ایمیل"
              variant="standard"
            />
          </Box>

          <Box className="mt-[40px]">
            <TextField
              className="w-[560px] max-[1024px]:lg:w-[540px] mr-[30px]"
              id="standard-password-input"
              label="گذرواژه"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
          </Box>

          <Box className="mt-[30px] flex justify-between">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="مرا به خاطر بسپار"
            />
            <Link
              className="ml-[30px] mt-[15px] text-[#00CA99] text-[16px] ml-[60px]"
              href="#"
            >
              فراموشی گذرواژه؟
            </Link>
          </Box>

          <Box className="mt-[20px]">
            <Button
              className="w-[560px] max-[1024px]:lg:w-[540px] mr-[30px] bg-[#00CA99] hover:bg-black text-white"
              variant="outlined"
              size="large"
            >
              وارد شوید
            </Button>
          </Box>

          <Box className="h-[85px] w-[560px] mr-[30px]">
            <Divider className="pt-[29px] max-[1024px]:lg:w-[540px] text-[lightgray]">
              یا
            </Divider>
          </Box>

          <Box>
            <Button
              className="w-[560px] max-[1024px]:lg:w-[540px] h-[60px] mr-[30px] hover:bg-[#00CA99] text-black border-[lightgray]"
              variant="outlined"
              size="large"
            >
              ورود توسط فیسبوک
            </Button>
          </Box>

          <Box className="mt-[25px]">
            <Button
              className="w-[560px] max-[1024px]:lg:w-[540px] h-[60px] mr-[30px] lg:hover:bg-[#00CA99] text-black border-[lightgray]"
              variant="outlined"
              size="large"
            >
              ورود توسط گوگل
            </Button>
          </Box>
        </Box>

        <Box>
          <Box className="max-[478px]:mx-[20px] h-[750px] w-[645px] mr-[55px] shadow-2xl ... mt-[100px] relative rounded-3xl">
            <h3 className="mr-[30px] pt-[50px] text-[24px]">ایجاد حساب</h3>

            <Box className="rounded-[50px] absolute right-[30px]">
              <AnimateLine />
            </Box>

            <Box className="mt-[50px]">
              <TextField
                className="w-[560px] mr-[30px]"
                required
                id="standard-required"
                label="نام شما"
                variant="standard"
              />
            </Box>

            <Box className="mt-[50px]">
              <TextField
                className="w-[560px] mr-[30px]"
                required
                id="standard-required"
                label="ایمیل"
                variant="standard"
              />
            </Box>

            <Box className="mt-[50px]">
              <TextField
                className="w-[560px] mr-[30px]"
                id="standard-password-input"
                label="گذرواژه"
                type="password"
                autoComplete="current-password"
                variant="standard"
              />
            </Box>

            <Box className="mt-[30px]">
              <Button
                className="w-[560px] mr-[30px] bg-[#00CA99] hover:bg-black text-white"
                variant="outlined"
                size="large"
              >
                ثبت نام کن
              </Button>
            </Box>

            <Box className="h-[85px] w-[560px] mr-[30px]">
              <Divider className="pt-[29px] text-[lightgray]">یا</Divider>
            </Box>

            <Box>
              <Button
                className="w-[560px] h-[60px] mr-[30px] hover:bg-[#00CA99] text-black border-[lightgray]"
                variant="outlined"
                size="large"
              >
                ورود توسط فیسبوک
              </Button>
            </Box>

            <Box className="mt-[35px]">
              <Button
                className="w-[560px] h-[60px] mr-[30px] hover:bg-[#00CA99] text-black border-[lightgray]"
                variant="outlined"
                size="large"
              >
                ورود توسط گوگل
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
