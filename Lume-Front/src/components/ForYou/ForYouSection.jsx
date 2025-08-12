//import react
import React from "react";
// import de todas tags que eu precisar usar do styles
import {
  ForYouContainer,
  TabHeader,
  Tab,
  PostForm,
  PostInput,
  PostButton,
  PostList,
  Post,
  PostHeader,
  Avatar,
  UserInfo,
  UserName,
  UserHandle,
  PostTime,
  PostContent,
  PostMedia,      // <-- novo: mídia do post (imagem)
  PostAction,
  ActionButton,
  ActionCount
} from "./ForYouStyle.js";

//inicializando componente 
const ForYouSection = () => {
  // declarando os meus posts temporários somente para teste
  // agora com campo image (opcional) e textos maiores p/ dar "altura"
  const posts = [
    {
      id: 1,
      avatar: "🤖",
      name: "AI Research Hub",
      handle: "@airesearch",
      time: "2h ago",
      content:
        "Exploring the latest advancements in AI and machine learning. From agentic workflows to small specialized models, we’re testing it all. What’s your current favorite paper and why?",
      image: "https://picsum.photos/id/1015/1200/675", // 16:9
      views: 42,
      shares: 128,
      likes: "1,2k",
    },
    {
      id: 2,
      avatar: "🌍",
      name: "BioTech Insights",
      handle: "@biotech",
      time: "1d ago",
      content:
        "Breaking news from around the world. New scaffold technique for tissue engineering shows promise. Details below and dataset link in the comments.",
      image: "https://picsum.photos/id/1025/1200/675",
      views: 150,
      shares: 75,
      likes: "3,5k",
    },
    {
      id: 3,
      avatar: "🎨",
      name: "Quantum Physics",
      handle: "@quantum",
      time: "3h ago",
      content:
        "Discover the beauty of art and creativity. Also, here’s a quick explainer on Bell’s inequalities for non-physicists. Thread in 4 bullets after the image.",
      image: "https://picsum.photos/id/1035/1200/675",
      views: 90,
      shares: 60,
      likes: "2,1k",
    },
    {
      id: 4,
      avatar: "📚",
      name: "Design Future",
      handle: "@airesearch",
      time: "5h ago",
      content:
        "Dive into the world of literature. What are you reading today? Share 3 insights from your current book that changed how you think about work.",
      // sem imagem aqui só pra mostrar que é opcional
      views: 200,
      shares: 50,
      likes: "4,3k",
    },
    {
      id: 5,
      avatar: "🧪",
      name: "Lab Notes",
      handle: "@labnotes",
      time: "8h ago",
      content:
        "Running ablation on attention heads. Early results suggest diminishing returns after k=8 with our dataset. Full chart in the comments, but here’s a snapshot.",
      image: "https://picsum.photos/id/1043/1200/675",
      views: 320,
      shares: 98,
      likes: "5,1k",
    },
  ];

  //returno do componente 
  return (
    //tag de container para configuração geral
    <ForYouContainer>
      {/*tag do header para separar as tabs filhas*/}
      <TabHeader>
        {/*tag de seleção foryou e seguindo*/}
        <Tab active>For You</Tab>
        <Tab>Seguindo</Tab>
      </TabHeader>

      {/*Tag para criação de uma Lume */}
      <PostForm>
        {/*tag para input de criação*/}
        <PostInput placeholder="Compartilhe um Lume de conhecimento..." />
        <PostButton>Lume</PostButton>
      </PostForm>

      {/*tag para listar Lumes que estão Lumados*/}
      <PostList>
        {/*listagem de todos os lumes, fazer um map buscando cada propriedade de um item*/}
        {posts.map((post) => (
          <Post key={post.id}>
            <PostHeader>
              <Avatar>{post.avatar}</Avatar>
              <UserInfo>
                <UserName>{post.name}</UserName>
                <UserHandle>{post.handle}</UserHandle>
              </UserInfo>
              <PostTime>{post.time}</PostTime>
            </PostHeader>

            <PostContent>{post.content}</PostContent>

            {/* bloco opcional de mídia: só renderiza se existir image */}
            {post.image && (
              <PostMedia>
                {/* loading="lazy" melhora performance e dá fluidez ao feed */}
                <img src={post.image} alt="" loading="lazy" />
              </PostMedia>
            )}

            {/*tag de separação das views, compartilhamento e curtidas*/}
            <PostAction>
              <ActionButton>
                💬 <ActionCount>{post.views}</ActionCount> Visualizações
              </ActionButton>
              <ActionButton>
                🔄 <ActionCount>{post.shares}</ActionCount> Compartilhamentos
              </ActionButton>
              <ActionButton>
                ❤️ <ActionCount>{post.likes}</ActionCount> Curtidas
              </ActionButton>
              <ActionButton title="Compartilhar">📤</ActionButton>
            </PostAction>
          </Post>
        ))}
      </PostList>
    </ForYouContainer>
  );
};
export default ForYouSection;
