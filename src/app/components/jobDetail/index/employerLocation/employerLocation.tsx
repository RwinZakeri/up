import AnimateLine from "@/modules/animateLine/animateLine";
import { Box } from "@mui/material";

const EmployerLocation = () => {
    return ( 
        <Box className="  p-4 shadow-slate-400 boxShadowJob mt-[30px]">
        <h2 className="text-[22px]">محل کارفرما  </h2>
        <Box className="w-[30%]">
          <AnimateLine />
        </Box>
      </Box>
     );
}
 
export default EmployerLocation;