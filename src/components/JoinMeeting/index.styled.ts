import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    height: 100vh;
`
export const JoinMeetingContainer = styled.div`
    flex: 0.8;
    display: flex;
    flex-direction: column;
    background-color: #3A3B3C;
    height: 100%;
`

export const Text = styled.h1`
    color: white;
`

export const StreamsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

`

export const SendMessageContainer = styled.div`
    flex: 0.2;
    display:flex;
    flex-direction: column;
    background-color: #242424;
    border-left: 1px solid #3D3D42;
`
export const MessageWrapper = styled.div`
    display: flex;
    justify-content : space-around;
    align-items: center;    
`

export const ChatHeader = styled.h1`
    color: #f5f5f5;
    text-align: center;
`

export const MainChatWindow = styled.div`
    flex-grow:1;
    over-flow-y: scroll;
    color: #f5f5f5;
`
export const InputContainer = styled.input`
    margin-top: 10px;
    border-radius : 8px;
    &:focus{
      border-radius: 8px;
      outline: none;
      box-shadow: 0px 0px 2px gray;
    }
`
export const Button = styled.button`
    margin-top: 11px;
    border-radius: 8px;
`
