import React from 'react'
import DocsContainer from './DocsContainer'

const CLI = () => {
  return (
    <DocsContainer title="CLI">
      <p>The Composter CLI lets you manage categories and components from the terminal. It supports creating categories, pushing components, pulling components, listing items, and updating stored files.</p>

      <h2 className="text-2xl text-violet-300 font-medium mt-6">Login</h2>
      <pre className="bg-white/5 p-3 rounded text-sm text-zinc-100">{`composter login`}</pre>
      <p>Stores your token locally for all future commands.</p>

      <h2 className="text-2xl text-violet-300 font-medium mt-6">Create Category</h2>
      <pre className="bg-white/5 p-3 rounded text-sm text-zinc-100">{`composter mkcat <category-name>`}</pre>
      <pre className="bg-white/5 p-3 rounded text-sm text-zinc-100">{`composter mkcat buttons`}</pre>

      <h2 className="text-2xl text-violet-300 font-medium mt-6">Push Component</h2>
      <pre className="bg-white/5 p-3 rounded text-sm text-zinc-100">{`composter push <category> <file-path>`}</pre>
      <pre className="bg-white/5 p-3 rounded text-sm text-zinc-100">{`composter push cards src/components/ProfileCard.jsx`}</pre>

      <h2 className="text-2xl text-violet-300 font-medium mt-6">Pull Component</h2>
      <pre className="bg-white/5 p-3 rounded text-sm text-zinc-100">{`composter pull <category> <component-name>`}</pre>
      <p>Pulled files are placed inside a local <code className="bg-white/5 px-2 py-1 rounded">composter/</code> folder.</p>

      <h2 className="text-2xl text-violet-300 font-medium mt-6">List Components</h2>
      <pre className="bg-white/5 p-3 rounded text-sm text-zinc-100">{`composter list <category>`}</pre>

      <h2 className="text-2xl text-violet-300 font-medium mt-6">Update Component</h2>
      <pre className="bg-white/5 p-3 rounded text-sm text-zinc-100">{`composter update <category> <file-path>`}</pre>

      <h2 className="text-2xl text-violet-300 font-medium mt-6">Logout</h2>
      <pre className="bg-white/5 p-3 rounded text-sm text-zinc-100">{`composter logout`}</pre>
    </DocsContainer>
  )
}

export default CLI
