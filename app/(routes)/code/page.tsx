"use client"

import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import { web3page } from '@/data';
import CircleImage from '@/components/circle-image';
// import AvatarPortfolio from '@/components/avatar-portfolio';
import TransitionPage from '@/components/transition-page';
import Link from 'next/link';
import AvatarCode from '@/components/avatar-code';

const Web3Page = () => {
    return (
        <>
            <TransitionPage />
            <AvatarCode/>
            <div className='flex flex-col justify-center h-lvh'>
                <CircleImage />
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Ejemplos de proyectos
                    <span className="block font-bold text-secondary"> de desarollo web3
                    </span>
                </h1>
                <div className="flex items-center justify-center">
                    <div>
                        <Swiper
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 15
                                },
                            }}
                            freeMode={true}
                            pagination={{
                                clickable: true
                            }}
                            modules={[Pagination]}
                            className="h-[380px] md:h-[300px] w-[270px] xl:w-[750px] lg:w-[650px] md:w-[550px] sm:w-[400]"
                        >
                            {web3page.map(({ id, name, description, imageUrl, urlDemo, urlGithub }) => (
                                <SwiperSlide key={id}>
                                    <Image src={imageUrl} alt={name} width="100" height="100" className="mx-auto rounded-full" />
                                    <h4 className='text-center'>{name}</h4>
                                    <div className="mt-5 text-center">
                                        {description}
                                    </div>
                                    
                                        <div className="flex justify-between gap-5 mt-5">
                                            <Link
                                                href={urlGithub}
                                                target="_blank"
                                                className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                                            >
                                                Github
                                            </Link>

                                            <Link
                                                href={urlDemo}
                                                target="_blank"
                                                className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
                                            >
                                                Live demo
                                            </Link>
                                        </div>
                                    
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Web3Page;