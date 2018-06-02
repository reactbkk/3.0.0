const { renderToString } = require('react-dom/server')
const { renderStylesToString } = require('emotion-server')

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  replaceBodyHTMLString(renderStylesToString(renderToString(bodyComponent)))
}
