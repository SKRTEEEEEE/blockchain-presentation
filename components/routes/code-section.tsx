import Link from "next/link";
import AvatarServices from "./avatar-services";
import Image from "next/image";

const CodeSection = () => {
    return (
        <section>
              <Image src="/avatar-code.png" width="300" height="500" className="bottom-0 right-0 hidden md:inline-block md:absolute  " alt="Particles " />
            <div className='flex flex-col justify-center h-lvh'>
                <AvatarServices />
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    No dude en solicitar
                    <span className="font-bold text-secondary"> mas información.
                    </span> {" "}
                    <br /> Obtenga ahora un estudio personalizado para adaptar su marca al <span className="block font-bold text-secondary">nuevo ecosistema 3.0</span>
                </h1>
                <div className="flex items-center justify-center">
                    <div>
                         <div className="flex justify-between gap-5 mt-5">
                                             <Link
                                                href={"mailto:adanreh.m@gmail.com"}
                                                target="_blank"
                                                className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                                            >
                                                <span className='hidden lg:inline'>Solicitar </span>Información 🙋‍♂️
                                            </Link>

                                            <Link
                                                href={"https://profile-skrt.vercel.app"}
                                            
                                                className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
                                            >
                                                <span className='hidden lg:inline'>Web </span>Desarrollador ❤️
                                            </Link>
                                            <Link
                                                href={"https://drive.google.com/file/d/1vk9IEbVqTQybKiD-Xvt7efs6pjKJr2zt/view?usp=drive_link"}
                                                target="_blank"
                                                className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                                            >
                                                <span className='hidden lg:inline'>Ventajas </span>Techs 3.0 🧑‍💻
                                            </Link> 
                                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CodeSection;