import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import { CompareSharp, ThreeDRotation } from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box';
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          {/* <div style={{ display: 'flex', alignItems:'center', gap: '8px' }}>
            <LightModeIcon fontSize='small'/> Light
          </div> */}
          <Box sx={{ display: 'flex', alignItems:'center', gap: 1 }}>
            <LightModeIcon fontSize='small'/> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          {/* <div style={{ display: 'flex', alignItems:'center', gap: '8px' }}>
            <DarkModeOutlined fontSize='small'/> Dark
          </div> */}
          <Box sx={{ display: 'flex', alignItems:'center', gap: 1 }}>
            <DarkModeOutlined fontSize='small'/> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          {/* <div style={{ display: 'flex', alignItems:'center', gap: '8px' }}>
            <SettingsBrightnessIcon fontSize='small'/> System
          </div> */}
          <Box sx={{ display: 'flex', alignItems:'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize='small'/> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
function ModeToggle() {
  const { mode, setMode } = useColorScheme()

  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
  // console.log('prefersDarkMode: ', prefersDarkMode)
  // console.log('prefersLightMode: ', prefersLightMode)

  return (
    <Button onClick={() => {
      setMode(mode == 'light' ? 'dark' : 'light')
    }}>
      {mode == 'light' ? 'Turn dark' : 'Turn Light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeSelect></ModeSelect>
      <hr/>
      <ModeToggle></ModeToggle>
      <hr/>
      <div>Duy Viet</div>

      <Typography variant='body2' color="text.secondary">Test Typography</Typography>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <AccessAlarmIcon/>
      <ThreeDRotation/>

      <HomeIcon color='primary'/>
      <HomeIcon color='secondary'/>
      <HomeIcon color='success'/>
      <HomeIcon color='action'/>
      <HomeIcon color='disabled'/>
      <HomeIcon sx={ { color: pink[500] } }/>
    </>
  )
}

export default App
