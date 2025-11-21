import React from 'react'
import { Link } from 'react-router-dom'

const placeholderComponents = Array.from({ length: 8 }).map((_, i) => ({
  id: `component-${i + 1}`,
  title: `Component ${i + 1}`,
  desc: 'Short description placeholder for this component.',
}))

const ComponentsList = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-4xl font-bold text-white">Components</h2>
          <p className="text-zinc-400 mt-2">Browse available components and open one to view details.</p>
        </div>
        <div>
          <button className="bg-violet-600/30 text-white px-4 py-2 rounded-md">Create component</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {placeholderComponents.map((c) => (
          <Link key={c.id} to={`component/${c.id}`} className="block bg-white/3 p-4 rounded-lg hover:bg-white/5 transition">
            <h3 className="text-xl text-white font-semibold">{c.title}</h3>
            <p className="text-zinc-300 mt-2">{c.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ComponentsList