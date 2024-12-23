"use client";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";

const JobListStatus = () => {
  const [firstSelectValue, setFirstSelectValue] = useState("");
  const [secondSelectValue, setSecondSelectValue] = useState("");

  return (
    <Box className="flex w-full  flex-col md:flex-row  md:justify-between md:items-center ">
      <Typography className="text-lg font-medium my-2">
        نمایش 1 تا 6 از 145 نتیجه
      </Typography>

      <Box className="flex w-full md:w-2/5 flex-col md:flex-row gap-2">
        {/* First Select Dropdown */}
        <FormControl fullWidth className="w-full mt-2 md:mt-0">
          <InputLabel id="first-select-label">بر اساس </InputLabel>
          <Select
            labelId="first-select-label"
            id="first-select"
            value={firstSelectValue}
            label="بر اساس )"
            onChange={(e) => setFirstSelectValue(e.target.value)}
            sx={{ height: 45 }}
          >
            <MenuItem value={10}>Rating</MenuItem>
            <MenuItem value={20}>درصد</MenuItem>
            <MenuItem value={30}>ستاره</MenuItem>
          </Select>
        </FormControl>

        {/* Second Select Dropdown */}
        <FormControl fullWidth className="w-full mt-2 md:mt-0">
          <InputLabel id="second-select-label">06 در هر صفحه</InputLabel>
          <Select
            labelId="second-select-label"
            id="second-select"
            value={secondSelectValue}
            label="06 در هر صفحه"
            onChange={(e) => setSecondSelectValue(e.target.value)}
            sx={{ height: 45 }}
          >
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default JobListStatus;
