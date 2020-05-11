const renderSocialImage = require('puppeteer-social-image').default

module.exports = async function sig({ title, image, out, logo }) {
  return renderSocialImage({
    template: 'basic',
    templateParams: {
      title: title,
      logo: logo,
      imageUrl: image,
    },
    output: out,
    size: 'facebook',
  })
}
