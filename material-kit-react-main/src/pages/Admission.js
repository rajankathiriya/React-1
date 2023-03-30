
import React from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Stack, Typography } from '@mui/material';

const Admission = () => {
    return (
        <>
            <Helmet>
                <title> Shital Academy Vadodara </title>
            </Helmet>
            {/* hello */}
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Admission
                </Typography>
            </Container>
        </>
    );
}

export default Admission;
