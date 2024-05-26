import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
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

export default ModeSelect