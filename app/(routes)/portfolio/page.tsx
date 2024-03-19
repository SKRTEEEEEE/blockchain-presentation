import Image from "next/image";
import Link from "next/link";


import AvatarPortfolio from "@/components/avatar-portfolio";
// import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";




const PortfolioPage = () => {



    return (
        <ContainerPage>
            <TransitionPage />
            <>

                {/* <CircleImage /> */}
                <AvatarPortfolio />
                <h2 className="text-xl leading-tight text-center sm:text-left xl:text-4xl xl:mb-5">Dentro de las posibilidades de uso de la tecnología Blockchain en empresas tradicionales, destaca la <span className="font-bold text-secondary">vinculación de los productos físicos a los NFT</span> (Tokens No Fungibles):  </h2>
                <div className="md:grid flex flex-col items-center justify-center max-w-5xl md:gap-6 gap-6 mx-auto md:grid-cols-2">
                    <div className="max-w-[450px]">



                        <ul className="xl:text-xl 
                    text-gray-300">
                            <li className="mb-2 border-secondary/10 border-4 rounded-md">
                                ➡️ Ya sea a través de la liberación periódica de NFTs (por la compra de cierta cantidad de productos, como premio por la fidelidad de sus clientes, por participar en ciertos sorteos, etc…) o la posibilidad de vincular directamente NFTs por cada compra realizada en su marca.
                            </li>
                            <li className="mb-2 border-secondary/10 border-4 rounded-md">➡️ Esta vinculación a traves de Smart Contracts permite sentar las bases para la creación de una experiencia única para los consumidores.  </li>
                        </ul>

                        {/* <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button> */}
                    </div>

                    {/* SLIDER */}
                    <Link target="_blank" href={"https://drive.google.com/file/d/1joqyye5sdhf5h4xsy8Vj91cFdCQxJEPV/view?usp=drive_link"} className="border-4 rounded-md border-secondary/80 hover:bg-white/20 hover:border-secondary/40 p-4">
                        <Image src="/VinculacionNFT.jpg" alt="Vinculación de los productos físicos a los NFT" height={300} width={600} className="border-4 rounded-md border-white" />
                    </Link>
                </div>
            </>
        </ContainerPage>
    );
}

export default PortfolioPage;