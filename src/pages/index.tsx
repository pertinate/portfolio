import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';

import { api } from '~/utils/api';

export default function Home() {
    // const hello = api.post.hello.useQuery({ text: 'from tRPC' });

    return (
        <div className='flex-auto bg-gray-300 md:overflow-auto '>
            <Head>
                <title>Portfolio - Nicholas Evans</title>
                <meta property='og:url' content='http://pertinate.info' />
                <meta property='og:type' content='website' />
                <meta
                    property='og:title'
                    content='Portfolio - Nicholas Evans'
                />
                <meta
                    property='twitter:card'
                    content={`Nicholas Evans' portfolio website`}
                />
                <meta
                    property='og:description'
                    content={`Nicholas Evans' portfolio website`}
                />
                <meta
                    property='og:image'
                    content='http://pertinate.info/images/logo.jpeg'
                />
            </Head>
            <div className='flex flex-col justify-center pt-8 md:flex-row'>
                <div className='mb-8 flex flex-col pr-4'>
                    <div className='h-auto bg-white p-4 pr-48 shadow-md'>
                        <h2 className='mb-8 text-2xl font-bold text-gray-600'>
                            About Me
                        </h2>
                        <div className='flex flex-row items-baseline py-2'>
                            <h4 className='mr-2 text-lg font-medium'>
                                Languages:
                            </h4>
                            <p className='font-light'>
                                Node.JS, TypeScript, C#
                            </p>
                        </div>
                        <div className='flex flex-row items-baseline py-2'>
                            <h4 className='mr-2 text-lg font-medium'>
                                Frameworks:
                            </h4>
                            <p className='font-light'>
                                React, Tailwind CSS, Firebase
                            </p>
                        </div>
                        <div className='flex flex-row items-baseline py-2'>
                            <h4 className='mr-2 text-lg font-medium'>
                                Databases:
                            </h4>
                            <p className='font-light'>
                                Azure SQL, MySQL, SQLite, Google BigQuery,
                                PostGRE
                            </p>
                        </div>
                        <div className='flex flex-row items-baseline py-2'>
                            <h4 className='mr-2 text-lg font-medium'>Tools:</h4>
                            <p className='font-light'>Git, CI/CD, Docker</p>
                        </div>
                        <div className='flex flex-row items-baseline py-2'>
                            <h4 className='mr-2 text-lg font-medium'>
                                Operating Systems:
                            </h4>
                            <p className='font-light'>
                                Windows, Mac, Ubuntu, CentOS
                            </p>
                        </div>
                    </div>
                    <div className='mt-8 h-auto bg-white p-4 pr-48 shadow-md'>
                        <h2 className='mb-8 text-2xl font-bold text-gray-600'>
                            Latest Project
                        </h2>
                    </div>
                    <div className='mt-8 h-auto bg-white p-4 pr-48 shadow-md'>
                        <h2 className='mb-8 text-2xl font-bold text-gray-600'>
                            Project List
                        </h2>
                    </div>
                    <div className='mt-8 h-auto bg-white p-4 pr-48 shadow-md'>
                        <h2 className='mb-8 text-2xl font-bold text-gray-600'>
                            Work Experience
                        </h2>
                        {/* <WorkExperience
                            role='FullStack / DevOps Developer'
                            company='Wal-Mart'
                            timeSpan='(Sept 2019 - CURRENT)'
                            roleDescription='Project Blue (Store down detection), Associate Call In tool'
                            environments='React, Typescript, SQL, BigQuery, PostGRE, Nats.IO, Kafka, Cloud'
                        /> */}
                    </div>
                </div>
                <div className='flex flex-col pb-8 pl-4'>
                    <div className='h-auto bg-white p-4 pr-16 shadow-md'>
                        {/* <div className='mx-4 my-8 flex flex-row'>
                            <SiGooglemaps className='mr-2 h-6 w-6' />
                            <p>Prairie Grove, Arkansas, United States</p>
                        </div>
                        <div className='mx-4 my-8 flex flex-row'>
                            <HiMail className='mr-2 h-6 w-6' />
                            <a>nicholas@pertinate.info</a>
                        </div>
                        <div className='mx-4 my-8 flex flex-row'>
                            <HiDownload className='mr-2 h-6 w-6' />
                            <a>Download Resume</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
