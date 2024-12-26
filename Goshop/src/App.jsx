import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Footer from "./components/footer/footer";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Hero from "./components/hero/Hero";
import Main from "./components/main/main";
import ScrollToTop from "./components/scroll/ScrollToTop";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header2 />
        <Header3 />

        <Box
          bgcolor={
            // @ts-ignore
            theme.palette.bg.main
          }
        >
          <Hero />
          <Main />
        </Box>
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
