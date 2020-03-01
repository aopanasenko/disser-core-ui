import * as React from "react";
import styled from "astroturf";
import { ButtonGroup, Title } from "@@components";

export const Page3Wrap = styled.div`
`;

const Page3Content = styled.div`
    width: 60%;
    height: 200px;
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export type Page3Props = {};

export const Page3: React.FC<Page3Props> = ({}) => {
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
        <Page3Wrap>
            <Page3Content>
                <Title>Page 3</Title>
                <ButtonGroup buttonItems={buttonDataMock}/>
            </Page3Content>
        </Page3Wrap>
    );
}

