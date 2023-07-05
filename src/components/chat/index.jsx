import { Snackbar } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import socket from '../../socket';

const Chat = () => {
  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState([]);

  const [userData, setUserData] = useState(null);

  const [userJoinNotification, setUserJoinNotification] = useState('');

  const getUser = () => {
    const user = JSON.parse(localStorage.getItem('userData'));

    setUserData(user);
  };

  const [isConnected, setIsConnectsed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('send-message', {
      userData,
      message,
    });

    setMessages((prev) => [
      ...prev,
      {
        _id: new Date().toISOString(),
        message,
        // eslint-disable-next-line no-underscore-dangle
        user: userData._id,
        username: userData.username,
      },
    ]);
    setMessage('');
  };

  useEffect(() => {
    if (!userData) {
      getUser();
    }
  }, []);

  const onConnect = () => {
    setIsConnectsed(true);
  };

  const handleJoin = (data) => {
    setUserJoinNotification(`${data.payload.username} has joined the chat`);
    setTimeout(() => setUserJoinNotification(''), 3000);
  };

  const handleMessage = (data) => {
    setMessages((prev) => [...prev, data.payload]);
  };

  const getChatMessages = async () => {
    const { data } = await axios.get('/api/chat/getChat');

    setMessages(Object.values(data.room.messages));

    console.log(data);
  };

  useEffect(() => {
    if (!userData) return;

    getChatMessages();

    socket.emit('join', userData);
  }, [isConnected]);

  useEffect(() => {
    socket.on('connect', onConnect);
    socket.on('user-join', handleJoin);
    socket.on('receive-message', handleMessage);

    return () => {
      socket.off('disconnect', () => { });
    };
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        paddingTop: '5rem',
      }}
    >
      <div>
        {messages.map((item) => (
          <p
            // eslint-disable-next-line no-underscore-dangle
            key={item._id}
            style={{
              // eslint-disable-next-line no-underscore-dangle
              color: item.user === userData._id ? 'red' : 'blue',
            }}
          >
            {item.username}
            :
            {item.message}
          </p>
        ))}
      </div>
      <div>
        <input
          value={message}
          placeholder="Enter message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button type="button" onClick={handleSubmit}>
          Send
        </button>
      </div>
      <h1>CHAT</h1>
      <Snackbar
        open={!!userJoinNotification}
        autoHideDuration={3000}
        message={userJoinNotification}
      />
    </div>
  );
};

export default Chat;
