import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const docs = path.join(root, 'docs')
let html = await readFile(path.join(root, '.next/server/app/index.html'), 'utf8')
// This page is a server-rendered document with native links and no client state.
// Remove framework delivery scripts so the exported version needs no runtime.
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
  .replace(/<link\b[^>]*(?:rel="preload"|rel="modulepreload")[^>]*>/gi, '')
  .replace(/<link\b[^>]*rel="stylesheet"[^>]*>/gi, '')
  .replace(/href="\/icon\.svg"/g, 'href="./icon.svg"')
  .replace(/href="\/john-soliz-resume\.pdf"/g, 'href="./john-soliz-resume.pdf"')
  .replace('</head>', '<link rel="stylesheet" href="./styles.css"/></head>')
  .replace(/<div hidden="">[\s\S]*?<\/div>/g, '')
if (html.includes('/_next/') || /<script\b/i.test(html)) {
  throw new Error('The static export still contains framework runtime references')
}
await mkdir(docs, { recursive: true })
await writeFile(path.join(docs, 'index.html'), html)
await copyFile(path.join(root, 'app/globals.css'), path.join(docs, 'styles.css'))
await copyFile(path.join(root, 'public/icon.svg'), path.join(docs, 'icon.svg'))
await copyFile(path.join(root, 'public/john-soliz-resume.pdf'), path.join(docs, 'john-soliz-resume.pdf'))
await writeFile(path.join(docs, '.nojekyll'), '')
console.log('Static portfolio exported to docs/ with relative asset URLs.')
