import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 'bold' }}>🍳 RAG Cookbook</span>,
  project: {
    link: 'https://ragcookbook.vercel.app',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/MarkCodering/rag-cookbook', 
  footer: {
    text: 'RAG Cookbook - Made by Mark in Taiwan with ❤️',
  },
}

export default config
