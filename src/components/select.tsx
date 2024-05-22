import { Select as SELECT } from '@headlessui/react'
import { cl } from '@/utils'

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <SELECT
      {...props}
      className={cl(
        props.className ?? '',
        'w-full',
        'appearance-none',
        'rounded-lg',
        'border-none',
        'bg-white/5',
        'py-1.5',
        'px-3',
        'xs:text-sm/6',
        'md:text-lg/7',
        'lg:text-xl/8',
        'text-white',
        'focus:outline-none',
        'data-[focus]:outline-2',
        'data-[focus]:-outline-offset-2',
        'data-[focus]:outline-white/25',
      )}
    >
      {props.children}
    </SELECT>
  )
}
