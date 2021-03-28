/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.header`
   grid-area: MAINHEADER;
   background: ${(props) => { return props.theme.colors.secondary; }};
   /* color: ${(props) => { return props.theme.colors.white; }}; */
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 10px;
   border-bottom: 1px solid ${(props) => { return props.theme.colors.gray; }}
`;

export const Profile = styled.div`
   color: ${(props) => { return props.theme.colors.white; }}
`;

export const Welcome = styled.h3``;

export const Username = styled.span``;
