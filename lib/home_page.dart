import 'dart:async';
import 'package:appkit_interop_flutter/appkit_webview.dart';
import 'package:flutter/material.dart';


class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final StreamController<Map<String, dynamic>> _eventController =
      StreamController<Map<String, dynamic>>.broadcast();
  StreamSubscription<Map<String, dynamic>>? _messageSubscription;
  final GlobalKey<AppKitWebViewState> _appKitWebViewKey =
      GlobalKey<AppKitWebViewState>();

  bool isConnected = false;
  String address = '';
  String usdtBalance = '0.0';
  String error = '';

  @override
  void initState() {
    super.initState();

    _messageSubscription = _eventController.stream.listen((message) {
      handleMessageFromJavaScript(message);
    });

    setState(() {
      isConnected = false;
      address = "";
    });
  }

  @override
  void dispose() {
    _messageSubscription?.cancel();
    _eventController.close();
    super.dispose();
  }

  void handleMessageFromJavaScript(Map<String, dynamic> messageRaw) {
    if (!messageRaw.containsKey('data')){
      return;
    }
    checkConnectionStatus();
  }

  Future<void> checkConnectionStatus() async {
    try {
      bool connected =
          await _appKitWebViewKey.currentState?.isConnected() ?? false;
      String userAddress =
          await _appKitWebViewKey.currentState?.getAddress() ?? '';

      setState(() {
        isConnected = connected;
        address = userAddress;
      });
    } catch (e) {
      setState(() {
        error = 'Error checking connection: $e';
      });
    }
  }

  void openAppKitModal() {
    _appKitWebViewKey.currentState?.openAppKitModal();
  }

  void closeAppKitModal() {
    _appKitWebViewKey.currentState?.closeAppKitModal();
  }

  Future<void> fetchUSDTBalance() async {
    try {
      String balance =
          await _appKitWebViewKey.currentState?.getUSDTBalance() ?? '0.0';
      setState(() {
        usdtBalance = balance;
      });
    } catch (e) {
      setState(() {
        error = 'Error fetching USDT balance: $e';
      });
    }
  }

  void sendCustomMessage(String message) {
    _appKitWebViewKey.currentState?.sendCustomMessage(message);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('AppKit Flutter Interop Integration'),
      ),
      body: Stack(
        children: [
          AppKitWebView(
            key: _appKitWebViewKey,
            eventController: _eventController,
          ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              children: <Widget>[
                Row(
                  children: [
                    Text(
                      'Connected: ',
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                    Text(isConnected ? 'Yes' : 'No'),
                  ],
                ),
                SizedBox(height: 8),
                Row(
                  children: [
                    Text(
                      'Address: ',
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                    Expanded(
                      child: Text(
                        address.isNotEmpty ? address : 'N/A',
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 16),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    ElevatedButton(
                      onPressed: openAppKitModal,
                      child: Text('Connect Wallet'),
                    ),
                    ElevatedButton(
                      onPressed: closeAppKitModal,
                      child: Text('Disconnect Wallet'),
                    ),
                  ],
                ),
                SizedBox(height: 16),
                ElevatedButton(
                  onPressed: isConnected ? fetchUSDTBalance : null,
                  child: Text('Get USDT Balance'),
                ),
                SizedBox(height: 8),
                Row(
                  children: [
                    Text(
                      'USDT Balance: ',
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                    Text(usdtBalance),
                  ],
                ),
                SizedBox(height: 16),
                if (error.isNotEmpty)
                  Text(
                    error,
                    style: TextStyle(color: Colors.red),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
