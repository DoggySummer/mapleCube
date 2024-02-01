import { NextResponse } from 'next/server'

import { connectDB } from '@/app/utils/database'
import { ObjectId } from 'mongodb'

export async function POST(req: Request) {
  const client = await connectDB
  const db = client.db('mapleItem')
  const data = await req.json()
  const collectionNameBefore = data.rank + '_' + data.item
  const collectionNameAfter = data.item + '_' + data.rank

  const dataList = await db.collection(collectionNameBefore).rename(collectionNameAfter)
  // console.log(body)
  return NextResponse.json(dataList)
}

export async function GET(req: Request) {
  const client = await connectDB
  const db = client.db('mapleItem')

  const dataList = await db.collection('unique_weapon').find({ optionName: 'STR : +6%' }).toArray()
  return NextResponse.json(dataList)
}
