import { Box, Button, Typography } from '@mui/material';
 

const Footer = () => {
  return (
    <Box
    sx={{
     
      bgcolor: "#DDD06A",
      py: 1.3,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    }}
  >
    <Typography
      justifyContent={"center"}
      display={"flex"}
      alignItems={"center"}
      color={"#000000"}
      variant="h6"
      sx={{fontSize: 18}}
    >
      Designed and developed by
      <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#FEFEFA",
          }}
          variant="text"
          color="primary"
        >
          chaima ben salah    
              </Button>
      ©2024
    </Typography>
  </Box>
  );
}

export default Footer;
