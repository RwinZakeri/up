"use client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";
const AccordionQuestions = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <Box className=" flex justify-center gap-y-5 gap-x-5 flex-wrap pb-[50px]">
      <Box className="w-[45%] bg-red-500">
        <Accordion
          disableGutters
          className=" bg-[#F5FBF6] mb-[20px]"
          expanded={expanded}
          onChange={handleExpansion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="bg-[white]"
          >
            <Typography className="text-xl font-bold">
              چگونه می‌توانم به‌عنوان پژوهشگر عضو سایت شوم؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-[white]">
            <Typography>
              برای عضویت به‌عنوان پژوهشگر، کافی است در صفحه ثبت‌نام اطلاعات
              اولیه خود را وارد کرده و پس از تأیید ایمیل، پروفایل خود را تکمیل
              کنید. با تکمیل مهارت‌ها و سابقه کاری، می‌توانید برای پروژه‌های
              مرتبط درخواست ارسال کنید.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className=" bg-[#F5FBF6]" disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className="bg-[white]"
          >
            <Typography>
              {" "}
              آیا مراکز تحقیقات و سازمان‌ها نیز می‌توانند عضو شوند؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-[white]">
            <Typography>
              بله، مراکز تحقیقات و سازمان‌ها می‌توانند با ایجاد پروفایل اختصاصی
              خود، پروژه‌های پژوهشی تعریف کنند و پژوهشگرانی را که متناسب با
              نیازشان هستند، پیدا کنند.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="mb-[20px] bg-[#F5FBF6]" disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="bg-[white]"
          >
            <Typography>
              چگونه می‌توانم مطمئن شوم که پروژه‌های موجود معتبر هستند؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-[white]">
            <Typography>
              تمام پروژه‌ها و پروفایل‌های سازمانی قبل از انتشار توسط تیم ما
              بررسی و تأیید می‌شوند. همچنین، هر پژوهشگر و سازمان دارای سیستم
              امتیازدهی و بازخورد است که به شفافیت بیشتر کمک می‌کند.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box className="w-[45%]">
        <Accordion className="mb-[20px] bg-[#F5FBF6]" disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="bg-[white]"
          >
            <Typography>
              چگونه می‌توانم درخواست همکاری برای یک پروژه ارسال کنم؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-[white]">
            <Typography>
              پس از مشاهده جزئیات پروژه، اگر مهارت‌ها و تجربه‌های شما با نیازهای
              پروژه مطابقت دارد، می‌توانید از طریق دکمه "ارسال درخواست"،
              علاقه‌مندی خود را به مدیر پروژه اعلام کنید. در صورت تأیید،
              می‌توانید کار بر روی پروژه را آغاز کنید.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className=" bg-[#F5FBF6]" disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
            className="bg-[white]"
          >
            <Typography>هزینه عضویت در سایت چگونه است؟</Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-[white]">
            <Typography>
              عضویت پایه برای پژوهشگران رایگان است. مراکز و سازمان‌ها نیز
              می‌توانند به‌صورت رایگان ثبت‌نام کنند، اما برای دسترسی به امکانات
              پیشرفته مانند افزایش تعداد پروژه‌ها یا استفاده از ابزارهای خاص،
              بسته‌های اشتراکی ویژه ارائه می‌شود.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="mb-[20px] bg-[#F5FBF6]" disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="bg-[white]"
          >
            <Typography>
              آیا امکان ارتباط مستقیم بین پژوهشگر و مدیر پروژه وجود دارد؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-[white]">
            <Typography>
              بله، پس از تأیید درخواست همکاری، پژوهشگر و مدیر پروژه می‌توانند از
              طریق بخش پیام‌های سایت به‌صورت مستقیم با یکدیگر در ارتباط باشند.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
export default AccordionQuestions;
