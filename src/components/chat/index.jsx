import { Box, Container, Snackbar } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import useAuth from '../../hook/useAuth';
import socket from '../../socket';
import MessageLists from '../messageLists';

const Chat = () => {
  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const { user: userData } = useAuth();
  console.log('🚀 ~ file: index.jsx:12 ~ Chat ~ users:', users);

  const [userJoinNotification, setUserJoinNotification] = useState('');

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

  const onConnect = () => {
    setIsConnectsed(true);
  };

  const handleJoin = (data) => {
    if (!userData) return;

    setUserJoinNotification(`${data.payload.username} has joined the chat`);
    setTimeout(() => setUserJoinNotification(''), 3000);
  };

  const handleMessage = (data) => {
    setMessages((prev) => [...prev, data.payload]);
  };

  const getChatMessages = async () => {
    const { data } = await axios.get('/api/chat/getChat');

    setMessages(Object.values(data.room.messages));
  };

  const handleUsersList = (data) => {
    setUsers(Object.values(data.payload));
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
    socket.on('users-list', handleUsersList);

    return () => {
      socket.on('disconnect', () => {
        socket.emit('user-disconnect', userData);
      });
    };
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: '5rem',
      }}
    >
      <Container>
        <Box
          boxShadow="0px 0px 10px 0px rgba(255,255,255,0.1)"
          sx={{
            display: 'flex',
            mt: 2,
          }}
        >
          <Box width="80%" borderRight="1px solid #ccc" p={2}>
            <MessageLists messages={messages} />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
                mt: 5,
              }}
            >
              <input
                style={{
                  padding: '15px 20px',
                  border: '1px solid #ccc',
                  width: '80%',
                  backgroundColor: 'transparent',
                  color: '#fff',
                  fontSize: '16px',
                }}
                value={message}
                placeholder="Enter message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <button
                style={{
                  padding: '15px 30px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: 'rgb(255, 70, 1)',
                  color: '#fff',
                  fontWeight: 700,
                  borderRadius: '20px',
                }}
                type="button"
                onClick={handleSubmit}
              >
                Send
              </button>
            </Box>
          </Box>
          <Box width="20%" p={2}>
            {users.map((user) => (
              <p key={user.username}>{user.username}</p>
            ))}
          </Box>
        </Box>
      </Container>
      <Snackbar
        open={!!userJoinNotification}
        autoHideDuration={3000}
        message={userJoinNotification}
      />
    </Box>
  );
};

export default Chat;
