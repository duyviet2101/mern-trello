import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import Button from '@mui/material/Button'

const MENU_STYLES = {
  color: 'white',
  // backgroundColor: 'primary.light',
  backgroundColor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflowX: 'auto',
      gap: 2,
      paddingX: 2,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      borderBottom: '1px solid white'
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Viet's dashboard"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon/>}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover' : { borderColor: 'white' }
          }}
        >
          Invite
        </Button>

        <AvatarGroup
          max={7}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none'
            }
          }}
        >
          <Tooltip title='Remy Sharp'>
            <Avatar alt="Remy Sharp" src="https://avatar.iran.liara.run/public/40" />
          </Tooltip>
          <Tooltip title='Travis Howard'>
            <Avatar alt="Travis Howard" src="https://avatar.iran.liara.run/public/15" />
          </Tooltip>
          <Tooltip title='Cindy Baker'>
            <Avatar alt="Cindy Baker" src="https://avatar.iran.liara.run/public/39" />
          </Tooltip>
          <Tooltip title='Agnes Walker'>
            <Avatar alt="Agnes Walker" src="https://avatar.iran.liara.run/public/18" />
          </Tooltip>
          <Tooltip title='Trevor Henderson'>
            <Avatar alt="Trevor Henderson" src="https://avatar.iran.liara.run/public/23" />
          </Tooltip>
          <Tooltip title='Remy Sharp'>
            <Avatar alt="Remy Sharp" src="https://avatar.iran.liara.run/public/40" />
          </Tooltip>
          <Tooltip title='Travis Howard'>
            <Avatar alt="Travis Howard" src="https://avatar.iran.liara.run/public/15" />
          </Tooltip>
          <Tooltip title='Cindy Baker'>
            <Avatar alt="Cindy Baker" src="https://avatar.iran.liara.run/public/39" />
          </Tooltip>
          <Tooltip title='Agnes Walker'>
            <Avatar alt="Agnes Walker" src="https://avatar.iran.liara.run/public/18" />
          </Tooltip>
          <Tooltip title='Trevor Henderson'>
            <Avatar alt="Trevor Henderson" src="https://avatar.iran.liara.run/public/23" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar