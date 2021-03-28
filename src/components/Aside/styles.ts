/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.aside`
   grid-area: ASIDE;
   background: ${(props) => { return props.theme.colors.secondary; }};
   color: ${(props) => { return props.theme.colors.white; }};
`;
