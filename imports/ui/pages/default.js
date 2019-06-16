import React from 'react';
import AppLayout from '../components/app-layout';
import Helmet from '../components/helmet';

const DefaultPage = () => (
    <AppLayout>
        <Helmet>
            <title>Zero</title>
        </Helmet>
        Helloo!!
    </AppLayout>
);

export default DefaultPage;