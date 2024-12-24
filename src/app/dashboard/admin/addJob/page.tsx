"use client";
import formatNumberWithCommas from "@/lib/format/formatNumberWithCommas";
import AnimateLine from "@/modules/animateLine/animateLine";
import {
  Box,
  Container,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const AddJobForm = () => {
  const [state, setState] = useState<string>("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numberWithCommas = formatNumberWithCommas(value);
    setState(numberWithCommas);
  };

  return (
    <Box dir="rtl">
      {" "}
      {/* Apply RTL to entire component */}
      <Container maxWidth="lg" className="py-40">
        <Paper className="p-8">
          <Typography className="text-xl font-medium">
            ارسال فرصت  جدید
          </Typography>
          <Box className="w-fit">
            <AnimateLine />
          </Box>
          <FormControl className="w-full flex flex-col gap-7 py-8">
            <Box>
              <Typography>عنوان فرصت </Typography>
              <TextField
                className="w-full mt-4"
                id="filled-basic"
                label="عنوان فرصت "
                variant="filled"
              />
            </Box>
            <Box>
              <Typography>شرح فرصت </Typography>
              <TextField
                className="w-full mt-4"
                id="filled-multiline"
                label="توضیح کوتاه..."
                variant="filled"
                multiline
                rows={6} // Adjust initial rows as needed
              />
            </Box>
            <Box>
              <Typography>حقوق و دستمزد</Typography>

              <OutlinedInput
                onChange={changeHandler}
                className="w-96 mt-3"
                value={state}
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">تومان</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </Box>
          </FormControl>
        </Paper>
      </Container>
    </Box>
  );
};

export default AddJobForm;
