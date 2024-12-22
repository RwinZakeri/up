import notifImage from "@/assets/images/alarm.png";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";

import Image from "next/image";
const NotificationJob = () => {
  return (
    <Box className="bg-grayXlight  p-4  mb-8 rounded-xl">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        <Typography className="font-medium">ایجاد هشدار فرصت </Typography>
        <Image
          src={notifImage}
          alt="alarm"
          className="w-6"
          width={40}
          height={40}
        />
      </Box>
      <Typography className="text-gray-400" sx={{ marginBottom: 3 }}>
        اکنون یک هشدار فرصت ایجاد کنید و هیچ به‌روزرسانی فرصت را از دست ندهید.
      </Typography>
      <FormControl sx={{ width: "100%" }}>
        <TextField
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginBottom: 2, borderRadius: 100 }}
          label="کلمات کلیدی / عنوان فرصت "
        />
        <Button variant="contained" sx={{ width: "fit-content" }} type="submit">
          ایجاد هشدار فرصت
          <BusinessCenterIcon sx={{ marginRight: 1 }} />
        </Button>
      </FormControl>
    </Box>
  );
};

export default NotificationJob;
