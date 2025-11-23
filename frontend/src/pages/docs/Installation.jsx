import React from 'react'
import DocsContainer from './DocsContainer'

const Installation = () => {
  return (
    <DocsContainer title="Installation">
      <p>To install the Composter CLI on your system, use:</p>

      <pre className="bg-white/5 p-3 rounded text-sm text-zinc-100">{`npm install -g composter`}</pre>

      <p>Verify the installation:</p>

      <pre className="bg-white/5 p-3 rounded text-sm text-zinc-100">{`composter --version`}</pre>

      <p>The CLI is now ready to use in any project.</p>
    </DocsContainer>
  )
}

export default Installation
