'use client'
import { useDashboard } from '@/hooks/useDashboard';
import { sectionAtom } from '@/store';
import { useAtom } from 'jotai';
import React from 'react';

// Import the components for the sections
import AvailableCars from '@/components/layout/AvailableCars';
import SoldCars from '@/components/layout/SoldCars';
import Manage from '@/components/layout/Manage';

function Dashboard() {
    const [section] = useAtom(sectionAtom);
    
    const renderSection = () => {
        switch (section) {
            case 'Available':
                return <AvailableCars />;
            case 'Sold Cars':
                return <SoldCars />;
            case 'Manage':
                return <Manage />;
            default:
                return <div>Invalid section</div>;
        }
    };

    return (
        <div className=' p-10 lg:p-20 min-w-[100vw]   '>
            {renderSection()}
        </div>
    );
}

export default Dashboard;
