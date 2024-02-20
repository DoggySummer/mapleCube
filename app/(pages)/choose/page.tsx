'use client'

import Header from '@/app/components/header/header'
import SelectBox from '@/app/components/meso/selectBox'
import SideBar from '@/app/components/sideBar/sideBar'
import { useEffect, useState } from 'react'
import {
  itemLevelSelect,
  itemOptionAccessory,
  itemOptionCommon,
  itemOptionEmblem,
  itemOptionGlove,
  itemOptionHat,
  itemOptionWeapon,
  itemTypeSelect,
  rankSelect,
} from '../../constant'
import { InputAdornment, SelectChangeEvent, TextField } from '@mui/material'
import { numberToKorean } from '@/app/utils/utils'
import Footer from '@/app/components/footer/footer'
import ChooseResult from '@/app/components/result/chooseResult'

const Page = () => {
  const rankSelectEdited = rankSelect.filter((item) => item.value > 0)

  const itemOptionTotal = [
    ...itemOptionCommon,
    ...itemOptionWeapon,
    ...itemOptionEmblem,
    ...itemOptionAccessory,
    ...itemOptionGlove,
    ...itemOptionHat,
  ]
  const onSubmit = async () => {
    if (form.optionValueFirst === 0 && form.optionValueSecond === 0 && form.optionValueThird === 0) {
      alert('옵션을 하나 이상 선택해 주시기바랍니다')
      return
    }

    const firstOptionType = itemOptionTotal.filter((item) => item.value === form.optionTypeFirst)[0]
    const secondOptionType = itemOptionTotal.filter((item) => item.value === form.optionTypeSecond)[0]
    const thirdOptionType = itemOptionTotal.filter((item) => item.value === form.optionTypeThird)[0]

    const url =
      `http://localhost:3000/api/read?` +
      `itemlevel=${form.itemLevel}` +
      `&itemtype=${form.itemType}` +
      `&rank=${form.rank}` +
      `&itemfirst=${firstOptionType.type}` +
      `&itemsecond=${secondOptionType.type}` +
      `&itemthird=${thirdOptionType.type}` +
      `&firstvalue=${form.optionValueFirst}` +
      `&secondvalue=${form.optionValueSecond}` +
      `&thirdvalue=${form.optionValueThird}` +
      `&meso=${mesoKeep}`

    console.log(url)
    // try {
    //   const response = await fetch(url, {
    //     method: 'GET',
    //   })
    //   if (response) {
    //     const data = await response.json()
    //     console.log(data)
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
  }
  const [mesoKeep, setMesoKeep] = useState(0)

  const [form, setForm] = useState({
    rank: 1,
    itemType: 0,
    itemLevel: 0,
    optionTypeFirst: 0,
    optionTypeSecond: 0,
    optionTypeThird: 0,
    optionValueFirst: 0,
    optionValueSecond: 0,
    optionValueThird: 0,
  })
  const [itemOption, setItemOption] = useState([...itemOptionCommon, ...itemOptionWeapon])

  const handleChange = (event: SelectChangeEvent) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleOptionValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: Number(event.target.value),
    }))
  }

  const handleMesoKeep = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMesoKeep(Number(event.target.value))
  }

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      optionTypeFirst: 0,
      optionTypeSecond: 0,
      optionTypeThird: 0,
    }))

    const itemType = form.itemType
    switch (itemType) {
      case 0:
      case 2:
      case 3:
      case 4:
        setItemOption([...itemOptionCommon, ...itemOptionWeapon])
        break
      case 1:
        setItemOption([...itemOptionCommon, ...itemOptionEmblem])
        break
      case 5:
        setItemOption([...itemOptionCommon, ...itemOptionHat])
        break
      case 8:
        setItemOption([...itemOptionCommon, ...itemOptionGlove])
        break
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
        setItemOption([...itemOptionCommon, ...itemOptionAccessory])
        break
      default:
        setItemOption([...itemOptionCommon])
        break
    }
  }, [form.itemType])

  return (
    <main className="flex w-full flex-col justify-center bg-gray-200">
      <Header />
      <SideBar />
      <div className="mx-auto mb-4 mt-24 w-[90vw] text-left text-3xl text-gray-600 sm:w-[800px]">잠재능력 뽑기</div>
      <div className="mx-auto mb-4 w-[90vw] rounded-lg bg-white px-4 py-4 sm:w-[800px]">
        <div className="ml-2 pb-2 text-xl text-blue-400">아이템</div>
        <div className="flex flex-col sm:flex-row">
          <SelectBox
            title="잠재등급"
            selectMenu={rankSelectEdited}
            value={form.rank}
            handle={handleChange}
            name="rank"
          />
          <SelectBox
            title="아이템 종류"
            selectMenu={itemTypeSelect}
            value={form.itemType}
            handle={handleChange}
            name="itemType"
          />
          <SelectBox
            title="아이템 레벨"
            selectMenu={itemLevelSelect}
            value={form.itemLevel}
            handle={handleChange}
            name="itemLevel"
          />
        </div>
        <div className="ml-2 mt-6 pb-2 text-xl text-blue-400">목표 옵션</div>
        <div className="flex items-center">
          <SelectBox
            title="옵션"
            selectMenu={itemOption}
            value={form.optionTypeFirst}
            handle={handleChange}
            name="optionTypeFirst"
          />
          <TextField
            autoComplete="off"
            label=""
            type="number"
            onChange={handleOptionValue}
            helperText={' '}
            value={form.optionTypeFirst === 0 ? 0 : form.optionValueFirst}
            name="optionValueFirst"
          />
        </div>
        <div className="flex items-center">
          <SelectBox
            title="옵션"
            selectMenu={itemOption}
            value={form.optionTypeSecond}
            handle={handleChange}
            name="optionTypeSecond"
          />
          <TextField
            autoComplete="off"
            label=""
            type="number"
            onChange={handleOptionValue}
            helperText={' '}
            value={form.optionTypeFirst === 0 ? 0 : form.optionValueSecond}
            name="optionValueSecond"
          />
        </div>
        <div className="flex items-center">
          <SelectBox
            title="옵션"
            selectMenu={itemOption}
            value={form.optionTypeThird}
            handle={handleChange}
            name="optionTypeThird"
          />
          <TextField
            autoComplete="off"
            label=""
            type="number"
            onChange={handleOptionValue}
            helperText={' '}
            value={form.optionTypeFirst === 0 ? 0 : form.optionValueThird}
            name="optionValueThird"
          />
        </div>
        <div className="ml-2 mt-6 pb-2 text-xl text-blue-400">보유 메소 (선택)</div>
        <TextField
          autoComplete="off"
          label="보유 메소"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">메소</InputAdornment>,
          }}
          onChange={handleMesoKeep}
          helperText={numberToKorean(mesoKeep) + '메소'}
        />
        <button className="mt-5 w-[100%] bg-blue-400 py-2 text-white" onClick={onSubmit}>
          계산하기
        </button>
      </div>
      <ChooseResult />
      <Footer />
    </main>
  )
}

export default Page
