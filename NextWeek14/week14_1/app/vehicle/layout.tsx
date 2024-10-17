import React from 'react'

const layout = ({children} : {
    children:React.ReactNode
}) => {
  return (
    <div>
        <div>
            Hi this custome layour
        </div>
        {children}
    </div>
  )
}

export default layout