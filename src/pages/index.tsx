import { AppBar, Box, Container, Drawer, styled, Toolbar, Typography } from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import { NextPage } from "next";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Home: NextPage = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position={"fixed"}
            // open={true}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        // onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            // ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Mini variant drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant={"permanent"}
                open={true}
            >
                <DrawerHeader>
                    <IconButton
                    // onClick={handleDrawerClose}
                    >
                        {<ChevronLeft />}
                    </IconButton>
                </DrawerHeader>
            </Drawer>
            <Box
                component={"main"}
                sx={{ flexGrow: 1, p: 3 }}
            >

            </Box>
        </Box>
    );
};

export default Home;
