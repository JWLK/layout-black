import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const VeticalCenter = css`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
`;

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
    padding-left: 16px;
    padding-right: 16px;
`;

export const SearchBoxWrapper = css`
    display: block;
    max-width: 480px;
    position: relative;
    -webkit-box-flex: 1;
    flex-grow: 1;
    flex-direction: row;
`;

export const SearchBoxInput = css`
    height: 26px;
    width: 100%;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 13px;
    font-family: Inter, sans-serif;
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

export const OptionBoxWrapper = css`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
`;

export const OptionButtonText = css`
    box-sizing: border-box;
    padding: 0px 8px;
    background-color: transparent;
    color: rgb(153, 153, 153);
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex: 0 0 auto;
    cursor: pointer;
    font-family: Inter, sans-serif;
    height: 26px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    border: none;
    border-radius: 2px;
    transition: all 100ms ease-in 0s;
    text-decoration: none;
    &:hover,
    &:focus {
        color: rgb(230, 230, 230);
    }
`;

export const OptionButtonBorder = css`
    width: auto;
    padding-left: 12px;
    padding-right: 12px;
    margin-left: 16px;

    box-sizing: border-box;
    padding: 0px 8px;
    background-color: #20223c;
    color: rgb(255, 255, 255);
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex: 0 0 auto;
    cursor: pointer;
    font-family: Inter, sans-serif;
    height: 26px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    border: none;
    border-radius: 2px;
    transition: all 100ms ease-in 0s;
    text-decoration: none;
    &:hover,
    &:focus {
        background: #24353a;
    }
`;
