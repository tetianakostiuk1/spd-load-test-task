import styled, { css } from "styled-components";

export const CarouselContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin: auto;
  padding-top: 95px;
`;

export const CarouselHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`;

export const CarouselTitle = styled.h2`
  font: 800 32px 'Syne', sans-serif;
  color: #1E1E1E;
  text-align: center;
  text-transform: uppercase;
`;

export const CarouselArrows = styled.div`
  display: flex;
  gap: 16px;
`;

export const CarouselArrow = styled.span<{ disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  
  background-color: #ECECEC;
  cursor: pointer;
  
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      background-color: transparent;
    `}
`;

export const ArrowRight = styled.span`
  width: 24px;
  height: 24px;
  background: url("/icons/Arrow-Right.svg") center/cover no-repeat;
`;

export const ArrowLeft = styled.span`
  width: 24px;
  height: 24px;
  background: url("/icons/Arrow-Left.svg") center/cover no-repeat;  
`;

export const CarouselSliderContainer = styled.div`
  width: 1281px;
  padding-bottom: 40px;
  
  overflow-x: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* Internet Explorer */

  &::-webkit-scrollbar {
    display: none; /* Webkit browsers */
  }
`;

export const CarouselSlider = styled.div`
  display: flex;
  gap: 24px;
  
  transition: transform 0.5s ease-in-out;
`;

export const CardContainer = styled.div`
  width: 411px;
`;

export const DotContainer = styled.span`
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-bottom: 60px;
`;

export const Dot = styled.span<{ active: boolean }>`
  width: 24px;
  height: 24px;
  
  background: url(${(props) =>
    props.active
        ? '/icons/dotBlack-active.svg'
        : '/icons/dotBlack.svg'}) center/cover no-repeat;  
  cursor: pointer;
`;