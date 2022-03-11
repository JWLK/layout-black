import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Contents_svg = styled.div`
    width: calc(100% - 72px);
    height: calc(100vh - 150px);
    max-width: 1828px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    align-items: flex-start;
    overflow: scroll;
`;

export const Section_svg = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-grow: 1;
    flex-flow: row wrap;
    align-items: flex-start;
    border: solid 1px rgba(52, 52, 52, 0.3);
    padding: 20px 10px;
    margin: 10px 0px;
`;

export const Column_svg = styled.div`
    width: ${(props) => (props.width ? 'calc(' + props.width + ' - 10px)' : 'auto')};
    height: ${(props) => (props.height ? props.height : 'auto')};
    border: solid 1px rgba(52, 52, 52, 1);
    margin: 5px 5px;
    overflow: hidden;
`;
