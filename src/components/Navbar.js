import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from "../assets/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import { CButton } from '../theme/theme';
import { useTheme } from '@mui/material/styles';
import { Toolbar } from '@mui/material';
import "./Navbar.css"
const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [click, setClick] = React.useState(null);
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleClose = (event) => {
        setClick(null);
    };

    const handleClick = (e) => {
        if (click !== e.currentTarget) {
            setClick(e.currentTarget)
        }
    };
    const theme = useTheme();
    // console.log()
    return (

        <Box sx={{
            maxWidth: "1510px", margin: "auto", marginTop: "10px", position: "absolute", zIndex: "2222", width: "100%"
        }}>
            <AppBar position="static" className='rounded-full ' sx={{
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%)"
            }} >
                <Toolbar className='w-full justify-between'>
                    <Box className="flex items-center md:justify-end w-[41rem] space-x-10 " >
                        <Box>
                            <img src={logo} alt="logoimg" className='w-[200px] h-[58px]' />
                        </Box>
                        <Box className="md:flex  w-96 sm:hidden " >
                            <CButton pd={0.5} m={1}>IDO</CButton>
                            <CButton pd={0.5} m={1}>IGO</CButton>
                            <CButton pd={0.5} m={1} >IMO</CButton>
                        </Box>
                    </Box>
                    <Box className='md:flex sm:hidden' >
                        <CButton m={1} p={2} onClick={handleClick}
                            onMouseOver={handleClick}  >ACCOUNTS</CButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={click}
                            open={Boolean(click)}
                            onClose={handleClose}

                            onMouseLeave={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}

                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>

                        </Menu>
                        <CButton m={1} p={2} className="btn-clr">WALLET</CButton>
                    </Box>
                    <Box className='md:hidden'>

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
                                borderRadius: "36px"

                            }}
                            className="rounded-3xl"
                        >
                            {settings.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu} >
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>


                    </Box>



                </Toolbar>

            </AppBar>

        </Box >
    );
};
export default Navbar;
