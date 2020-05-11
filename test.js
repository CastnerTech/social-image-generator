const execa = require('execa')
const fs = require('fs')

const output = 'test.png'

afterAll(() => {
  try {
    fs.unlinkSync(output)
  } catch (e) {} // file not found or already removed
})

test('sig', async (done) => {
  await execa('./cli.js', [
    '--out',
    output,
    '--text',
    '"test text"',
    '--image',
    'https://images.unsplash.com/photo-1557958114-3d2440207108?w=1950&q=80',
  ])
  stats = fs.statSync(output)
  expect(stats.isFile()).toBe(true)
  done()
})
