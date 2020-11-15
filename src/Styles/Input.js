import styled from 'styled-components';

export const InputForm = styled.input `
  border: 1px solid #C4C4C4;
  border-radius: 12px;
  height: 10px;
  margin-bottom: 24px;
  padding: 18px;
  outline: none;
  transition: all .2s ease-out;

  :focus {
    outline:none;
    border: 1px solid	#32CD32;
  }

  :focus ~ label, :valid ~ label {
    color: #32CD32;
    top: -6px;
  }
`;

export const LabelForm = styled.label `
  color: #C4C4C4;
  letter-spacing: 0.01em;
  cursor: text;
  border-radius: 12px;
  transition: all .2s ease-out;
  background: white;
  position: absolute;
  left: 20px;
  top: 16px;
`;