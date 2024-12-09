// "use client";
import myImage from "@/assets/images/user-img/user-img1.jpg";
import { AddShoppingCart } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import {
  Box,
  Button,
  Grid2,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";

const PricingTable = () => {
  return (
    <Box className="standardContainer pt-24 pb-16 mb-40 overflow-x-scroll">
      <Grid2
        container
        spacing={6}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box component="form">
          <TableContainer
            sx={{ "& .MuiTableCell-root": { padding: "1rem 3rem" } }}
          >
            <TableHead>
              <TableRow>
                <TableCell className="border-none"></TableCell>
                <TableCell
                  className="text-lightGreen border-none text-xl"
                  align="center"
                >
                  250 تومان
                  <Typography className="text-mainGray">/ ماه</Typography>
                </TableCell>
                <TableCell
                  className="text-lightGreen border-none text-xl"
                  align="center"
                >
                  500 تومان
                  <Typography className="text-mainGray">/ ماه</Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-xl">
                  آنچه شما دریافت می کنید
                </TableCell>
                <TableCell
                  align="center"
                  className="border-t border-r bg-lightGreenXXs text-lightGreen text-xl"
                >
                  طرح توسعه
                </TableCell>
                <TableCell align="center" className="border-t border-x text-xl">
                  طرح حق بیمه
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell align="right" className="border-r">
                  پست های شغلی شامل
                </TableCell>
                <TableCell
                  align="center"
                  className="border-x bg-lightGreenXXs text-lightGreen"
                >
                  پست 10 شغل
                </TableCell>
                <TableCell align="center" className="border-l">
                  پست 22 شغل
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" className="border-r">
                  شغل ویژه
                </TableCell>
                <TableCell
                  align="center"
                  className="border-x bg-lightGreenXXs text-lightGreen"
                >
                  20
                </TableCell>
                <TableCell align="center" className="border-l">
                  نامحدود
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" className="border-r">
                  {" "}
                  روزهای نمایش داده شده
                </TableCell>
                <TableCell
                  align="center"
                  className="border-x bg-lightGreenXXs text-lightGreen"
                >
                  به مدت 10 روز
                </TableCell>
                <TableCell align="center" className="border-l">
                  به مدت 50 روز
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" className="border-r">
                  {" "}
                  امار ارسال شغل
                </TableCell>
                <TableCell
                  align="center"
                  className="border-x bg-lightGreenXXs text-lightGreen"
                >
                  <CheckIcon />
                </TableCell>
                <TableCell align="center" className="border-l text-lightGreen">
                  <CheckIcon />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" className="border-r">
                  {" "}
                  پست های هایلایت شده
                </TableCell>
                <TableCell
                  align="center"
                  className="border-x bg-lightGreenXXs text-lightGreen"
                >
                  5 پست
                </TableCell>
                <TableCell align="center" className="border-l">
                  نامحدود
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" className="border-r">
                  {" "}
                  روز های انقضای فهرست
                </TableCell>
                <TableCell
                  align="center"
                  className="border-x bg-lightGreenXXs text-lightGreen"
                >
                  60 روز
                </TableCell>
                <TableCell align="center" className="border-l">
                  200 روز
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" className="border-r">
                  {" "}
                  پشتیبانی ایمیل
                </TableCell>
                <TableCell
                  align="center"
                  className="border-x bg-lightGreenXXs text-lightGreen"
                >
                  20 روز
                </TableCell>
                <TableCell align="center" className="border-l text-lightGreen">
                  <CheckIcon />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="center" className="border-none"></TableCell>
                <TableCell
                  align="center"
                  className="border-x bg-lightGreenXXs text-lightGreen"
                >
                  <Button
                    variant="contained"
                    endIcon={<AddShoppingCart />}
                    className="bg-lightGreen text-mainWhite gap-3 px-5 py-3"
                  >
                    خرید
                  </Button>
                </TableCell>
                <TableCell align="center" className="border-l">
                  <Button
                    variant="contained"
                    endIcon={<AddShoppingCart />}
                    className="bg-lightGreen text-mainWhite gap-3 px-5 py-3"
                  >
                    خرید
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </TableContainer>
        </Box>

        {/* Pricing Content  */}

        <Box className="pl-5">
          <Typography variant="h4" gutterBottom>
            بهترین روش های <b className="text-lightGreen">قیمت گذاری</b>
          </Typography>
          <Box className="mb-4 w-24 h-1 bg-gray-400" />
          <Typography variant="body1" className="max-w-[38rem]" paragraph>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد
          </Typography>
          <ul className="list-none flex space-x-3">
            <li>
              <Image
                src={myImage}
                alt="User 1"
                width={50}
                height={50}
                className="rounded-full"
              />
            </li>
            <li>
              <Image
                src={myImage}
                alt="User 2"
                width={50}
                height={50}
                className="rounded-full"
              />
            </li>
            <li>
              <Image
                src={myImage}
                alt="User 3"
                width={50}
                height={50}
                className="rounded-full"
              />
            </li>
            <li>
              <Image
                src={myImage}
                alt="User 4"
                width={50}
                height={50}
                className="rounded-full"
              />
            </li>
            <li>
              <Image
                src={myImage}
                alt="User 5"
                width={50}
                height={50}
                className="rounded-full"
              />
            </li>
          </ul>
          <Typography variant="h6" className="mt-2">
            2000+ کارفرمای برتر
          </Typography>
        </Box>
      </Grid2>
    </Box>
  );
};

export default PricingTable;
