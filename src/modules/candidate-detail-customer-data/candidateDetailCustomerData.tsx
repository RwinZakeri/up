import { Box, Typography } from "@mui/material";
import Link from "next/link";

const CandidateDetailCustomerData = () => {
  return (
    <Box className="p-8">
      <Typography className="text-lg text-highGreen font-semibold mb-3">
        اطلاعات مشتری
      </Typography>
      <Typography className="text-gray-400 flex flex-col mb-3">
        موقعیت
        <Link
          href={`tel:989032204382`}
          className="text-black text-lg hover:text-highGreen transition-all duration-300"
        >
          ایمیل
        </Link>
      </Typography>
      <Typography className="text-gray-400 flex flex-col mb-3">
        ایمیل
        <Link
          href={`mailto:hello@zoben.com`}
          className="text-black text-lg hover:text-highGreen transition-all duration-300"
        >
          hello@zoben.com
        </Link>
      </Typography>
      <Typography className="text-gray-400 flex flex-col mb-3">
        تلفن
        <Link
          href={`tel:989032204382`}
          className="text-black text-lg hover:text-highGreen transition-all duration-300"
        >
          +44 7123 456 7890
        </Link>
      </Typography>
    </Box>
  );
};

export default CandidateDetailCustomerData;
