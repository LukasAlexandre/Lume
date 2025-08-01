import styled from 'styled-components'; // Importa a biblioteca styled-components para estilização

// Estilização do container principal da página Home
export const MenuContainer = styled.div`
width: 350px; // Largura fixa do menu
background-color: #000; // Cor de fundo do menu
border-right: 1px solid #333; // Borda direita para separar o menu do conteúdo principal
padding: 20px; // Espaçamento interno do menu
display : flex; // Exibe os itens do menu em uma coluna
flex-direction: column; // Direção da coluna para os itens do menu
height: 100vh; // Altura do menu igual à altura da viewport

position: relative; // Posição relativa para o menu
left:0;

@media (max-width: 1024px) {
    
    left:${props => props.isOpen ? '0' : '-350px'};
z-index: 1000;
transition: left 0.3s ease;
}
`;

export const MenuHeader = styled.div`
margin-bottom: 40px;
`;

export const MenuTittle = styled.div`
color: #00d4aa;
font-size: 28px;
font-weight: bold;
margin: 0px;
`;

export const MenuList = styled.div`
list-style: none;
padding: 0;
margin: 0;
flex: 1;
`;

export const MenuItem = styled.div`
display: flex;
align-items: center;
padding: 15px 20px;
background-color: ${props => props.active ? '#00d4aa' : 'transparent'};
color: ${props => props.active ? '#000' : '#fff'};
cursor: pointer;
border-radius: 25px;
margin-bottom: 5px;
&:hover {
    background-color: ${props => props.active ? '#00d4aa' : '#333'};
  }
`;

export const MenuIcon = styled.div`
font-size: 20px;
margin-right: 15px;
`;

export const MenuText = styled.div`
font-size: 16px;
font-weight: 500;
`;

export const ShareButton = styled.div`
background-color: #00d4aa;
color: #000;
border: none;
padding: 15px 30px;
border-radius: 25px;
font-size: 16px;
font-weight: bold;
cursor: pointer;
width: 100%;

&:hover{
background-color: #00b899;
}
`;
