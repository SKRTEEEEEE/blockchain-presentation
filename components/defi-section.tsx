import { defiSection } from "@/data";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

const DefiSection = () => {
    return (
        <section className="z-20 w-full bg-darkBg/60">
            <div className="z-20 flex items-center justify-around h-full p-6 py-20">
                <Image src="/home-4.png" priority width="300" height="800" className="hidden sm:flex" alt="Avatar" />
                <div className="flex flex-col justify-center w-3/4">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Tecnologia De-Fi y{" "}<span className="text-secondary">Pagos con criptoactivos</span>
                        
                    </h1>
                    <div className="flex mx-auto mb-2 md:mx-0 md:mb-8">
                    <p className="text-xl w-1/4 md:text-xl">
                    La integración de funcionalidades De-Fi <br />(Finanzas Descentralizadas) ofrece a los usuarios la capacidad de emplear sus NFT (o criptoactivos) como activos en el mercado financiero. <br /> Esta integración añade un valor adicional a la experiencia de su marca, fortaleciendo la relación con los clientes y diferenciando la oferta de productos tradicionales de manera significativa.
                    </p>
                    <div className="w-3/4">
                        <p><i>La aceptación de pagos con criptoactivos y la posibilidad de aceptar pagos con NFTs son dos oportunidades que las empresas tradicionales pueden aprovechar para expandir sus opciones de pago y atraer a un nuevo grupo de clientes.</i></p>
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
                            className="h-[380px] md:h-[300px] w-[270px] xl:w-[750px] lg:w-[650px] sm:w-[550px] "
                        >
                            {defiSection.map(({ id, name, description, imageUrl }) => (
                                <SwiperSlide key={id}>
                                    <div className="flex xl:mt-8 mt-4" style={{
                                        "height": "60px",
                                        "alignItems": "center",
                                        "justifyContent": "space-evenly"
                                    }}>
                                    <Image src={imageUrl} alt={name} width="60" height="60" className="rounded-full" />
                                    <h4 className='text-center xl:text-3xl text-secondary'>{name}</h4>
                                    </div><div className="mt-5 xl:text-3xl text-center">
                                        {description}
                                    </div>
                                    
                                      
                                    
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    </div>

                    {/* <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link href="https://tokenizacion.my.canva.site/ventajas-tecnologicas-3" target="_blank" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            🧑‍💻 Web Ventajas Tecnologias 3.0
                        </Link>
                        <Link href="#Al PDF" target="_blank" className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                            📄 PDF Ventajas Tecnologias 3.0
                        </Link>
                       
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default DefiSection;