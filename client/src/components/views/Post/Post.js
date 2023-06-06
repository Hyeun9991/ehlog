import React, { useState, useRef, useCallback } from 'react';
import { fontSizes } from '../../../theme/theme';
import styled from 'styled-components';
import ThemeToggle from '../../ThemeToggle';
import { useTheme } from '../../../context/themeProvider';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Post = () => {
  const user = useSelector((state) => state.user);
  const textareaRef = useRef();
  const [ThemeMode, toggleTheme] = useTheme();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // textarea 크기 자동 조절 함수
  const handleResizeHeight = useCallback(() => {
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(title, body);
  };

  return (
    <Container>
      <ThemeToggle toggle={toggleTheme} mode={ThemeMode} />
      <SecondHeaderContainer>
        <LogoWrap>
          <Link to="/">Ehlog</Link>
        </LogoWrap>

        <RightSection>
          <PostButton onClick={onSubmit}>Post</PostButton>

          {user.userData && (
            <UserName className="user-name">{user.userData.name}</UserName>
          )}
        </RightSection>
      </SecondHeaderContainer>

      <PostForm>
        <InputWrap>
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(event) => setTitle(event.target.value)}
          />
        </InputWrap>
        <InputWrap>
          <label htmlFor="">Body</label>
          <textarea
            ref={textareaRef}
            value={body}
            placeholder="Tell your story..."
            onChange={(event) => setBody(event.target.value)}
            onInput={handleResizeHeight}
          />
        </InputWrap>
      </PostForm>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  height: auto;
  position: relative;

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    min-height: calc(100vh - 50px);
    height: auto;
  }
`;
const PostForm = styled.form`
  background: ${({ theme }) => theme.bg_main1};
  width: 900px;
  margin: 70px auto 35px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    margin-top: 50px;
    padding: 1.25rem 1rem;
    width: 100%;
  }
`;
const InputWrap = styled.div`
  label {
    display: none;
  }

  input,
  textarea {
    background-color: transparent;
    width: 100%;
    border: none;
    outline: none;
    font-weight: 400;
    line-height: 1.58;
    letter-spacing: -0.003em;
    color: ${({ theme }) => theme.text1};

    &::placeholder {
      color: ${({ theme }) => theme.text4};
    }
  }

  input {
    font-size: ${fontSizes.titleSize};
  }

  textarea {
    resize: none;
    font-size: ${fontSizes.xl};
    font-family: Helvetica, sans-serif;
    white-space: pre;
    overflow: auto;

    /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
    &::-webkit-scrollbar {
      display: none;
    }

    & {
      -ms-overflow-style: none; /* 인터넷 익스플로러 */
      scrollbar-width: none; /* 파이어폭스 */
    }
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    input {
      font-size: ${fontSizes.titleSmallSize};
    }

    textarea {
      font-size: ${fontSizes.lg};
    }
  }
`;
const PostButton = styled.button`
  background-color: ${({ theme }) => theme.bg_main3};
  font-size: ${fontSizes.xs};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  height: 25px;
  border-radius: 99em;
  border: none;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.06), 0 2px 32px 0 rgba(0, 0, 0, 0.16);
  transition-duration: 0.2s;
  transition: 0.22s ease-in-out;
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
`;
const SecondHeaderContainer = styled.div`
  background: ${({ theme }) => theme.bg_main1};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    height: 50px;
    padding: 1rem;
  }
`;
const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
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
const UserName = styled.p`
  color: ${({ theme }) => theme.text1};
  font-size: ${fontSizes.small};
  font-weight: 600;
`;

export default Post;
