import InnerTitle from "@/app/components/jobs/index/innerTitle/innterTitle";
import prof2 from "@/assets/images/blog/blog-details-img1.jpg";
import myImgg from "@/assets/images/blog/blog-details-img2.jpg";
import prof from "@/assets/images/blog/blog-user.jpg";
import AnimateLine from "@/modules/animateLine/animateLine";
import SocialShare from "@/modules/social-share/socialShare";
import { InnerTitleInfo } from "@/types/type";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneIcon from "@mui/icons-material/Done";
import EmailIcon from "@mui/icons-material/Email";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid2,
  List,
  TextField,
  Typography,
} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Image from "next/image";
const BlogDetail = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "جزئیات وبلاگ",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "جزئیات وبلاگ",
    currentAddress: "/blog",
  };
  return (
    <>
      <InnerTitle innerTitleInfo={innerTitleInfo} />
      <Box className="standardContainer text-center mt-20">
        {/* blog-details-content */}
        <Box className="mb-8">
          <Typography className="font-semibold text-2xl mb-6">
            وبلاگ نویسی با تجربه در کپی رایتینگ و سئو
          </Typography>
          <Box className="w-fit mx-auto flex items-center gap-5 text-gray-500">
            <Image
              src={prof}
              alt="prof"
              width={100}
              height={100}
              className="w-10 rounded-full"
            />
            <Typography>توسط مدیر</Typography>
            <Typography>
              {" "}
              <AccessTimeIcon sx={{ marginLeft: 0.5, fontSize: 22 }} />
              تاریخ: 14 دی 1400
            </Typography>
            <Typography>
              <EmailIcon sx={{ marginLeft: 0.5, fontSize: 22 }} />
              نظر: 02
            </Typography>
            <Typography className="px-3 py-1.5 text-sm rounded-full hover:bg-black cursor-pointer text-mainWhite bg-highGreen transition-all duration-300">
              بازاریابی
            </Typography>
          </Box>
        </Box>
        {/* blog-preview-img */}
        <Image
          src={prof2}
          className="w-full rounded-2xl"
          alt="prof"
          width={2500}
          height={2500}
        />
        <Box className="mt-8  max-w-[870px] mx-auto px-4 lg:px-0">
          <Typography className="text-2xl font-bold text-right">
            چرا باید به یک استارتاپ بپیوندید
          </Typography>
          <Box className="w-fit">
            <AnimateLine />
          </Box>
          <Box className="text-right mb-8">
            <Typography className="text-gray-500 mb-4">
              لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
              ایپسوم به مدت 40 سال استاندارد صنعت بوده است.لورم ایپسوم به سادگی
              ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال
              استاندارد صنعت بوده است.
            </Typography>
            <Typography className="text-gray-500">
              لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
              ایپسوم به مدت 40 سال استاندارد صنعت بوده است.لورم ایپسوم به سادگی
              ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال
              استاندارد صنعت بوده است.لورم ایپسوم به سادگی ساختار چاپ و متن را
              در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده
              است.لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
              ایپسوم به مدت 40 سال استاندارد صنعت بوده است.لورم ایپسوم به سادگی
              ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال
              استاندارد صنعت بوده است.
            </Typography>
          </Box>
          {/* blog-details-list */}
          <Box>
            <Typography className="text-2xl font-bold text-right">
              آنچه یاد خواهید گرفت
            </Typography>
            <Box className="w-fit">
              <AnimateLine />
            </Box>
            <Box>
              {/* <List
                className="flex flex-wrap gap-0 items-center justify-center"
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
              >
                {[1, 2, 3, 4, 5, 6, 1, , 1, , 1].map((value) => (
                  <ListItem
                    className="w-[50%] text-right group"
                    key={value}
                    disableGutters
                    secondaryAction={
                      <Box className="rounded-full px-1.5 py-1.5 group-hover:bg-highGreen group-hover:text-mainWhite transition-all duration-300  text-highGreen bg-highGreen/20 flex items-center justify-center ">
                        <DoneIcon sx={{ fontSize: 14 }} />
                      </Box>
                    }
                  >
                    <ListItemText
                      className="text-gray-500"
                      primary={`Line item `}
                    />
                  </ListItem>
                ))}
              </List> */}

              <Grid2 container>
                {[1, 2, 3, 4, 5, 6, 1, , 1].map((value) => (
                  <Grid2
                    size={{ xs: 12, md: 6 }}
                    className="items-center justify-center"
                  >
                    <ListItem
                      className="px-9 py-2 text-right group cursor-pointer"
                      key={value}
                      disableGutters
                      secondaryAction={
                        <Box className="rounded-full px-1.5 py-1.5 group-hover:bg-highGreen group-hover:text-mainWhite transition-all duration-300  text-highGreen bg-highGreen/20 flex items-center justify-center ">
                          <DoneIcon sx={{ fontSize: 14 }} />
                        </Box>
                      }
                    >
                      <Typography className="group-hover:text-highGreen transition-all duration-300 ">
                        شما می توانید مهارت های کسب درآمد را شروع کنید.
                      </Typography>
                    </ListItem>
                  </Grid2>
                ))}
              </Grid2>
              {/* images */}
              <Box className="pt-12">
                <Typography className="text-2xl font-bold text-right">
                  آنچه یاد خواهید گرفت
                </Typography>
                <Box className="w-fit">
                  <AnimateLine />
                </Box>
                <Box className="flex w-full items-center gap-5 flex-col md:flex-row justify-between ">
                  <Box className="w-full md:max-w-1/4 ">
                    <Image
                      src={prof2}
                      className=" object-cover w-4/6 md:w-full mx-auto h-full"
                      width={250}
                      height={250}
                      alt="imag"
                    />
                  </Box>
                  <Box className="w-full md:max-w-1/4">
                    <Image
                      src={myImgg}
                      className=" object-cover  w-4/6 md:w-full mx-auto h-full"
                      width={250}
                      height={250}
                      alt="imag"
                    />
                  </Box>
                  <Box className="w-full md:max-w-1/4">
                    <Image
                      src={myImgg}
                      className=" object-cover w-4/6 md:w-full mx-auto h-full"
                      width={250}
                      height={250}
                      alt="imag"
                    />
                  </Box>
                  <Box className="w-full md:max-w-1/4">
                    <Image
                      src={myImgg}
                      className=" object-cover w-4/6 md:w-full mx-auto h-full"
                      width={250}
                      height={250}
                      alt="imag"
                    />
                  </Box>
                </Box>
              </Box>
              {/* blog-details-list-two */}
              <Box className="pt-2 text-right px-4 lg:px-0">
                <List>
                  <ListItem className="before:content-[''] text-right text-sm md:text-lg before:block before:w-2 before:h-2 before:rounded-full before:bg-lightGreen before:absolute relative before:-right-0.5">
                    <Typography className="hover:text-highGreen transition-all duration-300 cursor-pointer">
                      در هر مرحله از چرخه طراحی محصول از کشف تا انتقال توسعه
                      دهنده و آزمایش پذیرش کاربر مشارکت داشته باشید.
                    </Typography>
                  </ListItem>
                  <ListItem className="before:content-[''] text-right text-sm md:text-lg before:block before:w-2 before:h-2 before:rounded-full before:bg-lightGreen before:absolute relative before:-right-0.5">
                    <Typography className="hover:text-highGreen transition-all duration-300 cursor-pointer">
                      در هر مرحله از چرخه طراحی محصول از کشف تا انتقال توسعه
                      دهنده و آزمایش پذیرش کاربر مشارکت داشته باشید.
                    </Typography>
                  </ListItem>
                  <ListItem className="before:content-[''] text-right text-sm md:text-lg before:block before:w-2 before:h-2 before:rounded-full before:bg-lightGreen before:absolute relative before:-right-0.5">
                    <Typography className="hover:text-highGreen transition-all duration-300 cursor-pointer">
                      در هر مرحله از چرخه طراحی محصول از کشف تا انتقال توسعه
                      دهنده و آزمایش پذیرش کاربر مشارکت داشته باشید.
                    </Typography>
                  </ListItem>
                  <ListItem className="before:content-[''] text-right text-sm md:text-lg before:block before:w-2 before:h-2 before:rounded-full before:bg-lightGreen before:absolute relative before:-right-0.5">
                    <Typography className="hover:text-highGreen transition-all duration-300 cursor-pointer">
                      در هر مرحله از چرخه طراحی محصول از کشف تا انتقال توسعه
                      دهنده و آزمایش پذیرش کاربر مشارکت داشته باشید.
                    </Typography>
                  </ListItem>
                </List>
              </Box>
              {/* social share */}
              <Box className="w-full rounded-xl px-2 flex-col md:flex-row  mt-4 bg-grayXlight flex justify-start items-start md:items-center gap-2 md:justify-between">
                <Box className="flex items-center gap-2 ">
                  <Typography className="text-xl">
                    اشتراک گذاری پست :
                  </Typography>
                  <SocialShare />
                </Box>
                <Box className="flex text-sm text-mainWhite items-center justify-center bg-highGreen px-5 rounded-full py-2 hover:bg-black transition-all duration-300">
                  بازاریابی
                </Box>
              </Box>
              {/* form */}
              <Box
                className="mt-12"
                sx={{
                  mx: "auto",
                  p: 3,
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  className="py-2 mb-4"
                  gutterBottom
                >
                  نظر بدهید
                </Typography>
                <form id="contactForm" noValidate>
                  <Grid2 container spacing={2}>
                    {/* Name */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        required
                        id="name"
                        name="name"
                        label="نام شما"
                        variant="outlined"
                        inputProps={{
                          "data-error": "لطفا نام خود را وارد کنید",
                        }}
                      />
                    </Grid2>

                    {/* Email */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        required
                        id="email"
                        name="email"
                        type="email"
                        label="ایمیل شما"
                        variant="outlined"
                        inputProps={{
                          "data-error": "لطفا ایمیل خود را وارد کنید",
                        }}
                      />
                    </Grid2>

                    {/* Website */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        required
                        id="website"
                        name="website"
                        label="وبسایت شما"
                        variant="outlined"
                        inputProps={{
                          "data-error": "لطفا وبسایت خود را وارد کنید",
                        }}
                      />
                    </Grid2>

                    {/* Subject */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        required
                        id="msg_subject"
                        name="msg_subject"
                        label="موضوع شما"
                        variant="outlined"
                        inputProps={{
                          "data-error": "لطفا موضوع خود را وارد کنید",
                        }}
                      />
                    </Grid2>

                    {/* Comment */}
                    <Grid2 size={12}>
                      <TextField
                        fullWidth
                        required
                        id="comment"
                        name="comment"
                        label="نظر شما"
                        variant="outlined"
                        multiline
                        rows={5}
                        inputProps={{ "data-error": "پیام شما" }}
                      />
                    </Grid2>

                    {/* Checkbox */}
                    <Grid2 size={12} className="justify-start text-right">
                      <FormControlLabel
                        control={<Checkbox id="chb1" />}
                        label="برای دفعه بعد که نظر می دهم نام، ایمیل و وب سایت من را در این مرورگر ذخیره کنید."
                      />
                    </Grid2>

                    {/* Submit Button */}
                    <Grid2 className="block">
                      <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                      >
                        ارسال پیام
                      </Button>
                    </Grid2>
                  </Grid2>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BlogDetail;
