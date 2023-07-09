/* eslint-disable no-underscore-dangle */
import {
  Box, Divider, Typography, Button,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person';
import Image from '../../styles/image';

const Announcement = ({ announce }) => {
  const [commentsData, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const addComment = async () => {
    try {
      await axios.post(`/api/comments/${announce._id}`, { comment: commentInput });
      setCommentInput('');
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async () => {
    try {
      const { data: { comments } } = await axios.get('/api/comments');
      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (id) => {
    try {
      axios.delete(`/api/comments/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getComments();
  }, []);

  return (
    <Box
      mt={3}
      sx={{
        border: '1px solid #4c4a4a', width: 846, padding: '10px 15px', borderRadius: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #4c4a4a',
        }}
        p={1}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <PersonIcon sx={{
            border: '1px solid #ff4601', borderRadius: 50, mr: 1, width: 35, height: 35, p: '3px',
          }}
          />
          <Typography variant="h5" fontWeight={500} color="#fff" textTransform="capitalize">{announce.roleId?.username}</Typography>
        </Box>
        <Typography
          sx={{
            backgroundColor: 'colors.darkBlue', padding: '10px 20px', borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px', color: '#fff',
          }}
          variant="h5"
        >
          {announce.createdAt.split(':')[0].slice(0, 10).replaceAll('-', '/')}
        </Typography>

      </Box>
      <Divider />

      <Box p="10px">
        <Typography mt={1} variant="h4" color="#ff4601" fontWeight={600}>{announce.title}</Typography>
        <Typography mt={2} mb={2} color="#fff" variant="body2" maxWidth="650px" width="100%">{announce.description}</Typography>
        {announce.image
      && (
      <Box sx={{ height: '350px' }}>
        <Image src={announce.image} alt="gym" width="100%" height="100%" />

      </Box>
      )}
        <Box>
          <input type="text" value={commentInput} onChange={(e) => setCommentInput(e.target.value)} />
          <Button onClick={addComment}>comment</Button>
        </Box>
        {commentsData && (
        <Box>
          {commentsData.filter((comments) => (comments.announcementId._id === announce._id))
            .map((comment) => (
              <Box>
                <Box>{comment.comment}</Box>
                <Button onClick={() => deleteComment(comment._id)}>x</Button>
              </Box>
            ))}
        </Box>
        )}
      </Box>
    </Box>
  );
};
export default Announcement;
