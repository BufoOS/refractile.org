import remarkGfm from 'remark-gfm';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const README = require('./README.md')

function PackageReadme(props: any) {
  const [mdText, setMdText] = useState('');

  useEffect(() => {
    fetchMarkdown();
  }, []);

  async function fetchMarkdown() {
    const response = await fetch(README);
    const data = await response.text();
    setMdText(data);
  }

  return (
    <div id="readme">
      <ReactMarkdown
        children={mdText}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                wrapLines={true}
                style={duotoneDark}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
      <div className="divider"></div>
    </div>
  );
}

export default PackageReadme;
