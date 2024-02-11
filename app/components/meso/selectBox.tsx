import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import { SelectType } from '@/app/constant'

interface RankSelect {
  title: string
  selectMenu: SelectType[]
  value: number | string
  handle: (event: SelectChangeEvent) => void
}

const SelectBox = ({ title, selectMenu, value, handle }: RankSelect) => {
  return (
    <div className="flex items-end justify-start">
      <FormControl required sx={{ m: 1, width: 200 }}>
        <InputLabel id="">{title}</InputLabel>
        <Select labelId="" value={value.toString()} label={title} autoWidth onChange={handle}>
          {selectMenu?.map((item) => {
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

export default SelectBox
