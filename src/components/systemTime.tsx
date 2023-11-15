import { Text } from '@mantine/core';
import { useEffect, useState } from 'react';

const SystemTime = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className='flex flex-col justify-center items-center'>
            <Text>{`${`0${currentDate.getHours()}`.slice(
                -2
            )}:${`0${currentDate.getMinutes()}`.slice(
                -2
            )}:${`0${currentDate.getSeconds()}`.slice(-2)}`}</Text>
            <Text>{currentDate.toDateString()}</Text>
        </div>
    );
};

export default SystemTime;
