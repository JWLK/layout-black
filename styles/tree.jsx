import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TreeSection = styled.div`
    display: flex;
    flex-basis: 300px;
    flex-grow: 1;
    flex-direction: row;
    border: solid 1px rgba(52, 52, 52, 0.16);
    margin: 5px;
    padding: 30px 10px;
`;

export const TreeSectionDisplay = styled.div`
    display: flex;
    flex-basis: 300px;
    flex-grow: 2;
    flex-direction: row;
    border: solid 1px rgb(52, 52, 52);
    margin: 5px;
    padding: 30px 10px;
    backgroud: #fff;
`;

export const TreeSectionOption = styled.div`
    display: flex;
    flex-basis: 300px;
    flex-grow: 1;
    flex-direction: row;
    border: solid 1px rgb(52, 52, 52);
    margin: 5px;
    padding: 30px 10px;
`;

export const InputData = styled.input`
    height: 50px;
    width: 100%;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 13px;
    border-radius: 2px;
    background-color: rgb(36, 36, 36);
    border: 1px solid rgb(52, 52, 52);
    color: rgb(255, 255, 255);
    transition: all 100ms ease 0s;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: transparent;
    &:hover,
    &:focus {
        border-color: rgb(117, 117, 117);
        outline: none !important;
    }
    box-sizing: border-box;
`;
