import { Button as BUTTON } from '@headlessui/react'
import { cl } from '@/utils'

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <BUTTON
      {...props}
      className={cl(
        props.className ?? '',
        'inline-flex',
        'items-center',
        'gap-2',
        'rounded-md',
        'bg-gray-700',
        'py-1.5',
        'px-3',
        'xs:text-sm/6',
        'md:text-lg/7',
        'lg:text-xl/8',
        'font-semibold',
        'text-white',
        // 'shadow-inner',
        // 'shadow-white/10',
        'focus:outline-none',
        'data-[hover]:bg-gray-600',
        'data-[open]:bg-gray-700',
        'data-[focus]:outline-1',
        'data-[focus]:outline-white',
      )}
    >
      {props.children}
    </BUTTON>
  )
}
