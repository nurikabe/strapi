import styled from 'styled-components';

const Label = styled.div`
  padding: 9px 20px;
  font-size: 13px;
  font-weight: 600;
  position: relative;
  min-height: 64px;
  &:after {
    content: '• ';
    position: absolute;
    top: 11px;
    left: 18.5px;
    color: #aed4fb;
    font-size: 15px;
  }
  &:before {
    content: '&';
    position: absolute;
    top: 22px;
    left: 22px;
    height: 100%;
    width: 2px;
    background-color: #e6f0fb;
    color: transparent;
  }
  p {
    padding-left: 18px;
    margin-bottom: 0;
  }
  p:last-of-type:not(:first-of-type) {
    color: #9ea7b8;
    font-weight: 400;
  }
`;

export default Label;