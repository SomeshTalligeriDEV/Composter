import React from 'react'

const DocsContainer = ({ title, children }) => {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-8">
        <article className="prose prose-invert lg:prose-lg text-zinc-300 max-w-none space-y-8 leading-relaxed">
          {title && <h1 className="text-4xl text-violet-300 font-semibold mb-2">{title}</h1>}
          {children}
        </article>
      </div>
    </div>
  )
}

export default DocsContainer
