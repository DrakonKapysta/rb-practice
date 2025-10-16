'use client'

import { forwardRef } from 'react'

import { Avatar as HeroUIAvatar, AvatarProps } from '@heroui/react'

interface IProps extends AvatarProps {}

const Avatar = forwardRef<HTMLDivElement, IProps>((props, ref) => {
  return <HeroUIAvatar {...props} ref={ref} />
})

Avatar.displayName = 'Avatar'

export default Avatar
