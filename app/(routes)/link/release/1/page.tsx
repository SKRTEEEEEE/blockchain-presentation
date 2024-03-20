"use client"

import TransitionPage from "@/components/main/transition-page";
import AvatarServices from "@/components/routes/avatar-services";
import SliderDoble from "@/components/routes/slider-doble";
import { formasComunesData, importanciaLiberacionData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
// import CircleImage from "@/components/routes/circle-image";

const Release1Page = () => {
    return (
        <main>
            <TransitionPage />
            <Image src="/section(7).png" width="200" height="400" className="bottom-0 right-0 hidden md:inline-block md:absolute  " alt="Particles " />
            <AvatarServices />
            <section className="lg:flex-row mt-36 md:mt-18 lg:mt-0 flex flex-col-reverse items-center justify-evenly h-screen xl:px-8 md:gap-6 gap-2 ">
                <div className="">

                    <h2 className="text-sm"><i>Elección crucial para mantener el interés en tu marca</i></h2>

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
                        autoplay={true}
                        modules={[Pagination]}
                        className="h-[300px] xl:h-[350px] w-[370px] xl:w-[750px] sm:w-[550px] "
                    >
                        {importanciaLiberacionData.map(({ title, description, image }) => (
                            <SwiperSlide key={title}>
                                <div className="flex xl:mt-8 mt-4" style={{
                                    "height": "60px",
                                    "alignItems": "center",
                                    "justifyContent": "space-evenly"
                                }}>
                                    <Image src={image} alt={title} width="60" height="60" className="rounded-full" />
                                    <h4 className='text-center xl:text-3xl text-secondary'>{title}</h4>
                                </div><div className="mt-5 xl:text-xl text-sm text-center">
                                    {description}
                                </div>



                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex items-center justify-center gap-3 w-full md:gap-10 lg:mb-0 mb-36 w-[370px] xl:w-[750px] sm:w-[550px]">


                        <Link href="/link/release" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            ⬅️🕵️ Volver atrás
                        </Link>
                        <Link href="/link/release/2" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Descubre más 🙋‍♂️➡️
                        </Link>


                    </div>
                </div>
                <div className="w-max">
                    <h1 className="text-xl md:mt-0 mt-36 leading-tight text-secondary text-center sm:text-left xl:text-4xl xl:mb-5">Formas comunes de liberación</h1>
                    <SliderDoble data={formasComunesData} />

                </div>

            </section>
        </main>
    )
}
export default Release1Page;