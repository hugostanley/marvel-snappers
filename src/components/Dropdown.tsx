import { ReactNode } from "react";
import { IDropdown } from "../App";
import { FaChevronDown } from 'react-icons/fa'

interface DropdownProps {
  index: number;
  question: string;
  answer: string | ReactNode;
  handleClick: (idx: number) => void;
  state: IDropdown;
}

export default function Dropdown({ state, question, answer, handleClick, index }: DropdownProps) {
  return (
    <div className='w-full lg:w-[75%] bg-white shadow-lg border border-purple py-10 rounded-xl flex flex-col px-10 justify-between gap-2 cursor-pointer' onClick={() => handleClick(index)}>
      <div className='flex justify-between w-full items-center gap-6'>
        <p className='text-xl font-bold text-purple'>{question}</p>
        <FaChevronDown className={`cursor-pointer text-purple ${state.idx === index && state.isOpen ? 'open' : 'close'}`} />
      </div>
      {state.isOpen && state.idx === index && (
        <p className='text-sm text-gray-700'>{answer}</p>
      )}
    </div>


  )
}
