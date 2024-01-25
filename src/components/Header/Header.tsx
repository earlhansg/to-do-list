/* style */
import { HeaderStyle } from './HeaderStyle'
/* materialUI */
import { Box, Typography } from '@mui/material'

const Header = () => {
  return (
    <Box
        sx={HeaderStyle.container}
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
