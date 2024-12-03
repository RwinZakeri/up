import { Box } from "@mui/material";
import { data_menu } from "./data";
import SideBar from "./SideBar";


const Dash_lay = () => {

    const data = data_menu
  

  return (
    <Box className="containar w-[100%] h-[100%] flex pt-[100px]">
      <Box className="sidebar w-[15%] h-[90vh] bg-[white]">
        <SideBar data={data}/>
      </Box>

      <Box className="w-[75%] h-[90vh] bg-[black]"></Box>
    </Box>
  );
};

export default Dash_lay;
