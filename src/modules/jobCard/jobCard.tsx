// import myImg from "@/assets/images/recent-job/recent-job1.jpg";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { Box, Button, Typography } from "@mui/material";
// import Image from "next/image";
// const JobCard = () => {
//   return (
//     <Box className="w-full relative px-4 py-6 rounded-xl hover:-translate-y-2 transition-all duration-500 bg-mainWhite group shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
//       <Button
//         sx={{ padding: 0, display: "block" }}
//         className="absolute top-6 left-1"
//       >
//         <BookmarkBorderIcon />
//       </Button>
//       <Box className="flex flex-col md:flex-row gap-3">
//         <Box className="flex items-start justify-between">
//           <Image
//             src={myImg}
//             className="w-16 h-16"
//             alt="my img"
//             width={500}
//             height={500}
//           />
//         </Box>
//         <Box>
//           <Typography className="text-xl font-bold mt-1 group-hover:text-highGreen">
//             طراح محصول
//           </Typography>
//           <Box className="flex gap-10 mt-3">
//             <Typography className="text-sm md:text-base text-gray-500">
//               <BusinessCenterIcon
//                 sx={{ fontSize: 17, marginLeft: 0.5 }}
//                 className="text-highGreen"
//               />
//               طراحی
//             </Typography>
//             <Typography className="text-sm md:text-base text-gray-500">
//               <AccessTimeIcon
//                 sx={{ fontSize: 17, marginLeft: 0.5 }}
//                 className="text-highGreen"
//               />
//               ارسال شده 2 هفته پیش
//             </Typography>
//           </Box>
//           <Typography className="text-sm md:text-base text-gray-500 mt-3">
//             <LocationOnIcon
//               sx={{ fontSize: 17, marginLeft: 0.5 }}
//               className="text-highGreen"
//             />
//             ایران استان تهران میدان آزادی
//           </Typography>
//         </Box>
//       </Box>
//       <Box className="flex flex-col md:items-center md:flex-row justify-between mt-1">
//         <Box
//           sx={{ paddingY: 2, display: "flex", alignItems: "center", gap: 1 }}
//         >
//           <Box>
//             <Typography className="px-4 text-sm  text-highGreen py-1.5 bg-lightGreenXXs w-fit rounded-full ">
//               تمام وقت
//             </Typography>
//           </Box>
//           <Box>
//             <Typography className="px-4 text-sm  text-lightOrange py-1.5 bg-lightRed w-fit rounded-full ">
//               فریلنسر
//             </Typography>
//           </Box>
//           <Box>
//             <Typography className="px-4 text-sm  text-pink py-1.5 bg-lightPink w-fit rounded-full ">
//               داخلی
//             </Typography>
//           </Box>
//           <Box>
//             <Typography className="px-4 text-sm  text-mainRed bg-lightXRed py-1.5  w-fit rounded-full ">
//               فوری
//             </Typography>
//           </Box>
//         </Box>
//         <Box className="flex mt-4 md:mt-0 gap-1">
//           <Typography className="font-medium">150 تا 180 تومان </Typography>
//           <Typography className="text-gray-500">/هر هفته</Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default JobCard;

import myImg from "@/assets/images/recent-job/recent-job1.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const JobCard = () => {
  return (
    <Box className="w-full relative px-4 py-6 rounded-xl bg-mainWhite shadow-[0_3px_10px_rgba(0,0,0,0.2)] group hover:-translate-y-2 transition-all duration-500">
      {/* Bookmark Button */}
      <Button className="absolute top-6 left-4 p-0" aria-label="bookmark">
        <BookmarkBorderIcon className="text-gray-400" />
      </Button>

      {/* Job Content */}
      <Box className="flex flex-col md:flex-row gap-4">
        {/* Image */}
        <Image
          src={myImg}
          alt="Job image"
          className="w-16 h-16 rounded-full"
          width={64}
          height={64}
        />

        {/* Job Details */}
        <Box className="flex-1">
          <Typography className="text-xl font-bold group-hover:text-highGreen transition-colors">
            طراح محصول
          </Typography>
          <Box className="flex gap-6 mt-3">
            <Typography className="text-sm text-gray-500 flex items-center">
              <BusinessCenterIcon
                className="text-highGreen mr-1"
                fontSize="small"
              />
              طراحی
            </Typography>
            <Typography className="text-sm text-gray-500 flex items-center">
              <AccessTimeIcon
                className="text-highGreen mr-1"
                fontSize="small"
              />
              ارسال شده 2 هفته پیش
            </Typography>
          </Box>
          <Typography className="text-sm text-gray-500 flex items-center mt-2">
            <LocationOnIcon className="text-highGreen mr-1" fontSize="small" />
            ایران استان تهران میدان آزادی
          </Typography>
        </Box>
      </Box>

      {/* Job Footer */}
      <Box className="flex flex-wrap items-center justify-between mt-4">
        {/* Job Tags */}
        <Box className="flex gap-2">
          <Typography className="px-4 py-1.5 text-sm text-highGreen bg-lightGreenXXs rounded-full">
            تمام وقت
          </Typography>
          <Typography className="px-4 py-1.5 text-sm text-lightOrange bg-lightRed rounded-full">
            فریلنسر
          </Typography>
          <Typography className="px-4 py-1.5 text-sm text-pink bg-lightPink rounded-full">
            داخلی
          </Typography>
          <Typography className="px-4 py-1.5 text-sm text-mainRed bg-lightXRed rounded-full">
            فوری
          </Typography>
        </Box>

        {/* Salary Info */}
        <Box className="flex items-center gap-1 text-sm text-gray-500 mt-2 md:mt-0">
          <Typography className="font-medium text-gray-800">
            150 تا 180 تومان
          </Typography>
          <Typography>/هر هفته</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default JobCard;
