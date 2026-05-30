import React from 'react';

/**
 * Renders a JSON-LD structured data block directly in the component tree.
 * Placing JSON-LD in the body is valid per the spec and avoids react-helmet-async
 * script-children edge cases that can disrupt navigation in some runtime versions.
 */
const JsonLd: React.FC<{ schema: string }> = ({ schema }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: schema }}
  />
);

export default JsonLd;
