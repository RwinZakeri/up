"use client";

import db from "@/db/db.json";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import React from "react";
const AccordionQuestions = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const { question } = db;
  const handleExpansion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box className="flex-col md:flex-row items-center justify-center flex justify-center gap-4 flex-wrap pb-[50px]">
      {question.map((item, index) => (
        <Box key={item.id} className={`w-11/12  md:w-[45%] `}>
          <Accordion
            disableGutters
            className="bg-[#F5FBF6] "
            expanded={expanded === `panel${item.id}`}
            onChange={handleExpansion(`panel${item.id}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
              className="bg-[white] box-border p-4"
            >
              <Typography className="text-lg font-bold">
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-[white]">
              <Typography className="text-base">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
};

export default AccordionQuestions;
