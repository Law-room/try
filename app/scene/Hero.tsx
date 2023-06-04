'use client'
import Button from '@/components/Button'
import React from 'react'
import {BsFillArrowRightCircleFill} from "react-icons/bs"

export default function Hero() {
  return (
    <div>
        <div className='flex-col flex items-center h-[88vh] '>
            <div>
                <h1>
                    <span>freelance</span>
                    <span>Web Designer</span>
                    <span>&</span>
                    <span>Digital Creater</span>
                </h1>
            </div>
            <div>
                <Button 
                onClick={()=>{}} 
                lable='get in touch' 
                icon={BsFillArrowRightCircleFill} 
               black  />
            </div>
        </div>
    </div>
  )
}
