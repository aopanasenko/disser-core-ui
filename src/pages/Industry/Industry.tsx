import * as React from "react";
import styled from "astroturf";
import { ButtonGroup, Title } from "@@components";
import { ContentWrapper, MainContent } from "@@components/styled";

export const IndustryWrap = styled.div`
`;

export type IndustryProps = {};

export const Industry: React.FC<IndustryProps> = ({}) => {
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
        <IndustryWrap>
            <ContentWrapper>
                <Title>Производство</Title>
                <ButtonGroup buttonItems={buttonDataMock}/>
                <MainContent>
                    Производство
                </MainContent>
            </ContentWrapper>
        </IndustryWrap>
    );
}

