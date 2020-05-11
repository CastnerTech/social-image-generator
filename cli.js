#!/usr/bin/env node
const meow = require('meow')
const sig = require('./api')

const cli = meow(
  `
  Usage
    $ sig

  Options
    --text, -t    Text placed over social image card
    --image, -i   URL of image used as background
    --out, -o     Output image path
    --logo, -l    Logo watermark to place on image card

  Examples
    $ sig --text "foo bar" --image "https://i.imgur.com/p8zxy1w" --out image-card.png
`,
  {
    flags: {
      text: {
        type: 'string',
        alias: 't',
        isRequired: true,
      },
      image: {
        type: 'string',
        alias: 'i',
        isRequired: true,
      },
      out: {
        type: 'string',
        alias: 'o',
        isRequired: true,
      },
      logo: {
        type: 'string',
        alias: 'l',
        isRequired: false,
      },
    },
  }
)

;(async () => {
  await sig(cli.flags)
})()
