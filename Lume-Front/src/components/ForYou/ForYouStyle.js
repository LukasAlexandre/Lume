//import de styles compartilhado
import styled from 'styled-components';

//estilização do componente Container ForYou
export const ForYouContainer = styled.div`
border-bottom: 1px solid #333; // borda inferior de 1px de espessura e cor  grafite escuro
`;

//estilização do header do foryou
export const TabHeader = styled.div`
display: flex; //exige os itens em linha
border-bottom: 1px solid #333; //borda inferior de 1px com cor grafite preto
position: sticky; //fixa o elemento no container pai
top: 0; //posição top zerada
background-color: #000; //background preto
z-index: 10; //coloca o elemento 10 camadas a frente da principal
`;

//estilização do tab para separção do foryou e seguindo
export const Tab = styled.button`
flex: 1; //faz a tab ocupar metade do espaço disponível
padding: 20px; // padding total de 20px
background: none; //retirar background
border: none; // retirar borda
color: ${props => props.active ? '#fff' : '#666'}; // color com condição de acordo com a propriedade ativa, se ativa branco e inativa cinza escuro
font-size: 16px; // tamnaho da fonte para 16px
font-weight: 500; // peso da fonte para 500
cursor: pointer; // deixar o mouse como pointer, mão para clicar
border-bottom: ${props => props.active ? '2px solid #fff' : 'none'}; // condição para a borda inferior caso a propriedade active for ativa para style de 2px branco ou inativa para sem cor

//passar o mouse em cima muda a cor para preto escuro
&:hover{
    background-color: #111;
}
`;

//estilização do criador de Lumes 
export const PostForm = styled.div`
display: flex; // exige o item linha por linha
align-items: center; //alinha os itens no centro
padding: 20px; // padding geral de 20px em todos os lados
border-bottom: 8px solid #111; // borda inferior com 8px de espessura preta
gap: 15px; // espaçamento de 15px entre os itens
`;

//style do input
export const PostInput = styled.input`
  flex: 1; //faz o conteúdo ocupar metade do espaço disponível
  background: none; // sem background
  border: none; // sem borda
  color: #fff; // cor branca
  font-size: 18px; // tamanho da fonte de 18px
  outline: none; // retirar borda de foco
  
  //style do placeholder, cor cinza escuro
  &::placeholder {
    color: #666;
  }
`;

//style da tag postbutton
export const PostButton = styled.button`
  background-color: #00d4aa; // cor ciano
  color: #000; // cor preto
  border: none; // sem borda
  padding: 10px 20px; // padding superior e inferior de 10px e direito e esquerdo 20px
  border-radius: 20px; // borda com curvatura de 20px
  font-weight: bold; // peso da fonte pesada
  cursor: pointer; // cursor do mouse no modo mão

  //style da passada de mouse para a cor ciano
  &:hover {
    background-color: #00b899; // cor ciano escuro
  }
`;

//estilização de posts
export const PostList = styled.div`
display: flex; // exige os itens em linha
flex-direction: column; // direção dos itens em coluna
`;

//estilização de cada post
export const Post = styled.div`
padding: 20px; // padding geral de 20px em todos os lados
border-bottom: 1px solid #333; // borda inferior de 1px de espessura e cor grafite escuro
`;

//estilização do post com hover
export const PostHeader = styled.div`
display: flex; // exige os itens em linha
align-items: center; // alinha os itens no centro
margin-bottom: 15px; // margem inferior de 15px
`;

//estilização do avatar do usuário
export const Avatar = styled.div`
width: 50px; // largura de 50px
height: 50px; // altura de 50px
border-radius: 50%; // borda arredondada de 50% para ficar circular
background-color: #00d4aa; // cor ciano
display:flex; // exige os itens em linha
align-items: center; // alinha os itens no centro
justify-content: center; // alinha os itens no centro
font-size: 20px; // tamanho da fonte de 20px
margin-right: 15px; // margem direita de 15px
`;

//estilização das informações do usuário
export const UserInfo = styled.div`
flex:1; // faz o conteúdo ocupar metade do espaço disponível
`;

//estilização do nome do usuário e handle
export const UserName = styled.div`
margin: 0; // margem zerada
font-size: 16px; // tamanho da fonte de 16px
font-weight: bold; // peso da fonte pesada
`;

//estilização do handle do usuário
export const UserHandle = styled.div`
color: #666; // cor cinza escuro
`;

//estilização do tempo do post
export const PostTime = styled.div`
color: #666; // cor cinza escuro
font-size: 16px; // tamanho da fonte de 16px
`;

//estilização do conteúdo do post
export const PostContent = styled.div`
margin: 0 0 15px 0; // margem inferior de 15px
font-size: 16px; // tamanho da fonte de 16px
line-height: 1.5; // altura da linha de 1.5 para melhor legibilidade
`;

//estilização das ações do post
export const PostAction = styled.div`
display: flex; // exige os itens em linha
justify-content: space-between; // espaçamento entre os itens
max-width: 400px; // largura máxima de 400px
`;

//estilização do botão de ação
export const ActionButton = styled.button`
background: none; // sem background
border: none; // sem borda
color: #666; // cor cinza escuro
cursor: pointer; // cursor do mouse no modo mão
display: flex; // exige os itens em linha
align-items: center; // alinha os itens no centro
gap: 8px; // espaçamento de 8px entre os itens
padding: 8px 12px; // padding superior e inferior de 8px e direito e esquerdo 12px
border-radius: 20px; // borda com curvatura de 20px

// cor do background ao passar o mouse
&:hover{  
background-color: #111; // cor de fundo preto escuro
color: #00d4aa; // cor do texto ciano
}`;

//estilização do contador de ações
export const ActionCount = styled.div`
font-size: 14px; // tamanho da fonte de 14px

`;