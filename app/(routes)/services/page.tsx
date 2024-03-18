

"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const StudiesPage = () => {
    return (
        <>

<TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    <span className="font-bold text-secondary">
                Posibilidades
                    </span>
                    {' '}para empresas
                </h1>
                <p className="text-sm">La tecnología blockchain<i> ofrece una amplia gama de posibilidades para empresas tradicionales en diversas industrias.</i></p>


                <TimeLine />

            </ContainerPage>
            <TransitionPage />
        </>
    );
}

export default StudiesPage;