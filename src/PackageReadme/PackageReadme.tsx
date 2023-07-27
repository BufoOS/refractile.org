import './prism.css';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Prism from 'prismjs';
const README = require('../refractile/README.md');

function PackageReadme(props: any) {
  const [mdText, setMdText] = useState('');

  useEffect(() => {
    fetchMarkdown();
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  async function fetchMarkdown() {
    const response = await fetch(README);
    const data = await response.text();
    setMdText(data);
  }

  return (
    <div id="readme">
      <ReactMarkdown children={mdText} remarkPlugins={[remarkGfm]} />
      <div className="divider"></div>
    </div>
  );
}

export default PackageReadme;
