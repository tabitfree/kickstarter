import { FC } from 'react';
import styled from 'styled-components';
import { useLocales } from '../../_utils';
import Logo from '../Logo';

const Footer: FC = () => {
  const locales = useLocales();
  return <Section></Section>;
};

const Section = styled.footer`
  background: #fff;
  color: #fff9ea;
  padding: 0;
  font-size: 16px;
  line-height: 23px;
`;

export default Footer;
