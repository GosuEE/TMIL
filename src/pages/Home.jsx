import React from 'react';

import { Box, Stack, Paper, Typography } from '@mui/material';
import styled from 'styled-components';
import Card from '../components/card/Card';

// Board 필요한 데이터 =>
export default function Home() {
  return (
    <Stack
      spacing={2}
      mt={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {/* title */}
      <Typography variant="h4">TMIL 게시판</Typography>
      {/* container */}
      <Box sx={{ width: '80%' }}>
        {/* Divider */}
        <Box sx={{ width: '100%', height: '10px', my: 2, bgcolor: '#0AA4B5' }} />
        {/* Card들어가는곳 */}
        <Stack spacing={2}>
          {/* CardItem => 컴포넌트, props ={ title, content, day(format: yyyy/mm/dd) } */}
          <Card title="[TIL]오늘 잠만 잤어요" content="내용" day="2022/10/22" />
          {/* <Box
            width="100%"
            py={2}
            bgcolor="#F9FCFD"
            borderRadius={2}
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Typography pl={2} sx={{ width: '33%' }} variant="h6">
              [TIL]오늘 잠만 잤어요
            </Typography>
            <Typography sx={{ width: '33%', textAlign: 'center' }} variant="h6">
              잠만보
            </Typography>
            <Typography sx={{ width: '33%', textAlign: 'center' }} variant="h6">
              2023/2/21
            </Typography>
          </Box>
          <Box
            width="100%"
            py={2}
            bgcolor="#F9FCFD"
            borderRadius={2}
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Typography pl={2} sx={{ width: '33%' }} variant="h6">
              [TIL]오늘 잠만 잤어요
            </Typography>
            <Typography sx={{ width: '33%', textAlign: 'center' }} variant="h6">
              잠만보
            </Typography>
            <Typography sx={{ width: '33%', textAlign: 'center' }} variant="h6">
              2023/2/21
            </Typography>
          </Box>
          <Box
            width="100%"
            py={2}
            bgcolor="#F9FCFD"
            borderRadius={2}
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Typography pl={2} sx={{ width: '33%' }} variant="h6">
              [TIL]오늘 잠만 잤어요
            </Typography>
            <Typography sx={{ width: '33%', textAlign: 'center' }} variant="h6">
              잠만보
            </Typography>
            <Typography sx={{ width: '33%', textAlign: 'center' }} variant="h6">
              2023/2/21
            </Typography>
          </Box> */}
        </Stack>
      </Box>
    </Stack>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  display: 'flex',
}));
