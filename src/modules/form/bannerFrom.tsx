"use client";

import { seachMenuItems } from "@/db/db.json"; // Import JSON directly
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";

// Define types for categories
interface Subcategory {
  id: number;
  name: string;
  subcategories?: Subcategory[];
}

interface Category {
  id: number;
  name: string;
  subcategories?: Subcategory[];
}

// Define the type for seachMenuItems (imported from JSON)
interface SeachMenuItem extends Category {}

const BannerForm = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<number | null>(
    null
  );
  const [selectedSubSubcategory, setSelectedSubSubcategory] = useState<
    number | null
  >(null);

  const handleCategoryChange = (event: SelectChangeEvent<string | number>) => {
    setSelectedCategory(Number(event.target.value)); // Cast to number to match the state type
    setSelectedSubcategory(null); // Reset subcategory
    setSelectedSubSubcategory(null); // Reset sub-subcategory
  };

  const handleSubcategoryChange = (
    event: SelectChangeEvent<string | number>
  ) => {
    setSelectedSubcategory(Number(event.target.value)); // Cast to number to match the state type
    setSelectedSubSubcategory(null); // Reset sub-subcategory
  };

  const handleSubSubcategoryChange = (
    event: SelectChangeEvent<string | number>
  ) => {
    setSelectedSubSubcategory(Number(event.target.value)); // Cast to number to match the state type
  };

  // Helper function to find subcategories
  const findSubcategories = (
    id: number | null,
    data: Category[]
  ): Subcategory[] => {
    return data.find((cat) => cat.id === id)?.subcategories || [];
  };

  return (
    <form className="w-full relative z-10 flex flex-col lg:flex-row gap-5 md:gap-2 py-8 lg:py-2 lg:h-[72px] rounded-xl my-6 bg-grayXlight px-4">
      <Box className="lg:w-3/4 flex gap-5 md:gap-2 flex-col md:flex-row lg:h-full">
        {/* Keyword Search */}
        <TextField
          id="outlined-basic"
          label="کلمات کلیدی / عنوان فرصت "
          variant="outlined"
          className="w-full bg-lightGreen/15 lg:bg-transparent min-h-full"
          size="small"
          sx={{
            height: { lg: "100%" },
            "& .MuiOutlinedInput-root": {
              height: "100%",
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

        {/* Category Dropdown */}
        <FormControl fullWidth size="small" sx={{ height: { lg: "100%" } }}>
          <InputLabel id="category-select-label">
            یک دسته را انتخاب کنید
          </InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={selectedCategory || ""}
            onChange={handleCategoryChange}
            className="lg:bg-transparent bg-lightGreen/15"
            sx={{ height: "100%" }}
          >
            {seachMenuItems.map((category, index) => (
              <MenuItem key={index + 1} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Subcategory Dropdown */}
        {selectedCategory &&
          findSubcategories(selectedCategory, seachMenuItems).length > 0 && (
            <FormControl fullWidth size="small" sx={{ height: { lg: "100%" } }}>
              <InputLabel id="subcategory-select-label">
                یک زیر دسته را انتخاب کنید
              </InputLabel>
              <Select
                labelId="subcategory-select-label"
                id="subcategory-select"
                value={selectedSubcategory || ""}
                onChange={handleSubcategoryChange}
                className="lg:bg-transparent bg-lightGreen/15"
                sx={{ height: "100%" }}
              >
                {findSubcategories(selectedCategory, seachMenuItems).map(
                  (subcategory, index) => (
                    <MenuItem key={index + 1} value={subcategory.id}>
                      {subcategory.name}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          )}

        {/* Sub-Subcategory Dropdown */}
        {selectedSubcategory &&
          findSubcategories(
            selectedSubcategory,
            findSubcategories(selectedCategory, seachMenuItems)
          ).length > 0 && (
            <FormControl fullWidth size="small" sx={{ height: { lg: "100%" } }}>
              <InputLabel id="subsubcategory-select-label">
                یک زیر زیر دسته را انتخاب کنید
              </InputLabel>
              <Select
                labelId="subsubcategory-select-label"
                id="subsubcategory-select"
                value={selectedSubSubcategory || ""}
                onChange={handleSubSubcategoryChange}
                className="lg:bg-transparent bg-lightGreen/15"
                sx={{ height: "100%" }}
              >
                {findSubcategories(
                  selectedSubcategory,
                  findSubcategories(selectedCategory, seachMenuItems)
                ).map((subsubcategory, index) => (
                  <MenuItem key={index + 1} value={subsubcategory.id}>
                    {subsubcategory.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
      </Box>

      {/* Search Button */}
      <Button
        type="submit"
        className="lg:w-1/4"
        variant="contained"
        size="large"
      >
        جستجوی
      </Button>
    </form>
  );
};

export default BannerForm;
