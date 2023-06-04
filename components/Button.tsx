'use client'

import { IconType } from "react-icons"

interface ButtonProps {
    lable : string,
    onClick : (e:React.MouseEvent<HTMLButtonElement>) => void,
    black?:boolean,
    red?:boolean,
    icon?:IconType,

}

export default function Button({black,red,onClick,lable,icon:Icon}:ButtonProps) {
  return (
    <button onClick={onClick} className= {`flex justify-center p-4 gap-4 border-2  rounded-full px-10 transition  ${black ? 'bg-black text-white hover:bg-green-500' :red? 'hover:bg-red-500' :'bg-gray-100 text-black'  }`}>
        {lable}
        {Icon && (
            <Icon
                size = {28}
            />)}
    </button>
  )
}
