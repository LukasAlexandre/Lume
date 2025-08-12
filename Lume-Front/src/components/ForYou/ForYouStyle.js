//import de styles compartilhado
import styled from "styled-components";

//estilização do componente Container ForYou
export const ForYouContainer = styled.div`
  border-bottom: 1px solid #333; /* borda inferior de 1px de espessura e cor  grafite escuro */
`;

/* Cabeçalho das tabs: trilho + posição relativa p/ indicador */
export const TabHeader = styled.div`
  position: sticky; /* fixa no topo do feed */
  top: 0;
  z-index: 10;
  background: var(--bg-0);
  border-bottom: 1px solid var(--stroke);
  display: grid;
  grid-template-columns: 1fr 1fr; /* For You | Seguindo */
  align-items: end;
`;

/* Botão da tab com underline animado */
export const Tab = styled.button`
  appearance: none; border:0; background:none; cursor:pointer;
  color: ${p => (p.active ? "var(--text-1)" : "var(--text-2)")};
  font-weight: 600; padding: 14px var(--space-5); position: relative;

  /* trilho pessoal da tab */
  &::after{
    content:""; position:absolute; left: var(--space-5); right: var(--space-5);
    bottom: -1px; height: 2px;
    background: ${p => (p.active ? "var(--text-1)" : "transparent")};
    transform: scaleX(${p => (p.active ? 1 : 0)});
    transform-origin: left;
    transition: transform .25s ease, background .25s ease;
  }

  &:hover{ color: var(--text-1); }
`;

//estilização do criador de Lumes 
export const PostForm = styled.div`
  display: flex; /* exige o item linha por linha */
  align-items: center; /* alinha os itens no centro */
  padding: 20px; /* padding geral de 20px em todos os lados */
  border-bottom: 8px solid #111; /* separador grosso */
  gap: 15px; /* espaçamento de 15px entre os itens */
`;

//style do input
export const PostInput = styled.input`
  flex: 1; /* ocupa o espaço restante */
  background: none; /* sem background */
  border: none; /* sem borda */
  color: #fff; /* cor branca */
  font-size: 18px; /* tamanho da fonte de 18px */
  outline: none; /* retirar borda de foco */

  /* placeholder em cinza escuro */
  &::placeholder { color: #666; }
`;

//style da tag postbutton
export const PostButton = styled.button`
  background-color: #00d4aa; /* cor ciano */
  color: #000; /* cor preta */
  border: none; /* sem borda */
  padding: 10px 20px; /* padding interno */
  border-radius: 20px; /* borda arredondada */
  font-weight: bold; /* negrito */
  cursor: pointer; /* cursor pointer */

  /* hover para ciano escuro */
  &:hover { background-color: #00b899; }
`;

//estilização de posts
export const PostList = styled.div`
  display: flex; /* layout em coluna */
  flex-direction: column; /* empilha posts */
  gap: 16px; /* espaço entre cards para dar "altura" visível ao feed */
`;

/* Cada post com cara de card e respiro maior */
export const Post = styled.article`
  background: var(--bg-1);                 /* card mais claro */
  border: 1px solid var(--stroke);         /* borda sutil */
  border-radius: var(--radius);            /* raio padrão */
  padding: 18px 20px;                      /* respiro interno */
`;

/* Header: avatar | info | tempo (sempre alinhado) */
export const PostHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr auto;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-3);
`;

//estilização do avatar do usuário
export const Avatar = styled.div`
  width: 50px; /* largura */
  height: 50px; /* altura */
  border-radius: 50%; /* círculo */
  background-color: #00d4aa; /* ciano */
  display:flex; /* centraliza conteúdo */
  align-items: center; /* centro vertical */
  justify-content: center; /* centro horizontal */
  font-size: 20px; /* tamanho da fonte */
`;

/* Nome/handle com truncamento elegante */
export const UserInfo = styled.div`
  min-width: 0; display: flex; gap: 8px; align-items: baseline;
`;

export const UserName = styled.div`
  font-weight: 700; font-size: 16px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`;
export const UserHandle = styled.div`
  color: var(--text-2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`;
export const PostTime = styled.div`
  color: var(--text-2); font-size: 13px;
`;

/* Texto do post com ritmo melhor e mais espaço inferior */
export const PostContent = styled.div`
  margin: 0 0 14px 0; /* espaço antes da imagem/ações */
  font-size: 15.5px; line-height: 1.6; color: var(--text-1);
`;

/* Mídia do post (imagem 16:9), com recorte bonito */
export const PostMedia = styled.figure`
  margin: 0 0 12px 0;               /* separação do conteúdo */
  border-radius: 12px;              /* cantos arredondados */
  overflow: hidden;                 /* recorta a imagem */
  border: 1px solid var(--stroke);  /* borda sutil */
  background: #0f1012;              /* fallback enquanto carrega */

  /* A imagem ocupa largura total e respeita proporção 16:9 */
  img{
    display:block; width:100%; height:auto;
    aspect-ratio: 16 / 9;          /* dá “altura” consistente */
    object-fit: cover;              /* preenche sem distorcer */
  }
`;

/* Ações: grid em fluxo de colunas, quebra bonito no mobile */
export const PostAction = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 8px 16px;
  justify-content: start;
`;
export const ActionButton = styled.button`
  background: none; border: 0; padding: 8px 12px; border-radius: 999px;
  color: var(--text-2); display: inline-flex; align-items: center; gap: 8px; cursor: pointer;
  transition: background .2s ease, color .2s ease;
  &:hover{ background: #101214; color: var(--brand); }
`;

//estilização do contador de ações
export const ActionCount = styled.div`
  font-size: 14px; /* tamanho da fonte */
`;
