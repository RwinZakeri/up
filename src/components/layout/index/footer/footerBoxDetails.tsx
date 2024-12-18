import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const FooterBoxDetails = () => {
  const footerData = [
    {
      id: 1,
      title: "کارفرما",
      item1: "درباره ما",
      item2: "تماس با ما",
      item3: "قوانین و ضوابط",
      item4: "حریم خصوصی",
      item5: "فهرست کاندیداها",
    },
    {
      id: 2,
      title: "کارفرما",
      item1: "درباره ما",
      item2: "تماس با ما",
      item3: "قوانین و ضوابط",
      item4: "حریم خصوصی",
      item5: "فهرست کاندیداها",
    },
    {
      id: 3,
      title: "کارفرما",
      item1: "درباره ما",
      item2: "تماس با ما",
      item3: "قوانین و ضوابط",
      item4: "حریم خصوصی",
      item5: "فهرست کاندیداها",
    },
    {
      id: 4,
      title: "کارفرما",
      item1: "درباره ما",
      item2: "تماس با ما",
      item3: "قوانین و ضوابط",
      item4: "حریم خصوصی",
      item5: "فهرست کاندیداها",
    }
  ];
  return (
    <>
      {footerData.map((item) => (
        <Box key={item.id} className="flex flex-col gap-2">
          <Typography variant="h3" component="h3" className="text-2xl mb-4">
            {item.title}
          </Typography>
          <Link href="#" className="text-gray-500 hover:text-lightGreen">
            {item.item1}
          </Link>
          <Link href="#" className="text-gray-500 hover:text-lightGreen">
            {item.item2}
          </Link>
          <Link href="#" className="text-gray-500 hover:text-lightGreen">
            {item.item3}
          </Link>
          <Link href="#" className="text-gray-500 hover:text-lightGreen">
            {item.item4}
          </Link>
          <Link href="#" className="text-gray-500 hover:text-lightGreen">
            {item.item5}
          </Link>
        </Box>
      ))}
    </>
  );
};

export default FooterBoxDetails;
