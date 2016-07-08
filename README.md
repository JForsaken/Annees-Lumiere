# Années-Lumière Frontend :stars:

The standalone React-Redux frontend platform for the Années-Lumière project.

## Development

```bash
$ npm install
$ npm start
```
*Années-Lumière* will now be running at http://localhost:3001.

### I18n support

All messages in this website are localized and rendered using `react-intl@2.0`.

There is also a [babel plugin](https://github.com/yahoo/babel-plugin-react-intl) to extract all the default messages into `./_translations/src` to be provided to translators.

```bash
$ npm run build:i18n
```

You can also run a script to extract all those translations as key-value.

```bash
$ npm run build:i18n:langs
```


#### Thanks

- [Redux](https://github.com/gaearon/redux) for the _Atomic Flux_ architecture.
- [React](https://github.com/facebook/react) for all the goodness.
- [React-Router](https://github.com/rackt/react-router) for the other goodness.
- [React-Transform](https://github.com/gaearon/react-transform-boilerplate) for development fun (and productivity).
- [Webpack](https://github.com/webpack/webpack) for keeping everything together.

#### Credits

- Justin D'Errico
- Laurent Ayoub


