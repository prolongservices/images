import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <html {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      
      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
    {props.preBodyComponents}
    <div
      key={`body`}
      id="___gatsby"
      dangerouslySetInnerHTML={{__html: props.body}}
    />
    {props.postBodyComponents}
    <div id="url">{url}</div>
    {/*<script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=6390e2894c319700156560d0&product=inline-share-buttons' async='async'></script>*/}
    
    </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}