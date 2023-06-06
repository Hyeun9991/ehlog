import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontSizes } from '../../../../theme/theme';

const SecondHeader = () => {
  return (
    <SecondHeaderContainer>
      <LogoWrap>
        <Link to="/">Ehlog</Link>
      </LogoWrap>
    </SecondHeaderContainer>
  );
};

const SecondHeaderContainer = styled.div`
  background: ${({ theme }) => theme.bg_main1};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 5%;

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    height: 50px;
    padding: 1rem;
  }
`;
const LogoWrap = styled.h1`
  text-transform: uppercase;
  font-size: ${fontSizes.lg};
  font-weight: 600;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text1};
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    font-size: ${fontSizes.base};
  }
`;

export default SecondHeader;
