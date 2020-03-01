import * as React from 'react';
import styled, {css} from 'astroturf';

export const MainPageWrap = styled.div`
`;

export type MainPageProps = {};

export const MainPage: React.FC<MainPageProps> = ({}) => (
    <MainPageWrap>
        <h1>Hello world</h1>
    </MainPageWrap>
);
