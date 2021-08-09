import styled from 'styled-components'

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction : colomn;
    justify-content: center;
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

export default Form;
