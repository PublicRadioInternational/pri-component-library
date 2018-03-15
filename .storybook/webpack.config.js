module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('postcss-mixins'),
                require('autoprefixer')
              ]
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }
    ]
  }
};
