/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.header`
   grid-area: MAINHEADER;
   background: ${(props) => { return props.theme.colors.secondary; }};
   color: ${(props) => { return props.theme.colors.white; }};
`;
