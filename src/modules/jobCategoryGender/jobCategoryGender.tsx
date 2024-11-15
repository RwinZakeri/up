import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
const JobCategoryGender = () => {
  return (
    <Box className="bg-grayXlight mt-8 px-3 py-4 rounded-xl">
      <Typography className="text-lg font-medium mb-4">جنسیت داوطلب</Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">جنسیت</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={0}
          label="جنسیت"
          sx={{ height: 45 }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default JobCategoryGender;
