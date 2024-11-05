import image from "@/assets/images/freelancers/freelancers-img1.jpg";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const UsersProfile = () => {
  return (
    <Box>
      <AvatarGroup sx={{ display: "flex", flexDirection: "row" }} total={10}>
        <Avatar alt="Remy Sharp" src={image.src} />
        <Avatar alt="Remy Sharp" src={image.src} />
        <Avatar alt="Remy Sharp" src={image.src} />
        <Avatar alt="Remy Sharp" src={image.src} />
        <Avatar alt="Remy Sharp" src={image.src} />
        <Avatar alt="Remy Sharp" src={image.src} />
      </AvatarGroup>
    </Box>
  );
};

export default UsersProfile;
