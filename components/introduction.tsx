import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 flex items-center justify-around h-full p-6 py-20">
                <Image src="/hero-main.png" priority width="300" height="800" className="hidden sm:flex" alt="Avatar" />
                <div className="flex flex-col justify-center w-3/4">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Tecnologia {" "}
                        <TypeAnimation
                            sequence={[
                                'eficiente',
                                2000,
                                'colaborativa', 
                                2000,
                                'sostenible',
                                2000,
                                'blockchain.',
                                10000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>
                    <div className="mx-auto mb-2 md:mx-0 md:mb-8">
                    <p className="text-xl md:text-xl">
                        Explora las posibilidades del ecosistema tecnologico 3.0 
                    </p>
                    <ol className="mt-2">
                        <li>Descubre todas las posibilidades al aplicar en su marca las ventajas de esta nueva era tecnologica 🤖</li>
                        <li>Encuentra la manera mas ideal para aplicar estas ventajas en tu marca 👌</li>
                    </ol>
                    </div>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link href="https://drive.google.com/file/d/1vk9IEbVqTQybKiD-Xvt7efs6pjKJr2zt/view?usp=drive_link" target="_blank" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            📄📥 PDF Ventajas Tecnologias 3.0
                        </Link>
                        <Link href="https://tokenizacion.my.canva.site/ventajas-tecnologicas-3" target="_blank" className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                            🧑‍💻📱 Web Ventajas Tecnologias 3.0
                        </Link>
                        {/* <a href="mailto:adanreh.m@gmail.com"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contacta conmigo
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;