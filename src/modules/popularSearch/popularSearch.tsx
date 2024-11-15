import { popularSearch } from "@/types/type";
import { Box, Typography } from "@mui/material";

const PopularSearch = ({
  popularSearch,
}: {
  popularSearch: popularSearch[];
}) => {
  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      <Typography variant="h6" component="div" className="font-light">
        جستجوهای محبوب :
      </Typography>
      <Box className="flex gap-2 text-gray-500 text-xs items-center">
        {popularSearch.map((item) => (
          <Typography>{item?.title} ,</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default PopularSearch;
