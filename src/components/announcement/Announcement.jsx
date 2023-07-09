/* eslint-disable no-underscore-dangle */
import {
  Box, Divider, Typography, Button, Input,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Image from '../../styles/image';

const Announcement = ({ announce }) => {
  const [commentsData, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [showComments, setShowComments] = useState(false);

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

  const addComment = async () => {
    try {
      await axios.post(`/api/comments/${announce._id}`, { comment: commentInput });
      setCommentInput('');
      getComments();
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
        <Typography mt={1} variant="h4" fontWeight={600}>{announce.title}</Typography>
        <Typography mt={2} mb={2} color="#fff" variant="body2" maxWidth="650px" width="100%">{announce.description}</Typography>
        {announce.image
          && (
            <Box sx={{ height: '350px' }}>
              <Image src={announce.image} alt="gym" width="100%" height="100%" />

            </Box>
          )}
        <Box position="relative">
          <Button
            sx={{
              color: 'colors.darkBlue',
            }}
            onClick={() => setShowComments(!showComments)}
          >
            Comments

          </Button>
          <Typography sx={{
            backgroundColor: 'blue',
            width: '18px',
            height: '18px',
            position: 'absolute',
            borderRadius: '50%',
            left: 92,
            top: 0,
            fontSize: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            {commentsData.filter((comments) => (comments.announcementId._id === announce._id))
              .length}

          </Typography>
        </Box>

        {commentsData && (
          <Box px={10} sx={{ display: showComments ? 'block' : 'none' }}>
            {commentsData.filter((comments) => (comments.announcementId._id === announce._id))
              .map((comment) => (
                <Box
                  mt={2}
                  py={2}
                  borderBottom="1px solid #ccc"
                  key={comment._id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 2,
                  }}
                  >
                    <Typography
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      {comment.userId.username}

                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 12,

                      }}
                      variant="h4"
                    >
                      {comment.comment}

                    </Typography>

                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#ccc',
                        fontSize: 10,
                      }}
                      variant="h6"
                    >
                      {comment.createdAt.split(':')[0].slice(0, 10).replaceAll('-', '/')}

                    </Typography>

                    <DeleteIcon mt={2} sx={{ fontSize: 18, '&:hover': { color: 'red', cursor: 'pointer' } }} onClick={() => deleteComment(comment._id)} />

                  </Box>

                </Box>
              ))}
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              mt: 2,
            }}
            >
              <Input
                sx={{
                  color: '#fff',
                  fontSize: 12,
                  flex: 0.9,
                  border: '1px solid #ccc',
                  p: '5px 10px',

                }}
                type="text"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />

              <SendIcon
                sx={{
                  color: '#fff',
                  fontSize: 20,
                  flex: 0.1,
                }}
                onClick={addComment}
              />

            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default Announcement;
