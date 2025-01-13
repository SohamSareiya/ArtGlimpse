import React, { useState } from 'react';
import { Search, Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import {
    AppBar,
    Box,
    Button,
    Container,
    Drawer,
    Menu,
    MenuItem,
    TextField,
    Typography,
    styled,
    IconButton,
    useTheme
} from '@mui/material';
import AuthDialog from './AuthDialog';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.neutral.light,
    boxShadow: 'none',
    borderBottom: '1px solid #dbd4c7',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.neutral.main,
    fontWeight: 500,
    textTransform: 'none',
    '&:hover': {
        backgroundColor: 'transparent',
        color: '#000',
    },
    '&.MuiButtonBase-root': {
        disableRipple: true,
    },
}));

const StyledDropdownMenu = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.neutral.light,
        border: '1px solid #dbd4c7',
    },
    '& .MuiMenuItem-root': {
        fontFamily: 'serif',
        fontWeight: 500,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}));

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [authDialog, setAuthDialog] = useState({ open: false, isLogin: true });
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const shopCategories = [
        'Pooja Thali',
        'Keychains',
        'Rakhi',
        'Home Decor',
        'Indian God Artifacts',
        'Jhumkas',
        'Lotus Diya',
    ];

    const renderDesktopMenu = () => (
        <Box display="flex" gap={4} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' }, }}>
            <StyledButton disableRipple disableElevation>Home</StyledButton>
            <Box position="relative">
                <StyledButton
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}

                    disableRipple
                    disableElevation
                >
                    Shop
                </StyledButton>
                <StyledDropdownMenu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                >
                    {shopCategories.map((category) => (
                        <MenuItem
                            key={category}
                            onClick={() => setAnchorEl(null)}
                        >
                            {category}
                        </MenuItem>
                    ))}
                </StyledDropdownMenu>
            </Box>
            <StyledButton disableRipple disableElevation>About Us</StyledButton>
            <StyledButton disableRipple disableElevation>Contact</StyledButton>
        </Box>
    );

    const renderMobileMenu = () => (
        <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            sx={{ display: { xs: 'flex', md: 'none' }, }}
        >
            <Box
                width="250px"
                role="presentation"
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 2,
                    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Box display="flex" justifyContent="flex-end">
                    <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: theme.palette.neutral.light }}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box mt={2} display="flex" flexDirection="column" gap={2}>
                    <StyledButton
                        onClick={() => setDrawerOpen(false)}
                        sx={{
                            justifyContent: 'flex-start',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            color: theme.palette.neutral.main,
                            '&:hover': { color: theme.palette.custom.highlight },
                        }}
                        disableRipple
                        disableElevation
                    >
                        Home
                    </StyledButton>

                    <Box>
                        <StyledButton
                            onClick={(e) => setAnchorEl(e.currentTarget)}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                color: theme.palette.neutral.main,
                                width: '100%',
                                '&:hover': { color: theme.palette.custom.highlight },
                            }}
                            disableRipple
                            disableElevation
                        >
                            Shop
                        </StyledButton>
                        <Box
                            sx={{
                                marginLeft: 2,
                                marginTop: 1,
                                paddingLeft: '10px',
                                borderLeft: '2px solid #dbd4c7',
                            }}
                        >
                            {shopCategories.map((category) => (
                                <Typography
                                    key={category}
                                    onClick={() => setDrawerOpen(false)}
                                    sx={{
                                        cursor: 'pointer',
                                        color: theme.palette.neutral.light,
                                        fontSize: '14px',
                                        padding: '5px 0',
                                        '&:hover': { color: theme.palette.custom.highlight },
                                    }}
                                >
                                    {category}
                                </Typography>
                            ))}
                        </Box>
                    </Box>

                    <StyledButton
                        onClick={() => setDrawerOpen(false)}
                        sx={{
                            justifyContent: 'flex-start',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            color: theme.palette.neutral.main,
                            '&:hover': { color: theme.palette.custom.highlight },
                        }}
                        disableRipple
                        disableElevation
                    >
                        About Us
                    </StyledButton>
                    <StyledButton
                        onClick={() => setDrawerOpen(false)}
                        sx={{
                            justifyContent: 'flex-start',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            color: theme.palette.neutral.main,
                            '&:hover': { color: theme.palette.custom.highlight },
                        }}
                        disableRipple
                        disableElevation
                    >
                        Contact
                    </StyledButton>
                </Box>
            </Box>
        </Drawer>
    );


    return (
        <>
            <StyledAppBar position="fixed">
                <Container>
                    <Box
                        display="flex"
                        alignItems="center"
                        py={3}
                        px={1}
                        justifyContent="space-between"
                    >
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                fontFamily: 'serif',
                                color: theme.palette.custom.highlight,
                                fontWeight: 'bold',
                            }}
                        >
                            ArtGlimpse
                        </Typography>

                        {renderDesktopMenu()}
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 2,
                                alignItems: 'center'
                            }}
                        >
                            <Box position="relative">
                                <TextField
                                    size="small"
                                    placeholder="Search for products, categories..."
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <Search
                                                size={20}
                                                style={{
                                                    marginRight: 8,
                                                    color: theme.palette.secondary.main,
                                                }}
                                            />
                                        ),
                                        sx: {
                                            paddingInline: '10px',
                                            fontSize: '14px',
                                        },
                                    }}
                                    sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        borderRadius: '50px',
                                        border: '1px solid #dbd4c7',
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                border: 'none',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: theme.palette.primary.dark,
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: theme.palette.custom.highlight,
                                            },
                                        },
                                        '& input::placeholder': {
                                            color: theme.palette.secondary.main,
                                            fontStyle: 'italic',
                                        },
                                    }}
                                />
                            </Box>


                            <Button
                                variant="outlined"
                                onClick={() => setAuthDialog({ open: true, isLogin: true })}
                                sx={{
                                    color: theme.palette.custom.highlight,
                                    borderColor: theme.palette.custom.highlight,
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    '&:hover': {
                                        borderColor: theme.palette.custom.accent,
                                        backgroundColor: theme.palette.primary.main,
                                    },
                                }}
                            >
                                Login
                            </Button>

                            <Button
                                variant="contained"
                                onClick={() => setAuthDialog({ open: true, isLogin: false })}
                                sx={{
                                    backgroundColor: theme.palette.custom.highlight,
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    color: '#fff',
                                    '&:hover': { backgroundColor: theme.palette.custom.accent },
                                }}
                            >
                                Sign Up
                            </Button>
                        </Box>

                        <IconButton
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                            onClick={() => setDrawerOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Container>
            </StyledAppBar>

            {renderMobileMenu()}

            <AuthDialog
                open={authDialog.open}
                onClose={() => setAuthDialog({ ...authDialog, open: false })}
                isLogin={authDialog.isLogin}
            />
        </>
    );
};

export default Header;


