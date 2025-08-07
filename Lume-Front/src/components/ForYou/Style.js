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
  flex: 1;
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  outline: none;
  
  &::placeholder {
    color: #666;
  }
`;

export const PostButton = styled.button`
  background-color: #00d4aa;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #00b899;
  }
`;


export const PostList = styled.div`
display: flex;
flex-direction: column;
`;

export const Post = styled.div`
padding: 20px;
border-bottom: 1px solid #333;
`;

export const PostHeader = styled.div`
display: flex;
align-items: center;
margin-bottom: 15px;
`;

export const Avatar = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #00d4aa;
display:flex;
align-items: center;
justify-content: center;
font-size: 20px;
margin-right: 15px;
`;

export const UserInfo = styled.div`
flex:1;
`;

export const UserName = styled.div`
margin: 0;
font-size: 16px;
font-weight: bold;
`;

export const UserHandle = styled.div`
color: #666;
`;

export const PostTime = styled.div`
color: #666;
font-size: 16px;
`;

export const PostContent = styled.div`
margin: 0 0 15px 0;
font-size: 16px;
line-height: 1.5;
`;

export const PostAction = styled.div`
display: flex;
justify-content: space-between;
max-width: 400px;
`;

export const ActionButton = styled.button`
background: none;
border: none;
color: #666;
cursor: pointer;
display: flex;
align-items: center;
gap: 8px;
padding: 8px 12px;
border-radius: 20px;

&:hover{
background-color: #111;
color: #00d4aa;
}`;

export const ActionCount = styled.div`
font-size: 14px;
`;