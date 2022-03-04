import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Header = styled.header`
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    height: 48px;
    background-color: rgb(21, 21, 21);
    color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(36, 36, 36);
    border-top-color: rgb(36, 36, 36);
    border-right-color: rgb(36, 36, 36);
    border-left-color: rgb(36, 36, 36);
`;

export const VeticalCenter = css`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
`;
