interface ReachedItemProps {
    value: string
    title: string
    className?: string
}

const ReachedItem = (props: Partial<ReachedItemProps>) => {
    const { value, title, className } = props
  return (
    <div className={`me-lg-35 ${className}`}>
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{value}</p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">{title}</p>
    </div>
  )
}

export default ReachedItem
