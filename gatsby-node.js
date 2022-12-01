exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /commentbox.io/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}