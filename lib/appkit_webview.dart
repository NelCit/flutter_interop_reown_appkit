import 'dart:async';
import 'dart:io';
import 'dart:convert';
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart' as path;
import 'package:url_launcher/url_launcher.dart';

import 'services/appkit_service.dart';
import 'services/mobile_appkit_service.dart'
    if (dart.library.html) 'services/web_appkit_service.dart';

class AppKitWebView extends StatefulWidget {
  final StreamController<Map<String, dynamic>> eventController;

  AppKitWebView({required this.eventController, Key? key}) : super(key: key);

  @override
  AppKitWebViewState createState() => AppKitWebViewState();
}

class AppKitWebViewState extends State<AppKitWebView> {
  late AppKitService _appKitService;
  @override
  void initState() {
    super.initState();
    _appKitService = getAppkitService(widget.eventController);
    _initializeService();
  }

  @override
  void dispose() {
    _appKitService.dispose();
    super.dispose();
  }

  Future<void> _initializeService() async {
    await _appKitService.initialize();
  }

  void openAppKitModal() {
    _appKitService.openAppKitModal();
  }

  void closeAppKitModal() {
    _appKitService.closeAppKitModal();
  }

  Future<bool> isConnected() {
    return _appKitService.isConnected();
  }

  Future<String> getAddress() {
    return _appKitService.getAddress();
  }

  Future<String> getUSDTBalance() {
    return _appKitService.getUSDTBalance();
  }

  void sendCustomMessage(String message) {
    _appKitService.sendCustomMessage(message);
  }

  InAppWebView _createWebView() {
    final url = Platform.isAndroid
              ? Uri.parse('file:///android_asset/flutter_assets/assets/web3/index.html')
              : Uri.parse('file:///ios_asset/flutter_assets/assets/web3/index.html');

    return InAppWebView(
      initialUrlRequest: URLRequest(url: WebUri.uri(url)),
      initialSettings: InAppWebViewSettings(
        thirdPartyCookiesEnabled: true,
        useHybridComposition: true,
        javaScriptEnabled: true,
        useShouldOverrideUrlLoading: true,
        mediaPlaybackRequiresUserGesture: false,
        allowsInlineMediaPlayback: true,
      ),
      onWebViewCreated: (controller) {
      },
      onLoadStop: (controller, url) async {
        await _appKitService.setController(controller);
      },
      shouldOverrideUrlLoading: (controller, navigationAction) async {
        final uri = navigationAction.request.url;

        if (uri != null) {
          await launchUrl(uri, mode: LaunchMode.externalApplication);
          return NavigationActionPolicy.CANCEL;
        }

        return NavigationActionPolicy.CANCEL;
      },
      onConsoleMessage: (controller, consoleMessage) {
        print("Console Message: ${consoleMessage.message}");
      },
      onLoadError: (controller, url, code, message) {
        print("Load Error: $message");
      },
      onLoadHttpError: (controller, url, statusCode, description) {
        print("HTTP Error $statusCode: $description");
      },
      onJsAlert: (controller, jsAlertRequest) async {
        return JsAlertResponse(
          handledByClient: false,
        );
      },
      onJsConfirm: (controller, jsConfirmRequest) async {
        return JsConfirmResponse(
          handledByClient: false,
        );
      },
      onJsPrompt: (controller, jsPromptRequest) async {
        return JsPromptResponse(
          handledByClient: false,
        );
      },
      
    );
  }

  @override
  Widget build(BuildContext context) {
    return (!kIsWeb)
        ?  _createWebView()
        : Container();
  }
}
