import { useMemo, useState } from 'react';
import { createTheme } from '@mui/material';
import { blue, grey, indigo } from '@mui/material/colors';

function useSwitchTheme() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: indigo,
                divider: indigo[200],
                background: {
                  default: '#fff',
                  paper: blue[100],
                },
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
              }
            : {
                // palette values for dark mode
                primary: blue,
                divider: blue[700],
                background: {
                  default: '#1A202C',
                  paper: '#1A202C',
                },
                text: {
                  primary: '#fff',
                  secondary: grey[500],
                },
              }),
        },
        typography: {
          fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
          fontSize: 14,
          fontWeightLight: 300,
          fontWeightRegular: 400,
          fontWeightMedium: 500,
        },
      }),
    [mode]
  );

  return { theme, colorMode };
}

export default useSwitchTheme;
