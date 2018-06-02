import React from 'react'
import favicon from './favicon.png'

const WEB_FONT_LOADER = `
WebFontConfig = {
  // google: { families: [ 'Montserrat:300,400,600' ] }
  custom: {
    families: ['Metropolis']
  },
  monotype: {
    projectId: '38a2f0dd-bef3-4c2f-9b6f-215296f9d856',
    loadAllFonts: true
  }
};

(function(d) {
  var wf = d.createElement('script'), s = d.scripts[0];
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
  wf.async = true;
  s.parentNode.insertBefore(wf, s);
})(document);
`

export default class HTML extends React.Component {
  render () {
    return (
      <html lang="th" {...this.props.htmlAttributes}>
        <head>
          <script dangerouslySetInnerHTML={{ __html: WEB_FONT_LOADER }} />
          {this.props.headComponents}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" type="image/png" href={favicon} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, viewport-fit=cover"
          />
        </head>
        <body {...this.props.bodyAttributes}>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
