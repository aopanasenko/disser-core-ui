import * as React from "react";
import styled from "astroturf";
import { ButtonGroup, Title } from "@@components";

export const Page1Wrap = styled.div`
`;

const Page1Content = styled.div`
    width: 60%;
    height: 200px;
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export type Page1Props = {};

export const Page1: React.FC<Page1Props> = ({}) => {
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
        <Page1Wrap>
            <Page1Content>
                <Title>Page 1</Title>
                <ButtonGroup buttonItems={buttonDataMock}/>
            </Page1Content>
        </Page1Wrap>
    );
}

