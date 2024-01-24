import { Box, Typography } from '@mui/material'

const Header = () => {
  return (
    <Box
        sx={{
          minHeight: 220,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "white", alignSelf: "baseline" }}
          ml={5}
          mb={3}
        >
          To-do list
        </Typography>
    </Box>
  )
}

export default Header
