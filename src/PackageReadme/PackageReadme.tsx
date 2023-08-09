import remarkGfm from 'remark-gfm';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// const README = require('./README.md')

function PackageReadme(props: any) {
  const [mdText, setMdText] = useState('');

  useEffect(() => {
    fetchMarkdown();
  }, []);

  async function fetchMarkdown() {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/oslabs-beta/refractile/main/README.md'
      );
      const data = await response.text();
      setMdText(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div id="readme">
      <ReactMarkdown
        className="whitespace-pre-wrap"
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
