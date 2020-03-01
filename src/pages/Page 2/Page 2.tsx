import * as React from "react";
import styled from "astroturf";
import { ButtonGroup, Title } from "@@components";

export const Page2Wrap = styled.div`
`;

const Page2Content = styled.div`
    width: 60%;
    height: 200px;
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export type Page2Props = {};

export const Page2: React.FC<Page2Props> = ({}) => {
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
        <Page2Wrap>
            <Page2Content>
                <Title>Page 2</Title>
                <ButtonGroup buttonItems={buttonDataMock}/>
            </Page2Content>
        </Page2Wrap>
    );
}

