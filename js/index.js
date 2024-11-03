// index.js
import { createAppKit } from '@reown/appkit';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { http, createConfig } from '@wagmi/core'
import { polygon, polygonAmoy } from '@reown/appkit/networks';
import { formatUnits } from 'ethers';
import { readContract } from '@wagmi/core'


const projectId = 'your project id';
export const networks = [polygon, polygonAmoy]
export const config = createConfig({
  chains: networks,
  transports: {
    [polygon.id]: http(),
    [polygonAmoy.id]: http(),
  },
})
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://example.com/', // Updated for local testing
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
  features: {
    swaps: true
  }
};

const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks
})

const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true,
  },
  featuredWalletIds: [
    "fbea6f68df4e6ce163c144df86da89f24cb244f19b53903e26aea9ab7de6393c", // klever
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", // metamask
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0"  // trust
  ]
});

window.modal = modal;

const USDTAddress = '0xc2132d05d31c914a87c6611c10748aeb04b58e8f';
const USDTAbi = [
  {
    type: 'function',
    name: 'balanceOf',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'totalSupply',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ name: 'supply', type: 'uint256' }],
  },
]

async function getUSDTBalance() {
  if (!modal.getIsConnectedState()) throw Error('User disconnected');

  const balance =  await readContract(config,{
    address: USDTAddress,
    abi: USDTAbi,
    functionName: 'balanceOf',
    account: modal.getAddress(),
    args: [modal.getAddress()],

  })

  return formatUnits(balance, 18);
}

window.AppKit_openModal = function () {
  window.modal.open();
};

window.AppKit_closeModal = function () {
  window.modal.close();
};

window.AppKit_isConnected = function () {
  return window.modal.getIsConnectedState();
};

window.AppKit_getAddress = function () {
  return window.modal.getAddress();
};

window.AppKit_getUSDTBalance = async function () {
  return await getUSDTBalance();
};

function sendMessageToFlutter(message) {
  if (typeof FlutterJSChannel !== 'undefined' && FlutterJSChannel.postMessage) {
    FlutterJSChannel.postMessage(JSON.stringify(message));
    console.log("post to flutter!  ", message);
  } else if (window.JSChannel && window.JSChannel.postMessage) {
    window.JSChannel.postMessage(JSON.stringify(message));
    console.log("Posted to Flutter webview: ", message);
  } else if (window.flutter_inappwebview)
    {
      window.flutter_inappwebview.callHandler('broadcastEvents',message)
    }
    else{
    window.postMessage(JSON.stringify(message), '*');
    console.log("post to postmessage!  ", message);
  }
}

modal.subscribeEvents((event) => {
  sendMessageToFlutter(event);
});