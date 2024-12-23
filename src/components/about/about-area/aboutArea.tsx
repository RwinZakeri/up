import about1 from "@/assets/images/about-img1.jpg";
import about2 from "@/assets/images/about-img2.jpg";
import AnimateLine from "@/modules/animateLine/animateLine";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
const AboutArea = () => {
  return (
    <Box>
      <Box className="md:flex-row flex flex-col gap-y-5 justify-center items-center gap-x-5 px-6 py-7  mt-[30px]">
        <Box className="md:w-[45%] flex justify-center items-center gap-x-3">
          <Box>
            <Image className="rounded-[100px]" alt="about" src={about1}></Image>
          </Box>
          <Box>
            <Image className="rounded-[100px]" alt="about" src={about2}></Image>
          </Box>
        </Box>
        <Box className="md:w-[45%]">
          <Box>
            <Typography className="text-2xl font-medium">معرفی آپ </Typography>
          </Box>
          <Box className="w-[10%]">
            <AnimateLine />
          </Box>
          <Box className="text-[#696969]">
            <Typography className="mb-[15px] leading-[26px]">
              <Typography className="leading-[26px]">
                یکی از چالش‌های همیشگی پژوهشگران، یافتن همکاران مناسب و متخصص
                برای پیشبرد پروژه‌های تحقیقاتی است. آپ، یک پلتفرم آنلاین و
                نوآورانه است که با هدف ایجاد ارتباط مؤثر میان پژوهشگران و
                متخصصان در حوزه‌های مختلف علمی طراحی شده است. این پلتفرم تلاش
                دارد تا با بهره‌گیری از فناوری‌های روز، فرآیند شبکه‌سازی، همکاری
                و تعامل علمی را برای پژوهشگران ساده‌تر، سریع‌تر و کارآمدتر سازد.
              </Typography>
            </Typography>
            <Typography className="leading-[26px]">
              آپ، فضایی پویا و جامع را فراهم می‌کند که در آن پژوهشگران می‌توانند
              به روش‌های مختلف با یکدیگر تعامل داشته باشند. این روش‌ها شامل، اما
              محدود به، موارد زیر هستند:
            </Typography>
            <Typography className="leading-[26px] my-4">
              ● همکاری کامل در یک پروژه پژوهشی: از مراحل آغازین تا پایان، با درج
              نام افراد به‌عنوان همکار علمی در نتایج نهایی.
            </Typography>
            <Typography className="leading-[26px] my-4">
              ● مشارکت پروژه‌ای در ازای دریافت حق‌الزحمه: برای بخش‌هایی مشخص از
              یک پروژه.
            </Typography>
            <Typography className="leading-[26px]">
              علاوه بر این دو راهکار، آپ فرصت‌های متنوع دیگری را نیز برای همکاری
              علمی ارائه می‌دهد. کاربران این پلتفرم می‌توانند از قابلیت‌های
              دیگری مانند برگزاری جلسات مشاوره، تبادل دانش و منابع، و حتی تشکیل
              تیم‌های تحقیقاتی بین‌المللی بهره‌مند شوند.
            </Typography>
            <Typography className="leading-[26px] my-4">
              رسالت اصلی آپ این است که با ایجاد بستری تعاملی و حرفه‌ای،
              شبکه‌سازی میان پژوهشگران را تسهیل کرده و به آن‌ها کمک کند تا با
              سرعت و کیفیت بیشتری به اهداف تحقیقاتی خود دست یابند. این پلتفرم
              نه‌تنها فرصتی برای تسریع پروژه‌های علمی فراهم می‌کند، بلکه
              به‌عنوان یک جامعه علمی پویا، پلی میان ایده‌ها و عمل خواهد بود.
            </Typography>
            <Typography className="leading-[26px] my-4">
              رسالت اصلی آپ این است که با ایجاد بستری تعاملی و حرفه‌ای،
              شبکه‌سازی میان پژوهشگران را تسهیل کرده و به آن‌ها کمک کند تا با
              سرعت و کیفیت بیشتری به اهداف تحقیقاتی خود دست یابند. این پلتفرم
              نه‌تنها فرصتی برای تسریع پروژه‌های علمی فراهم می‌کند، بلکه
              به‌عنوان یک جامعه علمی پویا، پلی میان ایده‌ها و عمل خواهد بود.
            </Typography>
            <Typography className="mt-8 mb-4">
              آپ تلاش می‌کند تا از راه‌های زیر به اهداف خود دست پیدا کند:
            </Typography>
            <Typography className="my-2">
              ● ایجاد فضایی حرفه‌ای و ایمن برای ارتباط و همکاری پژوهشگران و
              متخصصان.
            </Typography>
            <Typography className="my-2">
              ● ارائه ابزارهای کاربردی برای تسریع و تسهیل پروژه‌های تحقیقاتی.
            </Typography>
            <Typography className="my-2">
              ● پشتیبانی از انواع تعاملات علمی، از همکاری‌های افتخاری تا
              قراردادهای پروژه‌ای.{" "}
            </Typography>
            <Typography className="my-2">
              ● توانمندسازی جامعه علمی از طریق تشویق به شبکه‌سازی و تبادل دانش.{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutArea;
