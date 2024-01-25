'use client'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useEffect, useState } from 'react'
import { cubeData } from '@/app/constant'
import InputCubeBox from './inputCube'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const CubeComponent = () => {
  const [tabValue, setTabvValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabvValue(newValue)
  }

  const normalCubeData = cubeData.filter((item) => item.cubeType === 'normal')
  const cashCubeData = cubeData.filter((item) => item.cubeType === 'cash')
  const mesocubeData = cubeData.filter((item) => item.cubeType === 'meso')

  return (
    <div>
      <Tabs value={tabValue} onChange={handleChange} aria-label="큐브 탭">
        <Tab
          label="메소 큐브"
          id="1"
          sx={{
            fontSize: '26px',
          }}
        />
        <Tab
          label="캐시 큐브"
          id="2"
          sx={{
            fontSize: '26px',
          }}
        />
        <Tab
          label="메소"
          id="3"
          sx={{
            fontSize: '26px',
          }}
        />
      </Tabs>
      <CustomTabPanel value={tabValue} index={0}>
        <InputCubeBox cubeDataAll={normalCubeData} />
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={1}>
        <InputCubeBox cubeDataAll={cashCubeData} />
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={2}>
        <InputCubeBox cubeDataAll={mesocubeData} />
      </CustomTabPanel>
    </div>
  )
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div className="">{children}</div>}
    </div>
  )
}

export default CubeComponent
