'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
    fill="currentColor"
    viewBox="0 0 768 768"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-12 w-12', className)}
    {...props}
  >
    <image href="https://imagizer.imageshack.com/v2/800x600q70/923/qdSAGE.png" x="0" y="0" width="768" height="768" />
  </svg>
  )
}

export { IconLogo }
