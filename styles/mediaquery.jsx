import styled from '@emotion/styled';

export const MQLWrap = styled.div`
    margin: 0 auto;
    max-width: 1200px;

    ${(props) => props.theme.mq.tablet} {
        max-width: 760px;
    }

    ${(props) => props.theme.mq.mobile} {
        max-width: 480px;
    }
`;
