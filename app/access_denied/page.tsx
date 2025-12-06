import { Box, Container, Typography } from '@mui/material';
import access_denied from '../../public/access_denied.avif';

const AccessDenied = () => {
    return (
        <Container>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "600px"
            }}>
                <Typography fontSize={40}>403</Typography>
                <Typography fontSize={30}>Access Denied</Typography>
                <Typography>You don't have permission to view this page.</Typography>
                <Typography>
                    <span role="img" aria-label="warning">⚠️</span>
                    Please contact your administrator if you believe this is an error.
                </Typography>
                <Typography >
                    You can go back to the <a href='/' className='text-blue-600 underline'>homepage</a>.
                </Typography>
                <img className='w-60' src={access_denied.src} alt="" />
            </Box>
        </Container>
    );
};

export default AccessDenied;