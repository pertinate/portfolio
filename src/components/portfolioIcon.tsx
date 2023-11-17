import { Button, Text } from '@mantine/core';
import { type ReactNode, useEffect, useState } from 'react';

interface Props {
    children?: ReactNode;
}

const PortfolioIcon = (props: Props) => {
    return (
        <div className='w-auto h-16 flex justify-center items-center'>
            {props.children}
        </div>
    );
};

export default PortfolioIcon;
