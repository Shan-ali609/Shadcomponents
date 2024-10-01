import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='py-6 border-t-2 px-11 text-gray-400'>
      <p>Built by <Link href=" " className='text-gray-500 underline underline-offset-8'>shadcn</Link> . The source code is available on <Link href="" className='text-gray-500 underline underline-offset-8'>GitHub</Link> .</p>
    </div>
  )
}
