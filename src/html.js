import React from 'react'
import favicon from './favicon.png'

export default class HTML extends React.Component {
  render () {
    return (
      <html lang="th" {...this.props.htmlAttributes}>
        <head>
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
