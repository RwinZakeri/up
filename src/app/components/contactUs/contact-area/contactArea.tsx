"use client";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { useState } from "react";
const ContactArea = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<{ email: boolean }>({ email: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setErrors({ email: true });
      return;
    }

    console.log({ email, name, phoneNumber, subject, message, termsAccepted });

    // Reset form
    setEmail("");
    setName("");
    setPhoneNumber("");
    setSubject("");
    setMessage("");
    setTermsAccepted(false);
    setErrors({ email: false });
  };

  return (
    <Container
      className="mt-[30px] w-[60%] mx-auto border-[1px] border-[#bbbbbb] rounded-[10px]"
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 2 }}
    >
      <Typography variant="h4" mb={2} textAlign="center">
       نظر بدهید
      </Typography>
 <Box>
 <TextField
        label="ایمیل شما"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        helperText={errors.email ? "لطفا ایمیل خود را وارد کنید" : ""}
        sx={{ mb: 2}}
      />
      <TextField
        label="نام شما"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="شماره تلفن"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField 
        label="موضوع شما"
        variant="outlined"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="پیام شما"
        variant="outlined"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{ mb: 2}}
      />
 </Box>
      <FormControlLabel
        control={
          <Checkbox
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
        }
        label="پذیرفتن قوانین و شرایط و حریم خصوصی."
      />
      <Button type="submit" variant="contained" color="primary">
        ارسال پیام
      </Button>
    </Container>
  );
};

export default ContactArea;
