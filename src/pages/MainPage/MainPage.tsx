import * as React from 'react';
import styled from "astroturf";
import { ButtonGroup, Title } from "@@components";
import { ContentWrapper, MainContent } from "@@components/styled";

const MainPageWrap = styled.div`
`;

export type MainPageProps = {};

export const MainPage: React.FC<MainPageProps> = ({}) => {
    const buttonDataMock = [
        {
            itemLink: '/',
            itemText: 'Главная страница'
        },
        {
            itemLink: '/smarthome',
            itemText: 'Умный дом'
        },
        {
            itemLink: '/agriculture',
            itemText: 'Сельское хозяйство'
        },
        {
            itemLink: '/industry',
            itemText: 'Промышленность'
        },
        {
            itemLink: '/transport',
            itemText: 'Транспорт'
        },
        {
            itemLink: '/history',
            itemText: 'История'
        }
    ];

    return (
        <MainPageWrap>
            <ContentWrapper>
                <Title>Учебно-исследовательский стед "Умный город"</Title>
                <ButtonGroup buttonItems={buttonDataMock}/>
                <MainContent>
                    Учебно-исследовательский стед "Умный город"
                </MainContent>
            </ContentWrapper>
        </MainPageWrap>
    )
}

