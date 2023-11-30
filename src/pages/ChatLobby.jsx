import React from 'react'
import { useAuthValue } from '../context/AuthProvider'
import { db } from '../config/firebase';
import { addDoc, collection, query, onSnapshot, serverTimestamp } from 'firebase/firestore';

import '../assets/css/chatlobby.css';
import Header from '../layout.jsx/Header';
import Footer from '../layout.jsx/Footer';
import InputType from '../components/InputType';
import ButtonType from '../components/ButtonType';

const ChatLobby = () => {
  const [roomname, setRoomname] = React.useState();
  const { nick, uicon, email} = useAuthValue();
  const onPress = async () => {
     const dbref = collection(db, 'chatroom');
     const rs = await addDoc(dbref, { 
                   timestamp: serverTimestamp(),
                   title: roomname,
                   master: nick,
                   email  
                });
     setRoomname("");           
  }
  return (
    <>
      <Header nick={nick} uicon={uicon} />
      <div className="lobby-box">
        <h1 className="text-center">방개설</h1>
        <p className="text-center">{nick}님 환영합니다.</p>
        <InputType types="text"
                   names="roomname"
                   values={roomname}
                   functions={(e)=>setRoomname(e.target.value)}
                   styles={{
                      padding:'10px',
                      border:'1px solid #999',
                      width: '200px',
                      borderRadius:'15px',
                      backgroundColor:"#ebe5e6",
                      display:'block',
                      marginBottom:'10px'
                   }}
        />           
        <ButtonType 
             types="submit"
             text="채팅방개설"
             functions={onPress}
             styles={{
                padding:'10px',
                width:'200px',
                borderRadius:'15px',
                border:'none',
                backgroundColor:'#61A9FD',
                color:"#fff"
             }}
       />      

      </div> 
      <Footer />
    </>
  )
}

export default ChatLobby