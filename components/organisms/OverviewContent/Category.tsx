import Image from 'next/image'
import React from 'react'

interface CategoryProps {
    title: string,
    spent: string
}

const Category = (props: CategoryProps) => {
    const { title, spent } = props
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image src={`/icon/ic-${title.toLowerCase()}.svg`} height={60} width={60} alt={`icon-${title.toLowerCase()}`} />
          <p className="color-palette-1 mb-0 ms-12">
            {title === 'Other' ? <>Other<br/>Categories</> : <>Game<br />{title}</>}
          </p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">
            {`Rp ${spent}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Category
