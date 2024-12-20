import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChatIcon from "@mui/icons-material/Chat";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import LayersIcon from "@mui/icons-material/Layers"; // Use LayersIcon instead of StackIcon
import ListIcon from "@mui/icons-material/List";
import LockIcon from "@mui/icons-material/Lock";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import PersonIcon from "@mui/icons-material/Person";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import SendIcon from "@mui/icons-material/Send";
import WorkIcon from "@mui/icons-material/Work";

const adminAccess = [
  {
    id: "dashboard",
    href: "dashboard.html",
    icon: <HomeIcon />,
    title: "داشبورد",
  },
  {
    id: "company-profile",
    href: "dashboard-company-profile.html",
    icon: <PersonIcon />,
    title: "پروفایل شرکت",
  },
  {
    id: "post-job",
    href: "dashboard-post-job.html",
    icon: <SendIcon />,
    title: "ارسال شغل جدید",
  },
  {
    id: "manage-job",
    href: "dashboard-manage-job.html",
    icon: <WorkIcon />,
    title: "مدیریت شغل ها",
  },
  {
    id: "applicants",
    href: "dashboard-applicants.html",
    icon: <ListIcon />,
    title: "همه متقاضیان",
  },
  {
    id: "submit-resume",
    href: "dashboard-submit-resume.html",
    icon: <BookmarkIcon />,
    title: "ارسال رزومه",
  },
  {
    id: "shortlisted-resume",
    href: "dashboard-shorlisted-resume.html",
    icon: <CheckCircleIcon />,
    title: "رزومه های فهرست نهایی",
  },
  {
    id: "packages",
    href: "dashboard-packages.html",
    icon: <LayersIcon />, // Replaced with LayersIcon
    title: "بسته ها",
  },
  {
    id: "messages",
    href: "dashboard-messages.html",
    icon: <ChatIcon />,
    title: "پیام ها",
  },
  {
    id: "invoice",
    href: "dashboard-invoice.html",
    icon: <PriceCheckIcon />,
    title: "صورتحساب ها",
  },
  {
    id: "resume-alerts",
    href: "dashboard-resume-alerts.html",
    icon: <NotificationImportantIcon />,
    title: "هشدارهای از سر گیری",
  },
  {
    id: "change-password",
    href: "dashboard-change-password.html",
    icon: <LockIcon />,
    title: "تغییر کلمه عبور",
  },
  {
    id: "my-profile",
    href: "dashboard-my-profile.html",
    icon: <PersonIcon />,
    title: "مشاهده پروفایل",
  },
  {
    id: "logout",
    href: "index.html",
    icon: <ExitToAppIcon />,
    title: "خروج",
  },
  {
    id: "delete-profile",
    href: "index.html",
    icon: <DeleteIcon />,
    title: "حذف پروفایل",
  },
];

export { adminAccess };
