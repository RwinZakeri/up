import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const JobListStatus = () => {
  return (
    <Box className="flex items-start justify-between flex-col  bg-green-500">
      <Box className="w-2/5">
        <Typography className="text-lg font-medium">
          نمایش 1 تا 6 از 145 نتیجه
        </Typography>
      </Box>
      <Box className="flex w-full lg:w-3/5 gap-16 justify-between lg:gap-4 mt-3">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            className="bg-grayXlight rounded-lg"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"age"}
            label="Age"
            sx={{ height: "40px", width: "100%" }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            className="bg-grayXlight rounded-lg"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"age"}
            label="Age"
            sx={{ height: "40px", width: "100%" }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default JobListStatus;
