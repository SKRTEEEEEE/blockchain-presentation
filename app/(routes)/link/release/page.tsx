import TransitionPage from "@/components/main/transition-page";
import AvatarServices from "@/components/routes/avatar-services";
import Image from "next/image";
import Link from "next/link";
// import CircleImage from "@/components/routes/circle-image";

const ReleasePage = () => {
    return(
        <main>
            <TransitionPage/>
            <Image src="/section(7).png" width="200" height="400" className="bottom-0 right-0 hidden md:inline-block md:absolute  " alt="Particles " />
            <AvatarServices />
            <section className="mt-32 p-2 sm:mt-18 md:mt-0 md:grid flex flex-col items-center justify-center h-screen max-w-5xl md:gap-6 gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    {/* <h1 className="text-xl leading-tight text-center sm:text-left xl:text-4xl xl:mb-5">Mis <span className="font-bold text-secondary"> skills.</span></h1> */}

                    <div className=" md:mb-3 xl:text-3xl 
                    text-gray-300">
                        <div className="mb-4 xl:px-8 xl:mb-8"><h1 className="text-secondary">Liberación de NFTs (y tokens)</h1>vinculados a productos físicos o servicios
                        </div>
                        <h2 className="text-sm"><i>Descripción general</i></h2>
                        <p className="xl:text-md text-sm">La elección de un sistema de liberación de NFTs o tokens es crucial para mantener el interés en tu marca y atraer nuevos clientes. <br />
                        No solo afecta la accesibilidad y disponibilidad de tus activos digitales, sino que también, juega un papel crucial en la percepción de tu marca, la participación de la audiencia y la creación de valor a largo plazo.</p>
                         
                    </div>
                    <div className="flex items-center w-max justify-center gap-3 md:justify-start md:gap-10">
                        
                        <Link href="https://www.canva.com/design/DAGACD9J6sg/NE5sO32WEsO3d1_NJUeAww/edit?utm_content=DAGACD9J6sg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary/10  hover:text-secondary/20 hover:border-secondary border-secondary/20 rounded-xl hover:shadow-xl hover:shadow-secondary">
                            📄📥 PDF Completo
                        </Link>
                        <Link href="/link/release/1"  className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Descubre más 🙋‍♂️➡️
                        </Link>
                      
                    </div>
                    {/*                         
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button> */}
                </div>
                <Link target="_blank" href={"https://drive.google.com/file/d/1goceSbfIqNWne737jil9WyfQAq7sexlw/view?usp=sharing"} className="border-4 rounded-md border-secondary/20 hover:bg-white/20 hover:border-secondary/40 w-full p-4" >
                    
                    <Image src="/concepto-liberacion.png" alt="Concepto liberación de activos" layout="responsive" width={"600"} height="300"/>
                </Link>
            </section>
        </main>
    )
}
export default ReleasePage;