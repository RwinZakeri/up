import { popularSearch } from "@/types/type";
import { Box, Typography } from "@mui/material";

const PopularSearch = ({
  popularSearch,
}: {
  popularSearch: popularSearch[];
}) => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Typography variant="h6" component="div" className="font-light">
        جستجوهای محبوب :
      </Typography>
      <Box>
        {popularSearch.map((item) => (
          <Typography
            variant="h6"
            className="text-mainGray font-light"
            sx={{ color: "inherit", marginX: 0.5, display: "inline" }}
          >
            {item?.title}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default PopularSearch;
