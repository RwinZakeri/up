import AnimateLine from "@/modules/animateLine/animateLine";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Button, Divider, TextField } from "@mui/material";

const Form = ({ loginMode }: { loginMode?: boolean }) => {
  return (
    <Box className=" w-full md:w-[49%] shadow-xl  py-4 rounded-xl">
      {loginMode ? (
        <>
          <h3 className="mr-[30px]  text-[24px]">ورود به حساب کاربری</h3>
          <Box className="w-fit mr-[30px] ">
            <AnimateLine />
          </Box>
        </>
      ) : (
        <>
          <h3 className="mr-[30px] text-[24px]">ایجاد حساب</h3>
          <Box className="w-fit mr-[30px] ">
            <AnimateLine />
          </Box>
        </>
      )}

      {!loginMode && (
        <Box className="mt-[50px]">
          <TextField
            className="w-[90%] mr-[30px]"
            required
            id="standard-required"
            label="نام شما"
            variant="standard"
          />
        </Box>
      )}

      <Box className="mt-[50px]">
        <TextField
          className="w-[90%] mr-[30px]"
          required
          id="standard-required"
          label="ایمیل"
          variant="standard"
        />
      </Box>

      <Box className="mt-[50px]">
        <TextField
          className="w-[90%] mr-[30px]"
          id="standard-password-input"
          label="گذرواژه"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </Box>

      <Box className="mt-[30px] w-full text-center px-4">
        <Button className="w-full mx-auto" variant="contained" size="large">
          {loginMode ? "وارد شوید" : "ثبت نام کن"}
        </Button>
      </Box>

      <Box className="h-[85px] w-[90%] mr-[30px]">
        <Divider className="pt-[29px] text-lightGray">یا</Divider>
      </Box>

      <Box className="px-4 text-center">
        <Button className="w-full" variant="outlined" size="large">
          {loginMode ? "ورود با لینکدین" : "ثبت نام با لینکدین"}
          <LinkedInIcon sx={{ fontSize: 32 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
