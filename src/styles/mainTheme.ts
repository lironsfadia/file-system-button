import { createTheme, Theme } from '@mui/material'

export const mainTheme: Theme = createTheme({
  palette: {
    primary: {
      main: '#D3D9DE',
      light: '#E6EBF0',
      dark: '#B7BABD',
      contrastText: 'black',
    },
    secondary: {
      main: 'blue',
      light: '#EDE8E8',
      dark: '#00000042',
      contrastText: 'white',
    },
    info: {
      main: '#1976d280',
    },
  },
  typography: {
    button: {
      fontWeight: 500,
      lineHeight: '24px',
      textTransform: 'uppercase',
    },
    h2: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 400,
      fontSize: '20px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.contrastText,
          width: '300px',
          height: '50px',
          'transition-duration': '0.4s',
        }),
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          '& .MuiAccordionSummary-root:hover': {
            background: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          ':hover': {
            cursor: 'pointer',
            background: theme.palette.primary.light,
          },
        }),
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          background: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
          '&+.MuiDialogContent-root': {
            paddingTop: '20px !important',
          },
        }),
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          '& .MuiButton-root': {
            background: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          },
        }),
      },
    },
  },
})
