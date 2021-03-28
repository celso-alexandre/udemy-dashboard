/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.section`
   grid-area: CONTENT;
   background: ${(props) => { return props.theme.colors.primary; }};
   color: ${(props) => { return props.theme.colors.white; }};
`;
