import { useTheme } from "@emotion/react";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Badge,
  Box,
  Container,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #111111",
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "266px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "330px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#1B1B1B",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#000000", // Input text color
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    "&::placeholder": {
      color: "#000000", // Placeholder text color
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const options = ["All Categories", "CAR", "Clothes", "Electronics"];
const optionslang = ["FR", "EN"];

const Header2 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  // State for categories menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // State for language menu
  const [langAnchorEl, setLangAnchorEl] = useState(null);
  const [selectedLangIndex, setSelectedLangIndex] = useState(0); // Default to "FR"

  const open = Boolean(anchorEl);
  const langOpen = Boolean(langAnchorEl);

  // Handlers for categories menu
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handlers for language menu
  const handleLangClick = (event) => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleLangMenuItemClick = (event, index) => {
    setSelectedLangIndex(index);
    setLangAnchorEl(null);
  };

  const handleLangClose = () => {
    setLangAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "#DDD06A",
        py: "4px",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      }}
    >
      <Container
        sx={{ my: 1, display: "flex", justifyContent: "space-between" }}
      >
        <Stack alignItems={"center"} sx={{ color: "#000000" }}>
          <ShoppingCartOutlined />
          <Typography variant="body2">GoShop</Typography>
        </Stack>

        <Search
          sx={{
            display: "flex",
            borderRadius: "22px",
            justifyContent: "space-between",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />

          <div>
            <List
              component="nav"
              aria-label="Categories"
              sx={{
                color: "#111111",
                borderBottomRightRadius: 22,
                borderTopRightRadius: 22,
                p: "0",
              }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="Categories"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  sx={{
                    color: "#000000",
                    width: 93,
                    textAlign: "center",
                    "&:hover": { cursor: "pointer" },
                  }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ fontSize: "16px", color: "#111111",
 }} />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{ fontSize: "13px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Search>

        <div>
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem("mode", "dark");
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <LightModeOutlined sx={{ fontSize: "20px", color: "#FEFEFA", marginTop: "5px"  }} />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem("mode", "light");
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlined sx={{ fontSize: "20px", marginTop: "5px" , color: "#000000"}} />
            </IconButton>
          )}
        </div>

        {/* Language Selector */}
        <List
          component="nav"
          aria-label="Language settings"
          sx={{ p: 0, m: 0, marginTop: "5px"}}
          >
          <ListItem
            id="lang-button"
            aria-haspopup="listbox"
            aria-controls="lang-menu"
            aria-label="Select language"
            aria-expanded={langOpen ? "true" : undefined}
            onClick={handleLangClick}
            sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
          >
            <ListItemText
              sx={{
                ".MuiTypography-root": { fontSize: "11px", color: "#000000" },
              }}
              secondary={optionslang[selectedLangIndex]}
            />
            <ExpandMore sx={{ fontSize: "16px", color: "#000000" }} />
          </ListItem>
        </List>
        <Menu
          id="lang-menu"
          anchorEl={langAnchorEl}
          open={langOpen}
          onClose={handleLangClose}
          MenuListProps={{
            "aria-labelledby": "lang-button",
            role: "listbox",
          }}
        >
          {optionslang.map((option, index) => (
            <MenuItem
              sx={{ fontSize: "13px" }}
              key={option}
              selected={index === selectedLangIndex}
              onClick={(event) => handleLangMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>

        <Stack direction={"row"} alignItems={"center"}>
          <IconButton aria-label="cart" sx={{ color: "#000000" }}>
            <StyledBadge
              badgeContent={4}
              sx={{
                "& .MuiBadge-badge": {
                  color: "#000000", // Fixed text color
                  backgroundColor: "#E5E4E2", // Fixed background color for the circle
                  border: "1px solid #000000", // Optional border for better visibility
                },
              }}
            >
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <IconButton>
            <Person2OutlinedIcon sx={{ color: "#000000" }} />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header2;
