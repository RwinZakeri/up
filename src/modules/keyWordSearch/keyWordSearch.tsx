import { Box, FormControl, TextField, Typography } from "@mui/material";

const KeyWordSearch = () => {
  return (
    <Box className="bg-grayXlight  p-4  mb-8 rounded-xl">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        <Typography className="font-medium text-lg">
          ایجاد هشدار شغلی
        </Typography>
      </Box>

      <FormControl sx={{ width: "100%" }}>
        <TextField
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginBottom: 2, borderRadius: 100 }}
          label="کلمات کلیدی / عنوان شغلی"
        />
      </FormControl>
    </Box>
  );
};

export default KeyWordSearch;
