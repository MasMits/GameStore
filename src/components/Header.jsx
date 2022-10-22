import * as React from 'react';
import {styled, alpha, createTheme} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import {Avatar, Chip, ThemeProvider} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { SvgIcon } from '@mui/material';
import Button from "@mui/material/Button";
import { ReactComponent as StarIcon } from '../img/epic-games.svg';
import SettingsIcon from '@mui/icons-material/Settings';


const darkTheme = createTheme({
    zIndex: '15000px',
    components: {
        // Name of the component
    },
    palette: {
        mode: 'dark',
        primary: {
            light: '#757ce8',
            main: '#ababab',
            dark: '#c9c9c9',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{ flexGrow: 1, zIndex: 1100 }}>
                <AppBar  position="static">
                    <Toolbar sx={{ display: "flex", zIndex: 15000000, gap: 4}}>
                        <SvgIcon paddingLeft="30px" component={StarIcon} viewBox="0 0 36 36"/>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Button>Discover</Button>
                        <Button>Browse</Button>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                        </Typography>
                        <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
                        <SettingsIcon/>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>

    );
}
