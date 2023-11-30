import React from 'react'
import { useAuthValue } from '../context/AuthProvider'

import '../assets/css/chatlobby.css';
import Header from '../layout.jsx/Header';
import Footer from '../layout.jsx/Footer';

const ChatLobby = () => {
  const { email, nick, uicon} = useAuthValue();
  return (
    <>
      <Header nick={nick} uicon={uicon} />
      <Footer />
    </>
  )
}

export default ChatLobby