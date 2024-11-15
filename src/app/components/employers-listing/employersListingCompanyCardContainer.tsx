import EmployersListingCard from "@/modules/employersListingCard/employersListingCard";
import { Box, Container } from "@mui/material";
import Pagination from "@mui/material/Pagination";
const EmployersListingCompanyCardContainer = () => {
  return (
    <Box className="py-12">
      <Container
        maxWidth="xl"
        className="flex items-center justify-center flex-wrap gap-9 mb-12"
      >
        <EmployersListingCard />
        <EmployersListingCard />
        <EmployersListingCard />
        <EmployersListingCard />
        <EmployersListingCard />
        <EmployersListingCard />
        <EmployersListingCard />
        <EmployersListingCard />
      </Container>
      <Box className="mx-auto mt-6 w-fit">
        <Pagination size="large" count={10} color="primary" />
      </Box>
    </Box>
  );
};

export default EmployersListingCompanyCardContainer;
