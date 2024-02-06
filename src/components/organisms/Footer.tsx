import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import CoreValues from '../molecules/CoreValues';


const Footer = () => {
    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    return (
        <AppBar position="static" sx={{ marginTop: 'auto', height: '100px' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <CoreValues />
          
                </Toolbar>
            </Container>
        </AppBar>
    )};
    export default Footer;