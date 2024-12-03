import { Box, Skeleton, Typography } from "@mui/material";

const BlogSkeleton = () => {
  return (
    <Box className="flex items-center gap-5 flex-wrap justify-center">
      <Box className="w-fit">
        <Skeleton variant="rectangular" width={350} height={280} />
        <Typography component="div" variant={"h6"}>
          <Skeleton />
        </Typography>
        <Typography component="div" variant={"h6"}>
          <Skeleton />
        </Typography>
      </Box>
      <Box>
        <Skeleton variant="rectangular" width={350} height={280} />
        <Typography component="div" variant={"h6"}>
          <Skeleton />
        </Typography>
        <Typography component="div" variant={"h6"}>
          <Skeleton />
        </Typography>
      </Box>
      <Box>
        <Skeleton variant="rectangular" width={350} height={280} />
        <Typography component="div" variant={"h6"}>
          <Skeleton />
        </Typography>
        <Typography component="div" variant={"h6"}>
          <Skeleton />
        </Typography>
      </Box>
      <Box>
        <Skeleton variant="rectangular" width={350} height={280} />
        <Typography component="div" variant={"h6"}>
          <Skeleton />
        </Typography>
        <Typography component="div" variant={"h6"}>
          <Skeleton />
        </Typography>
      </Box>
      <Box>
        <Skeleton variant="rectangular" width={350} height={280} />
        <Typography component="div" variant={"h6"}>
          <Skeleton />
        </Typography>
        <Typography component="div" variant={"h6"}>
          <Skeleton />
        </Typography>
      </Box>
      <Box>
        <Skeleton variant="rectangular" width={350} height={280} />
        <Typography component="div" variant={"h6"}>
          <Skeleton />
        </Typography>
        <Typography component="div" variant={"h6"}>
          <Skeleton />
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogSkeleton;
