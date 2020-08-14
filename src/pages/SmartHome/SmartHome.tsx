import * as React from "react";
import styled from "astroturf";
import { ButtonGroup, Title } from "@@components";
import { ContentWrapper, MainContent } from "@@components/styled";

export const SmartHomeWrap = styled.div`
`;

export type SmartHomeProps = {};

export const SmartHome: React.FC<SmartHomeProps> = ({}) => {
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
        <SmartHomeWrap>
            <ContentWrapper>
                <Title>Умный дом</Title>
                <ButtonGroup buttonItems={buttonDataMock}/>
                <MainContent>
                    Умный дом
                </MainContent>
            </ContentWrapper>
        </SmartHomeWrap>
    );
}

