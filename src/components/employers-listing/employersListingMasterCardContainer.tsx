import EmployersListingMasterCard from "@/modules/employersListingMasterCard/employersListingMasterCard";
import { Box } from "@mui/material";

const EmployersListingMasterCardContainer = () => {
  return (
    <Box className="mt-10 flex flex-col gap-8">
      <EmployersListingMasterCard />
      <EmployersListingMasterCard />
      <EmployersListingMasterCard />
      <EmployersListingMasterCard />
    </Box>
  );
};

export default EmployersListingMasterCardContainer;
