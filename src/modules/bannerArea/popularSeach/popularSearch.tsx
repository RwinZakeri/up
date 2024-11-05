import { Box, Typography } from "@mui/material";

const PopularSearch = async () => {
  return (
    <Box sx={{ display: "felx" }}>
      <Typography variant="h6" component="div">
        جستجوهای محبوب :
      </Typography>
      <Box sx={{ display: "inline" }}>
        <Typography
          variant="h6"
          component="span"
          sx={{ color: "inherit", textDecoration: "underline", marginX: 1 }}
        >
          web
        </Typography>
      </Box>
    </Box>
  );
};

export default PopularSearch;
