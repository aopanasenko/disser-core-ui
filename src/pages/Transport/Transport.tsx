import * as React from 'react';
import styled from "astroturf";
import { ButtonGroup, Title } from "@@components";
import { ContentWrapper, MainContent } from "@@components/styled";
import { HistoryWrap } from "@@pages";

const TransportWrap = styled.div`
`;

export type TransportProps = {};

export const Transport: React.FC<TransportProps> = ({}) => {
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
        <TransportWrap>
            <ContentWrapper>
                <Title>Транспорт</Title>
                <ButtonGroup buttonItems={buttonDataMock}/>
                <MainContent>
                    Транспорт
                </MainContent>
            </ContentWrapper>
        </TransportWrap>
);
}
