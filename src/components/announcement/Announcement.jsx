/* eslint-disable no-underscore-dangle */
import {
  Box, Divider, Typography, Button, Input, Container,
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
      getComments();
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
    <Container>
      <Box
        mt={3}
        sx={{
          border: '1px solid #4c4a4a', width: 846, padding: '10px 15px', borderRadius: '20px', color: '#fff', m: 'auto',
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
              border: '1px solid #4c4a4a', borderRadius: 50, mr: 1, width: 35, height: 35, p: '3px',
            }}
            />
            <Typography variant="h5" fontWeight={500} color="#fff" textTransform="capitalize">{announce.roleId?.username}</Typography>
          </Box>
          <Typography
            sx={{
              backgroundColor: 'colors.darkBlue', padding: '10px 20px', borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px', color: '#fff', fontSize: 12,
            }}
            variant="h5"
          >
            {announce.createdAt.split(':')[0].slice(0, 10).replaceAll('-', '/')}
          </Typography>

        </Box>
        <Divider />

        <Box p="10px">
          <Typography mt={1} fontSize={16} fontWeight={500}>{announce.title}</Typography>
          <Typography mt={2} fontSize={13} mb={2} color="#fff" maxWidth="650px" width="100%">{announce.description}</Typography>
          {announce.image
            && (
              <Box sx={{ height: '350px' }}>
                <Image src={announce.image} alt="gym" width="100%" height="100%" />

              </Box>
            )}
          <Box
            position="relative"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingLeft: '10px',
              mt: 3,
            }}
          >
            <Typography sx={{
              backgroundColor: '#FF4601',
              width: '20px',
              height: '20px',
              position: 'absolute',
              borderRadius: '20px',
              fontSize: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',

            }}
            >
              {commentsData?.filter((comments) => (comments?.announcementId?._id === announce?._id))
                .length}

            </Typography>
            <Button
              sx={{
                color: 'colors.darkBlue',
                padding: ' 10px 25px',
                fontSize: 12,
              }}
              onClick={() => setShowComments(!showComments)}
            >
              Comments

            </Button>

          </Box>

          {commentsData && (
            <Box px={10} sx={{ display: showComments ? 'block' : 'none' }}>
              {commentsData?.filter((comments) => (comments?.announcementId?._id === announce?._id))
                .map((comment) => (
                  <Box
                    display="flex"
                    alignItems="center"
                    mt={2}
                    key={comment._id}
                    sx={{
                      padding: '10px 12px',
                      borderRadius: '6px',
                      backgroundColor: '#57483624',
                    }}
                  >
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="pic-profile"
                      style={{
                        borderRadius: '50%', width: '50px', height: '50px', paddingRight: '10px', paddingTop: '8px',
                      }}
                    />
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      flex: 0.9,
                    }}
                    >
                      <Typography
                        sx={{
                          fontSize: 11,
                          fontWeight: 'bold',
                        }}
                      >
                        {comment.userId.username}

                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 13,
                          fontWeight: 'normal',

                        }}
                        variant="h4"
                      >
                        {comment.comment}

                      </Typography>

                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 1.5,
                        flex: 0.1,
                        flexDirection: 'column',
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

                      <DeleteIcon mt={2} sx={{ alignSelf: 'end', fontSize: 18, '&:hover': { color: 'red', cursor: 'pointer' } }} onClick={() => deleteComment(comment._id)} />

                    </Box>

                  </Box>
                ))}
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mt: 6,
              }}
              >
                <img
                  src="data:image/jpeg;base64,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"
                  alt="pic-profile"
                  style={{ borderRadius: '50%', width: '62px', paddingRight: '10px' }}
                />
                <Input
                  sx={{
                    color: '#fff',
                    fontSize: 12,
                    height: '45px',
                    flex: 0.9,
                    border: '1px solid #4c4a4a',
                    p: '5px 10px',
                    borderRadius: '6px',

                  }}
                  type="text"
                  placeholder="add your comment ..."
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                />

                <SendIcon
                  sx={{
                    fontSize: 30,
                    flex: 0.1,
                    width: '30px',
                    height: ' 30px',
                    borderRadius: '50%',
                    color: '#FF4601',
                  }}
                  onClick={addComment}
                />

              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};
export default Announcement;
