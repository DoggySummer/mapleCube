import { NextResponse } from 'next/server'

import { connectDB } from '@/app/utils/database'
import { ObjectId } from 'mongodb'

export async function POST(req: Request) {
  const client = await connectDB
  const db = client.db('mapleItem')
  const data = await req.json()
  const collectionName = data.rank + '_' + data.item

  const dataList = await db.collection(collectionName).find({ optionName: 'STR : +6%' }).toArray()
  const body = { ...dataList }
  console.log(body)
  return NextResponse.json(body)
}

export async function GET(req: Request) {
  const client = await connectDB
  const db = client.db('mapleItem')

  const dataList = await db.collection('unique_weapon').find({ optionName: 'STR : +6%' }).toArray()
  return NextResponse.json(dataList)
}
