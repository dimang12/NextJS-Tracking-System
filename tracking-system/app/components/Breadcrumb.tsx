import React, { ReactNode } from 'react'

interface BreadcrumbProps {
  title: string,
  children?: ReactNode
}

const Breadcrumb = ({title, children}: BreadcrumbProps) => {
  return (
    <div className='bg-slate-50 shadow-sm border-b px-4 py-3 flex'>
      <h1 className='font-bold  grow'>{title}</h1>
      <div className=''>{children}</div>
    </div>
  )
}

export default Breadcrumb
