import React from 'react'
import DocsContainer from './DocsContainer'

const Intro = () => {
  return (
    <DocsContainer title="Introduction">
      <p className="text-white text-lg">
        Composter is a personal vault for storing reusable React UI components. Save components once, then retrieve them across projects via the CLI or the dashboard.
      </p>

      <h2 className="text-2xl text-violet-300 font-medium mt-6">Dashboard</h2>
      <p>Create categories, upload component bundles, edit metadata, and preview examples in a web UI.</p>

      <h2 className="text-2xl text-violet-300 font-medium mt-6">CLI</h2>
      <p>Terminal commands for pushing, pulling, updating, listing, and syncing components.</p>

      <hr />

      <h2 className="text-3xl text-violet-300 font-semibold mt-8">Why It Exists</h2>
      <p>
        Developers commonly rewrite components or hunt through old repos. Composter centralizes components, versioning, and metadata so teams and individuals can reuse code reliably.
      </p>

      <hr />

      <h2 className="text-3xl text-violet-300 font-semibold mt-8">How It Works</h2>
      <ol className="list-decimal list-inside">
        <li>Create a category to group related components.</li>
        <li>Push component bundles (code + metadata + preview) to the vault.</li>
        <li>Pull components by <code className="bg-white/5 px-1 rounded">name@version</code> into any project.</li>
      </ol>

      <hr />

      <h2 className="text-3xl text-violet-300 font-semibold mt-8">What's Next</h2>
      <p>This documentation covers:</p>
      <ul>
        <li>Installation</li>
        <li>CLI commands</li>
        <li>Manual usage (dashboard)</li>
        <li>Best practices</li>
      </ul>

      <p className="text-zinc-400">This page gives a concise overview so you know what Composter is and how to start using it.</p>
    </DocsContainer>
  )
}

export default Intro
