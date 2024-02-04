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
      "@media (max-width:800px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontSize: "3rem",
      "@media (max-width:800px)": {
        fontSize: "2.5rem",
      },
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
      "@media (max-width:800px)": {
        fontSize: "1rem",
      },
    },
    body2: {
      fontSize: "1rem",
      "@media (max-width:800px)": {
        fontSize: "0.75rem",
      },
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        "@media (max-width: 800px)": {
          fontSize: "2rem", // Adjust h1 font size for screens with width <= 800px
        },
      },
      h2: {
        "@media (max-width: 800px)": {
          fontSize: "1.5rem", // Adjust h2 font size for screens with width <= 800px
        },
      },
      // Repeat the pattern for other typography variants as needed
    },
  },
});

export default theme;
