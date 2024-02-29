import React from 'react'

interface Props {
    params: {
        id: string,
        photoId: string
    }
}

const PhotoPage = ({params:{id, photoId}}: Props) => {
  return (
    <div>
      Photo Page {id} / {photoId}
    </div>
  )
}

export default PhotoPage
