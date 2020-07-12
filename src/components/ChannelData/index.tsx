import React from 'react'
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'
import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData: React.FC = () => {
    return (
        <Container>
            <Messages>
            <ChannelMessage 
            author='João Vitório'
            date='05/07/2020'
            content='Olá pessoal'
            
            />

            <ChannelMessage 
            author='Reinaldo'
            date='05/07/2020'
            content={
                <>
                    Olá <Mention>@João Vitório</Mention>, tudo bem?
                </>
            }
            hasMention
            isBot
            />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData