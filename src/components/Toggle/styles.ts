/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';

export const Container = styled.div`
   display: flex;
   align-items: center;
`;

export const ToggleLabel = styled.span`
   color: ${(props) => { return props.theme.colors.white; }}
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => {
    return {
      onColor: theme.colors.info,
      offColor: theme.colors.warning,
    };
  },
)`
  margin: 0 7px;
`;
