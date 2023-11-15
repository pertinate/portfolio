import { ButtonGroup, Button, Text } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';

const Socials = () => {
    const [showSocials, setShowSocials] = useState(false);
    return (
        <div className='absolute bottom-0 right-0 p-2'>
            <ButtonGroup borderWidth={2}>
                {showSocials && (
                    <>
                        <Button
                            variant='light'
                            radius={'lg'}
                            component={Link}
                            href={
                                'https://www.linkedin.com/in/nicholas-evans-712b69a4/'
                            }
                            target='_blank'
                        >
                            <div className='flex gap-1 items-center'>
                                <FaLinkedin />
                                <Text>LinkedIn</Text>
                            </div>
                        </Button>
                        <Button
                            variant='light'
                            component={Link}
                            href={'https://github.com/pertinate'}
                            target='_blank'
                        >
                            <div className='flex gap-1 items-center'>
                                <FaGithub />
                                <Text>Github</Text>
                            </div>
                        </Button>
                        <Button
                            variant='light'
                            radius={'lg'}
                            component={Link}
                            href={'https://gitlab.com/pertinate'}
                            target='_blank'
                        >
                            <div className='flex gap-1 items-center'>
                                <FaGitlab />
                                <Text>Gitlab</Text>
                            </div>
                        </Button>
                    </>
                )}
                <Button
                    p={8}
                    variant='light'
                    radius={'lg'}
                    onClick={() => setShowSocials(show => !show)}
                    style={{
                        display: 'flex',
                        justifyItems: 'center',
                        alignItems: 'center',
                    }}
                >
                    <label>. . .</label>
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default Socials;
