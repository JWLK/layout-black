import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px;
`;

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

export const OptionBoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
`;

export const ButtonText = styled.button`
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

export const ButtonBorder = styled.button`
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

export const ButtonIcon = styled.button`
    box-sizing: border-box;
    padding: 0px px;
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
    width: 42px;
    height: 42px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    border: none;
    border-radius: 50%;
    transition: all 100ms ease-in 0s;
    text-decoration: none;
`;

export const ContentsBoard = styled.div`
    background-color: rgb(21, 21, 21);
    color: rgb(230, 230, 230);
    width: 100vw;
    min-height: calc(100vh - 48px);
`;

//*Side Menu
export const SideMenuWrapper = styled.div`
    display:block
    margin-right: 0px
;`;

export const SideMenuBox = styled.aside`
    position: absolute;
    height: calc(100% - 48px);
    left: 0px;
    border-right: 1px solid rgb(36, 36, 36);
    border-top-color: rgb(36, 36, 36);
    border-bottom-color: rgb(36, 36, 36);
    border-left-color: rgb(36, 36, 36);
    background-color: rgb(21, 21, 21);
    width: 240px;
    flex-shrink: 0;
    z-index: 3;
    overflow: hidden auto;
`;

export const SideMenu_ul = css`
    list-style: none;
    padding-left: 0px;
    margin: 0px;
`;

export const SideMenu_li = css`
    height: 40px;
    padding-left: 0px;
    padding-right: 0px;
    opacity: 1;
    color: rgb(230, 230, 230);
    background-color: transparent;
    transition: all 200ms ease-in 0s;
`;
