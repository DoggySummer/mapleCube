import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    console.log(123)
  } else {
    console.log(34534534)
  }
  return res.status(200).json
}
