import { createTheme, PaletteOptions, Theme } from "@mui/material";

const componentsOverrides = (theme: Theme) => {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundColor: theme.palette.background.paper,
          background: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderBottom: `${theme.palette.background.default} solid 2px`,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "outlined" as const,
      },
      styleOverrides: {
        sizeSmall: {
          padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: "outlined" as const,
        margin: "dense" as const,
        size: "small" as const,
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {},
        root: {
          margin: 0,
          padding: 0,
          backgroundClip: "padding-box",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1.5),
          "&.MuiTableCell-sizeSmall": {
            padding: theme.spacing(1),
          },
          "&.MuiTableCell-paddingNone": {
            padding: 0,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:last-child td": { border: 0 },
          "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.background.paper,
          },
          "&:nth-of-type(even)": {
            // @ts-ignore
            backgroundColor: theme.palette.tertiary.main,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined" as const,
        margin: "dense" as const,
        size: "small" as const,
      },
    },
    RaDatagrid: {
      styleOverrides: {
        root: {
          "& .RaDatagrid-headerCell": {
            color: theme.palette.text.primary,
            fontWeight: theme.typography.h1,
          },
        },
      },
    },
    RaFilterForm: {
      styleOverrides: {
        root: {
          [theme.breakpoints.up("sm")]: {
            minHeight: theme.spacing(6),
          },
        },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          marginTop: 10,
          padding: 14,
          borderLeft: `6px solid transparent`,

          "&:hover": {},
          "&.RaMenuItemLink-active": {
            color: theme.palette.action.active,
            borderLeft: `6px solid ${theme.palette.primary.main}`,
            borderColor: theme.palette.primary.main,

            "& .MuiSvgIcon-root": {
              fill: theme.palette.action.active,
            },
          },
          "&.RaMenuItemLink-inactive": {
            // @ts-ignore
            color: theme.palette.action.inactive,
            borderColor: "transparent",
            "& .MuiSvgIcon-root": {
              // @ts-ignore
              fill: theme.palette.action.inactive,
            },
          },
        },
      },
    },
    RaLayout: {
      styleOverrides: {
        root: {
          "& .MuiCardContent-root": {
            padding: 0,
          },
          "& .RaLayout-content": {
            padding: theme.spacing(3),
          },
          "& .MuiGrid-root": {
            paddingBottom: 0,
          },
          "& .MuiCardContent-root:last-child": {
            paddingBottom: 0,
          },
        },
      },
    },
    RaSidebar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.paper,
          // @ts-ignore
          width: theme.sidebars?.width,
          margin: 0,
          padding: 0,
          "& .MuiList-root": {
            padding: 0,
          },
        },
      },
    },
  };
};

const lightPalette: PaletteOptions = {
  // @ts-ignore
  primary: { main: "#62cc81", secondary: "red" },
  secondary: { main: "#6c757d" },
  bullPoint: { main: "#dee2e6" },
  background: { default: "#e9ebee", paper: "#ffffff" },
  tertiary: { main: "#dee2e6" },
  text: {
    primary: "#1c1e21",
    secondary: "#606770",
  },
  error: { main: "#f86c68" },
  warning: { main: "#ffad46" },
  info: { main: "#1877f2" },
  success: { main: "#7bf1a8" },
  divider: "#ccd0d5",
  action: {
    active: "#505660",
    // @ts-ignore
    inactive: "#505660",
    hover: "rgba(24, 119, 242, 0.08)",
    selected: "rgba(24, 119, 242, 0.16)",
    disabled: "rgba(24, 119, 242, 0.48)",
    disabledBackground: "rgba(24, 119, 242, 0.12)",
  },
  mode: "light" as "light",
};

const darkPalette: PaletteOptions = {
  // @ts-ignore
  primary: { main: "#62cc81", secondary: "#66a8f8" },
  secondary: { main: "#66a8f8" },
  bullPoint: { main: "#309DEB" },
  background: { default: "#111523", paper: "#252936" },
  tertiary: { main: "#1e222e" },
  text: {
    primary: "#ffffff",
    secondary: "#b3b3b3",
  },
  error: { main: "#f86c68" },
  warning: { main: "#ffeb3b" },
  info: { main: "#319DEB" },
  success: { main: "#7bf1a8" },
  divider: "#bdbdbd",
  action: {
    active: "#ffffff",
    // @ts-ignore
    inactive: "#ffffff",
    hover: "rgba(255, 255, 255, 0.08)",
    selected: "rgba(255, 255, 255, 0.16)",
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
  },
  mode: "dark" as "dark",
};

const createRadiantTheme = (palette: any) => {
  const themeOptions = {
    palette,
    sidebar: { width: 200 },
    shape: { borderRadius: 6 },
    typography: {
      fontFamily: "Segoe UI, Roboto, sans-serif",
      h1: {
        fontWeight: 500,
        fontSize: "6rem",
      },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 800 },
      h5: { fontWeight: 900 },
      button: { textTransform: undefined, fontWeight: 700 },
    },
  };

  const scrollbarStyle = {
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      background: palette.mode === "light" ? "#f1f1f1" : "#1e1e1e",
    },
    "&::-webkit-scrollbar-thumb": {
      background: palette.mode === "light" ? "#888" : "#555",
      borderRadius: "10px",
    },
  };

  const theme = createTheme(themeOptions);
  theme.components = {
    ...componentsOverrides(theme),
    MuiCssBaseline: {
      styleOverrides: scrollbarStyle,
    },
  };
  return theme;
};

export const radiantLightTheme = createRadiantTheme(lightPalette);
export const radiantDarkTheme = createRadiantTheme(darkPalette);
