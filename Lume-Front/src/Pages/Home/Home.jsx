import React, { useState } from "react";
import MenuHamburguer from "../../components/MenuHamburguer/MenuHamburguer.jsx";
import ForYouSection from "../../components/ForYou/ForYouSection.jsx";
import TrendingLumes from "../../components/Trending/TrendingLumes.jsx";
import { HomeContainer, MainContent, SideBar, MenuButton} from "./HomeStyle.js";

//Inicializa encapsulamento do componente Home
const Home = () => {

    //Instacia a variável de estado para o menu hamburguer
    //E a função para alterar o estado do menu hamburguer
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }



    //Retorna o JSX do componente Home
    return (
        //Style container para a page principal
        <HomeContainer>
            {/*Botão hamburguer*/}
            <MenuButton>☰ Menu</MenuButton>
            {/*Menu hamburguer com a prop isOpen para controlar o estado do menu
            E a prop toggleMenu para alterar o estado do menu*/}
            <MenuHamburguer isOpen={isMenuOpen} toggleMenu={toggleMenu} />

            {/*Tag de referenciação do main de uma section, usada como tag style*/}
            <MainContent>
                {/*Não usa como estilo, pois é uma tag de referência a um arquivo*/}
                <ForYouSection />
            </MainContent>

            {/*Tag de referenciação do side da page, usada como tag style*/}    
            <SideBar>
                {/*Não usa como estilo, pois é uma tag de referência a um arquivo*/}
                <TrendingLumes />
            </SideBar>
        </HomeContainer>
    );
}
export default Home;