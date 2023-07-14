import { ReactNode } from 'react'

interface CardProps {
  title: string;
  icon: ReactNode

}

export default function Card({ title, icon }: CardProps) {
  return (
    <div className='py-10 flex flex-col justify-start items-center gap-4 lg:px-10'>
      {icon}
      <h1 className='font-bold text-xl text-center'>{title}</h1>
    </div>
  )
}
