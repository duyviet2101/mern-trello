import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box 
      sx={{
        // backgroundColor: 'primary.main',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}>
      Board content
    </Box>
  )
}

export default BoardContent