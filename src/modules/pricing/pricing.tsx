// "use client";
import myImage from "@/assets/images/user-img/user-img1.jpg";
import CheckIcon from "@mui/icons-material/Check";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Table,
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
    <Box className="pt-24 pb-16">
      <Box component="form">
    <TableContainer>
      <TableHead>
        <TableRow>
          <TableCell>آنچه شما دریافت می کنید</TableCell>
          <TableCell className="">طرح توسعه</TableCell>
          <TableCell className="border-t border-l">پست 22 شغل</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        <TableRow>
          <TableCell align="center">پست های شغلی شامل</TableCell>
          <TableCell align="center" className="border-x">
            پست 10 شغل
          </TableCell>
          <TableCell align="center" className="border-t border-l">
            پست 22 شغل
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell align="center">شغل ویژه</TableCell>
          <TableCell align="center" className="border-x">
            20
          </TableCell>
          <TableCell align="center" className="border-t border-l">
            نامحدود
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell align="center"> روزهای نمایش داده شده</TableCell>
          <TableCell align="center" className="border-x">
            به مدت 10 روز
          </TableCell>
          <TableCell align="center" className="border-t border-l">
            به مدت 50 روز
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell align="center"> امار ارسال شغل</TableCell>
          <TableCell align="center" className="border-x">
            2
          </TableCell>
          <TableCell align="center" className="border-t border-l">
            3
          </TableCell>
        </TableRow>

             <TableRow>
        <TableCell align="center"> پست های هایلایت شده</TableCell>
        <TableCell align="center" className="border-x">
          5 پست
        </TableCell>
        <TableCell align="center" className="border-t border-l">
          نامحدود
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell align="center"> روز های انقضای فهرست</TableCell>
        <TableCell align="center" className="border-x">
          60 روز
        </TableCell>
        <TableCell align="center" className="border-t border-l">
        
          200 روز
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell align="center"> پشتیبانی ایمیل</TableCell>
        <TableCell align="center" className="border-x">
        
          20 روز
        </TableCell>
        <TableCell align="center" className="border-t border-l">
        
          3
        </TableCell>
      </TableRow>
      </TableBody>
    </TableContainer>
     </Box>

    /* Pricing Content */
     <Grid item xs={12} md={6}>
          <Box className="pl-5">
            <Typography variant="h4" gutterBottom>
              بهترین روش های <b className="text-lightGreen">قیمت گذاری</b>
            </Typography>
            <Box className="mb-4 w-24 h-1 bg-gray-400" />
            <Typography variant="body1" paragraph>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد
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
        </Grid> 
    // </Box>
  );
};

export default PricingTable;
