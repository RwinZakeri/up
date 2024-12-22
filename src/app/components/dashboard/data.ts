import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2Icon from "@mui/icons-material/Person2";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type type_data_menu = {
  id: number;
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}[];

export const data_menu: type_data_menu = [
  { id: 1, title: "داشبورد", icon: DashboardIcon },
  { id: 2, title: "پروفایل شرکت", icon: Person2Icon },
  { id: 3, title: "ارسال فرصت جدید", icon: Person2Icon },
  { id: 4, title: "مدیریت فرصت ها", icon:Person2Icon  },
  { id: 5, title: "همه متقاضیان", icon:Person2Icon  },
  { id: 6, title: "ارسال رزومه", icon:Person2Icon  },
  { id: 7, title: "رزومه های فهرست نهایی", icon: Person2Icon },
  { id: 8, title: "بسته ها", icon: Person2Icon },
  { id: 9, title: "پیام ها", icon:Person2Icon  },
  { id: 10, title: "صورتحساب ها", icon:Person2Icon  },
  { id: 11, title: "هشدار های از سر گیری", icon: Person2Icon },
  { id: 12, title: "تغییر کلمه عبور ", icon:Person2Icon  },
  { id: 13, title: "مشاهده پروفایل", icon:Person2Icon  },
  { id: 14, title: "خروج", icon: Person2Icon },
  { id: 15, title: "حذف پروفایل", icon: Person2Icon },
];
