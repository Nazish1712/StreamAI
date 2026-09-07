import React from 'react'

const Comment = ({ data }) => {
  if (!data) return null

  const { name, text, avatar, replies } = data

  return (
    <div className="flex flex-col">
      {/* Main Comment Row */}
      <div className="flex gap-3 items-start py-2">
        <img
          src={avatar}
          alt={name}
          className="w-9 h-9 rounded-full object-cover shrink-0"
        />
        <div className="flex flex-col text-sm">
          <span className="font-semibold text-gray-900 text-left">@{name}</span>
          <p className="text-gray-800 text-left mt-0.5">{text}</p>
        </div>
      </div>

      {/* Recursive Render for Nested Replies */}
      {replies && replies.length > 0 && (
        <div className="pl-6 ml-4 border-l-2 border-gray-200 flex flex-col gap-2">
          {replies.map((reply) => (
            <Comment key={reply.id} data={reply} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Comment