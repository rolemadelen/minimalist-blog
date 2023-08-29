/* eslint-disable react/prop-types */
import React from 'react'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { CodeComponent } from 'react-markdown/lib/ast-to-react'

interface PreviewProps {
  markdown: string
}

interface CodeRendererProps {
  inline: boolean
  className: string
  children: React.ReactNode
}

const Preview: React.FC<PreviewProps> = ({ markdown }) => {
  const codeRenderer: React.FC<CodeRendererProps> = ({
    inline,
    className,
    children,
    ...props
  }) => {
    const match = /language-(\w+)/.exec(className || '')

    return !inline && match ? (
      <SyntaxHighlighter
        style={vs}
        language={match[1]}
        showLineNumbers={false}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{ code: codeRenderer }}
    >
      {markdown}
    </ReactMarkdown>
  )
}

export default Preview
