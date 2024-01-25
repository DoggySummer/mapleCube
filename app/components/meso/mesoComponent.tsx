'use client'

import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import { useState } from 'react'

const potenType = {
  rare: '레어',
  epic: '에픽',
  unique: '유니크',
  legendary: '레전더리',
}

const MesoComponent = () => {
  type PotenType = keyof typeof potenType
  const [age, setAge] = useState('')
  const [poten, setPoten] = useState<PotenType>('rare')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }
  return (
    <div className="flex items-end justify-end">
      <FormControl required sx={{ m: 1, minWidth: 120, width: 150 }}>
        <InputLabel id="">현재 잠재능력</InputLabel>
        <Select labelId="" value={age} label="현재 잠재능력 " autoWidth onChange={handleChange}>
          <MenuItem value={10}>레어</MenuItem>
          <MenuItem value={20}>에픽</MenuItem>
          <MenuItem value={30}>유니크</MenuItem>
          <MenuItem value={40}>레전더리</MenuItem>
        </Select>
        <FormHelperText>필수값</FormHelperText>
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 120, width: 150 }}>
        <InputLabel id="">장비 레벨</InputLabel>
        <Select labelId="" value={age} label="현재 잠재능력 " autoWidth onChange={handleChange}>
          <MenuItem value={10}>160미만</MenuItem>
          <MenuItem value={20}>160 ~ 199</MenuItem>
          <MenuItem value={30}>200 ~ 249</MenuItem>
          <MenuItem value={40}>250이상</MenuItem>
        </Select>
        <FormHelperText>필수값</FormHelperText>
      </FormControl>
    </div>
  )
}

export default MesoComponent
