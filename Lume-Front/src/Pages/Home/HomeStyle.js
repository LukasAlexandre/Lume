import styled from "styled-components";

export const HomeContainer = styled.div`
  /* === GRID MESTRE: menu | feed | aside === */
  --gutter: 24px;      /* Espaço entre colunas */
  --max: 1280px;       /* Largura máxima do conteúdo */

  display: grid;       /* Grid para organizar os elementos */

 /* no HomeContainer */
grid-template-columns: minmax(220px, 2fr) minmax(0, 6fr) minmax(260px, 2fr);
gap: 28px;              /* um pouco mais de respiro */
max-width: 1320px;      /* espaço extra pro 6fr respirar */
      /* Limita e centraliza o layout */
  margin-inline: auto;         /* Centraliza horizontalmente */
  padding: 24px var(--gutter); /* Respiro externo */

  min-height: 100vh;           /* Altura mínima da página personalizada de acordo com a altura da viewport (Navegador) */
  background-color: #000;      /* Cor Hexadecimal Preto */
  color: #fff;                 /* Cor Hexadecimal Branco */
`;

/* Wrapper do menu na coluna 1 do grid */
export const NavContainer = styled.aside`
  /* Coluna do menu (esquerda) */
  position: sticky;  /* Fica preso ao topo ao rolar (desktop) */
  top: 16px;         /* Distância do topo */
  align-self: start; /* Ancora no início da linha do grid */
`;

/* Conteúdo principal do Feed */
export const MainContent = styled.main`
  flex: 1;                         /* O main ocupa o espaço restante (mantido pelo seu comentário) */
  /* max-width: 600px;  REMOVIDO: limitava demais o centro */
  min-width: 0;                    /* Evita overflow de textos/links longos nas grids */
  border-left: 1px solid #333;     /* Borda esquerda para separar o conteúdo principal da sidebar */
  border-right: 1px solid #333;    /* Borda direita para separar o conteúdo principal da sidebar */

  display: flex;                   /* Coluna vertical para os posts */
  flex-direction: column;          /* Empilha os posts */
  gap: 16px;                       /* Espaçamento vertical entre os itens (use gap, não margin solta) */
`;

/* Coluna direita (trends/widgets) */
export const SideBar = styled.aside`
  /* width: var(--aside);  REMOVIDO: o grid controla a largura (3fr) */
  padding: 20px;        /* Espaçamento interno da sidebar */
  position: sticky;     /* Posição "presa" ao topo ao rolar */
  top: 16px;            /* Distância do topo */
  align-self: start;    /* Faz o sticky ancorar no início do grid */
`;

/* Botão do menu (mobile) */
export const MenuButton = styled.button`
  position: fixed;     /* Posição fixa para o botão */
  top: 80px;           /* Distância do topo da viewport */
  left: 20px;          /* Distância da esquerda da viewport */
  z-index: 1100;       /* Z-index para garantir que o botão fique acima de outros elementos */
  background: #00d4aa; /* Cor de fundo do botão */
  color: #000;         /* Cor do texto do botão */
  border: none;        /* Sem borda */
  border-radius: 8px;  /* Bordas arredondadas */
  padding: 10px 15px;  /* Espaçamento interno do botão */
  cursor: pointer;     /* Cursor de ponteiro ao passar o mouse */
  font-weight: bold;   /* Texto em negrito */

  @media (min-width: 1025px) {
    display: none;     /* Oculta o botão em telas maiores */
  }
`;

