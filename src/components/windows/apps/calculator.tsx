import { Button, ButtonGroup, Card, Divider, Input, Text } from '@mantine/core';
import { type ReactNode, useEffect, useState } from 'react';
import {
    FaCalculator,
    FaDivide,
    FaEquals,
    FaGithub,
    FaLinkedin,
    FaMailBulk,
    FaMinus,
    FaPlus,
} from 'react-icons/fa';
import { FaDeleteLeft, FaPlusMinus, FaXmark } from 'react-icons/fa6';
import { Rnd } from 'react-rnd';
import { useStore } from '~/store/store';
import Link from 'next/link';
import PortfolioIcon from '~/components/portfolioIcon';
import AppWindow from '~/components/appWindow';

export const CalculatorIcon = () => {
    const store = useStore();
    return (
        <PortfolioIcon>
            <Button
                variant='light'
                h={'100%'}
                fullWidth
                onClick={() => {
                    store.windows.toggleHide('calculator');
                }}
            >
                <div className='flex flex-col justify-center items-center'>
                    <FaCalculator />
                    <Text size='xs'>Calculator</Text>
                </div>
            </Button>
        </PortfolioIcon>
    );
};

interface Props {
    children?: ReactNode;
}

const Calculator = (props: Props) => {
    const [calculatorValue, setCalculatorValue] = useState<number | null>(null);
    const [currentValue, setCurrentValue] = useState('0');
    const [operation, setOperation] = useState<
        | (
              | 'add'
              | 'substract'
              | 'multiply'
              | 'divide'
              | 'modulus'
              | 'exponent'
              | 'root'
          )
        | null
    >('add');

    const getCalculatorValue = () => {
        let output = '';

        if (calculatorValue) {
            output += calculatorValue;
        }

        if (calculatorValue) {
            switch (operation) {
                case 'add':
                    output += ` +`;
                    break;
                case 'substract':
                    output += ` -`;
                    break;
                case 'multiply':
                    output += ` *`;
                    break;
                case 'divide':
                    output += ` /`;
                    break;
                case 'modulus':
                    output += ` %`;
                    break;
                default:
                    output += ` =`;
                    break;
            }
        }
        return output;
    };

    const calcValue = getCalculatorValue();

    return (
        <AppWindow
            window='calculator'
            title='Calculator'
            height={360}
            width={380}
        >
            <div className='flex flex-col w-full gap-1 h-full pb-1'>
                <div className='mt-1 mx-1 flex flex-col justify-end'>
                    <Text ta='right' c={'dimmed'} size='sm'>
                        {calcValue !== '' ? calcValue : <>&zwnj;</>}
                    </Text>
                    <Text ta='right' size='xl' fw={500}>
                        {currentValue !== '' ? currentValue : <>&zwnj;</>}
                    </Text>
                </div>
                <div className='w-full flex gap-1 px-1 grow'>
                    <Button
                        variant='light'
                        color='#fffff'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setOperation('modulus');
                            if (calculatorValue == null) {
                                setCalculatorValue(Number(currentValue));
                                setCurrentValue('0');
                            }
                        }}
                    >
                        %
                    </Button>
                    <Button
                        variant='light'
                        color='#fffff'
                        className='basis-1/4'
                        h={'100%'}
                    ></Button>
                    <Button
                        variant='light'
                        color='#fffff'
                        className='basis-1/4'
                        h={'100%'}
                    ></Button>
                    <Button
                        variant='light'
                        color='#fffff'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setCurrentValue(state =>
                                state.slice(0, state.length - 1)
                            );
                        }}
                    >
                        <FaDeleteLeft />
                    </Button>
                </div>
                <div className='w-full flex gap-1 px-1 grow'>
                    <Button
                        variant='light'
                        color='#fffff'
                        className='basis-1/4'
                        h={'100%'}
                    ></Button>

                    <Button
                        variant='light'
                        color='#fffff'
                        className='basis-1/4'
                        h={'100%'}
                    ></Button>

                    <Button
                        variant='light'
                        color='#fffff'
                        className='basis-1/4'
                        h={'100%'}
                    ></Button>

                    <Button
                        variant='light'
                        color='#fffff'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setOperation('divide');
                            if (calculatorValue == null) {
                                setCalculatorValue(Number(currentValue));
                                setCurrentValue('0');
                            }
                        }}
                    >
                        <FaDivide />
                    </Button>
                </div>
                <div className='w-full flex gap-1 px-1 grow'>
                    <Button
                        variant='light'
                        color='gray'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setCurrentValue(state => {
                                if (state == '0') {
                                    return '7';
                                } else {
                                    return `${state}7`;
                                }
                            });
                        }}
                    >
                        7
                    </Button>
                    <Button
                        variant='light'
                        color='gray'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setCurrentValue(state => {
                                if (state == '0') {
                                    return '8';
                                } else {
                                    return `${state}8`;
                                }
                            });
                        }}
                    >
                        8
                    </Button>
                    <Button
                        variant='light'
                        color='gray'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setCurrentValue(state => {
                                if (state == '0') {
                                    return '9';
                                } else {
                                    return `${state}9`;
                                }
                            });
                        }}
                    >
                        9
                    </Button>

                    <Button
                        variant='light'
                        color='#fffff'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setOperation('multiply');
                            if (calculatorValue == null) {
                                setCalculatorValue(Number(currentValue));
                                setCurrentValue('0');
                            }
                        }}
                    >
                        <FaXmark />
                    </Button>
                </div>
                <div className='w-full flex gap-1 px-1 grow'>
                    <Button
                        variant='light'
                        color='gray'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setCurrentValue(state => {
                                if (state == '0') {
                                    return '4';
                                } else {
                                    return `${state}4`;
                                }
                            });
                        }}
                    >
                        4
                    </Button>
                    <Button
                        variant='light'
                        color='gray'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setCurrentValue(state => {
                                if (state == '0') {
                                    return '5';
                                } else {
                                    return `${state}5`;
                                }
                            });
                        }}
                    >
                        5
                    </Button>
                    <Button
                        variant='light'
                        color='gray'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setCurrentValue(state => {
                                if (state == '0') {
                                    return '6';
                                } else {
                                    return `${state}6`;
                                }
                            });
                        }}
                    >
                        6
                    </Button>
                    <Button
                        variant='light'
                        color='#fffff'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setOperation('substract');
                            if (calculatorValue == null) {
                                setCalculatorValue(Number(currentValue));
                                setCurrentValue('0');
                            }
                        }}
                    >
                        <FaMinus />
                    </Button>
                </div>
                <div className='w-full flex gap-1 px-1 grow'>
                    <Button
                        variant='light'
                        color='gray'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setCurrentValue(state => {
                                if (state == '0') {
                                    return '1';
                                } else {
                                    return `${state}1`;
                                }
                            });
                        }}
                    >
                        1
                    </Button>
                    <Button
                        variant='light'
                        color='gray'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setCurrentValue(state => {
                                if (state == '0') {
                                    return '2';
                                } else {
                                    return `${state}2`;
                                }
                            });
                        }}
                    >
                        2
                    </Button>
                    <Button
                        variant='light'
                        color='gray'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setCurrentValue(state => {
                                if (state == '0') {
                                    return '3';
                                } else {
                                    return `${state}3`;
                                }
                            });
                        }}
                    >
                        3
                    </Button>
                    <Button
                        variant='light'
                        color='#fffff'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setOperation('add');
                            if (calculatorValue == null) {
                                setCalculatorValue(Number(currentValue));
                                setCurrentValue('0');
                            }
                        }}
                    >
                        <FaPlus />
                    </Button>
                </div>
                <div className='w-full flex gap-1 px-1 grow'>
                    <Button
                        variant='light'
                        color='gray'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setCurrentValue(state => {
                                if (Number(state) == 0) {
                                    return state;
                                }
                                if (state.startsWith('-')) {
                                    return state.slice(1);
                                } else {
                                    return `-${state}`;
                                }
                            });
                        }}
                    >
                        <FaPlusMinus />
                    </Button>
                    <Button
                        variant='light'
                        color='gray'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setCurrentValue(state => {
                                if (state == '0') {
                                    return '0';
                                } else {
                                    return `${state}0`;
                                }
                            });
                        }}
                    >
                        0
                    </Button>
                    <Button
                        variant='light'
                        color='gray'
                        className='basis-1/4'
                        h={'100%'}
                    >
                        .
                    </Button>
                    <Button
                        variant='light'
                        className='basis-1/4'
                        h={'100%'}
                        onClick={() => {
                            setCalculatorValue(state => {
                                if (operation == 'add') {
                                    return Number(state) + Number(currentValue);
                                }
                                if (operation == 'substract') {
                                    return Number(state) - Number(currentValue);
                                }
                                if (operation == 'multiply') {
                                    return Number(state) * Number(currentValue);
                                }
                                if (operation == 'divide') {
                                    return Number(state) / Number(currentValue);
                                }
                                if (operation == 'modulus') {
                                    return Number(state) % Number(currentValue);
                                }
                                return Number(currentValue);
                            });
                            setCurrentValue('');
                            setOperation(null);
                        }}
                    >
                        <FaEquals />
                    </Button>
                </div>
            </div>
        </AppWindow>
    );
};

export default Calculator;
