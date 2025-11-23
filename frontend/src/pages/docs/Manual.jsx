import React from 'react'
import DocsContainer from './DocsContainer'

const Manual = () => {
  return (
    <DocsContainer title="Manual Use">
      <p>Use the dashboard if you prefer managing components without the CLI. The dashboard gives category-level control, component uploads, and code access directly through the UI.</p>

      <h2 className="text-2xl text-violet-300 font-medium mt-6">Create Category</h2>
      <p>Open the dashboard → go to Categories → choose <strong>Create Category</strong>. Provide a simple name. Categories hold groups of related components.</p>

      <h2 className="text-2xl text-violet-300 font-medium mt-6">Upload Component</h2>
      <p>Inside any category, use <strong>Upload Component</strong>. Select a <code className="bg-white/5 px-2 py-1 rounded">.jsx</code> file. The file is stored with its name, code, and metadata.</p>

      <h2 className="text-2xl text-violet-300 font-medium mt-6">View Components</h2>
      <p>Each category shows its components. Select one to view:</p>
      <ul>
        <li>component name</li>
        <li>stored code</li>
        <li>version</li>
        <li>update history</li>
      </ul>
      <p>Use this when you want to reference or copy code manually.</p>

      <h2 className="text-2xl text-violet-300 font-medium mt-6">Update Component</h2>
      <p>Pick a component → choose <strong>Update</strong> → upload the new file. This replaces the stored version.</p>

      <h2 className="text-2xl text-violet-300 font-medium mt-6">Copy Code Manually</h2>
      <p>Open the component view → copy the stored code directly. Paste into your project. This is the fallback path when CLI isn’t used.</p>

      <h2 className="text-2xl text-violet-300 font-medium mt-6">Delete Component</h2>
      <p>Select the component → choose <strong>Delete</strong>. Removes only that item, not the category.</p>

      <h2 className="text-2xl text-violet-300 font-medium mt-6">Delete Category</h2>
      <p>Select a category → choose <strong>Delete Category</strong>. All components inside the category are removed.</p>
    </DocsContainer>
  )
}

export default Manual
