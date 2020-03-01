import * as React from 'react';
import styled from "astroturf";
import { ButtonGroup, Title } from "@@components";

const MainPageWrap = styled.div`
`;

const MainPageContent = styled.div`
    width: 60%;
    height: 200px;
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export type MainPageProps = {};

export const MainPage: React.FC<MainPageProps> = ({}) => {
    const buttonDataMock = [
        {
            itemLink: '/',
            itemText: 'Main page'
        },
        {
            itemLink: '/page1',
            itemText: 'Page 1'
        },
        {
            itemLink: '/page2',
            itemText: 'Page 2'
        },
        {
            itemLink: '/page3',
            itemText: 'Page 3'
        }
    ];

    return (
        <MainPageWrap>
            <MainPageContent>
                <Title>Main page</Title>
                <ButtonGroup buttonItems={buttonDataMock}/>
            </MainPageContent>
        </MainPageWrap>
    )
}

