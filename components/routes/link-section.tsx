import Image from "next/image"
import Link from "next/link"
import AvatarPortfolio from "./avatar-portfolio"

const LinkSection = () => {
    return (
        <section>

        {/* <CircleImage /> */}
        <AvatarPortfolio />
        <div className="text-xl leading-tight text-center sm:text-left xl:text-xl xl:mb-5">Dentro de las posibilidades de uso de la tecnología Blockchain en empresas tradicionales, destaca: <br /> <span className="xl:text-4xl"> La</span> <h1 className="xl:text-4xl font-bold inline text-secondary">vinculación de productos físicos a NFTs</h1> <br /> (Tokens No Fungibles)  </div>
        <div className="md:grid flex flex-col items-center justify-center max-w-5xl md:gap-6 gap-6 mx-auto md:grid-cols-2">
            <div className="max-w-[450px]">



                <ul className="xl:text-xl 
            text-gray-300">
                    <li className="mb-2 border-secondary/10 hover:bg-secondary/10 hover:border-secondary/50 border-4 rounded-md">
                        <Link href="/link/release">
                        ➡️ A través de la liberación periódica de NFTs (por la compra de cierta cantidad de productos, como premio por la fidelidad de sus clientes, por participar en ciertos sorteos, etc…) o la posibilidad de vincular directamente NFTs por cada compra realizada en su marca.</Link>
                    </li>
                    <li className="mb-2 border-secondary/10 hover:bg-secondary/10 hover:border-secondary/50 border-4 rounded-md">
                        <Link target="_blank" href={"https://www.canva.com/design/DAGACD9J6sg/NE5sO32WEsO3d1_NJUeAww/edit?utm_content=DAGACD9J6sg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"}>📥 <i className="text-sm"> Descarga el PDF sobre liberación de NFTs (o tokens)</i></Link>
                    </li>
                    <li className="mb-2 p-1">Esta vinculación a traves de Smart Contracts permite sentar las bases para la creación de una experiencia única para los consumidores.  </li>
                </ul>

                {/* <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button> */}
            </div>

            {/* SLIDER */}
            <Link target="_blank" href={"https://drive.google.com/file/d/1joqyye5sdhf5h4xsy8Vj91cFdCQxJEPV/view?usp=drive_link"} className="border-4 rounded-md border-secondary/20 hover:bg-white/20 hover:border-secondary/40 p-4">
                <Image src="/VinculacionNFT.jpg" alt="Vinculación de los productos físicos a los NFT" height={300} width={600} className="border-4 rounded-md border-white" />
            </Link>
        </div>
        </section >
    )
}
export default LinkSection;