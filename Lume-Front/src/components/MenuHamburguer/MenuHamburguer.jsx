import React from "react"; // Importa o React
import {  // Importa os componentes estilizados
    MenuContainer,
     MenuHeader, 
     MenuTittle, 
     MenuList, 
     MenuItem, 
     MenuIcon, 
     MenuText, 
     ShareButton 
} from "./Style";

// Componente MenuHamburguer
// Recebe as props isOpen e toggleMenu para controlar o estado do menu
const MenuHamburguer = ({ isOpen, toggleMenu }) => {
    // Lista de itens do menu 
    // Cada item tem um id, ícone, texto e se está ativo ou não
    const menuItens = [
        { id: 1, icon: '🏠', text: 'For You', active: true },
        { id: 2, icon: '🔥', text: 'Trending' },
        { id: 3, icon: '🎯', text: 'IA & Tech' },
        { id: 4, icon: '🔬', text: 'Ciência' },
        { id: 5, icon: '💡', text: 'Inovação' },
        { id: 6, icon: '💾', text: 'Salvos' },
        { id: 7, icon: '👤', text: 'Perfil' },
        { id: 8, icon: '⚙️', text: 'Configurações' }
    ]


return (
    // Componente estilizado que representa o menu hamburguer
        // O estilo do menu depende da prop isOpen, que controla se o menu está aberto ou fechado
       <MenuContainer isOpen={isOpen}>
        {/* Cabeçalho do menu */}   
        <MenuHeader>
            {/* Título do menu estilizado */}
            <MenuTittle>LUME</MenuTittle>
        </MenuHeader>
        {/* Lista de itens do menu */}
        <MenuList>
            {/* Mapeia os itens do menu e cria um MenuItem para cada um */}
            {menuItens.map(item => (
                <MenuItem key={item.id} active={item.active}>
                    <MenuIcon>{item.icon}</MenuIcon>
                    <MenuText>{item.text}</MenuText>
                </MenuItem>
            ))}
            {/* Botão de compartilhamento estilizado */}
            <ShareButton>Compartilhar</ShareButton>
        </MenuList>
       </MenuContainer>
)}
export default MenuHamburguer;