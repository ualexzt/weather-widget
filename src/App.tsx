import React from 'react';
import { Box, CssBaseline, IconButton, ThemeProvider } from '@mui/material';
import useSwitchTheme from './app/UseSwitchTheme';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Header from './futures/ui/header';
import CityList from './futures/cities/CityList';
import SocialFooter from './futures/ui/social';

function App() {
  const { theme, colorMode } = useSwitchTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', mr: 3, mt: 2 }}>
          <IconButton size="large" onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
        <Header />
        <CityList />
        <SocialFooter />
      </>
    </ThemeProvider>
  );
}

export default App;
