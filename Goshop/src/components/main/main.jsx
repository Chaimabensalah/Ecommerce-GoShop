import { useTheme } from "@emotion/react";
import { Close } from "@mui/icons-material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import {
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useState } from "react";
import { useGetproductByNameQuery } from "../../Redux/product";
import ProductDetails from "./ProductDetails";

const Main = () => {

  const handleAlignment = (event, newValue) => {
    setmyDate(newValue);
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

const allProductsAPI = "products?populate=*"
const menCategoryAPI = "products?populate=*&filters[category][$eq]=men"
const womenCategoryAPI = "products?populate=*&filters[category][$eq]=women"

const [myDate, setmyDate] = useState(allProductsAPI);

const { data, error, isLoading } = useGetproductByNameQuery(myDate);

if (isLoading) {
  return(
    <Typography variant="h6">LOADING .......</Typography>
  )}


  if (error) {
    return(
      <Typography variant="h6">{error.message}</Typography>
    )}

if (data){
  return (
    console.log(data.data),
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in an exclusive brand selection
          </Typography>
        </Box>
        <ToggleButtonGroup
            color="error"
            value={myDate}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233, 69, 96, 0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={allProductsAPI}
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>

            <ToggleButton
              sx={{ mx: "16px !important", color: theme.palette.text.primary }}
              className="myButton"
              value={menCategoryAPI}
              aria-label="centered"
            >
              MEN category
            </ToggleButton>

            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={womenCategoryAPI}
              aria-label="right aligned"
            >
              Women category
            </ToggleButton>
          </ToggleButtonGroup>

      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {data.data.map((item) => {
          return (
            <Card
              key={item}
              sx={{
                maxWidth: 333,
                mt: 6,
                ":hover .MuiCardMedia-root": {
                  rotate: "1deg",
                  scale: "1.1",
                  transition: "0.35s",
                },
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="277"
                image={`${import.meta.env.VITE_BASE_URL}${item.productImg[0]?.formats?.small?.url}`}
                />
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography gutterBottom variant="h6" component="div">
                  {item.productTitle}
                  </Typography>

                  <Typography variant="subtitle1" component="p">
                  {item.productPrice}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                {item.productDescription}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button sx={{ textTransform: "capitalize" }} size="large"
                                    onClick={handleClickOpen}
                                    >
                  <AddShoppingCartOutlinedIcon
                    sx={{ mr: 1 }}
                    fontSize="small"
                  />{" "}
                  Add to cart
                </Button>
                <Rating
                    precision={0.1}
                    name="read-only"
                    value={item.productRating}
                    readOnly
                  />              </CardActions>
            </Card>
          );
        })}
      </Stack>


      <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>

          <ProductDetails />
        </Dialog>




    </Container>
  );
}
};

export default Main;
