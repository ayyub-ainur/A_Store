import cx from 'classnames'
import Image from 'next/image'
import React from 'react'

interface MenuItemProps {
  title: string,
  active?: boolean,
}

const MenuItem = (props: Partial<MenuItemProps>) => {
  const { title, active } = props
  const classItem = cx({
    'item' : true,
    'mb-30': true,
    active,
  })
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image
          src={`/icon/menu-${title?.toLowerCase().replace(/\s/g, '')}.svg`}
          height={25}
          width={25}
          alt={`menu-${title?.toLowerCase().replace(/\s/g, '')}`}
        />
      </div>
      <p className="item-title m-0">
        <a href="" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  )
}

export default MenuItem
