import * as React from "react";
import styled from "astroturf";
import { ButtonGroup, Title } from "@@components";
import { ContentWrapper, MainContent } from "@@components/styled";

export const HistoryWrap = styled.div`
`;

export type HistoryProps = {};

export const History: React.FC<HistoryProps> = ({}) => {
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
        <HistoryWrap>
            <ContentWrapper>
                <Title>History</Title>
                <ButtonGroup buttonItems={buttonDataMock}/>
                <MainContent>
                        History
                </MainContent>
            </ContentWrapper>
        </HistoryWrap>
    );
}
