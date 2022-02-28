import { forwardRef } from 'react';
import { TxtProp } from '../../_types/props';
import styled from 'styled-components';

type ButtonKind = 'light' | 'dark';
type ButtonTypeProp = { type: ButtonKind };

type ButtonProps = TxtProp & ButtonTypeProp & { onClick?: any };

const Button = forwardRef<HTMLDivElement, ButtonProps>(
  ({ txt, type = 'light', ...rest }, ref) => {
    return (
      <ButtonContainer type={type} {...rest} ref={ref}>
        <span className={'bold'}>{txt}</span>
      </ButtonContainer>
    );
  }
);

const ButtonContainer = styled.div<ButtonTypeProp>`
  cursor: pointer;
  background: ${(p) =>
    p.type == 'dark' ? p.theme.palette.dark.btn : p.theme.palette.main};
  color: #fff;
  padding: 10px 20px;
  border-radius: ${(p) => p.theme.borderRadius};
  transition: all 0.4s ease;
  text-align: center;

  &:hover {
    background: ${(p) =>
      p.type == 'dark' ? p.theme.palette.gray.main : p.theme.palette.dark.btn};
    color: ${(p) => (p.type == 'dark' ? '#000' : p.theme.palette.light.main)};
  }
`;

Button.displayName = 'Button';

export default Button;
