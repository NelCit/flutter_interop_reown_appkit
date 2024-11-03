# appkit_interop_flutter

A Flutter project that wraps the JavaScript version of AppKit (WalletConnect).

## Why?

The official Flutter AppKit library has a significant limitation: it doesn’t work on web platforms. This project provides a solution that is compatible with the web. Additionally, the official Flutter AppKit library often encounters compatibility issues due to outdated dependencies when integrated with other modules. 

Since AppKit was initially developed for React and JavaScript, wrapping it in Flutter allows us to take advantage of the latest features as they’re released. For example, this wrapper includes swap functionality, which is not yet available in the official Flutter AppKit that is still under development.

**Note**: This wrapper has only been tested on Windows web and Android devices. It hasn’t been tested on iOS web or native iOS apps.

## JavaScript

A simple example demonstrating the use of JavaScript interoperability with AppKit can be found in `js/index.js`. This example is based on the official AppKit tutorial and can be extended with custom implementations.

Ensure that you use your own reown projectId

The JavaScript code is bundled using Webpack, including all required `node_modules`, into a single file located at `assets/web3/js/appkit.bundle.js`.

To bundle the script:

```sh
cd js
npm run build
```

This bundled script loads in a WebView for Android and iOS and directly in web/index.html for web applications.

## Flutter

The Flutter application provides basic functionality to connect to a wallet and check your USDT balance. It serves as a proof of concept to validate the interoperability between Flutter and JavaScript.

## Note

Feel free to use, it to fork it, to enhance it as you please.

## Appkit Reown

You can have more information there : https://docs.reown.com/appkit/javascript/core/installation