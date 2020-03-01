import * as React from "react";
import styled, { css } from "astroturf";
import { Button } from '@@components';
import { BUTTONS_SIZE } from '@@constants';
import { Link } from "react-router-dom";

export const ButtonGroupWrap = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 70px;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 20px;
`;

const styles = css`
    .linkColor {
         color: #fff;
         text-decoration: none;
         
         &:hover { color: #fff; }
         &:active { color: #fff; }
         &:visited { color: #fff; }
    }
`;

export type ButtonGroupProps = {
    buttonItems: any;
};

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttonItems }) => (
    <ButtonGroupWrap>
        {buttonItems.map((item: any, index: number) => (
            <Button key={index} size={BUTTONS_SIZE.M}>
                <Link className={styles.linkColor} to={`${item.itemLink}`}>{item.itemText}</Link>
            </Button>
        ))}
    </ButtonGroupWrap>
);
