import React, { useState } from "react";
import MenuHamburguer from "../../components/MenuHamburguer.jsx";
import ForYouSection from "../../components/ForYouSection.jsx";
import TrendingLume from "../../components/TrendingLume.jsx";
import { HomeContainer, MainContent, SideBar } from "./Style.js";

//Inicializa encapsulamento do componente Home
const Home = () => {

    //Instacia a variável de estado para o menu hamburguer
    //E a função para alterar o estado do menu hamburguer
    const [IsMenuOpen, SetIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        SetIsMenuOpen(!IsMenuOpen);
    }



    //Retorna o JSX do componente Home
    return (
        //Style container para a page principal
        <HomeContainer>
            
            {/*Menu hamburguer com a prop isOpen para controlar o estado do menu
            E a prop toggleMenu para alterar o estado do menu*/}
            <MenuHamburguer isOpen={IsMenuOpen} toggleMenu={toggleMenu} />

            {/*Tag de referenciação do main de uma section, usada como tag style*/}
            <MainContent>
                {/*Não usa como estilo, pois é uma tag de referência a um arquivo*/}
                <ForYouSection />
            </MainContent>

            {/*Tag de referenciação do side da page, usada como tag style*/}    
            <SideBar>
                {/*Não usa como estilo, pois é uma tag de referência a um arquivo*/}
                <TrendingLume />
            </SideBar>
        </HomeContainer>
    );
}