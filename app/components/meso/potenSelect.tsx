'use client'

import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import { useState } from 'react'
import { SelectType } from '@/app/constant'

interface potenSelect {
  title: string
  value: SelectType[]
}

const PotenSelect = ({ title, value }: potenSelect) => {
  const [selectValue, setSelectValue] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value)
  }
  return (
    <div className="flex items-end justify-start">
      <FormControl required sx={{ m: 1, width: 200 }}>
        <InputLabel id="">{title}</InputLabel>
        <Select labelId="" value={selectValue} label={title} autoWidth onChange={handleChange}>
          {value.map((item) => {
            return (
              <MenuItem value={item.value} key={item.id}>
                {item.lang}
              </MenuItem>
            )
          })}
        </Select>
        <FormHelperText>필수값</FormHelperText>
      </FormControl>
    </div>
  )
}

export default PotenSelect
