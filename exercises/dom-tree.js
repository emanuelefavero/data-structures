// * DOM Tree

// This is a simple tree-like data structure that represents a DOM tree, mimicking the structure of a web page.

class Node {
  constructor(type) {
    this.type = type // 'element' || 'text'
    this.parent = null
  }
}

class ElementNode extends Node {
  constructor(tagName) {
    super('element')
    this.tagName = tagName
    this.attributes = {}
    this.children = []
  }

  setAttribute(key, value) {
    this.attributes[key] = value
  }

  appendChild(child) {
    child.parent = this
    this.children.push(child)
  }

  // Method to convert the node and its children to a string representation that resembles HTML
  toString(indent = 0) {
    const pad = '  '.repeat(indent)
    let attrs = Object.entries(this.attributes)
      .map(([k, v]) => `${k}="${v}"`)
      .join(' ')
    attrs = attrs ? ' ' + attrs : ''
    let str = `${pad}<${this.tagName}${attrs}>\n`
    for (const child of this.children) {
      str += child.toString(indent + 1)
    }
    str += `${pad}</${this.tagName}>\n`
    return str
  }
}

class TextNode extends Node {
  constructor(text) {
    super('text')
    this.text = text
  }

  toString(indent = 0) {
    const pad = '  '.repeat(indent)
    return `${pad}${this.text}\n`
  }
}

// -------------------

const root = new ElementNode('html')
const body = new ElementNode('body')
const div = new ElementNode('div')
const p = new ElementNode('p')
const text = new TextNode('Hello, world!')

div.setAttribute('class', 'container')

root.appendChild(body)
body.appendChild(div)
div.appendChild(p)
p.appendChild(text)

console.log(root.toString())
