import { NextRequest, NextResponse } from 'next/server'

import { connectDB } from '@/app/utils/database'
import { ObjectId } from 'mongodb'

export async function GET(request: NextRequest, context: any) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')

  const client = await connectDB
  const db = client.db('mapleItem')
  const result = await db.collection('epic_weapon').find().toArray()

  return NextResponse.json(result)
}
