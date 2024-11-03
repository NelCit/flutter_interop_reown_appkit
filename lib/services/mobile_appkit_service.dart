import 'dart:async';
import 'dart:convert';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'appkit_service.dart';

class MobileAppKitService implements AppKitService {
  late InAppWebViewController _webViewController;
  final Completer<void> _initializationCompleter = Completer<void>();
  bool _isDisposed = false;

  final StreamController<Map<String, dynamic>> _eventController;
  MobileAppKitService(this._eventController);

  @override
  Future<void> initialize() async {
  }

  @override
  Future<void> setController(InAppWebViewController webviewController) async {
    if (_isDisposed) return;
    _webViewController = webviewController;

    var result = await _webViewController.injectJavascriptFileFromAsset(assetFilePath: "assets/web3/js/appkit.bundle.js");

    _webViewController.addJavaScriptHandler(handlerName: 'broadcastEvents', callback: (args) {
      
      _eventController.add(args[0]);

    });

    _initializationCompleter.complete();
  }

  @override
  void openAppKitModal() {
    _webViewController.evaluateJavascript(source: 'AppKit_openModal();');
  }

  @override
  void closeAppKitModal() {
    _webViewController.evaluateJavascript(source: 'AppKit_closeModal();');
  }

  @override
  Future<bool> isConnected() async {
    try {
      await _initializationCompleter.future;
      var result = await _webViewController.evaluateJavascript(
          source: 'AppKit_isConnected();');
      return result.toString() == 'true';
    } catch (e) {
      print('Error checking connection: $e');
      return false;
    }
  }

  @override
  Future<String> getAddress() async {
    try {
      await _initializationCompleter.future;
      var result = await _webViewController.evaluateJavascript(
          source: 'AppKit_getAddress();');
      return result.toString();
    } catch (e) {
      print('Error getting address: $e');
      return '';
    }
  }

  @override
  Future<String> getUSDTBalance() async {
    try {
      await _initializationCompleter.future;
      var result = await _webViewController.callAsyncJavaScript(
          functionBody: 'return await AppKit_getUSDTBalance();');
      return result?.value.toString() ?? "0.0";
    } catch (e) {
      print('Error fetching USDT balance: $e');
      return '0.0';
    }
  }

  @override
  void sendCustomMessage(String message) {
    final messageJson = jsonEncode({'customMessage': message});
    _webViewController.evaluateJavascript(
        source: 'sendMessageToFlutter($messageJson);');
  }

  @override
  Stream<Map<String, dynamic>> get messageStream => _eventController.stream;

  @override
  void dispose() {
    _isDisposed = true;
    _eventController.close();
  }
}

AppKitService getAppkitService(StreamController<Map<String, dynamic>> eventController) =>
    MobileAppKitService(eventController);