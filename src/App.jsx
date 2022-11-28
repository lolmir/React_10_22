import React, { useState, useEffect } from 'react'
import './baseStyles.scss'
import './App.scss'
import { Form } from './Components/Form/Form'
import { MessageList } from './Components/MessageList/MessageList'
import { ChatList } from './Components/ChatList/ChatList'

function App() {
  const [chats, setChats] = useState([
    {
      name: 'chat-1',
      id: 'chatId-1'
    },
    {
      name: 'chat-2',
      id: 'chatId-2'
    }
  ])
  const [messages, setMessages] = useState([])

  useEffect(() => {
    let botMessage = {
      author: 'Bot',
      text: 'Hello, I am Bot',
      id: `id-` + (Math.random() * 100000000).toFixed(0)
    }

    const botSendMessage = () => {
      setMessages(messages => [...messages, botMessage])
    }
    if (messages.length !== 0 && messages[messages.length - 1].author !== 'Bot') {
      setTimeout(botSendMessage, 1000)
    }
  }, [messages])
  const addMessage = (author, text) => {
    let newMessage = {
      author: author,
      text: text,
      id: `id-` + (Math.random() * 100000000).toFixed(0)
    }
    setMessages(messages => [...messages, newMessage])
  }

  return (
    <div className='bg'>
      <div className='leftSide'>
        <div className='App-leftBar'>
          <ChatList chats={chats} />
        </div>
      </div>
      <div className='center'>
        <div className='App'>
          <div className='App-top'>
            <MessageList messages={messages} />
          </div>
          <div className='App-bottom'>
            <Form addMessage={addMessage} messages={messages} />
          </div>
        </div>
      </div>
      <div className='rightSide'>
      </div>
    </div>
  )
}
export default App;