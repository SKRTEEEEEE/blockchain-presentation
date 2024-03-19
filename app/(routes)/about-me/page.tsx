import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
// import TransitionPage from "@/components/transition-page";

const FuncionalidadesPage = () => {
    return (
        <>
            
            <CircleImage />
            <AvatarServices />
            <div className="md:grid flex flex-col items-center justify-center h-screen max-w-5xl md:gap-6 gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    {/* <h1 className="text-xl leading-tight text-center sm:text-left xl:text-4xl xl:mb-5">Mis <span className="font-bold text-secondary"> skills.</span></h1> */}
                    
                        <div className="md:mb-3 xl:text-3xl 
                    text-gray-300">
                            <p className="mb-4 xl:mb-8">A estos NFTs, se podrán <br /><strong className="text-secondary"> integrar funciones adicionales como juegos o herramientas interactivas</strong> <br />para que los usuarios puedan disfrutar plenamente de su marca.
</p><p>
Algunas de las ventajas de incluir dichas funciones son:
</p>
                        </div>
{/*                         
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button> */}
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default FuncionalidadesPage;