import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
const README = require('../refractile/README.md')

function PackageReadme(props: any) {
  const [mdText, setMdText] = useState('')

  useEffect(() => {
    fetchMarkdown()
  }, [])

  async function fetchMarkdown() {
    const response = await fetch(README)
    const data = await response.text()
    setMdText(data)
  }

  return (
    <div id="readme">
      <Markdown children={mdText} options={{}} />
    </div>
  )
}

export default PackageReadme