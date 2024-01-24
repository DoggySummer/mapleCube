'use client'

import { ButtonGroup } from '@mui/material'
import Button from '@mui/material/Button'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useState } from 'react'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const MUIPractice = () => {
  const [tabValue, setTabvValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabvValue(newValue)
  }

  return (
    <div>
      <Tabs value={tabValue} onChange={handleChange} aria-label="큐브 탭" className="!font-sans">
        <Tab label="메소 큐브" id="1" className="text-xl" />
        <Tab label="캐시 큐브" id="2" className="text-xl" />
        <Tab label="메소" id="3" className="text-xl" />
      </Tabs>
      {/* <CustomTabPanel value={tabValue} index={0}>
        메소 큐브
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={1}>
        캐시 큐브
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={2}>
        메소
      </CustomTabPanel> */}
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

export default MUIPractice
