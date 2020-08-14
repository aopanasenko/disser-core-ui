import * as React from "react";
import styled from "astroturf";
import { ButtonGroup, Title } from "@@components";
import { ContentWrapper, MainContent } from "@@components/styled";

export const AgricultureWrap = styled.div`
`;

const AgricultureContent = styled.div`
    width: 60%;
    height: 200px;
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export type AgricultureProps = {};

export const Agriculture: React.FC<AgricultureProps> = ({}) => {
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
        <AgricultureWrap>
            <ContentWrapper>
                <Title>Сельское хозяйство</Title>
                <ButtonGroup buttonItems={buttonDataMock}/>
                <MainContent>
                    Сельское хозяйство
                </MainContent>
            </ContentWrapper>
        </AgricultureWrap>
    );
}

