import React from 'react'

const TicketCard = () => {
  return (
    <div className="w-full h-72 mt-5 bg-blue-200 flex flex-col justify-between rounded-lg">
        <div className="w-full h-20 bg-red-200 rounded-t-lg ">
          <h1>top</h1>
        </div>
      <div className="h-full">
        <h1>mid</h1>
      </div>
        <div className="w-full h-20 bg-red-200 rounded-b-lg ">
          <h1>bottom</h1>
        </div>
      </div>
  )
}

export default TicketCard
