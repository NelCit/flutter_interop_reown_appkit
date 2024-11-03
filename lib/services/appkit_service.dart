import 'dart:async';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

abstract class AppKitService {
  Future<void> initialize();

  void openAppKitModal();

  void closeAppKitModal();

  Future<void> setController(InAppWebViewController controller);

  Future<bool> isConnected();

  Future<String> getAddress();

  Future<String> getUSDTBalance();

  void sendCustomMessage(String message);

  Stream<Map<String, dynamic>> get messageStream;

  void dispose();
}
