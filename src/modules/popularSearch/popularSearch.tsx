import { popularSearch } from "@/types/type";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const PopularSearch = ({
  popularSearch,
}: {
  popularSearch: popularSearch[];
}) => {
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      <Typography variant="h6" component="div" className="font-light">
        جستجوهای محبوب :
      </Typography>
      <Box className="flex gap-1 text-gray-500 text-xs items-center">
        {popularSearch.map((item, index) => (
          <Typography className="hover:text-highGreen">
            <Link href={"/"}>
              {item?.title}
              {index}
            </Link>
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default PopularSearch;
