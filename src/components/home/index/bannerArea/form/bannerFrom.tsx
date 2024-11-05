"use client";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const BannerFrom = () => {
  return (
    <form className="flex flex-col gap-4 px-4 py-8 rounded-xl my-4 bg-mainWhite">
      <TextField
        id="outlined-basic"
        label="کلمات کلیدی / عنوان شغلی"
        variant="outlined"
        className="w-full bg-lightGreen/15"
        size="small"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
      <TextField
        id="outlined-basic"
        label="شهر یا کد پستی"
        variant="outlined"
        className="w-full bg-lightGreen/15"
        size="small"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            ),
          },
        }}
      />

      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">
          یک دسته را انتخاب کنید"
        </InputLabel>
        <Select
          className="bg-lightGreen/15"
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"hello"}
          label="یک دسته را انتخاب کنید"
          onChange={() => console.log("object")}
        >
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained">
        {" "}
        جستجوی شغل
      </Button>
    </form>
  );
};

export default BannerFrom;
