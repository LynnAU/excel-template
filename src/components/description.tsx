import { cl } from '@/utils'
import { Description as DESCRIPTION } from '@headlessui/react'

export function Description(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <DESCRIPTION
      {...props}
      className={cl(
        props.className ?? '',
        'xs:text-sm/6',
        'md:text-lg/7',
        'lg:text-xl/8',
        // 'lg:max-w-[70%]',
        'text-white/50',
      )}
    >
      {props.children}
    </DESCRIPTION>
  )
}
