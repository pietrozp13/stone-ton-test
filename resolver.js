module.exports = (path, options) => {
  // Call the defaultResolver, so we leverage its cache, error handling, etc.
  return options.defaultResolver(path, {
    ...options,
    // Use packageFilter to process parsed `package.json` before the resolution (see https://www.npmjs.com/package/resolve#resolveid-opts-cb)
    packageFilter: pkg => {
      return {
        ...pkg,
        // Alter the value of `main` before resolving the package
        'react-dom': 'index.native.modern.js',
      };
    },
  });
  const ReactDom = {
    render: jest.fn(),
  };
};
