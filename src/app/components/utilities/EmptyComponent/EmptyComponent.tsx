import React, {FC} from 'react';
import styled from "styled-components";

const NoContent = styled.div`
  padding: 100px;
  
  font: 800 26px 'Syne', sans-serif;
  color: #1E1E1E;
  text-transform: uppercase;
  text-align: center;
`;

type Props = {
    data: any;
    text: string;
    children?: React.ReactNode;
};

export const EmptyComponent :FC<Props> = ({ data, text, children }) => {
    if (data === null || (data && !data.length)) {
        return <>{text && <NoContent>{text}</NoContent>}</>;
    }

    return <>{children}</>;
};