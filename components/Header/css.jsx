import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Header = styled.header`
    box-sizing: border-box;
    height: 48px;
    background-color: rgb(21, 21, 21);
    color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(36, 36, 36);
    border-top-color: rgb(36, 36, 36);
    border-right-color: rgb(36, 36, 36);
    border-left-color: rgb(36, 36, 36);
    padding-left: 16px;
    padding-right: 16px;
`;

export const MainLogoWrapper = styled.div`
    display: block;
    margin-right: 16px;
    ${(props) => props.theme.mq.mobile} {
        display: none;
    }
`;

export const LeftMenuButtonWrapper = styled.div`
    display: none;
    ${(props) => props.theme.mq.mobile} {
        display: block;
    }
`;

export const SearchBoxWrapper = styled.div`
    display: block;
    max-width: 480px;
    position: relative;
    -webkit-box-flex: 1;
    flex-grow: 1;
    flex-direction: row;

    ${(props) => props.theme.mq.mobile} {
        display: none;
    }
`;

export const SearchBoxInput = css`
    height: 26px;
    width: 100%;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 13px;
    border-radius: 2px;
    background-color: rgb(36, 36, 36);
    border: 1px solid rgb(52, 52, 52);
    color: rgb(255, 255, 255);
    transition: all 100ms ease 0s;
    appearance: none;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: transparent;
    &:hover,
    &:focus {
        border-color: rgb(117, 117, 117);
        outline: none !important;
    }
    box-sizing: border-box;
`;

export const OptionBoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
`;
