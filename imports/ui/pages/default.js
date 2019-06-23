import React from 'react';
import AppLayout from '/imports/ui/components/app-layout';
import Helmet from '/imports/ui/components/helmet';

const DefaultPage = () => (
    <AppLayout>
        <Helmet>
            <title>Zero</title>
        </Helmet>
        Helloo!!
    </AppLayout>
);

export default DefaultPage;