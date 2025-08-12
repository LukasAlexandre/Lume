import styled from "styled-components";

// Sidebar - Trending
export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* espaço entre os blocos */
`;

export const TrendingSection = styled.section`
  background: var(--bg-1);
  border: 1px solid var(--stroke);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow-1);
`;

export const SectionTitle = styled.h2`
  margin: 0 0 16px 0;
  font-size: 20px;
  font-weight: bold;
`;

export const TrendingList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const TrendingItem = styled.li`
  padding: 12px 0 12px 10px; border-bottom: 1px solid var(--stroke); position: relative; cursor: pointer;
  &:last-child{ border-bottom: none; }
  /* faixa esquerda ao hover (sem mexer em margin/padding do container) */
  &::before{
    content:""; position:absolute; left: -10px; top: 0; bottom: 0; width: 4px; border-radius: 2px;
    background: transparent; transition: background .2s ease;
  }
  &:hover::before{ background: var(--brand); }
  &:hover{ background: rgba(255,255,255,.02); border-radius: 8px; }
`;
export const TrendingText = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const TrendingCount = styled.div`
  color: #666;
  font-size: 14px;
`;

export const PopularSection = styled.section`
  background-color: #111;
  border-radius: 15px;
  padding: 20px;
`;

export const PopularList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const PopularItem = styled.li`
  padding: 12px 0;
  border-bottom: 1px solid #333;
  cursor: pointer;

  &:last-child { border-bottom: none; }

  /* hover sem margin negativa */
  &:hover { background-color: #1a1a1a; border-radius: 8px; padding-left: 8px; }
`;

export const PopularTitle = styled.div`
  font-size: 15px;
  margin-bottom: 4px;
  line-height: 1.4;
`;

export const PopularStats = styled.div`
  color: #666;
  font-size: 13px;
`;
