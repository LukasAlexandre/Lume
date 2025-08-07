import styled from 'styled-components';
// Importa a biblioteca styled-components para estilização

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
left:0; // Posição inicial do menu

// Estilização do menu quando está aberto ou fechado(ATÉ 1024px)
@media (max-width: 1024px) {    
left:${props => props.isOpen ? '0' : '-350px'}; // Se o menu estiver aberto, a posição é 0, caso contrário, é -350px
z-index: 1000; // Z-index para garantir que o menu fique acima de outros elementos
transition: left 0.3s ease; // Transição suave para a mudança de posição do menu
}
`;

// Estilização do cabeçalho do menu
export const MenuHeader = styled.div`
margin-bottom: 40px; // Margem inferior para separar o cabeçalho do restante do menu
`;

// Estilização do título do menu
export const MenuTittle = styled.div`
color: #00d4aa; // Cor do título do menu
font-size: 28px; // Tamanho da fonte do título
font-weight: bold; // Peso da fonte do título
margin: 0px; // Margem do título
`;

// Estilização da lista de itens do menu
export const MenuList = styled.div`
list-style: none; // Remove os marcadores da lista
padding: 0; // Remove o preenchimento da lista
margin: 0; // Remove a margem da lista
flex: 1; // Permite que a lista ocupe o espaço restante do menu
`;

// Estilização de cada item do menu
export const MenuItem = styled.div`
display: flex; // Exibe os itens do menu em linha
align-items: center; // Alinha os itens do menu verticalmente no centro
padding: 15px 20px; // Espaçamento interno dos itens do menu
// Define o fundo do item do menu com base na prop active
background-color: ${props => props.active ? '#00d4aa' : 'transparent'}; 
color: ${props => props.active ? '#000' : '#fff'}; // Cor do texto do item do menu
cursor: pointer; // Cursor de ponteiro ao passar o mouse
border-radius: 25px; // Bordas arredondadas para os itens do menu
margin-bottom: 5px; // Margem inferior para separar os itens do menu

// Efeito de hover para os itens do menu
&:hover {
    // Muda a cor de fundo do item do menu ao passar o mouse
    background-color: ${props => props.active ? '#00d4aa' : '#333'};
  }
`;

// Estilização do ícone do item do menu
export const MenuIcon = styled.div`
font-size: 20px; // Tamanho da fonte do ícone do item do menu
margin-right: 15px; // Margem direita para separar o ícone do texto
`;

// Estilização do texto do item do menu
export const MenuText = styled.div`
font-size: 16px; // Tamanho da fonte do texto do item do menu
font-weight: 500; // Peso da fonte do texto do item do menu
`;

// Estilização do botão de compartilhamento
export const ShareButton = styled.div`
background-color: #00d4aa; // Cor de fundo do botão de compartilhamento
color: #000; // Cor do texto do botão de compartilhamento
border: none; // Sem borda
padding: 15px 30px; // Espaçamento interno do botão de compartilhamento
border-radius: 25px; // Bordas arredondadas para o botão de compartilhamento
font-size: 16px; // Tamanho da fonte do botão de compartilhamento
font-weight: bold; // Peso da fonte do botão de compartilhamento
cursor: pointer; // Cursor de ponteiro ao passar o mouse
width: 100%; // Largura do botão de compartilhamento ocupa 100% do espaço disponível

// Efeito de hover para o botão de compartilhamento
&:hover{
background-color: #00b899; // Muda a cor de fundo do botão de compartilhamento ao passar o mouse
}
`;
