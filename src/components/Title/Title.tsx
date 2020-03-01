import * as React from "react";
import styled from "astroturf";

export const TitleWrap = styled.h1`
    margin-bottom: 50px;
    font-size: 25px;
`;

export type TitleProps = {
    children: string;
};

export const Title: React.FC<TitleProps> = ({ children }) => (
    <TitleWrap>
        {children}
    </TitleWrap>
);
