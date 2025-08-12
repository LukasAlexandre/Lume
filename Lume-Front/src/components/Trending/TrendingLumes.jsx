//importing React and styled components for the TrendingLumes component
import React from "react";
import {
    TrendingContainer,
    TrendingSection,
    SectionTitle,
    TrendingList,
    TrendingItem,
    TrendingText,
    TrendingCount,
    PopularSection,
    PopularList,
    PopularItem,
    PopularTitle,
    PopularStats
} from "./TrendingStyle.js";

//inicializando o componente TrendingLumes
const TrendingLumes = () => {
    //dados temporários para os tópicos em alta e populares
    const trendingTopics = [
        { id: 1, topic: 'Inteligência Artificial', count: '15.2K Lumes' },
        { id: 2, topic: 'Computação Quântica', count: '8.7K Lumes' },
        { id: 3, topic: 'Biotecnologia', count: '6.3K Lumes' },
        { id: 4, topic: 'Realidade Virtual', count: '4.1K Lumes' },
        { id: 5, topic: 'Sustentabilidade', count: '3.8K Lumes' }
    ];

    //dados temporários para os tópicos populares
    const popularTopics = [
        { id: 1, title: '"O futuro é agora" - Elon Musk sobre IA', stats: '12.5K curtidas' },
        { id: 2, title: 'Descoberta revolucionária em energia limpa', stats: '9.2K curtidas' },
        { id: 3, title: 'Nova vacina usando nanotecnologia', stats: '7.8K curtidas' }
    ];

    //retornando o componente TrendingLumes
    return (
        //tag de container para configuração geral
        <TrendingContainer>
            {/* Seção de tópicos em alta */}
            <TrendingSection>
                {/* Título da seção de tópicos em alta */}
                <SectionTitle>Lumes em Alta</SectionTitle>
                {/* Lista de tópicos em alta */}
                <TrendingList>
                    {/* Mapeando os tópicos em alta e criando um item para cada um */}
                    {trendingTopics.map(item => (
                        <TrendingItem key={item.id}>
                            <TrendingText>{item.topic}</TrendingText>
                            <TrendingCount>{item.count}</TrendingCount>
                        </TrendingItem>
                    ))}
                </TrendingList>
            </TrendingSection>

            {/* Seção de tópicos populares */}
            <PopularSection>
                <PopularTitle>Populares</PopularTitle>
                <PopularList>
                    {/* Mapeando os tópicos populares e criando um item para cada um */}
                    {popularTopics.map(post => (
                        <PopularItem key={post.id}>
                            <PopularTitle>{post.title}</PopularTitle>
                            <PopularStats>{post.stats}</PopularStats>
                        </PopularItem>
                    ))}
                </PopularList>
            </PopularSection>
        </TrendingContainer>
    );
};
export default TrendingLumes;
