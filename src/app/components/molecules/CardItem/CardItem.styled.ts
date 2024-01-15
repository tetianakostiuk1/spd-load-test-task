import styled from "styled-components";

export const CardItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 24px;
  
  border: 1px solid #D3EAFF;
`;

export const CardImage = styled.div<{ imageURL: string }>`
  height: 300px;
  width: 411px;
  margin-bottom: 28px;
  
  background: url(${(props) => props.imageURL}) center/cover no-repeat;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  
  padding-inline: 32px;
`;

export const CardTitle = styled.h3`
  margin-bottom: 16px;
  font: 700 24px 'Syne', sans-serif;
  color: #1E1E1E;
  text-align: center;
  text-transform: uppercase;
`;

export const CardDescription = styled.div`
  margin-bottom: 64px;
  
  font: 300 24px 'Lato', sans-serif;
  line-height: normal;
  color: #556B84;
  text-align: center;
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const TextContent = styled.div`
    height: fit-content;
`;