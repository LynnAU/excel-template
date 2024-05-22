import { cl } from '@/utils'
import { Label as LABEL } from '@headlessui/react'

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <LABEL
      {...props}
      className={cl(
        props.className ?? '',
        'font-medium',
        'text-white',
        'xs:text-sm/6',
        'md:text-lg/7',
        'lg:text-xl/8',
      )}
    >
      {props.children}
    </LABEL>
  )
}
