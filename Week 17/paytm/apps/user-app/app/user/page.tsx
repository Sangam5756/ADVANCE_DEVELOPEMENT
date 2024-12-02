"use client"
import { useBalance } from '@repo/store/useBalance'
import React from 'react'

const page = () => {
    const balance = useBalance();
    console.log(balance)
  return (
    <div>page</div>
  )
}

export default page