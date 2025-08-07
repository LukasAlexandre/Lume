import styled from "styled-components";

//Estilização do container principal da página Home
export const HomeContainer = styled.div`
    display: flex; // Flexbox para organizar os elementos
    min-height: 100vh; // Altura mínima da página personalizada de acordo com a altura da viewport(Navegador)
    background-color: #000; // Cor Hexadecimal Preto
    color: #fff; // Cor Hexadecimal Branco
    margin-top: 10px; // Margem superior para evitar sobreposição com o header
`;

export const MainContent = styled.main`
  flex: 1; // O main ocupa o espaço restante
  max-width: 600px; // Largura máxima do main
  border-left: 1px solid #333; // Borda esquerda para separar o conteúdo principal da sidebar
  border-right: 1px solid #333; // Borda direita para separar o conteúdo principal da sidebar
`;

export const SideBar = styled.aside`
  width: 350px; // Largura fixa da sidebar
  padding: 20px; // Espaçamento interno da sidebar
`;

export const MenuButton = styled.button`
  position: fixed; // Posição fixa para o botão
  top: 80px; // Distância do topo da viewport
  left: 20px; // Distância da esquerda da viewport
  z-index: 1100; // Z-index para garantir que o botão fique acima de outros elementos
  background: #00d4aa; // Cor de fundo do botão
  color: #000; // Cor do texto do botão
  border: none; // Sem borda
  border-radius: 8px; // Bordas arredondadas
  padding: 10px 15px; // Espaçamento interno do botão
  cursor: pointer; // Cursor de ponteiro ao passar o mouse
  font-weight: bold; // Texto em negrito

  @media (min-width: 1025px) {
    display: none; // Oculta o botão em telas maiores
  }
`;

