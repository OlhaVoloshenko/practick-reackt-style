import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  border: ${props => `2px dashed ${props.theme.colors.black}`};
  padding: ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.spacing};
`;

export const EventName = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: ${props => props.theme.spacing(2)};
  color: ${props => props.theme.colors.primaryText};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  svg {
    display: block;
    margin-right: ${props => props.theme.spacing(2)};
    color: ${props => props.theme.colors.secondaryText};
  }
`;

export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: ${props => props.theme.spacing(1, 2)};
  border-radius: ${props => props.theme.spacing};
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};

  background-color: ${({ eventType, theme }) => {
    switch (eventType) {
      case 'free':
        return theme.colors.green;
      case 'paid':
        return theme.colors.blue;
      case 'vip':
        return theme.colors.red;
      default:
        return theme.colors.black;
    }
  }};
`;
