import React from 'react'

interface Props {
    params: {
        slug: string[]
    },
    searchParams: {
        sortOrder: string
    }
}

const ProjectPage = ({params: {slug}, searchParams: {sortOrder}}: Props) => {
  return (
    <div>
      Product Page: {slug} {sortOrder}
    </div>
  )
}

export default ProjectPage
