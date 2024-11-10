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
      <Grid container spacing={4}>
        {/* Pricing Table */}
        <Grid item xs={12} md={6}>
          <Box component="form">
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className="!border-b-0"></TableCell>
                    <TableCell className="text-xl font-medium">
                      250 تومان <span className="text-sm">/ ماه</span>
                    </TableCell>
                    <TableCell className="text-xl font-medium">
                      500 تومان <span className="text-sm">/ ماه</span>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <a href="#">آنچه شما دریافت می کنید</a>
                    </TableCell>
                    <TableCell>
                      <a href="#">طرح توسعه</a>
                    </TableCell>
                    <TableCell>
                      <span>طرح حق بیمه</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <a href="#">پست های شغلی شامل</a>
                    </TableCell>
                    <TableCell>
                      <a href="#">پست 10 شغل</a>
                    </TableCell>
                    <TableCell>
                      <span>پست 22 شغل</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <a href="#">شغل ویژه</a>
                    </TableCell>
                    <TableCell>
                      <a href="#">20</a>
                    </TableCell>
                    <TableCell>
                      <span>نامحدود</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <a href="#">روزهای نمایش داده شده</a>
                    </TableCell>
                    <TableCell>
                      <a href="#">به مدت 10 روز</a>
                    </TableCell>
                    <TableCell>
                      <span>به مدت 50 روز</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <a href="#">آمار ارسال شغل</a>
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <CheckIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <CheckIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <a href="#">پست های هایلایت شده</a>
                    </TableCell>
                    <TableCell>
                      <a href="#">5 پست</a>
                    </TableCell>
                    <TableCell>
                      <span>نامحدود</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <a href="#">روزهای انقضای فهرست</a>
                    </TableCell>
                    <TableCell>
                      <a href="#">60 روز</a>
                    </TableCell>
                    <TableCell>
                      <span>200 روز</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <a href="#">پشتیبانی ایمیل</a>
                    </TableCell>
                    <TableCell>
                      <a href="#">20 روز</a>
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <CheckIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        className="w-full"
                      >
                        خرید <ShoppingCartIcon />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        className="w-full"
                      >
                        خرید کن <ShoppingCartIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>

        {/* Pricing Content */}
        <Grid item xs={12} md={6}>
          <Box className="pl-5">
            <Typography variant="h4" gutterBottom>
              بهترین روش های <b>قیمت گذاری</b>
            </Typography>
            <Box className="mb-4 w-24 h-1 bg-gray-400" />
            <Typography variant="body1" paragraph>
              لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
              ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
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
      </Grid>
    </Box>
  );
};

export default PricingTable;
