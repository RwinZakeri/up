import db from "@/db/db.json";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

const JobCategory = () => {
  const { jobCategory } = db;
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      {jobCategory?.map((item) => (
        <Accordion
          defaultExpanded
          className="bg-grayXlight rounded-xl"
          sx={{
            marginTop: 4,
            padding: 0.5, // Adds more padding to make it appear bigger
            boxShadow: "none",
            border: "none", // Ensures no border appears at the top
            "&:before": {
              display: "none", // Removes the default outline border on expansion
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ fontSize: "2rem" }} />} // Larger expand icon
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography className="text-lg font-medium">
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 2 }}>
            <FormControl sx={{ padding: 0 }} className="w-full ">
              {item?.categories?.map((category) => (
                <Box className="flex items-center justify-between w-full group">
                  <FormControlLabel
                    sx={{ margin: 0 }}
                    value={category.title}
                    control={<Checkbox {...label} color="success" />}
                    label={category.title}
                  />
                  <Typography
                    sx={{
                      fontSize: "1.25rem", // Increase font size for category count
                      width: 24,
                      height: 24,
                    }}
                    className="bg-highGreen/20 text-highGreen text-sm w-6 flex items-center justify-center ml-1 h-6 group-hover:text-mainWhite group-hover:bg-highGreen cursor-pointer transition-all duration-300"
                  >
                    {category.quantity}
                  </Typography>
                </Box>
              ))}
            </FormControl>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default JobCategory;
