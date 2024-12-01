import db from "@/db/db.json";
import { Box, Checkbox, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

const CandidatesWidget = () => {
  const { jobCategory } = db;
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Box className="flex flex-col gap-5">
      {jobCategory?.map((item) => (
        <>
          <Box className="bg-grayXlight rounded-xl p-8">
            <Typography className="text-lg font-medium mb-2">
              {item.title}
            </Typography>
            <FormControl sx={{ padding: 0 }} className="w-full ">
              {item.categories.map((category) => (
                <Box className="w-f flex items-center text-gray-600 justify-between w-full group">
                  <FormControlLabel
                    className="w-full"
                    sx={{ margin: 0 }}
                    value={category.title}
                    control={
                      <Checkbox
                        {...label}
                        sx={{ margin: 0, padding: 1 }}
                        color="success"
                      />
                    }
                    label={category.title}
                  />
                </Box>
              ))}
            </FormControl>
          </Box>
        </>
      ))}
    </Box>
  );
};

export default CandidatesWidget;
