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
    width: 36px;
    height: 36px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    border: none;
    border-radius: 50%;
    transition: all 100ms ease-in 0s;
    text-decoration: none;
`;

export const ContentsWrapper = styled.div`
    background-color: rgb(21, 21, 21);
    color: rgb(230, 230, 230);
    width: 100vw;
    min-height: calc(100vh - 48px);
`;

export const Main = styled.main`
    width: 100%;
    height: calc(100vh - 48px);
    padding-left: 240px;

    ${(props) => props.theme.mq.mobile} {
        padding-left: 0px;
    }
`;

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    margin: 0px auto;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
`;

export const Board = styled.div`
    padding-top: 40px;
    padding-bottom: 32px;
    width: 100%;
    height: 100%;
`;

export const Title = styled.div`
    width: calc(100% - 72px);
    max-width: 1828px;
    margin-left: auto;
    margin-right: auto;
    border-style: solid;
    border-width: 0px 0px 1px;
    border-color: rgb(52, 52, 52);
    padding-bottom: 8px;

    > span {
        font-size: 19px;
        text-align: left;
        font-weight: 700;
        line-height: normal;
        display: block;
        color: inherit;
        margin-bottom: 4px;
    }
`;

export const Contents = styled.div`
    width: calc(100% - 72px);
    height: calc(100vh - 250px);
    max-width: 1828px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    align-items: stretch;
`;

export const Section = styled.div`
    display: flex;
    flex-basis: 300px;
    flex-grow: 1;
    flex-direction: row;
    border: solid 1px rgba(52, 52, 52, 0.16);
    margin: 5px;
    padding: 30px 10px;
`;

export const Section_Main = styled.div`
    display: flex;
    flex-basis: 300px;
    flex-grow: 2;
    flex-direction: row;
    border: solid 1px rgb(52, 52, 52);
    margin: 5px;
    padding: 30px 10px;
`;

export const Section_Side = styled.div`
    display: flex;
    flex-basis: 300px;
    flex-grow: 1;
    flex-direction: row;
    border: solid 1px rgb(52, 52, 52);
    margin: 5px;
    padding: 30px 10px;
`;
