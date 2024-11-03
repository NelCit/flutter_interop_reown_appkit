// lib/services/web_appkit_service.dart

import 'dart:async';
import 'dart:convert';
import 'dart:html' as html;
import 'dart:js' as js;
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:js/js.dart';
import 'package:js/js_util.dart';
import 'appkit_service.dart';

// declare there all async values, because async can not use js.context.callMethod
@JS('AppKit_getUSDTBalance')
external dynamic AppKit_getUSDTBalance();



class WebAppKitService implements AppKitService {
  final StreamController<Map<String, dynamic>> _eventController;

  late StreamSubscription<html.MessageEvent> _subscription;
  bool _isDisposed = false;

  WebAppKitService(this._eventController);
  @override
  Future<void> initialize() async {
    _subscription = html.window.onMessage.listen((event) {
      if (event.origin == html.window.location.origin) {
        try {
          final message = jsonDecode(event.data as String);
          _eventController.add(message);
        } catch (e) {
          print('Error decoding message: $e');
        }
      }
    });
  }

  @override
  void openAppKitModal() {
    js.context.callMethod('AppKit_openModal');
  }

  @override
  void closeAppKitModal() {
    js.context.callMethod('AppKit_closeModal');
  }

  @override
  Future<bool> isConnected() async {
    try {
      final connected = js.context.callMethod('AppKit_isConnected');
      return connected as bool? ?? false;
    } catch (e) {
      print('Error checking connection: $e');
      return false;
    }
  }

  @override
  Future<String> getAddress() async {
    try {
      final address = js.context.callMethod('AppKit_getAddress');
      return address as String? ?? '';
    } catch (e) {
      print('Error getting address: $e');
      return '';
    }
  }

  @override
  Future<String> getUSDTBalance() async {
    try {
      dynamic result = await promiseToFuture(AppKit_getUSDTBalance());
      return result;
    } catch (e) {
      print('Error fetching USDT balance: $e');
      return '0.0';
    }
  }

  @override
  void sendCustomMessage(String message) {
    final messageJson = jsonEncode({'customMessage': message});
    js.context.callMethod('sendMessageToFlutter', [messageJson]);
  }

  @override
  Stream<Map<String, dynamic>> get messageStream => _eventController.stream;

  @override
  void dispose() {
    _subscription.cancel();
    _eventController.close();
    _isDisposed = true;
  }

  @override
  bool get isDisposed => _isDisposed;
  
  @override
  Future<void> setController(InAppWebViewController controller) {
    throw UnimplementedError();
  }
}
AppKitService getAppkitService(StreamController<Map<String, dynamic>> eventController) =>
    WebAppKitService(eventController);
