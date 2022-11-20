import React from 'react'
import { Notification } from '../../components/Notification/Notification'
import UserAngela from '../../assets/images/avatar-angela-gray.webp'
import UserJacob from '../../assets/images/avatar-jacob-thompson.webp'
import UserRizky from '../../assets/images/avatar-rizky-hasanuddin.webp'
import UserKimberly from '../../assets/images/avatar-kimberly-smith.webp'
import Picture from '../../assets/images/image-chess.webp'
import UserNathan from '../../assets/images/avatar-nathan-peterson.webp'
import UserAnna from '../../assets/images/avatar-anna-kim.webp'

export const AllNotifications = () => {
  return (
    <div className='flex flex-col gap-2'>
      <Notification
        user='Mark Webber'
        action='reacted to your recent post'
        post='My first tournament today!'
        time='1m ago'
        neww
        />
      <Notification
        img={UserAngela}
        user='Angela Gray'
        action='followed you'
        time='5m ago'
        neww
        />
      <Notification
        img={UserJacob}
        user='Jacob Thompson'
        action='has joined your group'
        post='Chess Club'
        time='1d ago'
        neww
      />

      <Notification 
        img={UserRizky}
        user='Rizky Hasanuddin'
        action='sent you a private message'
        time='5d ago'
        message
      />
      <Notification 
        img={UserKimberly}
        user='Kimberly Smith'
        action='commented on your picture'
        time='1w ago'
        picture={Picture}
      />

      <Notification 
        img={UserNathan}
        user='Nathan Peterson'
        action='reacted to your recent post'
        post='5 end-game strategies to increase your win rate'
        time='2w ago'
      />

      <Notification
        img={UserAnna}
        user='Anna Kim'
        action='left the group'
        post='Chess Club'
        time='2w ago'
      />


    </div>
  )
}
