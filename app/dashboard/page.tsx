import React from 'react';
import { requireUser } from '../lib/hooks';
import { Navbar } from '../components/Navbar';

const DashboardPage = async () => {
    const session = await requireUser();

    return (
        <>
            <div>
                hello from dashboard
            </div>
        </>
    );
}

export default DashboardPage;
