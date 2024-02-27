import { NextRequest, NextResponse } from 'next/server'

import { connectDB } from '@/app/utils/database'
import { ObjectId } from 'mongodb'
import { itemTypeSelect, rankSelect } from '@/app/constant'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  const itemLevel = searchParams.get('itemlevel')
  const isEthe = itemLevel === '3' ? 'Ethe' : ''

  const rankNumber = searchParams.get('rank')
  const rank = rankSelect[Number(rankNumber)].eng

  const itemTypeNumber = searchParams.get('itemtype')
  const itemType = itemTypeSelect[Number(itemTypeNumber)].eng

  const optionTypeFirst = searchParams.get('itemfirst')
  const optionTypeSecond = searchParams.get('itemsecond')
  const optionTypeThird = searchParams.get('itemthird')

  const client = await connectDB
  const db = client.db('mapleItem')
  const dataFromMongo = await db
    .collection(itemType + isEthe + '_' + rank)
    .find()
    .toArray()

  const filteredItem = dataFromMongo.filter(
    (item) =>
      item.optionType === optionTypeFirst ||
      item.optionType === optionTypeSecond ||
      item.optionType === optionTypeThird,
  )

  const tempItem = dataFromMongo.filter((item) => item)

  return NextResponse.json(filteredItem)
}
