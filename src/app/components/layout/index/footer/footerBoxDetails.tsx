import { Box, Typography } from "@mui/material";
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
        <Box sx={{display: "flex", flexDirection: "column", gap: "0.5rem"}}>
          <Typography variant="h3" component="h3" className="text-2xl mb-4">
            {item.title}
          </Typography>
          <Box component="span" sx={{ color: "#BDBDBD" }}>
            {item.item1}
          </Box>
          <Box component="span" sx={{ color: "#BDBDBD" }}>
            {item.item2}
          </Box>
          <Box component="span" sx={{ color: "#BDBDBD" }}>
            {item.item3}
          </Box>
          <Box component="span" sx={{ color: "#BDBDBD" }}>
            {item.item4}
          </Box>
          <Box component="span" sx={{ color: "#BDBDBD" }}>
            {item.item5}
          </Box>
        </Box>
      ))}
    </>
  );
};

export default FooterBoxDetails;
