"use client";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const BannerForm = () => {
  return (
    <form className=" w-full relative z-10 flex flex-col lg:flex-row gap-5 md:gap-2 p-2 lg:h-[72px] rounded-xl my-6 bg-mainWhite ">
      <Box className="lg:w-3/4 flex gap-5 md:gap-2 flex-col md:flex-row lg:h-full">
        <TextField
          id="outlined-basic"
          label="کلمات کلیدی / عنوان شغلی"
          variant="outlined"
          className="w-full bg-lightGreen/15 lg:bg-transparent min-h-full"
          size="small"
          sx={{
            height: { lg: "100%" }, // Set full height for large screens
            "& .MuiOutlinedInput-root": {
              height: "100%", // Make the input itself take full height
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-basic"
          label="شهر یا کد پستی"
          variant="outlined"
          className="w-full lg:w- bg-lightGreen/15 lg:bg-transparent min-h-full"
          size="small"
          sx={{
            height: { lg: "100%" }, // Set full height for large screens
            "& .MuiOutlinedInput-root": {
              height: "100%", // Make the input itself take full height
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControl fullWidth size="small" sx={{ height: { lg: "100%" } }}>
          <InputLabel id="demo-simple-select-label">
            یک دسته را انتخاب کنید
          </InputLabel>
          <Select
            className="lg:bg-transparent  bg-lightGreen/15"
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"hello"}
            label="یک دسته را انتخاب کنید"
            onChange={() => console.log("object")}
            sx={{
              height: "100%", // Full height for Select component
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button
        type="submit"
        className="lg:w-1/4"
        variant="contained"
        size="large"
      >
        جستجوی شغل
      </Button>
    </form>
  );
};

export default BannerForm;
