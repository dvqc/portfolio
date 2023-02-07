module.exports = {
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
      {
        files: '*.astro',
        options: {
          parser: 'astro',
            "semi": true,
            "singleQuote": false,
            "trailingComma": "none",
            "printWidth": 120
        },
      },
    ],
}