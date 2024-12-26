"use client";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

const CopyButton = ({ title }: { title: string }) => {
  const copyHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Accessing the button's text content
    const { textContent } = e.currentTarget;

    navigator.clipboard
      .writeText(textContent!)
      .then(() => {
        // Successfully copied to clipboard
        toast.success("متن کپی شد!");
      })
      .catch((error) => {
        // Failed to copy
        toast.error("مشکلی در کپی تکست به وجود امد");
      });
  };

  return (
    <Button
      onClick={copyHandler}
      className="bg-lightGreenXXs text-lightGreen py-[10px] px-[30px] text-[13px] w-full transition-all duration-[500ms] hover:bg-lightGreen hover:text-white"
    >
      {title}
    </Button>
  );
};

export default CopyButton;
