import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import { Pagination } from "swiper/modules"; // Correct pour Swiper 11+
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import IconSection from "./IconSection";
import "./slider.css";

const mySlider = [
  { text: "WOMEN", link: "/images/pic22.png" },
  { text: "HOODIES", link: "/images/Home1.png" },
  { text: "MAKEUP", link: "/images/Home3.png" },
  { text: "PHONE", link: "/images/home5.png" },
];

const Hero = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box
        sx={{
          pt: 2,
          mt: 2.5,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Swiper Slider */}
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item, index) => (
            <SwiperSlide key={index} className="parent-slider">
              <img src={item.link} alt={item.text} />
              <Box
                sx={{
                  position: { sm: "absolute" },
                  left: { sm: "6%" },
                  textAlign: { sm: "left" },
                  pt: { xs: 4 },
                  pb: { xs: 6 },
                }}
              >
                <Typography sx={{ color: "#222" }} variant="h5">
                  LIFESTYLE COLLECTION
                </Typography>
                <Typography
                  sx={{
                    color: "#222",
                    fontWeight: 500,
                    my: 1,
                  }}
                  variant="h3"
                >
                  {item.text}
                </Typography>
                <Stack
                  sx={{
                    justifyContent: { xs: "center", sm: "left" },
                  }}
                  direction={"row"}
                  alignItems={"center"}
                >
                  <Typography color={"#333"} mr={1} variant="h4">
                    SALE UP TO
                  </Typography>
                  <Typography color={"#D23F57"} variant="h4">
                    30% OFF
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 300,
                    my: 1,
                  }}
                  variant="body1"
                >
                  Get Free Shipping on orders over $99.00
                </Typography>
                <Button
                  sx={{
                    px: 5,
                    py: 1,
                    mt: 2,
                    backgroundColor: "#222",
                    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                    color: "#fff",
                    borderRadius: "1px",
                    "&:hover": {
                      bgcolor: "#151515",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                    },
                  }}
                  variant="contained"
                >
                  Shop Now
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Sidebar Images */}
        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
          {/* First Banner */}
          <Box sx={{ position: "relative" }}>
            <img width={"80%"} src="/images/watch.png" alt="New Arrivals" />
            <Stack
              sx={{
                position: "absolute",
                top: "25%",
                transform: "translateY(-50%)",
                left: 20,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                ELEGANCE
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                SALE 20% OFF
              </Typography>
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                Shop Now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>

          {/* Second Banner */}
          <Box sx={{ position: "relative" }}>
            <img width={"80%"} src="/images/box3.png" alt="SHOOS 4K" />
            <Stack
              sx={{
                position: "absolute",
                top: "30%",
                transform: "translateY(-50%)",
                left: 20,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                  fontWeight: 300,
                }}
              >
                GO NOW
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                SPORT &
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                FITNESS
              </Typography>
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                Shop Now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      {/* Icon Section */}
      <IconSection />
    </Container>
  );
};

export default Hero;
