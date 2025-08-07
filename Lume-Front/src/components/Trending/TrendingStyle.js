
import styled from "styled-components";
// Sidebar - Trending
export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TrendingSection = styled.section`
  background-color: #111;
  border-radius: 15px;
  padding: 20px;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 20px 0;
  font-size: 20px;
  font-weight: bold;
`;

export const TrendingList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TrendingItem = styled.li`
  padding: 15px 0;
  border-bottom: 1px solid #333;
  cursor: pointer;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #222;
    margin: 0 -20px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const TrendingText = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
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
  padding: 15px 0;
  border-bottom: 1px solid #333;
  cursor: pointer;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #222;
    margin: 0 -20px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const PopularTitle = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
  line-height: 1.4;
`;

export const PopularStats = styled.div`
  color: #666;
  font-size: 13px;
`;