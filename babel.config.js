module.exports = {
  env: {
    testing: { // matches the `NODE_ENV=testing` in "test" script in package.json
      plugins: [
        '@babel/plugin-transform-runtime',
      ],
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            debug: false
          }
        ]
      ]
    }
  }
};
