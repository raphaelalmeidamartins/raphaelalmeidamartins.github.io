import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import { AppContext } from '../../context';
import BrFlag from '../BrFlag';
import LanguageChip from '../LanguageChip';
import UsFlag from '../UsFlag';

const sections = [
  {
    name: {
      EN: 'Home',
      BR: 'Inicio',
    },
    href: '#home',
  },
  {
    name: {
      EN: 'About',
      BR: 'Sobre',
    },
    href: '#about',
  },
  {
    name: {
      EN: 'Projects',
      BR: 'Projetos',
    },
    href: '#projects',
  },
  {
    name: {
      EN: 'Contact',
      BR: 'Contato',
    },
    href: '#contact',
  },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { lang } = React.useContext(AppContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {sections.map(({ name, href }) => (
                <MenuItem key={href} onClick={handleCloseNavMenu}>
                  <Button
                    variant="text"
                    component="a"
                    href={href}
                  >
                    {name[lang]}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {sections.map(({ name, href }) => (
              <Button
                key={href}
                component="a"
                onClick={handleCloseNavMenu}
                href={href}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {name[lang]}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, alignItems: 'center', display: 'flex' }}>
            <LanguageChip icon={<BrFlag />} label="BR" />
            <LanguageChip icon={<UsFlag />} label="EN" />
          </Box>
          <Box sx={{ flexGrow: 0, alignItems: 'center', display: 'flex' }}>
            <IconButton
              size="large"
              component="a"
              href="https://github.com/raphaelalmeidamartins"
              target="_blank"
              sx={{ margin: '0 6px', p: 0 }}
            >
              <FaGithubAlt />
            </IconButton>
            <IconButton
              size="large"
              component="a"
              href="https://www.linkedin.com/in/raphaelameidamartins/"
              target="_blank"
              sx={{ margin: '0 6px', p: 0 }}
            >
              <FaLinkedinIn />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
