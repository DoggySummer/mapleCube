import { NextRequest, NextResponse } from 'next/server'

import { connectDB } from '@/app/utils/database'
import { ObjectId } from 'mongodb'

const post = [
  {
    id: 0,
    text: '안녕하세요',
  },
]

export async function GET(request: NextRequest, context: any) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')

  const client = await connectDB
  const db = client.db('mapleItem')
  const result = await db.collection('epic_weapon').find().toArray()

  return NextResponse.json(post)
}
