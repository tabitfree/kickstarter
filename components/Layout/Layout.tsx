import { FC } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};

const StyledMain = styled.main`
  position: relative;
`;

export default Layout;
