import { NextResponse } from 'next/server'

import { connectDB } from '@/app/utils/database'
import { ObjectId } from 'mongodb'

export async function POST(req: Request) {
  const client = await connectDB
  const db = client.db('mapleItem')
  const data = await req.json()
  console.log(data)
  const result = await db.collection('epic_weapon').insertOne(data)
  return NextResponse.json(data)
}
