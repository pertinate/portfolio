import { Button, Card, Divider, Text } from '@mantine/core';
import { type ReactNode, useEffect, useState } from 'react';

interface Props {
    title: string | ReactNode;
    children?: ReactNode;
}

const InfoCard = (props: Props) => {
    return (
        <Card
            withBorder
            style={{
                width: '100%',
                height: '100%',
                padding: 0,
            }}
            className='mt-4'
        >
            <div className='flex gap-8 items-center max-w-full'>
                <div className='grow drag-only cursor-move pl-4'>
                    {typeof props.title == 'string' ? (
                        <Text>{props.title}</Text>
                    ) : (
                        props.title
                    )}
                </div>
            </div>
            <Divider />
            <div className='p-2'>{props.children}</div>
        </Card>
    );
};

export default InfoCard;
