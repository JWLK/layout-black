import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
    ${(props) => props.theme.mq.mobile} {
        left: -240px;
    }
`;

export const SideMenu_ul = styled.ul`
    list-style: none;
    padding-top: 20px;
    padding-left: 0px;
    margin: 0px;
`;

export const SideMenu_li = styled.li`
    height: 40px;
    padding-left: 0px;
    padding-right: 0px;
    opacity: 1;
    color: rgb(153, 153, 153);
    background-color: transparent;
    transition: all 200ms ease-in 0s;
    &:hover {
        background-color: rgb(36, 36, 36);
    }
`;

export const SideMenu_link = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;
    flex-shrink: 0;
    transition: all 200ms ease-in 0s;
    color: ${(props) => (props.active ? 'rgb(230, 230, 230)' : 'rgb(153, 153, 153)')};
    &:hover {
        color: rgb(230, 230, 230);
    }
`;

export const SideMenu_icon = css`
    width: 40px;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`;
