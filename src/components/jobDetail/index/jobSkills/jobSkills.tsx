import Link from "next/link";

const JobSkills = () => {
  return (
    <ul className="flex justify-start items-center flex-wrap gap-x-2 gap-y-4 mt-[30px]">
      <li className="py-[2px]">
        <Link
          className="text-[#00CA99] py-[8px]  px-[25px] text-[14px] bg-[#f8f8f8] transition-all duration-[500ms]  hover:text-[white] hover:bg-[#00CA99]"
          href="/"
        >
          نمونه سازی
        </Link>
      </li>
      <li className="py-[2px]">
        <Link
          className="text-[#00CA99] py-[8px]  px-[25px] text-[14px] bg-[#f8f8f8] transition-all duration-[500ms]  hover:text-[white] hover:bg-[#00CA99]"
          href="/"
        >
          طرح بندی جدید
        </Link>
      </li>
      <li className="py-[2px]">
        <Link
          className="text-[#00CA99] py-[8px]  px-[25px] text-[14px] bg-[#f8f8f8] transition-all duration-[500ms]  hover:text-[white] hover:bg-[#00CA99]"
          href="/"
        >
          چابک
        </Link>
      </li>
      <li className="py-[2px]">
        <Link
          className="text-[#00CA99] py-[8px]  px-[25px] text-[14px] bg-[#f8f8f8] transition-all duration-[500ms]  hover:text-[white] hover:bg-[#00CA99]"
          href="/"
        >
          رزومه
        </Link>
      </li>
      <li className="py-[2px]">
        <Link
          className="text-[#00CA99] py-[8px]  px-[25px] text-[14px] bg-[#f8f8f8] transition-all duration-[500ms]  hover:text-[white] hover:bg-[#00CA99]"
          href="/"
        >
          حرفه
        </Link>
      </li>
      <li className="py-[2px]">
        <Link
          className="text-[#00CA99] py-[8px]  px-[25px] text-[14px] bg-[#f8f8f8] transition-all duration-[500ms]  hover:text-[white] hover:bg-[#00CA99]"
          href="/"
        >
          مهارت ها
        </Link>
      </li>
    </ul>
  );
};

export default JobSkills;
