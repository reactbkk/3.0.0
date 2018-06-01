/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import { renderStylesToString } from 'emotion-server'

const WEB_FONT_LOADER = `
WebFontConfig = {
  // google: { families: [ 'Montserrat:300,400,600' ] }
  custom: {
    families: ['Metropolis']
  }
};

(function(d) {
  var wf = d.createElement('script'), s = d.scripts[0];
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
  wf.async = true;
  s.parentNode.insertBefore(wf, s);
})(document);
`

export default {
  siteRoot: 'https://reactbkk.com',
  basePath: '3.0.0',
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
  renderToHtml: async (render, Comp, meta) => {
    const html = renderStylesToString(render(<Comp />))
    return html
  },
  Document: class CustomDocument extends Component {
    render () {
      const {
        Html, Head, Body, children /* renderMeta, */ } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script dangerouslySetInnerHTML={{ __html: WEB_FONT_LOADER }} />
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
