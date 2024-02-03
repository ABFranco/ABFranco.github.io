import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      // main: "#303655",
      main: "#647494",
      //   main: "#6f90af",
    },
    secondary: {
      main: "#6f70af",
    },
  },
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
    fontWeight: 300,
    allVariants: {
      color: "#3f3f3f",
      margin: 0,
      padding: 0,
    },
    h1: {
      fontSize: "4rem",
    },
    h2: {
      fontSize: "3rem",
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.75rem",
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.25rem",
    },
    body1: {
      fontSize: "1.25rem",
    },
    body2: {
      fontSize: "1rem",
    },
  },
  overrides: {
    MuiLink: {
      underline: "none", // or "hover" if you want to remove underline only on hover
    },
  },
});

export default theme;
