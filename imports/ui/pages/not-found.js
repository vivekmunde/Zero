import React from 'react';
import AppLayout from '/imports/ui/components/app-layout';

const NotFoundPage = () => (
    <AppLayout>
        <div className="z-page-message">
            <div className="z-flex-align">
                <div className="z-flex-align_center">
                    <i className="fa fa-exclamation-triangle z-icon z-page-message_icon z-text_error" />
                </div>
            </div>
            <div className="z-flex-align">
                <div className="z-flex-align_center">
                    <h3 className="z-text_error">Page not found!</h3>
                </div>
            </div>
        </div>
    </AppLayout>
);

export default NotFoundPage;