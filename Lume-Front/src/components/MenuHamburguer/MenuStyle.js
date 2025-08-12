import styled from 'styled-components';

/* Importa a biblioteca styled-components para estilização */

/* Estilização do container principal do menu */
export const MenuContainer = styled.aside`
  /* === DESKTOP (≥1025px): ocupa a coluna da esquerda do grid === */
  width: 100%;                    /* Largura é a do track do grid (sem width fixa) */
  background-color: #000;         /* Cor de fundo do menu */
  border-right: 1px solid #333;   /* Borda direita para separar do conteúdo principal */
  padding: 20px;                  /* Espaçamento interno do menu */
  display: flex;                  /* Exibe os itens do menu em uma coluna */
  flex-direction: column;         /* Direção da coluna para os itens do menu */
  gap: 8px;                       /* Espaçamento vertical interno */
  position: sticky;               /* Fica preso ao topo ao rolar */
  top: 16px;                      /* Distância do topo da viewport */
  align-self: start;              /* Ancora no início da linha do grid */
  min-width: 0;                   /* Evita empurrar o centro */

  /* === MOBILE (≤1024px): vira um drawer sobreposto (overlay) === */
  @media (max-width: 1024px) {
    position: fixed;                              /* Sobrepõe o conteúdo */
    top: 0;                                       /* Encosta no topo */
    left: 0;                                      /* Encosta à esquerda */
    height: 100dvh;                               /* Altura total da viewport (corrige barras móveis) */
    width: min(320px, 85vw);                      /* Largura do drawer (fluida) */
    transform: translateX(${props => props.isOpen ? '0' : '-100%'}); /* Abre/fecha pelo estado isOpen */
    transition: transform 0.3s ease;              /* Transição suave */
    z-index: 1000;                                /* Fica acima do conteúdo */
  }
`;

/* Estilização do cabeçalho do menu */
export const MenuHeader = styled.div`
  margin-bottom: 40px; /* Margem inferior para separar o cabeçalho do restante do menu */
`;

/* Estilização do título do menu */
export const MenuTittle = styled.div`
  color: #00d4aa;      /* Cor do título do menu */
  font-size: 28px;     /* Tamanho da fonte do título */
  font-weight: bold;   /* Peso da fonte do título */
  margin: 0px;         /* Margem do título */
`;

/* Estilização da lista de itens do menu */
export const MenuList = styled.div`
  list-style: none;    /* Remove os marcadores da lista */
  padding: 0;          /* Remove o preenchimento da lista */
  margin: 0;           /* Remove a margem da lista */
  flex: 1;             /* Permite que a lista ocupe o espaço restante do menu */
  display: flex;       /* Lista em coluna flexível */
  flex-direction: column;
  gap: 6px;            /* Espaçamento entre itens */
`;

export const MenuItem = styled.div`
  display:flex; align-items:center; gap:12px;
  padding: 12px 14px; border-radius: 999px; cursor:pointer;
  color: ${p=>p.active ? "#000" : "var(--text-1)"};
  background: ${p=>p.active ? "var(--brand)" : "transparent"};
  transition: background .18s ease, color .18s ease, transform .08s ease;

  &:hover{ background: ${p=>p.active ? "var(--brand)" : "#141618"}; }
  &:active{ transform: translateY(1px); } /* micro interação */
`;


/* Estilização do ícone do item do menu */
export const MenuIcon = styled.div`
  font-size: 20px;    /* Tamanho da fonte do ícone */
  margin-right: 12px; /* Margem direita para separar o ícone do texto */
`;

/* Estilização do texto do item do menu */
export const MenuText = styled.div`
  font-size: 16px;    /* Tamanho da fonte do texto do item do menu */
  font-weight: 500;   /* Peso da fonte do texto */
`;

export const ShareButton = styled.button`
  background: var(--brand); color:#000; border:0; width:100%;
  padding: 14px 18px; border-radius: 999px; font-weight: 800; letter-spacing:.2px;
  transition: filter .15s ease, transform .08s ease;
  &:hover{ filter: brightness(.95); }
  &:active{ transform: translateY(1px); }
`;
