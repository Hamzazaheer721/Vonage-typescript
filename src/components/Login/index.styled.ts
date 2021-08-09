import styled from 'styled-components'

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction : column;
    justify-content: space-around;
    align-items : center; 
`
export const InputContainer = styled.input`
    margin-top: 10px;
    border-radius : 8px;
    width: 60%;
    &:focus{
      border-radius: 8px;
      outline: none;
      box-shadow: 0px 0px 2px gray;
    }
`
export const Button = styled.button`
    width: auto;
    height: auto;
    border-radius: 8px;
    margin-top: 10px;
`
