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
    PostAction,
    ActionButton,
    ActionCount
} from "./ForYouStyle.js"

//inicializando componente 
const ForYouSection = () => {
    // declarando os meus posts temporários somente para teste
    const posts = [
        {
            id: 1,
            avatar: '🤖',
            name: 'AI Research Hub',
            handle: '@airesearch',
            time: '2h ago',
            content: 'Exploring the latest advancements in AI and machine learning. Join the discussion!',
            views: 42,
            shares: 128,
            likes: '1,2k'
        },
        {
            id: 2,
            avatar: '🌍',
            name: 'BioTech Insights',
            handle: '@biotech',
            time: '1d ago',
            content: 'Breaking news from around the world. Stay informed with the latest updates.',
            views: 150,
            shares: 75,
            likes: '3,5k'
        },
        {
            id: 3,
            avatar: '🎨',
            name: 'Quantum Physics',
            handle: '@quantum',
            time: '3h ago',
            content: 'Discover the beauty of art and creativity. Share your thoughts and artworks!',
            views: 90,
            shares: 60,
            likes: '2,1k'
        },
        {
            id: 4,
            avatar: '📚',
            name: 'Design Future',
            handle: '@airesearch',
            time: '5h ago',
            content: 'Dive into the world of literature. What are you reading today?',
            views: 200,
            shares: 50,
            likes: '4,3k'
        }];

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
                {posts.map(post => (
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
                            <ActionButton>📤</ActionButton>
                        </PostAction>
                    </Post>
                ))}
            </PostList>
        </ForYouContainer>
    );
};
export default ForYouSection;