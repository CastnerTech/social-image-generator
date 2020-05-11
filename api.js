const renderSocialImage = require('puppeteer-social-image').default

module.exports = async function sig({ text, image, out, logo }) {
  return renderSocialImage({
    template: 'basic',
    templateParams: {
      title: text,
      logo: logo,
      imageUrl: image,
    },
    output: out,
    size: 'facebook',
  })
}
