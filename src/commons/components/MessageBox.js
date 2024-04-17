import React from 'react';
import styled, { css } from 'styled-components';
import { color } from '../../styles/color';
import fontSize from '../../styles/fontSize';
const { small } = fontSize;
const Box = styled.div`
  text-align: center;
  padding: 7px 10px;
  font-size: ${small};
  border-radius: 3px;
  color: ${color.dark};
  & + & {
    margin-top: 5px;
  }
  ${(
    { color: c }, // 변수 명이 color로 바꿔서 변수명을 c로 변환
  ) =>
    c &&
    css`
      color: ${color[c]};
      box-shadow: 2px 2px 5px ${color[c]};
    `}
`;
const MessageBox = ({ messages, color, children }) => {
  messages = messages || [];
  if (children) messages.push(children);
  return (
    <>
      {messages.map((message, i) => (
        <Box key={i} color={color}>
          {message}
        </Box>
      ))}
    </>
  );
};
export default React.memo(MessageBox);
