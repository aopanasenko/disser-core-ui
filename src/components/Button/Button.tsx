import * as React from 'react';
import { BUTTONS_SIZE } from '@@constants';
import styled, { css } from 'astroturf';
const cn = require('classnames');

const ButtonWrap = styled.button`
    padding: 5px;
    max-width: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.95em;
    color: #fff;
    background: #ef3123;
    opacity: 0.9;

    &:hover {
        animation: changeOpacity 0.1s linear;
        animation-fill-mode: forwards;
    }

    @keyframes changeOpacity {
        from { opacity: 0.9; }
        75% { opacity: 0.92; }
        50% { opacity: 0.94; }
        25% { opacity: 0.96; }
        to { opacity: 1; } 
    }
`;

const BUTTONS_CSS_SIZE = css`
    .S {
        padding: 5px;
        max-width: 20%;
    }

    .M {
        padding: 10px;
        width: 20%;
    }
`;

type ButtonProps = {
    children?: any;
    className?: string;
    size: BUTTONS_SIZE;
};

export const Button: React.FC<ButtonProps> = ({
    children, className, size
}) => (
    <ButtonWrap className={cn(className, BUTTONS_CSS_SIZE[size])}>
        {children}
    </ButtonWrap>
);
