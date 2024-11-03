/*! For license information please see appkit.bundle.js.LICENSE.txt */
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`,c=r(11079),l=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};const u="scroll-lock";let h=class extends s.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=n.W3.state.open,this.caipAddress=n.WB.state.activeCaipAddress,this.caipNetwork=n.WB.state.activeCaipNetwork,this.isSiweEnabled=n.Hd.state.isSiweEnabled,this.shake=n.W3.state.shake,this.initializeTheming(),n.Np.prefetch(),this.unsubscribe.push(n.W3.subscribeKey("open",(e=>e?this.onOpen():this.onClose())),n.W3.subscribeKey("shake",(e=>this.shake=e)),n.Uj.subscribeKey("siweStatus",(e=>this.onSiweStatusChange(e)),"eip155"),n.WB.subscribeKey("activeCaipNetwork",(e=>this.onNewNetwork(e))),n.WB.subscribeKey("activeCaipAddress",(e=>this.onNewAddress(e))),n.Hd.subscribeKey("isSiweEnabled",(e=>this.isSiweEnabled=e))),n.En.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.open?s.qy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            <wui-card
              shake="${this.shake}"
              role="alertdialog"
              aria-modal="true"
              tabindex="0"
              data-testid="w3m-modal-card"
            >
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
              <w3m-alertbar></w3m-alertbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){const e="ConnectingSiwe"===n.IN.state.view,t="ApproveTransaction"===n.IN.state.view;if(this.isSiweEnabled){const{SIWEController:i}=await Promise.resolve().then(r.bind(r,96652));"success"!==i.state.status&&(e||t)?n.W3.shake():n.W3.close()}else n.W3.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=n.Wn.state,r=i.UiHelperUtil.getColorTheme(t);(0,i.initializeTheming)(e,r)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),n.Pt.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=u,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${u}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",(t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){const{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}}),this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}onSiweStatusChange(e){"success"===e&&n.W3.close()}async onNewAddress(e){const t=this.caipAddress,i=t?n.wE.getPlainAddress(t):void 0,s=e?n.wE.getPlainAddress(e):void 0,o=i===s;if(this.caipAddress=e,s&&!o&&this.isSiweEnabled)try{const{SIWEController:e}=await Promise.resolve().then(r.bind(r,96652)),t="success"===n.Uj.state.siweStatus;!i&&s?this.onSiweNavigation():t&&i&&s&&i!==s&&e.state._client?.options.signOutOnAccountChange&&(await e.signOut(),this.onSiweNavigation())}catch(e){throw this.caipAddress=t,e}s||n.W3.close()}async onNewNetwork(e){if(!this.caipAddress)return this.caipNetwork=e,void n.IN.goBack();const t=this.caipNetwork?.caipNetworkId?.toString(),i=e?.caipNetworkId?.toString();if(t&&i&&t!==i)if(this.isSiweEnabled){const{SIWEController:e}=await Promise.resolve().then(r.bind(r,96652));e.state._client?.options.signOutOnNetworkChange?(await e.signOut(),this.onSiweNavigation()):n.IN.goBack()}else n.IN.goBack();this.caipNetwork=e}onSiweNavigation(){const e=n.WB.state.activeChain===c.oU.CHAIN.EVM;"success"!==n.Uj.state.siweStatus&&e?this.open?n.IN.replace("ConnectingSiwe"):n.W3.open({view:"ConnectingSiwe"}):n.IN.goBack()}};h.styles=a,l([(0,o.wk)()],h.prototype,"open",void 0),l([(0,o.wk)()],h.prototype,"caipAddress",void 0),l([(0,o.wk)()],h.prototype,"caipNetwork",void 0),l([(0,o.wk)()],h.prototype,"isSiweEnabled",void 0),l([(0,o.wk)()],h.prototype,"shake",void 0),h=l([(0,i.customElement)("w3m-modal")],h)},96652:function(e,t,r){"use strict";r.d(t,{SIWEController:function(){return a},getDidAddress:function(){return c.q_h},getDidChainId:function(){return c.aG$}});var n=r(4707),i=r(29073),s=r(8324);const o=(0,i.BX)({status:"uninitialized"}),a={state:o,subscribeKey(e,t){return(0,n.u$)(o,e,t)},subscribe(e){return(0,i.B1)(o,(()=>e(o)))},_getClient(){if(!o._client)throw new Error("SIWEController client not set");return o._client},async getNonce(e){const t=this._getClient(),r=await t.getNonce(e);return this.setNonce(r),r},async getSession(){try{const e=this._getClient(),t=await e.getSession();return t&&(this.setSession(t),this.setStatus("success")),t||void 0}catch{return}},createMessage(e){const t=this._getClient().createMessage(e);return this.setMessage(t),t},async verifyMessage(e){const t=this._getClient();return await t.verifyMessage(e)},async signIn(){const e=this._getClient();return await e.signIn()},async signOut(){const e=this._getClient();await e.signOut(),this.setStatus("ready"),this.setSession(void 0),e.onSignOut?.()},onSignIn(e){const t=this._getClient();t.onSignIn?.(e)},onSignOut(){const e=this._getClient();e.onSignOut?.()},async setSIWEClient(e){o._client=(0,i.KR)(e),o.session=await this.getSession(),o.status=o.session?"success":"ready",s.WB.setAccountProp("siweStatus",o.status,"eip155"),s.Hd.setIsSiweEnabled(e.options.enabled)},setNonce(e){o.nonce=e},setStatus(e){o.status=e,s.WB.setAccountProp("siweStatus",o.status,"eip155")},setMessage(e){o.message=e},setSession(e){o.session=e,o.status=e?"success":"ready",s.WB.setAccountProp("siweStatus",o.status,"eip155")}};r(11079);var c=r(51619),l=r(71294),u=r(12618),h=u.AH`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let d=class extends u.WF{constructor(){super(...arguments),this.dappImageUrl=s.Hd.state.metadata?.icons,this.walletImageUrl=s.Uj.state.connectedWalletInfo?.icon}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return u.qy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};d.styles=h,d=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,l.customElement)("w3m-connecting-siwe")],d);var f=r(25707),p=r(44039),g=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let m=class extends u.WF{constructor(){super(...arguments),this.dappName=s.Hd.state.metadata?.name,this.isSigning=!1,this.isCancelling=!1}render(){return u.qy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,s.En.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:s.WB.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:s.Uj.state.preferredAccountType===p.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}});try{a.setStatus("loading");const e=await a.signIn();return a.setStatus("success"),s.En.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:s.WB.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:s.Uj.state.preferredAccountType===p.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),e}catch(e){const t=s.Uj.state.preferredAccountType===p.Vl.ACCOUNT_TYPES.SMART_ACCOUNT;return t?s.Pt.showError("This application might not support Smart Accounts"):s.Pt.showError("Signature declined"),a.setStatus("error"),s.En.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:s.WB.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:t}})}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,s.WB.state.activeCaipAddress?(await s.x4.disconnect(),s.W3.close()):s.IN.push("Connect"),this.isCancelling=!1,s.En.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:s.WB.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:s.Uj.state.preferredAccountType===p.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}};g([(0,f.wk)()],m.prototype,"isSigning",void 0),g([(0,f.wk)()],m.prototype,"isCancelling",void 0),m=g([(0,l.customElement)("w3m-connecting-siwe-view")],m)},71294:function(e,t,r){"use strict";r.r(t),r.d(t,{MathUtil:function(){return Ns},TransactionUtil:function(){return Bs},UiHelperUtil:function(){return Lt},WuiAccountButton:function(){return Zt},WuiAlertBar:function(){return Kn},WuiAllWalletsImage:function(){return er},WuiAvatar:function(){return qt},WuiBalance:function(){return Mi},WuiBanner:function(){return Vi},WuiBannerImg:function(){return Ki},WuiButton:function(){return or},WuiCard:function(){return b},WuiCardSelect:function(){return yr},WuiCardSelectLoader:function(){return ur},WuiChip:function(){return Ar},WuiChipButton:function(){return Fi},WuiCompatibleNetwork:function(){return Hi},WuiConnectButton:function(){return Cr},WuiCtaButton:function(){return Sr},WuiDetailsGroup:function(){return Tr},WuiDetailsGroupItem:function(){return Nr},WuiDropdownMenu:function(){return Br},WuiEmailInput:function(){return qr},WuiEnsInput:function(){return Wr},WuiFlex:function(){return jt},WuiGrid:function(){return Is},WuiIcon:function(){return qe},WuiIconBox:function(){return Wt},WuiIconButton:function(){return ms},WuiIconLink:function(){return Zr},WuiImage:function(){return We},WuiInputAmount:function(){return os},WuiInputElement:function(){return Qr},WuiInputNumeric:function(){return en},WuiInputText:function(){return jr},WuiLink:function(){return nn},WuiListAccordion:function(){return mi},WuiListAccount:function(){return fs},WuiListButton:function(){return bs},WuiListContent:function(){return bi},WuiListDescription:function(){return ts},WuiListItem:function(){return an},WuiListNetwork:function(){return xi},WuiListSocial:function(){return xs},WuiListToken:function(){return Yi},WuiListWallet:function(){return xn},WuiListWalletTransaction:function(){return _i},WuiLoadingHexagon:function(){return Ge},WuiLoadingSpinner:function(){return Je},WuiLoadingThumbnail:function(){return Xe},WuiLogo:function(){return _n},WuiLogoSelect:function(){return In},WuiNetworkButton:function(){return Mn},WuiNetworkImage:function(){return gr},WuiNoticeCard:function(){return fi},WuiOtp:function(){return On},WuiPreviewItem:function(){return ls},WuiProfileButton:function(){return Oi},WuiProfileButtonV2:function(){return Ui},WuiPromo:function(){return Ii},WuiQrCode:function(){return Fn},WuiSearchBar:function(){return qn},WuiSelect:function(){return _s},WuiSeparator:function(){return Ms},WuiShimmer:function(){return rt},WuiSnackbar:function(){return Wn},WuiTabs:function(){return Yn},WuiTag:function(){return bn},WuiText:function(){return ct},WuiTokenButton:function(){return ti},WuiTokenListItem:function(){return ai},WuiTooltip:function(){return ii},WuiTransactionListItem:function(){return pn},WuiTransactionListItemLoader:function(){return mn},WuiTransactionVisual:function(){return hn},WuiVisual:function(){return Ot},WuiVisualThumbnail:function(){return ui},WuiWalletImage:function(){return Qt},customElement:function(){return w},initializeTheming:function(){return u},setColorTheme:function(){return h},setThemeVariables:function(){return d},swapInputMaskBottomSvg:function(){return i},swapInputMaskTopSvg:function(){return s}});var n=r(12618);const i=n.JW`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`,s=n.JW`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`;var o=r(11079);let a,c,l;function u(e,t){a=document.createElement("style"),c=document.createElement("style"),l=document.createElement("style"),a.textContent=f(e).core.cssText,c.textContent=f(e).dark.cssText,l.textContent=f(e).light.cssText,document.head.appendChild(a),document.head.appendChild(c),document.head.appendChild(l),h(t)}function h(e){c&&l&&("light"===e?(c.removeAttribute("media"),l.media="enabled"):(l.removeAttribute("media"),c.media="enabled"))}function d(e){a&&c&&l&&(a.textContent=f(e).core.cssText,c.textContent=f(e).dark.cssText,l.textContent=f(e).light.cssText)}function f(e){return{core:n.AH`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${(0,n.iz)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,n.iz)(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${(0,n.iz)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,n.iz)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,n.iz)(e?.["--w3m-z-index"]||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:n.AH`
      :root {
        --w3m-color-mix: ${(0,n.iz)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,n.iz)((0,o.o_)(e,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${(0,n.iz)((0,o.o_)(e,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: #667dff;

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;
      }
    `,dark:n.AH`
      :root {
        --w3m-color-mix: ${(0,n.iz)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,n.iz)((0,o.o_)(e,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${(0,n.iz)((0,o.o_)(e,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: #667dff;

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);
      }
    `}}const p=n.AH`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,g=n.AH`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,m=n.AH`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`;function w(e){return function(t){return"function"==typeof t?function(e,t){return customElements.get(e)||customElements.define(e,t),t}(e,t):function(e,t){const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}var y=n.AH`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let b=class extends n.WF{render(){return n.qy`<slot></slot>`}};b.styles=[p,y],b=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([w("wui-card")],b);var v=r(25707),A=n.AH`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;const x=n.JW`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`,E=n.JW`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,C=n.JW`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,_=n.JW`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,k=n.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,S=n.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,I=n.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,T=n.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,P=n.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,M=n.JW`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,N=n.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,R=n.JW`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,O=n.JW`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`,B=n.JW`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="currentColor"/>
</svg>
`,L=n.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,U=n.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,D=n.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,j=n.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,F=n.JW`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,$=n.JW`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`,q=n.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,H=n.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,z=n.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,W=n.JW`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,V=n.JW` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,G=n.JW`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,Z=n.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,K=n.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,J=n.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Q=n.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,Y=n.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,X=n.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ee=n.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,te=n.JW`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,re=n.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ne=n.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ie=n.JW`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,se=n.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,oe=n.JW`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`,ae=n.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,ce=n.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,le=n.JW`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,ue=n.JW`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`,he=n.JW`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,de=n.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,fe=n.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,pe=n.JW` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,ge=n.JW`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,me=n.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,we=n.JW`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,ye=n.JW`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,be=n.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,ve=n.JW`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,Ae=n.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,xe=n.JW`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,Ee=n.JW`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,Ce=n.JW`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,_e=n.JW`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ke=n.JW`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,Se=n.JW`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`,Ie=n.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Te=n.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,Pe=n.JW`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,Me=n.JW`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,Ne=n.JW`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,Re=n.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,Oe=n.JW`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,Be=n.JW`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="#202020"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`,Le=n.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,Ue=n.JW`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`,De=n.JW`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`,je=n.JW`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;var Fe=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};const $e={add:x,allWallets:E,arrowBottomCircle:C,appStore:_,apple:k,arrowBottom:S,arrowLeft:I,arrowRight:T,arrowTop:P,bank:M,browser:N,card:R,checkmark:B,checkmarkBold:O,chevronBottom:L,chevronLeft:U,chevronRight:D,chevronTop:j,chromeStore:F,clock:$,close:q,compass:z,coinPlaceholder:H,copy:W,cursor:V,cursorTransparent:G,desktop:Z,disconnect:K,discord:J,etherscan:Q,extension:Y,externalLink:X,facebook:ee,farcaster:te,filters:re,github:ne,google:ie,helpCircle:se,image:oe,id:De,infoCircle:ae,lightbulb:Ue,mail:ce,mobile:le,more:ue,networkPlaceholder:he,nftPlaceholder:de,off:fe,playStore:pe,plus:ge,qrCode:me,recycleHorizontal:we,refresh:ye,search:be,send:ve,swapHorizontal:Ae,swapHorizontalMedium:Ee,swapHorizontalBold:xe,swapHorizontalRoundedBold:Ce,swapVertical:_e,telegram:ke,threeDots:Se,twitch:Ie,twitter:je,twitterIcon:Te,verify:Pe,verifyFilled:Me,wallet:Re,walletConnect:Oe,walletConnectLightBrown:Be,walletPlaceholder:Ne,warningCircle:Le,x:je,info:n.JW`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.125 6.875C9.125 6.57833 9.21298 6.28832 9.3778 6.04165C9.54262 5.79497 9.77689 5.60271 10.051 5.48918C10.3251 5.37565 10.6267 5.34594 10.9176 5.40382C11.2086 5.4617 11.4759 5.60456 11.6857 5.81434C11.8954 6.02412 12.0383 6.29139 12.0962 6.58236C12.1541 6.87334 12.1244 7.17494 12.0108 7.44903C11.8973 7.72311 11.705 7.95738 11.4584 8.1222C11.2117 8.28703 10.9217 8.375 10.625 8.375C10.2272 8.375 9.84565 8.21696 9.56434 7.93566C9.28304 7.65436 9.125 7.27282 9.125 6.875ZM21.125 11C21.125 13.0025 20.5312 14.9601 19.4186 16.6251C18.3061 18.2902 16.7248 19.5879 14.8747 20.3543C13.0246 21.1206 10.9888 21.3211 9.02471 20.9305C7.06066 20.5398 5.25656 19.5755 3.84055 18.1595C2.42454 16.7435 1.46023 14.9393 1.06955 12.9753C0.678878 11.0112 0.879387 8.97543 1.64572 7.12533C2.41206 5.27523 3.70981 3.69392 5.37486 2.58137C7.0399 1.46882 8.99747 0.875 11 0.875C13.6844 0.877978 16.258 1.94567 18.1562 3.84383C20.0543 5.74199 21.122 8.3156 21.125 11ZM18.875 11C18.875 9.44247 18.4131 7.91992 17.5478 6.62488C16.6825 5.32985 15.4526 4.32049 14.0136 3.72445C12.5747 3.12841 10.9913 2.97246 9.46367 3.27632C7.93607 3.58017 6.53288 4.3302 5.43154 5.43153C4.3302 6.53287 3.58018 7.93606 3.27632 9.46366C2.97246 10.9913 3.12841 12.5747 3.72445 14.0136C4.32049 15.4526 5.32985 16.6825 6.62489 17.5478C7.91993 18.4131 9.44248 18.875 11 18.875C13.0879 18.8728 15.0896 18.0424 16.566 16.566C18.0424 15.0896 18.8728 13.0879 18.875 11ZM12.125 14.4387V11.375C12.125 10.8777 11.9275 10.4008 11.5758 10.0492C11.2242 9.69754 10.7473 9.5 10.25 9.5C9.98433 9.4996 9.72708 9.59325 9.52383 9.76435C9.32058 9.93544 9.18444 10.173 9.13952 10.4348C9.09461 10.6967 9.14381 10.966 9.27843 11.195C9.41304 11.4241 9.62438 11.5981 9.875 11.6863V14.75C9.875 15.2473 10.0725 15.7242 10.4242 16.0758C10.7758 16.4275 11.2527 16.625 11.75 16.625C12.0157 16.6254 12.2729 16.5318 12.4762 16.3607C12.6794 16.1896 12.8156 15.952 12.8605 15.6902C12.9054 15.4283 12.8562 15.159 12.7216 14.93C12.587 14.7009 12.3756 14.5269 12.125 14.4387Z" fill="currentColor"/>
</svg>`,exclamationTriangle:n.JW`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0162 11.6312L9.55059 2.13937C9.39228 1.86862 9.16584 1.64405 8.8938 1.48798C8.62176 1.33192 8.3136 1.2498 7.99997 1.2498C7.68634 1.2498 7.37817 1.33192 7.10613 1.48798C6.83409 1.64405 6.60765 1.86862 6.44934 2.13937L0.983716 11.6312C0.830104 11.894 0.749146 12.1928 0.749146 12.4972C0.749146 12.8015 0.830104 13.1004 0.983716 13.3631C1.14027 13.6352 1.3664 13.8608 1.63889 14.0166C1.91139 14.1725 2.22044 14.253 2.53434 14.25H13.4656C13.7793 14.2528 14.0881 14.1721 14.3603 14.0163C14.6326 13.8604 14.8585 13.635 15.015 13.3631C15.1688 13.1005 15.2499 12.8017 15.2502 12.4973C15.2504 12.193 15.1696 11.8941 15.0162 11.6312ZM13.7162 12.6125C13.6908 12.6558 13.6541 12.6914 13.6101 12.7157C13.5661 12.7399 13.5164 12.7517 13.4662 12.75H2.53434C2.48415 12.7517 2.43442 12.7399 2.39042 12.7157C2.34641 12.6914 2.30976 12.6558 2.28434 12.6125C2.26278 12.5774 2.25137 12.5371 2.25137 12.4959C2.25137 12.4548 2.26278 12.4144 2.28434 12.3794L7.74997 2.88749C7.77703 2.84583 7.81408 2.8116 7.85774 2.7879C7.9014 2.7642 7.95029 2.75178 7.99997 2.75178C8.04964 2.75178 8.09854 2.7642 8.1422 2.7879C8.18586 2.8116 8.2229 2.84583 8.24997 2.88749L13.715 12.3794C13.7367 12.4143 13.7483 12.4546 13.7486 12.4958C13.7488 12.5369 13.7376 12.5773 13.7162 12.6125ZM7.24997 8.49999V6.49999C7.24997 6.30108 7.32898 6.11031 7.46964 5.96966C7.61029 5.82901 7.80105 5.74999 7.99997 5.74999C8.19888 5.74999 8.38964 5.82901 8.5303 5.96966C8.67095 6.11031 8.74997 6.30108 8.74997 6.49999V8.49999C8.74997 8.6989 8.67095 8.88967 8.5303 9.03032C8.38964 9.17097 8.19888 9.24999 7.99997 9.24999C7.80105 9.24999 7.61029 9.17097 7.46964 9.03032C7.32898 8.88967 7.24997 8.6989 7.24997 8.49999ZM8.99997 11C8.99997 11.1978 8.94132 11.3911 8.83144 11.5556C8.72155 11.72 8.56538 11.8482 8.38265 11.9239C8.19992 11.9996 7.99886 12.0194 7.80488 11.9808C7.6109 11.9422 7.43271 11.847 7.29286 11.7071C7.15301 11.5672 7.05777 11.3891 7.01918 11.1951C6.9806 11.0011 7.0004 10.8 7.07609 10.6173C7.15177 10.4346 7.27995 10.2784 7.4444 10.1685C7.60885 10.0586 7.80219 9.99999 7.99997 9.99999C8.26518 9.99999 8.51954 10.1053 8.70707 10.2929C8.89461 10.4804 8.99997 10.7348 8.99997 11Z" fill="currentColor"/>
</svg>
`};let qe=class extends n.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n    `,n.qy`${$e[this.name]}`}};qe.styles=[p,m,A],Fe([(0,v.MZ)()],qe.prototype,"size",void 0),Fe([(0,v.MZ)()],qe.prototype,"name",void 0),Fe([(0,v.MZ)()],qe.prototype,"color",void 0),qe=Fe([w("wui-icon")],qe);var He=n.AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,ze=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let We=class extends n.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,n.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};We.styles=[p,m,He],ze([(0,v.MZ)()],We.prototype,"src",void 0),ze([(0,v.MZ)()],We.prototype,"alt",void 0),ze([(0,v.MZ)()],We.prototype,"size",void 0),We=ze([w("wui-image")],We);var Ve=n.AH`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let Ge=class extends n.WF{render(){return n.qy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Ge.styles=[p,Ve],Ge=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([w("wui-loading-hexagon")],Ge);var Ze=n.AH`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,Ke=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Je=class extends n.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,n.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Je.styles=[p,Ze],Ke([(0,v.MZ)()],Je.prototype,"color",void 0),Ke([(0,v.MZ)()],Je.prototype,"size",void 0),Je=Ke([w("wui-loading-spinner")],Je);var Qe=n.AH`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,Ye=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Xe=class extends n.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e,r=116+t,i=245+t,s=360+1.75*t;return n.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${r} ${i}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Xe.styles=[p,Qe],Ye([(0,v.MZ)({type:Number})],Xe.prototype,"radius",void 0),Xe=Ye([w("wui-loading-thumbnail")],Xe);var et=n.AH`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,tt=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let rt=class extends n.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,n.qy`<slot></slot>`}};rt.styles=[et],tt([(0,v.MZ)()],rt.prototype,"width",void 0),tt([(0,v.MZ)()],rt.prototype,"height",void 0),tt([(0,v.MZ)()],rt.prototype,"borderRadius",void 0),tt([(0,v.MZ)()],rt.prototype,"variant",void 0),rt=tt([w("wui-shimmer")],rt);var nt=r(36752),it=r(7804);const st=(0,it.u$)(class extends it.WL{constructor(e){if(super(e),e.type!==it.OA.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const r=e.element.classList;for(const e of this.st)e in t||(r.remove(e),this.st.delete(e));for(const e in t){const n=!!t[e];n===this.st.has(e)||this.nt?.has(e)||(n?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return nt.c0}});var ot=n.AH`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`,at=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let ct=class extends n.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,n.qy`<slot class=${st(e)}></slot>`}};ct.styles=[p,ot],at([(0,v.MZ)()],ct.prototype,"variant",void 0),at([(0,v.MZ)()],ct.prototype,"color",void 0),at([(0,v.MZ)()],ct.prototype,"align",void 0),at([(0,v.MZ)()],ct.prototype,"lineClamp",void 0),ct=at([w("wui-text")],ct);const lt=n.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,ut=n.JW`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,ht=n.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,dt=n.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,ft=n.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,pt=n.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,gt=n.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,mt=n.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,wt=n.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,yt=n.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,bt=n.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,vt=n.JW`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,At=n.JW`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,xt=n.JW`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,Et=n.JW`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Ct=n.JW`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,_t=n.JW`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,kt=n.JW`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,St=n.JW`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,It=n.JW`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Tt=n.JW`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Pt=n.JW`<svg width="40" height="42" viewBox="0 0 40 42" fill="none">
<path opacity="0.7" d="M19.9526 41.9076L7.3877 34.655V26.1226L19.9526 33.3751V41.9076Z" fill="url(#paint0_linear_2113_32117)"/>
<path opacity="0.7" d="M19.9521 41.9076L32.5171 34.655V26.1226L19.9521 33.3751V41.9076Z" fill="url(#paint1_linear_2113_32117)"/>
<path opacity="0.7" d="M39.9095 7.34521V21.8562L32.5166 26.1225V11.6114L39.9095 7.34521Z" fill="url(#paint2_linear_2113_32117)"/>
<path d="M39.9099 7.34536L27.345 0.0927734L19.9521 4.359L32.5171 11.6116L39.9099 7.34536Z" fill="url(#paint3_linear_2113_32117)"/>
<path d="M0 7.34536L12.5649 0.0927734L19.9519 4.359L7.387 11.6116L0 7.34536Z" fill="#F969D3"/>
<path opacity="0.7" d="M0 7.34521V21.8562L7.387 26.1225V11.6114L0 7.34521Z" fill="url(#paint4_linear_2113_32117)"/>
<defs>
<linearGradient id="paint0_linear_2113_32117" x1="18.6099" y1="41.8335" x2="7.73529" y2="8.31842" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
<linearGradient id="paint1_linear_2113_32117" x1="26.2346" y1="26.1226" x2="26.2346" y2="41.9076" gradientUnits="userSpaceOnUse">
<stop stop-color="#719DED"/>
<stop offset="1" stop-color="#2545BE"/>
</linearGradient>
<linearGradient id="paint2_linear_2113_32117" x1="36.213" y1="7.34521" x2="36.213" y2="26.1225" gradientUnits="userSpaceOnUse">
<stop stop-color="#93EBFF"/>
<stop offset="1" stop-color="#197DDB"/>
</linearGradient>
<linearGradient id="paint3_linear_2113_32117" x1="29.931" y1="0.0927734" x2="38.2156" y2="14.8448" gradientUnits="userSpaceOnUse">
<stop stop-color="#F969D3"/>
<stop offset="1" stop-color="#4F51C0"/>
</linearGradient>
<linearGradient id="paint4_linear_2113_32117" x1="18.1251" y1="44.2539" x2="-7.06792" y2="15.2763" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
</defs>
</svg>`;var Mt=n.AH`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`,Nt=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};const Rt={browser:lt,dao:ut,defi:ht,defiAlt:dt,eth:ft,layers:pt,lock:gt,login:mt,network:wt,nft:yt,noun:bt,profile:vt,system:At,coinbase:xt,meld:Pt,onrampCard:kt,moonpay:Et,stripe:Ct,paypal:_t,google:St,pencil:It,lightbulb:Tt,solana:n.JW`<svg fill="none" viewBox="0 0 80 80">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M40 80a40 40 0 1 0 0-80 40 40 0 0 0 0 80Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M79.5 40a39.5 39.5 0 1 1-79 0 39.5 39.5 0 0 1 79 0Z"
    />
    <path
      fill="#fff"
      d="m62.62 51.54-7.54 7.91a1.75 1.75 0 0 1-1.29.55H18.02a.9.9 0 0 1-.8-.52.84.84 0 0 1 .16-.92l7.55-7.92a1.75 1.75 0 0 1 1.28-.55h35.77a.87.87 0 0 1 .8.52.84.84 0 0 1-.16.93Zm-7.54-15.95a1.75 1.75 0 0 0-1.29-.54H18.02a.89.89 0 0 0-.8.51.84.84 0 0 0 .16.93l7.55 7.92a1.75 1.75 0 0 0 1.28.54h35.77a.89.89 0 0 0 .8-.51.84.84 0 0 0-.16-.93l-7.54-7.92ZM18.02 29.9h35.77a1.79 1.79 0 0 0 1.29-.54l7.54-7.92a.85.85 0 0 0 .16-.93.87.87 0 0 0-.8-.51H26.21a1.79 1.79 0 0 0-1.28.54l-7.55 7.92a.85.85 0 0 0-.16.93.89.89 0 0 0 .8.52Z"
    />
  </g>
  <defs>
    <linearGradient id="b" x1="6.75" x2="80.68" y1="81.91" y2="7.37" gradientUnits="userSpaceOnUse">
      <stop offset=".08" stop-color="#9945FF" />
      <stop offset=".3" stop-color="#8752F3" />
      <stop offset=".5" stop-color="#5497D5" />
      <stop offset=".6" stop-color="#43B4CA" />
      <stop offset=".72" stop-color="#28E0B9" />
      <stop offset=".97" stop-color="#19FB9B" />
    </linearGradient>
    <clipPath id="a"><path fill="#fff" d="M0 0h80v80H0z" /></clipPath>
  </defs>
</svg> `};let Ot=class extends n.WF{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`\n       --local-size: var(--wui-visual-size-${this.size});\n   `,n.qy`${Rt[this.name]}`}};Ot.styles=[p,Mt],Nt([(0,v.MZ)()],Ot.prototype,"name",void 0),Nt([(0,v.MZ)()],Ot.prototype,"size",void 0),Ot=Nt([w("wui-visual")],Ot);var Bt=r(60031);const Lt={getSpacingStyles(e,t){return Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){try{return new URL(e).hostname}catch(e){return""}},getTruncateString({string:e,charsStart:t,charsEnd:r,truncate:n}){return e.length<=t+r?e:"end"===n?`${e.substring(0,t)}...`:"start"===n?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`},generateAvatarColors(e){const t=e.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),r=this.hexToRgb(t),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),i=100-3*Number(n?.replace("px","")),s=`${i}% ${i}% at 65% 40%`,o=[];for(let e=0;e<5;e+=1){const t=this.tintColor(r,.15*e);o.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`\n    --local-color-1: ${o[0]};\n    --local-color-2: ${o[1]};\n    --local-color-3: ${o[2]};\n    --local-color-4: ${o[3]};\n    --local-color-5: ${o[4]};\n    --local-radial-circle: ${s}\n   `},hexToRgb(e){const t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){const[r,n,i]=e;return[Math.round(r+(255-r)*t),Math.round(n+(255-n)*t),Math.round(i+(255-i)*t)]},isNumber(e){return/^[0-9]+$/u.test(e)},getColorTheme(e){return e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},splitBalance(e){const t=e.split(".");return 2===t.length?[t[0],t[1]]:["0","00"]},roundNumber(e,t,r){return e.toString().length>=t?Number(e).toFixed(r):e},formatNumberToLocalString(e,t=2){return void 0===e?"0.00":"number"==typeof e?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})}};var Ut=n.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,Dt=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let jt=class extends n.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&Lt.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&Lt.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&Lt.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&Lt.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&Lt.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&Lt.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&Lt.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&Lt.getSpacingStyles(this.margin,3)};\n    `,n.qy`<slot></slot>`}};jt.styles=[p,Ut],Dt([(0,v.MZ)()],jt.prototype,"flexDirection",void 0),Dt([(0,v.MZ)()],jt.prototype,"flexWrap",void 0),Dt([(0,v.MZ)()],jt.prototype,"flexBasis",void 0),Dt([(0,v.MZ)()],jt.prototype,"flexGrow",void 0),Dt([(0,v.MZ)()],jt.prototype,"flexShrink",void 0),Dt([(0,v.MZ)()],jt.prototype,"alignItems",void 0),Dt([(0,v.MZ)()],jt.prototype,"justifyContent",void 0),Dt([(0,v.MZ)()],jt.prototype,"columnGap",void 0),Dt([(0,v.MZ)()],jt.prototype,"rowGap",void 0),Dt([(0,v.MZ)()],jt.prototype,"gap",void 0),Dt([(0,v.MZ)()],jt.prototype,"padding",void 0),Dt([(0,v.MZ)()],jt.prototype,"margin",void 0),jt=Dt([w("wui-flex")],jt);var Ft=n.AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,$t=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let qt=class extends n.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`\n    --local-width: var(--wui-icon-box-size-${this.size});\n    --local-height: var(--wui-icon-box-size-${this.size});\n    `,n.qy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",n.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=Lt.generateAvatarColors(this.address);return this.style.cssText+=`\n ${e}`,null}return this.dataset.variant="default",null}};qt.styles=[p,Ft],$t([(0,v.MZ)()],qt.prototype,"imageSrc",void 0),$t([(0,v.MZ)()],qt.prototype,"alt",void 0),$t([(0,v.MZ)()],qt.prototype,"address",void 0),$t([(0,v.MZ)()],qt.prototype,"size",void 0),qt=$t([w("wui-avatar")],qt);var Ht=n.AH`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,zt=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Wt=class extends n.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t="lg"===this.size,r="xl"===this.size,i=t?"12%":"16%",s=t?"xxs":r?"s":"3xl",o="gray"===this.background,a="opaque"===this.background,c="accent-100"===this.backgroundColor&&a||"success-100"===this.backgroundColor&&a||"error-100"===this.backgroundColor&&a||"inverse-100"===this.backgroundColor&&a;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:o&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||o?"100%":i};\n       --local-border-radius: var(--wui-border-radius-${s});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,n.qy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Wt.styles=[p,g,Ht],zt([(0,v.MZ)()],Wt.prototype,"size",void 0),zt([(0,v.MZ)()],Wt.prototype,"backgroundColor",void 0),zt([(0,v.MZ)()],Wt.prototype,"iconColor",void 0),zt([(0,v.MZ)()],Wt.prototype,"iconSize",void 0),zt([(0,v.MZ)()],Wt.prototype,"background",void 0),zt([(0,v.MZ)({type:Boolean})],Wt.prototype,"border",void 0),zt([(0,v.MZ)()],Wt.prototype,"borderColor",void 0),zt([(0,v.MZ)()],Wt.prototype,"icon",void 0),Wt=zt([w("wui-icon-box")],Wt);var Vt=n.AH`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,Gt=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Zt=class extends n.WF{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return n.qy`
      <button
        ?disabled=${this.disabled}
        class=${(0,Bt.J)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?Lt.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return n.qy` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?n.qy`<wui-image src=${this.networkSrc}></wui-image>`:n.qy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return n.qy`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};Zt.styles=[p,g,Vt],Gt([(0,v.MZ)()],Zt.prototype,"networkSrc",void 0),Gt([(0,v.MZ)()],Zt.prototype,"avatarSrc",void 0),Gt([(0,v.MZ)()],Zt.prototype,"balance",void 0),Gt([(0,v.MZ)({type:Boolean})],Zt.prototype,"isUnsupportedChain",void 0),Gt([(0,v.MZ)({type:Boolean})],Zt.prototype,"disabled",void 0),Gt([(0,v.MZ)()],Zt.prototype,"address",void 0),Gt([(0,v.MZ)()],Zt.prototype,"profileName",void 0),Gt([(0,v.MZ)()],Zt.prototype,"charsStart",void 0),Gt([(0,v.MZ)()],Zt.prototype,"charsEnd",void 0),Zt=Gt([w("wui-account-button")],Zt);var Kt=n.AH`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`,Jt=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Qt=class extends n.WF{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),n.qy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?n.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?n.qy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:n.qy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Qt.styles=[p,Kt],Jt([(0,v.MZ)()],Qt.prototype,"size",void 0),Jt([(0,v.MZ)()],Qt.prototype,"name",void 0),Jt([(0,v.MZ)()],Qt.prototype,"imageSrc",void 0),Jt([(0,v.MZ)()],Qt.prototype,"walletIcon",void 0),Jt([(0,v.MZ)({type:Boolean})],Qt.prototype,"installed",void 0),Jt([(0,v.MZ)()],Qt.prototype,"badgeSize",void 0),Qt=Jt([w("wui-wallet-image")],Qt);var Yt=n.AH`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,Xt=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let er=class extends n.WF{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<4;return n.qy`${this.walletImages.slice(0,4).map((({src:e,walletName:t})=>n.qy`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${(0,Bt.J)(t)}
            ></wui-wallet-image>
          `))}
      ${e?[...Array(4-this.walletImages.length)].map((()=>n.qy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};er.styles=[p,Yt],Xt([(0,v.MZ)({type:Array})],er.prototype,"walletImages",void 0),er=Xt([w("wui-all-wallets-image")],er);var tr=n.AH`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,rr=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};const nr={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},ir={lg:"paragraph-600",md:"small-600"},sr={lg:"md",md:"md"};let or=class extends n.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const e=this.textVariant??ir[this.size];return n.qy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const e=sr[this.size],t=this.disabled?nr.disabled:nr[this.variant];return n.qy`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return n.qy``}};or.styles=[p,g,tr],rr([(0,v.MZ)()],or.prototype,"size",void 0),rr([(0,v.MZ)({type:Boolean})],or.prototype,"disabled",void 0),rr([(0,v.MZ)({type:Boolean})],or.prototype,"fullWidth",void 0),rr([(0,v.MZ)({type:Boolean})],or.prototype,"loading",void 0),rr([(0,v.MZ)()],or.prototype,"variant",void 0),rr([(0,v.MZ)({type:Boolean})],or.prototype,"hasIconLeft",void 0),rr([(0,v.MZ)({type:Boolean})],or.prototype,"hasIconRight",void 0),rr([(0,v.MZ)()],or.prototype,"borderRadius",void 0),rr([(0,v.MZ)()],or.prototype,"textVariant",void 0),or=rr([w("wui-button")],or);const ar=n.JW`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var cr=n.AH`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }
`,lr=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let ur=class extends n.WF{constructor(){super(...arguments),this.type="wallet"}render(){return n.qy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?n.qy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${ar}`:n.qy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};ur.styles=[p,g,cr],lr([(0,v.MZ)()],ur.prototype,"type",void 0),ur=lr([w("wui-card-select-loader")],ur);const hr=n.JW`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,dr=n.JW`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var fr=n.AH`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,pr=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let gr=class extends n.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:hr,md:ar,lg:dr},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--wui-spacing-3xl);\n      --local-height: var(--wui-spacing-3xl);\n      --local-icon-size: var(--wui-spacing-l);\n    "):this.style.cssText=`\n\n      --local-path: var(--wui-path-network-${this.size});\n      --local-width:  var(--wui-width-network-${this.size});\n      --local-height:  var(--wui-height-network-${this.size});\n      --local-icon-size:  var(--wui-icon-size-network-${this.size});\n    `,n.qy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?n.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:n.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};gr.styles=[p,fr],pr([(0,v.MZ)()],gr.prototype,"size",void 0),pr([(0,v.MZ)()],gr.prototype,"name",void 0),pr([(0,v.MZ)({type:Object})],gr.prototype,"networkImagesBySize",void 0),pr([(0,v.MZ)()],gr.prototype,"imageSrc",void 0),pr([(0,v.MZ)({type:Boolean})],gr.prototype,"selected",void 0),pr([(0,v.MZ)({type:Boolean})],gr.prototype,"round",void 0),gr=pr([w("wui-network-image")],gr);var mr=n.AH`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`,wr=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let yr=class extends n.WF{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return n.qy`
      <button data-selected=${(0,Bt.J)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?n.qy`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,Bt.J)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:n.qy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,Bt.J)(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};yr.styles=[p,g,mr],wr([(0,v.MZ)()],yr.prototype,"name",void 0),wr([(0,v.MZ)()],yr.prototype,"type",void 0),wr([(0,v.MZ)()],yr.prototype,"imageSrc",void 0),wr([(0,v.MZ)({type:Boolean})],yr.prototype,"disabled",void 0),wr([(0,v.MZ)({type:Boolean})],yr.prototype,"selected",void 0),wr([(0,v.MZ)({type:Boolean})],yr.prototype,"installed",void 0),yr=wr([w("wui-card-select")],yr);var br=n.AH`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon:not(.image-icon),
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon:not(.image-icon),
  a[data-variant='shade'] > wui-icon:not(.image-icon) {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon:not(.image-icon),
  a[data-variant='success'] > wui-icon:not(.image-icon),
  a[data-variant='shadeSmall'] > wui-icon:not(.image-icon),
  a[data-variant='error'] > wui-icon:not(.image-icon) {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`,vr=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Ar=class extends n.WF{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.imageIcon=void 0,this.imageIconSize="md",this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant?"small-600":"paragraph-600";return n.qy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${this.title?this.title:Lt.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?n.qy`<wui-image src=${this.imageSrc}></wui-image>`:this.imageIcon?n.qy`<wui-icon
        name=${this.imageIcon}
        color="inherit"
        size=${this.imageIconSize}
        class="image-icon"
      ></wui-icon>`:null}};Ar.styles=[p,g,br],vr([(0,v.MZ)()],Ar.prototype,"variant",void 0),vr([(0,v.MZ)()],Ar.prototype,"imageSrc",void 0),vr([(0,v.MZ)()],Ar.prototype,"imageIcon",void 0),vr([(0,v.MZ)()],Ar.prototype,"imageIconSize",void 0),vr([(0,v.MZ)({type:Boolean})],Ar.prototype,"disabled",void 0),vr([(0,v.MZ)()],Ar.prototype,"icon",void 0),vr([(0,v.MZ)()],Ar.prototype,"href",void 0),vr([(0,v.MZ)()],Ar.prototype,"text",void 0),Ar=vr([w("wui-chip")],Ar);var xr=n.AH`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,Er=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Cr=class extends n.WF{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e="md"===this.size?"paragraph-600":"small-600";return n.qy`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?n.qy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Cr.styles=[p,g,xr],Er([(0,v.MZ)()],Cr.prototype,"size",void 0),Er([(0,v.MZ)({type:Boolean})],Cr.prototype,"loading",void 0),Cr=Er([w("wui-connect-button")],Cr);var _r=n.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,kr=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Sr=class extends n.WF{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return n.qy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Sr.styles=[p,g,_r],kr([(0,v.MZ)({type:Boolean})],Sr.prototype,"disabled",void 0),kr([(0,v.MZ)()],Sr.prototype,"label",void 0),kr([(0,v.MZ)()],Sr.prototype,"buttonLabel",void 0),Sr=kr([w("wui-cta-button")],Sr);var Ir=n.AH`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;let Tr=class extends n.WF{render(){return n.qy`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};Tr.styles=[p,g,Ir],Tr=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([w("wui-details-group")],Tr);var Pr=n.AH`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`,Mr=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Nr=class extends n.WF{constructor(){super(...arguments),this.name=""}render(){return n.qy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};Nr.styles=[p,g,Pr],Mr([(0,v.MZ)()],Nr.prototype,"name",void 0),Nr=Mr([w("wui-details-group-item")],Nr);var Rr=n.AH`
  :host {
    z-index: calc(var(--w3m-z-index) + 1);
    width: 200px;
    padding: var(--wui-spacing-3xs);
    align-items: center;
    display: inherit;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-fg-base-125);
    /* Dark/Elevation/L */
    box-shadow:
      0px 8px 22px -6px rgba(0, 0, 0, 0.12),
      0px 14px 64px -4px rgba(0, 0, 0, 0.12);
  }
`,Or=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Br=class extends n.WF{constructor(){super(...arguments),this.actions=[],this.isOpen=!1}render(){return this.isOpen?n.qy`
      <wui-flex flexDirection="column" gap="4xs">
        ${this.actions.map((e=>n.qy`
            <wui-list-item
              icon=${e.icon}
              iconSize="sm"
              variant="icon"
              @click=${e.onClick}
            >
              <wui-text variant="small-400" color="fg-100">${e.label}</wui-text>
            </wui-list-item>
          `))}
      </wui-flex>
    `:null}};Br.styles=[p,g,Rr],Or([(0,v.MZ)({type:Array})],Br.prototype,"actions",void 0),Or([(0,v.MZ)({type:Boolean})],Br.prototype,"isOpen",void 0),Br=Or([w("wui-dropdown-menu")],Br);var Lr=r(68342),Ur=n.AH`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,Dr=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let jr=class extends n.WF{constructor(){super(...arguments),this.inputElementRef=(0,Lr._)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-padding-right-${this.inputRightPadding}`,t=`wui-size-${this.size}`,r={[t]:!0,[e]:Boolean(this.inputRightPadding)};return n.qy`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${(0,Lr.K)(this.inputElementRef)}
        class=${st(r)}
        type=${this.type}
        enterkeyhint=${(0,Bt.J)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?n.qy`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};jr.styles=[p,g,Ur],Dr([(0,v.MZ)()],jr.prototype,"size",void 0),Dr([(0,v.MZ)()],jr.prototype,"icon",void 0),Dr([(0,v.MZ)({type:Boolean})],jr.prototype,"disabled",void 0),Dr([(0,v.MZ)()],jr.prototype,"placeholder",void 0),Dr([(0,v.MZ)()],jr.prototype,"type",void 0),Dr([(0,v.MZ)()],jr.prototype,"keyHint",void 0),Dr([(0,v.MZ)()],jr.prototype,"value",void 0),Dr([(0,v.MZ)()],jr.prototype,"inputRightPadding",void 0),jr=Dr([w("wui-input-text")],jr);var Fr=n.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,$r=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let qr=class extends n.WF{constructor(){super(...arguments),this.disabled=!1}render(){return n.qy`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?n.qy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};qr.styles=[p,Fr],$r([(0,v.MZ)()],qr.prototype,"errorMessage",void 0),$r([(0,v.MZ)({type:Boolean})],qr.prototype,"disabled",void 0),$r([(0,v.MZ)()],qr.prototype,"value",void 0),qr=$r([w("wui-email-input")],qr);var Hr=n.AH`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`,zr=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Wr=class extends n.WF{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return n.qy`
      <wui-input-text
        value=${(0,Bt.J)(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return n.qy`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${o.oU.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?n.qy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?n.qy`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};Wr.styles=[p,Hr],zr([(0,v.MZ)()],Wr.prototype,"errorMessage",void 0),zr([(0,v.MZ)({type:Boolean})],Wr.prototype,"disabled",void 0),zr([(0,v.MZ)()],Wr.prototype,"value",void 0),zr([(0,v.MZ)({type:Boolean})],Wr.prototype,"loading",void 0),Wr=zr([w("wui-ens-input")],Wr);var Vr=n.AH`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,Gr=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Zr=class extends n.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",t="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`\n    --local-border-radius: var(${e});\n    --local-padding: var(${t});\n`,n.qy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Zr.styles=[p,g,m,Vr],Gr([(0,v.MZ)()],Zr.prototype,"size",void 0),Gr([(0,v.MZ)({type:Boolean})],Zr.prototype,"disabled",void 0),Gr([(0,v.MZ)()],Zr.prototype,"icon",void 0),Gr([(0,v.MZ)()],Zr.prototype,"iconColor",void 0),Zr=Gr([w("wui-icon-link")],Zr);var Kr=n.AH`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`,Jr=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Qr=class extends n.WF{constructor(){super(...arguments),this.icon="copy"}render(){return n.qy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Qr.styles=[p,g,Kr],Jr([(0,v.MZ)()],Qr.prototype,"icon",void 0),Qr=Jr([w("wui-input-element")],Qr);var Yr=n.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`,Xr=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let en=class extends n.WF{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return n.qy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};en.styles=[p,g,Yr],Xr([(0,v.MZ)({type:Boolean})],en.prototype,"disabled",void 0),Xr([(0,v.MZ)({type:String})],en.prototype,"value",void 0),en=Xr([w("wui-input-numeric")],en);var tn=n.AH`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`,rn=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let nn=class extends n.WF{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return n.qy`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};nn.styles=[p,g,tn],rn([(0,v.MZ)({type:Boolean})],nn.prototype,"disabled",void 0),rn([(0,v.MZ)()],nn.prototype,"color",void 0),nn=rn([w("wui-link")],nn);var sn=n.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,on=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let an=class extends n.WF{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return n.qy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${(0,Bt.J)(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return n.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return n.qy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",r=this.iconSize?this.iconSize:t;return n.qy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?n.qy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:n.qy``}chevronTemplate(){return this.chevron?n.qy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};var cn;an.styles=[p,g,sn],on([(0,v.MZ)()],an.prototype,"icon",void 0),on([(0,v.MZ)()],an.prototype,"iconSize",void 0),on([(0,v.MZ)()],an.prototype,"variant",void 0),on([(0,v.MZ)()],an.prototype,"iconVariant",void 0),on([(0,v.MZ)({type:Boolean})],an.prototype,"disabled",void 0),on([(0,v.MZ)()],an.prototype,"imageSrc",void 0),on([(0,v.MZ)()],an.prototype,"alt",void 0),on([(0,v.MZ)({type:Boolean})],an.prototype,"chevron",void 0),on([(0,v.MZ)({type:Boolean})],an.prototype,"loading",void 0),an=on([w("wui-list-item")],an),function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"}(cn||(cn={}));var ln=n.AH`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`,un=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let hn=class extends n.WF{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,t]=this.images,r="NFT"===e?.type,i=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=(t?.url?"NFT"===t.type:r)?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`\n    --local-left-border-radius: ${i};\n    --local-right-border-radius: ${s};\n    `,n.qy`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,t]=this.images,r=e?.type;return 2===this.images.length&&(e?.url||t?.url)?n.qy`<div class="swap-images-container">
        ${e?.url?n.qy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?n.qy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?n.qy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===r?n.qy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:n.qy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return e=this.getIcon(),this.status&&(t=this.getStatusColor()),e?n.qy`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};hn.styles=[ln],un([(0,v.MZ)()],hn.prototype,"type",void 0),un([(0,v.MZ)()],hn.prototype,"status",void 0),un([(0,v.MZ)()],hn.prototype,"direction",void 0),un([(0,v.MZ)({type:Boolean})],hn.prototype,"onlyDirectionIcon",void 0),un([(0,v.MZ)({type:Array})],hn.prototype,"images",void 0),un([(0,v.MZ)({type:Object})],hn.prototype,"secondImage",void 0),hn=un([w("wui-transaction-visual")],hn);var dn=n.AH`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`,fn=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let pn=class extends n.WF{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return n.qy`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,Bt.J)(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${(0,Bt.J)(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${cn[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const e=this.descriptions?.[0];return e?n.qy`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){const e=this.descriptions?.[1];return e?n.qy`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};pn.styles=[p,dn],fn([(0,v.MZ)()],pn.prototype,"type",void 0),fn([(0,v.MZ)({type:Array})],pn.prototype,"descriptions",void 0),fn([(0,v.MZ)()],pn.prototype,"date",void 0),fn([(0,v.MZ)({type:Boolean})],pn.prototype,"onlyDirectionIcon",void 0),fn([(0,v.MZ)()],pn.prototype,"status",void 0),fn([(0,v.MZ)()],pn.prototype,"direction",void 0),fn([(0,v.MZ)({type:Array})],pn.prototype,"images",void 0),fn([(0,v.MZ)({type:Array})],pn.prototype,"price",void 0),fn([(0,v.MZ)({type:Array})],pn.prototype,"amount",void 0),fn([(0,v.MZ)({type:Array})],pn.prototype,"symbol",void 0),pn=fn([w("wui-transaction-list-item")],pn);var gn=n.AH`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let mn=class extends n.WF{render(){return n.qy`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};mn.styles=[p,gn],mn=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([w("wui-transaction-list-item-loader")],mn);var wn=n.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`,yn=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let bn=class extends n.WF{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e="md"===this.size?"mini-700":"micro-700";return n.qy`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};bn.styles=[p,wn],yn([(0,v.MZ)()],bn.prototype,"variant",void 0),yn([(0,v.MZ)()],bn.prototype,"size",void 0),bn=yn([w("wui-tag")],bn);var vn=n.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`,An=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let xn=class extends n.WF{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return n.qy`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?n.qy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?n.qy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?n.qy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:n.qy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?n.qy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?n.qy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};xn.styles=[p,g,vn],An([(0,v.MZ)({type:Array})],xn.prototype,"walletImages",void 0),An([(0,v.MZ)()],xn.prototype,"imageSrc",void 0),An([(0,v.MZ)()],xn.prototype,"name",void 0),An([(0,v.MZ)()],xn.prototype,"tagLabel",void 0),An([(0,v.MZ)()],xn.prototype,"tagVariant",void 0),An([(0,v.MZ)()],xn.prototype,"icon",void 0),An([(0,v.MZ)()],xn.prototype,"walletIcon",void 0),An([(0,v.MZ)({type:Boolean})],xn.prototype,"installed",void 0),An([(0,v.MZ)({type:Boolean})],xn.prototype,"disabled",void 0),An([(0,v.MZ)({type:Boolean})],xn.prototype,"showAllWallets",void 0),xn=An([w("wui-list-wallet")],xn);var En=n.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,Cn=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let _n=class extends n.WF{constructor(){super(...arguments),this.logo="google"}render(){return n.qy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};_n.styles=[p,En],Cn([(0,v.MZ)()],_n.prototype,"logo",void 0),_n=Cn([w("wui-logo")],_n);var kn=n.AH`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,Sn=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let In=class extends n.WF{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return n.qy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};In.styles=[p,g,kn],Sn([(0,v.MZ)()],In.prototype,"logo",void 0),Sn([(0,v.MZ)({type:Boolean})],In.prototype,"disabled",void 0),In=Sn([w("wui-logo-select")],In);var Tn=n.AH`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`,Pn=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Mn=class extends n.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return n.qy`
      <button data-testid="w3m-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?n.qy`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?n.qy`<wui-image src=${this.imageSrc}></wui-image>`:n.qy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Mn.styles=[p,g,Tn],Pn([(0,v.MZ)()],Mn.prototype,"imageSrc",void 0),Pn([(0,v.MZ)({type:Boolean})],Mn.prototype,"isUnsupportedChain",void 0),Pn([(0,v.MZ)({type:Boolean})],Mn.prototype,"disabled",void 0),Mn=Pn([w("wui-network-button")],Mn);var Nn=n.AH`
  :host {
    position: relative;
    display: block;
  }
`,Rn=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let On=class extends n.WF{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map((()=>"")),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every((e=>""!==e)),this.handleKeyDown=(e,t)=>{const r=e.target,n=this.getInputElement(r);if(!n)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();const i=n.selectionStart;switch(e.key){case"ArrowLeft":i&&n.setSelectionRange(i+1,i+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===n.value?this.focusInputField("prev",t):this.updateInput(n,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){const e=t+1;if(!this.shouldInputBeEnabled(e))return;const r=this.numerics[e<this.length?e:t],n=r?this.getInputElement(r):void 0;n&&(n.disabled=!1,n.focus())}if("prev"===e){const e=t-1,r=this.numerics[e>-1?e:t],n=r?this.getInputElement(r):void 0;n&&n.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));const e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return n.qy`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map(((e,t)=>n.qy`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @click=${e=>this.selectInput(e)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `))}
      </wui-flex>
    `}updateInput(e,t,r){const n=this.numerics[t],i=e||(n?this.getInputElement(n):void 0);i&&(i.value=r,this.values=this.values.map(((e,n)=>n===t?r:e)))}selectInput(e){const t=e.target;if(t){const e=this.getInputElement(t);e?.select()}}handleInput(e,t){const r=e.target,n=this.getInputElement(r);if(n){const r=n.value;"insertFromPaste"===e.inputType?this.handlePaste(n,r,t):Lt.isNumber(r)&&e.data?(this.updateInput(n,t,e.data),this.focusInputField("next",t)):this.updateInput(n,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,r){const n=t[0];if(n&&Lt.isNumber(n)){this.updateInput(e,r,n);const i=t.substring(1);if(r+1<this.length&&i.length){const e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,i,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};On.styles=[p,Nn],Rn([(0,v.MZ)({type:Number})],On.prototype,"length",void 0),Rn([(0,v.MZ)({type:String})],On.prototype,"otp",void 0),Rn([(0,v.wk)()],On.prototype,"values",void 0),On=Rn([w("wui-otp")],On);var Bn=r(87583);function Ln(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}const Un={generate(e,t,r){const i="#141414",s=[],o=function(e){const t=Array.prototype.slice.call(Bn.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),r=Math.sqrt(t.length);return t.reduce(((e,t,n)=>(n%r==0?e.push([t]):e[e.length-1].push(t))&&e),[])}(e),a=t/o.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach((({x:e,y:t})=>{const r=(o.length-7)*a*e,l=(o.length-7)*a*t,u=.45;for(let e=0;e<c.length;e+=1){const t=a*(7-2*e);s.push(n.JW`
            <rect
              fill=${2===e?i:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*u:t*u}
              ry= ${0===e?(t-5)*u:t*u}
              stroke=${i}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?l+a*e+2.5:l+a*e}
              y= ${0===e?r+a*e+2.5:r+a*e}
            />
          `)}}));const l=Math.floor((r+25)/a),u=o.length/2-l/2,h=o.length/2+l/2-1,d=[];o.forEach(((e,t)=>{e.forEach(((e,r)=>{if(o[t][r]&&!(t<7&&r<7||t>o.length-8&&r<7||t<7&&r>o.length-8||t>u&&t<h&&r>u&&r<h)){const e=t*a+a/2,n=r*a+a/2;d.push([e,n])}}))}));const f={};return d.forEach((([e,t])=>{f[e]?f[e]?.push(t):f[e]=[t]})),Object.entries(f).map((([e,t])=>{const r=t.filter((e=>t.every((t=>!Ln(e,t,a)))));return[Number(e),r]})).forEach((([e,t])=>{t.forEach((t=>{s.push(n.JW`<circle cx=${e} cy=${t} fill=${i} r=${a/2.5} />`)}))})),Object.entries(f).filter((([e,t])=>t.length>1)).map((([e,t])=>{const r=t.filter((e=>t.some((t=>Ln(e,t,a)))));return[Number(e),r]})).map((([e,t])=>{t.sort(((e,t)=>e<t?-1:1));const r=[];for(const e of t){const t=r.find((t=>t.some((t=>Ln(e,t,a)))));t?t.push(e):r.push([e])}return[e,r.map((e=>[e[0],e[e.length-1]]))]})).forEach((([e,t])=>{t.forEach((([t,r])=>{s.push(n.JW`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${i}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)}))})),s}};var Dn=n.AH`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,jn=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Fn=class extends n.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,n.qy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e="light"===this.theme?this.size:this.size-32;return n.JW`
      <svg height=${e} width=${e}>
        ${Un.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?n.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?n.qy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:n.qy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Fn.styles=[p,Dn],jn([(0,v.MZ)()],Fn.prototype,"uri",void 0),jn([(0,v.MZ)({type:Number})],Fn.prototype,"size",void 0),jn([(0,v.MZ)()],Fn.prototype,"theme",void 0),jn([(0,v.MZ)()],Fn.prototype,"imageSrc",void 0),jn([(0,v.MZ)()],Fn.prototype,"alt",void 0),jn([(0,v.MZ)({type:Boolean})],Fn.prototype,"arenaClear",void 0),jn([(0,v.MZ)({type:Boolean})],Fn.prototype,"farcaster",void 0),Fn=jn([w("wui-qr-code")],Fn);var $n=n.AH`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let qn=class extends n.WF{constructor(){super(...arguments),this.inputComponentRef=(0,Lr._)()}render(){return n.qy`
      <wui-input-text
        ${(0,Lr.K)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};qn.styles=[p,$n],qn=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([w("wui-search-bar")],qn);var Hn=n.AH`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`,zn=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Wn=class extends n.WF{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1}render(){return n.qy`
      ${this.loading?n.qy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:n.qy`<wui-icon-box
            size="sm"
            iconSize="xs"
            iconColor=${this.iconColor}
            backgroundColor=${this.backgroundColor}
            icon=${this.icon}
            background="opaque"
          ></wui-icon-box>`}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}};Wn.styles=[p,Hn],zn([(0,v.MZ)()],Wn.prototype,"backgroundColor",void 0),zn([(0,v.MZ)()],Wn.prototype,"iconColor",void 0),zn([(0,v.MZ)()],Wn.prototype,"icon",void 0),zn([(0,v.MZ)()],Wn.prototype,"message",void 0),zn([(0,v.MZ)()],Wn.prototype,"loading",void 0),Wn=zn([w("wui-snackbar")],Wn);var Vn=r(8324),Gn=n.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`,Zn=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Kn=class extends n.WF{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`\n      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});\n   `,n.qy`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){Vn.hG.close()}};Kn.styles=[p,Gn],Zn([(0,v.MZ)()],Kn.prototype,"message",void 0),Zn([(0,v.MZ)()],Kn.prototype,"backgroundColor",void 0),Zn([(0,v.MZ)()],Kn.prototype,"iconColor",void 0),Zn([(0,v.MZ)()],Kn.prototype,"icon",void 0),Kn=Zn([w("wui-alertbar")],Kn);var Jn=n.AH`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,Qn=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Yn=class extends n.WF{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((e,t)=>{const r=t===this.activeTab;return n.qy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}iconTemplate(e){return e.icon?n.qy`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const r=this.buttons[this.activeTab],n=this.buttons[e],i=r?.querySelector("wui-text"),s=n?.querySelector("wui-text"),o=n?.getBoundingClientRect(),a=s?.getBoundingClientRect();r&&i&&!t&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),n&&o&&a&&s&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(o.width+a.width)+6}px`,n.animate([{width:`${o.width+a.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};Yn.styles=[p,g,Jn],Qn([(0,v.MZ)({type:Array})],Yn.prototype,"tabs",void 0),Qn([(0,v.MZ)()],Yn.prototype,"onTabChange",void 0),Qn([(0,v.MZ)({type:Array})],Yn.prototype,"buttons",void 0),Qn([(0,v.MZ)({type:Boolean})],Yn.prototype,"disabled",void 0),Qn([(0,v.MZ)()],Yn.prototype,"localTabWidth",void 0),Qn([(0,v.wk)()],Yn.prototype,"activeTab",void 0),Qn([(0,v.wk)()],Yn.prototype,"isDense",void 0),Yn=Qn([w("wui-tabs")],Yn);var Xn=n.AH`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`,ei=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let ti=class extends n.WF{constructor(){super(...arguments),this.text=""}render(){return n.qy`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?n.qy`<wui-image src=${this.imageSrc}></wui-image>`:n.qy`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ti.styles=[p,g,Xn],ei([(0,v.MZ)()],ti.prototype,"imageSrc",void 0),ei([(0,v.MZ)()],ti.prototype,"text",void 0),ti=ei([w("wui-token-button")],ti);var ri=n.AH`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,ni=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let ii=class extends n.WF{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,n.qy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};ii.styles=[p,g,ri],ni([(0,v.MZ)()],ii.prototype,"placement",void 0),ni([(0,v.MZ)()],ii.prototype,"variant",void 0),ni([(0,v.MZ)()],ii.prototype,"message",void 0),ii=ni([w("wui-tooltip")],ii);var si=n.AH`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`,oi=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let ai=class extends n.WF{constructor(){super(),this.observer=new IntersectionObserver((()=>{})),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.visible=!0:this.visible=!1}))}),{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){if(!this.visible)return null;const e=this.amount&&this.price?o.Se.multiply(this.price,this.amount)?.toFixed(3):null;return n.qy`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${e?n.qy`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${Lt.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?n.qy`<wui-text variant="small-400" color="fg-200">
                  ${Lt.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?n.qy`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?n.qy`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};ai.styles=[p,g,si],oi([(0,v.MZ)()],ai.prototype,"imageSrc",void 0),oi([(0,v.MZ)()],ai.prototype,"name",void 0),oi([(0,v.MZ)()],ai.prototype,"symbol",void 0),oi([(0,v.MZ)()],ai.prototype,"price",void 0),oi([(0,v.MZ)()],ai.prototype,"amount",void 0),oi([(0,v.wk)()],ai.prototype,"visible",void 0),oi([(0,v.wk)()],ai.prototype,"imageError",void 0),ai=oi([w("wui-token-list-item")],ai);var ci=n.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,li=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let ui=class extends n.WF{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,n.qy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?n.qy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:n.qy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};ui.styles=[p,ci],li([(0,v.MZ)()],ui.prototype,"imageSrc",void 0),li([(0,v.MZ)()],ui.prototype,"alt",void 0),li([(0,v.MZ)({type:Boolean})],ui.prototype,"borderRadiusFull",void 0),ui=li([w("wui-visual-thumbnail")],ui);var hi=n.AH`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`,di=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let fi=class extends n.WF{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return n.qy`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};fi.styles=[p,g,hi],di([(0,v.MZ)()],fi.prototype,"label",void 0),di([(0,v.MZ)()],fi.prototype,"description",void 0),di([(0,v.MZ)()],fi.prototype,"icon",void 0),fi=di([w("wui-notice-card")],fi);var pi=n.AH`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-150), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`,gi=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let mi=class extends n.WF{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout((()=>{this.checkHeight()}),1)}checkHeight(){this.updateComplete.then((()=>{const e=this.shadowRoot?.querySelector(".heightContent"),t=this.shadowRoot?.querySelector(".textContent");if(e&&t){this.scrollElement=e;const r=t?.scrollHeight;r&&r>100&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}}))}render(){return n.qy`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||Boolean(this.toggled)}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){const e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?n.qy` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};mi.styles=[p,g,pi],gi([(0,v.MZ)()],mi.prototype,"textTitle",void 0),gi([(0,v.MZ)()],mi.prototype,"overflowedContent",void 0),mi=gi([w("wui-list-accordion")],mi);var wi=n.AH`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,yi=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let bi=class extends n.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return n.qy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?n.qy`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?n.qy` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:n.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};bi.styles=[p,g,wi],yi([(0,v.MZ)()],bi.prototype,"imageSrc",void 0),yi([(0,v.MZ)()],bi.prototype,"textTitle",void 0),yi([(0,v.MZ)()],bi.prototype,"textValue",void 0),bi=yi([w("wui-list-content")],bi);var vi=n.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,Ai=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let xi=class extends n.WF{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return n.qy`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?n.qy`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?n.qy`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:n.qy`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};xi.styles=[p,g,vi],Ai([(0,v.MZ)()],xi.prototype,"imageSrc",void 0),Ai([(0,v.MZ)()],xi.prototype,"name",void 0),Ai([(0,v.MZ)({type:Boolean})],xi.prototype,"disabled",void 0),Ai([(0,v.MZ)({type:Boolean})],xi.prototype,"selected",void 0),Ai([(0,v.MZ)({type:Boolean})],xi.prototype,"transparent",void 0),xi=Ai([w("wui-list-network")],xi);var Ei=n.AH`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,Ci=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let _i=class extends n.WF{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return n.qy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?n.qy`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:n.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};_i.styles=[p,g,Ei],Ci([(0,v.MZ)()],_i.prototype,"amount",void 0),Ci([(0,v.MZ)()],_i.prototype,"networkCurreny",void 0),Ci([(0,v.MZ)()],_i.prototype,"networkImageUrl",void 0),Ci([(0,v.MZ)()],_i.prototype,"receiverAddress",void 0),Ci([(0,v.MZ)()],_i.prototype,"addressExplorerUrl",void 0),_i=Ci([w("wui-list-wallet-transaction")],_i);var ki=n.AH`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-060);
    }
  }
`,Si=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Ii=class extends n.WF{constructor(){super(...arguments),this.text=""}render(){return n.qy`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};Ii.styles=[p,g,ki],Si([(0,v.MZ)()],Ii.prototype,"text",void 0),Ii=Si([w("wui-promo")],Ii);var Ti=n.AH`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`,Pi=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Mi=class extends n.WF{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return n.qy`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};Mi.styles=[p,Ti],Pi([(0,v.MZ)()],Mi.prototype,"dollars",void 0),Pi([(0,v.MZ)()],Mi.prototype,"pennies",void 0),Mi=Pi([w("wui-balance")],Mi);var Ni=n.AH`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,Ri=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Oi=class extends n.WF{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return n.qy`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${Lt.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?n.qy`<wui-image src=${this.networkSrc}></wui-image>`:n.qy`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Oi.styles=[p,g,Ni],Ri([(0,v.MZ)()],Oi.prototype,"networkSrc",void 0),Ri([(0,v.MZ)()],Oi.prototype,"avatarSrc",void 0),Ri([(0,v.MZ)()],Oi.prototype,"profileName",void 0),Ri([(0,v.MZ)()],Oi.prototype,"address",void 0),Ri([(0,v.MZ)()],Oi.prototype,"icon",void 0),Oi=Ri([w("wui-profile-button")],Oi);var Bi=n.AH`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,Li=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Ui=class extends n.WF{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail",this.connectedConnector=Vn.iT.getConnectedConnector(),this.shouldShowIcon="AUTH"===this.connectedConnector}render(){return n.qy`<button ontouchstart data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.shouldShowIcon?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${Lt.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){e.target instanceof HTMLElement&&"copy-address"===e.target.id?this.onCopyClick?.(e):this.onProfileClick?.(e)}getIconTemplate(e){return n.qy`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};Ui.styles=[p,g,Bi],Li([(0,v.MZ)()],Ui.prototype,"avatarSrc",void 0),Li([(0,v.MZ)()],Ui.prototype,"profileName",void 0),Li([(0,v.MZ)()],Ui.prototype,"address",void 0),Li([(0,v.MZ)()],Ui.prototype,"icon",void 0),Li([(0,v.MZ)()],Ui.prototype,"onProfileClick",void 0),Li([(0,v.MZ)()],Ui.prototype,"onCopyClick",void 0),Ui=Li([w("wui-profile-button-v2")],Ui);var Di=n.AH`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`,ji=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Fi=class extends n.WF{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const e="sm"===this.size?"small-600":"paragraph-600";return n.qy`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?n.qy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};Fi.styles=[p,g,Di],ji([(0,v.MZ)()],Fi.prototype,"variant",void 0),ji([(0,v.MZ)()],Fi.prototype,"imageSrc",void 0),ji([(0,v.MZ)({type:Boolean})],Fi.prototype,"disabled",void 0),ji([(0,v.MZ)()],Fi.prototype,"icon",void 0),ji([(0,v.MZ)()],Fi.prototype,"size",void 0),ji([(0,v.MZ)()],Fi.prototype,"text",void 0),Fi=ji([w("wui-chip-button")],Fi);var $i=n.AH`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`,qi=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Hi=class extends n.WF{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return n.qy`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return n.qy` <wui-flex class="networks">
      ${e?.map((e=>n.qy` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`))}
    </wui-flex>`}};Hi.styles=[p,g,$i],qi([(0,v.MZ)({type:Array})],Hi.prototype,"networkImages",void 0),qi([(0,v.MZ)()],Hi.prototype,"text",void 0),Hi=qi([w("wui-compatible-network")],Hi);var zi=n.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`,Wi=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Vi=class extends n.WF{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return n.qy`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Vi.styles=[p,g,zi],Wi([(0,v.MZ)()],Vi.prototype,"icon",void 0),Wi([(0,v.MZ)()],Vi.prototype,"text",void 0),Vi=Wi([w("wui-banner")],Vi);var Gi=n.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`,Zi=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Ki=class extends n.WF{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return n.qy`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Ki.styles=[p,g,Gi],Zi([(0,v.MZ)()],Ki.prototype,"imageSrc",void 0),Zi([(0,v.MZ)()],Ki.prototype,"text",void 0),Zi([(0,v.MZ)()],Ki.prototype,"size",void 0),Ki=Zi([w("wui-banner-img")],Ki);var Ji=n.AH`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`,Qi=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Yi=class extends n.WF{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return n.qy`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${Lt.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?n.qy`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:n.qy`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};Yi.styles=[p,g,Ji],Qi([(0,v.MZ)()],Yi.prototype,"tokenName",void 0),Qi([(0,v.MZ)()],Yi.prototype,"tokenImageUrl",void 0),Qi([(0,v.MZ)({type:Number})],Yi.prototype,"tokenValue",void 0),Qi([(0,v.MZ)()],Yi.prototype,"tokenAmount",void 0),Qi([(0,v.MZ)()],Yi.prototype,"tokenCurrency",void 0),Qi([(0,v.MZ)({type:Boolean})],Yi.prototype,"clickable",void 0),Yi=Qi([w("wui-list-token")],Yi);var Xi=n.AH`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`,es=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let ts=class extends n.WF{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return n.qy`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?n.qy` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:n.qy`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};ts.styles=[p,g,Xi],es([(0,v.MZ)()],ts.prototype,"icon",void 0),es([(0,v.MZ)()],ts.prototype,"text",void 0),es([(0,v.MZ)()],ts.prototype,"description",void 0),es([(0,v.MZ)()],ts.prototype,"tag",void 0),es([(0,v.MZ)()],ts.prototype,"iconBackgroundColor",void 0),es([(0,v.MZ)()],ts.prototype,"iconColor",void 0),es([(0,v.MZ)({type:Boolean})],ts.prototype,"disabled",void 0),ts=es([w("wui-list-description")],ts);var rs=n.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`;const ns=/[.*+?^${}()|[\]\\]/gu,is=/[0-9,.]/u;var ss=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let os=class extends n.WF{constructor(){super(...arguments),this.inputElementRef=(0,Lr._)(),this.disabled=!1,this.value="",this.placeholder="0"}render(){return this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),n.qy`<input
      ${(0,Lr.K)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){const t=e.data;if(t&&this.inputElementRef?.value)if(","===t){const e=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=e,this.value=`${this.value}${e}`}else is.test(t)||(this.inputElementRef.value.value=this.value.replace(new RegExp(t.replace(ns,"\\$&"),"gu"),""));this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};os.styles=[p,g,rs],ss([(0,v.MZ)({type:Boolean})],os.prototype,"disabled",void 0),ss([(0,v.MZ)({type:String})],os.prototype,"value",void 0),ss([(0,v.MZ)({type:String})],os.prototype,"placeholder",void 0),os=ss([w("wui-input-amount")],os);var as=n.AH`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`,cs=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let ls=class extends n.WF{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return n.qy`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?n.qy`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?n.qy`<wui-image src=${this.imageSrc}></wui-image>`:n.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};ls.styles=[p,g,as],cs([(0,v.MZ)()],ls.prototype,"text",void 0),cs([(0,v.MZ)()],ls.prototype,"address",void 0),cs([(0,v.MZ)()],ls.prototype,"imageSrc",void 0),cs([(0,v.MZ)({type:Boolean})],ls.prototype,"isAddress",void 0),ls=cs([w("wui-preview-item")],ls);var us=n.AH`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`,hs=r(44039),ds=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let fs=class extends n.WF{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.connectedConnector=Vn.iT.getConnectedConnector(),this.labels=Vn.Uj.state.addressLabels,this.caipNetwork=Vn.WB.state.activeCaipNetwork,this.socialProvider=Vn.iT.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){super.connectedCallback(),Vn.TP.getBalance(this.accountAddress,this.caipNetwork?.caipNetworkId).then((e=>{let t=this.balance;e.balances.length>0&&(t=e.balances.reduce(((e,t)=>e+(t?.value||0)),0)),this.balance=t,this.fetchingBalance=!1,this.requestUpdate()})).catch((()=>{this.fetchingBalance=!1,this.requestUpdate()}))}render(){const e=this.getLabel();return this.shouldShowIcon="AUTH"===this.connectedConnector,n.qy`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?n.qy`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===hs.Vl.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:n.qy`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${Lt.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${this.fetchingBalance?n.qy`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:n.qy` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
          <slot name="action"></slot>
        </wui-flex>
      </wui-flex>
    `}getLabel(){let e=this.labels?.get(this.accountAddress);return e||"AUTH"!==this.connectedConnector?!e&&"INJECTED"===this.connectedConnector||"ANNOUNCED"===this.connectedConnector?e="Injected Account":e||(e="EOA"):e=`${"eoa"===this.accountType?this.socialProvider??"Email":"Smart"} Account`,e}};fs.styles=[p,g,us],ds([(0,v.MZ)()],fs.prototype,"accountAddress",void 0),ds([(0,v.MZ)()],fs.prototype,"accountType",void 0),ds([(0,v.MZ)({type:Boolean})],fs.prototype,"selected",void 0),ds([(0,v.MZ)({type:Function})],fs.prototype,"onSelect",void 0),fs=ds([w("wui-list-account")],fs);var ps=n.AH`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`,gs=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let ms=class extends n.WF{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return n.qy`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};ms.styles=[p,g,ps],gs([(0,v.MZ)()],ms.prototype,"text",void 0),gs([(0,v.MZ)()],ms.prototype,"icon",void 0),ms=gs([w("wui-icon-button")],ms);var ws=n.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`,ys=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let bs=class extends n.WF{constructor(){super(...arguments),this.text="",this.disabled=!1}render(){return n.qy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};bs.styles=[p,g,ws],ys([(0,v.MZ)()],bs.prototype,"text",void 0),ys([(0,v.MZ)({type:Boolean})],bs.prototype,"disabled",void 0),bs=ys([w("wui-list-button")],bs);var vs=n.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`,As=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let xs=class extends n.WF{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return n.qy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return"center"===this.align?n.qy` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};xs.styles=[p,g,vs],As([(0,v.MZ)()],xs.prototype,"logo",void 0),As([(0,v.MZ)()],xs.prototype,"name",void 0),As([(0,v.MZ)()],xs.prototype,"align",void 0),As([(0,v.MZ)({type:Boolean})],xs.prototype,"disabled",void 0),xs=As([w("wui-list-social")],xs);var Es=n.AH`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`,Cs=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let _s=class extends n.WF{constructor(){super(...arguments),this.imageSrc=""}render(){return n.qy`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?n.qy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:n.qy`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};_s.styles=[p,g,m,Es],Cs([(0,v.MZ)()],_s.prototype,"imageSrc",void 0),_s=Cs([w("wui-select")],_s);var ks=n.AH`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,Ss=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Is=class extends n.WF{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&Lt.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&Lt.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&Lt.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&Lt.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&Lt.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&Lt.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&Lt.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&Lt.getSpacingStyles(this.margin,3)};\n    `,n.qy`<slot></slot>`}};Is.styles=[p,ks],Ss([(0,v.MZ)()],Is.prototype,"gridTemplateRows",void 0),Ss([(0,v.MZ)()],Is.prototype,"gridTemplateColumns",void 0),Ss([(0,v.MZ)()],Is.prototype,"justifyItems",void 0),Ss([(0,v.MZ)()],Is.prototype,"alignItems",void 0),Ss([(0,v.MZ)()],Is.prototype,"justifyContent",void 0),Ss([(0,v.MZ)()],Is.prototype,"alignContent",void 0),Ss([(0,v.MZ)()],Is.prototype,"columnGap",void 0),Ss([(0,v.MZ)()],Is.prototype,"rowGap",void 0),Ss([(0,v.MZ)()],Is.prototype,"gap",void 0),Ss([(0,v.MZ)()],Is.prototype,"padding",void 0),Ss([(0,v.MZ)()],Is.prototype,"margin",void 0),Is=Ss([w("wui-grid")],Is);var Ts=n.AH`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`,Ps=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Ms=class extends n.WF{constructor(){super(...arguments),this.text=""}render(){return n.qy`${this.template()}`}template(){return this.text?n.qy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};Ms.styles=[p,Ts],Ps([(0,v.MZ)()],Ms.prototype,"text",void 0),Ms=Ps([w("wui-separator")],Ms);const Ns={interpolate(e,t,r){if(2!==e.length||2!==t.length)throw new Error("inputRange and outputRange must be an array of length 2");const n=e[0]||0,i=e[1]||0,s=t[0]||0,o=t[1]||0;return r<n?s:r>i?o:(o-s)/(i-n)*(r-n)+s}},Rs=["receive","deposit","borrow","claim"],Os=["withdraw","repay","burn"],Bs={getMonthName(e){const t=new Date;return t.setMonth(e),t.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(e,t){const r=o.rL.getYear(),n=this.getMonthName(t);return e===r?n:`${n} ${e}`},getTransactionImages(e){const[t,r]=e,n=Boolean(t)&&e?.every((e=>Boolean(e.nft_info))),i=e?.length>1;return 2!==e?.length||n?i?e.map((e=>this.getTransactionImage(e))):[this.getTransactionImage(t)]:[this.getTransactionImage(t),this.getTransactionImage(r)]},getTransactionImage(e){return{type:Bs.getTransactionTransferTokenType(e),url:Bs.getTransactionImageURL(e)}},getTransactionImageURL(e){let t;const r=Boolean(e?.nft_info),n=Boolean(e?.fungible_info);return e&&r?t=e?.nft_info?.content?.preview?.url:e&&n&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType(e){return e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":void 0},getTransactionDescriptions(e){const t=e?.metadata?.operationType,r=e?.transfers,n=e?.transfers?.length>0,i=e?.transfers?.length>1,s=n&&r?.every((e=>Boolean(e?.fungible_info))),[o,a]=r;let c=this.getTransferDescription(o),l=this.getTransferDescription(a);if(!n)return"send"!==t&&"receive"!==t||!s?[e.metadata.status]:(c=Lt.getTruncateString({string:e?.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),l=Lt.getTruncateString({string:e?.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[c,l]);if(i)return r.map((e=>this.getTransferDescription(e)));let u="";return Rs.includes(t)?u="+":Os.includes(t)&&(u="-"),c=u.concat(c),[c]},getTransferDescription(e){let t="";return e?(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-"),t):t},getFungibleTransferDescription(e){return e?[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue(e){return e?parseFloat(e).toFixed(3):null}}},44039:function(e,t,r){"use strict";r.d(t,{QH:function(){return $r},YW:function(){return Vr},Vl:function(){return o}}),r(45369);const n=process.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL||"https://secure.walletconnect.org/sdk",i=process.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL||"error",s={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@appkit-wallet/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",SOCIAL_USERNAME:"SOCIAL_USERNAME",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_CONNECT_SOCIAL:"@w3m-app/CONNECT_SOCIAL",APP_GET_SOCIAL_REDIRECT_URI:"@w3m-app/GET_SOCIAL_REDIRECT_URI",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",APP_CONNECT_FARCASTER:"@w3m-app/CONNECT_FARCASTER",APP_GET_FARCASTER_URI:"@w3m-app/GET_FARCASTER_URI",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_CONNECT_SOCIAL_SUCCESS:"@w3m-frame/CONNECT_SOCIAL_SUCCESS",FRAME_CONNECT_SOCIAL_ERROR:"@w3m-frame/CONNECT_SOCIAL_ERROR",FRAME_CONNECT_FARCASTER_SUCCESS:"@w3m-frame/CONNECT_FARCASTER_SUCCESS",FRAME_CONNECT_FARCASTER_ERROR:"@w3m-frame/CONNECT_FARCASTER_ERROR",FRAME_GET_FARCASTER_URI_SUCCESS:"@w3m-frame/GET_FARCASTER_URI_SUCCESS",FRAME_GET_FARCASTER_URI_ERROR:"@w3m-frame/GET_FARCASTER_URI_ERROR",FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",FRAME_READY:"@w3m-frame/READY",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},o={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}};var a,c;!function(e){e.assertEqual=e=>e,e.assertIs=function(e){},e.assertNever=function(e){throw new Error},e.arrayToEnum=e=>{const t={};for(const r of e)t[r]=r;return t},e.getValidEnumValues=t=>{const r=e.objectKeys(t).filter((e=>"number"!=typeof t[t[e]])),n={};for(const e of r)n[e]=t[e];return e.objectValues(n)},e.objectValues=t=>e.objectKeys(t).map((function(e){return t[e]})),e.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{const t=[];for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t},e.find=(e,t)=>{for(const r of e)if(t(r))return r},e.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,e.joinValues=function(e,t=" | "){return e.map((e=>"string"==typeof e?`'${e}'`:e)).join(t)},e.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t}(a||(a={})),function(e){e.mergeShapes=(e,t)=>({...e,...t})}(c||(c={}));const l=a.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),u=e=>{switch(typeof e){case"undefined":return l.undefined;case"string":return l.string;case"number":return isNaN(e)?l.nan:l.number;case"boolean":return l.boolean;case"function":return l.function;case"bigint":return l.bigint;case"symbol":return l.symbol;case"object":return Array.isArray(e)?l.array:null===e?l.null:e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch?l.promise:"undefined"!=typeof Map&&e instanceof Map?l.map:"undefined"!=typeof Set&&e instanceof Set?l.set:"undefined"!=typeof Date&&e instanceof Date?l.date:l.object;default:return l.unknown}},h=a.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class d extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(e){return e.message},r={_errors:[]},n=e=>{for(const i of e.issues)if("invalid_union"===i.code)i.unionErrors.map(n);else if("invalid_return_type"===i.code)n(i.returnTypeError);else if("invalid_arguments"===i.code)n(i.argumentsError);else if(0===i.path.length)r._errors.push(t(i));else{let e=r,n=0;for(;n<i.path.length;){const r=i.path[n];n===i.path.length-1?(e[r]=e[r]||{_errors:[]},e[r]._errors.push(t(i))):e[r]=e[r]||{_errors:[]},e=e[r],n++}}};return n(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,a.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=e=>e.message){const t={},r=[];for(const n of this.issues)n.path.length>0?(t[n.path[0]]=t[n.path[0]]||[],t[n.path[0]].push(e(n))):r.push(e(n));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}d.create=e=>new d(e);const f=(e,t)=>{let r;switch(e.code){case h.invalid_type:r=e.received===l.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case h.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,a.jsonStringifyReplacer)}`;break;case h.unrecognized_keys:r=`Unrecognized key(s) in object: ${a.joinValues(e.keys,", ")}`;break;case h.invalid_union:r="Invalid input";break;case h.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${a.joinValues(e.options)}`;break;case h.invalid_enum_value:r=`Invalid enum value. Expected ${a.joinValues(e.options)}, received '${e.received}'`;break;case h.invalid_arguments:r="Invalid function arguments";break;case h.invalid_return_type:r="Invalid function return type";break;case h.invalid_date:r="Invalid date";break;case h.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:a.assertNever(e.validation):r="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case h.too_small:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case h.too_big:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case h.custom:r="Invalid input";break;case h.invalid_intersection_types:r="Intersection results could not be merged";break;case h.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case h.not_finite:r="Number must be finite";break;default:r=t.defaultError,a.assertNever(e)}return{message:r}};let p=f;function g(){return p}const m=e=>{const{data:t,path:r,errorMaps:n,issueData:i}=e,s=[...r,...i.path||[]],o={...i,path:s};let a="";const c=n.filter((e=>!!e)).slice().reverse();for(const e of c)a=e(o,{data:t,defaultError:a}).message;return{...i,path:s,message:i.message||a}};function w(e,t){const r=m({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,g(),f].filter((e=>!!e))});e.common.issues.push(r)}class y{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){const r=[];for(const n of t){if("aborted"===n.status)return b;"dirty"===n.status&&e.dirty(),r.push(n.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){const r=[];for(const e of t)r.push({key:await e.key,value:await e.value});return y.mergeObjectSync(e,r)}static mergeObjectSync(e,t){const r={};for(const n of t){const{key:t,value:i}=n;if("aborted"===t.status)return b;if("aborted"===i.status)return b;"dirty"===t.status&&e.dirty(),"dirty"===i.status&&e.dirty(),"__proto__"===t.value||void 0===i.value&&!n.alwaysSet||(r[t.value]=i.value)}return{status:e.value,value:r}}}const b=Object.freeze({status:"aborted"}),v=e=>({status:"dirty",value:e}),A=e=>({status:"valid",value:e}),x=e=>"aborted"===e.status,E=e=>"dirty"===e.status,C=e=>"valid"===e.status,_=e=>"undefined"!=typeof Promise&&e instanceof Promise;var k;!function(e){e.errToObj=e=>"string"==typeof e?{message:e}:e||{},e.toString=e=>"string"==typeof e?e:null==e?void 0:e.message}(k||(k={}));class S{constructor(e,t,r,n){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=n}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const I=(e,t)=>{if(C(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new d(e.common.issues);return this._error=t,this._error}}};function T(e){if(!e)return{};const{errorMap:t,invalid_type_error:r,required_error:n,description:i}=e;if(t&&(r||n))throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');return t?{errorMap:t,description:i}:{errorMap:(e,t)=>"invalid_type"!==e.code?{message:t.defaultError}:void 0===t.data?{message:null!=n?n:t.defaultError}:{message:null!=r?r:t.defaultError},description:i}}class P{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return u(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:u(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new y,ctx:{common:e.parent.common,data:e.data,parsedType:u(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(_(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;const n={common:{issues:[],async:null!==(r=null==t?void 0:t.async)&&void 0!==r&&r,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:u(e)},i=this._parseSync({data:e,path:n.path,parent:n});return I(n,i)}async parseAsync(e,t){const r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){const r={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:u(e)},n=this._parse({data:e,path:r.path,parent:r}),i=await(_(n)?n:Promise.resolve(n));return I(r,i)}refine(e,t){const r=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t;return this._refinement(((t,n)=>{const i=e(t),s=()=>n.addIssue({code:h.custom,...r(t)});return"undefined"!=typeof Promise&&i instanceof Promise?i.then((e=>!!e||(s(),!1))):!!i||(s(),!1)}))}refinement(e,t){return this._refinement(((r,n)=>!!e(r)||(n.addIssue("function"==typeof t?t(r,n):t),!1)))}_refinement(e){return new we({schema:this,typeName:Te.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return ye.create(this,this._def)}nullable(){return be.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Y.create(this,this._def)}promise(){return me.create(this,this._def)}or(e){return te.create([this,e],this._def)}and(e){return se.create(this,e,this._def)}transform(e){return new we({...T(this._def),schema:this,typeName:Te.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t="function"==typeof e?e:()=>e;return new ve({...T(this._def),innerType:this,defaultValue:t,typeName:Te.ZodDefault})}brand(){return new Ce({typeName:Te.ZodBranded,type:this,...T(this._def)})}catch(e){const t="function"==typeof e?e:()=>e;return new Ae({...T(this._def),innerType:this,catchValue:t,typeName:Te.ZodCatch})}describe(e){return new(0,this.constructor)({...this._def,description:e})}pipe(e){return _e.create(this,e)}readonly(){return ke.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const M=/^c[^\s-]{8,}$/i,N=/^[a-z][a-z0-9]*$/,R=/^[0-9A-HJKMNP-TV-Z]{26}$/,O=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,B=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;let L;const U=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,D=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;class j extends P{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==l.string){const t=this._getOrReturnCtx(e);return w(t,{code:h.invalid_type,expected:l.string,received:t.parsedType}),b}const t=new y;let r;for(const o of this._def.checks)if("min"===o.kind)e.data.length<o.value&&(r=this._getOrReturnCtx(e,r),w(r,{code:h.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),t.dirty());else if("max"===o.kind)e.data.length>o.value&&(r=this._getOrReturnCtx(e,r),w(r,{code:h.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),t.dirty());else if("length"===o.kind){const n=e.data.length>o.value,i=e.data.length<o.value;(n||i)&&(r=this._getOrReturnCtx(e,r),n?w(r,{code:h.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}):i&&w(r,{code:h.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}),t.dirty())}else if("email"===o.kind)B.test(e.data)||(r=this._getOrReturnCtx(e,r),w(r,{validation:"email",code:h.invalid_string,message:o.message}),t.dirty());else if("emoji"===o.kind)L||(L=new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),L.test(e.data)||(r=this._getOrReturnCtx(e,r),w(r,{validation:"emoji",code:h.invalid_string,message:o.message}),t.dirty());else if("uuid"===o.kind)O.test(e.data)||(r=this._getOrReturnCtx(e,r),w(r,{validation:"uuid",code:h.invalid_string,message:o.message}),t.dirty());else if("cuid"===o.kind)M.test(e.data)||(r=this._getOrReturnCtx(e,r),w(r,{validation:"cuid",code:h.invalid_string,message:o.message}),t.dirty());else if("cuid2"===o.kind)N.test(e.data)||(r=this._getOrReturnCtx(e,r),w(r,{validation:"cuid2",code:h.invalid_string,message:o.message}),t.dirty());else if("ulid"===o.kind)R.test(e.data)||(r=this._getOrReturnCtx(e,r),w(r,{validation:"ulid",code:h.invalid_string,message:o.message}),t.dirty());else if("url"===o.kind)try{new URL(e.data)}catch(n){r=this._getOrReturnCtx(e,r),w(r,{validation:"url",code:h.invalid_string,message:o.message}),t.dirty()}else"regex"===o.kind?(o.regex.lastIndex=0,o.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),w(r,{validation:"regex",code:h.invalid_string,message:o.message}),t.dirty())):"trim"===o.kind?e.data=e.data.trim():"includes"===o.kind?e.data.includes(o.value,o.position)||(r=this._getOrReturnCtx(e,r),w(r,{code:h.invalid_string,validation:{includes:o.value,position:o.position},message:o.message}),t.dirty()):"toLowerCase"===o.kind?e.data=e.data.toLowerCase():"toUpperCase"===o.kind?e.data=e.data.toUpperCase():"startsWith"===o.kind?e.data.startsWith(o.value)||(r=this._getOrReturnCtx(e,r),w(r,{code:h.invalid_string,validation:{startsWith:o.value},message:o.message}),t.dirty()):"endsWith"===o.kind?e.data.endsWith(o.value)||(r=this._getOrReturnCtx(e,r),w(r,{code:h.invalid_string,validation:{endsWith:o.value},message:o.message}),t.dirty()):"datetime"===o.kind?((s=o).precision?s.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${s.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${s.precision}}Z$`):0===s.precision?s.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):s.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(e.data)||(r=this._getOrReturnCtx(e,r),w(r,{code:h.invalid_string,validation:"datetime",message:o.message}),t.dirty()):"ip"===o.kind?(n=e.data,("v4"!==(i=o.version)&&i||!U.test(n))&&("v6"!==i&&i||!D.test(n))&&(r=this._getOrReturnCtx(e,r),w(r,{validation:"ip",code:h.invalid_string,message:o.message}),t.dirty())):a.assertNever(o);var n,i,s;return{status:t.value,value:e.data}}_regex(e,t,r){return this.refinement((t=>e.test(t)),{validation:t,code:h.invalid_string,...k.errToObj(r)})}_addCheck(e){return new j({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...k.errToObj(e)})}url(e){return this._addCheck({kind:"url",...k.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...k.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...k.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...k.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...k.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...k.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...k.errToObj(e)})}datetime(e){var t;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,...k.errToObj(null==e?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...k.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...k.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...k.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...k.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...k.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...k.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...k.errToObj(t)})}nonempty(e){return this.min(1,k.errToObj(e))}trim(){return new j({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new j({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new j({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find((e=>"datetime"===e.kind))}get isEmail(){return!!this._def.checks.find((e=>"email"===e.kind))}get isURL(){return!!this._def.checks.find((e=>"url"===e.kind))}get isEmoji(){return!!this._def.checks.find((e=>"emoji"===e.kind))}get isUUID(){return!!this._def.checks.find((e=>"uuid"===e.kind))}get isCUID(){return!!this._def.checks.find((e=>"cuid"===e.kind))}get isCUID2(){return!!this._def.checks.find((e=>"cuid2"===e.kind))}get isULID(){return!!this._def.checks.find((e=>"ulid"===e.kind))}get isIP(){return!!this._def.checks.find((e=>"ip"===e.kind))}get minLength(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}function F(e,t){const r=(e.toString().split(".")[1]||"").length,n=(t.toString().split(".")[1]||"").length,i=r>n?r:n;return parseInt(e.toFixed(i).replace(".",""))%parseInt(t.toFixed(i).replace(".",""))/Math.pow(10,i)}j.create=e=>{var t;return new j({checks:[],typeName:Te.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...T(e)})};class $ extends P{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==l.number){const t=this._getOrReturnCtx(e);return w(t,{code:h.invalid_type,expected:l.number,received:t.parsedType}),b}let t;const r=new y;for(const n of this._def.checks)"int"===n.kind?a.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),w(t,{code:h.invalid_type,expected:"integer",received:"float",message:n.message}),r.dirty()):"min"===n.kind?(n.inclusive?e.data<n.value:e.data<=n.value)&&(t=this._getOrReturnCtx(e,t),w(t,{code:h.too_small,minimum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),r.dirty()):"max"===n.kind?(n.inclusive?e.data>n.value:e.data>=n.value)&&(t=this._getOrReturnCtx(e,t),w(t,{code:h.too_big,maximum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),r.dirty()):"multipleOf"===n.kind?0!==F(e.data,n.value)&&(t=this._getOrReturnCtx(e,t),w(t,{code:h.not_multiple_of,multipleOf:n.value,message:n.message}),r.dirty()):"finite"===n.kind?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),w(t,{code:h.not_finite,message:n.message}),r.dirty()):a.assertNever(n);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,k.toString(t))}gt(e,t){return this.setLimit("min",e,!1,k.toString(t))}lte(e,t){return this.setLimit("max",e,!0,k.toString(t))}lt(e,t){return this.setLimit("max",e,!1,k.toString(t))}setLimit(e,t,r,n){return new $({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:k.toString(n)}]})}_addCheck(e){return new $({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:k.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:k.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:k.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:k.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:k.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:k.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:k.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:k.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:k.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find((e=>"int"===e.kind||"multipleOf"===e.kind&&a.isInteger(e.value)))}get isFinite(){let e=null,t=null;for(const r of this._def.checks){if("finite"===r.kind||"int"===r.kind||"multipleOf"===r.kind)return!0;"min"===r.kind?(null===t||r.value>t)&&(t=r.value):"max"===r.kind&&(null===e||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}$.create=e=>new $({checks:[],typeName:Te.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...T(e)});class q extends P{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==l.bigint){const t=this._getOrReturnCtx(e);return w(t,{code:h.invalid_type,expected:l.bigint,received:t.parsedType}),b}let t;const r=new y;for(const n of this._def.checks)"min"===n.kind?(n.inclusive?e.data<n.value:e.data<=n.value)&&(t=this._getOrReturnCtx(e,t),w(t,{code:h.too_small,type:"bigint",minimum:n.value,inclusive:n.inclusive,message:n.message}),r.dirty()):"max"===n.kind?(n.inclusive?e.data>n.value:e.data>=n.value)&&(t=this._getOrReturnCtx(e,t),w(t,{code:h.too_big,type:"bigint",maximum:n.value,inclusive:n.inclusive,message:n.message}),r.dirty()):"multipleOf"===n.kind?e.data%n.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),w(t,{code:h.not_multiple_of,multipleOf:n.value,message:n.message}),r.dirty()):a.assertNever(n);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,k.toString(t))}gt(e,t){return this.setLimit("min",e,!1,k.toString(t))}lte(e,t){return this.setLimit("max",e,!0,k.toString(t))}lt(e,t){return this.setLimit("max",e,!1,k.toString(t))}setLimit(e,t,r,n){return new q({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:k.toString(n)}]})}_addCheck(e){return new q({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:k.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:k.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:k.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:k.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:k.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}q.create=e=>{var t;return new q({checks:[],typeName:Te.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...T(e)})};class H extends P{_parse(e){if(this._def.coerce&&(e.data=Boolean(e.data)),this._getType(e)!==l.boolean){const t=this._getOrReturnCtx(e);return w(t,{code:h.invalid_type,expected:l.boolean,received:t.parsedType}),b}return A(e.data)}}H.create=e=>new H({typeName:Te.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...T(e)});class z extends P{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==l.date){const t=this._getOrReturnCtx(e);return w(t,{code:h.invalid_type,expected:l.date,received:t.parsedType}),b}if(isNaN(e.data.getTime()))return w(this._getOrReturnCtx(e),{code:h.invalid_date}),b;const t=new y;let r;for(const n of this._def.checks)"min"===n.kind?e.data.getTime()<n.value&&(r=this._getOrReturnCtx(e,r),w(r,{code:h.too_small,message:n.message,inclusive:!0,exact:!1,minimum:n.value,type:"date"}),t.dirty()):"max"===n.kind?e.data.getTime()>n.value&&(r=this._getOrReturnCtx(e,r),w(r,{code:h.too_big,message:n.message,inclusive:!0,exact:!1,maximum:n.value,type:"date"}),t.dirty()):a.assertNever(n);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(e){return new z({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:k.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:k.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}z.create=e=>new z({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:Te.ZodDate,...T(e)});class W extends P{_parse(e){if(this._getType(e)!==l.symbol){const t=this._getOrReturnCtx(e);return w(t,{code:h.invalid_type,expected:l.symbol,received:t.parsedType}),b}return A(e.data)}}W.create=e=>new W({typeName:Te.ZodSymbol,...T(e)});class V extends P{_parse(e){if(this._getType(e)!==l.undefined){const t=this._getOrReturnCtx(e);return w(t,{code:h.invalid_type,expected:l.undefined,received:t.parsedType}),b}return A(e.data)}}V.create=e=>new V({typeName:Te.ZodUndefined,...T(e)});class G extends P{_parse(e){if(this._getType(e)!==l.null){const t=this._getOrReturnCtx(e);return w(t,{code:h.invalid_type,expected:l.null,received:t.parsedType}),b}return A(e.data)}}G.create=e=>new G({typeName:Te.ZodNull,...T(e)});class Z extends P{constructor(){super(...arguments),this._any=!0}_parse(e){return A(e.data)}}Z.create=e=>new Z({typeName:Te.ZodAny,...T(e)});class K extends P{constructor(){super(...arguments),this._unknown=!0}_parse(e){return A(e.data)}}K.create=e=>new K({typeName:Te.ZodUnknown,...T(e)});class J extends P{_parse(e){const t=this._getOrReturnCtx(e);return w(t,{code:h.invalid_type,expected:l.never,received:t.parsedType}),b}}J.create=e=>new J({typeName:Te.ZodNever,...T(e)});class Q extends P{_parse(e){if(this._getType(e)!==l.undefined){const t=this._getOrReturnCtx(e);return w(t,{code:h.invalid_type,expected:l.void,received:t.parsedType}),b}return A(e.data)}}Q.create=e=>new Q({typeName:Te.ZodVoid,...T(e)});class Y extends P{_parse(e){const{ctx:t,status:r}=this._processInputParams(e),n=this._def;if(t.parsedType!==l.array)return w(t,{code:h.invalid_type,expected:l.array,received:t.parsedType}),b;if(null!==n.exactLength){const e=t.data.length>n.exactLength.value,i=t.data.length<n.exactLength.value;(e||i)&&(w(t,{code:e?h.too_big:h.too_small,minimum:i?n.exactLength.value:void 0,maximum:e?n.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:n.exactLength.message}),r.dirty())}if(null!==n.minLength&&t.data.length<n.minLength.value&&(w(t,{code:h.too_small,minimum:n.minLength.value,type:"array",inclusive:!0,exact:!1,message:n.minLength.message}),r.dirty()),null!==n.maxLength&&t.data.length>n.maxLength.value&&(w(t,{code:h.too_big,maximum:n.maxLength.value,type:"array",inclusive:!0,exact:!1,message:n.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map(((e,r)=>n.type._parseAsync(new S(t,e,t.path,r))))).then((e=>y.mergeArray(r,e)));const i=[...t.data].map(((e,r)=>n.type._parseSync(new S(t,e,t.path,r))));return y.mergeArray(r,i)}get element(){return this._def.type}min(e,t){return new Y({...this._def,minLength:{value:e,message:k.toString(t)}})}max(e,t){return new Y({...this._def,maxLength:{value:e,message:k.toString(t)}})}length(e,t){return new Y({...this._def,exactLength:{value:e,message:k.toString(t)}})}nonempty(e){return this.min(1,e)}}function X(e){if(e instanceof ee){const t={};for(const r in e.shape){const n=e.shape[r];t[r]=ye.create(X(n))}return new ee({...e._def,shape:()=>t})}return e instanceof Y?new Y({...e._def,type:X(e.element)}):e instanceof ye?ye.create(X(e.unwrap())):e instanceof be?be.create(X(e.unwrap())):e instanceof oe?oe.create(e.items.map((e=>X(e)))):e}Y.create=(e,t)=>new Y({type:e,minLength:null,maxLength:null,exactLength:null,typeName:Te.ZodArray,...T(t)});class ee extends P{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;const e=this._def.shape(),t=a.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==l.object){const t=this._getOrReturnCtx(e);return w(t,{code:h.invalid_type,expected:l.object,received:t.parsedType}),b}const{status:t,ctx:r}=this._processInputParams(e),{shape:n,keys:i}=this._getCached(),s=[];if(!(this._def.catchall instanceof J&&"strip"===this._def.unknownKeys))for(const e in r.data)i.includes(e)||s.push(e);const o=[];for(const e of i){const t=n[e],i=r.data[e];o.push({key:{status:"valid",value:e},value:t._parse(new S(r,i,r.path,e)),alwaysSet:e in r.data})}if(this._def.catchall instanceof J){const e=this._def.unknownKeys;if("passthrough"===e)for(const e of s)o.push({key:{status:"valid",value:e},value:{status:"valid",value:r.data[e]}});else if("strict"===e)s.length>0&&(w(r,{code:h.unrecognized_keys,keys:s}),t.dirty());else if("strip"!==e)throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const e=this._def.catchall;for(const t of s){const n=r.data[t];o.push({key:{status:"valid",value:t},value:e._parse(new S(r,n,r.path,t)),alwaysSet:t in r.data})}}return r.common.async?Promise.resolve().then((async()=>{const e=[];for(const t of o){const r=await t.key;e.push({key:r,value:await t.value,alwaysSet:t.alwaysSet})}return e})).then((e=>y.mergeObjectSync(t,e))):y.mergeObjectSync(t,o)}get shape(){return this._def.shape()}strict(e){return k.errToObj,new ee({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,r)=>{var n,i,s,o;const a=null!==(s=null===(i=(n=this._def).errorMap)||void 0===i?void 0:i.call(n,t,r).message)&&void 0!==s?s:r.defaultError;return"unrecognized_keys"===t.code?{message:null!==(o=k.errToObj(e).message)&&void 0!==o?o:a}:{message:a}}}:{}})}strip(){return new ee({...this._def,unknownKeys:"strip"})}passthrough(){return new ee({...this._def,unknownKeys:"passthrough"})}extend(e){return new ee({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new ee({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Te.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new ee({...this._def,catchall:e})}pick(e){const t={};return a.objectKeys(e).forEach((r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])})),new ee({...this._def,shape:()=>t})}omit(e){const t={};return a.objectKeys(this.shape).forEach((r=>{e[r]||(t[r]=this.shape[r])})),new ee({...this._def,shape:()=>t})}deepPartial(){return X(this)}partial(e){const t={};return a.objectKeys(this.shape).forEach((r=>{const n=this.shape[r];e&&!e[r]?t[r]=n:t[r]=n.optional()})),new ee({...this._def,shape:()=>t})}required(e){const t={};return a.objectKeys(this.shape).forEach((r=>{if(e&&!e[r])t[r]=this.shape[r];else{let e=this.shape[r];for(;e instanceof ye;)e=e._def.innerType;t[r]=e}})),new ee({...this._def,shape:()=>t})}keyof(){return fe(a.objectKeys(this.shape))}}ee.create=(e,t)=>new ee({shape:()=>e,unknownKeys:"strip",catchall:J.create(),typeName:Te.ZodObject,...T(t)}),ee.strictCreate=(e,t)=>new ee({shape:()=>e,unknownKeys:"strict",catchall:J.create(),typeName:Te.ZodObject,...T(t)}),ee.lazycreate=(e,t)=>new ee({shape:e,unknownKeys:"strip",catchall:J.create(),typeName:Te.ZodObject,...T(t)});class te extends P{_parse(e){const{ctx:t}=this._processInputParams(e),r=this._def.options;if(t.common.async)return Promise.all(r.map((async e=>{const r={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:r}),ctx:r}}))).then((function(e){for(const t of e)if("valid"===t.result.status)return t.result;for(const r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;const r=e.map((e=>new d(e.ctx.common.issues)));return w(t,{code:h.invalid_union,unionErrors:r}),b}));{let e;const n=[];for(const i of r){const r={...t,common:{...t.common,issues:[]},parent:null},s=i._parseSync({data:t.data,path:t.path,parent:r});if("valid"===s.status)return s;"dirty"!==s.status||e||(e={result:s,ctx:r}),r.common.issues.length&&n.push(r.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;const i=n.map((e=>new d(e)));return w(t,{code:h.invalid_union,unionErrors:i}),b}}get options(){return this._def.options}}te.create=(e,t)=>new te({options:e,typeName:Te.ZodUnion,...T(t)});const re=e=>e instanceof he?re(e.schema):e instanceof we?re(e.innerType()):e instanceof de?[e.value]:e instanceof pe?e.options:e instanceof ge?Object.keys(e.enum):e instanceof ve?re(e._def.innerType):e instanceof V?[void 0]:e instanceof G?[null]:null;class ne extends P{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==l.object)return w(t,{code:h.invalid_type,expected:l.object,received:t.parsedType}),b;const r=this.discriminator,n=t.data[r],i=this.optionsMap.get(n);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(w(t,{code:h.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),b)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){const n=new Map;for(const r of t){const t=re(r.shape[e]);if(!t)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const i of t){if(n.has(i))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(i)}`);n.set(i,r)}}return new ne({typeName:Te.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:n,...T(r)})}}function ie(e,t){const r=u(e),n=u(t);if(e===t)return{valid:!0,data:e};if(r===l.object&&n===l.object){const r=a.objectKeys(t),n=a.objectKeys(e).filter((e=>-1!==r.indexOf(e))),i={...e,...t};for(const r of n){const n=ie(e[r],t[r]);if(!n.valid)return{valid:!1};i[r]=n.data}return{valid:!0,data:i}}if(r===l.array&&n===l.array){if(e.length!==t.length)return{valid:!1};const r=[];for(let n=0;n<e.length;n++){const i=ie(e[n],t[n]);if(!i.valid)return{valid:!1};r.push(i.data)}return{valid:!0,data:r}}return r===l.date&&n===l.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class se extends P{_parse(e){const{status:t,ctx:r}=this._processInputParams(e),n=(e,n)=>{if(x(e)||x(n))return b;const i=ie(e.value,n.value);return i.valid?((E(e)||E(n))&&t.dirty(),{status:t.value,value:i.data}):(w(r,{code:h.invalid_intersection_types}),b)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then((([e,t])=>n(e,t))):n(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}se.create=(e,t,r)=>new se({left:e,right:t,typeName:Te.ZodIntersection,...T(r)});class oe extends P{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==l.array)return w(r,{code:h.invalid_type,expected:l.array,received:r.parsedType}),b;if(r.data.length<this._def.items.length)return w(r,{code:h.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),b;!this._def.rest&&r.data.length>this._def.items.length&&(w(r,{code:h.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const n=[...r.data].map(((e,t)=>{const n=this._def.items[t]||this._def.rest;return n?n._parse(new S(r,e,r.path,t)):null})).filter((e=>!!e));return r.common.async?Promise.all(n).then((e=>y.mergeArray(t,e))):y.mergeArray(t,n)}get items(){return this._def.items}rest(e){return new oe({...this._def,rest:e})}}oe.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new oe({items:e,typeName:Te.ZodTuple,rest:null,...T(t)})};class ae extends P{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==l.object)return w(r,{code:h.invalid_type,expected:l.object,received:r.parsedType}),b;const n=[],i=this._def.keyType,s=this._def.valueType;for(const e in r.data)n.push({key:i._parse(new S(r,e,r.path,e)),value:s._parse(new S(r,r.data[e],r.path,e))});return r.common.async?y.mergeObjectAsync(t,n):y.mergeObjectSync(t,n)}get element(){return this._def.valueType}static create(e,t,r){return new ae(t instanceof P?{keyType:e,valueType:t,typeName:Te.ZodRecord,...T(r)}:{keyType:j.create(),valueType:e,typeName:Te.ZodRecord,...T(t)})}}class ce extends P{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==l.map)return w(r,{code:h.invalid_type,expected:l.map,received:r.parsedType}),b;const n=this._def.keyType,i=this._def.valueType,s=[...r.data.entries()].map((([e,t],s)=>({key:n._parse(new S(r,e,r.path,[s,"key"])),value:i._parse(new S(r,t,r.path,[s,"value"]))})));if(r.common.async){const e=new Map;return Promise.resolve().then((async()=>{for(const r of s){const n=await r.key,i=await r.value;if("aborted"===n.status||"aborted"===i.status)return b;"dirty"!==n.status&&"dirty"!==i.status||t.dirty(),e.set(n.value,i.value)}return{status:t.value,value:e}}))}{const e=new Map;for(const r of s){const n=r.key,i=r.value;if("aborted"===n.status||"aborted"===i.status)return b;"dirty"!==n.status&&"dirty"!==i.status||t.dirty(),e.set(n.value,i.value)}return{status:t.value,value:e}}}}ce.create=(e,t,r)=>new ce({valueType:t,keyType:e,typeName:Te.ZodMap,...T(r)});class le extends P{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==l.set)return w(r,{code:h.invalid_type,expected:l.set,received:r.parsedType}),b;const n=this._def;null!==n.minSize&&r.data.size<n.minSize.value&&(w(r,{code:h.too_small,minimum:n.minSize.value,type:"set",inclusive:!0,exact:!1,message:n.minSize.message}),t.dirty()),null!==n.maxSize&&r.data.size>n.maxSize.value&&(w(r,{code:h.too_big,maximum:n.maxSize.value,type:"set",inclusive:!0,exact:!1,message:n.maxSize.message}),t.dirty());const i=this._def.valueType;function s(e){const r=new Set;for(const n of e){if("aborted"===n.status)return b;"dirty"===n.status&&t.dirty(),r.add(n.value)}return{status:t.value,value:r}}const o=[...r.data.values()].map(((e,t)=>i._parse(new S(r,e,r.path,t))));return r.common.async?Promise.all(o).then((e=>s(e))):s(o)}min(e,t){return new le({...this._def,minSize:{value:e,message:k.toString(t)}})}max(e,t){return new le({...this._def,maxSize:{value:e,message:k.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}le.create=(e,t)=>new le({valueType:e,minSize:null,maxSize:null,typeName:Te.ZodSet,...T(t)});class ue extends P{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==l.function)return w(t,{code:h.invalid_type,expected:l.function,received:t.parsedType}),b;function r(e,r){return m({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,g(),f].filter((e=>!!e)),issueData:{code:h.invalid_arguments,argumentsError:r}})}function n(e,r){return m({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,g(),f].filter((e=>!!e)),issueData:{code:h.invalid_return_type,returnTypeError:r}})}const i={errorMap:t.common.contextualErrorMap},s=t.data;if(this._def.returns instanceof me){const e=this;return A((async function(...t){const o=new d([]),a=await e._def.args.parseAsync(t,i).catch((e=>{throw o.addIssue(r(t,e)),o})),c=await Reflect.apply(s,this,a);return await e._def.returns._def.type.parseAsync(c,i).catch((e=>{throw o.addIssue(n(c,e)),o}))}))}{const e=this;return A((function(...t){const o=e._def.args.safeParse(t,i);if(!o.success)throw new d([r(t,o.error)]);const a=Reflect.apply(s,this,o.data),c=e._def.returns.safeParse(a,i);if(!c.success)throw new d([n(a,c.error)]);return c.data}))}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new ue({...this._def,args:oe.create(e).rest(K.create())})}returns(e){return new ue({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new ue({args:e||oe.create([]).rest(K.create()),returns:t||K.create(),typeName:Te.ZodFunction,...T(r)})}}class he extends P{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}he.create=(e,t)=>new he({getter:e,typeName:Te.ZodLazy,...T(t)});class de extends P{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return w(t,{received:t.data,code:h.invalid_literal,expected:this._def.value}),b}return{status:"valid",value:e.data}}get value(){return this._def.value}}function fe(e,t){return new pe({values:e,typeName:Te.ZodEnum,...T(t)})}de.create=(e,t)=>new de({value:e,typeName:Te.ZodLiteral,...T(t)});class pe extends P{_parse(e){if("string"!=typeof e.data){const t=this._getOrReturnCtx(e),r=this._def.values;return w(t,{expected:a.joinValues(r),received:t.parsedType,code:h.invalid_type}),b}if(-1===this._def.values.indexOf(e.data)){const t=this._getOrReturnCtx(e),r=this._def.values;return w(t,{received:t.data,code:h.invalid_enum_value,options:r}),b}return A(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e){return pe.create(e)}exclude(e){return pe.create(this.options.filter((t=>!e.includes(t))))}}pe.create=fe;class ge extends P{_parse(e){const t=a.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==l.string&&r.parsedType!==l.number){const e=a.objectValues(t);return w(r,{expected:a.joinValues(e),received:r.parsedType,code:h.invalid_type}),b}if(-1===t.indexOf(e.data)){const e=a.objectValues(t);return w(r,{received:r.data,code:h.invalid_enum_value,options:e}),b}return A(e.data)}get enum(){return this._def.values}}ge.create=(e,t)=>new ge({values:e,typeName:Te.ZodNativeEnum,...T(t)});class me extends P{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==l.promise&&!1===t.common.async)return w(t,{code:h.invalid_type,expected:l.promise,received:t.parsedType}),b;const r=t.parsedType===l.promise?t.data:Promise.resolve(t.data);return A(r.then((e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap}))))}}me.create=(e,t)=>new me({type:e,typeName:Te.ZodPromise,...T(t)});class we extends P{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Te.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:r}=this._processInputParams(e),n=this._def.effect||null,i={addIssue:e=>{w(r,e),e.fatal?t.abort():t.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),"preprocess"===n.type){const e=n.transform(r.data,i);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(e).then((e=>this._def.schema._parseAsync({data:e,path:r.path,parent:r}))):this._def.schema._parseSync({data:e,path:r.path,parent:r})}if("refinement"===n.type){const e=e=>{const t=n.refinement(e,i);if(r.common.async)return Promise.resolve(t);if(t instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1===r.common.async){const n=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===n.status?b:("dirty"===n.status&&t.dirty(),e(n.value),{status:t.value,value:n.value})}return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then((r=>"aborted"===r.status?b:("dirty"===r.status&&t.dirty(),e(r.value).then((()=>({status:t.value,value:r.value}))))))}if("transform"===n.type){if(!1===r.common.async){const e=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!C(e))return e;const s=n.transform(e.value,i);if(s instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:s}}return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then((e=>C(e)?Promise.resolve(n.transform(e.value,i)).then((e=>({status:t.value,value:e}))):e))}a.assertNever(n)}}we.create=(e,t,r)=>new we({schema:e,typeName:Te.ZodEffects,effect:t,...T(r)}),we.createWithPreprocess=(e,t,r)=>new we({schema:t,effect:{type:"preprocess",transform:e},typeName:Te.ZodEffects,...T(r)});class ye extends P{_parse(e){return this._getType(e)===l.undefined?A(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ye.create=(e,t)=>new ye({innerType:e,typeName:Te.ZodOptional,...T(t)});class be extends P{_parse(e){return this._getType(e)===l.null?A(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}be.create=(e,t)=>new be({innerType:e,typeName:Te.ZodNullable,...T(t)});class ve extends P{_parse(e){const{ctx:t}=this._processInputParams(e);let r=t.data;return t.parsedType===l.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}ve.create=(e,t)=>new ve({innerType:e,typeName:Te.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...T(t)});class Ae extends P{_parse(e){const{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},n=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return _(n)?n.then((e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new d(r.common.issues)},input:r.data})}))):{status:"valid",value:"valid"===n.status?n.value:this._def.catchValue({get error(){return new d(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}Ae.create=(e,t)=>new Ae({innerType:e,typeName:Te.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...T(t)});class xe extends P{_parse(e){if(this._getType(e)!==l.nan){const t=this._getOrReturnCtx(e);return w(t,{code:h.invalid_type,expected:l.nan,received:t.parsedType}),b}return{status:"valid",value:e.data}}}xe.create=e=>new xe({typeName:Te.ZodNaN,...T(e)});const Ee=Symbol("zod_brand");class Ce extends P{_parse(e){const{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class _e extends P{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const e=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?b:"dirty"===e.status?(t.dirty(),v(e.value)):this._def.out._parseAsync({data:e.value,path:r.path,parent:r})})();{const e=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?b:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:r.path,parent:r})}}static create(e,t){return new _e({in:e,out:t,typeName:Te.ZodPipeline})}}class ke extends P{_parse(e){const t=this._def.innerType._parse(e);return C(t)&&(t.value=Object.freeze(t.value)),t}}ke.create=(e,t)=>new ke({innerType:e,typeName:Te.ZodReadonly,...T(t)});const Se=(e,t={},r)=>e?Z.create().superRefine(((n,i)=>{var s,o;if(!e(n)){const e="function"==typeof t?t(n):"string"==typeof t?{message:t}:t,a=null===(o=null!==(s=e.fatal)&&void 0!==s?s:r)||void 0===o||o,c="string"==typeof e?{message:e}:e;i.addIssue({code:"custom",...c,fatal:a})}})):Z.create(),Ie={object:ee.lazycreate};var Te;!function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"}(Te||(Te={}));const Pe=j.create,Me=$.create,Ne=xe.create,Re=q.create,Oe=H.create,Be=z.create,Le=W.create,Ue=V.create,De=G.create,je=Z.create,Fe=K.create,$e=J.create,qe=Q.create,He=Y.create,ze=ee.create,We=ee.strictCreate,Ve=te.create,Ge=ne.create,Ze=se.create,Ke=oe.create,Je=ae.create,Qe=ce.create,Ye=le.create,Xe=ue.create,et=he.create,tt=de.create,rt=pe.create,nt=ge.create,it=me.create,st=we.create,ot=ye.create,at=be.create,ct=we.createWithPreprocess,lt=_e.create,ut={string:e=>j.create({...e,coerce:!0}),number:e=>$.create({...e,coerce:!0}),boolean:e=>H.create({...e,coerce:!0}),bigint:e=>q.create({...e,coerce:!0}),date:e=>z.create({...e,coerce:!0})},ht=b;var dt=Object.freeze({__proto__:null,defaultErrorMap:f,setErrorMap:function(e){p=e},getErrorMap:g,makeIssue:m,EMPTY_PATH:[],addIssueToContext:w,ParseStatus:y,INVALID:b,DIRTY:v,OK:A,isAborted:x,isDirty:E,isValid:C,isAsync:_,get util(){return a},get objectUtil(){return c},ZodParsedType:l,getParsedType:u,ZodType:P,ZodString:j,ZodNumber:$,ZodBigInt:q,ZodBoolean:H,ZodDate:z,ZodSymbol:W,ZodUndefined:V,ZodNull:G,ZodAny:Z,ZodUnknown:K,ZodNever:J,ZodVoid:Q,ZodArray:Y,ZodObject:ee,ZodUnion:te,ZodDiscriminatedUnion:ne,ZodIntersection:se,ZodTuple:oe,ZodRecord:ae,ZodMap:ce,ZodSet:le,ZodFunction:ue,ZodLazy:he,ZodLiteral:de,ZodEnum:pe,ZodNativeEnum:ge,ZodPromise:me,ZodEffects:we,ZodTransformer:we,ZodOptional:ye,ZodNullable:be,ZodDefault:ve,ZodCatch:Ae,ZodNaN:xe,BRAND:Ee,ZodBranded:Ce,ZodPipeline:_e,ZodReadonly:ke,custom:Se,Schema:P,ZodSchema:P,late:Ie,get ZodFirstPartyTypeKind(){return Te},coerce:ut,any:je,array:He,bigint:Re,boolean:Oe,date:Be,discriminatedUnion:Ge,effect:st,enum:rt,function:Xe,instanceof:(e,t={message:`Input not instance of ${e.name}`})=>Se((t=>t instanceof e),t),intersection:Ze,lazy:et,literal:tt,map:Qe,nan:Ne,nativeEnum:nt,never:$e,null:De,nullable:at,number:Me,object:ze,oboolean:()=>Oe().optional(),onumber:()=>Me().optional(),optional:ot,ostring:()=>Pe().optional(),pipeline:lt,preprocess:ct,promise:it,record:Je,set:Ye,strictObject:We,string:Pe,symbol:Le,transformer:st,tuple:Ke,undefined:Ue,union:Ve,unknown:Fe,void:qe,NEVER:ht,ZodIssueCode:h,quotelessJson:e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:d});const ft=dt.object({message:dt.string()});function pt(e){return dt.literal(s[e])}dt.object({accessList:dt.array(dt.string()),blockHash:dt.string().nullable(),blockNumber:dt.string().nullable(),chainId:dt.string().or(dt.number()),from:dt.string(),gas:dt.string(),hash:dt.string(),input:dt.string().nullable(),maxFeePerGas:dt.string(),maxPriorityFeePerGas:dt.string(),nonce:dt.string(),r:dt.string(),s:dt.string(),to:dt.string(),transactionIndex:dt.string().nullable(),type:dt.string(),v:dt.string(),value:dt.string()});const gt=dt.object({chainId:dt.string().or(dt.number())}),mt=dt.object({email:dt.string().email()}),wt=dt.object({otp:dt.string()}),yt=dt.object({uri:dt.string()}),bt=dt.object({chainId:dt.optional(dt.string().or(dt.number())),preferredAccountType:dt.optional(dt.string())}),vt=dt.object({provider:dt.enum(["google","github","apple","facebook","x","discord"])}),At=dt.object({email:dt.string().email()}),xt=dt.object({otp:dt.string()}),Et=dt.object({otp:dt.string()}),Ct=dt.object({themeMode:dt.optional(dt.enum(["light","dark"])),themeVariables:dt.optional(dt.record(dt.string(),dt.string().or(dt.number()))),w3mThemeVariables:dt.optional(dt.record(dt.string(),dt.string()))}),_t=dt.object({metadata:dt.object({name:dt.string(),description:dt.string(),url:dt.string(),icons:dt.array(dt.string())}).optional(),sdkVersion:dt.string().optional(),sdkType:dt.string().optional(),projectId:dt.string()}),kt=dt.object({type:dt.string()}),St=dt.object({action:dt.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),It=dt.object({url:dt.string()}),Tt=dt.object({userName:dt.string()}),Pt=dt.object({email:dt.string(),address:dt.string(),chainId:dt.string().or(dt.number()),accounts:dt.array(dt.object({address:dt.string(),type:dt.enum([o.ACCOUNT_TYPES.EOA,o.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),userName:dt.string().optional()}),Mt=dt.object({action:dt.enum(["VERIFY_PRIMARY_OTP","VERIFY_SECONDARY_OTP"])}),Nt=dt.object({email:dt.string().email().optional().nullable(),address:dt.string(),chainId:dt.string().or(dt.number()),smartAccountDeployed:dt.optional(dt.boolean()),accounts:dt.array(dt.object({address:dt.string(),type:dt.enum([o.ACCOUNT_TYPES.EOA,o.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),preferredAccountType:dt.optional(dt.string())}),Rt=dt.object({uri:dt.string()}),Ot=dt.object({isConnected:dt.boolean()}),Bt=dt.object({chainId:dt.string().or(dt.number())}),Lt=dt.object({chainId:dt.string().or(dt.number())}),Ut=dt.object({newEmail:dt.string().email()}),Dt=dt.object({smartAccountEnabledNetworks:dt.array(dt.number())}),jt=(dt.object({address:dt.string(),isDeployed:dt.boolean()}),dt.object({version:dt.string().optional()})),Ft=dt.object({type:dt.string(),address:dt.string()}),$t=dt.any(),qt=dt.object({method:dt.literal("eth_accounts")}),Ht=dt.object({method:dt.literal("eth_blockNumber")}),zt=dt.object({method:dt.literal("eth_call"),params:dt.array(dt.any())}),Wt=dt.object({method:dt.literal("eth_chainId")}),Vt=dt.object({method:dt.literal("eth_estimateGas"),params:dt.array(dt.any())}),Gt=dt.object({method:dt.literal("eth_feeHistory"),params:dt.array(dt.any())}),Zt=dt.object({method:dt.literal("eth_gasPrice")}),Kt=dt.object({method:dt.literal("eth_getAccount"),params:dt.array(dt.any())}),Jt=dt.object({method:dt.literal("eth_getBalance"),params:dt.array(dt.any())}),Qt=dt.object({method:dt.literal("eth_getBlockByHash"),params:dt.array(dt.any())}),Yt=dt.object({method:dt.literal("eth_getBlockByNumber"),params:dt.array(dt.any())}),Xt=dt.object({method:dt.literal("eth_getBlockReceipts"),params:dt.array(dt.any())}),er=dt.object({method:dt.literal("eth_getBlockTransactionCountByHash"),params:dt.array(dt.any())}),tr=dt.object({method:dt.literal("eth_getBlockTransactionCountByNumber"),params:dt.array(dt.any())}),rr=dt.object({method:dt.literal("eth_getCode"),params:dt.array(dt.any())}),nr=dt.object({method:dt.literal("eth_getFilterChanges"),params:dt.array(dt.any())}),ir=dt.object({method:dt.literal("eth_getFilterLogs"),params:dt.array(dt.any())}),sr=dt.object({method:dt.literal("eth_getLogs"),params:dt.array(dt.any())}),or=dt.object({method:dt.literal("eth_getProof"),params:dt.array(dt.any())}),ar=dt.object({method:dt.literal("eth_getStorageAt"),params:dt.array(dt.any())}),cr=dt.object({method:dt.literal("eth_getTransactionByBlockHashAndIndex"),params:dt.array(dt.any())}),lr=dt.object({method:dt.literal("eth_getTransactionByBlockNumberAndIndex"),params:dt.array(dt.any())}),ur=dt.object({method:dt.literal("eth_getTransactionByHash"),params:dt.array(dt.any())}),hr=dt.object({method:dt.literal("eth_getTransactionCount"),params:dt.array(dt.any())}),dr=dt.object({method:dt.literal("eth_getTransactionReceipt"),params:dt.array(dt.any())}),fr=dt.object({method:dt.literal("eth_getUncleCountByBlockHash"),params:dt.array(dt.any())}),pr=dt.object({method:dt.literal("eth_getUncleCountByBlockNumber"),params:dt.array(dt.any())}),gr=dt.object({method:dt.literal("eth_maxPriorityFeePerGas")}),mr=dt.object({method:dt.literal("eth_newBlockFilter")}),wr=dt.object({method:dt.literal("eth_newFilter"),params:dt.array(dt.any())}),yr=dt.object({method:dt.literal("eth_newPendingTransactionFilter")}),br=dt.object({method:dt.literal("eth_sendRawTransaction"),params:dt.array(dt.any())}),vr=dt.object({method:dt.literal("eth_syncing"),params:dt.array(dt.any())}),Ar=dt.object({method:dt.literal("eth_uninstallFilter"),params:dt.array(dt.any())}),xr=dt.object({method:dt.literal("personal_sign"),params:dt.array(dt.any())}),Er=dt.object({method:dt.literal("eth_signTypedData_v4"),params:dt.array(dt.any())}),Cr=dt.object({method:dt.literal("eth_sendTransaction"),params:dt.array(dt.any())}),_r=dt.object({method:dt.literal("solana_signMessage"),params:dt.object({message:dt.string(),pubkey:dt.string()})}),kr=dt.object({method:dt.literal("solana_signTransaction"),params:dt.object({transaction:dt.string()})}),Sr=dt.object({method:dt.literal("solana_signAllTransactions"),params:dt.object({transactions:dt.array(dt.string())})}),Ir=dt.object({method:dt.literal("solana_signAndSendTransaction"),params:dt.object({transaction:dt.string(),options:dt.object({skipPreflight:dt.boolean().optional(),preflightCommitment:dt.enum(["processed","confirmed","finalized","recent","single","singleGossip","root","max"]).optional(),maxRetries:dt.number().optional(),minContextSlot:dt.number().optional()}).optional()})}),Tr=dt.object({method:dt.literal("wallet_sendCalls"),params:dt.array(dt.object({chainId:dt.string().or(dt.number()).optional(),from:dt.string().optional(),version:dt.string().optional(),capabilities:dt.any().optional(),calls:dt.array(dt.object({to:dt.string().startsWith("0x"),data:dt.string().startsWith("0x").optional(),value:dt.string().optional()}))}))}),Pr=dt.object({method:dt.literal("wallet_getCallsStatus"),params:dt.array(dt.string())}),Mr=dt.object({method:dt.literal("wallet_getCapabilities")}),Nr=dt.object({method:dt.literal("wallet_grantPermissions"),params:dt.array(dt.any())}),Rr=dt.object({method:dt.literal("wallet_revokePermissions"),params:dt.any()}),Or=dt.object({token:dt.string()}),Br=dt.object({id:dt.string().optional()}),Lr={appEvent:Br.extend({type:pt("APP_SWITCH_NETWORK"),payload:gt}).or(Br.extend({type:pt("APP_CONNECT_EMAIL"),payload:mt})).or(Br.extend({type:pt("APP_CONNECT_DEVICE")})).or(Br.extend({type:pt("APP_CONNECT_OTP"),payload:wt})).or(Br.extend({type:pt("APP_CONNECT_SOCIAL"),payload:yt})).or(Br.extend({type:pt("APP_GET_FARCASTER_URI")})).or(Br.extend({type:pt("APP_CONNECT_FARCASTER")})).or(Br.extend({type:pt("APP_GET_USER"),payload:dt.optional(bt)})).or(Br.extend({type:pt("APP_GET_SOCIAL_REDIRECT_URI"),payload:vt})).or(Br.extend({type:pt("APP_SIGN_OUT")})).or(Br.extend({type:pt("APP_IS_CONNECTED"),payload:dt.optional(Or)})).or(Br.extend({type:pt("APP_GET_CHAIN_ID")})).or(Br.extend({type:pt("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(Br.extend({type:pt("APP_INIT_SMART_ACCOUNT")})).or(Br.extend({type:pt("APP_SET_PREFERRED_ACCOUNT"),payload:kt})).or(Br.extend({type:pt("APP_RPC_REQUEST"),payload:xr.or(Cr).or(qt).or(Ht).or(zt).or(Wt).or(Vt).or(Gt).or(Zt).or(Kt).or(Jt).or(Qt).or(Yt).or(Xt).or(er).or(tr).or(rr).or(nr).or(ir).or(sr).or(or).or(ar).or(cr).or(lr).or(ur).or(hr).or(dr).or(fr).or(pr).or(gr).or(mr).or(wr).or(yr).or(br).or(vr).or(Ar).or(xr).or(Er).or(Cr).or(_r).or(kr).or(Sr).or(Ir).or(Pr).or(Tr).or(Mr).or(Nr).or(Rr)})).or(Br.extend({type:pt("APP_UPDATE_EMAIL"),payload:At})).or(Br.extend({type:pt("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:xt})).or(Br.extend({type:pt("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:Et})).or(Br.extend({type:pt("APP_SYNC_THEME"),payload:Ct})).or(Br.extend({type:pt("APP_SYNC_DAPP_DATA"),payload:_t})),frameEvent:Br.extend({type:pt("FRAME_SWITCH_NETWORK_ERROR"),payload:ft}).or(Br.extend({type:pt("FRAME_SWITCH_NETWORK_SUCCESS"),payload:Lt})).or(Br.extend({type:pt("FRAME_CONNECT_EMAIL_SUCCESS"),payload:St})).or(Br.extend({type:pt("FRAME_CONNECT_EMAIL_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_GET_FARCASTER_URI_SUCCESS"),payload:It})).or(Br.extend({type:pt("FRAME_GET_FARCASTER_URI_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_CONNECT_FARCASTER_SUCCESS"),payload:Tt})).or(Br.extend({type:pt("FRAME_CONNECT_FARCASTER_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_CONNECT_OTP_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_CONNECT_OTP_SUCCESS")})).or(Br.extend({type:pt("FRAME_CONNECT_DEVICE_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_CONNECT_DEVICE_SUCCESS")})).or(Br.extend({type:pt("FRAME_CONNECT_SOCIAL_SUCCESS"),payload:Pt})).or(Br.extend({type:pt("FRAME_CONNECT_SOCIAL_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_GET_USER_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_GET_USER_SUCCESS"),payload:Nt})).or(Br.extend({type:pt("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),payload:Rt})).or(Br.extend({type:pt("FRAME_SIGN_OUT_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_SIGN_OUT_SUCCESS")})).or(Br.extend({type:pt("FRAME_IS_CONNECTED_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_IS_CONNECTED_SUCCESS"),payload:Ot})).or(Br.extend({type:pt("FRAME_GET_CHAIN_ID_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_GET_CHAIN_ID_SUCCESS"),payload:Bt})).or(Br.extend({type:pt("FRAME_RPC_REQUEST_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_RPC_REQUEST_SUCCESS"),payload:$t})).or(Br.extend({type:pt("FRAME_SESSION_UPDATE"),payload:Or})).or(Br.extend({type:pt("FRAME_UPDATE_EMAIL_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_UPDATE_EMAIL_SUCCESS"),payload:Mt})).or(Br.extend({type:pt("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(Br.extend({type:pt("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:Ut})).or(Br.extend({type:pt("FRAME_SYNC_THEME_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_SYNC_THEME_SUCCESS")})).or(Br.extend({type:pt("FRAME_SYNC_DAPP_DATA_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(Br.extend({type:pt("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:Dt})).or(Br.extend({type:pt("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:Ft})).or(Br.extend({type:pt("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:ft})).or(Br.extend({type:pt("FRAME_READY"),payload:jt}))},Ur={set(e,t){$r.isClient&&localStorage.setItem(`${s.STORAGE_KEY}${e}`,t)},get(e){return $r.isClient?localStorage.getItem(`${s.STORAGE_KEY}${e}`):null},delete(e,t){$r.isClient&&(t?localStorage.removeItem(e):localStorage.removeItem(`${s.STORAGE_KEY}${e}`))}},Dr=/^0x(?:[A-Fa-f0-9]{64})$/u,jr=/^0x(?:[a-fA-F0-9]{62,})$/u,Fr=3e4,$r={checkIfAllowedToTriggerEmail(){const e=Ur.get(s.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<Fr){const e=Math.ceil((Fr-t)/1e3);throw new Error(`Please try again after ${e} seconds`)}}},getTimeToNextEmailLogin(){const e=Ur.get(s.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<Fr)return Math.ceil((Fr-t)/1e3)}return 0},checkIfRequestExists(e){return o.NOT_SAFE_RPC_METHODS.includes(e.method)||o.SAFE_RPC_METHODS.includes(e.method)},getResponseType(e){return"string"==typeof e&&(e?.match(Dr)||e?.match(jr))?s.RPC_RESPONSE_TYPE_TX:s.RPC_RESPONSE_TYPE_OBJECT},checkIfRequestIsSafe(e){return o.SAFE_RPC_METHODS.includes(e.method)},isClient:"undefined"!=typeof window};var qr=r(11079);class Hr{constructor(e,t=!1,r="eip155:1"){if(this.iframe=null,this.rpcUrl=qr.oU.BLOCKCHAIN_API_RPC_URL,this.events={registerFrameEventHandler:(e,t,r)=>{function n({data:r}){if("string"!=typeof r.type||!r.type.includes(s.FRAME_EVENT_KEY))return;const i=Lr.frameEvent.parse(r);i.id===e&&(t(i),window.removeEventListener("message",n))}$r.isClient&&(window.addEventListener("message",n),r.addEventListener("abort",(()=>{window.removeEventListener("message",n)})))},onFrameEvent:e=>{$r.isClient&&window.addEventListener("message",(({data:t})=>{if("string"!=typeof t.type||!t.type.includes(s.FRAME_EVENT_KEY))return;const r=Lr.frameEvent.parse(t);e(r)}))},onAppEvent:e=>{$r.isClient&&window.addEventListener("message",(({data:t})=>{if("string"!=typeof t.type||!t.type.includes(s.APP_EVENT_KEY))return;const r=Lr.appEvent.parse(t);e(r)}))},postAppEvent:e=>{if($r.isClient){if(!this.iframe?.contentWindow)throw new Error("W3mFrame: iframe is not set");Lr.appEvent.parse(e),this.iframe.contentWindow.postMessage(e,"*")}},postFrameEvent:e=>{if($r.isClient){if(!parent)throw new Error("W3mFrame: parent is not set");Lr.frameEvent.parse(e),parent.postMessage(e,"*")}}},this.projectId=e,this.frameLoadPromise=new Promise(((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}})),t&&(this.frameLoadPromise=new Promise(((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}})),$r.isClient)){const t=document.createElement("iframe");t.id="w3m-iframe",t.src=`${n}?projectId=${e}&chainId=${r}`,t.name="w3m-secure-iframe",t.style.position="fixed",t.style.zIndex="999999",t.style.display="none",t.style.animationDelay="0s, 50ms",t.style.borderBottomLeftRadius="clamp(0px, var(--wui-border-radius-l), 44px)",t.style.borderBottomRightRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(t),this.iframe=t,this.iframe.onload=()=>{this.frameLoadPromiseResolver?.resolve(void 0)},this.iframe.onerror=()=>{this.frameLoadPromiseResolver?.reject("Unable to load email login dependency")}}}get networks(){const e=["eip155:1","eip155:5","eip155:11155111","eip155:10","eip155:420","eip155:42161","eip155:421613","eip155:137","eip155:80001","eip155:42220","eip155:1313161554","eip155:1313161555","eip155:56","eip155:97","eip155:43114","eip155:43113","eip155:324","eip155:280","eip155:100","eip155:8453","eip155:84531","eip155:84532","eip155:7777777","eip155:999","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"].map((e=>({[e]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=${e}&projectId=${this.projectId}`,chainId:e}})));return Object.assign({},...e)}}var zr=r(29838);class Wr{constructor(e){const t=(0,zr.iP)({level:i}),{logger:r,chunkLoggerController:n}=(0,zr.D5)({opts:t});this.logger=(0,zr.U5)(r,this.constructor.name),this.chunkLoggerController=n,"undefined"!=typeof window&&this.chunkLoggerController?.downloadLogsBlobInBrowser&&(window.downloadAppKitLogsBlob||(window.downloadAppKitLogsBlob={}),window.downloadAppKitLogsBlob.sdk=()=>{this.chunkLoggerController?.downloadLogsBlobInBrowser&&this.chunkLoggerController.downloadLogsBlobInBrowser({projectId:e})})}}class Vr{constructor({projectId:e,chainId:t,onTimeout:r}){this.openRpcRequests=[],this.w3mLogger=new Wr(e),this.w3mFrame=new Hr(e,!0,t),this.onTimeout=r}getLoginEmailUsed(){return Boolean(Ur.get(s.EMAIL_LOGIN_USED_KEY))}getEmail(){return Ur.get(s.EMAIL)}async connectEmail(e){try{$r.checkIfAllowedToTriggerEmail();const t=await this.appEvent({type:s.APP_CONNECT_EMAIL,payload:e});return this.setNewLastEmailLoginTime(),t}catch(e){throw this.w3mLogger.logger.error({error:e},"Error connecting email"),e}}async connectDevice(){try{return this.appEvent({type:s.APP_CONNECT_DEVICE})}catch(e){throw this.w3mLogger.logger.error({error:e},"Error connecting device"),e}}async connectOtp(e){try{return this.appEvent({type:s.APP_CONNECT_OTP,payload:e})}catch(e){throw this.w3mLogger.logger.error({error:e},"Error connecting otp"),e}}async isConnected(){try{const e=await this.appEvent({type:s.APP_IS_CONNECTED});return e.isConnected||this.deleteAuthLoginCache(),e}catch(e){throw this.deleteAuthLoginCache(),this.w3mLogger.logger.error({error:e},"Error checking connection"),e}}async getChainId(){try{const e=await this.appEvent({type:s.APP_GET_CHAIN_ID});return this.setLastUsedChainId(e.chainId),e}catch(e){throw this.w3mLogger.logger.error({error:e},"Error getting chain id"),e}}async getSocialRedirectUri(e){try{return this.appEvent({type:s.APP_GET_SOCIAL_REDIRECT_URI,payload:e})}catch(e){throw this.w3mLogger.logger.error({error:e},"Error getting social redirect uri"),e}}async updateEmail(e){try{const t=await this.appEvent({type:s.APP_UPDATE_EMAIL,payload:e});return this.setNewLastEmailLoginTime(),t}catch(e){throw this.w3mLogger.logger.error({error:e},"Error updating email"),e}}async updateEmailPrimaryOtp(e){try{return this.appEvent({type:s.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:e})}catch(e){throw this.w3mLogger.logger.error({error:e},"Error updating email primary otp"),e}}async updateEmailSecondaryOtp(e){try{const t=await this.appEvent({type:s.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:e});return this.setLoginSuccess(t.newEmail),t}catch(e){throw this.w3mLogger.logger.error({error:e},"Error updating email secondary otp"),e}}async syncTheme(e){try{return this.appEvent({type:s.APP_SYNC_THEME,payload:e})}catch(e){throw this.w3mLogger.logger.error({error:e},"Error syncing theme"),e}}async syncDappData(e){try{return this.appEvent({type:s.APP_SYNC_DAPP_DATA,payload:e})}catch(e){throw this.w3mLogger.logger.error({error:e},"Error syncing dapp data"),e}}async getSmartAccountEnabledNetworks(){try{const e=await this.appEvent({type:s.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS});return this.persistSmartAccountEnabledNetworks(e.smartAccountEnabledNetworks),e}catch(e){throw this.persistSmartAccountEnabledNetworks([]),this.w3mLogger.logger.error({error:e},"Error getting smart account enabled networks"),e}}async setPreferredAccount(e){try{return this.appEvent({type:s.APP_SET_PREFERRED_ACCOUNT,payload:{type:e}})}catch(e){throw this.w3mLogger.logger.error({error:e},"Error setting preferred account"),e}}async connect(e){try{const t=e?.chainId||this.getLastUsedChainId()||1,r=await this.appEvent({type:s.APP_GET_USER,payload:{...e,chainId:t}});return this.setLoginSuccess(r.email),this.setLastUsedChainId(r.chainId),r}catch(e){throw this.w3mLogger.logger.error({error:e},"Error connecting"),e}}async getUser(e){try{const t=e?.chainId||this.getLastUsedChainId()||1;return await this.appEvent({type:s.APP_GET_USER,payload:{...e,chainId:t}})}catch(e){throw this.w3mLogger.logger.error({error:e},"Error connecting"),e}}async connectSocial(e){try{const t=await this.appEvent({type:s.APP_CONNECT_SOCIAL,payload:{uri:e}});return t.userName&&this.setSocialLoginSuccess(t.userName),t}catch(e){throw this.w3mLogger.logger.error({error:e},"Error connecting social"),e}}async getFarcasterUri(){try{return await this.appEvent({type:s.APP_GET_FARCASTER_URI})}catch(e){throw this.w3mLogger.logger.error({error:e},"Error getting farcaster uri"),e}}async connectFarcaster(){try{const e=await this.appEvent({type:s.APP_CONNECT_FARCASTER});return e.userName&&this.setSocialLoginSuccess(e.userName),e}catch(e){throw this.w3mLogger.logger.error({error:e},"Error connecting farcaster"),e}}async switchNetwork(e){try{const t=await this.appEvent({type:s.APP_SWITCH_NETWORK,payload:{chainId:e}});return this.setLastUsedChainId(t.chainId),t}catch(e){throw this.w3mLogger.logger.error({error:e},"Error switching network"),e}}async disconnect(){try{const e=await this.appEvent({type:s.APP_SIGN_OUT});return this.deleteAuthLoginCache(),e}catch(e){throw this.w3mLogger.logger.error({error:e},"Error disconnecting"),e}}async request(e){try{if(o.GET_CHAIN_ID===e.method)return this.getLastUsedChainId();this.rpcRequestHandler?.(e);const t=await this.appEvent({type:s.APP_RPC_REQUEST,payload:e});return this.rpcSuccessHandler?.(t,e),t}catch(t){throw this.rpcErrorHandler?.(t,e),this.w3mLogger.logger.error({error:t},"Error requesting"),t}}onRpcRequest(e){this.rpcRequestHandler=e}onRpcSuccess(e){this.rpcSuccessHandler=e}onRpcError(e){this.rpcErrorHandler=e}onIsConnected(e){this.w3mFrame.events.onFrameEvent((t=>{t.type===s.FRAME_IS_CONNECTED_SUCCESS&&t.payload.isConnected&&e()}))}onNotConnected(e){this.w3mFrame.events.onFrameEvent((t=>{t.type===s.FRAME_IS_CONNECTED_ERROR&&e(),t.type!==s.FRAME_IS_CONNECTED_SUCCESS||t.payload.isConnected||e()}))}onConnect(e){this.w3mFrame.events.onFrameEvent((t=>{t.type===s.FRAME_GET_USER_SUCCESS&&e(t.payload)}))}async getCapabilities(){try{return await this.request({method:"wallet_getCapabilities"})||{}}catch{return{}}}onSetPreferredAccount(e){this.w3mFrame.events.onFrameEvent((t=>{t.type===s.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS?e(t.payload):t.type===s.FRAME_SET_PREFERRED_ACCOUNT_ERROR&&e({type:o.ACCOUNT_TYPES.EOA})}))}onGetSmartAccountEnabledNetworks(e){this.w3mFrame.events.onFrameEvent((t=>{t.type===s.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS?e(t.payload.smartAccountEnabledNetworks):t.type===s.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR&&e([])}))}getAvailableChainIds(){return Object.keys(this.w3mFrame.networks)}rejectRpcRequests(){try{this.openRpcRequests.forEach((({abortController:e,method:t})=>{o.SAFE_RPC_METHODS.includes(t)||e.abort()})),this.openRpcRequests=[]}catch(e){this.w3mLogger.logger.error({error:e},"Error aborting RPC request")}}async appEvent(e){let t;function r(e){return e.replace("@w3m-app/","")}await this.w3mFrame.frameLoadPromise;const n=new AbortController,i=r(e.type);return[s.APP_CONNECT_EMAIL,s.APP_CONNECT_DEVICE,s.APP_CONNECT_OTP,s.APP_CONNECT_SOCIAL,s.APP_GET_SOCIAL_REDIRECT_URI,s.APP_GET_FARCASTER_URI].map(r).includes(i)&&(t=setTimeout((()=>{this.onTimeout?.(),n.abort()}),3e4)),new Promise(((r,s)=>{const o=Math.random().toString(36).substring(7);if(this.w3mLogger.logger.info?.({event:e,id:o},"Sending app event"),this.w3mFrame.events.postAppEvent({...e,id:o}),"RPC_REQUEST"===i){const t=e;this.openRpcRequests=[...this.openRpcRequests,{...t.payload,abortController:n}]}n.signal.addEventListener("abort",(()=>{s("RPC_REQUEST"===i?new Error("Request was aborted"):new Error("Something went wrong"))})),this.w3mFrame.events.registerFrameEventHandler(o,(e=>{return n=e,a=this.w3mLogger,void(n.id===o&&(a.logger.info?.({framEvent:n,id:o},"Received frame response"),n.type===`@w3m-frame/${i}_SUCCESS`?(t&&clearTimeout(t),"payload"in n&&r(n.payload),r(void 0)):n.type===`@w3m-frame/${i}_ERROR`&&(t&&clearTimeout(t),"payload"in n&&s(new Error(n.payload?.message||"An error occurred")),s(new Error("An error occurred")))));var n,a}),n.signal)}))}setNewLastEmailLoginTime(){Ur.set(s.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setSocialLoginSuccess(e){Ur.set(s.SOCIAL_USERNAME,e)}setLoginSuccess(e){e&&Ur.set(s.EMAIL,e),Ur.set(s.EMAIL_LOGIN_USED_KEY,"true"),Ur.delete(s.LAST_EMAIL_LOGIN_TIME)}deleteAuthLoginCache(){Ur.delete(s.EMAIL_LOGIN_USED_KEY),Ur.delete(s.EMAIL),Ur.delete(s.LAST_USED_CHAIN_KEY),Ur.delete(s.SOCIAL_USERNAME)}setLastUsedChainId(e){e&&Ur.set(s.LAST_USED_CHAIN_KEY,String(e))}getLastUsedChainId(){return Number(Ur.get(s.LAST_USED_CHAIN_KEY))}persistSmartAccountEnabledNetworks(e){Ur.set(s.SMART_ACCOUNT_ENABLED_NETWORKS,e.join(","))}}},25276:function(e,t,r){"use strict";function n(e,t){const r=e.exec(t);return r?.groups}r.d(t,{BD:function(){return i},Ge:function(){return s},Yv:function(){return n},wj:function(){return o}});const i=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,s=/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,o=/^\(.+?\).*?$/},94653:function(e,t,r){"use strict";r.r(t),r.d(t,{__addDisposableResource:function(){return B},__assign:function(){return s},__asyncDelegator:function(){return _},__asyncGenerator:function(){return C},__asyncValues:function(){return k},__await:function(){return E},__awaiter:function(){return p},__classPrivateFieldGet:function(){return N},__classPrivateFieldIn:function(){return O},__classPrivateFieldSet:function(){return R},__createBinding:function(){return m},__decorate:function(){return a},__disposeResources:function(){return U},__esDecorate:function(){return l},__exportStar:function(){return w},__extends:function(){return i},__generator:function(){return g},__importDefault:function(){return M},__importStar:function(){return P},__makeTemplateObject:function(){return S},__metadata:function(){return f},__param:function(){return c},__propKey:function(){return h},__read:function(){return b},__rest:function(){return o},__rewriteRelativeImportExtension:function(){return D},__runInitializers:function(){return u},__setFunctionName:function(){return d},__spread:function(){return v},__spreadArray:function(){return x},__spreadArrays:function(){return A},__values:function(){return y}});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)};function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function a(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}function c(e,t){return function(r,n){t(r,n,e)}}function l(e,t,r,n,i,s){function o(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var a,c=n.kind,l="getter"===c?"get":"setter"===c?"set":"value",u=!t&&e?n.static?e:e.prototype:null,h=t||(u?Object.getOwnPropertyDescriptor(u,n.name):{}),d=!1,f=r.length-1;f>=0;f--){var p={};for(var g in n)p[g]="access"===g?{}:n[g];for(var g in n.access)p.access[g]=n.access[g];p.addInitializer=function(e){if(d)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(e||null))};var m=(0,r[f])("accessor"===c?{get:h.get,set:h.set}:h[l],p);if("accessor"===c){if(void 0===m)continue;if(null===m||"object"!=typeof m)throw new TypeError("Object expected");(a=o(m.get))&&(h.get=a),(a=o(m.set))&&(h.set=a),(a=o(m.init))&&i.unshift(a)}else(a=o(m))&&("field"===c?i.unshift(a):h[l]=a)}u&&Object.defineProperty(u,n.name,h),d=!0}function u(e,t,r){for(var n=arguments.length>2,i=0;i<t.length;i++)r=n?t[i].call(e,r):t[i].call(e);return n?r:void 0}function h(e){return"symbol"==typeof e?e:"".concat(e)}function d(e,t,r){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function f(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function p(e,t,r,n){return new(r||(r=Promise))((function(i,s){function o(e){try{c(n.next(e))}catch(e){s(e)}}function a(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}c((n=n.apply(e,t||[])).next())}))}function g(e,t){var r,n,i,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var m=Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function w(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||m(t,e,r)}function y(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function b(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,s=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=s.next()).done;)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}return o}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(b(arguments[t]));return e}function A(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)n[i]=s[o];return n}function x(e,t,r){if(r||2===arguments.length)for(var n,i=0,s=t.length;i<s;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}function E(e){return this instanceof E?(this.v=e,this):new E(e)}function C(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,i=r.apply(e,t||[]),s=[];return n=Object.create(("function"==typeof AsyncIterator?AsyncIterator:Object).prototype),o("next"),o("throw"),o("return",(function(e){return function(t){return Promise.resolve(t).then(e,l)}})),n[Symbol.asyncIterator]=function(){return this},n;function o(e,t){i[e]&&(n[e]=function(t){return new Promise((function(r,n){s.push([e,t,r,n])>1||a(e,t)}))},t&&(n[e]=t(n[e])))}function a(e,t){try{(r=i[e](t)).value instanceof E?Promise.resolve(r.value.v).then(c,l):u(s[0][2],r)}catch(e){u(s[0][3],e)}var r}function c(e){a("next",e)}function l(e){a("throw",e)}function u(e,t){e(t),s.shift(),s.length&&a(s[0][0],s[0][1])}}function _(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,i){t[n]=e[n]?function(t){return(r=!r)?{value:E(e[n](t)),done:!1}:i?i(t):t}:i}}function k(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=y(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,i){!function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)}(n,i,(t=e[r](t)).done,t.value)}))}}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var I=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},T=function(e){return T=Object.getOwnPropertyNames||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[t.length]=r);return t},T(e)};function P(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r=T(e),n=0;n<r.length;n++)"default"!==r[n]&&m(t,e,r[n]);return I(t,e),t}function M(e){return e&&e.__esModule?e:{default:e}}function N(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function R(e,t,r,n,i){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(e,r):i?i.value=r:t.set(e,r),r}function O(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function B(e,t,r){if(null!=t){if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object expected.");var n,i;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(void 0===n){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose],r&&(i=n)}if("function"!=typeof n)throw new TypeError("Object not disposable.");i&&(n=function(){try{i.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}var L="function"==typeof SuppressedError?SuppressedError:function(e,t,r){var n=new Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function U(e){function t(t){e.error=e.hasError?new L(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}var r,n=0;return function i(){for(;r=e.stack.pop();)try{if(!r.async&&1===n)return n=0,e.stack.push(r),Promise.resolve().then(i);if(r.dispose){var s=r.dispose.call(r.value);if(r.async)return n|=2,Promise.resolve(s).then(i,(function(e){return t(e),i()}))}else n|=1}catch(e){t(e)}if(1===n)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}()}function D(e,t){return"string"==typeof e&&/^\.\.?\//.test(e)?e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,(function(e,r,n,i,s){return r?t?".jsx":".js":!n||i&&s?n+i+"."+s.toLowerCase()+"js":e})):e}t.default={__extends:i,__assign:s,__rest:o,__decorate:a,__param:c,__esDecorate:l,__runInitializers:u,__propKey:h,__setFunctionName:d,__metadata:f,__awaiter:p,__generator:g,__createBinding:m,__exportStar:w,__values:y,__read:b,__spread:v,__spreadArrays:A,__spreadArray:x,__await:E,__asyncGenerator:C,__asyncDelegator:_,__asyncValues:k,__makeTemplateObject:S,__importStar:P,__importDefault:M,__classPrivateFieldGet:N,__classPrivateFieldSet:R,__classPrivateFieldIn:O,__addDisposableResource:B,__disposeResources:U,__rewriteRelativeImportExtension:D}},7804:function(e,t,r){"use strict";r.d(t,{OA:function(){return n},WL:function(){return s},u$:function(){return i}});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=e=>(...t)=>({_$litDirective$:e,values:t});class s{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},36752:function(e,t,r){"use strict";r.d(t,{JW:function(){return _},XX:function(){return H},c0:function(){return k},ge:function(){return $},qy:function(){return C},s6:function(){return S}});const n=globalThis,i=n.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:e=>e}):void 0,o="$lit$",a=`lit$${Math.random().toFixed(9).slice(2)}$`,c="?"+a,l=`<${c}>`,u=document,h=()=>u.createComment(""),d=e=>null===e||"object"!=typeof e&&"function"!=typeof e,f=Array.isArray,p=e=>f(e)||"function"==typeof e?.[Symbol.iterator],g="[ \t\n\f\r]",m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,w=/-->/g,y=/>/g,b=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),v=/'/g,A=/"/g,x=/^(?:script|style|textarea|title)$/i,E=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),C=E(1),_=E(2),k=(E(3),Symbol.for("lit-noChange")),S=Symbol.for("lit-nothing"),I=new WeakMap,T=u.createTreeWalker(u,129);function P(e,t){if(!f(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(t):t}const M=(e,t)=>{const r=e.length-1,n=[];let i,s=2===t?"<svg>":3===t?"<math>":"",c=m;for(let t=0;t<r;t++){const r=e[t];let u,h,d=-1,f=0;for(;f<r.length&&(c.lastIndex=f,h=c.exec(r),null!==h);)f=c.lastIndex,c===m?"!--"===h[1]?c=w:void 0!==h[1]?c=y:void 0!==h[2]?(x.test(h[2])&&(i=RegExp("</"+h[2],"g")),c=b):void 0!==h[3]&&(c=b):c===b?">"===h[0]?(c=i??m,d=-1):void 0===h[1]?d=-2:(d=c.lastIndex-h[2].length,u=h[1],c=void 0===h[3]?b:'"'===h[3]?A:v):c===A||c===v?c=b:c===w||c===y?c=m:(c=b,i=void 0);const p=c===b&&e[t+1].startsWith("/>")?" ":"";s+=c===m?r+l:d>=0?(n.push(u),r.slice(0,d)+o+r.slice(d)+a+p):r+a+(-2===d?t:p)}return[P(e,s+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};class N{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let s=0,l=0;const u=e.length-1,d=this.parts,[f,p]=M(e,t);if(this.el=N.createElement(f,r),T.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=T.nextNode())&&d.length<u;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(o)){const t=p[l++],r=n.getAttribute(e).split(a),i=/([.?@])?(.*)/.exec(t);d.push({type:1,index:s,name:i[2],strings:r,ctor:"."===i[1]?U:"?"===i[1]?D:"@"===i[1]?j:L}),n.removeAttribute(e)}else e.startsWith(a)&&(d.push({type:6,index:s}),n.removeAttribute(e));if(x.test(n.tagName)){const e=n.textContent.split(a),t=e.length-1;if(t>0){n.textContent=i?i.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],h()),T.nextNode(),d.push({type:2,index:++s});n.append(e[t],h())}}}else if(8===n.nodeType)if(n.data===c)d.push({type:2,index:s});else{let e=-1;for(;-1!==(e=n.data.indexOf(a,e+1));)d.push({type:7,index:s}),e+=a.length-1}s++}}static createElement(e,t){const r=u.createElement("template");return r.innerHTML=e,r}}function R(e,t,r=e,n){if(t===k)return t;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const s=d(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(e),i._$AT(e,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(t=R(e,i._$AS(e,t.values),i,n)),t}class O{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??u).importNode(t,!0);T.currentNode=n;let i=T.nextNode(),s=0,o=0,a=r[0];for(;void 0!==a;){if(s===a.index){let t;2===a.type?t=new B(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new F(i,this,e)),this._$AV.push(t),a=r[++o]}s!==a?.index&&(i=T.nextNode(),s++)}return T.currentNode=u,n}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class B{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=R(this,e,t),d(e)?e===S||null==e||""===e?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==k&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):p(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==S&&d(this._$AH)?this._$AA.nextSibling.data=e:this.T(u.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=N.createElement(P(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new O(n,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=I.get(e.strings);return void 0===t&&I.set(e.strings,t=new N(e)),t}k(e){f(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const i of e)n===t.length?t.push(r=new B(this.O(h()),this.O(h()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}_$AI(e,t=this,r,n){const i=this.strings;let s=!1;if(void 0===i)e=R(this,e,t,0),s=!d(e)||e!==this._$AH&&e!==k,s&&(this._$AH=e);else{const n=e;let o,a;for(e=i[0],o=0;o<i.length-1;o++)a=R(this,n[r+o],t,o),a===k&&(a=this._$AH[o]),s||=!d(a)||a!==this._$AH[o],a===S?e=S:e!==S&&(e+=(a??"")+i[o+1]),this._$AH[o]=a}s&&!n&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class U extends L{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}}class D extends L{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}}class j extends L{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=R(this,e,t,0)??S)===k)return;const r=this._$AH,n=e===S&&r!==S||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==S&&(r===S||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class F{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const $={M:o,P:a,A:c,C:1,L:M,R:O,D:p,V:R,I:B,H:L,N:D,U:j,B:U,F:F},q=n.litHtmlPolyfillSupport;q?.(N,B),(n.litHtmlVersions??=[]).push("3.2.1");const H=(e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(void 0===i){const e=r?.renderBefore??null;n._$litPart$=i=new B(t.insertBefore(h(),e),e,void 0,r??{})}return i._$AI(e),i}},25707:function(e,t,r){"use strict";r.d(t,{MZ:function(){return n.M},wk:function(){return i.w}});var n=r(75694),i=r(44290)},60031:function(e,t,r){"use strict";r.d(t,{J:function(){return i}});var n=r(36752);const i=e=>e??n.s6},68342:function(e,t,r){"use strict";r.d(t,{_:function(){return f},K:function(){return m}});var n=r(36752);const{I:i}=n.ge;var s=r(7804);const o=(e,t)=>{const r=e._$AN;if(void 0===r)return!1;for(const e of r)e._$AO?.(t,!1),o(e,t);return!0},a=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===r?.size)},c=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),h(t)}};function l(e){void 0!==this._$AN?(a(this),this._$AM=e,c(this)):this._$AM=e}function u(e,t=!1,r=0){const n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(n))for(let e=r;e<n.length;e++)o(n[e],!1),a(n[e]);else null!=n&&(o(n,!1),a(n));else o(this,e)}const h=e=>{e.type==s.OA.CHILD&&(e._$AP??=u,e._$AQ??=l)};class d extends s.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),c(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(o(this,e),a(this))}setValue(e){if((()=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const f=()=>new p;class p{}const g=new WeakMap,m=(0,s.u$)(class extends d{render(e){return n.s6}update(e,[t]){const r=t!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),n.s6}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.Y){const t=this.ht??globalThis;let r=g.get(t);void 0===r&&(r=new WeakMap,g.set(t,r)),void 0!==r.get(this.Y)&&this.Y.call(this.ht,void 0),r.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?g.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},12618:function(e,t,r){"use strict";r.d(t,{WF:function(){return s},AH:function(){return n.AH},qy:function(){return i.qy},JW:function(){return i.JW},iz:function(){return n.iz}});var n=r(50842),i=r(36752);class s extends n.mN{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,i.XX)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return i.c0}}s._$litElement$=!0,s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const o=globalThis.litElementPolyfillSupport;o?.({LitElement:s}),(globalThis.litElementVersions??=[]).push("4.1.1")},2150:function(e,t,r){"use strict";r.r(t),r.d(t,{Struct:function(){return u},StructError:function(){return n},any:function(){return _},array:function(){return k},assert:function(){return h},assign:function(){return m},bigint:function(){return S},boolean:function(){return I},coerce:function(){return J},create:function(){return d},date:function(){return T},defaulted:function(){return Q},define:function(){return w},deprecated:function(){return y},dynamic:function(){return b},empty:function(){return X},enums:function(){return P},func:function(){return M},instance:function(){return N},integer:function(){return R},intersection:function(){return O},is:function(){return p},lazy:function(){return v},literal:function(){return B},map:function(){return L},mask:function(){return f},max:function(){return te},min:function(){return re},never:function(){return U},nonempty:function(){return ne},nullable:function(){return D},number:function(){return j},object:function(){return F},omit:function(){return A},optional:function(){return $},partial:function(){return x},pattern:function(){return ie},pick:function(){return E},record:function(){return q},refine:function(){return oe},regexp:function(){return H},set:function(){return z},size:function(){return se},string:function(){return W},struct:function(){return C},trimmed:function(){return Y},tuple:function(){return V},type:function(){return G},union:function(){return Z},unknown:function(){return K},validate:function(){return g}});class n extends TypeError{constructor(e,t){let r;const{message:n,explanation:i,...s}=e,{path:o}=e,a=0===o.length?n:`At path: ${o.join(".")} -- ${n}`;super(i??a),null!=i&&(this.cause=a),Object.assign(this,s),this.name=this.constructor.name,this.failures=()=>r??(r=[e,...t()])}}function i(e){return"object"==typeof e&&null!=e}function s(e){if("[object Object]"!==Object.prototype.toString.call(e))return!1;const t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function o(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}function a(e,t,r,n){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:i,branch:s}=t,{type:a}=r,{refinement:c,message:l=`Expected a value of type \`${a}\`${c?` with refinement \`${c}\``:""}, but received: \`${o(n)}\``}=e;return{value:n,type:a,refinement:c,key:i[i.length-1],path:i,branch:s,...e,message:l}}function*c(e,t,r,n){var s;i(s=e)&&"function"==typeof s[Symbol.iterator]||(e=[e]);for(const i of e){const e=a(i,t,r,n);e&&(yield e)}}function*l(e,t,r={}){const{path:n=[],branch:s=[e],coerce:o=!1,mask:a=!1}=r,c={path:n,branch:s};if(o&&(e=t.coercer(e,c),a&&"type"!==t.type&&i(t.schema)&&i(e)&&!Array.isArray(e)))for(const r in e)void 0===t.schema[r]&&delete e[r];let u="valid";for(const n of t.validator(e,c))n.explanation=r.message,u="not_valid",yield[n,void 0];for(let[h,d,f]of t.entries(e,c)){const t=l(d,f,{path:void 0===h?n:[...n,h],branch:void 0===h?s:[...s,d],coerce:o,mask:a,message:r.message});for(const r of t)r[0]?(u=null!=r[0].refinement?"not_refined":"not_valid",yield[r[0],void 0]):o&&(d=r[1],void 0===h?e=d:e instanceof Map?e.set(h,d):e instanceof Set?e.add(d):i(e)&&(void 0!==d||h in e)&&(e[h]=d))}if("not_valid"!==u)for(const n of t.refiner(e,c))n.explanation=r.message,u="not_refined",yield[n,void 0];"valid"===u&&(yield[void 0,e])}class u{constructor(e){const{type:t,schema:r,validator:n,refiner:i,coercer:s=e=>e,entries:o=function*(){}}=e;this.type=t,this.schema=r,this.entries=o,this.coercer=s,this.validator=n?(e,t)=>c(n(e,t),t,this,e):()=>[],this.refiner=i?(e,t)=>c(i(e,t),t,this,e):()=>[]}assert(e,t){return h(e,this,t)}create(e,t){return d(e,this,t)}is(e){return p(e,this)}mask(e,t){return f(e,this,t)}validate(e,t={}){return g(e,this,t)}}function h(e,t,r){const n=g(e,t,{message:r});if(n[0])throw n[0]}function d(e,t,r){const n=g(e,t,{coerce:!0,message:r});if(n[0])throw n[0];return n[1]}function f(e,t,r){const n=g(e,t,{coerce:!0,mask:!0,message:r});if(n[0])throw n[0];return n[1]}function p(e,t){return!g(e,t)[0]}function g(e,t,r={}){const i=l(e,t,r),s=function(e){const{done:t,value:r}=e.next();return t?void 0:r}(i);return s[0]?[new n(s[0],(function*(){for(const e of i)e[0]&&(yield e[0])})),void 0]:[void 0,s[1]]}function m(...e){const t="type"===e[0].type,r=e.map((e=>e.schema)),n=Object.assign({},...r);return t?G(n):F(n)}function w(e,t){return new u({type:e,schema:null,validator:t})}function y(e,t){return new u({...e,refiner:(t,r)=>void 0===t||e.refiner(t,r),validator(r,n){return void 0===r||(t(r,n),e.validator(r,n))}})}function b(e){return new u({type:"dynamic",schema:null,*entries(t,r){const n=e(t,r);yield*n.entries(t,r)},validator(t,r){return e(t,r).validator(t,r)},coercer(t,r){return e(t,r).coercer(t,r)},refiner(t,r){return e(t,r).refiner(t,r)}})}function v(e){let t;return new u({type:"lazy",schema:null,*entries(r,n){t??(t=e()),yield*t.entries(r,n)},validator(r,n){return t??(t=e()),t.validator(r,n)},coercer(r,n){return t??(t=e()),t.coercer(r,n)},refiner(r,n){return t??(t=e()),t.refiner(r,n)}})}function A(e,t){const{schema:r}=e,n={...r};for(const e of t)delete n[e];return"type"===e.type?G(n):F(n)}function x(e){const t=e instanceof u,r=t?{...e.schema}:{...e};for(const e in r)r[e]=$(r[e]);return t&&"type"===e.type?G(r):F(r)}function E(e,t){const{schema:r}=e,n={};for(const e of t)n[e]=r[e];return"type"===e.type?G(n):F(n)}function C(e,t){return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."),w(e,t)}function _(){return w("any",(()=>!0))}function k(e){return new u({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(const[r,n]of t.entries())yield[r,n,e]},coercer(e){return Array.isArray(e)?e.slice():e},validator(e){return Array.isArray(e)||`Expected an array value, but received: ${o(e)}`}})}function S(){return w("bigint",(e=>"bigint"==typeof e))}function I(){return w("boolean",(e=>"boolean"==typeof e))}function T(){return w("date",(e=>e instanceof Date&&!isNaN(e.getTime())||`Expected a valid \`Date\` object, but received: ${o(e)}`))}function P(e){const t={},r=e.map((e=>o(e))).join();for(const r of e)t[r]=r;return new u({type:"enums",schema:t,validator(t){return e.includes(t)||`Expected one of \`${r}\`, but received: ${o(t)}`}})}function M(){return w("func",(e=>"function"==typeof e||`Expected a function, but received: ${o(e)}`))}function N(e){return w("instance",(t=>t instanceof e||`Expected a \`${e.name}\` instance, but received: ${o(t)}`))}function R(){return w("integer",(e=>"number"==typeof e&&!isNaN(e)&&Number.isInteger(e)||`Expected an integer, but received: ${o(e)}`))}function O(e){return new u({type:"intersection",schema:null,*entries(t,r){for(const n of e)yield*n.entries(t,r)},*validator(t,r){for(const n of e)yield*n.validator(t,r)},*refiner(t,r){for(const n of e)yield*n.refiner(t,r)}})}function B(e){const t=o(e),r=typeof e;return new u({type:"literal",schema:"string"===r||"number"===r||"boolean"===r?e:null,validator(r){return r===e||`Expected the literal \`${t}\`, but received: ${o(r)}`}})}function L(e,t){return new u({type:"map",schema:null,*entries(r){if(e&&t&&r instanceof Map)for(const[n,i]of r.entries())yield[n,n,e],yield[n,i,t]},coercer(e){return e instanceof Map?new Map(e):e},validator(e){return e instanceof Map||`Expected a \`Map\` object, but received: ${o(e)}`}})}function U(){return w("never",(()=>!1))}function D(e){return new u({...e,validator:(t,r)=>null===t||e.validator(t,r),refiner:(t,r)=>null===t||e.refiner(t,r)})}function j(){return w("number",(e=>"number"==typeof e&&!isNaN(e)||`Expected a number, but received: ${o(e)}`))}function F(e){const t=e?Object.keys(e):[],r=U();return new u({type:"object",schema:e||null,*entries(n){if(e&&i(n)){const i=new Set(Object.keys(n));for(const r of t)i.delete(r),yield[r,n[r],e[r]];for(const e of i)yield[e,n[e],r]}},validator(e){return i(e)||`Expected an object, but received: ${o(e)}`},coercer(e){return i(e)?{...e}:e}})}function $(e){return new u({...e,validator:(t,r)=>void 0===t||e.validator(t,r),refiner:(t,r)=>void 0===t||e.refiner(t,r)})}function q(e,t){return new u({type:"record",schema:null,*entries(r){if(i(r))for(const n in r){const i=r[n];yield[n,n,e],yield[n,i,t]}},validator(e){return i(e)||`Expected an object, but received: ${o(e)}`}})}function H(){return w("regexp",(e=>e instanceof RegExp))}function z(e){return new u({type:"set",schema:null,*entries(t){if(e&&t instanceof Set)for(const r of t)yield[r,r,e]},coercer(e){return e instanceof Set?new Set(e):e},validator(e){return e instanceof Set||`Expected a \`Set\` object, but received: ${o(e)}`}})}function W(){return w("string",(e=>"string"==typeof e||`Expected a string, but received: ${o(e)}`))}function V(e){const t=U();return new u({type:"tuple",schema:null,*entries(r){if(Array.isArray(r)){const n=Math.max(e.length,r.length);for(let i=0;i<n;i++)yield[i,r[i],e[i]||t]}},validator(e){return Array.isArray(e)||`Expected an array, but received: ${o(e)}`}})}function G(e){const t=Object.keys(e);return new u({type:"type",schema:e,*entries(r){if(i(r))for(const n of t)yield[n,r[n],e[n]]},validator(e){return i(e)||`Expected an object, but received: ${o(e)}`},coercer(e){return i(e)?{...e}:e}})}function Z(e){const t=e.map((e=>e.type)).join(" | ");return new u({type:"union",schema:null,coercer(t){for(const r of e){const[e,n]=r.validate(t,{coerce:!0});if(!e)return n}return t},validator(r,n){const i=[];for(const t of e){const[...e]=l(r,t,n),[s]=e;if(!s[0])return[];for(const[t]of e)t&&i.push(t)}return[`Expected the value to satisfy a union of \`${t}\`, but received: ${o(r)}`,...i]}})}function K(){return w("unknown",(()=>!0))}function J(e,t,r){return new u({...e,coercer:(n,i)=>p(n,t)?e.coercer(r(n,i),i):e.coercer(n,i)})}function Q(e,t,r={}){return J(e,K(),(e=>{const n="function"==typeof t?t():t;if(void 0===e)return n;if(!r.strict&&s(e)&&s(n)){const t={...e};let r=!1;for(const e in n)void 0===t[e]&&(t[e]=n[e],r=!0);if(r)return t}return e}))}function Y(e){return J(e,W(),(e=>e.trim()))}function X(e){return oe(e,"empty",(t=>{const r=ee(t);return 0===r||`Expected an empty ${e.type} but received one with a size of \`${r}\``}))}function ee(e){return e instanceof Map||e instanceof Set?e.size:e.length}function te(e,t,r={}){const{exclusive:n}=r;return oe(e,"max",(r=>n?r<t:r<=t||`Expected a ${e.type} less than ${n?"":"or equal to "}${t} but received \`${r}\``))}function re(e,t,r={}){const{exclusive:n}=r;return oe(e,"min",(r=>n?r>t:r>=t||`Expected a ${e.type} greater than ${n?"":"or equal to "}${t} but received \`${r}\``))}function ne(e){return oe(e,"nonempty",(t=>ee(t)>0||`Expected a nonempty ${e.type} but received an empty one`))}function ie(e,t){return oe(e,"pattern",(r=>t.test(r)||`Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`))}function se(e,t,r=t){const n=`Expected a ${e.type}`,i=t===r?`of \`${t}\``:`between \`${t}\` and \`${r}\``;return oe(e,"size",(e=>{if("number"==typeof e||e instanceof Date)return t<=e&&e<=r||`${n} ${i} but received \`${e}\``;if(e instanceof Map||e instanceof Set){const{size:s}=e;return t<=s&&s<=r||`${n} with a size ${i} but received one with a size of \`${s}\``}{const{length:s}=e;return t<=s&&s<=r||`${n} with a length ${i} but received one with a length of \`${s}\``}}))}function oe(e,t,r){return new u({...e,*refiner(n,i){yield*e.refiner(n,i);const s=c(r(n,i),i,e,n);for(const e of s)yield{...e,refinement:t}}})}},45238:function(e,t,r){"use strict";function n(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?globalThis.Buffer.allocUnsafe(e):new Uint8Array(e)}r.d(t,{K:function(){return n}})},75007:function(e,t,r){"use strict";r.d(t,{x:function(){return i}});var n=r(45238);function i(e,t){t||(t=e.reduce(((e,t)=>e+t.length),0));const r=(0,n.K)(t);let i=0;for(const t of e)r.set(t,i),i+=t.length;return r}},44117:function(e,t,r){"use strict";r.d(t,{s:function(){return i}});var n=r(50040);function i(e,t="utf8"){const r=n.A[t];if(!r)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?r.decoder.decode(`${r.prefix}${e}`):globalThis.Buffer.from(e,"utf8")}},53155:function(e,t,r){"use strict";r.d(t,{dI:function(){return s.d},sH:function(){return i.s},xW:function(){return n.x}});var n=r(75007),i=r(44117),s=r(27302)},27302:function(e,t,r){"use strict";r.d(t,{d:function(){return i}});var n=r(50040);function i(e,t="utf8"){const r=n.A[t];if(!r)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?r.encoder.encode(e).substring(1):globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8")}},50040:function(e,t,r){"use strict";r.d(t,{A:function(){return Fe}});var n={};r.r(n),r.d(n,{identity:function(){return S}});var i={};r.r(i),r.d(i,{base2:function(){return I}});var s={};r.r(s),r.d(s,{base8:function(){return T}});var o={};r.r(o),r.d(o,{base10:function(){return P}});var a={};r.r(a),r.d(a,{base16:function(){return M},base16upper:function(){return N}});var c={};r.r(c),r.d(c,{base32:function(){return R},base32hex:function(){return U},base32hexpad:function(){return j},base32hexpadupper:function(){return F},base32hexupper:function(){return D},base32pad:function(){return B},base32padupper:function(){return L},base32upper:function(){return O},base32z:function(){return $}});var l={};r.r(l),r.d(l,{base36:function(){return q},base36upper:function(){return H}});var u={};r.r(u),r.d(u,{base58btc:function(){return z},base58flickr:function(){return W}});var h={};r.r(h),r.d(h,{base64:function(){return V},base64pad:function(){return G},base64url:function(){return Z},base64urlpad:function(){return K}});var d={};r.r(d),r.d(d,{base256emoji:function(){return X}});var f={};r.r(f),r.d(f,{sha256:function(){return Ae},sha512:function(){return xe}});var p={};r.r(p),r.d(p,{identity:function(){return Ce}});var g={};r.r(g),r.d(g,{code:function(){return ke},decode:function(){return Ie},encode:function(){return Se},name:function(){return _e}});var m={};r.r(m),r.d(m,{code:function(){return Ne},decode:function(){return Oe},encode:function(){return Re},name:function(){return Me}});var w=function(e,t){if(e.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var i=0;i<e.length;i++){var s=e.charAt(i),o=s.charCodeAt(0);if(255!==r[o])throw new TypeError(s+" is ambiguous");r[o]=i}var a=e.length,c=e.charAt(0),l=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function h(e){if("string"!=typeof e)throw new TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[t]){for(var n=0,i=0;e[t]===c;)n++,t++;for(var s=(e.length-t)*l+1>>>0,o=new Uint8Array(s);e[t];){var u=r[e.charCodeAt(t)];if(255===u)return;for(var h=0,d=s-1;(0!==u||h<i)&&-1!==d;d--,h++)u+=a*o[d]>>>0,o[d]=u%256>>>0,u=u/256>>>0;if(0!==u)throw new Error("Non-zero carry");i=h,t++}if(" "!==e[t]){for(var f=s-i;f!==s&&0===o[f];)f++;for(var p=new Uint8Array(n+(s-f)),g=n;f!==s;)p[g++]=o[f++];return p}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===t.length)return"";for(var r=0,n=0,i=0,s=t.length;i!==s&&0===t[i];)i++,r++;for(var o=(s-i)*u+1>>>0,l=new Uint8Array(o);i!==s;){for(var h=t[i],d=0,f=o-1;(0!==h||d<n)&&-1!==f;f--,d++)h+=256*l[f]>>>0,l[f]=h%a>>>0,h=h/a>>>0;if(0!==h)throw new Error("Non-zero carry");n=d,i++}for(var p=o-n;p!==o&&0===l[p];)p++;for(var g=c.repeat(r);p<o;++p)g+=e.charAt(l[p]);return g},decodeUnsafe:h,decode:function(e){var r=h(e);if(r)return r;throw new Error(`Non-${t} character`)}}};new Uint8Array(0);const y=e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Unknown type, must be binary type")};class b{constructor(e,t,r){this.name=e,this.prefix=t,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class v{constructor(e,t,r){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw new Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=r}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return x(this,e)}}class A{constructor(e){this.decoders=e}or(e){return x(this,e)}decode(e){const t=e[0],r=this.decoders[t];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const x=(e,t)=>new A({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class E{constructor(e,t,r,n){this.name=e,this.prefix=t,this.baseEncode=r,this.baseDecode=n,this.encoder=new b(e,t,r),this.decoder=new v(e,t,n)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const C=({name:e,prefix:t,encode:r,decode:n})=>new E(e,t,r,n),_=({prefix:e,name:t,alphabet:r})=>{const{encode:n,decode:i}=w(r,t);return C({prefix:e,name:t,encode:n,decode:e=>y(i(e))})},k=({name:e,prefix:t,bitsPerChar:r,alphabet:n})=>C({prefix:t,name:e,encode(e){return((e,t,r)=>{const n="="===t[t.length-1],i=(1<<r)-1;let s="",o=0,a=0;for(let n=0;n<e.length;++n)for(a=a<<8|e[n],o+=8;o>r;)o-=r,s+=t[i&a>>o];if(o&&(s+=t[i&a<<r-o]),n)for(;s.length*r&7;)s+="=";return s})(e,n,r)},decode(t){return((e,t,r,n)=>{const i={};for(let e=0;e<t.length;++e)i[t[e]]=e;let s=e.length;for(;"="===e[s-1];)--s;const o=new Uint8Array(s*r/8|0);let a=0,c=0,l=0;for(let t=0;t<s;++t){const s=i[e[t]];if(void 0===s)throw new SyntaxError(`Non-${n} character`);c=c<<r|s,a+=r,a>=8&&(a-=8,o[l++]=255&c>>a)}if(a>=r||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return o})(t,n,r,e)}}),S=C({prefix:"\0",name:"identity",encode:e=>{return t=e,(new TextDecoder).decode(t);var t},decode:e=>(e=>(new TextEncoder).encode(e))(e)}),I=k({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),T=k({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),P=_({prefix:"9",name:"base10",alphabet:"0123456789"}),M=k({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),N=k({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),R=k({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),O=k({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),B=k({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),L=k({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),U=k({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),D=k({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),j=k({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),F=k({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),$=k({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),q=_({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),H=_({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),z=_({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),W=_({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),V=k({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),G=k({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),Z=k({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),K=k({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),J=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),Q=J.reduce(((e,t,r)=>(e[r]=t,e)),[]),Y=J.reduce(((e,t,r)=>(e[t.codePointAt(0)]=r,e)),[]),X=C({prefix:"🚀",name:"base256emoji",encode:function(e){return e.reduce(((e,t)=>e+Q[t]),"")},decode:function(e){const t=[];for(const r of e){const e=Y[r.codePointAt(0)];if(void 0===e)throw new Error(`Non-base256emoji character: ${r}`);t.push(e)}return new Uint8Array(t)}});var ee=128,te=-128,re=Math.pow(2,31),ne=Math.pow(2,7),ie=Math.pow(2,14),se=Math.pow(2,21),oe=Math.pow(2,28),ae=Math.pow(2,35),ce=Math.pow(2,42),le=Math.pow(2,49),ue=Math.pow(2,56),he=Math.pow(2,63),de=function e(t,r,n){r=r||[];for(var i=n=n||0;t>=re;)r[n++]=255&t|ee,t/=128;for(;t&te;)r[n++]=255&t|ee,t>>>=7;return r[n]=0|t,e.bytes=n-i+1,r},fe=function(e){return e<ne?1:e<ie?2:e<se?3:e<oe?4:e<ae?5:e<ce?6:e<le?7:e<ue?8:e<he?9:10};const pe=(e,t,r=0)=>(de(e,t,r),t),ge=e=>fe(e),me=(e,t)=>{const r=t.byteLength,n=ge(e),i=n+ge(r),s=new Uint8Array(i+r);return pe(e,s,0),pe(r,s,n),s.set(t,i),new we(e,r,t,s)};class we{constructor(e,t,r,n){this.code=e,this.size=t,this.digest=r,this.bytes=n}}const ye=({name:e,code:t,encode:r})=>new be(e,t,r);class be{constructor(e,t,r){this.name=e,this.code=t,this.encode=r}digest(e){if(e instanceof Uint8Array){const t=this.encode(e);return t instanceof Uint8Array?me(this.code,t):t.then((e=>me(this.code,e)))}throw Error("Unknown type, must be binary type")}}const ve=e=>async t=>new Uint8Array(await crypto.subtle.digest(e,t)),Ae=ye({name:"sha2-256",code:18,encode:ve("SHA-256")}),xe=ye({name:"sha2-512",code:19,encode:ve("SHA-512")}),Ee=y,Ce={code:0,name:"identity",encode:Ee,digest:e=>me(0,Ee(e))},_e="raw",ke=85,Se=e=>y(e),Ie=e=>y(e),Te=new TextEncoder,Pe=new TextDecoder,Me="json",Ne=512,Re=e=>Te.encode(JSON.stringify(e)),Oe=e=>JSON.parse(Pe.decode(e));Symbol.toStringTag,Symbol.for("nodejs.util.inspect.custom"),Symbol.for("@ipld/js-cid/CID");const Be={...n,...i,...s,...o,...a,...c,...l,...u,...h,...d};var Le=r(45238);function Ue(e,t,r,n){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:r},decoder:{decode:n}}}const De=Ue("utf8","u",(e=>"u"+new TextDecoder("utf8").decode(e)),(e=>(new TextEncoder).encode(e.substring(1)))),je=Ue("ascii","a",(e=>{let t="a";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t}),(e=>{e=e.substring(1);const t=(0,Le.K)(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}));var Fe={utf8:De,"utf-8":De,hex:Be.base16,latin1:je,ascii:je,binary:je,...Be}},29073:function(e,t,r){"use strict";r.d(t,{BX:function(){return h},KR:function(){return p},P9:function(){return f},B1:function(){return d}}),Symbol();const n=Symbol(),i=Object.getPrototypeOf,s=new WeakMap,o=(e,t=!0)=>{s.set(e,t)},a=e=>"object"==typeof e&&null!==e,c=new WeakMap,l=new WeakSet,[u]=((e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>a(e)&&!l.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),u=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},h=new WeakMap,d=(e,t,r=u)=>{const n=h.get(e);if((null==n?void 0:n[0])===t)return n[1];const i=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return o(i,!0),h.set(e,[t,i]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(i,t))return;const n=Reflect.get(e,t),s={value:n,enumerable:!0,configurable:!0};if(l.has(n))o(n,!1);else if(n instanceof Promise)delete s.value,s.get=()=>r(n);else if(c.has(n)){const[e,t]=c.get(n);s.value=d(e,t(),r)}Object.defineProperty(i,t,s)})),Object.preventExtensions(i)},f=new WeakMap,p=[1,1],g=o=>{if(!a(o))throw new Error("object required");const u=f.get(o);if(u)return u;let h=p[0];const m=new Set,w=(e,t=++p[0])=>{h!==t&&(h=t,m.forEach((r=>r(e,t))))};let y=p[1];const b=e=>(t,r)=>{const n=[...t];n[1]=[e,...n[1]],w(n,r)},v=new Map,A=e=>{var t;const r=v.get(e);r&&(v.delete(e),null==(t=r[1])||t.call(r))},x=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),E=t(x,{deleteProperty(e,t){const r=Reflect.get(e,t);A(t);const n=Reflect.deleteProperty(e,t);return n&&w(["delete",[t],r]),n},set(t,o,u,h){const d=Reflect.has(t,o),p=Reflect.get(t,o,h);if(d&&(e(p,u)||f.has(u)&&e(p,f.get(u))))return!0;var y;A(o),a(u)&&(u=(e=>e&&(s.has(e)?s.get(e):i(e)===Object.prototype||i(e)===Array.prototype))(y=u)&&y[n]||null||u);let x=u;if(u instanceof Promise)u.then((e=>{u.status="fulfilled",u.value=e,w(["resolve",[o],e])})).catch((e=>{u.status="rejected",u.reason=e,w(["reject",[o],e])}));else{!c.has(u)&&r(u)&&(x=g(u));const e=!l.has(x)&&c.get(x);e&&((e,t)=>{if(v.has(e))throw new Error("prop listener already exists");if(m.size){const r=t[3](b(e));v.set(e,[t,r])}else v.set(e,[t])})(o,e)}return Reflect.set(t,o,x,h),w(["set",[o],u,p]),!0}});f.set(o,E);const C=[x,(e=++p[1])=>(y===e||m.size||(y=e,v.forEach((([t])=>{const r=t[1](e);r>h&&(h=r)}))),h),d,e=>(m.add(e),1===m.size&&v.forEach((([e,t],r)=>{if(t)throw new Error("remove already exists");const n=e[3](b(r));v.set(r,[e,n])})),()=>{m.delete(e),0===m.size&&v.forEach((([e,t],r)=>{t&&(t(),v.set(r,[e]))}))})];return c.set(E,C),Reflect.ownKeys(o).forEach((e=>{const t=Object.getOwnPropertyDescriptor(o,e);"value"in t&&(E[e]=o[e],delete t.value,delete t.writable),Object.defineProperty(x,e,t)})),E})=>[g,c,l,e,t,r,u,h,d,f,p])();function h(e={}){return u(e)}function d(e,t,r){const n=c.get(e);let i;n||console.warn("Please use proxy object");const s=[],o=n[3];let a=!1;const l=o((e=>{s.push(e),r?t(s.splice(0)):i||(i=Promise.resolve().then((()=>{i=void 0,a&&t(s.splice(0))})))}));return a=!0,()=>{a=!1,l()}}function f(e,t){const r=c.get(e);r||console.warn("Please use proxy object");const[n,i,s]=r;return s(n,i(),t)}function p(e){return l.add(e),e}},4707:function(e,t,r){"use strict";r.d(t,{u$:function(){return i},zC:function(){return s}});var n=r(29073);function i(e,t,r,i){let s=e[t];return(0,n.B1)(e,(()=>{const n=e[t];Object.is(s,n)||r(s=n)}),i)}function s(e){const t=(0,n.BX)({data:Array.from(e||[]),has(e){return this.data.some((t=>t[0]===e))},set(e,t){const r=this.data.find((t=>t[0]===e));return r?r[1]=t:this.data.push([e,t]),this},get(e){var t;return null==(t=this.data.find((t=>t[0]===e)))?void 0:t[1]},delete(e){const t=this.data.findIndex((t=>t[0]===e));return-1!==t&&(this.data.splice(t,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(e){this.data.forEach((t=>{e(t[1],t[0],this)}))},keys(){return this.data.map((e=>e[0])).values()},values(){return this.data.map((e=>e[1])).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(t,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(t),t}Symbol()},13033:function(e,t,r){"use strict";function n(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}r.d(t,{J:function(){return n}})},55176:function(e,t,r){"use strict";r.d(t,{T:function(){return ue}});var n=r(25276);const i=/^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/,s=/^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/,o=/^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/,a=/^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;function c(e){return a.test(e)}function l(e){return(0,n.Yv)(a,e)}const u=/^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/,h=/^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/,d=/^receive\(\) external payable$/;new Set(["memory","indexed","storage","calldata"]);const f=new Set(["indexed"]),p=new Set(["calldata","memory","storage"]);class g extends Error{constructor(e,t={}){const r=t.cause instanceof g?t.cause.details:t.cause?.message?t.cause.message:t.details,n=t.cause instanceof g&&t.cause.docsPath||t.docsPath;super([e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...n?[`Docs: https://abitype.dev${n}`]:[],...r?[`Details: ${r}`]:[],"Version: abitype@1.0.6"].join("\n")),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiTypeError"}),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=n,this.metaMessages=t.metaMessages,this.shortMessage=e}}class m extends g{constructor({type:e}){super("Unknown type.",{metaMessages:[`Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownTypeError"})}}class w extends g{constructor({type:e}){super("Unknown type.",{metaMessages:[`Type "${e}" is not a valid ABI type.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownSolidityTypeError"})}}class y extends g{constructor({param:e}){super("Invalid ABI parameter.",{details:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParameterError"})}}class b extends g{constructor({param:e,name:t}){super("Invalid ABI parameter.",{details:e,metaMessages:[`"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SolidityProtectedKeywordError"})}}class v extends g{constructor({param:e,type:t,modifier:r}){super("Invalid ABI parameter.",{details:e,metaMessages:[`Modifier "${r}" not allowed${t?` in "${t}" type`:""}.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidModifierError"})}}class A extends g{constructor({param:e,type:t,modifier:r}){super("Invalid ABI parameter.",{details:e,metaMessages:[`Modifier "${r}" not allowed${t?` in "${t}" type`:""}.`,`Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidFunctionModifierError"})}}class x extends g{constructor({abiParameter:e}){super("Invalid ABI parameter.",{details:JSON.stringify(e,null,2),metaMessages:["ABI parameter type is invalid."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiTypeParameterError"})}}class E extends g{constructor({signature:e,type:t}){super(`Invalid ${t} signature.`,{details:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSignatureError"})}}class C extends g{constructor({signature:e}){super("Unknown signature.",{details:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownSignatureError"})}}class _ extends g{constructor({signature:e}){super("Invalid struct signature.",{details:e,metaMessages:["No properties exist."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStructSignatureError"})}}class k extends g{constructor({type:e}){super("Circular reference detected.",{metaMessages:[`Struct "${e}" is a circular reference.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CircularReferenceError"})}}class S extends g{constructor({current:e,depth:t}){super("Unbalanced parentheses.",{metaMessages:[`"${e.trim()}" has too many ${t>0?"opening":"closing"} parentheses.`],details:`Depth "${t}"`}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParenthesisError"})}}const I=new Map([["address",{type:"address"}],["bool",{type:"bool"}],["bytes",{type:"bytes"}],["bytes32",{type:"bytes32"}],["int",{type:"int256"}],["int256",{type:"int256"}],["string",{type:"string"}],["uint",{type:"uint256"}],["uint8",{type:"uint8"}],["uint16",{type:"uint16"}],["uint24",{type:"uint24"}],["uint32",{type:"uint32"}],["uint64",{type:"uint64"}],["uint96",{type:"uint96"}],["uint112",{type:"uint112"}],["uint160",{type:"uint160"}],["uint192",{type:"uint192"}],["uint256",{type:"uint256"}],["address owner",{type:"address",name:"owner"}],["address to",{type:"address",name:"to"}],["bool approved",{type:"bool",name:"approved"}],["bytes _data",{type:"bytes",name:"_data"}],["bytes data",{type:"bytes",name:"data"}],["bytes signature",{type:"bytes",name:"signature"}],["bytes32 hash",{type:"bytes32",name:"hash"}],["bytes32 r",{type:"bytes32",name:"r"}],["bytes32 root",{type:"bytes32",name:"root"}],["bytes32 s",{type:"bytes32",name:"s"}],["string name",{type:"string",name:"name"}],["string symbol",{type:"string",name:"symbol"}],["string tokenURI",{type:"string",name:"tokenURI"}],["uint tokenId",{type:"uint256",name:"tokenId"}],["uint8 v",{type:"uint8",name:"v"}],["uint256 balance",{type:"uint256",name:"balance"}],["uint256 tokenId",{type:"uint256",name:"tokenId"}],["uint256 value",{type:"uint256",name:"value"}],["event:address indexed from",{type:"address",name:"from",indexed:!0}],["event:address indexed to",{type:"address",name:"to",indexed:!0}],["event:uint indexed tokenId",{type:"uint256",name:"tokenId",indexed:!0}],["event:uint256 indexed tokenId",{type:"uint256",name:"tokenId",indexed:!0}]]);function T(e,t={}){if(function(e){return o.test(e)}(e)){const r=function(e){return(0,n.Yv)(o,e)}(e);if(!r)throw new E({signature:e,type:"function"});const i=O(r.parameters),s=[],a=i.length;for(let e=0;e<a;e++)s.push(R(i[e],{modifiers:p,structs:t,type:"function"}));const c=[];if(r.returns){const e=O(r.returns),n=e.length;for(let r=0;r<n;r++)c.push(R(e[r],{modifiers:p,structs:t,type:"function"}))}return{name:r.name,type:"function",stateMutability:r.stateMutability??"nonpayable",inputs:s,outputs:c}}if(function(e){return s.test(e)}(e)){const r=function(e){return(0,n.Yv)(s,e)}(e);if(!r)throw new E({signature:e,type:"event"});const i=O(r.parameters),o=[],a=i.length;for(let e=0;e<a;e++)o.push(R(i[e],{modifiers:f,structs:t,type:"event"}));return{name:r.name,type:"event",inputs:o}}if(function(e){return i.test(e)}(e)){const r=function(e){return(0,n.Yv)(i,e)}(e);if(!r)throw new E({signature:e,type:"error"});const s=O(r.parameters),o=[],a=s.length;for(let e=0;e<a;e++)o.push(R(s[e],{structs:t,type:"error"}));return{name:r.name,type:"error",inputs:o}}if(function(e){return u.test(e)}(e)){const r=function(e){return(0,n.Yv)(u,e)}(e);if(!r)throw new E({signature:e,type:"constructor"});const i=O(r.parameters),s=[],o=i.length;for(let e=0;e<o;e++)s.push(R(i[e],{structs:t,type:"constructor"}));return{type:"constructor",stateMutability:r.stateMutability??"nonpayable",inputs:s}}if(function(e){return h.test(e)}(e))return{type:"fallback"};if(function(e){return d.test(e)}(e))return{type:"receive",stateMutability:"payable"};throw new C({signature:e})}const P=/^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,M=/^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,N=/^u?int$/;function R(e,t){const r=function(e,t){return t?`${t}:${e}`:e}(e,t?.type);if(I.has(r))return I.get(r);const i=n.wj.test(e),s=(0,n.Yv)(i?M:P,e);if(!s)throw new y({param:e});if(s.name&&function(e){return"address"===e||"bool"===e||"function"===e||"string"===e||"tuple"===e||n.BD.test(e)||n.Ge.test(e)||L.test(e)}(s.name))throw new b({param:e,name:s.name});const o=s.name?{name:s.name}:{},a="indexed"===s.modifier?{indexed:!0}:{},c=t?.structs??{};let l,u={};if(i){l="tuple";const e=O(s.type),t=[],r=e.length;for(let n=0;n<r;n++)t.push(R(e[n],{structs:c}));u={components:t}}else if(s.type in c)l="tuple",u={components:c[s.type]};else if(N.test(s.type))l=`${s.type}256`;else if(l=s.type,"struct"!==t?.type&&!B(l))throw new w({type:l});if(s.modifier){if(!t?.modifiers?.has?.(s.modifier))throw new v({param:e,type:t?.type,modifier:s.modifier});if(p.has(s.modifier)&&!function(e,t){return t||"bytes"===e||"string"===e||"tuple"===e}(l,!!s.array))throw new A({param:e,type:t?.type,modifier:s.modifier})}const h={type:`${l}${s.array??""}`,...o,...a,...u};return I.set(r,h),h}function O(e,t=[],r="",n=0){const i=e.trim().length;for(let s=0;s<i;s++){const i=e[s],o=e.slice(s+1);switch(i){case",":return 0===n?O(o,[...t,r.trim()]):O(o,t,`${r}${i}`,n);case"(":return O(o,t,`${r}${i}`,n+1);case")":return O(o,t,`${r}${i}`,n-1);default:return O(o,t,`${r}${i}`,n)}}if(""===r)return t;if(0!==n)throw new S({current:r,depth:n});return t.push(r.trim()),t}function B(e){return"address"===e||"bool"===e||"function"===e||"string"===e||n.BD.test(e)||n.Ge.test(e)}const L=/^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/,U=/^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;function D(e,t,r=new Set){const i=[],s=e.length;for(let o=0;o<s;o++){const s=e[o];if(n.wj.test(s.type))i.push(s);else{const e=(0,n.Yv)(U,s.type);if(!e?.type)throw new x({abiParameter:s});const{array:o,type:a}=e;if(a in t){if(r.has(a))throw new k({type:a});i.push({...s,type:`tuple${o??""}`,components:D(t[a]??[],t,new Set([...r,a]))})}else{if(!B(a))throw new m({type:a});i.push(s)}}}return i}function j(e){const t=function(e){const t={},r=e.length;for(let n=0;n<r;n++){const r=e[n];if(!c(r))continue;const i=l(r);if(!i)throw new E({signature:r,type:"struct"});const s=i.properties.split(";"),o=[],a=s.length;for(let e=0;e<a;e++){const t=s[e].trim();if(!t)continue;const r=R(t,{type:"struct"});o.push(r)}if(!o.length)throw new _({signature:r});t[i.name]=o}const n={},i=Object.entries(t),s=i.length;for(let e=0;e<s;e++){const[r,s]=i[e];n[r]=D(s,t)}return n}(e),r=[],n=e.length;for(let i=0;i<n;i++){const n=e[i];c(n)||r.push(T(n,t))}return r}var F=r(13033),$=r(94823);const q="0x82ad56cb",H="0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",z="0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe";var W=r(51344),V=r(98703),G=r(38863),Z=r(46652),K=r(37372),J=r(25419),Q=r(94531);const Y="/docs/contract/encodeDeployData";function X(e){const{abi:t,args:r,bytecode:n}=e;if(!r||0===r.length)return n;const i=t.find((e=>"type"in e&&"constructor"===e.type));if(!i)throw new K.YW({docsPath:Y});if(!("inputs"in i))throw new K.YF({docsPath:Y});if(!i.inputs||0===i.inputs.length)throw new K.YF({docsPath:Y});const s=(0,Q.h)(i.inputs,r);return(0,J.aP)([n,s])}var ee=r(98503),te=r(69985),re=r(84192),ne=r(92592),ie=r(71772),se=r(99789),oe=r(57671),ae=r(52167),ce=r(65547),le=r(60332);async function ue(e,t){const{account:n=e.account,batch:i=Boolean(e.batch?.multicall),blockNumber:s,blockTag:o="latest",accessList:a,blobs:c,code:l,data:u,factory:h,factoryData:d,gas:f,gasPrice:p,maxFeePerBlobGas:g,maxFeePerGas:m,maxPriorityFeePerGas:w,nonce:y,to:b,value:v,stateOverride:A,...x}=t,E=n?(0,F.J)(n):void 0;if(l&&(h||d))throw new W.C("Cannot provide both `code` & `factory`/`factoryData` as parameters.");if(l&&b)throw new W.C("Cannot provide both `code` & `to` as parameters.");const C=l&&u,_=h&&d&&b&&u,k=C||_,S=C?function(e){const{code:t,data:r}=e;return X({abi:j(["constructor(bytes, bytes)"]),bytecode:H,args:[t,r]})}({code:l,data:u}):_?function(e){const{data:t,factory:r,factoryData:n,to:i}=e;return X({abi:j(["constructor(address, bytes, address, bytes)"]),bytecode:z,args:[i,t,r,n]})}({data:u,factory:h,factoryData:d,to:b}):u;try{(0,le.c)(t);const r=(s?(0,re.cK)(s):void 0)||o,n=(0,ce.yH)(A),l=e.chain?.formatters?.transactionRequest?.format,u=(l||oe.Bv)({...(0,se.o)(x,{format:l}),from:E?.address,accessList:a,blobs:c,data:S,gas:f,gasPrice:p,maxFeePerBlobGas:g,maxFeePerGas:m,maxPriorityFeePerGas:w,nonce:y,to:k?void 0:b,value:v});if(i&&function({request:e}){const{data:t,to:r,...n}=e;return!(!t||t.startsWith(q)||!r||Object.values(n).filter((e=>void 0!==e)).length>0)}({request:u})&&!n)try{return await async function(e,t){const{batchSize:r=1024,wait:n=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:i,blockTag:s="latest",data:o,multicallAddress:a,to:c}=t;let l=a;if(!l){if(!e.chain)throw new V.YE;l=(0,te.M)({blockNumber:i,chain:e.chain,contract:"multicall3"})}const u=(i?(0,re.cK)(i):void 0)||s,{schedule:h}=(0,ae.u)({id:`${e.uid}.${u}`,wait:n,shouldSplitBatch(e){const t=e.reduce(((e,{data:t})=>e+(t.length-2)),0);return t>2*r},fn:async t=>{const r=t.map((e=>({allowFailure:!0,callData:e.data,target:e.to}))),n=(0,ee.p)({abi:$.v2,args:[r],functionName:"aggregate3"}),i=await e.request({method:"eth_call",params:[{data:n,to:l},u]});return(0,Z.e)({abi:$.v2,args:[r],functionName:"aggregate3",data:i||"0x"})}}),[{returnData:d,success:f}]=await h({data:o,to:c});if(!f)throw new G.$S({data:d});return"0x"===d?{data:void 0}:{data:d}}(e,{...u,blockNumber:s,blockTag:o})}catch(e){if(!(e instanceof V.YE||e instanceof V.rj))throw e}const h=await e.request({method:"eth_call",params:n?[u,r,n]:[u,r]});return"0x"===h?{data:void 0}:{data:h}}catch(n){const i=function(e){if(!(e instanceof W.C))return;const t=e.walk();return"object"==typeof t?.data?t.data?.data:t.data}(n),{offchainLookup:s,offchainLookupSignature:o}=await Promise.resolve().then(r.bind(r,31316));if(!1!==e.ccipRead&&i?.slice(0,10)===o&&b)return{data:await s(e,{data:i,to:b})};if(k&&"0x101bb98d"===i?.slice(0,10))throw new G.Po({factory:h});throw function(e,{docsPath:t,...r}){const n=(()=>{const t=(0,ie.l)(e,r);return t instanceof ne.RM?e:t})();return new G.zX(n,{docsPath:t,...r})}(n,{...t,account:E,chain:e.chain})}}},94823:function(e,t,r){"use strict";r.d(t,{Ag:function(){return s},Rm:function(){return c},SJ:function(){return a},oX:function(){return o},v2:function(){return n}});const n=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],i=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],s=[...i,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],o=[...i,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],a=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],c=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}]},24453:function(e,t,r){"use strict";r.d(t,{J9:function(){return s},Mc:function(){return i},fD:function(){return n}});const n={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},i={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},s={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},70638:function(e,t,r){"use strict";r.d(t,{eL:function(){return n},pj:function(){return s},sz:function(){return i}});const n={gwei:9,wei:18},i={ether:-9,wei:9},s={ether:-18,gwei:-9}},37372:function(e,t,r){"use strict";r.d(t,{Iy:function(){return c},Iz:function(){return p},MR:function(){return g},Nc:function(){return u},O:function(){return l},Wq:function(){return f},YE:function(){return d},YF:function(){return a},YW:function(){return o},d_:function(){return v},dm:function(){return b},gH:function(){return h},j:function(){return y},nK:function(){return w},nM:function(){return m}});var n=r(95167),i=r(85182),s=r(51344);class o extends s.C{constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join("\n"),{docsPath:e,name:"AbiConstructorNotFoundError"})}}class a extends s.C{constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join("\n"),{docsPath:e,name:"AbiConstructorParamsNotFoundError"})}}s.C;class c extends s.C{constructor({data:e,params:t,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join("\n"),{metaMessages:[`Params: (${(0,n.A)(t,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`],name:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=r}}class l extends s.C{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.',{name:"AbiDecodingZeroDataError"})}}class u extends s.C{constructor({expectedLength:e,givenLength:t,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${e}`,`Given length: ${t}`].join("\n"),{name:"AbiEncodingArrayLengthMismatchError"})}}class h extends s.C{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,i.E)(t)}) does not match expected size (bytes${e}).`,{name:"AbiEncodingBytesSizeMismatchError"})}}class d extends s.C{constructor({expectedLength:e,givenLength:t}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${t}`].join("\n"),{name:"AbiEncodingLengthMismatchError"})}}s.C,s.C;class f extends s.C{constructor(e,{docsPath:t}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join("\n"),{docsPath:t,name:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}s.C,s.C,s.C;class p extends s.C{constructor(e,{docsPath:t}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:t,name:"AbiFunctionNotFoundError"})}}class g extends s.C{constructor(e,{docsPath:t}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:t,name:"AbiFunctionOutputsNotFoundError"})}}s.C;class m extends s.C{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${(0,n.B)(e.abiItem)}\`, and`,`\`${t.type}\` in \`${(0,n.B)(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."],name:"AbiItemAmbiguityError"})}}s.C,s.C,s.C;class w extends s.C{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:t,name:"InvalidAbiEncodingType"})}}class y extends s.C{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:t,name:"InvalidAbiDecodingType"})}}class b extends s.C{constructor(e){super([`Value "${e}" is not a valid array.`].join("\n"),{name:"InvalidArrayError"})}}class v extends s.C{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join("\n"),{name:"InvalidDefinitionTypeError"})}}s.C},14306:function(e,t,r){"use strict";r.d(t,{M:function(){return i}});var n=r(51344);class i extends n.C{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."],name:"InvalidAddressError"})}}},51344:function(e,t,r){"use strict";r.d(t,{C:function(){return o}});const n="2.21.39";let i=({docsBaseUrl:e,docsPath:t="",docsSlug:r})=>t?`${e??"https://viem.sh"}${t}${r?`#${r}`:""}`:void 0,s=`viem@${n}`;class o extends Error{constructor(e,t={}){const r=t.cause instanceof o?t.cause.details:t.cause?.message?t.cause.message:t.details,a=t.cause instanceof o&&t.cause.docsPath||t.docsPath,c=i?.({...t,docsPath:a});super([e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...c?[`Docs: ${c}`]:[],...r?[`Details: ${r}`]:[],...s?[`Version: ${s}`]:[]].join("\n"),t.cause?{cause:t.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),this.details=r,this.docsPath=a,this.metaMessages=t.metaMessages,this.name=t.name??this.name,this.shortMessage=e,this.version=n}walk(e){return a(this,e)}}function a(e,t){return t?.(e)?e:e&&"object"==typeof e&&"cause"in e?a(e.cause,t):t?null:e}},98703:function(e,t,r){"use strict";r.d(t,{EH:function(){return s},YE:function(){return a},jF:function(){return o},rj:function(){return i}});var n=r(51344);class i extends n.C{constructor({blockNumber:e,chain:t,contract:r}){super(`Chain "${t.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]],name:"ChainDoesNotSupportContract"})}}class s extends n.C{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`],name:"ChainMismatchError"})}}class o extends n.C{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join("\n"),{name:"ChainNotFoundError"})}}class a extends n.C{constructor(){super("No chain was provided to the Client.",{name:"ClientChainNotConfiguredError"})}}n.C},38863:function(e,t,r){"use strict";r.d(t,{zX:function(){return w},bG:function(){return y},M:function(){return b},rR:function(){return v},Po:function(){return A},$S:function(){return x}});var n=r(13033),i=r(24453),s=r(15462),o=r(95167),a=r(18463);function c({abiItem:e,args:t,includeFunctionName:r=!0,includeName:n=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${r?e.name:""}(${e.inputs.map(((e,r)=>`${n&&e.name?`${e.name}: `:""}${"object"==typeof t[r]?(0,a.A)(t[r]):t[r]}`)).join(", ")})`}var l=r(90269),u=r(49436),h=r(79670),d=r(37372),f=r(51344),p=r(36883),g=r(48990),m=r(21163);class w extends f.C{constructor(e,{account:t,docsPath:r,chain:i,data:s,gas:o,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:d,to:f,value:m,stateOverride:w}){const y=t?(0,n.J)(t):void 0;let b=(0,g.aO)({from:y?.address,to:f,value:void 0!==m&&`${(0,u.c)(m)} ${i?.nativeCurrency?.symbol||"ETH"}`,data:s,gas:o,gasPrice:void 0!==a&&`${(0,h.Q)(a)} gwei`,maxFeePerGas:void 0!==c&&`${(0,h.Q)(c)} gwei`,maxPriorityFeePerGas:void 0!==l&&`${(0,h.Q)(l)} gwei`,nonce:d});w&&(b+=`\n${(0,p.uj)(w)}`),super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",b].filter(Boolean),name:"CallExecutionError"}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.cause=e}}class y extends f.C{constructor(e,{abi:t,args:r,contractAddress:n,docsPath:i,functionName:s,sender:a}){const u=(0,l.iY)({abi:t,args:r,name:s}),h=u?c({abiItem:u,args:r,includeFunctionName:!1,includeName:!1}):void 0,d=u?(0,o.B)(u,{includeName:!0}):void 0,f=(0,g.aO)({address:n&&(0,m.R)(n),function:d,args:h&&"()"!==h&&`${[...Array(s?.length??0).keys()].map((()=>" ")).join("")}${h}`,sender:a});super(e.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],f&&"Contract Call:",f].filter(Boolean),name:"ContractFunctionExecutionError"}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abi=t,this.args=r,this.cause=e,this.contractAddress=n,this.functionName=s,this.sender=a}}class b extends f.C{constructor({abi:e,data:t,functionName:r,message:n}){let a,l,u,h,f;if(t&&"0x"!==t)try{l=(0,s.W)({abi:e,data:t});const{abiItem:r,errorName:n,args:a}=l;if("Error"===n)h=a[0];else if("Panic"===n){const[e]=a;h=i.fD[e]}else{const e=r?(0,o.B)(r,{includeName:!0}):void 0,t=r&&a?c({abiItem:r,args:a,includeFunctionName:!1,includeName:!1}):void 0;u=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(n?.length??0).keys()].map((()=>" ")).join("")}${t}`:""]}}catch(e){a=e}else n&&(h=n);a instanceof d.Wq&&(f=a.signature,u=[`Unable to decode signature "${f}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${f}.`]),super(h&&"execution reverted"!==h||f?[`The contract function "${r}" reverted with the following ${f?"signature":"reason"}:`,h||f].join("\n"):`The contract function "${r}" reverted.`,{cause:a,metaMessages:u,name:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=l,this.reason=h,this.signature=f}}class v extends f.C{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."],name:"ContractFunctionZeroDataError"})}}class A extends f.C{constructor({factory:e}){super("Deployment for counterfactual contract call failed"+(e?` for factory "${e}".`:""),{metaMessages:["Please ensure:","- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).","- The `factoryData` is a valid encoded function call for contract deployment function on the factory."],name:"CounterfactualDeploymentFailedError"})}}class x extends f.C{constructor({data:e,message:t}){super(t||"",{name:"RawContractError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},36440:function(e,t,r){"use strict";r.d(t,{Fl:function(){return s},NV:function(){return o},ii:function(){return i}});var n=r(51344);class i extends n.C{constructor({offset:e,position:t,size:r}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`,{name:"SliceOffsetOutOfBoundsError"})}}class s extends n.C{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`,{name:"SizeExceedsPaddingSizeError"})}}class o extends n.C{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${t} ${r} long, but is ${e} ${r} long.`,{name:"InvalidBytesLengthError"})}}},94317:function(e,t,r){"use strict";r.d(t,{Ty:function(){return i},u:function(){return o},xO:function(){return s}});var n=r(51344);class i extends n.C{constructor({max:e,min:t,signed:r,size:n,value:i}){super(`Number "${i}" is not in safe ${n?`${8*n}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`,{name:"IntegerOutOfRangeError"})}}class s extends n.C{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,{name:"InvalidBytesBooleanError"})}}n.C,n.C;class o extends n.C{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`,{name:"SizeOverflowError"})}}},92592:function(e,t,r){"use strict";r.d(t,{A7:function(){return s},BG:function(){return o},Fo:function(){return f},K0:function(){return c},Oh:function(){return l},RM:function(){return m},jj:function(){return a},k5:function(){return h},lN:function(){return g},lY:function(){return d},uC:function(){return p},vW:function(){return u}});var n=r(79670),i=r(51344);class s extends i.C{constructor({cause:e,message:t}={}){const r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e,name:"ExecutionRevertedError"})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class o extends i.C{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,n.Q)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e,name:"FeeCapTooHighError"})}}Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class a extends i.C{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,n.Q)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e,name:"FeeCapTooLowError"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class c extends i.C{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e,name:"NonceTooHighError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class l extends i.C{constructor({cause:e,nonce:t}={}){super([`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join("\n"),{cause:e,name:"NonceTooLowError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends i.C{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e,name:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class h extends i.C{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join("\n"),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."],name:"InsufficientFundsError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds|exceeds transaction sender account balance/});class d extends i.C{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e,name:"IntrinsicGasTooHighError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class f extends i.C{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e,name:"IntrinsicGasTooLowError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class p extends i.C{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e,name:"TransactionTypeNotSupportedError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class g extends i.C{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,n.Q)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${(0,n.Q)(r)} gwei`:""}).`].join("\n"),{cause:e,name:"TipAboveFeeCapError"})}}Object.defineProperty(g,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class m extends i.C{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e,name:"UnknownNodeError"})}}},76595:function(e,t,r){"use strict";r.d(t,{Ci:function(){return o},J8:function(){return a},MU:function(){return c}});var n=r(18463),i=r(51344),s=r(21163);class o extends i.C{constructor({body:e,cause:t,details:r,headers:i,status:o,url:a}){super("HTTP request failed.",{cause:t,details:r,metaMessages:[o&&`Status: ${o}`,`URL: ${(0,s.I)(a)}`,e&&`Request body: ${(0,n.A)(e)}`].filter(Boolean),name:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=i,this.status=o,this.url=a}}i.C;class a extends i.C{constructor({body:e,error:t,url:r}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,s.I)(r)}`,`Request body: ${(0,n.A)(e)}`],name:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}i.C;class c extends i.C{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,s.I)(t)}`,`Request body: ${(0,n.A)(e)}`],name:"TimeoutError"})}}},36883:function(e,t,r){"use strict";r.d(t,{Hi:function(){return i},ft:function(){return s},uj:function(){return a}});var n=r(51344);class i extends n.C{constructor({address:e}){super(`State for account "${e}" is set multiple times.`,{name:"AccountStateConflictError"})}}class s extends n.C{constructor(){super("state and stateDiff are set on the same account.",{name:"StateAssignmentConflictError"})}}function o(e){return e.reduce(((e,{slot:t,value:r})=>`${e}        ${t}: ${r}\n`),"")}function a(e){return e.reduce(((e,{address:t,...r})=>{let n=`${e}    ${t}:\n`;return r.nonce&&(n+=`      nonce: ${r.nonce}\n`),r.balance&&(n+=`      balance: ${r.balance}\n`),r.code&&(n+=`      code: ${r.code}\n`),r.state&&(n+="      state:\n",n+=o(r.state)),r.stateDiff&&(n+="      stateDiff:\n",n+=o(r.stateDiff)),n}),"  State Override:\n").slice(0,-1)}},48990:function(e,t,r){"use strict";r.d(t,{$s:function(){return l},Kc:function(){return h},Kz:function(){return u},Vg:function(){return c},WA:function(){return d},aO:function(){return o},n3:function(){return a}});var n=r(49436),i=r(79670),s=r(51344);function o(e){const t=Object.entries(e).map((([e,t])=>void 0===t||!1===t?null:[e,t])).filter(Boolean),r=t.reduce(((e,[t])=>Math.max(e,t.length)),0);return t.map((([e,t])=>`  ${`${e}:`.padEnd(r+1)}  ${t}`)).join("\n")}class a extends s.C{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join("\n"),{name:"FeeConflictError"})}}s.C;class c extends s.C{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",o(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- an EIP-7702 Transaction with `authorizationList`, or","- a Legacy Transaction with `gasPrice`"],name:"InvalidSerializableTransactionError"})}}s.C,s.C,s.C;class l extends s.C{constructor(e,{account:t,docsPath:r,chain:s,data:a,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:f,value:p}){const g=o({chain:s&&`${s?.name} (id: ${s?.id})`,from:t?.address,to:f,value:void 0!==p&&`${(0,n.c)(p)} ${s?.nativeCurrency?.symbol||"ETH"}`,data:a,gas:c,gasPrice:void 0!==l&&`${(0,i.Q)(l)} gwei`,maxFeePerGas:void 0!==u&&`${(0,i.Q)(u)} gwei`,maxPriorityFeePerGas:void 0!==h&&`${(0,i.Q)(h)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",g].filter(Boolean),name:"TransactionExecutionError"}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.cause=e}}class u extends s.C{constructor({blockHash:e,blockNumber:t,blockTag:r,hash:n,index:i}){let s="Transaction";r&&void 0!==i&&(s=`Transaction at block time "${r}" at index "${i}"`),e&&void 0!==i&&(s=`Transaction at block hash "${e}" at index "${i}"`),t&&void 0!==i&&(s=`Transaction at block number "${t}" at index "${i}"`),n&&(s=`Transaction with hash "${n}"`),super(`${s} could not be found.`,{name:"TransactionNotFoundError"})}}class h extends s.C{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,{name:"TransactionReceiptNotFoundError"})}}class d extends s.C{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`,{name:"WaitForTransactionReceiptTimeoutError"})}}},21163:function(e,t,r){"use strict";r.d(t,{I:function(){return i},R:function(){return n}});const n=e=>e,i=e=>e},41965:function(e,t,r){"use strict";r.d(t,{n:function(){return w}});var n=r(37372),i=r(64569),s=r(24558),o=r(85182),a=r(93577),c=r(38583),l=r(94317),u=r(6675),h=r(84192);function d(e,t={}){void 0!==t.size&&(0,u.Sl)(e,{size:t.size});const r=(0,h.My)(e,t);return(0,u.uU)(r,t)}function f(e,t={}){let r=e;if(void 0!==t.size&&((0,u.Sl)(r,{size:t.size}),r=(0,c.B)(r)),r.length>1||r[0]>1)throw new l.xO(r);return Boolean(r[0])}function p(e,t={}){void 0!==t.size&&(0,u.Sl)(e,{size:t.size});const r=(0,h.My)(e,t);return(0,u.ME)(r,t)}var g=r(44706),m=r(94531);function w(e,t){const r="string"==typeof t?(0,g.aT)(t):t,i=(0,s.l)(r);if(0===(0,o.E)(r)&&e.length>0)throw new n.O;if((0,o.E)(t)&&(0,o.E)(t)<32)throw new n.Iy({data:"string"==typeof t?t:(0,h.My)(t),params:e,size:(0,o.E)(t)});let a=0;const c=[];for(let t=0;t<e.length;++t){const r=e[t];i.setPosition(a);const[n,s]=y(i,r,{staticPosition:0});a+=s,c.push(n)}return c}function y(e,t,{staticPosition:r}){const s=(0,m.k)(t.type);if(s){const[n,i]=s;return function(e,t,{length:r,staticPosition:n}){if(!r){const r=n+p(e.readBytes(v)),i=r+b;e.setPosition(r);const s=p(e.readBytes(b)),o=A(t);let a=0;const c=[];for(let r=0;r<s;++r){e.setPosition(i+(o?32*r:a));const[n,s]=y(e,t,{staticPosition:i});a+=s,c.push(n)}return e.setPosition(n+32),[c,32]}if(A(t)){const i=n+p(e.readBytes(v)),s=[];for(let n=0;n<r;++n){e.setPosition(i+32*n);const[r]=y(e,t,{staticPosition:i});s.push(r)}return e.setPosition(n+32),[s,32]}let i=0;const s=[];for(let o=0;o<r;++o){const[r,o]=y(e,t,{staticPosition:n+i});i+=o,s.push(r)}return[s,i]}(e,{...t,type:i},{length:n,staticPosition:r})}if("tuple"===t.type)return function(e,t,{staticPosition:r}){const n=0===t.components.length||t.components.some((({name:e})=>!e)),i=n?[]:{};let s=0;if(A(t)){const o=r+p(e.readBytes(v));for(let r=0;r<t.components.length;++r){const a=t.components[r];e.setPosition(o+s);const[c,l]=y(e,a,{staticPosition:o});s+=l,i[n?r:a?.name]=c}return e.setPosition(r+32),[i,32]}for(let o=0;o<t.components.length;++o){const a=t.components[o],[c,l]=y(e,a,{staticPosition:r});i[n?o:a?.name]=c,s+=l}return[i,s]}(e,t,{staticPosition:r});if("address"===t.type)return function(e){const t=e.readBytes(32);return[(0,i.o)((0,h.My)((0,a.A1)(t,-20))),32]}(e);if("bool"===t.type)return function(e){return[f(e.readBytes(32),{size:32}),32]}(e);if(t.type.startsWith("bytes"))return function(e,t,{staticPosition:r}){const[n,i]=t.type.split("bytes");if(!i){const t=p(e.readBytes(32));e.setPosition(r+t);const n=p(e.readBytes(32));if(0===n)return e.setPosition(r+32),["0x",32];const i=e.readBytes(n);return e.setPosition(r+32),[(0,h.My)(i),32]}return[(0,h.My)(e.readBytes(Number.parseInt(i),32)),32]}(e,t,{staticPosition:r});if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(e,t){const r=t.type.startsWith("int"),n=Number.parseInt(t.type.split("int")[1]||"256"),i=e.readBytes(32);return[n>48?d(i,{signed:r}):p(i,{signed:r}),32]}(e,t);if("string"===t.type)return function(e,{staticPosition:t}){const r=t+p(e.readBytes(32));e.setPosition(r);const n=p(e.readBytes(32));if(0===n)return e.setPosition(t+32),["",32];const i=e.readBytes(n,32),s=function(e,t={}){let r=e;return void 0!==t.size&&((0,u.Sl)(r,{size:t.size}),r=(0,c.B)(r,{dir:"right"})),(new TextDecoder).decode(r)}((0,c.B)(i));return e.setPosition(t+32),[s,32]}(e,{staticPosition:r});throw new n.j(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}const b=32,v=32;function A(e){const{type:t}=e;if("string"===t)return!0;if("bytes"===t)return!0;if(t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(A);const r=(0,m.k)(e.type);return!(!r||!A({...e,type:r[1]}))}},15462:function(e,t,r){"use strict";r.d(t,{W:function(){return l}});var n=r(24453),i=r(37372),s=r(93577),o=r(22599),a=r(41965),c=r(95167);function l(e){const{abi:t,data:r}=e,l=(0,s.di)(r,0,4);if("0x"===l)throw new i.O;const u=[...t||[],n.Mc,n.J9].find((e=>"error"===e.type&&l===(0,o.V)((0,c.B)(e))));if(!u)throw new i.Wq(l,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:u,args:"inputs"in u&&u.inputs&&u.inputs.length>0?(0,a.n)(u.inputs,(0,s.di)(r,4)):void 0,errorName:u.name}}},46652:function(e,t,r){"use strict";r.d(t,{e:function(){return a}});var n=r(37372),i=r(41965),s=r(90269);const o="/docs/contract/decodeFunctionResult";function a(e){const{abi:t,args:r,functionName:a,data:c}=e;let l=t[0];if(a){const e=(0,s.iY)({abi:t,args:r,name:a});if(!e)throw new n.Iz(a,{docsPath:o});l=e}if("function"!==l.type)throw new n.Iz(void 0,{docsPath:o});if(!l.outputs)throw new n.MR(l.name,{docsPath:o});const u=(0,i.n)(l.outputs,c);return u&&u.length>1?u:u&&1===u.length?u[0]:void 0}},94531:function(e,t,r){"use strict";r.d(t,{h:function(){return d},k:function(){return g}});var n=r(37372),i=r(14306),s=r(51344),o=r(29873),a=r(25419),c=r(40586),l=r(85182),u=r(93577),h=r(84192);function d(e,t){if(e.length!==t.length)throw new n.YE({expectedLength:e.length,givenLength:t.length});const r=function({params:e,values:t}){const r=[];for(let n=0;n<e.length;n++)r.push(f({param:e[n],value:t[n]}));return r}({params:e,values:t}),i=p(r);return 0===i.length?"0x":i}function f({param:e,value:t}){const r=g(e.type);if(r){const[i,s]=r;return function(e,{length:t,param:r}){const i=null===t;if(!Array.isArray(e))throw new n.dm(e);if(!i&&e.length!==t)throw new n.Nc({expectedLength:t,givenLength:e.length,type:`${r.type}[${t}]`});let s=!1;const o=[];for(let t=0;t<e.length;t++){const n=f({param:r,value:e[t]});n.dynamic&&(s=!0),o.push(n)}if(i||s){const e=p(o);if(i){const t=(0,h.cK)(o.length,{size:32});return{dynamic:!0,encoded:o.length>0?(0,a.xW)([t,e]):t}}if(s)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,a.xW)(o.map((({encoded:e})=>e)))}}(t,{length:i,param:{...e,type:s}})}if("tuple"===e.type)return function(e,{param:t}){let r=!1;const n=[];for(let i=0;i<t.components.length;i++){const s=t.components[i],o=f({param:s,value:e[Array.isArray(e)?i:s.name]});n.push(o),o.dynamic&&(r=!0)}return{dynamic:r,encoded:r?p(n):(0,a.xW)(n.map((({encoded:e})=>e)))}}(t,{param:e});if("address"===e.type)return function(e){if(!(0,o.P)(e))throw new i.M({address:e});return{dynamic:!1,encoded:(0,c.db)(e.toLowerCase())}}(t);if("bool"===e.type)return function(e){if("boolean"!=typeof e)throw new s.C(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:(0,c.db)((0,h.$P)(e))}}(t);if(e.type.startsWith("uint")||e.type.startsWith("int"))return function(e,{signed:t}){return{dynamic:!1,encoded:(0,h.cK)(e,{size:32,signed:t})}}(t,{signed:e.type.startsWith("int")});if(e.type.startsWith("bytes"))return function(e,{param:t}){const[,r]=t.type.split("bytes"),i=(0,l.E)(e);if(!r){let t=e;return i%32!=0&&(t=(0,c.db)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,a.xW)([(0,c.db)((0,h.cK)(i,{size:32})),t])}}if(i!==Number.parseInt(r))throw new n.gH({expectedSize:Number.parseInt(r),value:e});return{dynamic:!1,encoded:(0,c.db)(e,{dir:"right"})}}(t,{param:e});if("string"===e.type)return function(e){const t=(0,h.i3)(e),r=Math.ceil((0,l.E)(t)/32),n=[];for(let e=0;e<r;e++)n.push((0,c.db)((0,u.di)(t,32*e,32*(e+1)),{dir:"right"}));return{dynamic:!0,encoded:(0,a.xW)([(0,c.db)((0,h.cK)((0,l.E)(t),{size:32})),...n])}}(t);throw new n.nK(e.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function p(e){let t=0;for(let r=0;r<e.length;r++){const{dynamic:n,encoded:i}=e[r];t+=n?32:(0,l.E)(i)}const r=[],n=[];let i=0;for(let s=0;s<e.length;s++){const{dynamic:o,encoded:a}=e[s];o?(r.push((0,h.cK)(t+i,{size:32})),n.push(a),i+=(0,l.E)(a)):r.push(a)}return(0,a.xW)([...r,...n])}function g(e){const t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},98503:function(e,t,r){"use strict";r.d(t,{p:function(){return u}});var n=r(25419),i=r(94531),s=r(37372),o=r(22599),a=r(95167),c=r(90269);const l="/docs/contract/encodeFunctionData";function u(e){const{args:t}=e,{abi:r,functionName:u}=1===e.abi.length&&e.functionName?.startsWith("0x")?e:function(e){const{abi:t,args:r,functionName:n}=e;let i=t[0];if(n){const e=(0,c.iY)({abi:t,args:r,name:n});if(!e)throw new s.Iz(n,{docsPath:l});i=e}if("function"!==i.type)throw new s.Iz(void 0,{docsPath:l});return{abi:[i],functionName:(0,o.V)((0,a.B)(i))}}(e),h=r[0],d=u,f="inputs"in h&&h.inputs?(0,i.h)(h.inputs,t??[]):void 0;return(0,n.aP)([d,f??"0x"])}},95167:function(e,t,r){"use strict";r.d(t,{A:function(){return s},B:function(){return i}});var n=r(37372);function i(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new n.d_(e.type);return`${e.name}(${s(e.inputs,{includeName:t})})`}function s(e,{includeName:t=!1}={}){return e?e.map((e=>function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${s(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")}(e,{includeName:t}))).join(t?", ":","):""}},90269:function(e,t,r){"use strict";r.d(t,{iY:function(){return c}});var n=r(37372),i=r(46394),s=r(29873);const o=r(60504).k;var a=r(22599);function c(e){const{abi:t,args:r=[],name:s}=e,c=(0,i.q)(s,{strict:!1}),h=t.filter((e=>c?"function"===e.type?(0,a.V)(e)===s:"event"===e.type&&o(e)===s:"name"in e&&e.name===s));if(0===h.length)return;if(1===h.length)return h[0];let d;for(const e of h)if("inputs"in e)if(r&&0!==r.length){if(e.inputs&&0!==e.inputs.length&&e.inputs.length===r.length&&r.every(((t,r)=>{const n="inputs"in e&&e.inputs[r];return!!n&&l(t,n)}))){if(d&&"inputs"in d&&d.inputs){const t=u(e.inputs,d.inputs,r);if(t)throw new n.nM({abiItem:e,type:t[0]},{abiItem:d,type:t[1]})}d=e}}else if(!e.inputs||0===e.inputs.length)return e;return d||h[0]}function l(e,t){const r=typeof e,n=t.type;switch(n){case"address":return(0,s.P)(e,{strict:!1});case"bool":return"boolean"===r;case"function":case"string":return"string"===r;default:return"tuple"===n&&"components"in t?Object.values(t.components).every(((t,r)=>l(Object.values(e)[r],t))):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n)?"number"===r||"bigint"===r:/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n)?"string"===r||e instanceof Uint8Array:!!/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n)&&Array.isArray(e)&&e.every((e=>l(e,{...t,type:n.replace(/(\[[0-9]{0,}\])$/,"")})))}}function u(e,t,r){for(const n in e){const i=e[n],o=t[n];if("tuple"===i.type&&"tuple"===o.type&&"components"in i&&"components"in o)return u(i.components,o.components,r[n]);const a=[i.type,o.type];if(a.includes("address")&&a.includes("bytes20")||(a.includes("address")&&a.includes("string")||a.includes("address")&&a.includes("bytes"))&&(0,s.P)(r[n],{strict:!1}))return a}}},64569:function(e,t,r){"use strict";r.d(t,{b:function(){return u},o:function(){return l}});var n=r(14306),i=r(44706),s=r(84756),o=r(76447),a=r(29873);const c=new o.A(8192);function l(e,t){if(c.has(`${e}.${t}`))return c.get(`${e}.${t}`);const r=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),n=(0,s.S)((0,i.Af)(r),"bytes"),o=(t?r.substring(`${t}0x`.length):r).split("");for(let e=0;e<40;e+=2)n[e>>1]>>4>=8&&o[e]&&(o[e]=o[e].toUpperCase()),(15&n[e>>1])>=8&&o[e+1]&&(o[e+1]=o[e+1].toUpperCase());const a=`0x${o.join("")}`;return c.set(`${e}.${t}`,a),a}function u(e,t){if(!(0,a.P)(e,{strict:!1}))throw new n.M({address:e});return l(e,t)}},29873:function(e,t,r){"use strict";r.d(t,{P:function(){return a}});var n=r(76447),i=r(64569);const s=/^0x[a-fA-F0-9]{40}$/,o=new n.A(8192);function a(e,t){const{strict:r=!0}=t??{},n=`${e}.${r}`;if(o.has(n))return o.get(n);const a=!(!s.test(e)||e.toLowerCase()!==e&&r&&(0,i.o)(e)!==e);return o.set(n,a),a}},31316:function(e,t,r){"use strict";r.d(t,{offchainLookup:function(){return b},offchainLookupSignature:function(){return w}});var n=r(55176),i=r(18463),s=r(51344),o=r(21163);class a extends s.C{constructor({callbackSelector:e,cause:t,data:r,extraData:n,sender:i,urls:s}){super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],t.metaMessages?.length?"":[],"Offchain Gateway Call:",s&&["  Gateway URL(s):",...s.map((e=>`    ${(0,o.I)(e)}`))],`  Sender: ${i}`,`  Data: ${r}`,`  Callback selector: ${e}`,`  Extra data: ${n}`].flat(),name:"OffchainLookupError"})}}class c extends s.C{constructor({result:e,url:t}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,o.I)(t)}`,`Response: ${(0,i.A)(e)}`],name:"OffchainLookupResponseMalformedError"})}}class l extends s.C{constructor({sender:e,to:t}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${e}`],name:"OffchainLookupSenderMismatchError"})}}var u=r(76595),h=r(15462),d=r(94531),f=r(14306),p=r(29873),g=r(25419),m=r(46394);const w="0x556f1830",y={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function b(e,{blockNumber:t,blockTag:r,data:i,to:s}){const{args:o}=(0,h.W)({data:i,abi:[y]}),[c,u,m,w,b]=o,{ccipRead:A}=e,x=A&&"function"==typeof A?.request?A.request:v;try{if(!function(e,t){if(!(0,p.P)(e,{strict:!1}))throw new f.M({address:e});if(!(0,p.P)(t,{strict:!1}))throw new f.M({address:t});return e.toLowerCase()===t.toLowerCase()}(s,c))throw new l({sender:c,to:s});const i=await x({data:m,sender:c,urls:u}),{data:o}=await(0,n.T)(e,{blockNumber:t,blockTag:r,data:(0,g.xW)([w,(0,d.h)([{type:"bytes"},{type:"bytes"}],[i,b])]),to:s});return o}catch(e){throw new a({callbackSelector:w,cause:e,data:i,extraData:b,sender:c,urls:u})}}async function v({data:e,sender:t,urls:r}){let n=new Error("An unknown error occurred.");for(let s=0;s<r.length;s++){const o=r[s],a=o.includes("{data}")?"GET":"POST",l="POST"===a?{data:e,sender:t}:void 0,h="POST"===a?{"Content-Type":"application/json"}:{};try{const r=await fetch(o.replace("{sender}",t).replace("{data}",e),{body:JSON.stringify(l),headers:h,method:a});let s;if(s=r.headers.get("Content-Type")?.startsWith("application/json")?(await r.json()).data:await r.text(),!r.ok){n=new u.Ci({body:l,details:s?.error?(0,i.A)(s.error):r.statusText,headers:r.headers,status:r.status,url:o});continue}if(!(0,m.q)(s)){n=new c({result:s,url:o});continue}return s}catch(e){n=new u.Ci({body:l,details:e.message,url:o})}}throw n}},69985:function(e,t,r){"use strict";r.d(t,{M:function(){return i}});var n=r(98703);function i({blockNumber:e,chain:t,contract:r}){const i=t?.contracts?.[r];if(!i)throw new n.rj({chain:t,contract:{name:r}});if(e&&i.blockCreated&&i.blockCreated>e)throw new n.rj({blockNumber:e,chain:t,contract:{name:r,blockCreated:i.blockCreated}});return i.address}},24558:function(e,t,r){"use strict";r.d(t,{l:function(){return c}});var n=r(51344);class i extends n.C{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`,{name:"NegativeOffsetError"})}}class s extends n.C{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`,{name:"PositionOutOfBoundsError"})}}class o extends n.C{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`,{name:"RecursiveReadLimitExceededError"})}}const a={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:Number.POSITIVE_INFINITY,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new o({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new s({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new i({offset:e});const t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new i({offset:e});const t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){const r=t??this.position;return this.assertPosition(r+e-1),this.bytes.subarray(r,r+e)},inspectUint8(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){const t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){const t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){const t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,255&e),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();const r=this.inspectBytes(e);return this.position+=t??e,r},readUint8(){this.assertReadLimit(),this._touch();const e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();const e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();const e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();const e=this.inspectUint32();return this.position+=4,e},get remaining(){return this.bytes.length-this.position},setPosition(e){const t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===Number.POSITIVE_INFINITY)return;const e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};function c(e,{recursiveReadLimit:t=8192}={}){const r=Object.create(a);return r.bytes=e,r.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),r.positionReadCount=new Map,r.recursiveReadLimit=t,r}},25419:function(e,t,r){"use strict";function n(e){return"string"==typeof e[0]?i(e):function(e){let t=0;for(const r of e)t+=r.length;const r=new Uint8Array(t);let n=0;for(const t of e)r.set(t,n),n+=t.length;return r}(e)}function i(e){return`0x${e.reduce(((e,t)=>e+t.replace("0x","")),"")}`}r.d(t,{aP:function(){return i},xW:function(){return n}})},46394:function(e,t,r){"use strict";function n(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}r.d(t,{q:function(){return n}})},40586:function(e,t,r){"use strict";r.d(t,{db:function(){return s},eV:function(){return i}});var n=r(36440);function i(e,{dir:t,size:r=32}={}){return"string"==typeof e?s(e,{dir:t,size:r}):function(e,{dir:t,size:r=32}={}){if(null===r)return e;if(e.length>r)throw new n.Fl({size:e.length,targetSize:r,type:"bytes"});const i=new Uint8Array(r);for(let n=0;n<r;n++){const s="right"===t;i[s?n:r-n-1]=e[s?n:e.length-n-1]}return i}(e,{dir:t,size:r})}function s(e,{dir:t,size:r=32}={}){if(null===r)return e;const i=e.replace("0x","");if(i.length>2*r)throw new n.Fl({size:Math.ceil(i.length/2),targetSize:r,type:"hex"});return`0x${i["right"===t?"padEnd":"padStart"](2*r,"0")}`}},85182:function(e,t,r){"use strict";r.d(t,{E:function(){return i}});var n=r(46394);function i(e){return(0,n.q)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},93577:function(e,t,r){"use strict";r.d(t,{A1:function(){return l},di:function(){return o}});var n=r(36440),i=r(46394),s=r(85182);function o(e,t,r,{strict:n}={}){return(0,i.q)(e,{strict:!1})?function(e,t,r,{strict:n}={}){a(e,t);const i=`0x${e.replace("0x","").slice(2*(t??0),2*(r??e.length))}`;return n&&c(i,t,r),i}(e,t,r,{strict:n}):l(e,t,r,{strict:n})}function a(e,t){if("number"==typeof t&&t>0&&t>(0,s.E)(e)-1)throw new n.ii({offset:t,position:"start",size:(0,s.E)(e)})}function c(e,t,r){if("number"==typeof t&&"number"==typeof r&&(0,s.E)(e)!==r-t)throw new n.ii({offset:r,position:"end",size:(0,s.E)(e)})}function l(e,t,r,{strict:n}={}){a(e,t);const i=e.slice(t,r);return n&&c(i,t,r),i}},38583:function(e,t,r){"use strict";function n(e,{dir:t="left"}={}){let r="string"==typeof e?e.replace("0x",""):e,n=0;for(let e=0;e<r.length-1&&"0"===r["left"===t?e:r.length-e-1].toString();e++)n++;return r="left"===t?r.slice(n):r.slice(0,r.length-n),"string"==typeof e?(1===r.length&&"right"===t&&(r=`${r}0`),`0x${r.length%2==1?`0${r}`:r}`):r}r.d(t,{B:function(){return n}})},6675:function(e,t,r){"use strict";r.d(t,{IQ:function(){return u},ME:function(){return l},Sl:function(){return a},uU:function(){return c}});var n=r(94317),i=r(85182),s=r(38583),o=r(44706);function a(e,{size:t}){if((0,i.E)(e)>t)throw new n.u({givenSize:(0,i.E)(e),maxSize:t})}function c(e,t={}){const{signed:r}=t;t.size&&a(e,{size:t.size});const n=BigInt(e);if(!r)return n;const i=(e.length-2)/2;return n<=(1n<<8n*BigInt(i)-1n)-1n?n:n-BigInt(`0x${"f".padStart(2*i,"f")}`)-1n}function l(e,t={}){return Number(c(e,t))}function u(e,t={}){let r=(0,o.aT)(e);return t.size&&(a(r,{size:t.size}),r=(0,s.B)(r,{dir:"right"})),(new TextDecoder).decode(r)}},44706:function(e,t,r){"use strict";r.d(t,{Af:function(){return f},ZJ:function(){return l},aT:function(){return d}});var n=r(51344),i=r(46394),s=r(40586),o=r(6675),a=r(84192);const c=new TextEncoder;function l(e,t={}){return"number"==typeof e||"bigint"==typeof e?function(e,t){return d((0,a.cK)(e,t))}(e,t):"boolean"==typeof e?function(e,t={}){const r=new Uint8Array(1);return r[0]=Number(e),"number"==typeof t.size?((0,o.Sl)(r,{size:t.size}),(0,s.eV)(r,{size:t.size})):r}(e,t):(0,i.q)(e)?d(e,t):f(e,t)}const u={zero:48,nine:57,A:65,F:70,a:97,f:102};function h(e){return e>=u.zero&&e<=u.nine?e-u.zero:e>=u.A&&e<=u.F?e-(u.A-10):e>=u.a&&e<=u.f?e-(u.a-10):void 0}function d(e,t={}){let r=e;t.size&&((0,o.Sl)(r,{size:t.size}),r=(0,s.eV)(r,{dir:"right",size:t.size}));let i=r.slice(2);i.length%2&&(i=`0${i}`);const a=i.length/2,c=new Uint8Array(a);for(let e=0,t=0;e<a;e++){const r=h(i.charCodeAt(t++)),s=h(i.charCodeAt(t++));if(void 0===r||void 0===s)throw new n.C(`Invalid byte sequence ("${i[t-2]}${i[t-1]}" in "${i}").`);c[e]=16*r+s}return c}function f(e,t={}){const r=c.encode(e);return"number"==typeof t.size?((0,o.Sl)(r,{size:t.size}),(0,s.eV)(r,{dir:"right",size:t.size})):r}},84192:function(e,t,r){"use strict";r.d(t,{$P:function(){return c},My:function(){return l},cK:function(){return u},i3:function(){return d},nj:function(){return a}});var n=r(94317),i=r(40586),s=r(6675);const o=Array.from({length:256},((e,t)=>t.toString(16).padStart(2,"0")));function a(e,t={}){return"number"==typeof e||"bigint"==typeof e?u(e,t):"string"==typeof e?d(e,t):"boolean"==typeof e?c(e,t):l(e,t)}function c(e,t={}){const r=`0x${Number(e)}`;return"number"==typeof t.size?((0,s.Sl)(r,{size:t.size}),(0,i.eV)(r,{size:t.size})):r}function l(e,t={}){let r="";for(let t=0;t<e.length;t++)r+=o[e[t]];const n=`0x${r}`;return"number"==typeof t.size?((0,s.Sl)(n,{size:t.size}),(0,i.eV)(n,{dir:"right",size:t.size})):n}function u(e,t={}){const{signed:r,size:s}=t,o=BigInt(e);let a;s?a=r?(1n<<8n*BigInt(s)-1n)-1n:2n**(8n*BigInt(s))-1n:"number"==typeof e&&(a=BigInt(Number.MAX_SAFE_INTEGER));const c="bigint"==typeof a&&r?-a-1n:0;if(a&&o>a||o<c){const t="bigint"==typeof e?"n":"";throw new n.Ty({max:a?`${a}${t}`:void 0,min:`${c}${t}`,signed:r,size:s,value:`${e}${t}`})}const l=`0x${(r&&o<0?(1n<<BigInt(8*s))+BigInt(o):o).toString(16)}`;return s?(0,i.eV)(l,{size:s}):l}const h=new TextEncoder;function d(e,t={}){return l(h.encode(e),t)}},71772:function(e,t,r){"use strict";r.d(t,{l:function(){return s}});var n=r(51344),i=r(92592);function s(e,t){const r=(e.details||"").toLowerCase(),s=e instanceof n.C?e.walk((e=>e?.code===i.A7.code)):e;return s instanceof n.C?new i.A7({cause:e,message:s.details}):i.A7.nodeMessage.test(r)?new i.A7({cause:e,message:e.details}):i.BG.nodeMessage.test(r)?new i.BG({cause:e,maxFeePerGas:t?.maxFeePerGas}):i.jj.nodeMessage.test(r)?new i.jj({cause:e,maxFeePerGas:t?.maxFeePerGas}):i.K0.nodeMessage.test(r)?new i.K0({cause:e,nonce:t?.nonce}):i.Oh.nodeMessage.test(r)?new i.Oh({cause:e,nonce:t?.nonce}):i.vW.nodeMessage.test(r)?new i.vW({cause:e,nonce:t?.nonce}):i.k5.nodeMessage.test(r)?new i.k5({cause:e}):i.lY.nodeMessage.test(r)?new i.lY({cause:e,gas:t?.gas}):i.Fo.nodeMessage.test(r)?new i.Fo({cause:e,gas:t?.gas}):i.uC.nodeMessage.test(r)?new i.uC({cause:e}):i.lN.nodeMessage.test(r)?new i.lN({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new i.RM({cause:e})}},99789:function(e,t,r){"use strict";function n(e,{format:t}){if(!t)return{};const r={};return function t(n){const i=Object.keys(n);for(const s of i)s in e&&(r[s]=e[s]),n[s]&&"object"==typeof n[s]&&!Array.isArray(n[s])&&t(n[s])}(t(e||{})),r}r.d(t,{o:function(){return n}})},57671:function(e,t,r){"use strict";r.d(t,{Bv:function(){return s}});var n=r(84192);const i={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3",eip7702:"0x4"};function s(e){const t={};return void 0!==e.authorizationList&&(t.authorizationList=e.authorizationList.map((e=>({address:e.contractAddress,r:e.r,s:e.s,chainId:(0,n.cK)(e.chainId),nonce:(0,n.cK)(e.nonce),...void 0!==e.yParity?{yParity:(0,n.cK)(e.yParity)}:{},...void 0!==e.v&&void 0===e.yParity?{v:(0,n.cK)(e.v)}:{}})))),void 0!==e.accessList&&(t.accessList=e.accessList),void 0!==e.blobVersionedHashes&&(t.blobVersionedHashes=e.blobVersionedHashes),void 0!==e.blobs&&("string"!=typeof e.blobs[0]?t.blobs=e.blobs.map((e=>(0,n.My)(e))):t.blobs=e.blobs),void 0!==e.data&&(t.data=e.data),void 0!==e.from&&(t.from=e.from),void 0!==e.gas&&(t.gas=(0,n.cK)(e.gas)),void 0!==e.gasPrice&&(t.gasPrice=(0,n.cK)(e.gasPrice)),void 0!==e.maxFeePerBlobGas&&(t.maxFeePerBlobGas=(0,n.cK)(e.maxFeePerBlobGas)),void 0!==e.maxFeePerGas&&(t.maxFeePerGas=(0,n.cK)(e.maxFeePerGas)),void 0!==e.maxPriorityFeePerGas&&(t.maxPriorityFeePerGas=(0,n.cK)(e.maxPriorityFeePerGas)),void 0!==e.nonce&&(t.nonce=(0,n.cK)(e.nonce)),void 0!==e.to&&(t.to=e.to),void 0!==e.type&&(t.type=i[e.type]),void 0!==e.value&&(t.value=(0,n.cK)(e.value)),t}},84756:function(e,t,r){"use strict";r.d(t,{S:function(){return S}});var n=r(89999);const i=BigInt(2**32-1),s=BigInt(32);function o(e,t=!1){return t?{h:Number(e&i),l:Number(e>>s&i)}:{h:0|Number(e>>s&i),l:0|Number(e&i)}}function a(e,t=!1){let r=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let i=0;i<e.length;i++){const{h:s,l:a}=o(e[i],t);[r[i],n[i]]=[s,a]}return[r,n]}var c=r(65924);const l=[],u=[],h=[],d=BigInt(0),f=BigInt(1),p=BigInt(2),g=BigInt(7),m=BigInt(256),w=BigInt(113);for(let e=0,t=f,r=1,n=0;e<24;e++){[r,n]=[n,(2*r+3*n)%5],l.push(2*(5*n+r)),u.push((e+1)*(e+2)/2%64);let i=d;for(let e=0;e<7;e++)t=(t<<f^(t>>g)*w)%m,t&p&&(i^=f<<(f<<BigInt(e))-f);h.push(i)}const[y,b]=a(h,!0),v=(e,t,r)=>r>32?((e,t,r)=>t<<r-32|e>>>64-r)(e,t,r):((e,t,r)=>e<<r|t>>>32-r)(e,t,r),A=(e,t,r)=>r>32?((e,t,r)=>e<<r-32|t>>>64-r)(e,t,r):((e,t,r)=>t<<r|e>>>32-r)(e,t,r);class x extends c.Vw{constructor(e,t,r,i=!1,s=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=r,this.enableXOF=i,this.rounds=s,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,(0,n.ai)(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,c.DH)(this.state)}keccak(){c.qv||(0,c.Fc)(this.state32),function(e,t=24){const r=new Uint32Array(10);for(let n=24-t;n<24;n++){for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){const n=(t+8)%10,i=(t+2)%10,s=r[i],o=r[i+1],a=v(s,o,1)^r[n],c=A(s,o,1)^r[n+1];for(let r=0;r<50;r+=10)e[t+r]^=a,e[t+r+1]^=c}let t=e[2],i=e[3];for(let r=0;r<24;r++){const n=u[r],s=v(t,i,n),o=A(t,i,n),a=l[r];t=e[a],i=e[a+1],e[a]=s,e[a+1]=o}for(let t=0;t<50;t+=10){for(let n=0;n<10;n++)r[n]=e[t+n];for(let n=0;n<10;n++)e[t+n]^=~r[(n+2)%10]&r[(n+4)%10]}e[0]^=y[n],e[1]^=b[n]}r.fill(0)}(this.state32,this.rounds),c.qv||(0,c.Fc)(this.state32),this.posOut=0,this.pos=0}update(e){(0,n.t2)(this);const{blockLen:t,state:r}=this,i=(e=(0,c.ZJ)(e)).length;for(let n=0;n<i;){const s=Math.min(t-this.pos,i-n);for(let t=0;t<s;t++)r[this.pos++]^=e[n++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:t,pos:r,blockLen:n}=this;e[r]^=t,128&t&&r===n-1&&this.keccak(),e[n-1]^=128,this.keccak()}writeInto(e){(0,n.t2)(this,!1),(0,n.ee)(e),this.finish();const t=this.state,{blockLen:r}=this;for(let n=0,i=e.length;n<i;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,i-n);e.set(t.subarray(this.posOut,this.posOut+s),n),this.posOut+=s,n+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return(0,n.ai)(e),this.xofInto(new Uint8Array(e))}digestInto(e){if((0,n.CG)(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:t,suffix:r,outputLen:n,rounds:i,enableXOF:s}=this;return e||(e=new x(t,r,n,s,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=r,e.outputLen=n,e.enableXOF=s,e.destroyed=this.destroyed,e}}const E=((e,t,r)=>(0,c.ld)((()=>new x(t,e,r))))(1,136,32);var C=r(46394),_=r(44706),k=r(84192);function S(e,t){const r=t||"hex",n=E((0,C.q)(e,{strict:!1})?(0,_.ZJ)(e):e);return"bytes"===r?n:(0,k.nj)(n)}},22599:function(e,t,r){"use strict";r.d(t,{V:function(){return s}});var n=r(93577),i=r(60504);const s=e=>(0,n.di)((0,i.k)(e),0,4)},60504:function(e,t,r){"use strict";r.d(t,{k:function(){return d}});var n=r(44706),i=r(84756);const s=e=>(0,i.S)((0,n.ZJ)(e));var o=r(25276);const a=/^tuple(?<array>(\[(\d*)\])*)$/;function c(e){let t=e.type;if(a.test(e.type)&&"components"in e){t="(";const r=e.components.length;for(let n=0;n<r;n++)t+=c(e.components[n]),n<r-1&&(t+=", ");const n=(0,o.Yv)(a,e.type);return t+=`)${n?.array??""}`,c({...e,type:t})}return"indexed"in e&&e.indexed&&(t=`${t} indexed`),e.name?`${t} ${e.name}`:t}function l(e){let t="";const r=e.length;for(let n=0;n<r;n++)t+=c(e[n]),n!==r-1&&(t+=", ");return t}var u=r(51344);const h=e=>{var t;return function(e){let t=!0,r="",n=0,i="",s=!1;for(let o=0;o<e.length;o++){const a=e[o];if(["(",")",","].includes(a)&&(t=!0),"("===a&&n++,")"===a&&n--,t)if(0!==n)" "!==a?(i+=a,r+=a):","!==e[o-1]&&","!==r&&",("!==r&&(r="",t=!1);else if(" "===a&&["event","function",""].includes(i))i="";else if(i+=a,")"===a){s=!0;break}}if(!s)throw new u.C("Unable to normalize signature.");return i}("string"==typeof e?e:"function"===(t=e).type?`function ${t.name}(${l(t.inputs)})${t.stateMutability&&"nonpayable"!==t.stateMutability?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${l(t.outputs)})`:""}`:"event"===t.type?`event ${t.name}(${l(t.inputs)})`:"error"===t.type?`error ${t.name}(${l(t.inputs)})`:"constructor"===t.type?`constructor(${l(t.inputs)})${"payable"===t.stateMutability?" payable":""}`:"fallback"===t.type?"fallback()":"receive() external payable")};function d(e){return t=h(e),s(t);var t}},76447:function(e,t,r){"use strict";r.d(t,{A:function(){return n}});class n extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){const t=super.get(e);return super.has(e)&&void 0!==t&&(this.delete(e),super.set(e,t)),t}set(e,t){if(super.set(e,t),this.maxSize&&this.size>this.maxSize){const e=this.keys().next().value;e&&this.delete(e)}return this}}},52167:function(e,t,r){"use strict";r.d(t,{u:function(){return s}});var n=r(9091);const i=new Map;function s({fn:e,id:t,shouldSplitBatch:r,wait:s=0,sort:o}){const a=async()=>{const t=l();c();const r=t.map((({args:e})=>e));0!==r.length&&e(r).then((e=>{o&&Array.isArray(e)&&e.sort(o);for(let r=0;r<t.length;r++){const{resolve:n}=t[r];n?.([e[r],e])}})).catch((e=>{for(let r=0;r<t.length;r++){const{reject:n}=t[r];n?.(e)}}))},c=()=>i.delete(t),l=()=>i.get(t)||[],u=e=>i.set(t,[...l(),e]);return{flush:c,async schedule(e){const{promise:t,resolve:i,reject:o}=(0,n.Y)(),c=r?.([...l().map((({args:e})=>e)),e]);return c&&a(),l().length>0?(u({args:e,resolve:i,reject:o}),t):(u({args:e,resolve:i,reject:o}),setTimeout(a,s),t)}}}},9091:function(e,t,r){"use strict";function n(){let e=()=>{},t=()=>{};return{promise:new Promise(((r,n)=>{e=r,t=n})),resolve:e,reject:t}}r.d(t,{Y:function(){return n}})},65547:function(e,t,r){"use strict";r.d(t,{yH:function(){return u}});var n=r(14306),i=r(36440),s=r(36883),o=r(29873),a=r(84192);function c(e){if(e&&0!==e.length)return e.reduce(((e,{slot:t,value:r})=>{if(66!==t.length)throw new i.NV({size:t.length,targetSize:66,type:"hex"});if(66!==r.length)throw new i.NV({size:r.length,targetSize:66,type:"hex"});return e[t]=r,e}),{})}function l(e){const{balance:t,nonce:r,state:n,stateDiff:i,code:o}=e,l={};if(void 0!==o&&(l.code=o),void 0!==t&&(l.balance=(0,a.cK)(t)),void 0!==r&&(l.nonce=(0,a.cK)(r)),void 0!==n&&(l.state=c(n)),void 0!==i){if(l.state)throw new s.ft;l.stateDiff=c(i)}return l}function u(e){if(!e)return;const t={};for(const{address:r,...i}of e){if(!(0,o.P)(r,{strict:!1}))throw new n.M({address:r});if(t[r])throw new s.Hi({address:r});t[r]=l(i)}return t}},18463:function(e,t,r){"use strict";r.d(t,{A:function(){return n}});const n=(e,t,r)=>JSON.stringify(e,((e,r)=>{const n="bigint"==typeof r?r.toString():r;return"function"==typeof t?t(e,n):n}),r)},60332:function(e,t,r){"use strict";r.d(t,{c:function(){return l}});var n=r(13033);const i=2n**256n-1n;var s=r(14306),o=r(92592),a=r(48990),c=r(29873);function l(e){const{account:t,gasPrice:r,maxFeePerGas:l,maxPriorityFeePerGas:u,to:h}=e,d=t?(0,n.J)(t):void 0;if(d&&!(0,c.P)(d.address))throw new s.M({address:d.address});if(h&&!(0,c.P)(h))throw new s.M({address:h});if(void 0!==r&&(void 0!==l||void 0!==u))throw new a.n3;if(l&&l>i)throw new o.BG({maxFeePerGas:l});if(u&&l&&u>l)throw new o.lN({maxFeePerGas:l,maxPriorityFeePerGas:u})}},49436:function(e,t,r){"use strict";r.d(t,{c:function(){return s}});var n=r(70638),i=r(87135);function s(e,t="wei"){return(0,i.J)(e,n.eL[t])}},79670:function(e,t,r){"use strict";r.d(t,{Q:function(){return s}});var n=r(70638),i=r(87135);function s(e,t="wei"){return(0,i.J)(e,n.sz[t])}},87135:function(e,t,r){"use strict";function n(e,t){let r=e.toString();const n=r.startsWith("-");n&&(r=r.slice(1)),r=r.padStart(t,"0");let[i,s]=[r.slice(0,r.length-t),r.slice(r.length-t)];return s=s.replace(/(0+)$/,""),`${n?"-":""}${i||"0"}${s?`.${s}`:""}`}r.d(t,{J:function(){return n}})},72154:function(e,t,r){"use strict";r.d(t,{secp256k1:function(){return Ae}});var n={};r.r(n),r.d(n,{aK:function(){return P},e8:function(){return p},DO:function(){return f},dJ:function(){return M},OG:function(){return N},My:function(){return m},Ph:function(){return x},lX:function(){return E},Id:function(){return S},fg:function(){return B},qj:function(){return k},aT:function(){return A},r4:function(){return T},aY:function(){return d},x:function(){return D},lq:function(){return C},z:function(){return _},zW:function(){return w},Q5:function(){return U}});var i=r(15162),s=r(89999),o=r(65924);class a extends o.Vw{constructor(e,t){super(),this.finished=!1,this.destroyed=!1,(0,s.tW)(e);const r=(0,o.ZJ)(t);if(this.iHash=e.create(),"function"!=typeof this.iHash.update)throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const n=this.blockLen,i=new Uint8Array(n);i.set(r.length>n?e.create().update(r).digest():r);for(let e=0;e<i.length;e++)i[e]^=54;this.iHash.update(i),this.oHash=e.create();for(let e=0;e<i.length;e++)i[e]^=106;this.oHash.update(i),i.fill(0)}update(e){return(0,s.t2)(this),this.iHash.update(e),this}digestInto(e){(0,s.t2)(this),(0,s.ee)(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:t,iHash:r,finished:n,destroyed:i,blockLen:s,outputLen:o}=this;return e.finished=n,e.destroyed=i,e.blockLen=s,e.outputLen=o,e.oHash=t._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const c=(e,t,r)=>new a(e,t).update(r).digest();c.create=(e,t)=>new a(e,t);const l=BigInt(0),u=BigInt(1),h=BigInt(2);function d(e){return e instanceof Uint8Array||null!=e&&"object"==typeof e&&"Uint8Array"===e.constructor.name}function f(e){if(!d(e))throw new Error("Uint8Array expected")}function p(e,t){if("boolean"!=typeof t)throw new Error(`${e} must be valid boolean, got "${t}".`)}const g=Array.from({length:256},((e,t)=>t.toString(16).padStart(2,"0")));function m(e){f(e);let t="";for(let r=0;r<e.length;r++)t+=g[e[r]];return t}function w(e){const t=e.toString(16);return 1&t.length?`0${t}`:t}function y(e){if("string"!=typeof e)throw new Error("hex string expected, got "+typeof e);return BigInt(""===e?"0":`0x${e}`)}const b={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function v(e){return e>=b._0&&e<=b._9?e-b._0:e>=b._A&&e<=b._F?e-(b._A-10):e>=b._a&&e<=b._f?e-(b._a-10):void 0}function A(e){if("string"!=typeof e)throw new Error("hex string expected, got "+typeof e);const t=e.length,r=t/2;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);const n=new Uint8Array(r);for(let t=0,i=0;t<r;t++,i+=2){const r=v(e.charCodeAt(i)),s=v(e.charCodeAt(i+1));if(void 0===r||void 0===s){const t=e[i]+e[i+1];throw new Error('hex string expected, got non-hex character "'+t+'" at index '+i)}n[t]=16*r+s}return n}function x(e){return y(m(e))}function E(e){return f(e),y(m(Uint8Array.from(e).reverse()))}function C(e,t){return A(e.toString(16).padStart(2*t,"0"))}function _(e,t){return C(e,t).reverse()}function k(e,t,r){let n;if("string"==typeof t)try{n=A(t)}catch(r){throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${r}`)}else{if(!d(t))throw new Error(`${e} must be hex string or Uint8Array`);n=Uint8Array.from(t)}const i=n.length;if("number"==typeof r&&i!==r)throw new Error(`${e} expected ${r} bytes, got ${i}`);return n}function S(...e){let t=0;for(let r=0;r<e.length;r++){const n=e[r];f(n),t+=n.length}const r=new Uint8Array(t);for(let t=0,n=0;t<e.length;t++){const i=e[t];r.set(i,n),n+=i.length}return r}const I=e=>"bigint"==typeof e&&l<=e;function T(e,t,r){return I(e)&&I(t)&&I(r)&&t<=e&&e<r}function P(e,t,r,n){if(!T(t,r,n))throw new Error(`expected valid ${e}: ${r} <= n < ${n}, got ${typeof t} ${t}`)}function M(e){let t;for(t=0;e>l;e>>=u,t+=1);return t}const N=e=>(h<<BigInt(e-1))-u,R=e=>new Uint8Array(e),O=e=>Uint8Array.from(e);function B(e,t,r){if("number"!=typeof e||e<2)throw new Error("hashLen must be a number");if("number"!=typeof t||t<2)throw new Error("qByteLen must be a number");if("function"!=typeof r)throw new Error("hmacFn must be a function");let n=R(e),i=R(e),s=0;const o=()=>{n.fill(1),i.fill(0),s=0},a=(...e)=>r(i,n,...e),c=(e=R())=>{i=a(O([0]),e),n=a(),0!==e.length&&(i=a(O([1]),e),n=a())},l=()=>{if(s++>=1e3)throw new Error("drbg: tried 1000 values");let e=0;const r=[];for(;e<t;){n=a();const t=n.slice();r.push(t),e+=n.length}return S(...r)};return(e,t)=>{let r;for(o(),c(e);!(r=t(l()));)c();return o(),r}}const L={bigint:e=>"bigint"==typeof e,function:e=>"function"==typeof e,boolean:e=>"boolean"==typeof e,string:e=>"string"==typeof e,stringOrUint8Array:e=>"string"==typeof e||d(e),isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>"function"==typeof e&&Number.isSafeInteger(e.outputLen)};function U(e,t,r={}){const n=(t,r,n)=>{const i=L[r];if("function"!=typeof i)throw new Error(`Invalid validator "${r}", expected function`);const s=e[t];if(!(n&&void 0===s||i(s,e)))throw new Error(`Invalid param ${String(t)}=${s} (${typeof s}), expected ${r}`)};for(const[e,r]of Object.entries(t))n(e,r,!1);for(const[e,t]of Object.entries(r))n(e,t,!0);return e}function D(e){const t=new WeakMap;return(r,...n)=>{const i=t.get(r);if(void 0!==i)return i;const s=e(r,...n);return t.set(r,s),s}}const j=BigInt(0),F=BigInt(1),$=BigInt(2),q=BigInt(3),H=BigInt(4),z=BigInt(5),W=BigInt(8);function V(e,t){const r=e%t;return r>=j?r:t+r}function G(e,t,r){if(r<=j||t<j)throw new Error("Expected power/modulo > 0");if(r===F)return j;let n=F;for(;t>j;)t&F&&(n=n*e%r),e=e*e%r,t>>=F;return n}function Z(e,t,r){let n=e;for(;t-- >j;)n*=n,n%=r;return n}function K(e,t){if(e===j||t<=j)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let r=V(e,t),n=t,i=j,s=F,o=F,a=j;for(;r!==j;){const e=n/r,t=n%r,c=i-o*e,l=s-a*e;n=r,r=t,i=o,s=a,o=c,a=l}if(n!==F)throw new Error("invert: does not exist");return V(i,t)}BigInt(9),BigInt(16);const J=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Q(e,t){const r=void 0!==t?t:e.toString(2).length;return{nBitLength:r,nByteLength:Math.ceil(r/8)}}function Y(e,t,r=!1,n={}){if(e<=j)throw new Error(`Expected Field ORDER > 0, got ${e}`);const{nBitLength:i,nByteLength:s}=Q(e,t);if(s>2048)throw new Error("Field lengths over 2048 bytes are not supported");const o=function(e){if(e%H===q){const t=(e+F)/H;return function(e,r){const n=e.pow(r,t);if(!e.eql(e.sqr(n),r))throw new Error("Cannot find square root");return n}}if(e%W===z){const t=(e-z)/W;return function(e,r){const n=e.mul(r,$),i=e.pow(n,t),s=e.mul(r,i),o=e.mul(e.mul(s,$),i),a=e.mul(s,e.sub(o,e.ONE));if(!e.eql(e.sqr(a),r))throw new Error("Cannot find square root");return a}}return function(e){const t=(e-F)/$;let r,n,i;for(r=e-F,n=0;r%$===j;r/=$,n++);for(i=$;i<e&&G(i,t,e)!==e-F;i++);if(1===n){const t=(e+F)/H;return function(e,r){const n=e.pow(r,t);if(!e.eql(e.sqr(n),r))throw new Error("Cannot find square root");return n}}const s=(r+F)/$;return function(e,o){if(e.pow(o,t)===e.neg(e.ONE))throw new Error("Cannot find square root");let a=n,c=e.pow(e.mul(e.ONE,i),r),l=e.pow(o,s),u=e.pow(o,r);for(;!e.eql(u,e.ONE);){if(e.eql(u,e.ZERO))return e.ZERO;let t=1;for(let r=e.sqr(u);t<a&&!e.eql(r,e.ONE);t++)r=e.sqr(r);const r=e.pow(c,F<<BigInt(a-t-1));c=e.sqr(r),l=e.mul(l,r),u=e.mul(u,c),a=t}return l}}(e)}(e),a=Object.freeze({ORDER:e,BITS:i,BYTES:s,MASK:N(i),ZERO:j,ONE:F,create:t=>V(t,e),isValid:t=>{if("bigint"!=typeof t)throw new Error("Invalid field element: expected bigint, got "+typeof t);return j<=t&&t<e},is0:e=>e===j,isOdd:e=>(e&F)===F,neg:t=>V(-t,e),eql:(e,t)=>e===t,sqr:t=>V(t*t,e),add:(t,r)=>V(t+r,e),sub:(t,r)=>V(t-r,e),mul:(t,r)=>V(t*r,e),pow:(e,t)=>function(e,t,r){if(r<j)throw new Error("Expected power > 0");if(r===j)return e.ONE;if(r===F)return t;let n=e.ONE,i=t;for(;r>j;)r&F&&(n=e.mul(n,i)),i=e.sqr(i),r>>=F;return n}(a,e,t),div:(t,r)=>V(t*K(r,e),e),sqrN:e=>e*e,addN:(e,t)=>e+t,subN:(e,t)=>e-t,mulN:(e,t)=>e*t,inv:t=>K(t,e),sqrt:n.sqrt||(e=>o(a,e)),invertBatch:e=>function(e,t){const r=new Array(t.length),n=t.reduce(((t,n,i)=>e.is0(n)?t:(r[i]=t,e.mul(t,n))),e.ONE),i=e.inv(n);return t.reduceRight(((t,n,i)=>e.is0(n)?t:(r[i]=e.mul(t,r[i]),e.mul(t,n))),i),r}(a,e),cmov:(e,t,r)=>r?t:e,toBytes:e=>r?_(e,s):C(e,s),fromBytes:e=>{if(e.length!==s)throw new Error(`Fp.fromBytes: expected ${s}, got ${e.length}`);return r?E(e):x(e)}});return Object.freeze(a)}function X(e){if("bigint"!=typeof e)throw new Error("field order must be bigint");const t=e.toString(2).length;return Math.ceil(t/8)}function ee(e){const t=X(e);return t+Math.ceil(t/2)}const te=BigInt(0),re=BigInt(1),ne=new WeakMap,ie=new WeakMap;function se(e){return U(e.Fp,J.reduce(((e,t)=>(e[t]="function",e)),{ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"})),U(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...Q(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}function oe(e){void 0!==e.lowS&&p("lowS",e.lowS),void 0!==e.prehash&&p("prehash",e.prehash)}const{Ph:ae,aT:ce}=n,le={Err:class extends Error{constructor(e=""){super(e)}},_tlv:{encode:(e,t)=>{const{Err:r}=le;if(e<0||e>256)throw new r("tlv.encode: wrong tag");if(1&t.length)throw new r("tlv.encode: unpadded data");const n=t.length/2,i=w(n);if(i.length/2&128)throw new r("tlv.encode: long form length too big");const s=n>127?w(i.length/2|128):"";return`${w(e)}${s}${i}${t}`},decode(e,t){const{Err:r}=le;let n=0;if(e<0||e>256)throw new r("tlv.encode: wrong tag");if(t.length<2||t[n++]!==e)throw new r("tlv.decode: wrong tlv");const i=t[n++];let s=0;if(128&i){const e=127&i;if(!e)throw new r("tlv.decode(long): indefinite length not supported");if(e>4)throw new r("tlv.decode(long): byte length is too big");const o=t.subarray(n,n+e);if(o.length!==e)throw new r("tlv.decode: length bytes not complete");if(0===o[0])throw new r("tlv.decode(long): zero leftmost byte");for(const e of o)s=s<<8|e;if(n+=e,s<128)throw new r("tlv.decode(long): not minimal encoding")}else s=i;const o=t.subarray(n,n+s);if(o.length!==s)throw new r("tlv.decode: wrong value length");return{v:o,l:t.subarray(n+s)}}},_int:{encode(e){const{Err:t}=le;if(e<ue)throw new t("integer: negative integers are not allowed");let r=w(e);if(8&Number.parseInt(r[0],16)&&(r="00"+r),1&r.length)throw new t("unexpected assertion");return r},decode(e){const{Err:t}=le;if(128&e[0])throw new t("Invalid signature integer: negative");if(0===e[0]&&!(128&e[1]))throw new t("Invalid signature integer: unnecessary leading zero");return ae(e)}},toSig(e){const{Err:t,_int:r,_tlv:n}=le,i="string"==typeof e?ce(e):e;f(i);const{v:s,l:o}=n.decode(48,i);if(o.length)throw new t("Invalid signature: left bytes after parsing");const{v:a,l:c}=n.decode(2,s),{v:l,l:u}=n.decode(2,c);if(u.length)throw new t("Invalid signature: left bytes after parsing");return{r:r.decode(a),s:r.decode(l)}},hexFromSig(e){const{_tlv:t,_int:r}=le,n=`${t.encode(2,r.encode(e.r))}${t.encode(2,r.encode(e.s))}`;return t.encode(48,n)}},ue=BigInt(0),he=BigInt(1),de=(BigInt(2),BigInt(3));function fe(e){const t=function(e){const t=se(e);return U(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}(e),{Fp:r,n:n}=t,i=r.BYTES+1,s=2*r.BYTES+1;function o(e){return V(e,n)}function a(e){return K(e,n)}const{ProjectivePoint:c,normPrivateKeyToScalar:l,weierstrassEquation:u,isWithinCurveOrder:h}=function(e){const t=function(e){const t=se(e);U(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:r,Fp:n,a:i}=t;if(r){if(!n.eql(i,n.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if("object"!=typeof r||"bigint"!=typeof r.beta||"function"!=typeof r.splitScalar)throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}(e),{Fp:r}=t,n=Y(t.n,t.nBitLength),i=t.toBytes||((e,t,n)=>{const i=t.toAffine();return S(Uint8Array.from([4]),r.toBytes(i.x),r.toBytes(i.y))}),s=t.fromBytes||(e=>{const t=e.subarray(1);return{x:r.fromBytes(t.subarray(0,r.BYTES)),y:r.fromBytes(t.subarray(r.BYTES,2*r.BYTES))}});function o(e){const{a:n,b:i}=t,s=r.sqr(e),o=r.mul(s,e);return r.add(r.add(o,r.mul(e,n)),i)}if(!r.eql(r.sqr(t.Gy),o(t.Gx)))throw new Error("bad generator point: equation left != right");function a(e){const{allowedPrivateKeyLengths:r,nByteLength:n,wrapPrivateKey:i,n:s}=t;if(r&&"bigint"!=typeof e){if(d(e)&&(e=m(e)),"string"!=typeof e||!r.includes(e.length))throw new Error("Invalid key");e=e.padStart(2*n,"0")}let o;try{o="bigint"==typeof e?e:x(k("private key",e,n))}catch(t){throw new Error(`private key must be ${n} bytes, hex or bigint, not ${typeof e}`)}return i&&(o=V(o,s)),P("private key",o,he,s),o}function c(e){if(!(e instanceof h))throw new Error("ProjectivePoint expected")}const l=D(((e,t)=>{const{px:n,py:i,pz:s}=e;if(r.eql(s,r.ONE))return{x:n,y:i};const o=e.is0();null==t&&(t=o?r.ONE:r.inv(s));const a=r.mul(n,t),c=r.mul(i,t),l=r.mul(s,t);if(o)return{x:r.ZERO,y:r.ZERO};if(!r.eql(l,r.ONE))throw new Error("invZ was invalid");return{x:a,y:c}})),u=D((e=>{if(e.is0()){if(t.allowInfinityPoint&&!r.is0(e.py))return;throw new Error("bad point: ZERO")}const{x:n,y:i}=e.toAffine();if(!r.isValid(n)||!r.isValid(i))throw new Error("bad point: x or y not FE");const s=r.sqr(i),a=o(n);if(!r.eql(s,a))throw new Error("bad point: equation left != right");if(!e.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0}));class h{constructor(e,t,n){if(this.px=e,this.py=t,this.pz=n,null==e||!r.isValid(e))throw new Error("x required");if(null==t||!r.isValid(t))throw new Error("y required");if(null==n||!r.isValid(n))throw new Error("z required");Object.freeze(this)}static fromAffine(e){const{x:t,y:n}=e||{};if(!e||!r.isValid(t)||!r.isValid(n))throw new Error("invalid affine point");if(e instanceof h)throw new Error("projective point not allowed");const i=e=>r.eql(e,r.ZERO);return i(t)&&i(n)?h.ZERO:new h(t,n,r.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(e){const t=r.invertBatch(e.map((e=>e.pz)));return e.map(((e,r)=>e.toAffine(t[r]))).map(h.fromAffine)}static fromHex(e){const t=h.fromAffine(s(k("pointHex",e)));return t.assertValidity(),t}static fromPrivateKey(e){return h.BASE.multiply(a(e))}static msm(e,t){return function(e,t,r,n){if(!Array.isArray(r)||!Array.isArray(n)||n.length!==r.length)throw new Error("arrays of points and scalars must have equal length");n.forEach(((e,r)=>{if(!t.isValid(e))throw new Error(`wrong scalar at index ${r}`)})),r.forEach(((t,r)=>{if(!(t instanceof e))throw new Error(`wrong point at index ${r}`)}));const i=M(BigInt(r.length)),s=i>12?i-3:i>4?i-2:i?2:1,o=(1<<s)-1,a=new Array(o+1).fill(e.ZERO),c=Math.floor((t.BITS-1)/s)*s;let l=e.ZERO;for(let t=c;t>=0;t-=s){a.fill(e.ZERO);for(let e=0;e<n.length;e++){const i=n[e],s=Number(i>>BigInt(t)&BigInt(o));a[s]=a[s].add(r[e])}let i=e.ZERO;for(let t=a.length-1,r=e.ZERO;t>0;t--)r=r.add(a[t]),i=i.add(r);if(l=l.add(i),0!==t)for(let e=0;e<s;e++)l=l.double()}return l}(h,n,e,t)}_setWindowSize(e){g.setWindowSize(this,e)}assertValidity(){u(this)}hasEvenY(){const{y:e}=this.toAffine();if(r.isOdd)return!r.isOdd(e);throw new Error("Field doesn't support isOdd")}equals(e){c(e);const{px:t,py:n,pz:i}=this,{px:s,py:o,pz:a}=e,l=r.eql(r.mul(t,a),r.mul(s,i)),u=r.eql(r.mul(n,a),r.mul(o,i));return l&&u}negate(){return new h(this.px,r.neg(this.py),this.pz)}double(){const{a:e,b:n}=t,i=r.mul(n,de),{px:s,py:o,pz:a}=this;let c=r.ZERO,l=r.ZERO,u=r.ZERO,d=r.mul(s,s),f=r.mul(o,o),p=r.mul(a,a),g=r.mul(s,o);return g=r.add(g,g),u=r.mul(s,a),u=r.add(u,u),c=r.mul(e,u),l=r.mul(i,p),l=r.add(c,l),c=r.sub(f,l),l=r.add(f,l),l=r.mul(c,l),c=r.mul(g,c),u=r.mul(i,u),p=r.mul(e,p),g=r.sub(d,p),g=r.mul(e,g),g=r.add(g,u),u=r.add(d,d),d=r.add(u,d),d=r.add(d,p),d=r.mul(d,g),l=r.add(l,d),p=r.mul(o,a),p=r.add(p,p),d=r.mul(p,g),c=r.sub(c,d),u=r.mul(p,f),u=r.add(u,u),u=r.add(u,u),new h(c,l,u)}add(e){c(e);const{px:n,py:i,pz:s}=this,{px:o,py:a,pz:l}=e;let u=r.ZERO,d=r.ZERO,f=r.ZERO;const p=t.a,g=r.mul(t.b,de);let m=r.mul(n,o),w=r.mul(i,a),y=r.mul(s,l),b=r.add(n,i),v=r.add(o,a);b=r.mul(b,v),v=r.add(m,w),b=r.sub(b,v),v=r.add(n,s);let A=r.add(o,l);return v=r.mul(v,A),A=r.add(m,y),v=r.sub(v,A),A=r.add(i,s),u=r.add(a,l),A=r.mul(A,u),u=r.add(w,y),A=r.sub(A,u),f=r.mul(p,v),u=r.mul(g,y),f=r.add(u,f),u=r.sub(w,f),f=r.add(w,f),d=r.mul(u,f),w=r.add(m,m),w=r.add(w,m),y=r.mul(p,y),v=r.mul(g,v),w=r.add(w,y),y=r.sub(m,y),y=r.mul(p,y),v=r.add(v,y),m=r.mul(w,v),d=r.add(d,m),m=r.mul(A,v),u=r.mul(b,u),u=r.sub(u,m),m=r.mul(b,w),f=r.mul(A,f),f=r.add(f,m),new h(u,d,f)}subtract(e){return this.add(e.negate())}is0(){return this.equals(h.ZERO)}wNAF(e){return g.wNAFCached(this,e,h.normalizeZ)}multiplyUnsafe(e){P("scalar",e,ue,t.n);const n=h.ZERO;if(e===ue)return n;if(e===he)return this;const{endo:i}=t;if(!i)return g.unsafeLadder(this,e);let{k1neg:s,k1:o,k2neg:a,k2:c}=i.splitScalar(e),l=n,u=n,d=this;for(;o>ue||c>ue;)o&he&&(l=l.add(d)),c&he&&(u=u.add(d)),d=d.double(),o>>=he,c>>=he;return s&&(l=l.negate()),a&&(u=u.negate()),u=new h(r.mul(u.px,i.beta),u.py,u.pz),l.add(u)}multiply(e){const{endo:n,n:i}=t;let s,o;if(P("scalar",e,he,i),n){const{k1neg:t,k1:i,k2neg:a,k2:c}=n.splitScalar(e);let{p:l,f:u}=this.wNAF(i),{p:d,f:f}=this.wNAF(c);l=g.constTimeNegate(t,l),d=g.constTimeNegate(a,d),d=new h(r.mul(d.px,n.beta),d.py,d.pz),s=l.add(d),o=u.add(f)}else{const{p:t,f:r}=this.wNAF(e);s=t,o=r}return h.normalizeZ([s,o])[0]}multiplyAndAddUnsafe(e,t,r){const n=h.BASE,i=(e,t)=>t!==ue&&t!==he&&e.equals(n)?e.multiply(t):e.multiplyUnsafe(t),s=i(this,t).add(i(e,r));return s.is0()?void 0:s}toAffine(e){return l(this,e)}isTorsionFree(){const{h:e,isTorsionFree:r}=t;if(e===he)return!0;if(r)return r(h,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:e,clearCofactor:r}=t;return e===he?this:r?r(h,this):this.multiplyUnsafe(t.h)}toRawBytes(e=!0){return p("isCompressed",e),this.assertValidity(),i(h,this,e)}toHex(e=!0){return p("isCompressed",e),m(this.toRawBytes(e))}}h.BASE=new h(t.Gx,t.Gy,r.ONE),h.ZERO=new h(r.ZERO,r.ONE,r.ZERO);const f=t.nBitLength,g=function(e,t){const r=(e,t)=>{const r=t.negate();return e?r:t},n=e=>{if(!Number.isSafeInteger(e)||e<=0||e>t)throw new Error(`Wrong window size=${e}, should be [1..${t}]`)},i=e=>(n(e),{windows:Math.ceil(t/e)+1,windowSize:2**(e-1)});return{constTimeNegate:r,unsafeLadder(t,r){let n=e.ZERO,i=t;for(;r>te;)r&re&&(n=n.add(i)),i=i.double(),r>>=re;return n},precomputeWindow(e,t){const{windows:r,windowSize:n}=i(t),s=[];let o=e,a=o;for(let e=0;e<r;e++){a=o,s.push(a);for(let e=1;e<n;e++)a=a.add(o),s.push(a);o=a.double()}return s},wNAF(t,n,s){const{windows:o,windowSize:a}=i(t);let c=e.ZERO,l=e.BASE;const u=BigInt(2**t-1),h=2**t,d=BigInt(t);for(let e=0;e<o;e++){const t=e*a;let i=Number(s&u);s>>=d,i>a&&(i-=h,s+=re);const o=t,f=t+Math.abs(i)-1,p=e%2!=0,g=i<0;0===i?l=l.add(r(p,n[o])):c=c.add(r(g,n[f]))}return{p:c,f:l}},wNAFCached(e,t,r){const n=ie.get(e)||1;let i=ne.get(e);return i||(i=this.precomputeWindow(e,n),1!==n&&ne.set(e,r(i))),this.wNAF(n,i,t)},setWindowSize(e,t){n(t),ie.set(e,t),ne.delete(e)}}}(h,t.endo?Math.ceil(f/2):f);return{CURVE:t,ProjectivePoint:h,normPrivateKeyToScalar:a,weierstrassEquation:o,isWithinCurveOrder:function(e){return T(e,he,t.n)}}}({...t,toBytes(e,t,n){const i=t.toAffine(),s=r.toBytes(i.x),o=S;return p("isCompressed",n),n?o(Uint8Array.from([t.hasEvenY()?2:3]),s):o(Uint8Array.from([4]),s,r.toBytes(i.y))},fromBytes(e){const t=e.length,n=e[0],o=e.subarray(1);if(t!==i||2!==n&&3!==n){if(t===s&&4===n)return{x:r.fromBytes(o.subarray(0,r.BYTES)),y:r.fromBytes(o.subarray(r.BYTES,2*r.BYTES))};throw new Error(`Point of length ${t} was invalid. Expected ${i} compressed bytes or ${s} uncompressed bytes`)}{const e=x(o);if(!T(e,he,r.ORDER))throw new Error("Point is not on curve");const t=u(e);let i;try{i=r.sqrt(t)}catch(e){const t=e instanceof Error?": "+e.message:"";throw new Error("Point is not on curve"+t)}return!(1&~n)!=((i&he)===he)&&(i=r.neg(i)),{x:e,y:i}}}}),f=e=>m(C(e,t.nByteLength));function g(e){return e>n>>he}const w=(e,t,r)=>x(e.slice(t,r));class y{constructor(e,t,r){this.r=e,this.s=t,this.recovery=r,this.assertValidity()}static fromCompact(e){const r=t.nByteLength;return e=k("compactSignature",e,2*r),new y(w(e,0,r),w(e,r,2*r))}static fromDER(e){const{r:t,s:r}=le.toSig(k("DER",e));return new y(t,r)}assertValidity(){P("r",this.r,he,n),P("s",this.s,he,n)}addRecoveryBit(e){return new y(this.r,this.s,e)}recoverPublicKey(e){const{r:n,s:i,recovery:s}=this,l=R(k("msgHash",e));if(null==s||![0,1,2,3].includes(s))throw new Error("recovery id invalid");const u=2===s||3===s?n+t.n:n;if(u>=r.ORDER)throw new Error("recovery id 2 or 3 invalid");const h=1&s?"03":"02",d=c.fromHex(h+f(u)),p=a(u),g=o(-l*p),m=o(i*p),w=c.BASE.multiplyAndAddUnsafe(d,g,m);if(!w)throw new Error("point at infinify");return w.assertValidity(),w}hasHighS(){return g(this.s)}normalizeS(){return this.hasHighS()?new y(this.r,o(-this.s),this.recovery):this}toDERRawBytes(){return A(this.toDERHex())}toDERHex(){return le.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return A(this.toCompactHex())}toCompactHex(){return f(this.r)+f(this.s)}}const b={isValidPrivateKey(e){try{return l(e),!0}catch(e){return!1}},normPrivateKeyToScalar:l,randomPrivateKey:()=>{const e=ee(t.n);return function(e,t,r=!1){const n=e.length,i=X(t),s=ee(t);if(n<16||n<s||n>1024)throw new Error(`expected ${s}-1024 bytes of input, got ${n}`);const o=V(r?x(e):E(e),t-F)+F;return r?_(o,i):C(o,i)}(t.randomBytes(e),t.n)},precompute(e=8,t=c.BASE){return t._setWindowSize(e),t.multiply(BigInt(3)),t}};function v(e){const t=d(e),r="string"==typeof e,n=(t||r)&&e.length;return t?n===i||n===s:r?n===2*i||n===2*s:e instanceof c}const I=t.bits2int||function(e){const r=x(e),n=8*e.length-t.nBitLength;return n>0?r>>BigInt(n):r},R=t.bits2int_modN||function(e){return o(I(e))},O=N(t.nBitLength);function L(e){return P(`num < 2^${t.nBitLength}`,e,ue,O),C(e,t.nByteLength)}const j={lowS:t.lowS,prehash:!1},$={lowS:t.lowS,prehash:!1};return c.BASE._setWindowSize(8),{CURVE:t,getPublicKey:function(e,t=!0){return c.fromPrivateKey(e).toRawBytes(t)},getSharedSecret:function(e,t,r=!0){if(v(e))throw new Error("first arg must be private key");if(!v(t))throw new Error("second arg must be public key");return c.fromHex(t).multiply(l(e)).toRawBytes(r)},sign:function(e,n,i=j){const{seed:s,k2sig:u}=function(e,n,i=j){if(["recovered","canonical"].some((e=>e in i)))throw new Error("sign() legacy options not supported");const{hash:s,randomBytes:u}=t;let{lowS:d,prehash:f,extraEntropy:p}=i;null==d&&(d=!0),e=k("msgHash",e),oe(i),f&&(e=k("prehashed msgHash",s(e)));const m=R(e),w=l(n),b=[L(w),L(m)];if(null!=p&&!1!==p){const e=!0===p?u(r.BYTES):p;b.push(k("extraEntropy",e))}const v=S(...b),A=m;return{seed:v,k2sig:function(e){const t=I(e);if(!h(t))return;const r=a(t),n=c.BASE.multiply(t).toAffine(),i=o(n.x);if(i===ue)return;const s=o(r*o(A+i*w));if(s===ue)return;let l=(n.x===i?0:2)|Number(n.y&he),u=s;return d&&g(s)&&(u=function(e){return g(e)?o(-e):e}(s),l^=1),new y(i,u,l)}}}(e,n,i),d=t;return B(d.hash.outputLen,d.nByteLength,d.hmac)(s,u)},verify:function(e,r,n,i=$){const s=e;if(r=k("msgHash",r),n=k("publicKey",n),"strict"in i)throw new Error("options.strict was renamed to lowS");oe(i);const{lowS:l,prehash:u}=i;let h,f;try{if("string"==typeof s||d(s))try{h=y.fromDER(s)}catch(e){if(!(e instanceof le.Err))throw e;h=y.fromCompact(s)}else{if("object"!=typeof s||"bigint"!=typeof s.r||"bigint"!=typeof s.s)throw new Error("PARSE");{const{r:e,s:t}=s;h=new y(e,t)}}f=c.fromHex(n)}catch(e){if("PARSE"===e.message)throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(l&&h.hasHighS())return!1;u&&(r=t.hash(r));const{r:p,s:g}=h,m=R(r),w=a(g),b=o(m*w),v=o(p*w),A=c.BASE.multiplyAndAddUnsafe(f,b,v)?.toAffine();return!!A&&o(A.x)===p},ProjectivePoint:c,Signature:y,utils:b}}function pe(e){return{hash:e,hmac:(t,...r)=>c(e,t,(0,o.Id)(...r)),randomBytes:o.po}}BigInt(4);const ge=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),me=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),we=BigInt(1),ye=BigInt(2),be=(e,t)=>(e+t/ye)/t;const ve=Y(ge,void 0,void 0,{sqrt:function(e){const t=ge,r=BigInt(3),n=BigInt(6),i=BigInt(11),s=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=e*e*e%t,u=l*l*e%t,h=Z(u,r,t)*u%t,d=Z(h,r,t)*u%t,f=Z(d,ye,t)*l%t,p=Z(f,i,t)*f%t,g=Z(p,s,t)*p%t,m=Z(g,a,t)*g%t,w=Z(m,c,t)*m%t,y=Z(w,a,t)*g%t,b=Z(y,r,t)*u%t,v=Z(b,o,t)*p%t,A=Z(v,n,t)*l%t,x=Z(A,ye,t);if(!ve.eql(ve.sqr(x),e))throw new Error("Cannot find square root");return x}}),Ae=function(e,t){const r=t=>fe({...e,...pe(t)});return Object.freeze({...r(t),create:r})}({a:BigInt(0),b:BigInt(7),Fp:ve,n:me,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const t=me,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),n=-we*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),i=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),s=r,o=BigInt("0x100000000000000000000000000000000"),a=be(s*e,t),c=be(-n*e,t);let l=V(e-a*r-c*i,t),u=V(-a*n-c*s,t);const h=l>o,d=u>o;if(h&&(l=t-l),d&&(u=t-u),l>o||u>o)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:h,k1:l,k2neg:d,k2:u}}}},i.sc);BigInt(0),Ae.ProjectivePoint},89999:function(e,t,r){"use strict";function n(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`positive integer expected, not ${e}`)}function i(e,...t){if(!((r=e)instanceof Uint8Array||null!=r&&"object"==typeof r&&"Uint8Array"===r.constructor.name))throw new Error("Uint8Array expected");var r;if(t.length>0&&!t.includes(e.length))throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`)}function s(e){if("function"!=typeof e||"function"!=typeof e.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");n(e.outputLen),n(e.blockLen)}function o(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function a(e,t){i(e);const r=t.outputLen;if(e.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}r.d(t,{CG:function(){return a},ai:function(){return n},ee:function(){return i},t2:function(){return o},tW:function(){return s}})},15162:function(e,t,r){"use strict";r.d(t,{sc:function(){return h}});var n=r(89999),i=r(65924);const s=(e,t,r)=>e&t^e&r^t&r;class o extends i.Vw{constructor(e,t,r,n){super(),this.blockLen=e,this.outputLen=t,this.padOffset=r,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=(0,i.O8)(this.buffer)}update(e){(0,n.t2)(this);const{view:t,buffer:r,blockLen:s}=this,o=(e=(0,i.ZJ)(e)).length;for(let n=0;n<o;){const a=Math.min(s-this.pos,o-n);if(a!==s)r.set(e.subarray(n,n+a),this.pos),this.pos+=a,n+=a,this.pos===s&&(this.process(t,0),this.pos=0);else{const t=(0,i.O8)(e);for(;s<=o-n;n+=s)this.process(t,n)}}return this.length+=e.length,this.roundClean(),this}digestInto(e){(0,n.t2)(this),(0,n.CG)(e,this),this.finished=!0;const{buffer:t,view:r,blockLen:s,isLE:o}=this;let{pos:a}=this;t[a++]=128,this.buffer.subarray(a).fill(0),this.padOffset>s-a&&(this.process(r,0),a=0);for(let e=a;e<s;e++)t[e]=0;!function(e,t,r,n){if("function"==typeof e.setBigUint64)return e.setBigUint64(t,r,n);const i=BigInt(32),s=BigInt(4294967295),o=Number(r>>i&s),a=Number(r&s),c=n?4:0,l=n?0:4;e.setUint32(t+c,o,n),e.setUint32(t+l,a,n)}(r,s-8,BigInt(8*this.length),o),this.process(r,0);const c=(0,i.O8)(e),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const u=l/4,h=this.get();if(u>h.length)throw new Error("_sha2: outputLen bigger than state");for(let e=0;e<u;e++)c.setUint32(4*e,h[e],o)}digest(){const{buffer:e,outputLen:t}=this;this.digestInto(e);const r=e.slice(0,t);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:t,buffer:r,length:n,finished:i,destroyed:s,pos:o}=this;return e.length=n,e.pos=o,e.finished=i,e.destroyed=s,n%t&&e.buffer.set(r),e}}const a=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),c=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),l=new Uint32Array(64);class u extends o{constructor(){super(64,32,8,!1),this.A=0|c[0],this.B=0|c[1],this.C=0|c[2],this.D=0|c[3],this.E=0|c[4],this.F=0|c[5],this.G=0|c[6],this.H=0|c[7]}get(){const{A:e,B:t,C:r,D:n,E:i,F:s,G:o,H:a}=this;return[e,t,r,n,i,s,o,a]}set(e,t,r,n,i,s,o,a){this.A=0|e,this.B=0|t,this.C=0|r,this.D=0|n,this.E=0|i,this.F=0|s,this.G=0|o,this.H=0|a}process(e,t){for(let r=0;r<16;r++,t+=4)l[r]=e.getUint32(t,!1);for(let e=16;e<64;e++){const t=l[e-15],r=l[e-2],n=(0,i.Ow)(t,7)^(0,i.Ow)(t,18)^t>>>3,s=(0,i.Ow)(r,17)^(0,i.Ow)(r,19)^r>>>10;l[e]=s+l[e-7]+n+l[e-16]|0}let{A:r,B:n,C:o,D:c,E:u,F:h,G:d,H:f}=this;for(let e=0;e<64;e++){const t=f+((0,i.Ow)(u,6)^(0,i.Ow)(u,11)^(0,i.Ow)(u,25))+((p=u)&h^~p&d)+a[e]+l[e]|0,g=((0,i.Ow)(r,2)^(0,i.Ow)(r,13)^(0,i.Ow)(r,22))+s(r,n,o)|0;f=d,d=h,h=u,u=c+t|0,c=o,o=n,n=r,r=t+g|0}var p;r=r+this.A|0,n=n+this.B|0,o=o+this.C|0,c=c+this.D|0,u=u+this.E|0,h=h+this.F|0,d=d+this.G|0,f=f+this.H|0,this.set(r,n,o,c,u,h,d,f)}roundClean(){l.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const h=(0,i.ld)((()=>new u))},65924:function(e,t,r){"use strict";r.d(t,{Vw:function(){return f},Fc:function(){return u},Id:function(){return d},O8:function(){return o},qv:function(){return c},po:function(){return g},Ow:function(){return a},ZJ:function(){return h},DH:function(){return s},ld:function(){return p}});const n="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0;var i=r(89999);const s=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),o=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),a=(e,t)=>e<<32-t|e>>>t,c=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0],l=e=>e<<24&4278190080|e<<8&16711680|e>>>8&65280|e>>>24&255;function u(e){for(let t=0;t<e.length;t++)e[t]=l(e[t])}function h(e){return"string"==typeof e&&(e=function(e){if("string"!=typeof e)throw new Error("utf8ToBytes expected string, got "+typeof e);return new Uint8Array((new TextEncoder).encode(e))}(e)),(0,i.ee)(e),e}function d(...e){let t=0;for(let r=0;r<e.length;r++){const n=e[r];(0,i.ee)(n),t+=n.length}const r=new Uint8Array(t);for(let t=0,n=0;t<e.length;t++){const i=e[t];r.set(i,n),n+=i.length}return r}class f{clone(){return this._cloneInto()}}function p(e){const t=t=>e().update(h(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}function g(e=32){if(n&&"function"==typeof n.getRandomValues)return n.getRandomValues(new Uint8Array(e));if(n&&"function"==typeof n.randomBytes)return n.randomBytes(e);throw new Error("crypto.getRandomValues must be defined")}},1636:function(e){"use strict";e.exports={rE:"6.6.0"}}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var s=n[e]={id:e,loaded:!1,exports:{}};return r[e].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var s=Object.create(null);i.r(s);var o={};e=e||[null,t({}),t([]),t(t)];for(var a=2&n&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){o[e]=function(){return r[e]}}));return o.default=function(){return r},i.d(s,o),s},i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e};var s={};!function(){"use strict";i.r(s),i.d(s,{config:function(){return X_},networks:function(){return Y_}});var e={};i.r(e),i.d(e,{OG:function(){return yE},My:function(){return lE},Ph:function(){return dE},lX:function(){return fE},Id:function(){return wE},fg:function(){return AE},qj:function(){return mE},aT:function(){return hE},lq:function(){return pE},z:function(){return gE},Q5:function(){return EE}}),i(52675),i(89463),i(66412),i(2259),i(45700),i(78125),i(23792),i(94490),i(34782),i(89572),i(4731),i(60479),i(2892),i(84185),i(40875),i(10287),i(26099),i(3362),i(47764),i(23500),i(62953);var t=i(8324),r=i(71294),n=i(11079);const o="walletConnect",a="injected",c="coinbaseWallet",l="coinbaseWalletSDK",u="safe",h="ledger",d="eip6963",f="w3mAuth",p="eip155",g={ConnectorExplorerIds:{[c]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[l]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[u]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[h]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ConnectorImageIds:{[c]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[l]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[u]:"461db637-8616-43ce-035a-d89b8a1d5800",[h]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[o]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[a]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[a]:"Browser Wallet",[o]:"WalletConnect",[c]:"Coinbase",[l]:"Coinbase",[h]:"Ledger",[u]:"Safe"},ConnectorTypesMap:{[a]:"INJECTED",[o]:"WALLET_CONNECT",[d]:"ANNOUNCED",[f]:"AUTH"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},m={getCaipTokens(e){if(!e)return;const t={};return Object.entries(e).forEach((([e,r])=>{t[`${p}:${e}`]=r})),t}},w={UniversalProviderErrors:{UNAUTHORIZED_DOMAIN_NOT_ALLOWED:"Unauthorized: origin not allowed"},ALERT_ERRORS:{SWITCH_NETWORK_NOT_FOUND:{shortMessage:"Network Not Found",longMessage:"Network not found - please make sure it is included in 'networks' array in createAppKit function"},INVALID_APP_CONFIGURATION:{shortMessage:"Invalid App Configuration",longMessage:()=>`Origin ${y()?window.origin:"unknown"} not found on Allowlist - update configuration`},INVALID_APP_CONFIGURATION_SOCIALS:{shortMessage:"Invalid App Configuration",longMessage:()=>`Origin ${y()?window.origin:"unknown"} not found on Allowlist - update configuration to enable social login`},PROJECT_ID_NOT_CONFIGURED:{shortMessage:"Project ID Not Configured",longMessage:"Project ID Not Configured - update configuration"}}};function y(){return"undefined"!=typeof window}var b=i(29838);const v={createLogger(e,t="error"){const r=(0,b.iP)({level:t}),{logger:n}=(0,b.D5)({opts:r});return n.error=(...t)=>{for(const r of t)if(r instanceof Error){e(r,...t);break}e(new Error,...t)},n}};var A=i(76595),x=i(51344);class E extends x.C{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}}var C=i(52167);function _(e,{errorInstance:t=new Error("timed out"),timeout:r,signal:n}){return new Promise(((i,s)=>{(async()=>{let o;try{const a=new AbortController;r>0&&(o=setTimeout((()=>{n?a.abort():s(t)}),r)),i(await e({signal:a?.signal||null}))}catch(e){"AbortError"===e?.name&&s(t),s(e)}finally{clearTimeout(o)}})()}))}var k=i(18463);function S(){return{current:0,take(){return this.current++},reset(){this.current=0}}}const I=S();class T extends x.C{constructor(e,{code:t,docsPath:r,metaMessages:n,name:i,shortMessage:s}){super(s,{cause:e,docsPath:r,metaMessages:n||e?.metaMessages,name:i||"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=i||e.name,this.code=e instanceof A.J8?e.code:t??-1}}class P extends T{constructor(e,t){super(e,t),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class M extends T{constructor(e){super(e,{code:M.code,name:"ParseRpcError",shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."})}}Object.defineProperty(M,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class N extends T{constructor(e){super(e,{code:N.code,name:"InvalidRequestRpcError",shortMessage:"JSON is not a valid request object."})}}Object.defineProperty(N,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class R extends T{constructor(e,{method:t}={}){super(e,{code:R.code,name:"MethodNotFoundRpcError",shortMessage:`The method${t?` "${t}"`:""} does not exist / is not available.`})}}Object.defineProperty(R,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class O extends T{constructor(e){super(e,{code:O.code,name:"InvalidParamsRpcError",shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join("\n")})}}Object.defineProperty(O,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class B extends T{constructor(e){super(e,{code:B.code,name:"InternalRpcError",shortMessage:"An internal error was received."})}}Object.defineProperty(B,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class L extends T{constructor(e){super(e,{code:L.code,name:"InvalidInputRpcError",shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join("\n")})}}Object.defineProperty(L,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class U extends T{constructor(e){super(e,{code:U.code,name:"ResourceNotFoundRpcError",shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(U,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class D extends T{constructor(e){super(e,{code:D.code,name:"ResourceUnavailableRpcError",shortMessage:"Requested resource not available."})}}Object.defineProperty(D,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class j extends T{constructor(e){super(e,{code:j.code,name:"TransactionRejectedRpcError",shortMessage:"Transaction creation failed."})}}Object.defineProperty(j,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class F extends T{constructor(e,{method:t}={}){super(e,{code:F.code,name:"MethodNotSupportedRpcError",shortMessage:`Method${t?` "${t}"`:""} is not implemented.`})}}Object.defineProperty(F,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class $ extends T{constructor(e){super(e,{code:$.code,name:"LimitExceededRpcError",shortMessage:"Request exceeds defined limit."})}}Object.defineProperty($,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class q extends T{constructor(e){super(e,{code:q.code,name:"JsonRpcVersionUnsupportedError",shortMessage:"Version of JSON-RPC protocol is not supported."})}}Object.defineProperty(q,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class H extends P{constructor(e){super(e,{code:H.code,name:"UserRejectedRequestError",shortMessage:"User rejected the request."})}}Object.defineProperty(H,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class z extends P{constructor(e){super(e,{code:z.code,name:"UnauthorizedProviderError",shortMessage:"The requested method and/or account has not been authorized by the user."})}}Object.defineProperty(z,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class W extends P{constructor(e,{method:t}={}){super(e,{code:W.code,name:"UnsupportedProviderMethodError",shortMessage:`The Provider does not support the requested method${t?` " ${t}"`:""}.`})}}Object.defineProperty(W,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class V extends P{constructor(e){super(e,{code:V.code,name:"ProviderDisconnectedError",shortMessage:"The Provider is disconnected from all chains."})}}Object.defineProperty(V,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class G extends P{constructor(e){super(e,{code:G.code,name:"ChainDisconnectedError",shortMessage:"The Provider is not connected to the requested chain."})}}Object.defineProperty(G,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class Z extends P{constructor(e){super(e,{code:Z.code,name:"SwitchChainError",shortMessage:"An error occurred when attempting to switch chain."})}}Object.defineProperty(Z,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class K extends T{constructor(e){super(e,{name:"UnknownRpcError",shortMessage:"An unknown RPC error occurred."})}}var J=i(84192),Q=i(84756),Y=i(76447);const X=new Y.A(8192);async function ee(e){return new Promise((t=>setTimeout(t,e)))}function te(e,{delay:t=100,retryCount:r=2,shouldRetry:n=()=>!0}={}){return new Promise(((i,s)=>{const o=async({count:a=0}={})=>{try{const t=await e();i(t)}catch(e){if(a<r&&await n({count:a,error:e}))return(async({error:e})=>{const r="function"==typeof t?t({count:a,error:e}):t;r&&await ee(r),o({count:a+1})})({error:e});s(e)}};o()}))}function re(e,t={}){return async(r,n={})=>{const{dedupe:i=!1,retryDelay:s=150,retryCount:o=3,uid:a}={...t,...n};return function(e,{enabled:t=!0,id:r}){if(!t||!r)return e();if(X.get(r))return X.get(r);const n=e().finally((()=>X.delete(r)));return X.set(r,n),n}((()=>te((async()=>{try{return await e(r)}catch(e){const t=e;switch(t.code){case M.code:throw new M(t);case N.code:throw new N(t);case R.code:throw new R(t,{method:r.method});case O.code:throw new O(t);case B.code:throw new B(t);case L.code:throw new L(t);case U.code:throw new U(t);case D.code:throw new D(t);case j.code:throw new j(t);case F.code:throw new F(t,{method:r.method});case $.code:throw new $(t);case q.code:throw new q(t);case H.code:throw new H(t);case z.code:throw new z(t);case W.code:throw new W(t);case V.code:throw new V(t);case G.code:throw new G(t);case Z.code:throw new Z(t);case 5e3:throw new H(t);default:if(e instanceof x.C)throw e;throw new K(t)}}}),{delay:({count:e,error:t})=>{if(t&&t instanceof A.Ci){const e=t?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*Number.parseInt(e)}return(1<<e)*s},retryCount:o,shouldRetry:({error:e})=>function(e){return"code"in e&&"number"==typeof e.code?-1===e.code||e.code===$.code||e.code===B.code:!(e instanceof A.Ci&&e.status)||(403===e.status||408===e.status||413===e.status||429===e.status||500===e.status||502===e.status||503===e.status||504===e.status)}(e)})),{enabled:i,id:i?(0,Q.S)((0,J.i3)(`${a}.${(0,k.A)(r)}`)):void 0})}}let ne,ie=256;function se(e=11){if(!ne||ie+e>512){ne="",ie=0;for(let e=0;e<256;e++)ne+=(256+256*Math.random()|0).toString(16).substring(1)}return ne.substring(ie,ie+++e)}function oe({key:e,name:t,request:r,retryCount:n=3,retryDelay:i=150,timeout:s,type:o},a){return{config:{key:e,name:t,request:r,retryCount:n,retryDelay:i,timeout:s,type:o},request:re(r,{retryCount:n,retryDelay:i,uid:se()}),value:a}}function ae(e,t={}){const{batch:r,fetchOptions:n,key:i="http",name:s="HTTP JSON-RPC",onFetchRequest:o,onFetchResponse:a,retryDelay:c}=t;return({chain:l,retryCount:u,timeout:h})=>{const{batchSize:d=1e3,wait:f=0}="object"==typeof r?r:{},p=t.retryCount??u,g=h??t.timeout??1e4,m=e||l?.rpcUrls.default.http[0];if(!m)throw new E;const w=function(e,t={}){return{async request(r){const{body:n,onRequest:i=t.onRequest,onResponse:s=t.onResponse,timeout:o=t.timeout??1e4}=r,a={...t.fetchOptions??{},...r.fetchOptions??{}},{headers:c,method:l,signal:u}=a;try{const t=await _((async({signal:t})=>{const r={...a,body:Array.isArray(n)?(0,k.A)(n.map((e=>({jsonrpc:"2.0",id:e.id??I.take(),...e})))):(0,k.A)({jsonrpc:"2.0",id:n.id??I.take(),...n}),headers:{"Content-Type":"application/json",...c},method:l||"POST",signal:u||(o>0?t:null)},s=new Request(e,r),h=await(i?.(s,r))??{...r,url:e};return await fetch(h.url??e,h)}),{errorInstance:new A.MU({body:n,url:e}),timeout:o,signal:!0});let r;if(s&&await s(t),t.headers.get("Content-Type")?.startsWith("application/json"))r=await t.json();else{r=await t.text();try{r=JSON.parse(r||"{}")}catch(e){if(t.ok)throw e;r={error:r}}}if(!t.ok)throw new A.Ci({body:n,details:(0,k.A)(r.error)||t.statusText,headers:t.headers,status:t.status,url:e});return r}catch(t){if(t instanceof A.Ci)throw t;if(t instanceof A.MU)throw t;throw new A.Ci({body:n,cause:t,url:e})}}}}(m,{fetchOptions:n,onRequest:o,onResponse:a,timeout:g});return oe({key:i,name:s,async request({method:e,params:t}){const n={method:e,params:t},{schedule:i}=(0,C.u)({id:m,wait:f,shouldSplitBatch(e){return e.length>d},fn:e=>w.request({body:e}),sort:(e,t)=>e.id-t.id}),[{error:s,result:o}]=await(async e=>r?i(e):[await w.request({body:e})])(n);if(s)throw new A.J8({body:n,error:s,url:m});return o},retryCount:p,retryDelay:c,timeout:g,type:"http"},{fetchOptions:n,url:m})}}const ce=["near:mainnet","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","eip155:1101","eip155:56","eip155:42161","eip155:7777777","eip155:59144","eip155:324","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1","eip155:5000","solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz","eip155:80084","eip155:5003","eip155:100","eip155:8453","eip155:42220","eip155:1313161555","eip155:17000","eip155:1","eip155:300","eip155:1313161554","eip155:1329","eip155:84532","eip155:421614","eip155:11155111","eip155:8217","eip155:43114","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","eip155:999999999","eip155:11155420","eip155:80002","eip155:97","eip155:43113","eip155:137","eip155:10","eip155:1301"],le={extendRpcUrlWithProjectId(e,t){let r=!1;try{r="rpc.walletconnect.org"===new URL(e).host}catch(e){r=!1}if(r){const r=new URL(e);return r.searchParams.has("projectId")||r.searchParams.set("projectId",t),r.toString()}return e},isCaipNetwork(e){return"chainNamespace"in e&&"caipNetworkId"in e},getChainNamespace(e){return this.isCaipNetwork(e)?e.chainNamespace:n.oU.CHAIN.EVM},getCaipNetworkId(e){return this.isCaipNetwork(e)?e.caipNetworkId:`${n.oU.CHAIN.EVM}:${e.id}`},getRpcUrl(e,t,r){const n=e.rpcUrls?.default?.http?.[0];return ce.includes(t)?function(e,t){const r=new URL("https://rpc.walletconnect.org/v1/");return r.searchParams.set("chainId",e),r.searchParams.set("projectId",t),r.toString()}(t,r):n||""},extendCaipNetwork(e,{customNetworkImageUrls:t,projectId:r}){const n=this.getCaipNetworkId(e),i=this.getChainNamespace(e),s=this.getRpcUrl(e,n,r);return{...e,chainNamespace:i,caipNetworkId:n,assets:{imageId:g.NetworkImageIds[e.id],imageUrl:t?.[e.id]},rpcUrls:{...e.rpcUrls,default:{http:[s]}}}},extendCaipNetworks(e,{customNetworkImageUrls:t,projectId:r}){return e.map((e=>le.extendCaipNetwork(e,{customNetworkImageUrls:t,projectId:r})))},getViemTransport(e){const t=e.rpcUrls.default.http?.[0];return ce.includes(e.caipNetworkId)?function(e,t={}){const{key:r="fallback",name:n="Fallback",rank:i=!1,retryCount:s,retryDelay:o}=t;return({chain:t,pollingInterval:a=4e3,timeout:c,...l})=>{let u=e,h=()=>{};const d=oe({key:r,name:n,async request({method:e,params:r}){const n=async(i=0)=>{const s=u[i]({...l,chain:t,retryCount:0,timeout:c});try{const t=await s.request({method:e,params:r});return h({method:e,params:r,response:t,transport:s,status:"success"}),t}catch(t){if(h({error:t,method:e,params:r,transport:s,status:"error"}),"code"in(o=t)&&"number"==typeof o.code&&(o.code===j.code||o.code===H.code||5e3===o.code))throw t;if(i===u.length-1)throw t;return n(i+1)}var o};return n()},retryCount:s,retryDelay:o,type:"fallback"},{onResponse:e=>h=e,transports:u.map((e=>e({chain:t,retryCount:0})))});if(i){const e="object"==typeof i?i:{};!function({chain:e,interval:t=4e3,onTransports:r,sampleCount:n=10,timeout:i=1e3,transports:s,weights:o={}}){const{stability:a=.7,latency:c=.3}=o,l=[],u=async()=>{const o=await Promise.all(s.map((async t=>{const r=t({chain:e,retryCount:0,timeout:i}),n=Date.now();let s,o;try{await r.request({method:"net_listening"}),o=1}catch{o=0}finally{s=Date.now()}return{latency:s-n,success:o}})));l.push(o),l.length>n&&l.shift();const h=Math.max(...l.map((e=>Math.max(...e.map((({latency:e})=>e)))))),d=s.map(((e,t)=>{const r=l.map((e=>e[t].latency)),n=1-r.reduce(((e,t)=>e+t),0)/r.length/h,i=l.map((e=>e[t].success)),s=i.reduce(((e,t)=>e+t),0)/i.length;return 0===s?[0,t]:[c*n+a*s,t]})).sort(((e,t)=>t[0]-e[0]));r(d.map((([,e])=>s[e]))),await ee(t),u()};u()}({chain:t,interval:e.interval??a,onTransports:e=>u=e,sampleCount:e.sampleCount,timeout:e.timeout,transports:u,weights:e.weights})}return d}}([ae(t,{fetchOptions:{headers:{"Content-Type":"text/plain"}}}),ae(t)]):ae(t)}};var ue,he;(he=ue||(ue={})).Google="google",he.Github="github",he.Apple="apple",he.Facebook="facebook",he.X="x",he.Discord="discord",he.Farcaster="farcaster";var de=i(37007),fe=i.n(de),pe=i(88900);class ge{}class me extends ge{constructor(e){super()}}const we=pe.FIVE_SECONDS,ye="heartbeat_pulse";class be extends me{constructor(e){super(e),this.events=new de.EventEmitter,this.interval=we,this.interval=e?.interval||we}static async init(e){const t=new be(e);return await t.init(),t}async init(){await this.initialize()}stop(){clearInterval(this.intervalRef)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async initialize(){this.intervalRef=setInterval((()=>this.pulse()),(0,pe.toMiliseconds)(this.interval))}pulse(){this.events.emit(ye)}}const ve=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Ae=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,xe=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Ee(e,t){if(!("__proto__"===e||"constructor"===e&&t&&"object"==typeof t&&"prototype"in t))return t;!function(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}(e)}function Ce(e,t={}){if("string"!=typeof e)return e;const r=e.trim();if('"'===e[0]&&e.endsWith('"')&&!e.includes("\\"))return r.slice(1,-1);if(r.length<=9){const e=r.toLowerCase();if("true"===e)return!0;if("false"===e)return!1;if("undefined"===e)return;if("null"===e)return null;if("nan"===e)return Number.NaN;if("infinity"===e)return Number.POSITIVE_INFINITY;if("-infinity"===e)return Number.NEGATIVE_INFINITY}if(!xe.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(ve.test(e)||Ae.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,Ee)}return JSON.parse(e)}catch(r){if(t.strict)throw r;return e}}function _e(e,...t){try{return(r=e(...t))&&"function"==typeof r.then?r:Promise.resolve(r)}catch(e){return Promise.reject(e)}var r}function ke(e){if(function(e){const t=typeof e;return null===e||"object"!==t&&"function"!==t}(e))return String(e);if(function(e){const t=Object.getPrototypeOf(e);return!t||t.isPrototypeOf(Object)}(e)||Array.isArray(e))return JSON.stringify(e);if("function"==typeof e.toJSON)return ke(e.toJSON());throw new Error("[unstorage] Cannot stringify value!")}function Se(){if("undefined"==typeof Buffer)throw new TypeError("[unstorage] Buffer is not supported!")}const Ie="base64:";function Te(e){return e?e.split("?")[0].replace(/[/\\]/g,":").replace(/:+/g,":").replace(/^:|:$/g,""):""}function Pe(...e){return Te(e.join(":"))}function Me(e){return(e=Te(e))?e+":":""}const Ne=()=>{const e=new Map;return{name:"memory",getInstance:()=>e,hasItem(t){return e.has(t)},getItem(t){return e.get(t)??null},getItemRaw(t){return e.get(t)??null},setItem(t,r){e.set(t,r)},setItemRaw(t,r){e.set(t,r)},removeItem(t){e.delete(t)},getKeys(){return[...e.keys()]},clear(){e.clear()},dispose(){e.clear()}}};function Re(e,t,r){return e.watch?e.watch(((e,n)=>t(e,r+n))):()=>{}}async function Oe(e){"function"==typeof e.dispose&&await _e(e.dispose)}function Be(e){return new Promise(((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)}))}function Le(e,t){const r=indexedDB.open(e);r.onupgradeneeded=()=>r.result.createObjectStore(t);const n=Be(r);return(e,r)=>n.then((n=>r(n.transaction(t,e).objectStore(t))))}let Ue;function De(){return Ue||(Ue=Le("keyval-store","keyval")),Ue}function je(e,t=De()){return t("readonly",(t=>Be(t.get(e))))}var Fe=i(13554),$e=(e={})=>{const t=e.base&&e.base.length>0?`${e.base}:`:"",r=e=>t+e;let n;return e.dbName&&e.storeName&&(n=Le(e.dbName,e.storeName)),{name:"idb-keyval",options:e,async hasItem(e){return!(typeof await je(r(e),n)>"u")},async getItem(e){return await je(r(e),n)??null},setItem(e,t){return function(e,t,r=De()){return r("readwrite",(r=>(r.put(t,e),Be(r.transaction))))}(r(e),t,n)},removeItem(e){return function(e,t=De()){return t("readwrite",(t=>(t.delete(e),Be(t.transaction))))}(r(e),n)},getKeys(){return function(e=De()){return e("readonly",(e=>{if(e.getAllKeys)return Be(e.getAllKeys());const t=[];return function(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},Be(e.transaction)}(e,(e=>t.push(e.key))).then((()=>t))}))}(n)},clear(){return function(e=De()){return e("readwrite",(e=>(e.clear(),Be(e.transaction))))}(n)}}};class qe{constructor(){this.indexedDb=function(e={}){const t={mounts:{"":e.driver||Ne()},mountpoints:[""],watching:!1,watchListeners:[],unwatch:{}},r=e=>{for(const r of t.mountpoints)if(e.startsWith(r))return{base:r,relativeKey:e.slice(r.length),driver:t.mounts[r]};return{base:"",relativeKey:e,driver:t.mounts[""]}},n=(e,r)=>t.mountpoints.filter((t=>t.startsWith(e)||r&&e.startsWith(t))).map((r=>({relativeBase:e.length>r.length?e.slice(r.length):void 0,mountpoint:r,driver:t.mounts[r]}))),i=(e,r)=>{if(t.watching){r=Te(r);for(const n of t.watchListeners)n(e,r)}},s=async()=>{if(t.watching){for(const e in t.unwatch)await t.unwatch[e]();t.unwatch={},t.watching=!1}},o=(e,t,n)=>{const i=new Map,s=e=>{let t=i.get(e.base);return t||(t={driver:e.driver,base:e.base,items:[]},i.set(e.base,t)),t};for(const n of e){const e="string"==typeof n,i=Te(e?n:n.key),o=e?void 0:n.value,a=e||!n.options?t:{...t,...n.options},c=r(i);s(c).items.push({key:i,value:o,relativeKey:c.relativeKey,options:a})}return Promise.all([...i.values()].map((e=>n(e)))).then((e=>e.flat()))},a={hasItem(e,t={}){e=Te(e);const{relativeKey:n,driver:i}=r(e);return _e(i.hasItem,n,t)},getItem(e,t={}){e=Te(e);const{relativeKey:n,driver:i}=r(e);return _e(i.getItem,n,t).then((e=>Ce(e)))},getItems(e,t){return o(e,t,(e=>e.driver.getItems?_e(e.driver.getItems,e.items.map((e=>({key:e.relativeKey,options:e.options}))),t).then((t=>t.map((t=>({key:Pe(e.base,t.key),value:Ce(t.value)}))))):Promise.all(e.items.map((t=>_e(e.driver.getItem,t.relativeKey,t.options).then((e=>({key:t.key,value:Ce(e)}))))))))},getItemRaw(e,t={}){e=Te(e);const{relativeKey:n,driver:i}=r(e);return i.getItemRaw?_e(i.getItemRaw,n,t):_e(i.getItem,n,t).then((e=>function(e){return"string"!=typeof e?e:e.startsWith(Ie)?(Se(),Buffer.from(e.slice(7),"base64")):e}(e)))},async setItem(e,t,n={}){if(void 0===t)return a.removeItem(e);e=Te(e);const{relativeKey:s,driver:o}=r(e);o.setItem&&(await _e(o.setItem,s,ke(t),n),o.watch||i("update",e))},async setItems(e,t){await o(e,t,(async e=>{if(e.driver.setItems)return _e(e.driver.setItems,e.items.map((e=>({key:e.relativeKey,value:ke(e.value),options:e.options}))),t);e.driver.setItem&&await Promise.all(e.items.map((t=>_e(e.driver.setItem,t.relativeKey,ke(t.value),t.options))))}))},async setItemRaw(e,t,n={}){if(void 0===t)return a.removeItem(e,n);e=Te(e);const{relativeKey:s,driver:o}=r(e);if(o.setItemRaw)await _e(o.setItemRaw,s,t,n);else{if(!o.setItem)return;await _e(o.setItem,s,function(e){if("string"==typeof e)return e;Se();const t=Buffer.from(e).toString("base64");return Ie+t}(t),n)}o.watch||i("update",e)},async removeItem(e,t={}){"boolean"==typeof t&&(t={removeMeta:t}),e=Te(e);const{relativeKey:n,driver:s}=r(e);s.removeItem&&(await _e(s.removeItem,n,t),(t.removeMeta||t.removeMata)&&await _e(s.removeItem,n+"$",t),s.watch||i("remove",e))},async getMeta(e,t={}){"boolean"==typeof t&&(t={nativeOnly:t}),e=Te(e);const{relativeKey:n,driver:i}=r(e),s=Object.create(null);if(i.getMeta&&Object.assign(s,await _e(i.getMeta,n,t)),!t.nativeOnly){const e=await _e(i.getItem,n+"$",t).then((e=>Ce(e)));e&&"object"==typeof e&&("string"==typeof e.atime&&(e.atime=new Date(e.atime)),"string"==typeof e.mtime&&(e.mtime=new Date(e.mtime)),Object.assign(s,e))}return s},setMeta(e,t,r={}){return this.setItem(e+"$",t,r)},removeMeta(e,t={}){return this.removeItem(e+"$",t)},async getKeys(e,t={}){e=Me(e);const r=n(e,!0);let i=[];const s=[];for(const e of r){const r=await _e(e.driver.getKeys,e.relativeBase,t);for(const t of r){const r=e.mountpoint+Te(t);i.some((e=>r.startsWith(e)))||s.push(r)}i=[e.mountpoint,...i.filter((t=>!t.startsWith(e.mountpoint)))]}return e?s.filter((t=>t.startsWith(e)&&"$"!==t[t.length-1])):s.filter((e=>"$"!==e[e.length-1]))},async clear(e,t={}){e=Me(e),await Promise.all(n(e,!1).map((async e=>{if(e.driver.clear)return _e(e.driver.clear,e.relativeBase,t);if(e.driver.removeItem){const r=await e.driver.getKeys(e.relativeBase||"",t);return Promise.all(r.map((r=>e.driver.removeItem(r,t))))}})))},async dispose(){await Promise.all(Object.values(t.mounts).map((e=>Oe(e))))},async watch(e){return await(async()=>{if(!t.watching){t.watching=!0;for(const e in t.mounts)t.unwatch[e]=await Re(t.mounts[e],i,e)}})(),t.watchListeners.push(e),async()=>{t.watchListeners=t.watchListeners.filter((t=>t!==e)),0===t.watchListeners.length&&await s()}},async unwatch(){t.watchListeners=[],await s()},mount(e,r){if((e=Me(e))&&t.mounts[e])throw new Error(`already mounted at ${e}`);return e&&(t.mountpoints.push(e),t.mountpoints.sort(((e,t)=>t.length-e.length))),t.mounts[e]=r,t.watching&&Promise.resolve(Re(r,i,e)).then((r=>{t.unwatch[e]=r})).catch(console.error),a},async unmount(e,r=!0){(e=Me(e))&&t.mounts[e]&&(t.watching&&e in t.unwatch&&(t.unwatch[e](),delete t.unwatch[e]),r&&await Oe(t.mounts[e]),t.mountpoints=t.mountpoints.filter((t=>t!==e)),delete t.mounts[e])},getMount(e=""){e=Te(e)+":";const t=r(e);return{driver:t.driver,base:t.base}},getMounts(e="",t={}){return e=Te(e),n(e,t.parents).map((e=>({driver:e.driver,base:e.mountpoint})))},keys:(e,t={})=>a.getKeys(e,t),get:(e,t={})=>a.getItem(e,t),set:(e,t,r={})=>a.setItem(e,t,r),has:(e,t={})=>a.hasItem(e,t),del:(e,t={})=>a.removeItem(e,t),remove:(e,t={})=>a.removeItem(e,t)};return a}({driver:$e({dbName:"WALLET_CONNECT_V2_INDEXED_DB",storeName:"keyvaluestorage"})})}async getKeys(){return this.indexedDb.getKeys()}async getEntries(){return(await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e=>[e.key,e.value]))}async getItem(e){const t=await this.indexedDb.getItem(e);if(null!==t)return t}async setItem(e,t){await this.indexedDb.setItem(e,(0,Fe.h)(t))}async removeItem(e){await this.indexedDb.removeItem(e)}}var He=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof i.g<"u"?i.g:typeof self<"u"?self:{},ze={exports:{}};function We(e){var t;return[e[0],(0,Fe.j)(null!=(t=e[1])?t:"")]}!function(){let e;function t(){}e=t,e.prototype.getItem=function(e){return this.hasOwnProperty(e)?String(this[e]):null},e.prototype.setItem=function(e,t){this[e]=String(t)},e.prototype.removeItem=function(e){delete this[e]},e.prototype.clear=function(){const e=this;Object.keys(e).forEach((function(t){e[t]=void 0,delete e[t]}))},e.prototype.key=function(e){return e=e||0,Object.keys(this)[e]},e.prototype.__defineGetter__("length",(function(){return Object.keys(this).length})),typeof He<"u"&&He.localStorage?ze.exports=He.localStorage:typeof window<"u"&&window.localStorage?ze.exports=window.localStorage:ze.exports=new t}();class Ve{constructor(){this.localStorage=ze.exports}async getKeys(){return Object.keys(this.localStorage)}async getEntries(){return Object.entries(this.localStorage).map(We)}async getItem(e){const t=this.localStorage.getItem(e);if(null!==t)return(0,Fe.j)(t)}async setItem(e,t){this.localStorage.setItem(e,(0,Fe.h)(t))}async removeItem(e){this.localStorage.removeItem(e)}}class Ge{constructor(){this.initialized=!1,this.setInitialized=e=>{this.storage=e,this.initialized=!0};const e=new Ve;this.storage=e;try{(async(e,t,r)=>{const n="wc_storage_version",i=await t.getItem(n);if(i&&i>=1)return void r(t);const s=await e.getKeys();if(!s.length)return void r(t);const o=[];for(;s.length;){const r=s.shift();if(!r)continue;const n=r.toLowerCase();if(n.includes("wc@")||n.includes("walletconnect")||n.includes("wc_")||n.includes("wallet_connect")){const n=await e.getItem(r);await t.setItem(r,n),o.push(r)}}await t.setItem(n,1),r(t),(async(e,t)=>{t.length&&t.forEach((async t=>{await e.removeItem(t)}))})(e,o)})(e,new qe,this.setInitialized)}catch{this.initialized=!0}}async getKeys(){return await this.initialize(),this.storage.getKeys()}async getEntries(){return await this.initialize(),this.storage.getEntries()}async getItem(e){return await this.initialize(),this.storage.getItem(e)}async setItem(e,t){return await this.initialize(),this.storage.setItem(e,t)}async removeItem(e){return await this.initialize(),this.storage.removeItem(e)}async initialize(){this.initialized||await new Promise((e=>{const t=setInterval((()=>{this.initialized&&(clearInterval(t),e())}),20)}))}}class Ze extends ge{constructor(e){super(),this.opts=e,this.protocol="wc",this.version=2}}class Ke extends ge{constructor(e,t){super(),this.core=e,this.logger=t,this.records=new Map}}class Je{constructor(e,t){this.logger=e,this.core=t}}class Qe extends ge{constructor(e,t){super(),this.relayer=e,this.logger=t}}class Ye extends ge{constructor(e){super()}}class Xe{constructor(e,t,r,n){this.core=e,this.logger=t,this.name=r}}class et extends ge{constructor(e,t){super(),this.relayer=e,this.logger=t}}class tt extends ge{constructor(e,t){super(),this.core=e,this.logger=t}}class rt{constructor(e,t,r){this.core=e,this.logger=t,this.store=r}}class nt{constructor(e,t){this.projectId=e,this.logger=t}}class it{constructor(e,t,r){this.core=e,this.logger=t,this.telemetryEnabled=r}}fe();class st{constructor(e){this.opts=e,this.protocol="wc",this.version=2}}de.EventEmitter;class ot{constructor(e){this.client=e}}var at=i(10106),ct=i(51619),lt=i(53155);const ut="PARSE_ERROR",ht="INVALID_REQUEST",dt="METHOD_NOT_FOUND",ft="INVALID_PARAMS",pt="INTERNAL_ERROR",gt="SERVER_ERROR",mt=[-32700,-32600,-32601,-32602,-32603],wt={[ut]:{code:-32700,message:"Parse error"},[ht]:{code:-32600,message:"Invalid Request"},[dt]:{code:-32601,message:"Method not found"},[ft]:{code:-32602,message:"Invalid params"},[pt]:{code:-32603,message:"Internal error"},[gt]:{code:-32e3,message:"Server error"}},yt=gt;function bt(e){return Object.keys(wt).includes(e)?wt[e]:wt[yt]}function vt(e,t,r){return e.message.includes("getaddrinfo ENOTFOUND")||e.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${r} RPC url at ${t}`):e}var At=i(25682);function xt(e=3){return Date.now()*Math.pow(10,e)+Math.floor(Math.random()*Math.pow(10,e))}function Et(e=6){return BigInt(xt(e))}function Ct(e,t,r){return{id:r||xt(),jsonrpc:"2.0",method:e,params:t}}function _t(e,t){return{id:e,jsonrpc:"2.0",result:t}}function kt(e,t,r){return{id:e,jsonrpc:"2.0",error:St(t,r)}}function St(e,t){return void 0===e?bt(pt):("string"==typeof e&&(e=Object.assign(Object.assign({},bt(gt)),{message:e})),void 0!==t&&(e.data=t),r=e.code,mt.includes(r)&&(e=function(e){return Object.values(wt).find((t=>t.code===e))||wt[yt]}(e.code)),e);var r}class It{}class Tt extends It{constructor(){super()}}class Pt extends Tt{constructor(e){super()}}function Mt(e,t){const r=function(e){const t=e.match(new RegExp(/^\w+:/,"gi"));if(t&&t.length)return t[0]}(e);return void 0!==r&&new RegExp(t).test(r)}function Nt(e){return Mt(e,"^https?:")}function Rt(e){return Mt(e,"^wss?:")}function Ot(e){return"object"==typeof e&&"id"in e&&"jsonrpc"in e&&"2.0"===e.jsonrpc}function Bt(e){return Ot(e)&&"method"in e}function Lt(e){return Ot(e)&&(Ut(e)||Dt(e))}function Ut(e){return"result"in e}function Dt(e){return"error"in e}class jt extends Pt{constructor(e){super(e),this.events=new de.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async request(e,t){return this.requestStrict(Ct(e.method,e.params||[],e.id||Et().toString()),t)}async requestStrict(e,t){return new Promise((async(r,n)=>{if(!this.connection.connected)try{await this.open()}catch(e){n(e)}this.events.on(`${e.id}`,(e=>{Dt(e)?n(e.error):r(e.result)}));try{await this.connection.send(e,t)}catch(e){n(e)}}))}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),Lt(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}onClose(e){e&&3e3===e.code&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)),this.events.emit("disconnect")}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),"string"==typeof e&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",(e=>this.onPayload(e))),this.connection.on("close",(e=>this.onClose(e))),this.connection.on("error",(e=>this.events.emit("error",e))),this.connection.on("register_error",(e=>this.onClose())),this.hasRegisteredEventListeners=!0)}}const Ft=e=>e.split("?")[0],$t=typeof WebSocket<"u"?WebSocket:typeof i.g<"u"&&typeof i.g.WebSocket<"u"?i.g.WebSocket:typeof window<"u"&&typeof window.WebSocket<"u"?window.WebSocket:typeof self<"u"&&typeof self.WebSocket<"u"?self.WebSocket:i(51591);class qt{constructor(e){if(this.url=e,this.events=new de.EventEmitter,this.registering=!1,!Rt(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);this.url=e}get connected(){return typeof this.socket<"u"}get connecting(){return this.registering}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async open(e=this.url){await this.register(e)}async close(){return new Promise(((e,t)=>{typeof this.socket>"u"?t(new Error("Connection already closed")):(this.socket.onclose=t=>{this.onClose(t),e()},this.socket.close())}))}async send(e){typeof this.socket>"u"&&(this.socket=await this.register());try{this.socket.send((0,Fe.h)(e))}catch(t){this.onError(e.id,t)}}register(e=this.url){if(!Rt(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);if(this.registering){const e=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=e||this.events.listenerCount("open")>=e)&&this.events.setMaxListeners(e+1),new Promise(((e,t)=>{this.events.once("register_error",(e=>{this.resetMaxListeners(),t(e)})),this.events.once("open",(()=>{if(this.resetMaxListeners(),typeof this.socket>"u")return t(new Error("WebSocket connection is missing or invalid"));e(this.socket)}))}))}return this.url=e,this.registering=!0,new Promise(((t,r)=>{const n=new URLSearchParams(e).get("origin"),s=(0,At.isReactNative)()?{headers:{origin:n}}:{rejectUnauthorized:(a=e,!new RegExp("wss?://localhost(:d{2,5})?").test(a))},o=new $t(e,[],s);var a;typeof WebSocket<"u"||typeof i.g<"u"&&typeof i.g.WebSocket<"u"||typeof window<"u"&&typeof window.WebSocket<"u"||typeof self<"u"&&typeof self.WebSocket<"u"?o.onerror=e=>{const t=e;r(this.emitError(t.error))}:o.on("error",(e=>{r(this.emitError(e))})),o.onopen=()=>{this.onOpen(o),t(o)}}))}onOpen(e){e.onmessage=e=>this.onPayload(e),e.onclose=e=>this.onClose(e),this.socket=e,this.registering=!1,this.events.emit("open")}onClose(e){this.socket=void 0,this.registering=!1,this.events.emit("close",e)}onPayload(e){if(typeof e.data>"u")return;const t="string"==typeof e.data?(0,Fe.j)(e.data):e.data;this.events.emit("payload",t)}onError(e,t){const r=this.parseError(t),n=kt(e,r.message||r.toString());this.events.emit("payload",n)}parseError(e,t=this.url){return vt(e,Ft(t),"WS")}resetMaxListeners(){this.events.getMaxListeners()>10&&this.events.setMaxListeners(10)}emitError(e){const t=this.parseError(new Error(e?.message||`WebSocket connection failed for host: ${Ft(this.url)}`));return this.events.emit("register_error",t),t}}var Ht=i(8142),zt=i.n(Ht);const Wt="core",Vt=`wc@2:${Wt}:`,Gt={database:":memory:"},Zt="client_ed25519_seed",Kt=pe.ONE_DAY,Jt=pe.SIX_HOURS,Qt="wss://relay.walletconnect.org",Yt="relayer_message",Xt="relayer_message_ack",er="relayer_connection_stalled",tr="relayer_publish",rr="payload",nr="connect",ir="disconnect",sr="error",or="2.17.0",ar={link_mode:"link_mode",relay:"relay"},cr="WALLETCONNECT_LINK_MODE_APPS",lr="subscription_created",ur="subscription_deleted",hr=1e3*pe.FIVE_SECONDS,dr={wc_pairingDelete:{req:{ttl:pe.ONE_DAY,prompt:!1,tag:1e3},res:{ttl:pe.ONE_DAY,prompt:!1,tag:1001}},wc_pairingPing:{req:{ttl:pe.THIRTY_SECONDS,prompt:!1,tag:1002},res:{ttl:pe.THIRTY_SECONDS,prompt:!1,tag:1003}},unregistered_method:{req:{ttl:pe.ONE_DAY,prompt:!1,tag:0},res:{ttl:pe.ONE_DAY,prompt:!1,tag:0}}},fr="pairing_create",pr="pairing_delete",gr="history_created",mr="history_updated",wr="history_deleted",yr="expirer_created",br="expirer_deleted",vr="expirer_expired",Ar="https://verify.walletconnect.org",xr=Ar,Er=`${xr}/v3`,Cr=["https://verify.walletconnect.com",Ar],_r="malformed_pairing_uri",kr="session_approve_started";var Sr=function(e,t){if(e.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var i=0;i<e.length;i++){var s=e.charAt(i),o=s.charCodeAt(0);if(255!==r[o])throw new TypeError(s+" is ambiguous");r[o]=i}var a=e.length,c=e.charAt(0),l=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function h(e){if("string"!=typeof e)throw new TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[t]){for(var n=0,i=0;e[t]===c;)n++,t++;for(var s=(e.length-t)*l+1>>>0,o=new Uint8Array(s);e[t];){var u=r[e.charCodeAt(t)];if(255===u)return;for(var h=0,d=s-1;(0!==u||h<i)&&-1!==d;d--,h++)u+=a*o[d]>>>0,o[d]=u%256>>>0,u=u/256>>>0;if(0!==u)throw new Error("Non-zero carry");i=h,t++}if(" "!==e[t]){for(var f=s-i;f!==s&&0===o[f];)f++;for(var p=new Uint8Array(n+(s-f)),g=n;f!==s;)p[g++]=o[f++];return p}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===t.length)return"";for(var r=0,n=0,i=0,s=t.length;i!==s&&0===t[i];)i++,r++;for(var o=(s-i)*u+1>>>0,l=new Uint8Array(o);i!==s;){for(var h=t[i],d=0,f=o-1;(0!==h||d<n)&&-1!==f;f--,d++)h+=256*l[f]>>>0,l[f]=h%a>>>0,h=h/a>>>0;if(0!==h)throw new Error("Non-zero carry");n=d,i++}for(var p=o-n;p!==o&&0===l[p];)p++;for(var g=c.repeat(r);p<o;++p)g+=e.charAt(l[p]);return g},decodeUnsafe:h,decode:function(e){var r=h(e);if(r)return r;throw new Error(`Non-${t} character`)}}};const Ir=e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Unknown type, must be binary type")};class Tr{constructor(e,t,r){this.name=e,this.prefix=t,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class Pr{constructor(e,t,r){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw new Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=r}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return Nr(this,e)}}class Mr{constructor(e){this.decoders=e}or(e){return Nr(this,e)}decode(e){const t=e[0],r=this.decoders[t];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const Nr=(e,t)=>new Mr({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class Rr{constructor(e,t,r,n){this.name=e,this.prefix=t,this.baseEncode=r,this.baseDecode=n,this.encoder=new Tr(e,t,r),this.decoder=new Pr(e,t,n)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const Or=({name:e,prefix:t,encode:r,decode:n})=>new Rr(e,t,r,n),Br=({prefix:e,name:t,alphabet:r})=>{const{encode:n,decode:i}=Sr(r,t);return Or({prefix:e,name:t,encode:n,decode:e=>Ir(i(e))})},Lr=({name:e,prefix:t,bitsPerChar:r,alphabet:n})=>Or({prefix:t,name:e,encode(e){return((e,t,r)=>{const n="="===t[t.length-1],i=(1<<r)-1;let s="",o=0,a=0;for(let n=0;n<e.length;++n)for(a=a<<8|e[n],o+=8;o>r;)o-=r,s+=t[i&a>>o];if(o&&(s+=t[i&a<<r-o]),n)for(;s.length*r&7;)s+="=";return s})(e,n,r)},decode(t){return((e,t,r,n)=>{const i={};for(let e=0;e<t.length;++e)i[t[e]]=e;let s=e.length;for(;"="===e[s-1];)--s;const o=new Uint8Array(s*r/8|0);let a=0,c=0,l=0;for(let t=0;t<s;++t){const s=i[e[t]];if(void 0===s)throw new SyntaxError(`Non-${n} character`);c=c<<r|s,a+=r,a>=8&&(a-=8,o[l++]=255&c>>a)}if(a>=r||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return o})(t,n,r,e)}}),Ur=Or({prefix:"\0",name:"identity",encode:e=>(e=>(new TextDecoder).decode(e))(e),decode:e=>(e=>(new TextEncoder).encode(e))(e)});var Dr=Object.freeze({__proto__:null,identity:Ur});const jr=Lr({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1});var Fr=Object.freeze({__proto__:null,base2:jr});const $r=Lr({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3});var qr=Object.freeze({__proto__:null,base8:$r});const Hr=Br({prefix:"9",name:"base10",alphabet:"0123456789"});var zr=Object.freeze({__proto__:null,base10:Hr});const Wr=Lr({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),Vr=Lr({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});var Gr=Object.freeze({__proto__:null,base16:Wr,base16upper:Vr});const Zr=Lr({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),Kr=Lr({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),Jr=Lr({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),Qr=Lr({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),Yr=Lr({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),Xr=Lr({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),en=Lr({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),tn=Lr({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),rn=Lr({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});var nn=Object.freeze({__proto__:null,base32:Zr,base32upper:Kr,base32pad:Jr,base32padupper:Qr,base32hex:Yr,base32hexupper:Xr,base32hexpad:en,base32hexpadupper:tn,base32z:rn});const sn=Br({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),on=Br({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});var an=Object.freeze({__proto__:null,base36:sn,base36upper:on});const cn=Br({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),ln=Br({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});var un=Object.freeze({__proto__:null,base58btc:cn,base58flickr:ln});const hn=Lr({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),dn=Lr({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),fn=Lr({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),pn=Lr({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});var gn=Object.freeze({__proto__:null,base64:hn,base64pad:dn,base64url:fn,base64urlpad:pn});const mn=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),wn=mn.reduce(((e,t,r)=>(e[r]=t,e)),[]),yn=mn.reduce(((e,t,r)=>(e[t.codePointAt(0)]=r,e)),[]),bn=Or({prefix:"🚀",name:"base256emoji",encode:function(e){return e.reduce(((e,t)=>e+wn[t]),"")},decode:function(e){const t=[];for(const r of e){const e=yn[r.codePointAt(0)];if(void 0===e)throw new Error(`Non-base256emoji character: ${r}`);t.push(e)}return new Uint8Array(t)}});var vn=Object.freeze({__proto__:null,base256emoji:bn}),An=128,xn=-128,En=Math.pow(2,31),Cn=Math.pow(2,7),_n=Math.pow(2,14),kn=Math.pow(2,21),Sn=Math.pow(2,28),In=Math.pow(2,35),Tn=Math.pow(2,42),Pn=Math.pow(2,49),Mn=Math.pow(2,56),Nn=Math.pow(2,63),Rn=function e(t,r,n){r=r||[];for(var i=n=n||0;t>=En;)r[n++]=255&t|An,t/=128;for(;t&xn;)r[n++]=255&t|An,t>>>=7;return r[n]=0|t,e.bytes=n-i+1,r},On=function(e){return e<Cn?1:e<_n?2:e<kn?3:e<Sn?4:e<In?5:e<Tn?6:e<Pn?7:e<Mn?8:e<Nn?9:10};const Bn=(e,t,r=0)=>(Rn(e,t,r),t),Ln=e=>On(e),Un=(e,t)=>{const r=t.byteLength,n=Ln(e),i=n+Ln(r),s=new Uint8Array(i+r);return Bn(e,s,0),Bn(r,s,n),s.set(t,i),new Dn(e,r,t,s)};class Dn{constructor(e,t,r,n){this.code=e,this.size=t,this.digest=r,this.bytes=n}}const jn=({name:e,code:t,encode:r})=>new Fn(e,t,r);class Fn{constructor(e,t,r){this.name=e,this.code=t,this.encode=r}digest(e){if(e instanceof Uint8Array){const t=this.encode(e);return t instanceof Uint8Array?Un(this.code,t):t.then((e=>Un(this.code,e)))}throw Error("Unknown type, must be binary type")}}const $n=e=>async t=>new Uint8Array(await crypto.subtle.digest(e,t)),qn=jn({name:"sha2-256",code:18,encode:$n("SHA-256")}),Hn=jn({name:"sha2-512",code:19,encode:$n("SHA-512")});Object.freeze({__proto__:null,sha256:qn,sha512:Hn});const zn=Ir,Wn={code:0,name:"identity",encode:zn,digest:e=>Un(0,zn(e))};Object.freeze({__proto__:null,identity:Wn}),new TextEncoder,new TextDecoder;const Vn={...Dr,...Fr,...qr,...zr,...Gr,...nn,...an,...un,...gn,...vn};function Gn(e,t,r,n){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:r},decoder:{decode:n}}}const Zn=Gn("utf8","u",(e=>"u"+new TextDecoder("utf8").decode(e)),(e=>(new TextEncoder).encode(e.substring(1)))),Kn=Gn("ascii","a",(e=>{let t="a";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t}),(e=>{const t=function(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?globalThis.Buffer.allocUnsafe(e):new Uint8Array(e)}((e=e.substring(1)).length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t})),Jn={utf8:Zn,"utf-8":Zn,hex:Vn.base16,latin1:Kn,ascii:Kn,binary:Kn,...Vn};class Qn{constructor(e,t){this.core=e,this.logger=t,this.keychain=new Map,this.name="keychain",this.version="0.3",this.initialized=!1,this.storagePrefix=Vt,this.init=async()=>{if(!this.initialized){const e=await this.getKeyChain();typeof e<"u"&&(this.keychain=e),this.initialized=!0}},this.has=e=>(this.isInitialized(),this.keychain.has(e)),this.set=async(e,t)=>{this.isInitialized(),this.keychain.set(e,t),await this.persist()},this.get=e=>{this.isInitialized();const t=this.keychain.get(e);if(typeof t>"u"){const{message:t}=(0,ct.GuA)("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(t)}return t},this.del=async e=>{this.isInitialized(),this.keychain.delete(e),await this.persist()},this.core=e,this.logger=(0,b.U5)(t,this.name)}get context(){return(0,b.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setKeyChain(e){await this.core.storage.setItem(this.storageKey,(0,ct.h0Y)(e))}async getKeyChain(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?(0,ct.PUk)(e):void 0}async persist(){await this.setKeyChain(this.keychain)}isInitialized(){if(!this.initialized){const{message:e}=(0,ct.GuA)("NOT_INITIALIZED",this.name);throw new Error(e)}}}class Yn{constructor(e,t,r){this.core=e,this.logger=t,this.name="crypto",this.randomSessionIdentifier=(0,ct.two)(),this.initialized=!1,this.init=async()=>{this.initialized||(await this.keychain.init(),this.initialized=!0)},this.hasKeys=e=>(this.isInitialized(),this.keychain.has(e)),this.getClientId=async()=>{this.isInitialized();const e=await this.getClientSeed(),t=at.generateKeyPair(e);return at.encodeIss(t.publicKey)},this.generateKeyPair=()=>{this.isInitialized();const e=(0,ct.TZl)();return this.setPrivateKey(e.publicKey,e.privateKey)},this.signJWT=async e=>{this.isInitialized();const t=await this.getClientSeed(),r=at.generateKeyPair(t),n=this.randomSessionIdentifier,i=Kt;return await at.signJWT(n,e,i,r)},this.generateSharedKey=(e,t,r)=>{this.isInitialized();const n=this.getPrivateKey(e),i=(0,ct.ovp)(n,t);return this.setSymKey(i,r)},this.setSymKey=async(e,t)=>{this.isInitialized();const r=t||(0,ct.EN$)(e);return await this.keychain.set(r,e),r},this.deleteKeyPair=async e=>{this.isInitialized(),await this.keychain.del(e)},this.deleteSymKey=async e=>{this.isInitialized(),await this.keychain.del(e)},this.encode=async(e,t,r)=>{this.isInitialized();const n=(0,ct.AwN)(r),i=(0,Fe.h)(t);if((0,ct.ps1)(n))return(0,ct.Tw2)(i,r?.encoding);if((0,ct.V7m)(n)){const t=n.senderPublicKey,r=n.receiverPublicKey;e=await this.generateSharedKey(t,r)}const s=this.getSymKey(e),{type:o,senderPublicKey:a}=n;return(0,ct.wa2)({type:o,symKey:s,message:i,senderPublicKey:a,encoding:r?.encoding})},this.decode=async(e,t,r)=>{this.isInitialized();const n=(0,ct.C5G)(t,r);if((0,ct.ps1)(n)){const e=(0,ct.F$L)(t,r?.encoding);return(0,Fe.j)(e)}if((0,ct.V7m)(n)){const t=n.receiverPublicKey,r=n.senderPublicKey;e=await this.generateSharedKey(t,r)}try{const n=this.getSymKey(e),i=(0,ct.YcA)({symKey:n,encoded:t,encoding:r?.encoding});return(0,Fe.j)(i)}catch(t){this.logger.error(`Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`),this.logger.error(t)}},this.getPayloadType=(e,t=ct.EWt)=>{const r=(0,ct.iui)({encoded:e,encoding:t});return(0,ct.x0t)(r.type)},this.getPayloadSenderPublicKey=(e,t=ct.EWt)=>{const r=(0,ct.iui)({encoded:e,encoding:t});return r.senderPublicKey?(0,lt.dI)(r.senderPublicKey,ct.bEt):void 0},this.core=e,this.logger=(0,b.U5)(t,this.name),this.keychain=r||new Qn(this.core,this.logger)}get context(){return(0,b.oI)(this.logger)}async setPrivateKey(e,t){return await this.keychain.set(e,t),e}getPrivateKey(e){return this.keychain.get(e)}async getClientSeed(){let e="";try{e=this.keychain.get(Zt)}catch{e=(0,ct.two)(),await this.keychain.set(Zt,e)}return function(e,t="utf8"){const r=Jn[t];if(!r)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?r.decoder.decode(`${r.prefix}${e}`):globalThis.Buffer.from(e,"utf8")}(e,"base16")}getSymKey(e){return this.keychain.get(e)}isInitialized(){if(!this.initialized){const{message:e}=(0,ct.GuA)("NOT_INITIALIZED",this.name);throw new Error(e)}}}class Xn extends Je{constructor(e,t){super(e,t),this.logger=e,this.core=t,this.messages=new Map,this.name="messages",this.version="0.3",this.initialized=!1,this.storagePrefix=Vt,this.init=async()=>{if(!this.initialized){this.logger.trace("Initialized");try{const e=await this.getRelayerMessages();typeof e<"u"&&(this.messages=e),this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",size:this.messages.size})}catch(e){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(e)}finally{this.initialized=!0}}},this.set=async(e,t)=>{this.isInitialized();const r=(0,ct.ALl)(t);let n=this.messages.get(e);return typeof n>"u"&&(n={}),typeof n[r]<"u"||(n[r]=t,this.messages.set(e,n),await this.persist()),r},this.get=e=>{this.isInitialized();let t=this.messages.get(e);return typeof t>"u"&&(t={}),t},this.has=(e,t)=>(this.isInitialized(),typeof this.get(e)[(0,ct.ALl)(t)]<"u"),this.del=async e=>{this.isInitialized(),this.messages.delete(e),await this.persist()},this.logger=(0,b.U5)(e,this.name),this.core=t}get context(){return(0,b.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setRelayerMessages(e){await this.core.storage.setItem(this.storageKey,(0,ct.h0Y)(e))}async getRelayerMessages(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?(0,ct.PUk)(e):void 0}async persist(){await this.setRelayerMessages(this.messages)}isInitialized(){if(!this.initialized){const{message:e}=(0,ct.GuA)("NOT_INITIALIZED",this.name);throw new Error(e)}}}class ei extends Qe{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,this.events=new de.EventEmitter,this.name="publisher",this.queue=new Map,this.publishTimeout=(0,pe.toMiliseconds)(pe.ONE_MINUTE),this.failedPublishTimeout=(0,pe.toMiliseconds)(pe.ONE_SECOND),this.needsTransportRestart=!1,this.publish=async(e,t,r)=>{var n;this.logger.debug("Publishing Payload"),this.logger.trace({type:"method",method:"publish",params:{topic:e,message:t,opts:r}});const i=r?.ttl||Jt,s=(0,ct.n6V)(r),o=r?.prompt||!1,a=r?.tag||0,c=r?.id||Et().toString(),l={topic:e,message:t,opts:{ttl:i,relay:s,prompt:o,tag:a,id:c,attestation:r?.attestation}},u=`Failed to publish payload, please try again. id:${c} tag:${a}`,h=Date.now();let d,f=1;try{for(;void 0===d;){if(Date.now()-h>this.publishTimeout)throw new Error(u);this.logger.trace({id:c,attempts:f},`publisher.publish - attempt ${f}`),d=await await(0,ct.K3g)(this.rpcPublish(e,t,i,s,o,a,c,r?.attestation).catch((e=>this.logger.warn(e))),this.publishTimeout,u),f++,d||await new Promise((e=>setTimeout(e,this.failedPublishTimeout)))}this.relayer.events.emit(tr,l),this.logger.debug("Successfully Published Payload"),this.logger.trace({type:"method",method:"publish",params:{id:c,topic:e,message:t,opts:r}})}catch(e){if(this.logger.debug("Failed to Publish Payload"),this.logger.error(e),null!=(n=r?.internal)&&n.throwOnFailedPublish)throw e;this.queue.set(c,l)}},this.on=(e,t)=>{this.events.on(e,t)},this.once=(e,t)=>{this.events.once(e,t)},this.off=(e,t)=>{this.events.off(e,t)},this.removeListener=(e,t)=>{this.events.removeListener(e,t)},this.relayer=e,this.logger=(0,b.U5)(t,this.name),this.registerEventListeners()}get context(){return(0,b.oI)(this.logger)}rpcPublish(e,t,r,n,i,s,o,a){var c,l,u,h;const d={method:(0,ct.aa1)(n.protocol).publish,params:{topic:e,message:t,ttl:r,prompt:i,tag:s,attestation:a},id:o};return(0,ct.b07)(null==(c=d.params)?void 0:c.prompt)&&(null==(l=d.params)||delete l.prompt),(0,ct.b07)(null==(u=d.params)?void 0:u.tag)&&(null==(h=d.params)||delete h.tag),this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"message",direction:"outgoing",request:d}),this.relayer.request(d)}removeRequestFromQueue(e){this.queue.delete(e)}checkQueue(){this.queue.forEach((async e=>{const{topic:t,message:r,opts:n}=e;await this.publish(t,r,n)}))}registerEventListeners(){this.relayer.core.heartbeat.on(ye,(()=>{if(this.needsTransportRestart)return this.needsTransportRestart=!1,void this.relayer.events.emit(er);this.checkQueue()})),this.relayer.on(Xt,(e=>{this.removeRequestFromQueue(e.id.toString())}))}}class ti{constructor(){this.map=new Map,this.set=(e,t)=>{const r=this.get(e);this.exists(e,t)||this.map.set(e,[...r,t])},this.get=e=>this.map.get(e)||[],this.exists=(e,t)=>this.get(e).includes(t),this.delete=(e,t)=>{if(typeof t>"u")return void this.map.delete(e);if(!this.map.has(e))return;const r=this.get(e);if(!this.exists(e,t))return;const n=r.filter((e=>e!==t));n.length?this.map.set(e,n):this.map.delete(e)},this.clear=()=>{this.map.clear()}}get topics(){return Array.from(this.map.keys())}}var ri=Object.defineProperty,ni=Object.defineProperties,ii=Object.getOwnPropertyDescriptors,si=Object.getOwnPropertySymbols,oi=Object.prototype.hasOwnProperty,ai=Object.prototype.propertyIsEnumerable,ci=(e,t,r)=>t in e?ri(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,li=(e,t)=>{for(var r in t||(t={}))oi.call(t,r)&&ci(e,r,t[r]);if(si)for(var r of si(t))ai.call(t,r)&&ci(e,r,t[r]);return e},ui=(e,t)=>ni(e,ii(t));class hi extends et{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,this.subscriptions=new Map,this.topicMap=new ti,this.events=new de.EventEmitter,this.name="subscription",this.version="0.3",this.pending=new Map,this.cached=[],this.initialized=!1,this.pendingSubscriptionWatchLabel="pending_sub_watch_label",this.pollingInterval=20,this.storagePrefix=Vt,this.subscribeTimeout=(0,pe.toMiliseconds)(pe.ONE_MINUTE),this.restartInProgress=!1,this.batchSubscribeTopicsLimit=500,this.pendingBatchMessages=[],this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),this.registerEventListeners(),this.clientId=await this.relayer.core.crypto.getClientId(),await this.restore()),this.initialized=!0},this.subscribe=async(e,t)=>{this.isInitialized(),this.logger.debug("Subscribing Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:e,opts:t}});try{const r=(0,ct.n6V)(t),n={topic:e,relay:r,transportType:t?.transportType};this.pending.set(e,n);const i=await this.rpcSubscribe(e,r,t?.transportType);return"string"==typeof i&&(this.onSubscribe(i,n),this.logger.debug("Successfully Subscribed Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:e,opts:t}})),i}catch(e){throw this.logger.debug("Failed to Subscribe Topic"),this.logger.error(e),e}},this.unsubscribe=async(e,t)=>{await this.restartToComplete(),this.isInitialized(),typeof t?.id<"u"?await this.unsubscribeById(e,t.id,t):await this.unsubscribeByTopic(e,t)},this.isSubscribed=async e=>{if(this.topics.includes(e))return!0;const t=`${this.pendingSubscriptionWatchLabel}_${e}`;return await new Promise(((r,n)=>{const i=new pe.Watch;i.start(t);const s=setInterval((()=>{!this.pending.has(e)&&this.topics.includes(e)&&(clearInterval(s),i.stop(t),r(!0)),i.elapsed(t)>=hr&&(clearInterval(s),i.stop(t),n(new Error("Subscription resolution timeout")))}),this.pollingInterval)})).catch((()=>!1))},this.on=(e,t)=>{this.events.on(e,t)},this.once=(e,t)=>{this.events.once(e,t)},this.off=(e,t)=>{this.events.off(e,t)},this.removeListener=(e,t)=>{this.events.removeListener(e,t)},this.start=async()=>{await this.onConnect()},this.stop=async()=>{await this.onDisconnect()},this.restart=async()=>{this.restartInProgress=!0,await this.restore(),await this.reset(),this.restartInProgress=!1},this.relayer=e,this.logger=(0,b.U5)(t,this.name),this.clientId=""}get context(){return(0,b.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.relayer.core.customStoragePrefix+"//"+this.name}get length(){return this.subscriptions.size}get ids(){return Array.from(this.subscriptions.keys())}get values(){return Array.from(this.subscriptions.values())}get topics(){return this.topicMap.topics}hasSubscription(e,t){let r=!1;try{r=this.getSubscription(e).topic===t}catch{}return r}onEnable(){this.cached=[],this.initialized=!0}onDisable(){this.cached=this.values,this.subscriptions.clear(),this.topicMap.clear()}async unsubscribeByTopic(e,t){const r=this.topicMap.get(e);await Promise.all(r.map((async r=>await this.unsubscribeById(e,r,t))))}async unsubscribeById(e,t,r){this.logger.debug("Unsubscribing Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:r}});try{const n=(0,ct.n6V)(r);await this.rpcUnsubscribe(e,t,n);const i=(0,ct.Hjj)("USER_DISCONNECTED",`${this.name}, ${e}`);await this.onUnsubscribe(e,t,i),this.logger.debug("Successfully Unsubscribed Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:r}})}catch(e){throw this.logger.debug("Failed to Unsubscribe Topic"),this.logger.error(e),e}}async rpcSubscribe(e,t,r=ar.relay){r===ar.relay&&await this.restartToComplete();const n={method:(0,ct.aa1)(t.protocol).subscribe,params:{topic:e}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:n});try{const t=(0,ct.ALl)(e+this.clientId);return r===ar.link_mode?(setTimeout((()=>{(this.relayer.connected||this.relayer.connecting)&&this.relayer.request(n).catch((e=>this.logger.warn(e)))}),(0,pe.toMiliseconds)(pe.ONE_SECOND)),t):await await(0,ct.K3g)(this.relayer.request(n).catch((e=>this.logger.warn(e))),this.subscribeTimeout)?t:null}catch{this.logger.debug("Outgoing Relay Subscribe Payload stalled"),this.relayer.events.emit(er)}return null}async rpcBatchSubscribe(e){if(!e.length)return;const t=e[0].relay,r={method:(0,ct.aa1)(t.protocol).batchSubscribe,params:{topics:e.map((e=>e.topic))}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:r});try{return await await(0,ct.K3g)(this.relayer.request(r).catch((e=>this.logger.warn(e))),this.subscribeTimeout)}catch{this.relayer.events.emit(er)}}async rpcBatchFetchMessages(e){if(!e.length)return;const t=e[0].relay,r={method:(0,ct.aa1)(t.protocol).batchFetchMessages,params:{topics:e.map((e=>e.topic))}};let n;this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:r});try{n=await await(0,ct.K3g)(this.relayer.request(r).catch((e=>this.logger.warn(e))),this.subscribeTimeout)}catch{this.relayer.events.emit(er)}return n}rpcUnsubscribe(e,t,r){const n={method:(0,ct.aa1)(r.protocol).unsubscribe,params:{topic:e,id:t}};return this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:n}),this.relayer.request(n)}onSubscribe(e,t){this.setSubscription(e,ui(li({},t),{id:e})),this.pending.delete(t.topic)}onBatchSubscribe(e){e.length&&e.forEach((e=>{this.setSubscription(e.id,li({},e)),this.pending.delete(e.topic)}))}async onUnsubscribe(e,t,r){this.events.removeAllListeners(t),this.hasSubscription(t,e)&&this.deleteSubscription(t,r),await this.relayer.messages.del(e)}async setRelayerSubscriptions(e){await this.relayer.core.storage.setItem(this.storageKey,e)}async getRelayerSubscriptions(){return await this.relayer.core.storage.getItem(this.storageKey)}setSubscription(e,t){this.logger.debug("Setting subscription"),this.logger.trace({type:"method",method:"setSubscription",id:e,subscription:t}),this.addSubscription(e,t)}addSubscription(e,t){this.subscriptions.set(e,li({},t)),this.topicMap.set(t.topic,e),this.events.emit(lr,t)}getSubscription(e){this.logger.debug("Getting subscription"),this.logger.trace({type:"method",method:"getSubscription",id:e});const t=this.subscriptions.get(e);if(!t){const{message:t}=(0,ct.GuA)("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(t)}return t}deleteSubscription(e,t){this.logger.debug("Deleting subscription"),this.logger.trace({type:"method",method:"deleteSubscription",id:e,reason:t});const r=this.getSubscription(e);this.subscriptions.delete(e),this.topicMap.delete(r.topic,e),this.events.emit(ur,ui(li({},r),{reason:t}))}async persist(){await this.setRelayerSubscriptions(this.values),this.events.emit("subscription_sync")}async reset(){if(this.cached.length){const e=Math.ceil(this.cached.length/this.batchSubscribeTopicsLimit);for(let t=0;t<e;t++){const e=this.cached.splice(0,this.batchSubscribeTopicsLimit);await this.batchFetchMessages(e),await this.batchSubscribe(e)}}this.events.emit("subscription_resubscribed")}async restore(){try{const e=await this.getRelayerSubscriptions();if(typeof e>"u"||!e.length)return;if(this.subscriptions.size){const{message:e}=(0,ct.GuA)("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(e),this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),new Error(e)}this.cached=e,this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),this.logger.trace({type:"method",method:"restore",subscriptions:this.values})}catch(e){this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),this.logger.error(e)}}async batchSubscribe(e){if(!e.length)return;const t=await this.rpcBatchSubscribe(e);(0,ct.OP1)(t)&&this.onBatchSubscribe(t.map(((t,r)=>ui(li({},e[r]),{id:t}))))}async batchFetchMessages(e){if(!e.length)return;this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);const t=await this.rpcBatchFetchMessages(e);t&&t.messages&&(this.pendingBatchMessages=this.pendingBatchMessages.concat(t.messages))}async onConnect(){await this.restart(),this.onEnable()}onDisconnect(){this.onDisable()}async checkPending(){if(!this.initialized||!this.relayer.connected)return;const e=[];this.pending.forEach((t=>{e.push(t)})),await this.batchSubscribe(e),this.pendingBatchMessages.length&&(await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages),this.pendingBatchMessages=[])}registerEventListeners(){this.relayer.core.heartbeat.on(ye,(async()=>{await this.checkPending()})),this.events.on(lr,(async e=>{const t=lr;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),await this.persist()})),this.events.on(ur,(async e=>{const t=ur;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),await this.persist()}))}isInitialized(){if(!this.initialized){const{message:e}=(0,ct.GuA)("NOT_INITIALIZED",this.name);throw new Error(e)}}async restartToComplete(){!this.relayer.connected&&!this.relayer.connecting&&await this.relayer.transportOpen(),this.restartInProgress&&await new Promise((e=>{const t=setInterval((()=>{this.restartInProgress||(clearInterval(t),e())}),this.pollingInterval)}))}}var di=Object.defineProperty,fi=Object.getOwnPropertySymbols,pi=Object.prototype.hasOwnProperty,gi=Object.prototype.propertyIsEnumerable,mi=(e,t,r)=>t in e?di(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;class wi extends Ye{constructor(e){super(e),this.protocol="wc",this.version=2,this.events=new de.EventEmitter,this.name="relayer",this.transportExplicitlyClosed=!1,this.initialized=!1,this.connectionAttemptInProgress=!1,this.connectionStatusPollingInterval=20,this.staleConnectionErrors=["socket hang up","stalled","interrupted"],this.hasExperiencedNetworkDisruption=!1,this.requestsInFlight=new Map,this.heartBeatTimeout=(0,pe.toMiliseconds)(pe.THIRTY_SECONDS+pe.ONE_SECOND),this.request=async e=>{var t,r;this.logger.debug("Publishing Request Payload");const n=e.id||Et().toString();await this.toEstablishConnection();try{const i=this.provider.request(e);this.requestsInFlight.set(n,{promise:i,request:e}),this.logger.trace({id:n,method:e.method,topic:null==(t=e.params)?void 0:t.topic},"relayer.request - attempt to publish...");const s=await new Promise((async(e,t)=>{const r=()=>{t(new Error(`relayer.request - publish interrupted, id: ${n}`))};this.provider.on(ir,r);const s=await i;this.provider.off(ir,r),e(s)}));return this.logger.trace({id:n,method:e.method,topic:null==(r=e.params)?void 0:r.topic},"relayer.request - published"),s}catch(e){throw this.logger.debug(`Failed to Publish Request: ${n}`),e}finally{this.requestsInFlight.delete(n)}},this.resetPingTimeout=()=>{if((0,ct.Lln)())try{clearTimeout(this.pingTimeout),this.pingTimeout=setTimeout((()=>{var e,t,r;null==(r=null==(t=null==(e=this.provider)?void 0:e.connection)?void 0:t.socket)||r.terminate()}),this.heartBeatTimeout)}catch(e){this.logger.warn(e)}},this.onPayloadHandler=e=>{this.onProviderPayload(e),this.resetPingTimeout()},this.onConnectHandler=()=>{this.logger.trace("relayer connected"),this.startPingTimeout(),this.events.emit("relayer_connect")},this.onDisconnectHandler=()=>{this.logger.trace("relayer disconnected"),this.onProviderDisconnect()},this.onProviderErrorHandler=e=>{this.logger.error(e),this.events.emit("relayer_error",e),this.logger.info("Fatal socket error received, closing transport"),this.transportClose()},this.registerProviderListeners=()=>{this.provider.on(rr,this.onPayloadHandler),this.provider.on(nr,this.onConnectHandler),this.provider.on(ir,this.onDisconnectHandler),this.provider.on(sr,this.onProviderErrorHandler)},this.core=e.core,this.logger=typeof e.logger<"u"&&"string"!=typeof e.logger?(0,b.U5)(e.logger,this.name):(0,b.h6)((0,b.iP)({level:e.logger||"error"})),this.messages=new Xn(this.logger,e.core),this.subscriber=new hi(this,this.logger),this.publisher=new ei(this,this.logger),this.relayUrl=e?.relayUrl||Qt,this.projectId=e.projectId,this.bundleId=(0,ct.w47)(),this.provider={}}async init(){if(this.logger.trace("Initialized"),this.registerEventListeners(),await Promise.all([this.messages.init(),this.subscriber.init()]),this.initialized=!0,this.subscriber.cached.length>0)try{await this.transportOpen()}catch(e){this.logger.warn(e)}}get context(){return(0,b.oI)(this.logger)}get connected(){var e,t,r;return 1===(null==(r=null==(t=null==(e=this.provider)?void 0:e.connection)?void 0:t.socket)?void 0:r.readyState)}get connecting(){var e,t,r;return 0===(null==(r=null==(t=null==(e=this.provider)?void 0:e.connection)?void 0:t.socket)?void 0:r.readyState)}async publish(e,t,r){this.isInitialized(),await this.publisher.publish(e,t,r),await this.recordMessageEvent({topic:e,message:t,publishedAt:Date.now(),transportType:ar.relay})}async subscribe(e,t){var r;this.isInitialized(),"relay"===t?.transportType&&await this.toEstablishConnection();let n,i=(null==(r=this.subscriber.topicMap.get(e))?void 0:r[0])||"";const s=t=>{t.topic===e&&(this.subscriber.off(lr,s),n())};return await Promise.all([new Promise((e=>{n=e,this.subscriber.on(lr,s)})),new Promise((async r=>{i=await this.subscriber.subscribe(e,t)||i,r()}))]),i}async unsubscribe(e,t){this.isInitialized(),await this.subscriber.unsubscribe(e,t)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async transportDisconnect(){if(!this.hasExperiencedNetworkDisruption&&this.connected&&this.requestsInFlight.size>0)try{await Promise.all(Array.from(this.requestsInFlight.values()).map((e=>e.promise)))}catch(e){this.logger.warn(e)}this.hasExperiencedNetworkDisruption||this.connected?await(0,ct.K3g)(this.provider.disconnect(),2e3,"provider.disconnect()").catch((()=>this.onProviderDisconnect())):this.onProviderDisconnect()}async transportClose(){this.transportExplicitlyClosed=!0,await this.transportDisconnect()}async transportOpen(e){await this.confirmOnlineStateOrThrow(),e&&e!==this.relayUrl&&(this.relayUrl=e,await this.transportDisconnect()),await this.createProvider(),this.connectionAttemptInProgress=!0,this.transportExplicitlyClosed=!1;try{await new Promise((async(e,t)=>{const r=()=>{this.provider.off(ir,r),t(new Error("Connection interrupted while trying to subscribe"))};this.provider.on(ir,r),await(0,ct.K3g)(this.provider.connect(),(0,pe.toMiliseconds)(pe.ONE_MINUTE),`Socket stalled when trying to connect to ${this.relayUrl}`).catch((e=>{t(e)})).finally((()=>{clearTimeout(this.reconnectTimeout),this.reconnectTimeout=void 0})),this.subscriber.start().catch((e=>{this.logger.error(e),this.onDisconnectHandler()})),this.hasExperiencedNetworkDisruption=!1,e()}))}catch(e){this.logger.error(e);const t=e;if(this.hasExperiencedNetworkDisruption=!0,!this.isConnectionStalled(t.message))throw e}finally{this.connectionAttemptInProgress=!1}}async restartTransport(e){this.connectionAttemptInProgress||(this.relayUrl=e||this.relayUrl,await this.confirmOnlineStateOrThrow(),await this.transportClose(),await this.transportOpen())}async confirmOnlineStateOrThrow(){if(!await(0,ct.sc7)())throw new Error("No internet connection detected. Please restart your network and try again.")}async handleBatchMessageEvents(e){if(0===e?.length)return void this.logger.trace("Batch message events is empty. Ignoring...");const t=e.sort(((e,t)=>e.publishedAt-t.publishedAt));this.logger.trace(`Batch of ${t.length} message events sorted`);for(const e of t)try{await this.onMessageEvent(e)}catch(e){this.logger.warn(e)}this.logger.trace(`Batch of ${t.length} message events processed`)}async onLinkMessageEvent(e,t){const{topic:r}=e;if(!t.sessionExists){const e={topic:r,expiry:(0,ct.Xw0)(pe.FIVE_MINUTES),relay:{protocol:"irn"},active:!1};await this.core.pairing.pairings.set(r,e)}this.events.emit(Yt,e),await this.recordMessageEvent(e)}startPingTimeout(){var e,t,r,n,i;if((0,ct.Lln)())try{null!=(t=null==(e=this.provider)?void 0:e.connection)&&t.socket&&(null==(i=null==(n=null==(r=this.provider)?void 0:r.connection)?void 0:n.socket)||i.once("ping",(()=>{this.resetPingTimeout()}))),this.resetPingTimeout()}catch(e){this.logger.warn(e)}}isConnectionStalled(e){return this.staleConnectionErrors.some((t=>e.includes(t)))}async createProvider(){this.provider.connection&&this.unregisterProviderListeners();const e=await this.core.crypto.signJWT(this.relayUrl);this.provider=new jt(new qt((0,ct.jUZ)({sdkVersion:or,protocol:this.protocol,version:this.version,relayUrl:this.relayUrl,projectId:this.projectId,auth:e,useOnCloseEvent:!0,bundleId:this.bundleId}))),this.registerProviderListeners()}async recordMessageEvent(e){const{topic:t,message:r}=e;await this.messages.set(t,r)}async shouldIgnoreMessageEvent(e){const{topic:t,message:r}=e;if(!r||0===r.length)return this.logger.debug(`Ignoring invalid/empty message: ${r}`),!0;if(!await this.subscriber.isSubscribed(t))return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`),!0;const n=this.messages.has(t,r);return n&&this.logger.debug(`Ignoring duplicate message: ${r}`),n}async onProviderPayload(e){if(this.logger.debug("Incoming Relay Payload"),this.logger.trace({type:"payload",direction:"incoming",payload:e}),Bt(e)){if(!e.method.endsWith("_subscription"))return;const t=e.params,{topic:r,message:n,publishedAt:i,attestation:s}=t.data,o={topic:r,message:n,publishedAt:i,transportType:ar.relay,attestation:s};this.logger.debug("Emitting Relayer Payload"),this.logger.trace(((e,t)=>{for(var r in t||(t={}))pi.call(t,r)&&mi(e,r,t[r]);if(fi)for(var r of fi(t))gi.call(t,r)&&mi(e,r,t[r]);return e})({type:"event",event:t.id},o)),this.events.emit(t.id,o),await this.acknowledgePayload(e),await this.onMessageEvent(o)}else Lt(e)&&this.events.emit(Xt,e)}async onMessageEvent(e){await this.shouldIgnoreMessageEvent(e)||(this.events.emit(Yt,e),await this.recordMessageEvent(e))}async acknowledgePayload(e){const t=_t(e.id,!0);await this.provider.connection.send(t)}unregisterProviderListeners(){this.provider.off(rr,this.onPayloadHandler),this.provider.off(nr,this.onConnectHandler),this.provider.off(ir,this.onDisconnectHandler),this.provider.off(sr,this.onProviderErrorHandler),clearTimeout(this.pingTimeout)}async registerEventListeners(){let e=await(0,ct.sc7)();(0,ct.uym)((async t=>{e!==t&&(e=t,t?await this.restartTransport().catch((e=>this.logger.error(e))):(this.hasExperiencedNetworkDisruption=!0,await this.transportDisconnect(),this.transportExplicitlyClosed=!1))}))}async onProviderDisconnect(){await this.subscriber.stop(),this.requestsInFlight.clear(),clearTimeout(this.pingTimeout),this.events.emit("relayer_disconnect"),this.connectionAttemptInProgress=!1,!this.transportExplicitlyClosed&&(this.reconnectTimeout||(this.reconnectTimeout=setTimeout((async()=>{await this.transportOpen().catch((e=>this.logger.error(e)))}),(0,pe.toMiliseconds)(.1))))}isInitialized(){if(!this.initialized){const{message:e}=(0,ct.GuA)("NOT_INITIALIZED",this.name);throw new Error(e)}}async toEstablishConnection(){await this.confirmOnlineStateOrThrow(),!this.connected&&(this.connectionAttemptInProgress&&await new Promise((e=>{const t=setInterval((()=>{this.connected&&(clearInterval(t),e())}),this.connectionStatusPollingInterval)})),await this.transportOpen())}}var yi=Object.defineProperty,bi=Object.getOwnPropertySymbols,vi=Object.prototype.hasOwnProperty,Ai=Object.prototype.propertyIsEnumerable,xi=(e,t,r)=>t in e?yi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ei=(e,t)=>{for(var r in t||(t={}))vi.call(t,r)&&xi(e,r,t[r]);if(bi)for(var r of bi(t))Ai.call(t,r)&&xi(e,r,t[r]);return e};class Ci extends Xe{constructor(e,t,r,n=Vt,i=void 0){super(e,t,r,n),this.core=e,this.logger=t,this.name=r,this.map=new Map,this.version="0.3",this.cached=[],this.initialized=!1,this.storagePrefix=Vt,this.recentlyDeleted=[],this.recentlyDeletedLimit=200,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach((e=>{this.getKey&&null!==e&&!(0,ct.b07)(e)?this.map.set(this.getKey(e),e):(0,ct.CTo)(e)?this.map.set(e.id,e):(0,ct.mr0)(e)&&this.map.set(e.topic,e)})),this.cached=[],this.initialized=!0)},this.set=async(e,t)=>{this.isInitialized(),this.map.has(e)?await this.update(e,t):(this.logger.debug("Setting value"),this.logger.trace({type:"method",method:"set",key:e,value:t}),this.map.set(e,t),await this.persist())},this.get=e=>(this.isInitialized(),this.logger.debug("Getting value"),this.logger.trace({type:"method",method:"get",key:e}),this.getData(e)),this.getAll=e=>(this.isInitialized(),e?this.values.filter((t=>Object.keys(e).every((r=>zt()(t[r],e[r]))))):this.values),this.update=async(e,t)=>{this.isInitialized(),this.logger.debug("Updating value"),this.logger.trace({type:"method",method:"update",key:e,update:t});const r=Ei(Ei({},this.getData(e)),t);this.map.set(e,r),await this.persist()},this.delete=async(e,t)=>{this.isInitialized(),this.map.has(e)&&(this.logger.debug("Deleting value"),this.logger.trace({type:"method",method:"delete",key:e,reason:t}),this.map.delete(e),this.addToRecentlyDeleted(e),await this.persist())},this.logger=(0,b.U5)(t,this.name),this.storagePrefix=n,this.getKey=i}get context(){return(0,b.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.map.size}get keys(){return Array.from(this.map.keys())}get values(){return Array.from(this.map.values())}addToRecentlyDeleted(e){this.recentlyDeleted.push(e),this.recentlyDeleted.length>=this.recentlyDeletedLimit&&this.recentlyDeleted.splice(0,this.recentlyDeletedLimit/2)}async setDataStore(e){await this.core.storage.setItem(this.storageKey,e)}async getDataStore(){return await this.core.storage.getItem(this.storageKey)}getData(e){const t=this.map.get(e);if(!t){if(this.recentlyDeleted.includes(e)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`Record was recently deleted - ${this.name}: ${e}`);throw this.logger.error(t),new Error(t)}const{message:t}=(0,ct.GuA)("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.error(t),new Error(t)}return t}async persist(){await this.setDataStore(this.values)}async restore(){try{const e=await this.getDataStore();if(typeof e>"u"||!e.length)return;if(this.map.size){const{message:e}=(0,ct.GuA)("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(e),new Error(e)}this.cached=e,this.logger.debug(`Successfully Restored value for ${this.name}`),this.logger.trace({type:"method",method:"restore",value:this.values})}catch(e){this.logger.debug(`Failed to Restore value for ${this.name}`),this.logger.error(e)}}isInitialized(){if(!this.initialized){const{message:e}=(0,ct.GuA)("NOT_INITIALIZED",this.name);throw new Error(e)}}}class _i{constructor(e,t){this.core=e,this.logger=t,this.name="pairing",this.version="0.3",this.events=new(fe()),this.initialized=!1,this.storagePrefix=Vt,this.ignoredPayloadTypes=[ct.Lp_],this.registeredMethods=[],this.init=async()=>{this.initialized||(await this.pairings.init(),await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.initialized=!0,this.logger.trace("Initialized"))},this.register=({methods:e})=>{this.isInitialized(),this.registeredMethods=[...new Set([...this.registeredMethods,...e])]},this.create=async e=>{this.isInitialized();const t=(0,ct.two)(),r=await this.core.crypto.setSymKey(t),n=(0,ct.Xw0)(pe.FIVE_MINUTES),i={protocol:"irn"},s={topic:r,expiry:n,relay:i,active:!1,methods:e?.methods},o=(0,ct.QJh)({protocol:this.core.protocol,version:this.core.version,topic:r,symKey:t,relay:i,expiryTimestamp:n,methods:e?.methods});return this.events.emit(fr,s),this.core.expirer.set(r,n),await this.pairings.set(r,s),await this.core.relayer.subscribe(r,{transportType:e?.transportType}),{topic:r,uri:o}},this.pair=async e=>{this.isInitialized();const t=this.core.eventClient.createEvent({properties:{topic:e?.uri,trace:["pairing_started"]}});this.isValidPair(e,t);const{topic:r,symKey:n,relay:i,expiryTimestamp:s,methods:o}=(0,ct.wYp)(e.uri);let a;if(t.props.properties.topic=r,t.addTrace("pairing_uri_validation_success"),t.addTrace("pairing_uri_not_expired"),this.pairings.keys.includes(r)){if(a=this.pairings.get(r),t.addTrace("existing_pairing"),a.active)throw t.setError("active_pairing_already_exists"),new Error(`Pairing already exists: ${r}. Please try again with a new connection URI.`);t.addTrace("pairing_not_expired")}const c=s||(0,ct.Xw0)(pe.FIVE_MINUTES),l={topic:r,relay:i,expiry:c,active:!1,methods:o};this.core.expirer.set(r,c),await this.pairings.set(r,l),t.addTrace("store_new_pairing"),e.activatePairing&&await this.activate({topic:r}),this.events.emit(fr,l),t.addTrace("emit_inactive_pairing"),this.core.crypto.keychain.has(r)||await this.core.crypto.setSymKey(n,r),t.addTrace("subscribing_pairing_topic");try{await this.core.relayer.confirmOnlineStateOrThrow()}catch{t.setError("no_internet_connection")}try{await this.core.relayer.subscribe(r,{relay:i})}catch(e){throw t.setError("subscribe_pairing_topic_failure"),e}return t.addTrace("subscribe_pairing_topic_success"),l},this.activate=async({topic:e})=>{this.isInitialized();const t=(0,ct.Xw0)(pe.THIRTY_DAYS);this.core.expirer.set(e,t),await this.pairings.update(e,{active:!0,expiry:t})},this.ping=async e=>{this.isInitialized(),await this.isValidPing(e);const{topic:t}=e;if(this.pairings.keys.includes(t)){const e=await this.sendRequest(t,"wc_pairingPing",{}),{done:r,resolve:n,reject:i}=(0,ct.Wx8)();this.events.once((0,ct.hEn)("pairing_ping",e),(({error:e})=>{e?i(e):n()})),await r()}},this.updateExpiry=async({topic:e,expiry:t})=>{this.isInitialized(),await this.pairings.update(e,{expiry:t})},this.updateMetadata=async({topic:e,metadata:t})=>{this.isInitialized(),await this.pairings.update(e,{peerMetadata:t})},this.getPairings=()=>(this.isInitialized(),this.pairings.values),this.disconnect=async e=>{this.isInitialized(),await this.isValidDisconnect(e);const{topic:t}=e;this.pairings.keys.includes(t)&&(await this.sendRequest(t,"wc_pairingDelete",(0,ct.Hjj)("USER_DISCONNECTED")),await this.deletePairing(t))},this.formatUriFromPairing=e=>{this.isInitialized();const{topic:t,relay:r,expiry:n,methods:i}=e,s=this.core.crypto.keychain.get(t);return(0,ct.QJh)({protocol:this.core.protocol,version:this.core.version,topic:t,symKey:s,relay:r,expiryTimestamp:n,methods:i})},this.sendRequest=async(e,t,r)=>{const n=Ct(t,r),i=await this.core.crypto.encode(e,n),s=dr[t].req;return this.core.history.set(e,n),this.core.relayer.publish(e,i,s),n.id},this.sendResult=async(e,t,r)=>{const n=_t(e,r),i=await this.core.crypto.encode(t,n),s=await this.core.history.get(t,e),o=dr[s.request.method].res;await this.core.relayer.publish(t,i,o),await this.core.history.resolve(n)},this.sendError=async(e,t,r)=>{const n=kt(e,r),i=await this.core.crypto.encode(t,n),s=await this.core.history.get(t,e),o=dr[s.request.method]?dr[s.request.method].res:dr.unregistered_method.res;await this.core.relayer.publish(t,i,o),await this.core.history.resolve(n)},this.deletePairing=async(e,t)=>{await this.core.relayer.unsubscribe(e),await Promise.all([this.pairings.delete(e,(0,ct.Hjj)("USER_DISCONNECTED")),this.core.crypto.deleteSymKey(e),t?Promise.resolve():this.core.expirer.del(e)])},this.cleanup=async()=>{const e=this.pairings.getAll().filter((e=>(0,ct._dF)(e.expiry)));await Promise.all(e.map((e=>this.deletePairing(e.topic))))},this.onRelayEventRequest=e=>{const{topic:t,payload:r}=e;switch(r.method){case"wc_pairingPing":return this.onPairingPingRequest(t,r);case"wc_pairingDelete":return this.onPairingDeleteRequest(t,r);default:return this.onUnknownRpcMethodRequest(t,r)}},this.onRelayEventResponse=async e=>{const{topic:t,payload:r}=e,n=(await this.core.history.get(t,r.id)).request.method;return"wc_pairingPing"===n?this.onPairingPingResponse(t,r):this.onUnknownRpcMethodResponse(n)},this.onPairingPingRequest=async(e,t)=>{const{id:r}=t;try{this.isValidPing({topic:e}),await this.sendResult(r,e,!0),this.events.emit("pairing_ping",{id:r,topic:e})}catch(t){await this.sendError(r,e,t),this.logger.error(t)}},this.onPairingPingResponse=(e,t)=>{const{id:r}=t;setTimeout((()=>{Ut(t)?this.events.emit((0,ct.hEn)("pairing_ping",r),{}):Dt(t)&&this.events.emit((0,ct.hEn)("pairing_ping",r),{error:t.error})}),500)},this.onPairingDeleteRequest=async(e,t)=>{const{id:r}=t;try{this.isValidDisconnect({topic:e}),await this.deletePairing(e),this.events.emit(pr,{id:r,topic:e})}catch(t){await this.sendError(r,e,t),this.logger.error(t)}},this.onUnknownRpcMethodRequest=async(e,t)=>{const{id:r,method:n}=t;try{if(this.registeredMethods.includes(n))return;const t=(0,ct.Hjj)("WC_METHOD_UNSUPPORTED",n);await this.sendError(r,e,t),this.logger.error(t)}catch(t){await this.sendError(r,e,t),this.logger.error(t)}},this.onUnknownRpcMethodResponse=e=>{this.registeredMethods.includes(e)||this.logger.error((0,ct.Hjj)("WC_METHOD_UNSUPPORTED",e))},this.isValidPair=(e,t)=>{var r;if(!(0,ct.TeY)(e)){const{message:r}=(0,ct.GuA)("MISSING_OR_INVALID",`pair() params: ${e}`);throw t.setError(_r),new Error(r)}if(!(0,ct.AYU)(e.uri)){const{message:r}=(0,ct.GuA)("MISSING_OR_INVALID",`pair() uri: ${e.uri}`);throw t.setError(_r),new Error(r)}const n=(0,ct.wYp)(e?.uri);if(null==(r=n?.relay)||!r.protocol){const{message:e}=(0,ct.GuA)("MISSING_OR_INVALID","pair() uri#relay-protocol");throw t.setError(_r),new Error(e)}if(null==n||!n.symKey){const{message:e}=(0,ct.GuA)("MISSING_OR_INVALID","pair() uri#symKey");throw t.setError(_r),new Error(e)}if(null!=n&&n.expiryTimestamp&&(0,pe.toMiliseconds)(n?.expiryTimestamp)<Date.now()){t.setError("pairing_expired");const{message:e}=(0,ct.GuA)("EXPIRED","pair() URI has expired. Please try again with a new connection URI.");throw new Error(e)}},this.isValidPing=async e=>{if(!(0,ct.TeY)(e)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`ping() params: ${e}`);throw new Error(t)}const{topic:t}=e;await this.isValidPairingTopic(t)},this.isValidDisconnect=async e=>{if(!(0,ct.TeY)(e)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`disconnect() params: ${e}`);throw new Error(t)}const{topic:t}=e;await this.isValidPairingTopic(t)},this.isValidPairingTopic=async e=>{if(!(0,ct.Qhg)(e,!1)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`pairing topic should be a string: ${e}`);throw new Error(t)}if(!this.pairings.keys.includes(e)){const{message:t}=(0,ct.GuA)("NO_MATCHING_KEY",`pairing topic doesn't exist: ${e}`);throw new Error(t)}if((0,ct._dF)(this.pairings.get(e).expiry)){await this.deletePairing(e);const{message:t}=(0,ct.GuA)("EXPIRED",`pairing topic: ${e}`);throw new Error(t)}},this.core=e,this.logger=(0,b.U5)(t,this.name),this.pairings=new Ci(this.core,this.logger,this.name,this.storagePrefix)}get context(){return(0,b.oI)(this.logger)}isInitialized(){if(!this.initialized){const{message:e}=(0,ct.GuA)("NOT_INITIALIZED",this.name);throw new Error(e)}}registerRelayerEvents(){this.core.relayer.on(Yt,(async e=>{const{topic:t,message:r,transportType:n}=e;if(!this.pairings.keys.includes(t)||n===ar.link_mode||this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r)))return;const i=await this.core.crypto.decode(t,r);try{Bt(i)?(this.core.history.set(t,i),this.onRelayEventRequest({topic:t,payload:i})):Lt(i)&&(await this.core.history.resolve(i),await this.onRelayEventResponse({topic:t,payload:i}),this.core.history.delete(t,i.id))}catch(e){this.logger.error(e)}}))}registerExpirerEvents(){this.core.expirer.on(vr,(async e=>{const{topic:t}=(0,ct.c82)(e.target);t&&this.pairings.keys.includes(t)&&(await this.deletePairing(t,!0),this.events.emit("pairing_expire",{topic:t}))}))}}class ki extends Ke{constructor(e,t){super(e,t),this.core=e,this.logger=t,this.records=new Map,this.events=new de.EventEmitter,this.name="history",this.version="0.3",this.cached=[],this.initialized=!1,this.storagePrefix=Vt,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach((e=>this.records.set(e.id,e))),this.cached=[],this.registerEventListeners(),this.initialized=!0)},this.set=(e,t,r)=>{if(this.isInitialized(),this.logger.debug("Setting JSON-RPC request history record"),this.logger.trace({type:"method",method:"set",topic:e,request:t,chainId:r}),this.records.has(t.id))return;const n={id:t.id,topic:e,request:{method:t.method,params:t.params||null},chainId:r,expiry:(0,ct.Xw0)(pe.THIRTY_DAYS)};this.records.set(n.id,n),this.persist(),this.events.emit(gr,n)},this.resolve=async e=>{if(this.isInitialized(),this.logger.debug("Updating JSON-RPC response history record"),this.logger.trace({type:"method",method:"update",response:e}),!this.records.has(e.id))return;const t=await this.getRecord(e.id);typeof t.response>"u"&&(t.response=Dt(e)?{error:e.error}:{result:e.result},this.records.set(t.id,t),this.persist(),this.events.emit(mr,t))},this.get=async(e,t)=>(this.isInitialized(),this.logger.debug("Getting record"),this.logger.trace({type:"method",method:"get",topic:e,id:t}),await this.getRecord(t)),this.delete=(e,t)=>{this.isInitialized(),this.logger.debug("Deleting record"),this.logger.trace({type:"method",method:"delete",id:t}),this.values.forEach((r=>{if(r.topic===e){if(typeof t<"u"&&r.id!==t)return;this.records.delete(r.id),this.events.emit(wr,r)}})),this.persist()},this.exists=async(e,t)=>(this.isInitialized(),!!this.records.has(t)&&(await this.getRecord(t)).topic===e),this.on=(e,t)=>{this.events.on(e,t)},this.once=(e,t)=>{this.events.once(e,t)},this.off=(e,t)=>{this.events.off(e,t)},this.removeListener=(e,t)=>{this.events.removeListener(e,t)},this.logger=(0,b.U5)(t,this.name)}get context(){return(0,b.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get size(){return this.records.size}get keys(){return Array.from(this.records.keys())}get values(){return Array.from(this.records.values())}get pending(){const e=[];return this.values.forEach((t=>{if(typeof t.response<"u")return;const r={topic:t.topic,request:Ct(t.request.method,t.request.params,t.id),chainId:t.chainId};return e.push(r)})),e}async setJsonRpcRecords(e){await this.core.storage.setItem(this.storageKey,e)}async getJsonRpcRecords(){return await this.core.storage.getItem(this.storageKey)}getRecord(e){this.isInitialized();const t=this.records.get(e);if(!t){const{message:t}=(0,ct.GuA)("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(t)}return t}async persist(){await this.setJsonRpcRecords(this.values),this.events.emit("history_sync")}async restore(){try{const e=await this.getJsonRpcRecords();if(typeof e>"u"||!e.length)return;if(this.records.size){const{message:e}=(0,ct.GuA)("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(e),new Error(e)}this.cached=e,this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",records:this.values})}catch(e){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(e)}}registerEventListeners(){this.events.on(gr,(e=>{const t=gr;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})})),this.events.on(mr,(e=>{const t=mr;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})})),this.events.on(wr,(e=>{const t=wr;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})})),this.core.heartbeat.on(ye,(()=>{this.cleanup()}))}cleanup(){try{this.isInitialized();let e=!1;this.records.forEach((t=>{(0,pe.toMiliseconds)(t.expiry||0)-Date.now()<=0&&(this.logger.info(`Deleting expired history log: ${t.id}`),this.records.delete(t.id),this.events.emit(wr,t,!1),e=!0)})),e&&this.persist()}catch(e){this.logger.warn(e)}}isInitialized(){if(!this.initialized){const{message:e}=(0,ct.GuA)("NOT_INITIALIZED",this.name);throw new Error(e)}}}class Si extends tt{constructor(e,t){super(e,t),this.core=e,this.logger=t,this.expirations=new Map,this.events=new de.EventEmitter,this.name="expirer",this.version="0.3",this.cached=[],this.initialized=!1,this.storagePrefix=Vt,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach((e=>this.expirations.set(e.target,e))),this.cached=[],this.registerEventListeners(),this.initialized=!0)},this.has=e=>{try{const t=this.formatTarget(e);return typeof this.getExpiration(t)<"u"}catch{return!1}},this.set=(e,t)=>{this.isInitialized();const r=this.formatTarget(e),n={target:r,expiry:t};this.expirations.set(r,n),this.checkExpiry(r,n),this.events.emit(yr,{target:r,expiration:n})},this.get=e=>{this.isInitialized();const t=this.formatTarget(e);return this.getExpiration(t)},this.del=e=>{if(this.isInitialized(),this.has(e)){const t=this.formatTarget(e),r=this.getExpiration(t);this.expirations.delete(t),this.events.emit(br,{target:t,expiration:r})}},this.on=(e,t)=>{this.events.on(e,t)},this.once=(e,t)=>{this.events.once(e,t)},this.off=(e,t)=>{this.events.off(e,t)},this.removeListener=(e,t)=>{this.events.removeListener(e,t)},this.logger=(0,b.U5)(t,this.name)}get context(){return(0,b.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.expirations.size}get keys(){return Array.from(this.expirations.keys())}get values(){return Array.from(this.expirations.values())}formatTarget(e){if("string"==typeof e)return(0,ct.ADD)(e);if("number"==typeof e)return(0,ct.gOF)(e);const{message:t}=(0,ct.GuA)("UNKNOWN_TYPE","Target type: "+typeof e);throw new Error(t)}async setExpirations(e){await this.core.storage.setItem(this.storageKey,e)}async getExpirations(){return await this.core.storage.getItem(this.storageKey)}async persist(){await this.setExpirations(this.values),this.events.emit("expirer_sync")}async restore(){try{const e=await this.getExpirations();if(typeof e>"u"||!e.length)return;if(this.expirations.size){const{message:e}=(0,ct.GuA)("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(e),new Error(e)}this.cached=e,this.logger.debug(`Successfully Restored expirations for ${this.name}`),this.logger.trace({type:"method",method:"restore",expirations:this.values})}catch(e){this.logger.debug(`Failed to Restore expirations for ${this.name}`),this.logger.error(e)}}getExpiration(e){const t=this.expirations.get(e);if(!t){const{message:t}=(0,ct.GuA)("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.warn(t),new Error(t)}return t}checkExpiry(e,t){const{expiry:r}=t;(0,pe.toMiliseconds)(r)-Date.now()<=0&&this.expire(e,t)}expire(e,t){this.expirations.delete(e),this.events.emit(vr,{target:e,expiration:t})}checkExpirations(){this.core.relayer.connected&&this.expirations.forEach(((e,t)=>this.checkExpiry(t,e)))}registerEventListeners(){this.core.heartbeat.on(ye,(()=>this.checkExpirations())),this.events.on(yr,(e=>{const t=yr;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()})),this.events.on(vr,(e=>{const t=vr;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()})),this.events.on(br,(e=>{const t=br;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()}))}isInitialized(){if(!this.initialized){const{message:e}=(0,ct.GuA)("NOT_INITIALIZED",this.name);throw new Error(e)}}}var Ii={};function Ti(e){let t;return typeof window<"u"&&typeof window[e]<"u"&&(t=window[e]),t}function Pi(e){const t=Ti(e);if(!t)throw new Error(`${e} is not defined in Window`);return t}Object.defineProperty(Ii,"__esModule",{value:!0}),Ii.getLocalStorage=Ii.getLocalStorageOrThrow=Ii.getCrypto=Ii.getCryptoOrThrow=Ii.getLocation=Ii.getLocationOrThrow=Ii.getNavigator=Ii.getNavigatorOrThrow=Mi=Ii.getDocument=Ii.getDocumentOrThrow=Ii.getFromWindowOrThrow=Ii.getFromWindow=void 0,Ii.getFromWindow=Ti,Ii.getFromWindowOrThrow=Pi,Ii.getDocumentOrThrow=function(){return Pi("document")};var Mi=Ii.getDocument=function(){return Ti("document")};Ii.getNavigatorOrThrow=function(){return Pi("navigator")},Ii.getNavigator=function(){return Ti("navigator")},Ii.getLocationOrThrow=function(){return Pi("location")},Ii.getLocation=function(){return Ti("location")},Ii.getCryptoOrThrow=function(){return Pi("crypto")},Ii.getCrypto=function(){return Ti("crypto")},Ii.getLocalStorageOrThrow=function(){return Pi("localStorage")},Ii.getLocalStorage=function(){return Ti("localStorage")};class Ni extends rt{constructor(e,t,r){super(e,t,r),this.core=e,this.logger=t,this.store=r,this.name="verify-api",this.verifyUrlV3=Er,this.storagePrefix=Vt,this.version=2,this.init=async()=>{var e;this.isDevEnv||(this.publicKey=await this.store.getItem(this.storeKey),this.publicKey&&(0,pe.toMiliseconds)(null==(e=this.publicKey)?void 0:e.expiresAt)<Date.now()&&(this.logger.debug("verify v2 public key expired"),await this.removePublicKey()))},this.register=async e=>{if(!(0,ct.BdH)()||this.isDevEnv)return;const t=window.location.origin,{id:r,decryptedId:n}=e,i=`${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${r}&decryptedId=${n}`;try{const e=Mi(),t=this.startAbortTimer(5*pe.ONE_SECOND),n=await new Promise(((n,s)=>{const o=()=>{window.removeEventListener("message",c),e.body.removeChild(a),s("attestation aborted")};this.abortController.signal.addEventListener("abort",o);const a=e.createElement("iframe");a.src=i,a.style.display="none",a.addEventListener("error",o,{signal:this.abortController.signal});const c=i=>{if(i.data&&"string"==typeof i.data)try{const s=JSON.parse(i.data);if("verify_attestation"===s.type){if((0,at.decodeJWT)(s.attestation).payload.id!==r)return;clearInterval(t),e.body.removeChild(a),this.abortController.signal.removeEventListener("abort",o),window.removeEventListener("message",c),n(null===s.attestation?"":s.attestation)}}catch(e){this.logger.warn(e)}};e.body.appendChild(a),window.addEventListener("message",c,{signal:this.abortController.signal})}));return this.logger.debug("jwt attestation",n),n}catch(e){this.logger.warn(e)}return""},this.resolve=async e=>{if(this.isDevEnv)return"";const{attestationId:t,hash:r,encryptedId:n}=e;if(""===t)return void this.logger.debug("resolve: attestationId is empty, skipping");if(t){if((0,at.decodeJWT)(t).payload.id!==n)return;const e=await this.isValidJwtAttestation(t);if(e)return e.isVerified?e:void this.logger.warn("resolve: jwt attestation: origin url not verified")}if(!r)return;const i=this.getVerifyUrl(e?.verifyUrl);return this.fetchAttestation(r,i)},this.fetchAttestation=async(e,t)=>{this.logger.debug(`resolving attestation: ${e} from url: ${t}`);const r=this.startAbortTimer(5*pe.ONE_SECOND),n=await fetch(`${t}/attestation/${e}?v2Supported=true`,{signal:this.abortController.signal});return clearTimeout(r),200===n.status?await n.json():void 0},this.getVerifyUrl=e=>{let t=e||xr;return Cr.includes(t)||(this.logger.info(`verify url: ${t}, not included in trusted list, assigning default: ${xr}`),t=xr),t},this.fetchPublicKey=async()=>{try{this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);const e=this.startAbortTimer(pe.FIVE_SECONDS),t=await fetch(`${this.verifyUrlV3}/public-key`,{signal:this.abortController.signal});return clearTimeout(e),await t.json()}catch(e){this.logger.warn(e)}},this.persistPublicKey=async e=>{this.logger.debug("persisting public key to local storage",e),await this.store.setItem(this.storeKey,e),this.publicKey=e},this.removePublicKey=async()=>{this.logger.debug("removing verify v2 public key from storage"),await this.store.removeItem(this.storeKey),this.publicKey=void 0},this.isValidJwtAttestation=async e=>{const t=await this.getPublicKey();try{if(t)return this.validateAttestation(e,t)}catch(e){this.logger.error(e),this.logger.warn("error validating attestation")}const r=await this.fetchAndPersistPublicKey();try{if(r)return this.validateAttestation(e,r)}catch(e){this.logger.error(e),this.logger.warn("error validating attestation")}},this.getPublicKey=async()=>this.publicKey?this.publicKey:await this.fetchAndPersistPublicKey(),this.fetchAndPersistPublicKey=async()=>{if(this.fetchPromise)return await this.fetchPromise,this.publicKey;this.fetchPromise=new Promise((async e=>{const t=await this.fetchPublicKey();t&&(await this.persistPublicKey(t),e(t))}));const e=await this.fetchPromise;return this.fetchPromise=void 0,e},this.validateAttestation=(e,t)=>{const r=(0,ct.U0i)(e,t.publicKey),n={hasExpired:(0,pe.toMiliseconds)(r.exp)<Date.now(),payload:r};if(n.hasExpired)throw this.logger.warn("resolve: jwt attestation expired"),new Error("JWT attestation expired");return{origin:n.payload.origin,isScam:n.payload.isScam,isVerified:n.payload.isVerified}},this.logger=(0,b.U5)(t,this.name),this.abortController=new AbortController,this.isDevEnv=(0,ct.w8K)(),this.init()}get storeKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//verify:public:key"}get context(){return(0,b.oI)(this.logger)}startAbortTimer(e){return this.abortController=new AbortController,setTimeout((()=>this.abortController.abort()),(0,pe.toMiliseconds)(e))}}class Ri extends nt{constructor(e,t){super(e,t),this.projectId=e,this.logger=t,this.context="echo",this.registerDeviceToken=async e=>{const{clientId:t,token:r,notificationType:n,enableEncrypted:i=!1}=e,s=`https://echo.walletconnect.com/${this.projectId}/clients`;await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_id:t,type:n,token:r,always_raw:i})})},this.logger=(0,b.U5)(t,this.context)}}var Oi=Object.defineProperty,Bi=Object.getOwnPropertySymbols,Li=Object.prototype.hasOwnProperty,Ui=Object.prototype.propertyIsEnumerable,Di=(e,t,r)=>t in e?Oi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ji=(e,t)=>{for(var r in t||(t={}))Li.call(t,r)&&Di(e,r,t[r]);if(Bi)for(var r of Bi(t))Ui.call(t,r)&&Di(e,r,t[r]);return e};class Fi extends it{constructor(e,t,r=!0){super(e,t,r),this.core=e,this.logger=t,this.context="event-client",this.storagePrefix=Vt,this.storageVersion=.1,this.events=new Map,this.shouldPersist=!1,this.init=async()=>{if(!(0,ct.w8K)())try{const e={eventId:(0,ct.gZm)(),timestamp:Date.now(),domain:this.getAppDomain(),props:{event:"INIT",type:"",properties:{client_id:await this.core.crypto.getClientId(),user_agent:(0,ct.ojD)(this.core.relayer.protocol,this.core.relayer.version,or)}}};await this.sendEvent([e])}catch(e){this.logger.warn(e)}},this.createEvent=e=>{const{event:t="ERROR",type:r="",properties:{topic:n,trace:i}}=e,s=(0,ct.gZm)(),o=this.core.projectId||"",a=Date.now(),c=ji({eventId:s,timestamp:a,props:{event:t,type:r,properties:{topic:n,trace:i}},bundleId:o,domain:this.getAppDomain()},this.setMethods(s));return this.telemetryEnabled&&(this.events.set(s,c),this.shouldPersist=!0),c},this.getEvent=e=>{const{eventId:t,topic:r}=e;if(t)return this.events.get(t);const n=Array.from(this.events.values()).find((e=>e.props.properties.topic===r));return n?ji(ji({},n),this.setMethods(n.eventId)):void 0},this.deleteEvent=e=>{const{eventId:t}=e;this.events.delete(t),this.shouldPersist=!0},this.setEventListeners=()=>{this.core.heartbeat.on(ye,(async()=>{this.shouldPersist&&await this.persist(),this.events.forEach((e=>{(0,pe.fromMiliseconds)(Date.now())-(0,pe.fromMiliseconds)(e.timestamp)>86400&&(this.events.delete(e.eventId),this.shouldPersist=!0)}))}))},this.setMethods=e=>({addTrace:t=>this.addTrace(e,t),setError:t=>this.setError(e,t)}),this.addTrace=(e,t)=>{const r=this.events.get(e);r&&(r.props.properties.trace.push(t),this.events.set(e,r),this.shouldPersist=!0)},this.setError=(e,t)=>{const r=this.events.get(e);r&&(r.props.type=t,r.timestamp=Date.now(),this.events.set(e,r),this.shouldPersist=!0)},this.persist=async()=>{await this.core.storage.setItem(this.storageKey,Array.from(this.events.values())),this.shouldPersist=!1},this.restore=async()=>{try{const e=await this.core.storage.getItem(this.storageKey)||[];if(!e.length)return;e.forEach((e=>{this.events.set(e.eventId,ji(ji({},e),this.setMethods(e.eventId)))}))}catch(e){this.logger.warn(e)}},this.submit=async()=>{if(!this.telemetryEnabled||0===this.events.size)return;const e=[];for(const[t,r]of this.events)r.props.type&&e.push(r);if(0!==e.length)try{if((await this.sendEvent(e)).ok)for(const t of e)this.events.delete(t.eventId),this.shouldPersist=!0}catch(e){this.logger.warn(e)}},this.sendEvent=async e=>{const t=this.getAppDomain()?"":"&sp=desktop";return await fetch(`https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${or}${t}`,{method:"POST",body:JSON.stringify(e)})},this.getAppDomain=()=>(0,ct.lFF)().url,this.logger=(0,b.U5)(t,this.context),this.telemetryEnabled=r,r?this.restore().then((async()=>{await this.submit(),this.setEventListeners()})):this.persist()}get storageKey(){return this.storagePrefix+this.storageVersion+this.core.customStoragePrefix+"//"+this.context}}var $i=Object.defineProperty,qi=Object.getOwnPropertySymbols,Hi=Object.prototype.hasOwnProperty,zi=Object.prototype.propertyIsEnumerable,Wi=(e,t,r)=>t in e?$i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Vi=(e,t)=>{for(var r in t||(t={}))Hi.call(t,r)&&Wi(e,r,t[r]);if(qi)for(var r of qi(t))zi.call(t,r)&&Wi(e,r,t[r]);return e};class Gi extends Ze{constructor(e){var t;super(e),this.protocol="wc",this.version=2,this.name=Wt,this.events=new de.EventEmitter,this.initialized=!1,this.on=(e,t)=>this.events.on(e,t),this.once=(e,t)=>this.events.once(e,t),this.off=(e,t)=>this.events.off(e,t),this.removeListener=(e,t)=>this.events.removeListener(e,t),this.dispatchEnvelope=({topic:e,message:t,sessionExists:r})=>{if(!e||!t)return;const n={topic:e,message:t,publishedAt:Date.now(),transportType:ar.link_mode};this.relayer.onLinkMessageEvent(n,{sessionExists:r})},this.projectId=e?.projectId,this.relayUrl=e?.relayUrl||Qt,this.customStoragePrefix=null!=e&&e.customStoragePrefix?`:${e.customStoragePrefix}`:"";const r=(0,b.iP)({level:"string"==typeof e?.logger&&e.logger?e.logger:"error"}),{logger:n,chunkLoggerController:i}=(0,b.D5)({opts:r,maxSizeInBytes:e?.maxLogBlobSizeInBytes,loggerOverride:e?.logger});this.logChunkController=i,null!=(t=this.logChunkController)&&t.downloadLogsBlobInBrowser&&(window.downloadLogsBlobInBrowser=async()=>{var e,t;null!=(e=this.logChunkController)&&e.downloadLogsBlobInBrowser&&(null==(t=this.logChunkController)||t.downloadLogsBlobInBrowser({clientId:await this.crypto.getClientId()}))}),this.logger=(0,b.U5)(n,this.name),this.heartbeat=new be,this.crypto=new Yn(this,this.logger,e?.keychain),this.history=new ki(this,this.logger),this.expirer=new Si(this,this.logger),this.storage=null!=e&&e.storage?e.storage:new Ge(Vi(Vi({},Gt),e?.storageOptions)),this.relayer=new wi({core:this,logger:this.logger,relayUrl:this.relayUrl,projectId:this.projectId}),this.pairing=new _i(this,this.logger),this.verify=new Ni(this,this.logger,this.storage),this.echoClient=new Ri(this.projectId||"",this.logger),this.linkModeSupportedApps=[],this.eventClient=new Fi(this,this.logger,e?.telemetryEnabled)}static async init(e){const t=new Gi(e);await t.initialize();const r=await t.crypto.getClientId();return await t.storage.setItem("WALLETCONNECT_CLIENT_ID",r),t}get context(){return(0,b.oI)(this.logger)}async start(){this.initialized||await this.initialize()}async getLogsBlob(){var e;return null==(e=this.logChunkController)?void 0:e.logsToBlob({clientId:await this.crypto.getClientId()})}async addLinkModeSupportedApp(e){this.linkModeSupportedApps.includes(e)||(this.linkModeSupportedApps.push(e),await this.storage.setItem(cr,this.linkModeSupportedApps))}async initialize(){this.logger.trace("Initialized");try{await this.crypto.init(),await this.history.init(),await this.expirer.init(),await this.relayer.init(),await this.heartbeat.init(),await this.pairing.init(),this.eventClient.init(),this.linkModeSupportedApps=await this.storage.getItem(cr)||[],this.initialized=!0,this.logger.info("Core Initialization Success")}catch(e){throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`,e),this.logger.error(e.message),e}}}const Zi=Gi,Ki="client",Ji=`wc@2:${Ki}:`,Qi=Ki,Yi="WALLETCONNECT_DEEPLINK_CHOICE",Xi="Proposal expired",es=pe.SEVEN_DAYS,ts={wc_sessionPropose:{req:{ttl:pe.FIVE_MINUTES,prompt:!0,tag:1100},res:{ttl:pe.FIVE_MINUTES,prompt:!1,tag:1101},reject:{ttl:pe.FIVE_MINUTES,prompt:!1,tag:1120},autoReject:{ttl:pe.FIVE_MINUTES,prompt:!1,tag:1121}},wc_sessionSettle:{req:{ttl:pe.FIVE_MINUTES,prompt:!1,tag:1102},res:{ttl:pe.FIVE_MINUTES,prompt:!1,tag:1103}},wc_sessionUpdate:{req:{ttl:pe.ONE_DAY,prompt:!1,tag:1104},res:{ttl:pe.ONE_DAY,prompt:!1,tag:1105}},wc_sessionExtend:{req:{ttl:pe.ONE_DAY,prompt:!1,tag:1106},res:{ttl:pe.ONE_DAY,prompt:!1,tag:1107}},wc_sessionRequest:{req:{ttl:pe.FIVE_MINUTES,prompt:!0,tag:1108},res:{ttl:pe.FIVE_MINUTES,prompt:!1,tag:1109}},wc_sessionEvent:{req:{ttl:pe.FIVE_MINUTES,prompt:!0,tag:1110},res:{ttl:pe.FIVE_MINUTES,prompt:!1,tag:1111}},wc_sessionDelete:{req:{ttl:pe.ONE_DAY,prompt:!1,tag:1112},res:{ttl:pe.ONE_DAY,prompt:!1,tag:1113}},wc_sessionPing:{req:{ttl:pe.ONE_DAY,prompt:!1,tag:1114},res:{ttl:pe.ONE_DAY,prompt:!1,tag:1115}},wc_sessionAuthenticate:{req:{ttl:pe.ONE_HOUR,prompt:!0,tag:1116},res:{ttl:pe.ONE_HOUR,prompt:!1,tag:1117},reject:{ttl:pe.FIVE_MINUTES,prompt:!1,tag:1118},autoReject:{ttl:pe.FIVE_MINUTES,prompt:!1,tag:1119}}},rs={min:pe.FIVE_MINUTES,max:pe.SEVEN_DAYS},ns="IDLE",is="ACTIVE",ss=["wc_sessionPropose","wc_sessionRequest","wc_authRequest","wc_sessionAuthenticate"],os="wc@1.5:auth:",as=`${os}:PUB_KEY`;var cs=Object.defineProperty,ls=Object.defineProperties,us=Object.getOwnPropertyDescriptors,hs=Object.getOwnPropertySymbols,ds=Object.prototype.hasOwnProperty,fs=Object.prototype.propertyIsEnumerable,ps=(e,t,r)=>t in e?cs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,gs=(e,t)=>{for(var r in t||(t={}))ds.call(t,r)&&ps(e,r,t[r]);if(hs)for(var r of hs(t))fs.call(t,r)&&ps(e,r,t[r]);return e},ms=(e,t)=>ls(e,us(t));class ws extends ot{constructor(e){super(e),this.name="engine",this.events=new(fe()),this.initialized=!1,this.requestQueue={state:ns,queue:[]},this.sessionRequestQueue={state:ns,queue:[]},this.requestQueueDelay=pe.ONE_SECOND,this.expectedPairingMethodMap=new Map,this.recentlyDeletedMap=new Map,this.recentlyDeletedLimit=200,this.relayMessageCache=[],this.init=async()=>{this.initialized||(await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.registerPairingEvents(),await this.registerLinkModeListeners(),this.client.core.pairing.register({methods:Object.keys(ts)}),this.initialized=!0,setTimeout((()=>{this.sessionRequestQueue.queue=this.getPendingSessionRequests(),this.processSessionRequestQueue()}),(0,pe.toMiliseconds)(this.requestQueueDelay)))},this.connect=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();const t=ms(gs({},e),{requiredNamespaces:e.requiredNamespaces||{},optionalNamespaces:e.optionalNamespaces||{}});await this.isValidConnect(t);const{pairingTopic:r,requiredNamespaces:n,optionalNamespaces:i,sessionProperties:s,relays:o}=t;let a,c=r,l=!1;try{c&&(l=this.client.core.pairing.pairings.get(c).active)}catch(e){throw this.client.logger.error(`connect() -> pairing.get(${c}) failed`),e}if(!c||!l){const{topic:e,uri:t}=await this.client.core.pairing.create();c=e,a=t}if(!c){const{message:e}=(0,ct.GuA)("NO_MATCHING_KEY",`connect() pairing topic: ${c}`);throw new Error(e)}const u=await this.client.core.crypto.generateKeyPair(),h=ts.wc_sessionPropose.req.ttl||pe.FIVE_MINUTES,d=(0,ct.Xw0)(h),f=gs({requiredNamespaces:n,optionalNamespaces:i,relays:o??[{protocol:"irn"}],proposer:{publicKey:u,metadata:this.client.metadata},expiryTimestamp:d,pairingTopic:c},s&&{sessionProperties:s}),{reject:p,resolve:g,done:m}=(0,ct.Wx8)(h,Xi);this.events.once((0,ct.hEn)("session_connect"),(async({error:e,session:t})=>{if(e)p(e);else if(t){t.self.publicKey=u;const e=ms(gs({},t),{pairingTopic:f.pairingTopic,requiredNamespaces:f.requiredNamespaces,optionalNamespaces:f.optionalNamespaces,transportType:ar.relay});await this.client.session.set(t.topic,e),await this.setExpiry(t.topic,t.expiry),c&&await this.client.core.pairing.updateMetadata({topic:c,metadata:t.peer.metadata}),this.cleanupDuplicatePairings(e),g(e)}}));const w=await this.sendRequest({topic:c,method:"wc_sessionPropose",params:f,throwOnFailedPublish:!0});return await this.setProposal(w,gs({id:w},f)),{uri:a,approval:m}},this.pair=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{return await this.client.core.pairing.pair(e)}catch(e){throw this.client.logger.error("pair() failed"),e}},this.approve=async e=>{var t,r,n;const i=this.client.core.eventClient.createEvent({properties:{topic:null==(t=e?.id)?void 0:t.toString(),trace:[kr]}});try{this.isInitialized(),await this.confirmOnlineStateOrThrow()}catch(e){throw i.setError("no_internet_connection"),e}try{await this.isValidProposalId(e?.id)}catch(t){throw this.client.logger.error(`approve() -> proposal.get(${e?.id}) failed`),i.setError("proposal_not_found"),t}try{await this.isValidApprove(e)}catch(e){throw this.client.logger.error("approve() -> isValidApprove() failed"),i.setError("session_approve_namespace_validation_failure"),e}const{id:s,relayProtocol:o,namespaces:a,sessionProperties:c,sessionConfig:l}=e,u=this.client.proposal.get(s);this.client.core.eventClient.deleteEvent({eventId:i.eventId});const{pairingTopic:h,proposer:d,requiredNamespaces:f,optionalNamespaces:p}=u;let g=null==(r=this.client.core.eventClient)?void 0:r.getEvent({topic:h});g||(g=null==(n=this.client.core.eventClient)?void 0:n.createEvent({type:kr,properties:{topic:h,trace:[kr,"session_namespaces_validation_success"]}}));const m=await this.client.core.crypto.generateKeyPair(),w=d.publicKey,y=await this.client.core.crypto.generateSharedKey(m,w),b=gs(gs({relay:{protocol:o??"irn"},namespaces:a,controller:{publicKey:m,metadata:this.client.metadata},expiry:(0,ct.Xw0)(es)},c&&{sessionProperties:c}),l&&{sessionConfig:l}),v=ar.relay;g.addTrace("subscribing_session_topic");try{await this.client.core.relayer.subscribe(y,{transportType:v})}catch(e){throw g.setError("subscribe_session_topic_failure"),e}g.addTrace("subscribe_session_topic_success");const A=ms(gs({},b),{topic:y,requiredNamespaces:f,optionalNamespaces:p,pairingTopic:h,acknowledged:!1,self:b.controller,peer:{publicKey:d.publicKey,metadata:d.metadata},controller:m,transportType:ar.relay});await this.client.session.set(y,A),g.addTrace("store_session");try{g.addTrace("publishing_session_settle"),await this.sendRequest({topic:y,method:"wc_sessionSettle",params:b,throwOnFailedPublish:!0}).catch((e=>{throw g?.setError("session_settle_publish_failure"),e})),g.addTrace("session_settle_publish_success"),g.addTrace("publishing_session_approve"),await this.sendResult({id:s,topic:h,result:{relay:{protocol:o??"irn"},responderPublicKey:m},throwOnFailedPublish:!0}).catch((e=>{throw g?.setError("session_approve_publish_failure"),e})),g.addTrace("session_approve_publish_success")}catch(e){throw this.client.logger.error(e),this.client.session.delete(y,(0,ct.Hjj)("USER_DISCONNECTED")),await this.client.core.relayer.unsubscribe(y),e}return this.client.core.eventClient.deleteEvent({eventId:g.eventId}),await this.client.core.pairing.updateMetadata({topic:h,metadata:d.metadata}),await this.client.proposal.delete(s,(0,ct.Hjj)("USER_DISCONNECTED")),await this.client.core.pairing.activate({topic:h}),await this.setExpiry(y,(0,ct.Xw0)(es)),{topic:y,acknowledged:()=>Promise.resolve(this.client.session.get(y))}},this.reject=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidReject(e)}catch(e){throw this.client.logger.error("reject() -> isValidReject() failed"),e}const{id:t,reason:r}=e;let n;try{n=this.client.proposal.get(t).pairingTopic}catch(e){throw this.client.logger.error(`reject() -> proposal.get(${t}) failed`),e}n&&(await this.sendError({id:t,topic:n,error:r,rpcOpts:ts.wc_sessionPropose.reject}),await this.client.proposal.delete(t,(0,ct.Hjj)("USER_DISCONNECTED")))},this.update=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidUpdate(e)}catch(e){throw this.client.logger.error("update() -> isValidUpdate() failed"),e}const{topic:t,namespaces:r}=e,{done:n,resolve:i,reject:s}=(0,ct.Wx8)(),o=xt(),a=Et().toString(),c=this.client.session.get(t).namespaces;return this.events.once((0,ct.hEn)("session_update",o),(({error:e})=>{e?s(e):i()})),await this.client.session.update(t,{namespaces:r}),await this.sendRequest({topic:t,method:"wc_sessionUpdate",params:{namespaces:r},throwOnFailedPublish:!0,clientRpcId:o,relayRpcId:a}).catch((e=>{this.client.logger.error(e),this.client.session.update(t,{namespaces:c}),s(e)})),{acknowledged:n}},this.extend=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidExtend(e)}catch(e){throw this.client.logger.error("extend() -> isValidExtend() failed"),e}const{topic:t}=e,r=xt(),{done:n,resolve:i,reject:s}=(0,ct.Wx8)();return this.events.once((0,ct.hEn)("session_extend",r),(({error:e})=>{e?s(e):i()})),await this.setExpiry(t,(0,ct.Xw0)(es)),this.sendRequest({topic:t,method:"wc_sessionExtend",params:{},clientRpcId:r,throwOnFailedPublish:!0}).catch((e=>{s(e)})),{acknowledged:n}},this.request=async e=>{this.isInitialized();try{await this.isValidRequest(e)}catch(e){throw this.client.logger.error("request() -> isValidRequest() failed"),e}const{chainId:t,request:r,topic:n,expiry:i=ts.wc_sessionRequest.req.ttl}=e,s=this.client.session.get(n);s?.transportType===ar.relay&&await this.confirmOnlineStateOrThrow();const o=xt(),a=Et().toString(),{done:c,resolve:l,reject:u}=(0,ct.Wx8)(i,"Request expired. Please try again.");this.events.once((0,ct.hEn)("session_request",o),(({error:e,result:t})=>{e?u(e):l(t)}));const h=this.getAppLinkIfEnabled(s.peer.metadata,s.transportType);return h?(await this.sendRequest({clientRpcId:o,relayRpcId:a,topic:n,method:"wc_sessionRequest",params:{request:ms(gs({},r),{expiryTimestamp:(0,ct.Xw0)(i)}),chainId:t},expiry:i,throwOnFailedPublish:!0,appLink:h}).catch((e=>u(e))),this.client.events.emit("session_request_sent",{topic:n,request:r,chainId:t,id:o}),await c()):await Promise.all([new Promise((async e=>{await this.sendRequest({clientRpcId:o,relayRpcId:a,topic:n,method:"wc_sessionRequest",params:{request:ms(gs({},r),{expiryTimestamp:(0,ct.Xw0)(i)}),chainId:t},expiry:i,throwOnFailedPublish:!0}).catch((e=>u(e))),this.client.events.emit("session_request_sent",{topic:n,request:r,chainId:t,id:o}),e()})),new Promise((async e=>{var t;if(null==(t=s.sessionConfig)||!t.disableDeepLink){const e=await(0,ct.jTh)(this.client.core.storage,Yi);await(0,ct.n3s)({id:o,topic:n,wcDeepLink:e})}e()})),c()]).then((e=>e[2]))},this.respond=async e=>{this.isInitialized(),await this.isValidRespond(e);const{topic:t,response:r}=e,{id:n}=r,i=this.client.session.get(t);i.transportType===ar.relay&&await this.confirmOnlineStateOrThrow();const s=this.getAppLinkIfEnabled(i.peer.metadata,i.transportType);Ut(r)?await this.sendResult({id:n,topic:t,result:r.result,throwOnFailedPublish:!0,appLink:s}):Dt(r)&&await this.sendError({id:n,topic:t,error:r.error,appLink:s}),this.cleanupAfterResponse(e)},this.ping=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidPing(e)}catch(e){throw this.client.logger.error("ping() -> isValidPing() failed"),e}const{topic:t}=e;if(this.client.session.keys.includes(t)){const e=xt(),r=Et().toString(),{done:n,resolve:i,reject:s}=(0,ct.Wx8)();this.events.once((0,ct.hEn)("session_ping",e),(({error:e})=>{e?s(e):i()})),await Promise.all([this.sendRequest({topic:t,method:"wc_sessionPing",params:{},throwOnFailedPublish:!0,clientRpcId:e,relayRpcId:r}),n()])}else this.client.core.pairing.pairings.keys.includes(t)&&await this.client.core.pairing.ping({topic:t})},this.emit=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidEmit(e);const{topic:t,event:r,chainId:n}=e,i=Et().toString();await this.sendRequest({topic:t,method:"wc_sessionEvent",params:{event:r,chainId:n},throwOnFailedPublish:!0,relayRpcId:i})},this.disconnect=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidDisconnect(e);const{topic:t}=e;if(this.client.session.keys.includes(t))await this.sendRequest({topic:t,method:"wc_sessionDelete",params:(0,ct.Hjj)("USER_DISCONNECTED"),throwOnFailedPublish:!0}),await this.deleteSession({topic:t,emitEvent:!1});else{if(!this.client.core.pairing.pairings.keys.includes(t)){const{message:e}=(0,ct.GuA)("MISMATCHED_TOPIC",`Session or pairing topic not found: ${t}`);throw new Error(e)}await this.client.core.pairing.disconnect({topic:t})}},this.find=e=>(this.isInitialized(),this.client.session.getAll().filter((t=>(0,ct.HNf)(t,e)))),this.getPendingSessionRequests=()=>this.client.pendingRequest.getAll(),this.authenticate=async(e,t)=>{var r;this.isInitialized(),this.isValidAuthenticate(e);const n=t&&this.client.core.linkModeSupportedApps.includes(t)&&(null==(r=this.client.metadata.redirect)?void 0:r.linkMode),i=n?ar.link_mode:ar.relay;i===ar.relay&&await this.confirmOnlineStateOrThrow();const{chains:s,statement:o="",uri:a,domain:c,nonce:l,type:u,exp:h,nbf:d,methods:f=[],expiry:p}=e,g=[...e.resources||[]],{topic:m,uri:w}=await this.client.core.pairing.create({methods:["wc_sessionAuthenticate"],transportType:i});this.client.logger.info({message:"Generated new pairing",pairing:{topic:m,uri:w}});const y=await this.client.core.crypto.generateKeyPair(),b=(0,ct.EN$)(y);if(await Promise.all([this.client.auth.authKeys.set(as,{responseTopic:b,publicKey:y}),this.client.auth.pairingTopics.set(b,{topic:b,pairingTopic:m})]),await this.client.core.relayer.subscribe(b,{transportType:i}),this.client.logger.info(`sending request to new pairing topic: ${m}`),f.length>0){const{namespace:e}=(0,ct._Yb)(s[0]);let t=(0,ct.e8_)(e,"request",f);(0,ct.VBM)(g)&&(t=(0,ct.hVC)(t,g.pop())),g.push(t)}const v=p&&p>ts.wc_sessionAuthenticate.req.ttl?p:ts.wc_sessionAuthenticate.req.ttl,A={authPayload:{type:u??"caip122",chains:s,statement:o,aud:a,domain:c,version:"1",nonce:l,iat:(new Date).toISOString(),exp:h,nbf:d,resources:g},requester:{publicKey:y,metadata:this.client.metadata},expiryTimestamp:(0,ct.Xw0)(v)},x={requiredNamespaces:{},optionalNamespaces:{eip155:{chains:s,methods:[...new Set(["personal_sign",...f])],events:["chainChanged","accountsChanged"]}},relays:[{protocol:"irn"}],pairingTopic:m,proposer:{publicKey:y,metadata:this.client.metadata},expiryTimestamp:(0,ct.Xw0)(ts.wc_sessionPropose.req.ttl)},{done:E,resolve:C,reject:_}=(0,ct.Wx8)(v,"Request expired"),k=async({error:e,session:t})=>{if(this.events.off((0,ct.hEn)("session_request",I),S),e)_(e);else if(t){t.self.publicKey=y,await this.client.session.set(t.topic,t),await this.setExpiry(t.topic,t.expiry),m&&await this.client.core.pairing.updateMetadata({topic:m,metadata:t.peer.metadata});const e=this.client.session.get(t.topic);await this.deleteProposal(T),C({session:e})}},S=async e=>{var r,n,s;if(await this.deletePendingAuthRequest(I,{message:"fulfilled",code:0}),e.error){const t=(0,ct.Hjj)("WC_METHOD_UNSUPPORTED","wc_sessionAuthenticate");return e.error.code===t.code?void 0:(this.events.off((0,ct.hEn)("session_connect"),k),_(e.error.message))}await this.deleteProposal(T),this.events.off((0,ct.hEn)("session_connect"),k);const{cacaos:o,responder:a}=e.result,c=[],l=[];for(const e of o){await(0,ct.IjX)({cacao:e,projectId:this.client.core.projectId})||(this.client.logger.error(e,"Signature verification failed"),_((0,ct.Hjj)("SESSION_SETTLEMENT_FAILED","Signature verification failed")));const{p:t}=e,r=(0,ct.VBM)(t.resources),n=[(0,ct.xkc)(t.iss)],i=(0,ct.q_h)(t.iss);if(r){const e=(0,ct.sc_)(r),t=(0,ct.WWN)(r);c.push(...e),n.push(...t)}for(const e of n)l.push(`${e}:${i}`)}const u=await this.client.core.crypto.generateSharedKey(y,a.publicKey);let h;c.length>0&&(h={topic:u,acknowledged:!0,self:{publicKey:y,metadata:this.client.metadata},peer:a,controller:a.publicKey,expiry:(0,ct.Xw0)(es),requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:m,namespaces:(0,ct.Van)([...new Set(c)],[...new Set(l)]),transportType:i},await this.client.core.relayer.subscribe(u,{transportType:i}),await this.client.session.set(u,h),m&&await this.client.core.pairing.updateMetadata({topic:m,metadata:a.metadata}),h=this.client.session.get(u)),null!=(r=this.client.metadata.redirect)&&r.linkMode&&null!=(n=a.metadata.redirect)&&n.linkMode&&null!=(s=a.metadata.redirect)&&s.universal&&t&&(this.client.core.addLinkModeSupportedApp(a.metadata.redirect.universal),this.client.session.update(u,{transportType:ar.link_mode})),C({auths:o,session:h})},I=xt(),T=xt();let P;this.events.once((0,ct.hEn)("session_connect"),k),this.events.once((0,ct.hEn)("session_request",I),S);try{if(n){const e=Ct("wc_sessionAuthenticate",A,I);this.client.core.history.set(m,e);const r=await this.client.core.crypto.encode("",e,{type:ct.EHS,encoding:ct.Pa8});P=(0,ct.$Bq)(t,m,r)}else await Promise.all([this.sendRequest({topic:m,method:"wc_sessionAuthenticate",params:A,expiry:e.expiry,throwOnFailedPublish:!0,clientRpcId:I}),this.sendRequest({topic:m,method:"wc_sessionPropose",params:x,expiry:ts.wc_sessionPropose.req.ttl,throwOnFailedPublish:!0,clientRpcId:T})])}catch(e){throw this.events.off((0,ct.hEn)("session_connect"),k),this.events.off((0,ct.hEn)("session_request",I),S),e}return await this.setProposal(T,gs({id:T},x)),await this.setAuthRequest(I,{request:ms(gs({},A),{verifyContext:{}}),pairingTopic:m,transportType:i}),{uri:P??w,response:E}},this.approveSessionAuthenticate=async e=>{const{id:t,auths:r}=e,n=this.client.core.eventClient.createEvent({properties:{topic:t.toString(),trace:["authenticated_session_approve_started"]}});try{this.isInitialized()}catch(e){throw n.setError("no_internet_connection"),e}const i=this.getPendingAuthRequest(t);if(!i)throw n.setError("authenticated_session_pending_request_not_found"),new Error(`Could not find pending auth request with id ${t}`);const s=i.transportType||ar.relay;s===ar.relay&&await this.confirmOnlineStateOrThrow();const o=i.requester.publicKey,a=await this.client.core.crypto.generateKeyPair(),c=(0,ct.EN$)(o),l={type:ct.Lp_,receiverPublicKey:o,senderPublicKey:a},u=[],h=[];for(const e of r){if(!await(0,ct.IjX)({cacao:e,projectId:this.client.core.projectId})){n.setError("invalid_cacao");const e=(0,ct.Hjj)("SESSION_SETTLEMENT_FAILED","Signature verification failed");throw await this.sendError({id:t,topic:c,error:e,encodeOpts:l}),new Error(e.message)}n.addTrace("cacaos_verified");const{p:r}=e,i=(0,ct.VBM)(r.resources),s=[(0,ct.xkc)(r.iss)],o=(0,ct.q_h)(r.iss);if(i){const e=(0,ct.sc_)(i),t=(0,ct.WWN)(i);u.push(...e),s.push(...t)}for(const e of s)h.push(`${e}:${o}`)}const d=await this.client.core.crypto.generateSharedKey(a,o);let f;if(n.addTrace("create_authenticated_session_topic"),u?.length>0){f={topic:d,acknowledged:!0,self:{publicKey:a,metadata:this.client.metadata},peer:{publicKey:o,metadata:i.requester.metadata},controller:o,expiry:(0,ct.Xw0)(es),authentication:r,requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:i.pairingTopic,namespaces:(0,ct.Van)([...new Set(u)],[...new Set(h)]),transportType:s},n.addTrace("subscribing_authenticated_session_topic");try{await this.client.core.relayer.subscribe(d,{transportType:s})}catch(e){throw n.setError("subscribe_authenticated_session_topic_failure"),e}n.addTrace("subscribe_authenticated_session_topic_success"),await this.client.session.set(d,f),n.addTrace("store_authenticated_session"),await this.client.core.pairing.updateMetadata({topic:i.pairingTopic,metadata:i.requester.metadata})}n.addTrace("publishing_authenticated_session_approve");try{await this.sendResult({topic:c,id:t,result:{cacaos:r,responder:{publicKey:a,metadata:this.client.metadata}},encodeOpts:l,throwOnFailedPublish:!0,appLink:this.getAppLinkIfEnabled(i.requester.metadata,s)})}catch(e){throw n.setError("authenticated_session_approve_publish_failure"),e}return await this.client.auth.requests.delete(t,{message:"fulfilled",code:0}),await this.client.core.pairing.activate({topic:i.pairingTopic}),this.client.core.eventClient.deleteEvent({eventId:n.eventId}),{session:f}},this.rejectSessionAuthenticate=async e=>{this.isInitialized();const{id:t,reason:r}=e,n=this.getPendingAuthRequest(t);if(!n)throw new Error(`Could not find pending auth request with id ${t}`);n.transportType===ar.relay&&await this.confirmOnlineStateOrThrow();const i=n.requester.publicKey,s=await this.client.core.crypto.generateKeyPair(),o=(0,ct.EN$)(i),a={type:ct.Lp_,receiverPublicKey:i,senderPublicKey:s};await this.sendError({id:t,topic:o,error:r,encodeOpts:a,rpcOpts:ts.wc_sessionAuthenticate.reject,appLink:this.getAppLinkIfEnabled(n.requester.metadata,n.transportType)}),await this.client.auth.requests.delete(t,{message:"rejected",code:0}),await this.client.proposal.delete(t,(0,ct.Hjj)("USER_DISCONNECTED"))},this.formatAuthMessage=e=>{this.isInitialized();const{request:t,iss:r}=e;return(0,ct.hwK)(t,r)},this.processRelayMessageCache=()=>{setTimeout((async()=>{if(0!==this.relayMessageCache.length)for(;this.relayMessageCache.length>0;)try{const e=this.relayMessageCache.shift();e&&await this.onRelayMessage(e)}catch(e){this.client.logger.error(e)}}),50)},this.cleanupDuplicatePairings=async e=>{if(e.pairingTopic)try{const t=this.client.core.pairing.pairings.get(e.pairingTopic),r=this.client.core.pairing.pairings.getAll().filter((r=>{var n,i;return(null==(n=r.peerMetadata)?void 0:n.url)&&(null==(i=r.peerMetadata)?void 0:i.url)===e.peer.metadata.url&&r.topic&&r.topic!==t.topic}));if(0===r.length)return;this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`),await Promise.all(r.map((e=>this.client.core.pairing.disconnect({topic:e.topic})))),this.client.logger.info("Duplicate pairings clean up finished")}catch(e){this.client.logger.error(e)}},this.deleteSession=async e=>{var t;const{topic:r,expirerHasDeleted:n=!1,emitEvent:i=!0,id:s=0}=e,{self:o}=this.client.session.get(r);await this.client.core.relayer.unsubscribe(r),await this.client.session.delete(r,(0,ct.Hjj)("USER_DISCONNECTED")),this.addToRecentlyDeleted(r,"session"),this.client.core.crypto.keychain.has(o.publicKey)&&await this.client.core.crypto.deleteKeyPair(o.publicKey),this.client.core.crypto.keychain.has(r)&&await this.client.core.crypto.deleteSymKey(r),n||this.client.core.expirer.del(r),this.client.core.storage.removeItem(Yi).catch((e=>this.client.logger.warn(e))),this.getPendingSessionRequests().forEach((e=>{e.topic===r&&this.deletePendingSessionRequest(e.id,(0,ct.Hjj)("USER_DISCONNECTED"))})),r===(null==(t=this.sessionRequestQueue.queue[0])?void 0:t.topic)&&(this.sessionRequestQueue.state=ns),i&&this.client.events.emit("session_delete",{id:s,topic:r})},this.deleteProposal=async(e,t)=>{if(t)try{const t=this.client.proposal.get(e),r=this.client.core.eventClient.getEvent({topic:t.pairingTopic});r?.setError("proposal_expired")}catch{}await Promise.all([this.client.proposal.delete(e,(0,ct.Hjj)("USER_DISCONNECTED")),t?Promise.resolve():this.client.core.expirer.del(e)]),this.addToRecentlyDeleted(e,"proposal")},this.deletePendingSessionRequest=async(e,t,r=!1)=>{await Promise.all([this.client.pendingRequest.delete(e,t),r?Promise.resolve():this.client.core.expirer.del(e)]),this.addToRecentlyDeleted(e,"request"),this.sessionRequestQueue.queue=this.sessionRequestQueue.queue.filter((t=>t.id!==e)),r&&(this.sessionRequestQueue.state=ns,this.client.events.emit("session_request_expire",{id:e}))},this.deletePendingAuthRequest=async(e,t,r=!1)=>{await Promise.all([this.client.auth.requests.delete(e,t),r?Promise.resolve():this.client.core.expirer.del(e)])},this.setExpiry=async(e,t)=>{this.client.session.keys.includes(e)&&(this.client.core.expirer.set(e,t),await this.client.session.update(e,{expiry:t}))},this.setProposal=async(e,t)=>{this.client.core.expirer.set(e,(0,ct.Xw0)(ts.wc_sessionPropose.req.ttl)),await this.client.proposal.set(e,t)},this.setAuthRequest=async(e,t)=>{const{request:r,pairingTopic:n,transportType:i=ar.relay}=t;this.client.core.expirer.set(e,r.expiryTimestamp),await this.client.auth.requests.set(e,{authPayload:r.authPayload,requester:r.requester,expiryTimestamp:r.expiryTimestamp,id:e,pairingTopic:n,verifyContext:r.verifyContext,transportType:i})},this.setPendingSessionRequest=async e=>{const{id:t,topic:r,params:n,verifyContext:i}=e,s=n.request.expiryTimestamp||(0,ct.Xw0)(ts.wc_sessionRequest.req.ttl);this.client.core.expirer.set(t,s),await this.client.pendingRequest.set(t,{id:t,topic:r,params:n,verifyContext:i})},this.sendRequest=async e=>{const{topic:t,method:r,params:n,expiry:s,relayRpcId:o,clientRpcId:a,throwOnFailedPublish:c,appLink:l}=e,u=Ct(r,n,a);let h;const d=!!l;try{const e=d?ct.Pa8:ct.EWt;h=await this.client.core.crypto.encode(t,u,{encoding:e})}catch(e){throw await this.cleanup(),this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${t} failed`),e}let f;if(ss.includes(r)){const e=(0,ct.ALl)(JSON.stringify(u)),t=(0,ct.ALl)(h);f=await this.client.core.verify.register({id:t,decryptedId:e})}const p=ts[r].req;if(p.attestation=f,s&&(p.ttl=s),o&&(p.id=o),this.client.core.history.set(t,u),d){const e=(0,ct.$Bq)(l,t,h);await i.g.Linking.openURL(e,this.client.name)}else{const e=ts[r].req;s&&(e.ttl=s),o&&(e.id=o),c?(e.internal=ms(gs({},e.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(t,h,e)):this.client.core.relayer.publish(t,h,e).catch((e=>this.client.logger.error(e)))}return u.id},this.sendResult=async e=>{const{id:t,topic:r,result:n,throwOnFailedPublish:s,encodeOpts:o,appLink:a}=e,c=_t(t,n);let l;const u=a&&typeof(null==i.g?void 0:i.g.Linking)<"u";try{const e=u?ct.Pa8:ct.EWt;l=await this.client.core.crypto.encode(r,c,ms(gs({},o||{}),{encoding:e}))}catch(e){throw await this.cleanup(),this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${r} failed`),e}let h;try{h=await this.client.core.history.get(r,t)}catch(e){throw this.client.logger.error(`sendResult() -> history.get(${r}, ${t}) failed`),e}if(u){const e=(0,ct.$Bq)(a,r,l);await i.g.Linking.openURL(e,this.client.name)}else{const e=ts[h.request.method].res;s?(e.internal=ms(gs({},e.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(r,l,e)):this.client.core.relayer.publish(r,l,e).catch((e=>this.client.logger.error(e)))}await this.client.core.history.resolve(c)},this.sendError=async e=>{const{id:t,topic:r,error:n,encodeOpts:s,rpcOpts:o,appLink:a}=e,c=kt(t,n);let l;const u=a&&typeof(null==i.g?void 0:i.g.Linking)<"u";try{const e=u?ct.Pa8:ct.EWt;l=await this.client.core.crypto.encode(r,c,ms(gs({},s||{}),{encoding:e}))}catch(e){throw await this.cleanup(),this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${r} failed`),e}let h;try{h=await this.client.core.history.get(r,t)}catch(e){throw this.client.logger.error(`sendError() -> history.get(${r}, ${t}) failed`),e}if(u){const e=(0,ct.$Bq)(a,r,l);await i.g.Linking.openURL(e,this.client.name)}else{const e=o||ts[h.request.method].res;this.client.core.relayer.publish(r,l,e)}await this.client.core.history.resolve(c)},this.cleanup=async()=>{const e=[],t=[];this.client.session.getAll().forEach((t=>{let r=!1;(0,ct._dF)(t.expiry)&&(r=!0),this.client.core.crypto.keychain.has(t.topic)||(r=!0),r&&e.push(t.topic)})),this.client.proposal.getAll().forEach((e=>{(0,ct._dF)(e.expiryTimestamp)&&t.push(e.id)})),await Promise.all([...e.map((e=>this.deleteSession({topic:e}))),...t.map((e=>this.deleteProposal(e)))])},this.onRelayEventRequest=async e=>{this.requestQueue.queue.push(e),await this.processRequestsQueue()},this.processRequestsQueue=async()=>{if(this.requestQueue.state!==is){for(this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`);this.requestQueue.queue.length>0;){this.requestQueue.state=is;const e=this.requestQueue.queue.shift();if(e)try{await this.processRequest(e)}catch(e){this.client.logger.warn(e)}}this.requestQueue.state=ns}else this.client.logger.info("Request queue already active, skipping...")},this.processRequest=async e=>{const{topic:t,payload:r,attestation:n,transportType:i,encryptedId:s}=e,o=r.method;if(!this.shouldIgnorePairingRequest({topic:t,requestMethod:o}))switch(o){case"wc_sessionPropose":return await this.onSessionProposeRequest({topic:t,payload:r,attestation:n,encryptedId:s});case"wc_sessionSettle":return await this.onSessionSettleRequest(t,r);case"wc_sessionUpdate":return await this.onSessionUpdateRequest(t,r);case"wc_sessionExtend":return await this.onSessionExtendRequest(t,r);case"wc_sessionPing":return await this.onSessionPingRequest(t,r);case"wc_sessionDelete":return await this.onSessionDeleteRequest(t,r);case"wc_sessionRequest":return await this.onSessionRequest({topic:t,payload:r,attestation:n,encryptedId:s,transportType:i});case"wc_sessionEvent":return await this.onSessionEventRequest(t,r);case"wc_sessionAuthenticate":return await this.onSessionAuthenticateRequest({topic:t,payload:r,attestation:n,encryptedId:s,transportType:i});default:return this.client.logger.info(`Unsupported request method ${o}`)}},this.onRelayEventResponse=async e=>{const{topic:t,payload:r,transportType:n}=e,i=(await this.client.core.history.get(t,r.id)).request.method;switch(i){case"wc_sessionPropose":return this.onSessionProposeResponse(t,r,n);case"wc_sessionSettle":return this.onSessionSettleResponse(t,r);case"wc_sessionUpdate":return this.onSessionUpdateResponse(t,r);case"wc_sessionExtend":return this.onSessionExtendResponse(t,r);case"wc_sessionPing":return this.onSessionPingResponse(t,r);case"wc_sessionRequest":return this.onSessionRequestResponse(t,r);case"wc_sessionAuthenticate":return this.onSessionAuthenticateResponse(t,r);default:return this.client.logger.info(`Unsupported response method ${i}`)}},this.onRelayEventUnknownPayload=e=>{const{topic:t}=e,{message:r}=(0,ct.GuA)("MISSING_OR_INVALID",`Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);throw new Error(r)},this.shouldIgnorePairingRequest=e=>{const{topic:t,requestMethod:r}=e,n=this.expectedPairingMethodMap.get(t);return!(!n||n.includes(r)||!(n.includes("wc_sessionAuthenticate")&&this.client.events.listenerCount("session_authenticate")>0))},this.onSessionProposeRequest=async e=>{const{topic:t,payload:r,attestation:n,encryptedId:i}=e,{params:s,id:o}=r;try{const e=this.client.core.eventClient.getEvent({topic:t});this.isValidConnect(gs({},r.params));const a=s.expiryTimestamp||(0,ct.Xw0)(ts.wc_sessionPropose.req.ttl),c=gs({id:o,pairingTopic:t,expiryTimestamp:a},s);await this.setProposal(o,c);const l=await this.getVerifyContext({attestationId:n,hash:(0,ct.ALl)(JSON.stringify(r)),encryptedId:i,metadata:c.proposer.metadata});0===this.client.events.listenerCount("session_proposal")&&(console.warn("No listener for session_proposal event"),e?.setError("proposal_listener_not_found")),e?.addTrace("emit_session_proposal"),this.client.events.emit("session_proposal",{id:o,params:c,verifyContext:l})}catch(e){await this.sendError({id:o,topic:t,error:e,rpcOpts:ts.wc_sessionPropose.autoReject}),this.client.logger.error(e)}},this.onSessionProposeResponse=async(e,t,r)=>{const{id:n}=t;if(Ut(t)){const{result:i}=t;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",result:i});const s=this.client.proposal.get(n);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",proposal:s});const o=s.proposer.publicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",selfPublicKey:o});const a=i.responderPublicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",peerPublicKey:a});const c=await this.client.core.crypto.generateSharedKey(o,a);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",sessionTopic:c});const l=await this.client.core.relayer.subscribe(c,{transportType:r});this.client.logger.trace({type:"method",method:"onSessionProposeResponse",subscriptionId:l}),await this.client.core.pairing.activate({topic:e})}else if(Dt(t)){await this.client.proposal.delete(n,(0,ct.Hjj)("USER_DISCONNECTED"));const e=(0,ct.hEn)("session_connect");if(0===this.events.listenerCount(e))throw new Error(`emitting ${e} without any listeners, 954`);this.events.emit((0,ct.hEn)("session_connect"),{error:t.error})}},this.onSessionSettleRequest=async(e,t)=>{const{id:r,params:n}=t;try{this.isValidSessionSettleRequest(n);const{relay:r,controller:i,expiry:s,namespaces:o,sessionProperties:a,sessionConfig:c}=t.params,l=ms(gs(gs({topic:e,relay:r,expiry:s,namespaces:o,acknowledged:!0,pairingTopic:"",requiredNamespaces:{},optionalNamespaces:{},controller:i.publicKey,self:{publicKey:"",metadata:this.client.metadata},peer:{publicKey:i.publicKey,metadata:i.metadata}},a&&{sessionProperties:a}),c&&{sessionConfig:c}),{transportType:ar.relay}),u=(0,ct.hEn)("session_connect");if(0===this.events.listenerCount(u))throw new Error(`emitting ${u} without any listeners 997`);this.events.emit((0,ct.hEn)("session_connect"),{session:l}),await this.sendResult({id:t.id,topic:e,result:!0,throwOnFailedPublish:!0})}catch(t){await this.sendError({id:r,topic:e,error:t}),this.client.logger.error(t)}},this.onSessionSettleResponse=async(e,t)=>{const{id:r}=t;Ut(t)?(await this.client.session.update(e,{acknowledged:!0}),this.events.emit((0,ct.hEn)("session_approve",r),{})):Dt(t)&&(await this.client.session.delete(e,(0,ct.Hjj)("USER_DISCONNECTED")),this.events.emit((0,ct.hEn)("session_approve",r),{error:t.error}))},this.onSessionUpdateRequest=async(e,t)=>{const{params:r,id:n}=t;try{const t=`${e}_session_update`,i=ct.nyL.get(t);if(i&&this.isRequestOutOfSync(i,n))return this.client.logger.info(`Discarding out of sync request - ${n}`),void this.sendError({id:n,topic:e,error:(0,ct.Hjj)("INVALID_UPDATE_REQUEST")});this.isValidUpdate(gs({topic:e},r));try{ct.nyL.set(t,n),await this.client.session.update(e,{namespaces:r.namespaces}),await this.sendResult({id:n,topic:e,result:!0,throwOnFailedPublish:!0})}catch(e){throw ct.nyL.delete(t),e}this.client.events.emit("session_update",{id:n,topic:e,params:r})}catch(t){await this.sendError({id:n,topic:e,error:t}),this.client.logger.error(t)}},this.isRequestOutOfSync=(e,t)=>parseInt(t.toString().slice(0,-3))<=parseInt(e.toString().slice(0,-3)),this.onSessionUpdateResponse=(e,t)=>{const{id:r}=t,n=(0,ct.hEn)("session_update",r);if(0===this.events.listenerCount(n))throw new Error(`emitting ${n} without any listeners`);Ut(t)?this.events.emit((0,ct.hEn)("session_update",r),{}):Dt(t)&&this.events.emit((0,ct.hEn)("session_update",r),{error:t.error})},this.onSessionExtendRequest=async(e,t)=>{const{id:r}=t;try{this.isValidExtend({topic:e}),await this.setExpiry(e,(0,ct.Xw0)(es)),await this.sendResult({id:r,topic:e,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_extend",{id:r,topic:e})}catch(t){await this.sendError({id:r,topic:e,error:t}),this.client.logger.error(t)}},this.onSessionExtendResponse=(e,t)=>{const{id:r}=t,n=(0,ct.hEn)("session_extend",r);if(0===this.events.listenerCount(n))throw new Error(`emitting ${n} without any listeners`);Ut(t)?this.events.emit((0,ct.hEn)("session_extend",r),{}):Dt(t)&&this.events.emit((0,ct.hEn)("session_extend",r),{error:t.error})},this.onSessionPingRequest=async(e,t)=>{const{id:r}=t;try{this.isValidPing({topic:e}),await this.sendResult({id:r,topic:e,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_ping",{id:r,topic:e})}catch(t){await this.sendError({id:r,topic:e,error:t}),this.client.logger.error(t)}},this.onSessionPingResponse=(e,t)=>{const{id:r}=t,n=(0,ct.hEn)("session_ping",r);if(0===this.events.listenerCount(n))throw new Error(`emitting ${n} without any listeners`);setTimeout((()=>{Ut(t)?this.events.emit((0,ct.hEn)("session_ping",r),{}):Dt(t)&&this.events.emit((0,ct.hEn)("session_ping",r),{error:t.error})}),500)},this.onSessionDeleteRequest=async(e,t)=>{const{id:r}=t;try{this.isValidDisconnect({topic:e,reason:t.params}),Promise.all([new Promise((t=>{this.client.core.relayer.once(tr,(async()=>{t(await this.deleteSession({topic:e,id:r}))}))})),this.sendResult({id:r,topic:e,result:!0,throwOnFailedPublish:!0}),this.cleanupPendingSentRequestsForTopic({topic:e,error:(0,ct.Hjj)("USER_DISCONNECTED")})]).catch((e=>this.client.logger.error(e)))}catch(e){this.client.logger.error(e)}},this.onSessionRequest=async e=>{var t,r,n;const{topic:i,payload:s,attestation:o,encryptedId:a,transportType:c}=e,{id:l,params:u}=s;try{await this.isValidRequest(gs({topic:i},u));const e=this.client.session.get(i),s={id:l,topic:i,params:u,verifyContext:await this.getVerifyContext({attestationId:o,hash:(0,ct.ALl)(JSON.stringify(Ct("wc_sessionRequest",u,l))),encryptedId:a,metadata:e.peer.metadata,transportType:c})};await this.setPendingSessionRequest(s),c===ar.link_mode&&null!=(t=e.peer.metadata.redirect)&&t.universal&&this.client.core.addLinkModeSupportedApp(null==(r=e.peer.metadata.redirect)?void 0:r.universal),null!=(n=this.client.signConfig)&&n.disableRequestQueue?this.emitSessionRequest(s):(this.addSessionRequestToSessionRequestQueue(s),this.processSessionRequestQueue())}catch(e){await this.sendError({id:l,topic:i,error:e}),this.client.logger.error(e)}},this.onSessionRequestResponse=(e,t)=>{const{id:r}=t,n=(0,ct.hEn)("session_request",r);if(0===this.events.listenerCount(n))throw new Error(`emitting ${n} without any listeners`);Ut(t)?this.events.emit((0,ct.hEn)("session_request",r),{result:t.result}):Dt(t)&&this.events.emit((0,ct.hEn)("session_request",r),{error:t.error})},this.onSessionEventRequest=async(e,t)=>{const{id:r,params:n}=t;try{const t=`${e}_session_event_${n.event.name}`,i=ct.nyL.get(t);if(i&&this.isRequestOutOfSync(i,r))return void this.client.logger.info(`Discarding out of sync request - ${r}`);this.isValidEmit(gs({topic:e},n)),this.client.events.emit("session_event",{id:r,topic:e,params:n}),ct.nyL.set(t,r)}catch(t){await this.sendError({id:r,topic:e,error:t}),this.client.logger.error(t)}},this.onSessionAuthenticateResponse=(e,t)=>{const{id:r}=t;this.client.logger.trace({type:"method",method:"onSessionAuthenticateResponse",topic:e,payload:t}),Ut(t)?this.events.emit((0,ct.hEn)("session_request",r),{result:t.result}):Dt(t)&&this.events.emit((0,ct.hEn)("session_request",r),{error:t.error})},this.onSessionAuthenticateRequest=async e=>{var t;const{topic:r,payload:n,attestation:i,encryptedId:s,transportType:o}=e;try{const{requester:e,authPayload:a,expiryTimestamp:c}=n.params,l=await this.getVerifyContext({attestationId:i,hash:(0,ct.ALl)(JSON.stringify(n)),encryptedId:s,metadata:e.metadata,transportType:o}),u={requester:e,pairingTopic:r,id:n.id,authPayload:a,verifyContext:l,expiryTimestamp:c};await this.setAuthRequest(n.id,{request:u,pairingTopic:r,transportType:o}),o===ar.link_mode&&null!=(t=e.metadata.redirect)&&t.universal&&this.client.core.addLinkModeSupportedApp(e.metadata.redirect.universal),this.client.events.emit("session_authenticate",{topic:r,params:n.params,id:n.id,verifyContext:l})}catch(e){this.client.logger.error(e);const t=n.params.requester.publicKey,i=await this.client.core.crypto.generateKeyPair(),s=this.getAppLinkIfEnabled(n.params.requester.metadata,o),a={type:ct.Lp_,receiverPublicKey:t,senderPublicKey:i};await this.sendError({id:n.id,topic:r,error:e,encodeOpts:a,rpcOpts:ts.wc_sessionAuthenticate.autoReject,appLink:s})}},this.addSessionRequestToSessionRequestQueue=e=>{this.sessionRequestQueue.queue.push(e)},this.cleanupAfterResponse=e=>{this.deletePendingSessionRequest(e.response.id,{message:"fulfilled",code:0}),setTimeout((()=>{this.sessionRequestQueue.state=ns,this.processSessionRequestQueue()}),(0,pe.toMiliseconds)(this.requestQueueDelay))},this.cleanupPendingSentRequestsForTopic=({topic:e,error:t})=>{const r=this.client.core.history.pending;r.length>0&&r.filter((t=>t.topic===e&&"wc_sessionRequest"===t.request.method)).forEach((e=>{const r=e.request.id,n=(0,ct.hEn)("session_request",r);if(0===this.events.listenerCount(n))throw new Error(`emitting ${n} without any listeners`);this.events.emit((0,ct.hEn)("session_request",e.request.id),{error:t})}))},this.processSessionRequestQueue=()=>{if(this.sessionRequestQueue.state===is)return void this.client.logger.info("session request queue is already active.");const e=this.sessionRequestQueue.queue[0];if(e)try{this.sessionRequestQueue.state=is,this.emitSessionRequest(e)}catch(e){this.client.logger.error(e)}else this.client.logger.info("session request queue is empty.")},this.emitSessionRequest=e=>{this.client.events.emit("session_request",e)},this.onPairingCreated=e=>{if(e.methods&&this.expectedPairingMethodMap.set(e.topic,e.methods),e.active)return;const t=this.client.proposal.getAll().find((t=>t.pairingTopic===e.topic));t&&this.onSessionProposeRequest({topic:e.topic,payload:Ct("wc_sessionPropose",{requiredNamespaces:t.requiredNamespaces,optionalNamespaces:t.optionalNamespaces,relays:t.relays,proposer:t.proposer,sessionProperties:t.sessionProperties},t.id)})},this.isValidConnect=async e=>{if(!(0,ct.TeY)(e)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`connect() params: ${JSON.stringify(e)}`);throw new Error(t)}const{pairingTopic:t,requiredNamespaces:r,optionalNamespaces:n,sessionProperties:i,relays:s}=e;if((0,ct.b07)(t)||await this.isValidPairingTopic(t),!(0,ct.V9G)(s,!0)){const{message:e}=(0,ct.GuA)("MISSING_OR_INVALID",`connect() relays: ${s}`);throw new Error(e)}!(0,ct.b07)(r)&&0!==(0,ct.aF0)(r)&&this.validateNamespaces(r,"requiredNamespaces"),!(0,ct.b07)(n)&&0!==(0,ct.aF0)(n)&&this.validateNamespaces(n,"optionalNamespaces"),(0,ct.b07)(i)||this.validateSessionProps(i,"sessionProperties")},this.validateNamespaces=(e,t)=>{const r=(0,ct.esh)(e,"connect()",t);if(r)throw new Error(r.message)},this.isValidApprove=async e=>{if(!(0,ct.TeY)(e))throw new Error((0,ct.GuA)("MISSING_OR_INVALID",`approve() params: ${e}`).message);const{id:t,namespaces:r,relayProtocol:n,sessionProperties:i}=e;this.checkRecentlyDeleted(t),await this.isValidProposalId(t);const s=this.client.proposal.get(t),o=(0,ct.FiO)(r,"approve()");if(o)throw new Error(o.message);const a=(0,ct.XqR)(s.requiredNamespaces,r,"approve()");if(a)throw new Error(a.message);if(!(0,ct.Qhg)(n,!0)){const{message:e}=(0,ct.GuA)("MISSING_OR_INVALID",`approve() relayProtocol: ${n}`);throw new Error(e)}(0,ct.b07)(i)||this.validateSessionProps(i,"sessionProperties")},this.isValidReject=async e=>{if(!(0,ct.TeY)(e)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`reject() params: ${e}`);throw new Error(t)}const{id:t,reason:r}=e;if(this.checkRecentlyDeleted(t),await this.isValidProposalId(t),!(0,ct.X3c)(r)){const{message:e}=(0,ct.GuA)("MISSING_OR_INVALID",`reject() reason: ${JSON.stringify(r)}`);throw new Error(e)}},this.isValidSessionSettleRequest=e=>{if(!(0,ct.TeY)(e)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`onSessionSettleRequest() params: ${e}`);throw new Error(t)}const{relay:t,controller:r,namespaces:n,expiry:i}=e;if(!(0,ct.kuU)(t)){const{message:e}=(0,ct.GuA)("MISSING_OR_INVALID","onSessionSettleRequest() relay protocol should be a string");throw new Error(e)}const s=(0,ct.tk0)(r,"onSessionSettleRequest()");if(s)throw new Error(s.message);const o=(0,ct.FiO)(n,"onSessionSettleRequest()");if(o)throw new Error(o.message);if((0,ct._dF)(i)){const{message:e}=(0,ct.GuA)("EXPIRED","onSessionSettleRequest()");throw new Error(e)}},this.isValidUpdate=async e=>{if(!(0,ct.TeY)(e)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`update() params: ${e}`);throw new Error(t)}const{topic:t,namespaces:r}=e;this.checkRecentlyDeleted(t),await this.isValidSessionTopic(t);const n=this.client.session.get(t),i=(0,ct.FiO)(r,"update()");if(i)throw new Error(i.message);const s=(0,ct.XqR)(n.requiredNamespaces,r,"update()");if(s)throw new Error(s.message)},this.isValidExtend=async e=>{if(!(0,ct.TeY)(e)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`extend() params: ${e}`);throw new Error(t)}const{topic:t}=e;this.checkRecentlyDeleted(t),await this.isValidSessionTopic(t)},this.isValidRequest=async e=>{if(!(0,ct.TeY)(e)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`request() params: ${e}`);throw new Error(t)}const{topic:t,request:r,chainId:n,expiry:i}=e;this.checkRecentlyDeleted(t),await this.isValidSessionTopic(t);const{namespaces:s}=this.client.session.get(t);if(!(0,ct.tLy)(s,n)){const{message:e}=(0,ct.GuA)("MISSING_OR_INVALID",`request() chainId: ${n}`);throw new Error(e)}if(!(0,ct.iV1)(r)){const{message:e}=(0,ct.GuA)("MISSING_OR_INVALID",`request() ${JSON.stringify(r)}`);throw new Error(e)}if(!(0,ct.oKp)(s,n,r.method)){const{message:e}=(0,ct.GuA)("MISSING_OR_INVALID",`request() method: ${r.method}`);throw new Error(e)}if(i&&!(0,ct.Hbs)(i,rs)){const{message:e}=(0,ct.GuA)("MISSING_OR_INVALID",`request() expiry: ${i}. Expiry must be a number (in seconds) between ${rs.min} and ${rs.max}`);throw new Error(e)}},this.isValidRespond=async e=>{var t;if(!(0,ct.TeY)(e)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`respond() params: ${e}`);throw new Error(t)}const{topic:r,response:n}=e;try{await this.isValidSessionTopic(r)}catch(r){throw null!=(t=e?.response)&&t.id&&this.cleanupAfterResponse(e),r}if(!(0,ct.M8n)(n)){const{message:e}=(0,ct.GuA)("MISSING_OR_INVALID",`respond() response: ${JSON.stringify(n)}`);throw new Error(e)}},this.isValidPing=async e=>{if(!(0,ct.TeY)(e)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`ping() params: ${e}`);throw new Error(t)}const{topic:t}=e;await this.isValidSessionOrPairingTopic(t)},this.isValidEmit=async e=>{if(!(0,ct.TeY)(e)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`emit() params: ${e}`);throw new Error(t)}const{topic:t,event:r,chainId:n}=e;await this.isValidSessionTopic(t);const{namespaces:i}=this.client.session.get(t);if(!(0,ct.tLy)(i,n)){const{message:e}=(0,ct.GuA)("MISSING_OR_INVALID",`emit() chainId: ${n}`);throw new Error(e)}if(!(0,ct.FR8)(r)){const{message:e}=(0,ct.GuA)("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(r)}`);throw new Error(e)}if(!(0,ct.z2N)(i,n,r.name)){const{message:e}=(0,ct.GuA)("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(r)}`);throw new Error(e)}},this.isValidDisconnect=async e=>{if(!(0,ct.TeY)(e)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`disconnect() params: ${e}`);throw new Error(t)}const{topic:t}=e;await this.isValidSessionOrPairingTopic(t)},this.isValidAuthenticate=e=>{const{chains:t,uri:r,domain:n,nonce:i}=e;if(!Array.isArray(t)||0===t.length)throw new Error("chains is required and must be a non-empty array");if(!(0,ct.Qhg)(r,!1))throw new Error("uri is required parameter");if(!(0,ct.Qhg)(n,!1))throw new Error("domain is required parameter");if(!(0,ct.Qhg)(i,!1))throw new Error("nonce is required parameter");if([...new Set(t.map((e=>(0,ct._Yb)(e).namespace)))].length>1)throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");const{namespace:s}=(0,ct._Yb)(t[0]);if("eip155"!==s)throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")},this.getVerifyContext=async e=>{const{attestationId:t,hash:r,encryptedId:n,metadata:i,transportType:s}=e,o={verified:{verifyUrl:i.verifyUrl||xr,validation:"UNKNOWN",origin:i.url||""}};try{if(s===ar.link_mode){const e=this.getAppLinkIfEnabled(i,s);return o.verified.validation=e&&new URL(e).origin===new URL(i.url).origin?"VALID":"INVALID",o}const e=await this.client.core.verify.resolve({attestationId:t,hash:r,encryptedId:n,verifyUrl:i.verifyUrl});e&&(o.verified.origin=e.origin,o.verified.isScam=e.isScam,o.verified.validation=e.origin===new URL(i.url).origin?"VALID":"INVALID")}catch(e){this.client.logger.warn(e)}return this.client.logger.debug(`Verify context: ${JSON.stringify(o)}`),o},this.validateSessionProps=(e,t)=>{Object.values(e).forEach((e=>{if(!(0,ct.Qhg)(e,!1)){const{message:r}=(0,ct.GuA)("MISSING_OR_INVALID",`${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);throw new Error(r)}}))},this.getPendingAuthRequest=e=>{const t=this.client.auth.requests.get(e);return"object"==typeof t?t:void 0},this.addToRecentlyDeleted=(e,t)=>{if(this.recentlyDeletedMap.set(e,t),this.recentlyDeletedMap.size>=this.recentlyDeletedLimit){let e=0;const t=this.recentlyDeletedLimit/2;for(const r of this.recentlyDeletedMap.keys()){if(e++>=t)break;this.recentlyDeletedMap.delete(r)}}},this.checkRecentlyDeleted=e=>{const t=this.recentlyDeletedMap.get(e);if(t){const{message:r}=(0,ct.GuA)("MISSING_OR_INVALID",`Record was recently deleted - ${t}: ${e}`);throw new Error(r)}},this.isLinkModeEnabled=(e,t)=>{var r,n,s,o,a,c,l,u,h;return!(!e||t!==ar.link_mode)&&!0===(null==(n=null==(r=this.client.metadata)?void 0:r.redirect)?void 0:n.linkMode)&&void 0!==(null==(o=null==(s=this.client.metadata)?void 0:s.redirect)?void 0:o.universal)&&""!==(null==(c=null==(a=this.client.metadata)?void 0:a.redirect)?void 0:c.universal)&&void 0!==(null==(l=e?.redirect)?void 0:l.universal)&&""!==(null==(u=e?.redirect)?void 0:u.universal)&&!0===(null==(h=e?.redirect)?void 0:h.linkMode)&&this.client.core.linkModeSupportedApps.includes(e.redirect.universal)&&typeof(null==i.g?void 0:i.g.Linking)<"u"},this.getAppLinkIfEnabled=(e,t)=>{var r;return this.isLinkModeEnabled(e,t)?null==(r=e?.redirect)?void 0:r.universal:void 0},this.handleLinkModeMessage=({url:e})=>{if(!e||!e.includes("wc_ev")||!e.includes("topic"))return;const t=(0,ct.$hI)(e,"topic")||"",r=decodeURIComponent((0,ct.$hI)(e,"wc_ev")||""),n=this.client.session.keys.includes(t);n&&this.client.session.update(t,{transportType:ar.link_mode}),this.client.core.dispatchEnvelope({topic:t,message:r,sessionExists:n})},this.registerLinkModeListeners=async()=>{var e;if((0,ct.w8K)()||(0,ct.lVv)()&&null!=(e=this.client.metadata.redirect)&&e.linkMode){const e=null==i.g?void 0:i.g.Linking;if(typeof e<"u"){e.addEventListener("url",this.handleLinkModeMessage,this.client.name);const t=await e.getInitialURL();t&&setTimeout((()=>{this.handleLinkModeMessage({url:t})}),50)}}}}isInitialized(){if(!this.initialized){const{message:e}=(0,ct.GuA)("NOT_INITIALIZED",this.name);throw new Error(e)}}async confirmOnlineStateOrThrow(){await this.client.core.relayer.confirmOnlineStateOrThrow()}registerRelayerEvents(){this.client.core.relayer.on(Yt,(e=>{!this.initialized||this.relayMessageCache.length>0?this.relayMessageCache.push(e):this.onRelayMessage(e)}))}async onRelayMessage(e){const{topic:t,message:r,attestation:n,transportType:i}=e,{publicKey:s}=this.client.auth.authKeys.keys.includes(as)?this.client.auth.authKeys.get(as):{responseTopic:void 0,publicKey:void 0},o=await this.client.core.crypto.decode(t,r,{receiverPublicKey:s,encoding:i===ar.link_mode?ct.Pa8:ct.EWt});try{Bt(o)?(this.client.core.history.set(t,o),this.onRelayEventRequest({topic:t,payload:o,attestation:n,transportType:i,encryptedId:(0,ct.ALl)(r)})):Lt(o)?(await this.client.core.history.resolve(o),await this.onRelayEventResponse({topic:t,payload:o,transportType:i}),this.client.core.history.delete(t,o.id)):this.onRelayEventUnknownPayload({topic:t,payload:o,transportType:i})}catch(e){this.client.logger.error(e)}}registerExpirerEvents(){this.client.core.expirer.on(vr,(async e=>{const{topic:t,id:r}=(0,ct.c82)(e.target);return r&&this.client.pendingRequest.keys.includes(r)?await this.deletePendingSessionRequest(r,(0,ct.GuA)("EXPIRED"),!0):r&&this.client.auth.requests.keys.includes(r)?await this.deletePendingAuthRequest(r,(0,ct.GuA)("EXPIRED"),!0):void(t?this.client.session.keys.includes(t)&&(await this.deleteSession({topic:t,expirerHasDeleted:!0}),this.client.events.emit("session_expire",{topic:t})):r&&(await this.deleteProposal(r,!0),this.client.events.emit("proposal_expire",{id:r})))}))}registerPairingEvents(){this.client.core.pairing.events.on(fr,(e=>this.onPairingCreated(e))),this.client.core.pairing.events.on(pr,(e=>{this.addToRecentlyDeleted(e.topic,"pairing")}))}isValidPairingTopic(e){if(!(0,ct.Qhg)(e,!1)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`pairing topic should be a string: ${e}`);throw new Error(t)}if(!this.client.core.pairing.pairings.keys.includes(e)){const{message:t}=(0,ct.GuA)("NO_MATCHING_KEY",`pairing topic doesn't exist: ${e}`);throw new Error(t)}if((0,ct._dF)(this.client.core.pairing.pairings.get(e).expiry)){const{message:t}=(0,ct.GuA)("EXPIRED",`pairing topic: ${e}`);throw new Error(t)}}async isValidSessionTopic(e){if(!(0,ct.Qhg)(e,!1)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`session topic should be a string: ${e}`);throw new Error(t)}if(this.checkRecentlyDeleted(e),!this.client.session.keys.includes(e)){const{message:t}=(0,ct.GuA)("NO_MATCHING_KEY",`session topic doesn't exist: ${e}`);throw new Error(t)}if((0,ct._dF)(this.client.session.get(e).expiry)){await this.deleteSession({topic:e});const{message:t}=(0,ct.GuA)("EXPIRED",`session topic: ${e}`);throw new Error(t)}if(!this.client.core.crypto.keychain.has(e)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`session topic does not exist in keychain: ${e}`);throw await this.deleteSession({topic:e}),new Error(t)}}async isValidSessionOrPairingTopic(e){if(this.checkRecentlyDeleted(e),this.client.session.keys.includes(e))await this.isValidSessionTopic(e);else{if(!this.client.core.pairing.pairings.keys.includes(e)){if((0,ct.Qhg)(e,!1)){const{message:t}=(0,ct.GuA)("NO_MATCHING_KEY",`session or pairing topic doesn't exist: ${e}`);throw new Error(t)}{const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`session or pairing topic should be a string: ${e}`);throw new Error(t)}}this.isValidPairingTopic(e)}}async isValidProposalId(e){if(!(0,ct.Alu)(e)){const{message:t}=(0,ct.GuA)("MISSING_OR_INVALID",`proposal id should be a number: ${e}`);throw new Error(t)}if(!this.client.proposal.keys.includes(e)){const{message:t}=(0,ct.GuA)("NO_MATCHING_KEY",`proposal id doesn't exist: ${e}`);throw new Error(t)}if((0,ct._dF)(this.client.proposal.get(e).expiryTimestamp)){await this.deleteProposal(e);const{message:t}=(0,ct.GuA)("EXPIRED",`proposal id: ${e}`);throw new Error(t)}}}class ys extends Ci{constructor(e,t){super(e,t,"proposal",Ji),this.core=e,this.logger=t}}class bs extends Ci{constructor(e,t){super(e,t,"session",Ji),this.core=e,this.logger=t}}class vs extends Ci{constructor(e,t){super(e,t,"request",Ji,(e=>e.id)),this.core=e,this.logger=t}}class As extends Ci{constructor(e,t){super(e,t,"authKeys",os,(()=>as)),this.core=e,this.logger=t}}class xs extends Ci{constructor(e,t){super(e,t,"pairingTopics",os),this.core=e,this.logger=t}}class Es extends Ci{constructor(e,t){super(e,t,"requests",os,(e=>e.id)),this.core=e,this.logger=t}}class Cs{constructor(e,t){this.core=e,this.logger=t,this.authKeys=new As(this.core,this.logger),this.pairingTopics=new xs(this.core,this.logger),this.requests=new Es(this.core,this.logger)}async init(){await this.authKeys.init(),await this.pairingTopics.init(),await this.requests.init()}}class _s extends st{constructor(e){super(e),this.protocol="wc",this.version=2,this.name=Qi,this.events=new de.EventEmitter,this.on=(e,t)=>this.events.on(e,t),this.once=(e,t)=>this.events.once(e,t),this.off=(e,t)=>this.events.off(e,t),this.removeListener=(e,t)=>this.events.removeListener(e,t),this.removeAllListeners=e=>this.events.removeAllListeners(e),this.connect=async e=>{try{return await this.engine.connect(e)}catch(e){throw this.logger.error(e.message),e}},this.pair=async e=>{try{return await this.engine.pair(e)}catch(e){throw this.logger.error(e.message),e}},this.approve=async e=>{try{return await this.engine.approve(e)}catch(e){throw this.logger.error(e.message),e}},this.reject=async e=>{try{return await this.engine.reject(e)}catch(e){throw this.logger.error(e.message),e}},this.update=async e=>{try{return await this.engine.update(e)}catch(e){throw this.logger.error(e.message),e}},this.extend=async e=>{try{return await this.engine.extend(e)}catch(e){throw this.logger.error(e.message),e}},this.request=async e=>{try{return await this.engine.request(e)}catch(e){throw this.logger.error(e.message),e}},this.respond=async e=>{try{return await this.engine.respond(e)}catch(e){throw this.logger.error(e.message),e}},this.ping=async e=>{try{return await this.engine.ping(e)}catch(e){throw this.logger.error(e.message),e}},this.emit=async e=>{try{return await this.engine.emit(e)}catch(e){throw this.logger.error(e.message),e}},this.disconnect=async e=>{try{return await this.engine.disconnect(e)}catch(e){throw this.logger.error(e.message),e}},this.find=e=>{try{return this.engine.find(e)}catch(e){throw this.logger.error(e.message),e}},this.getPendingSessionRequests=()=>{try{return this.engine.getPendingSessionRequests()}catch(e){throw this.logger.error(e.message),e}},this.authenticate=async(e,t)=>{try{return await this.engine.authenticate(e,t)}catch(e){throw this.logger.error(e.message),e}},this.formatAuthMessage=e=>{try{return this.engine.formatAuthMessage(e)}catch(e){throw this.logger.error(e.message),e}},this.approveSessionAuthenticate=async e=>{try{return await this.engine.approveSessionAuthenticate(e)}catch(e){throw this.logger.error(e.message),e}},this.rejectSessionAuthenticate=async e=>{try{return await this.engine.rejectSessionAuthenticate(e)}catch(e){throw this.logger.error(e.message),e}},this.name=e?.name||Qi,this.metadata=e?.metadata||(0,ct.lFF)(),this.signConfig=e?.signConfig;const t=typeof e?.logger<"u"&&"string"!=typeof e?.logger?e.logger:(0,b.h6)((0,b.iP)({level:e?.logger||"error"}));this.core=e?.core||new Zi(e),this.logger=(0,b.U5)(t,this.name),this.session=new bs(this.core,this.logger),this.proposal=new ys(this.core,this.logger),this.pendingRequest=new vs(this.core,this.logger),this.engine=new ws(this),this.auth=new Cs(this.core,this.logger)}static async init(e){const t=new _s(e);return await t.initialize(),t}get context(){return(0,b.oI)(this.logger)}get pairing(){return this.core.pairing.pairings}async initialize(){this.logger.trace("Initialized");try{await this.core.start(),await this.session.init(),await this.proposal.init(),await this.pendingRequest.init(),await this.auth.init(),await this.engine.init(),this.logger.info("SignClient Initialization Success"),this.engine.processRelayMessageCache()}catch(e){throw this.logger.info("SignClient Initialization Failure"),this.logger.error(e.message),e}}}var ks=i(74945),Ss=i.n(ks),Is=Object.defineProperty,Ts=Object.defineProperties,Ps=Object.getOwnPropertyDescriptors,Ms=Object.getOwnPropertySymbols,Ns=Object.prototype.hasOwnProperty,Rs=Object.prototype.propertyIsEnumerable,Os=(e,t,r)=>t in e?Is(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Bs=(e,t)=>{for(var r in t||(t={}))Ns.call(t,r)&&Os(e,r,t[r]);if(Ms)for(var r of Ms(t))Rs.call(t,r)&&Os(e,r,t[r]);return e},Ls=(e,t)=>Ts(e,Ps(t));const Us={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"};class Ds{constructor(e,t=!1){if(this.url=e,this.disableProviderPing=t,this.events=new de.EventEmitter,this.isAvailable=!1,this.registering=!1,!Nt(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);this.url=e,this.disableProviderPing=t}get connected(){return this.isAvailable}get connecting(){return this.registering}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async open(e=this.url){await this.register(e)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(e){this.isAvailable||await this.register();try{const t=(0,Fe.h)(e),r=await(await Ss()(this.url,Ls(Bs({},Us),{body:t}))).json();this.onPayload({data:r})}catch(t){this.onError(e.id,t)}}async register(e=this.url){if(!Nt(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);if(this.registering){const e=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=e||this.events.listenerCount("open")>=e)&&this.events.setMaxListeners(e+1),new Promise(((e,t)=>{this.events.once("register_error",(e=>{this.resetMaxListeners(),t(e)})),this.events.once("open",(()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return t(new Error("HTTP connection is missing or invalid"));e()}))}))}this.url=e,this.registering=!0;try{if(!this.disableProviderPing){const t=(0,Fe.h)({id:1,jsonrpc:"2.0",method:"test",params:[]});await Ss()(e,Ls(Bs({},Us),{body:t}))}this.onOpen()}catch(e){const t=this.parseError(e);throw this.events.emit("register_error",t),this.onClose(),t}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(e){if(typeof e.data>"u")return;const t="string"==typeof e.data?(0,Fe.j)(e.data):e.data;this.events.emit("payload",t)}onError(e,t){const r=this.parseError(t),n=kt(e,r.message||r.toString());this.events.emit("payload",n)}parseError(e,t=this.url){return vt(e,t,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>10&&this.events.setMaxListeners(10)}}const js="error",Fs="wc@2:universal_provider:",$s="https://rpc.walletconnect.org/v1/",qs="generic",Hs=`${$s}bundler`,zs="default_chain_changed";var Ws,Vs,Gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof i.g<"u"?i.g:typeof self<"u"?self:{},Zs={exports:{}};Ws=Zs,Vs=Zs.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",i=32,s=128,o=1/0,a=9007199254740991,c=NaN,l=4294967295,u=l-1,h=l>>>1,d=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",i],["partialRight",64],["rearg",256]],f="[object Arguments]",p="[object Array]",g="[object Boolean]",m="[object Date]",w="[object Error]",y="[object Function]",b="[object GeneratorFunction]",v="[object Map]",A="[object Number]",x="[object Object]",E="[object Promise]",C="[object RegExp]",_="[object Set]",k="[object String]",S="[object Symbol]",I="[object WeakMap]",T="[object ArrayBuffer]",P="[object DataView]",M="[object Float32Array]",N="[object Float64Array]",R="[object Int8Array]",O="[object Int16Array]",B="[object Int32Array]",L="[object Uint8Array]",U="[object Uint8ClampedArray]",D="[object Uint16Array]",j="[object Uint32Array]",F=/\b__p \+= '';/g,$=/\b(__p \+=) '' \+/g,q=/(__e\(.*?\)|\b__t\)) \+\n'';/g,H=/&(?:amp|lt|gt|quot|#39);/g,z=/[&<>"']/g,W=RegExp(H.source),V=RegExp(z.source),G=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,K=/<%=([\s\S]+?)%>/g,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/,Y=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,X=/[\\^$.*+?()[\]{}|]/g,ee=RegExp(X.source),te=/^\s+/,re=/\s/,ne=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ie=/\{\n\/\* \[wrapped with (.+)\] \*/,se=/,? & /,oe=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ae=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,le=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,de=/^0b[01]+$/i,fe=/^\[object .+?Constructor\]$/,pe=/^0o[0-7]+$/i,ge=/^(?:0|[1-9]\d*)$/,me=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,we=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,be="\\ud800-\\udfff",ve="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ae="\\u2700-\\u27bf",xe="a-z\\xdf-\\xf6\\xf8-\\xff",Ee="A-Z\\xc0-\\xd6\\xd8-\\xde",Ce="\\ufe0e\\ufe0f",_e="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ke="["+be+"]",Se="["+_e+"]",Ie="["+ve+"]",Te="\\d+",Pe="["+Ae+"]",Me="["+xe+"]",Ne="[^"+be+_e+Te+Ae+xe+Ee+"]",Re="\\ud83c[\\udffb-\\udfff]",Oe="[^"+be+"]",Be="(?:\\ud83c[\\udde6-\\uddff]){2}",Le="[\\ud800-\\udbff][\\udc00-\\udfff]",Ue="["+Ee+"]",De="\\u200d",je="(?:"+Me+"|"+Ne+")",Fe="(?:"+Ue+"|"+Ne+")",$e="(?:['’](?:d|ll|m|re|s|t|ve))?",qe="(?:['’](?:D|LL|M|RE|S|T|VE))?",He="(?:"+Ie+"|"+Re+")?",ze="["+Ce+"]?",We=ze+He+"(?:"+De+"(?:"+[Oe,Be,Le].join("|")+")"+ze+He+")*",Ve="(?:"+[Pe,Be,Le].join("|")+")"+We,Ge="(?:"+[Oe+Ie+"?",Ie,Be,Le,ke].join("|")+")",Ze=RegExp("['’]","g"),Ke=RegExp(Ie,"g"),Je=RegExp(Re+"(?="+Re+")|"+Ge+We,"g"),Qe=RegExp([Ue+"?"+Me+"+"+$e+"(?="+[Se,Ue,"$"].join("|")+")",Fe+"+"+qe+"(?="+[Se,Ue+je,"$"].join("|")+")",Ue+"?"+je+"+"+$e,Ue+"+"+qe,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Te,Ve].join("|"),"g"),Ye=RegExp("["+De+be+ve+Ce+"]"),Xe=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,et=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],tt=-1,rt={};rt[M]=rt[N]=rt[R]=rt[O]=rt[B]=rt[L]=rt[U]=rt[D]=rt[j]=!0,rt[f]=rt[p]=rt[T]=rt[g]=rt[P]=rt[m]=rt[w]=rt[y]=rt[v]=rt[A]=rt[x]=rt[C]=rt[_]=rt[k]=rt[I]=!1;var nt={};nt[f]=nt[p]=nt[T]=nt[P]=nt[g]=nt[m]=nt[M]=nt[N]=nt[R]=nt[O]=nt[B]=nt[v]=nt[A]=nt[x]=nt[C]=nt[_]=nt[k]=nt[S]=nt[L]=nt[U]=nt[D]=nt[j]=!0,nt[w]=nt[y]=nt[I]=!1;var it={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},st=parseFloat,ot=parseInt,at="object"==typeof Gs&&Gs&&Gs.Object===Object&&Gs,ct="object"==typeof self&&self&&self.Object===Object&&self,lt=at||ct||Function("return this")(),ut=Vs&&!Vs.nodeType&&Vs,ht=ut&&Ws&&!Ws.nodeType&&Ws,dt=ht&&ht.exports===ut,ft=dt&&at.process,pt=function(){try{return ht&&ht.require&&ht.require("util").types||ft&&ft.binding&&ft.binding("util")}catch{}}(),gt=pt&&pt.isArrayBuffer,mt=pt&&pt.isDate,wt=pt&&pt.isMap,yt=pt&&pt.isRegExp,bt=pt&&pt.isSet,vt=pt&&pt.isTypedArray;function At(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function xt(e,t,r,n){for(var i=-1,s=null==e?0:e.length;++i<s;){var o=e[i];t(n,o,r(o),e)}return n}function Et(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Ct(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function _t(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function kt(e,t){for(var r=-1,n=null==e?0:e.length,i=0,s=[];++r<n;){var o=e[r];t(o,r,e)&&(s[i++]=o)}return s}function St(e,t){return!(null==e||!e.length)&&Ut(e,t,0)>-1}function It(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1}function Tt(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function Pt(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}function Mt(e,t,r,n){var i=-1,s=null==e?0:e.length;for(n&&s&&(r=e[++i]);++i<s;)r=t(r,e[i],i,e);return r}function Nt(e,t,r,n){var i=null==e?0:e.length;for(n&&i&&(r=e[--i]);i--;)r=t(r,e[i],i,e);return r}function Rt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var Ot=$t("length");function Bt(e,t,r){var n;return r(e,(function(e,r,i){if(t(e,r,i))return n=r,!1})),n}function Lt(e,t,r,n){for(var i=e.length,s=r+(n?1:-1);n?s--:++s<i;)if(t(e[s],s,e))return s;return-1}function Ut(e,t,r){return t==t?function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1}(e,t,r):Lt(e,jt,r)}function Dt(e,t,r,n){for(var i=r-1,s=e.length;++i<s;)if(n(e[i],t))return i;return-1}function jt(e){return e!=e}function Ft(e,t){var r=null==e?0:e.length;return r?zt(e,t)/r:c}function $t(t){return function(r){return null==r?e:r[t]}}function qt(t){return function(r){return null==t?e:t[r]}}function Ht(e,t,r,n,i){return i(e,(function(e,i,s){r=n?(n=!1,e):t(r,e,i,s)})),r}function zt(t,r){for(var n,i=-1,s=t.length;++i<s;){var o=r(t[i]);o!==e&&(n=n===e?o:n+o)}return n}function Wt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Vt(e){return e&&e.slice(0,cr(e)+1).replace(te,"")}function Gt(e){return function(t){return e(t)}}function Zt(e,t){return Tt(t,(function(t){return e[t]}))}function Kt(e,t){return e.has(t)}function Jt(e,t){for(var r=-1,n=e.length;++r<n&&Ut(t,e[r],0)>-1;);return r}function Qt(e,t){for(var r=e.length;r--&&Ut(t,e[r],0)>-1;);return r}var Yt=qt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Xt=qt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function er(e){return"\\"+it[e]}function tr(e){return Ye.test(e)}function rr(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function nr(e,t){return function(r){return e(t(r))}}function ir(e,t){for(var r=-1,i=e.length,s=0,o=[];++r<i;){var a=e[r];(a===t||a===n)&&(e[r]=n,o[s++]=r)}return o}function sr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function or(e){return tr(e)?function(e){for(var t=Je.lastIndex=0;Je.test(e);)++t;return t}(e):Ot(e)}function ar(e){return tr(e)?function(e){return e.match(Je)||[]}(e):function(e){return e.split("")}(e)}function cr(e){for(var t=e.length;t--&&re.test(e.charAt(t)););return t}var lr=qt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),ur=function re(be){var ve,Ae=(be=null==be?lt:ur.defaults(lt.Object(),be,ur.pick(lt,et))).Array,xe=be.Date,Ee=be.Error,Ce=be.Function,_e=be.Math,ke=be.Object,Se=be.RegExp,Ie=be.String,Te=be.TypeError,Pe=Ae.prototype,Me=Ce.prototype,Ne=ke.prototype,Re=be["__core-js_shared__"],Oe=Me.toString,Be=Ne.hasOwnProperty,Le=0,Ue=(ve=/[^.]+$/.exec(Re&&Re.keys&&Re.keys.IE_PROTO||""))?"Symbol(src)_1."+ve:"",De=Ne.toString,je=Oe.call(ke),Fe=lt._,$e=Se("^"+Oe.call(Be).replace(X,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),qe=dt?be.Buffer:e,He=be.Symbol,ze=be.Uint8Array,We=qe?qe.allocUnsafe:e,Ve=nr(ke.getPrototypeOf,ke),Ge=ke.create,Je=Ne.propertyIsEnumerable,Ye=Pe.splice,it=He?He.isConcatSpreadable:e,at=He?He.iterator:e,ct=He?He.toStringTag:e,ut=function(){try{var e=ls(ke,"defineProperty");return e({},"",{}),e}catch{}}(),ht=be.clearTimeout!==lt.clearTimeout&&be.clearTimeout,ft=xe&&xe.now!==lt.Date.now&&xe.now,pt=be.setTimeout!==lt.setTimeout&&be.setTimeout,Ot=_e.ceil,qt=_e.floor,hr=ke.getOwnPropertySymbols,dr=qe?qe.isBuffer:e,fr=be.isFinite,pr=Pe.join,gr=nr(ke.keys,ke),mr=_e.max,wr=_e.min,yr=xe.now,br=be.parseInt,vr=_e.random,Ar=Pe.reverse,xr=ls(be,"DataView"),Er=ls(be,"Map"),Cr=ls(be,"Promise"),_r=ls(be,"Set"),kr=ls(be,"WeakMap"),Sr=ls(ke,"create"),Ir=kr&&new kr,Tr={},Pr=Us(xr),Mr=Us(Er),Nr=Us(Cr),Rr=Us(_r),Or=Us(kr),Br=He?He.prototype:e,Lr=Br?Br.valueOf:e,Ur=Br?Br.toString:e;function Dr(e){if(ta(e)&&!zo(e)&&!(e instanceof qr)){if(e instanceof $r)return e;if(Be.call(e,"__wrapped__"))return Ds(e)}return new $r(e)}var jr=function(){function t(){}return function(r){if(!ea(r))return{};if(Ge)return Ge(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Fr(){}function $r(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function qr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=l,this.__views__=[]}function Hr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function zr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Wr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Wr;++t<r;)this.add(e[t])}function Gr(e){var t=this.__data__=new zr(e);this.size=t.size}function Zr(e,t){var r=zo(e),n=!r&&Ho(e),i=!r&&!n&&Zo(e),s=!r&&!n&&!i&&la(e),o=r||n||i||s,a=o?Wt(e.length,Ie):[],c=a.length;for(var l in e)(t||Be.call(e,l))&&(!o||!("length"==l||i&&("offset"==l||"parent"==l)||s&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||ms(l,c)))&&a.push(l);return a}function Kr(t){var r=t.length;return r?t[Vn(0,r-1)]:e}function Jr(e,t){return Ns(Si(e),on(t,0,e.length))}function Qr(e){return Ns(Si(e))}function Yr(t,r,n){(n!==e&&!Fo(t[r],n)||n===e&&!(r in t))&&nn(t,r,n)}function Xr(t,r,n){var i=t[r];(!Be.call(t,r)||!Fo(i,n)||n===e&&!(r in t))&&nn(t,r,n)}function en(e,t){for(var r=e.length;r--;)if(Fo(e[r][0],t))return r;return-1}function tn(e,t,r,n){return hn(e,(function(e,i,s){t(n,e,r(e),s)})),n}function rn(e,t){return e&&Ii(t,Ma(t),e)}function nn(e,t,r){"__proto__"==t&&ut?ut(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function sn(t,r){for(var n=-1,i=r.length,s=Ae(i),o=null==t;++n<i;)s[n]=o?e:ka(t,r[n]);return s}function on(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function an(t,r,n,i,s,o){var a,c=1&r,l=2&r,u=4&r;if(n&&(a=s?n(t,i,s,o):n(t)),a!==e)return a;if(!ea(t))return t;var h=zo(t);if(h){if(a=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&Be.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!c)return Si(t,a)}else{var d=ds(t),p=d==y||d==b;if(Zo(t))return Ai(t,c);if(d==x||d==f||p&&!s){if(a=l||p?{}:ps(t),!c)return l?function(e,t){return Ii(e,hs(e),t)}(t,function(e,t){return e&&Ii(t,Na(t),e)}(a,t)):function(e,t){return Ii(e,us(e),t)}(t,rn(a,t))}else{if(!nt[d])return s?t:{};a=function(e,t,r){var n=e.constructor;switch(t){case T:return xi(e);case g:case m:return new n(+e);case P:return function(e,t){var r=t?xi(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case M:case N:case R:case O:case B:case L:case U:case D:case j:return Ei(e,r);case v:return new n;case A:case k:return new n(e);case C:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case _:return new n;case S:return function(e){return Lr?ke(Lr.call(e)):{}}(e)}}(t,d,c)}}o||(o=new Gr);var w=o.get(t);if(w)return w;o.set(t,a),oa(t)?t.forEach((function(e){a.add(an(e,r,n,e,t,o))})):ra(t)&&t.forEach((function(e,i){a.set(i,an(e,r,n,i,t,o))}));var E=h?e:(u?l?rs:ts:l?Na:Ma)(t);return Et(E||t,(function(e,i){E&&(e=t[i=e]),Xr(a,i,an(e,r,n,i,t,o))})),a}function cn(t,r,n){var i=n.length;if(null==t)return!i;for(t=ke(t);i--;){var s=n[i],o=r[s],a=t[s];if(a===e&&!(s in t)||!o(a))return!1}return!0}function ln(r,n,i){if("function"!=typeof r)throw new Te(t);return Is((function(){r.apply(e,i)}),n)}function un(e,t,r,n){var i=-1,s=St,o=!0,a=e.length,c=[],l=t.length;if(!a)return c;r&&(t=Tt(t,Gt(r))),n?(s=It,o=!1):t.length>=200&&(s=Kt,o=!1,t=new Vr(t));e:for(;++i<a;){var u=e[i],h=null==r?u:r(u);if(u=n||0!==u?u:0,o&&h==h){for(var d=l;d--;)if(t[d]===h)continue e;c.push(u)}else s(t,h,n)||c.push(u)}return c}Dr.templateSettings={escape:G,evaluate:Z,interpolate:K,variable:"",imports:{_:Dr}},Dr.prototype=Fr.prototype,Dr.prototype.constructor=Dr,$r.prototype=jr(Fr.prototype),$r.prototype.constructor=$r,qr.prototype=jr(Fr.prototype),qr.prototype.constructor=qr,Hr.prototype.clear=function(){this.__data__=Sr?Sr(null):{},this.size=0},Hr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Hr.prototype.get=function(t){var n=this.__data__;if(Sr){var i=n[t];return i===r?e:i}return Be.call(n,t)?n[t]:e},Hr.prototype.has=function(t){var r=this.__data__;return Sr?r[t]!==e:Be.call(r,t)},Hr.prototype.set=function(t,n){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=Sr&&n===e?r:n,this},zr.prototype.clear=function(){this.__data__=[],this.size=0},zr.prototype.delete=function(e){var t=this.__data__,r=en(t,e);return!(r<0||(r==t.length-1?t.pop():Ye.call(t,r,1),--this.size,0))},zr.prototype.get=function(t){var r=this.__data__,n=en(r,t);return n<0?e:r[n][1]},zr.prototype.has=function(e){return en(this.__data__,e)>-1},zr.prototype.set=function(e,t){var r=this.__data__,n=en(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Wr.prototype.clear=function(){this.size=0,this.__data__={hash:new Hr,map:new(Er||zr),string:new Hr}},Wr.prototype.delete=function(e){var t=as(this,e).delete(e);return this.size-=t?1:0,t},Wr.prototype.get=function(e){return as(this,e).get(e)},Wr.prototype.has=function(e){return as(this,e).has(e)},Wr.prototype.set=function(e,t){var r=as(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Vr.prototype.add=Vr.prototype.push=function(e){return this.__data__.set(e,r),this},Vr.prototype.has=function(e){return this.__data__.has(e)},Gr.prototype.clear=function(){this.__data__=new zr,this.size=0},Gr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Gr.prototype.get=function(e){return this.__data__.get(e)},Gr.prototype.has=function(e){return this.__data__.has(e)},Gr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof zr){var n=r.__data__;if(!Er||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Wr(n)}return r.set(e,t),this.size=r.size,this};var hn=Mi(bn),dn=Mi(vn,!0);function fn(e,t){var r=!0;return hn(e,(function(e,n,i){return r=!!t(e,n,i)})),r}function pn(t,r,n){for(var i=-1,s=t.length;++i<s;){var o=t[i],a=r(o);if(null!=a&&(c===e?a==a&&!ca(a):n(a,c)))var c=a,l=o}return l}function gn(e,t){var r=[];return hn(e,(function(e,n,i){t(e,n,i)&&r.push(e)})),r}function mn(e,t,r,n,i){var s=-1,o=e.length;for(r||(r=gs),i||(i=[]);++s<o;){var a=e[s];t>0&&r(a)?t>1?mn(a,t-1,r,n,i):Pt(i,a):n||(i[i.length]=a)}return i}var wn=Ni(),yn=Ni(!0);function bn(e,t){return e&&wn(e,t,Ma)}function vn(e,t){return e&&yn(e,t,Ma)}function An(e,t){return kt(t,(function(t){return Qo(e[t])}))}function xn(t,r){for(var n=0,i=(r=wi(r,t)).length;null!=t&&n<i;)t=t[Ls(r[n++])];return n&&n==i?t:e}function En(e,t,r){var n=t(e);return zo(e)?n:Pt(n,r(e))}function Cn(t){return null==t?t===e?"[object Undefined]":"[object Null]":ct&&ct in ke(t)?function(t){var r=Be.call(t,ct),n=t[ct];try{t[ct]=e;var i=!0}catch{}var s=De.call(t);return i&&(r?t[ct]=n:delete t[ct]),s}(t):function(e){return De.call(e)}(t)}function _n(e,t){return e>t}function kn(e,t){return null!=e&&Be.call(e,t)}function Sn(e,t){return null!=e&&t in ke(e)}function In(t,r,n){for(var i=n?It:St,s=t[0].length,o=t.length,a=o,c=Ae(o),l=1/0,u=[];a--;){var h=t[a];a&&r&&(h=Tt(h,Gt(r))),l=wr(h.length,l),c[a]=!n&&(r||s>=120&&h.length>=120)?new Vr(a&&h):e}h=t[0];var d=-1,f=c[0];e:for(;++d<s&&u.length<l;){var p=h[d],g=r?r(p):p;if(p=n||0!==p?p:0,!(f?Kt(f,g):i(u,g,n))){for(a=o;--a;){var m=c[a];if(!(m?Kt(m,g):i(t[a],g,n)))continue e}f&&f.push(g),u.push(p)}}return u}function Tn(t,r,n){var i=null==(t=_s(t,r=wi(r,t)))?t:t[Ls(Ks(r))];return null==i?e:At(i,t,n)}function Pn(e){return ta(e)&&Cn(e)==f}function Mn(t,r,n,i,s){return t===r||(null==t||null==r||!ta(t)&&!ta(r)?t!=t&&r!=r:function(t,r,n,i,s,o){var a=zo(t),c=zo(r),l=a?p:ds(t),u=c?p:ds(r),h=(l=l==f?x:l)==x,d=(u=u==f?x:u)==x,y=l==u;if(y&&Zo(t)){if(!Zo(r))return!1;a=!0,h=!1}if(y&&!h)return o||(o=new Gr),a||la(t)?Xi(t,r,n,i,s,o):function(e,t,r,n,i,s,o){switch(r){case P:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case T:return!(e.byteLength!=t.byteLength||!s(new ze(e),new ze(t)));case g:case m:case A:return Fo(+e,+t);case w:return e.name==t.name&&e.message==t.message;case C:case k:return e==t+"";case v:var a=rr;case _:var c=1&n;if(a||(a=sr),e.size!=t.size&&!c)return!1;var l=o.get(e);if(l)return l==t;n|=2,o.set(e,t);var u=Xi(a(e),a(t),n,i,s,o);return o.delete(e),u;case S:if(Lr)return Lr.call(e)==Lr.call(t)}return!1}(t,r,l,n,i,s,o);if(!(1&n)){var b=h&&Be.call(t,"__wrapped__"),E=d&&Be.call(r,"__wrapped__");if(b||E){var I=b?t.value():t,M=E?r.value():r;return o||(o=new Gr),s(I,M,n,i,o)}}return!!y&&(o||(o=new Gr),function(t,r,n,i,s,o){var a=1&n,c=ts(t),l=c.length;if(l!=ts(r).length&&!a)return!1;for(var u=l;u--;){var h=c[u];if(!(a?h in r:Be.call(r,h)))return!1}var d=o.get(t),f=o.get(r);if(d&&f)return d==r&&f==t;var p=!0;o.set(t,r),o.set(r,t);for(var g=a;++u<l;){var m=t[h=c[u]],w=r[h];if(i)var y=a?i(w,m,h,r,t,o):i(m,w,h,t,r,o);if(!(y===e?m===w||s(m,w,n,i,o):y)){p=!1;break}g||(g="constructor"==h)}if(p&&!g){var b=t.constructor,v=r.constructor;b!=v&&"constructor"in t&&"constructor"in r&&!("function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v)&&(p=!1)}return o.delete(t),o.delete(r),p}(t,r,n,i,s,o))}(t,r,n,i,Mn,s))}function Nn(t,r,n,i){var s=n.length,o=s,a=!i;if(null==t)return!o;for(t=ke(t);s--;){var c=n[s];if(a&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}for(;++s<o;){var l=(c=n[s])[0],u=t[l],h=c[1];if(a&&c[2]){if(u===e&&!(l in t))return!1}else{var d=new Gr;if(i)var f=i(u,h,l,t,r,d);if(!(f===e?Mn(h,u,3,i,d):f))return!1}}return!0}function Rn(e){return!(!ea(e)||function(e){return!!Ue&&Ue in e}(e))&&(Qo(e)?$e:fe).test(Us(e))}function On(e){return"function"==typeof e?e:null==e?nc:"object"==typeof e?zo(e)?jn(e[0],e[1]):Dn(e):dc(e)}function Bn(e){if(!As(e))return gr(e);var t=[];for(var r in ke(e))Be.call(e,r)&&"constructor"!=r&&t.push(r);return t}function Ln(e,t){return e<t}function Un(e,t){var r=-1,n=Vo(e)?Ae(e.length):[];return hn(e,(function(e,i,s){n[++r]=t(e,i,s)})),n}function Dn(e){var t=cs(e);return 1==t.length&&t[0][2]?Es(t[0][0],t[0][1]):function(r){return r===e||Nn(r,e,t)}}function jn(t,r){return ys(t)&&xs(r)?Es(Ls(t),r):function(n){var i=ka(n,t);return i===e&&i===r?Sa(n,t):Mn(r,i,3)}}function Fn(t,r,n,i,s){t!==r&&wn(r,(function(o,a){if(s||(s=new Gr),ea(o))!function(t,r,n,i,s,o,a){var c=ks(t,n),l=ks(r,n),u=a.get(l);if(u)Yr(t,n,u);else{var h=o?o(c,l,n+"",t,r,a):e,d=h===e;if(d){var f=zo(l),p=!f&&Zo(l),g=!f&&!p&&la(l);h=l,f||p||g?zo(c)?h=c:Go(c)?h=Si(c):p?(d=!1,h=Ai(l,!0)):g?(d=!1,h=Ei(l,!0)):h=[]:ia(l)||Ho(l)?(h=c,Ho(c)?h=wa(c):(!ea(c)||Qo(c))&&(h=ps(l))):d=!1}d&&(a.set(l,h),s(h,l,i,o,a),a.delete(l)),Yr(t,n,h)}}(t,r,a,n,Fn,i,s);else{var c=i?i(ks(t,a),o,a+"",t,r,s):e;c===e&&(c=o),Yr(t,a,c)}}),Na)}function $n(t,r){var n=t.length;if(n)return ms(r+=r<0?n:0,n)?t[r]:e}function qn(e,t,r){t=t.length?Tt(t,(function(e){return zo(e)?function(t){return xn(t,1===e.length?e[0]:e)}:e})):[nc];var n=-1;return t=Tt(t,Gt(os())),function(e){var t=e.length;for(e.sort((function(e,t){return function(e,t,r){for(var n=-1,i=e.criteria,s=t.criteria,o=i.length,a=r.length;++n<o;){var c=Ci(i[n],s[n]);if(c)return n>=a?c:c*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}));t--;)e[t]=e[t].value;return e}(Un(e,(function(e,r,i){return{criteria:Tt(t,(function(t){return t(e)})),index:++n,value:e}})))}function Hn(e,t,r){for(var n=-1,i=t.length,s={};++n<i;){var o=t[n],a=xn(e,o);r(a,o)&&Qn(s,wi(o,e),a)}return s}function zn(e,t,r,n){var i=n?Dt:Ut,s=-1,o=t.length,a=e;for(e===t&&(t=Si(t)),r&&(a=Tt(e,Gt(r)));++s<o;)for(var c=0,l=t[s],u=r?r(l):l;(c=i(a,u,c,n))>-1;)a!==e&&Ye.call(a,c,1),Ye.call(e,c,1);return e}function Wn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var i=t[r];if(r==n||i!==s){var s=i;ms(i)?Ye.call(e,i,1):li(e,i)}}return e}function Vn(e,t){return e+qt(vr()*(t-e+1))}function Gn(e,t){var r="";if(!e||t<1||t>a)return r;do{t%2&&(r+=e),(t=qt(t/2))&&(e+=e)}while(t);return r}function Zn(e,t){return Ts(Cs(e,t,nc),e+"")}function Kn(e){return Kr(Fa(e))}function Jn(e,t){var r=Fa(e);return Ns(r,on(t,0,r.length))}function Qn(t,r,n,i){if(!ea(t))return t;for(var s=-1,o=(r=wi(r,t)).length,a=o-1,c=t;null!=c&&++s<o;){var l=Ls(r[s]),u=n;if("__proto__"===l||"constructor"===l||"prototype"===l)return t;if(s!=a){var h=c[l];(u=i?i(h,l,c):e)===e&&(u=ea(h)?h:ms(r[s+1])?[]:{})}Xr(c,l,u),c=c[l]}return t}var Yn=Ir?function(e,t){return Ir.set(e,t),e}:nc,Xn=ut?function(e,t){return ut(e,"toString",{configurable:!0,enumerable:!1,value:ec(t),writable:!0})}:nc;function ei(e){return Ns(Fa(e))}function ti(e,t,r){var n=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(r=r>i?i:r)<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var s=Ae(i);++n<i;)s[n]=e[n+t];return s}function ri(e,t){var r;return hn(e,(function(e,n,i){return!(r=t(e,n,i))})),!!r}function ni(e,t,r){var n=0,i=null==e?n:e.length;if("number"==typeof t&&t==t&&i<=h){for(;n<i;){var s=n+i>>>1,o=e[s];null!==o&&!ca(o)&&(r?o<=t:o<t)?n=s+1:i=s}return i}return ii(e,t,nc,r)}function ii(t,r,n,i){var s=0,o=null==t?0:t.length;if(0===o)return 0;for(var a=(r=n(r))!=r,c=null===r,l=ca(r),h=r===e;s<o;){var d=qt((s+o)/2),f=n(t[d]),p=f!==e,g=null===f,m=f==f,w=ca(f);if(a)var y=i||m;else y=h?m&&(i||p):c?m&&p&&(i||!g):l?m&&p&&!g&&(i||!w):!g&&!w&&(i?f<=r:f<r);y?s=d+1:o=d}return wr(o,u)}function si(e,t){for(var r=-1,n=e.length,i=0,s=[];++r<n;){var o=e[r],a=t?t(o):o;if(!r||!Fo(a,c)){var c=a;s[i++]=0===o?0:o}}return s}function oi(e){return"number"==typeof e?e:ca(e)?c:+e}function ai(e){if("string"==typeof e)return e;if(zo(e))return Tt(e,ai)+"";if(ca(e))return Ur?Ur.call(e):"";var t=e+"";return"0"==t&&1/e==-o?"-0":t}function ci(e,t,r){var n=-1,i=St,s=e.length,o=!0,a=[],c=a;if(r)o=!1,i=It;else if(s>=200){var l=t?null:Gi(e);if(l)return sr(l);o=!1,i=Kt,c=new Vr}else c=t?[]:a;e:for(;++n<s;){var u=e[n],h=t?t(u):u;if(u=r||0!==u?u:0,o&&h==h){for(var d=c.length;d--;)if(c[d]===h)continue e;t&&c.push(h),a.push(u)}else i(c,h,r)||(c!==a&&c.push(h),a.push(u))}return a}function li(e,t){return null==(e=_s(e,t=wi(t,e)))||delete e[Ls(Ks(t))]}function ui(e,t,r,n){return Qn(e,t,r(xn(e,t)),n)}function hi(e,t,r,n){for(var i=e.length,s=n?i:-1;(n?s--:++s<i)&&t(e[s],s,e););return r?ti(e,n?0:s,n?s+1:i):ti(e,n?s+1:0,n?i:s)}function di(e,t){var r=e;return r instanceof qr&&(r=r.value()),Mt(t,(function(e,t){return t.func.apply(t.thisArg,Pt([e],t.args))}),r)}function fi(e,t,r){var n=e.length;if(n<2)return n?ci(e[0]):[];for(var i=-1,s=Ae(n);++i<n;)for(var o=e[i],a=-1;++a<n;)a!=i&&(s[i]=un(s[i]||o,e[a],t,r));return ci(mn(s,1),t,r)}function pi(t,r,n){for(var i=-1,s=t.length,o=r.length,a={};++i<s;){var c=i<o?r[i]:e;n(a,t[i],c)}return a}function gi(e){return Go(e)?e:[]}function mi(e){return"function"==typeof e?e:nc}function wi(e,t){return zo(e)?e:ys(e,t)?[e]:Bs(ya(e))}var yi=Zn;function bi(t,r,n){var i=t.length;return n=n===e?i:n,!r&&n>=i?t:ti(t,r,n)}var vi=ht||function(e){return lt.clearTimeout(e)};function Ai(e,t){if(t)return e.slice();var r=e.length,n=We?We(r):new e.constructor(r);return e.copy(n),n}function xi(e){var t=new e.constructor(e.byteLength);return new ze(t).set(new ze(e)),t}function Ei(e,t){var r=t?xi(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Ci(t,r){if(t!==r){var n=t!==e,i=null===t,s=t==t,o=ca(t),a=r!==e,c=null===r,l=r==r,u=ca(r);if(!c&&!u&&!o&&t>r||o&&a&&l&&!c&&!u||i&&a&&l||!n&&l||!s)return 1;if(!i&&!o&&!u&&t<r||u&&n&&s&&!i&&!o||c&&n&&s||!a&&s||!l)return-1}return 0}function _i(e,t,r,n){for(var i=-1,s=e.length,o=r.length,a=-1,c=t.length,l=mr(s-o,0),u=Ae(c+l),h=!n;++a<c;)u[a]=t[a];for(;++i<o;)(h||i<s)&&(u[r[i]]=e[i]);for(;l--;)u[a++]=e[i++];return u}function ki(e,t,r,n){for(var i=-1,s=e.length,o=-1,a=r.length,c=-1,l=t.length,u=mr(s-a,0),h=Ae(u+l),d=!n;++i<u;)h[i]=e[i];for(var f=i;++c<l;)h[f+c]=t[c];for(;++o<a;)(d||i<s)&&(h[f+r[o]]=e[i++]);return h}function Si(e,t){var r=-1,n=e.length;for(t||(t=Ae(n));++r<n;)t[r]=e[r];return t}function Ii(t,r,n,i){var s=!n;n||(n={});for(var o=-1,a=r.length;++o<a;){var c=r[o],l=i?i(n[c],t[c],c,n,t):e;l===e&&(l=t[c]),s?nn(n,c,l):Xr(n,c,l)}return n}function Ti(e,t){return function(r,n){var i=zo(r)?xt:tn,s=t?t():{};return i(r,e,os(n,2),s)}}function Pi(t){return Zn((function(r,n){var i=-1,s=n.length,o=s>1?n[s-1]:e,a=s>2?n[2]:e;for(o=t.length>3&&"function"==typeof o?(s--,o):e,a&&ws(n[0],n[1],a)&&(o=s<3?e:o,s=1),r=ke(r);++i<s;){var c=n[i];c&&t(r,c,i,o)}return r}))}function Mi(e,t){return function(r,n){if(null==r)return r;if(!Vo(r))return e(r,n);for(var i=r.length,s=t?i:-1,o=ke(r);(t?s--:++s<i)&&!1!==n(o[s],s,o););return r}}function Ni(e){return function(t,r,n){for(var i=-1,s=ke(t),o=n(t),a=o.length;a--;){var c=o[e?a:++i];if(!1===r(s[c],c,s))break}return t}}function Ri(t){return function(r){var n=tr(r=ya(r))?ar(r):e,i=n?n[0]:r.charAt(0),s=n?bi(n,1).join(""):r.slice(1);return i[t]()+s}}function Oi(e){return function(t){return Mt(Qa(Ha(t).replace(Ze,"")),e,"")}}function Bi(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=jr(e.prototype),n=e.apply(r,t);return ea(n)?n:r}}function Li(t){return function(r,n,i){var s=ke(r);if(!Vo(r)){var o=os(n,3);r=Ma(r),n=function(e){return o(s[e],e,s)}}var a=t(r,n,i);return a>-1?s[o?r[a]:a]:e}}function Ui(r){return es((function(n){var i=n.length,s=i,o=$r.prototype.thru;for(r&&n.reverse();s--;){var a=n[s];if("function"!=typeof a)throw new Te(t);if(o&&!c&&"wrapper"==is(a))var c=new $r([],!0)}for(s=c?s:i;++s<i;){var l=is(a=n[s]),u="wrapper"==l?ns(a):e;c=u&&bs(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?c[is(u[0])].apply(c,u[3]):1==a.length&&bs(a)?c[l]():c.thru(a)}return function(){var e=arguments,t=e[0];if(c&&1==e.length&&zo(t))return c.plant(t).value();for(var r=0,s=i?n[r].apply(this,e):t;++r<i;)s=n[r].call(this,s);return s}}))}function Di(t,r,n,i,o,a,c,l,u,h){var d=r&s,f=1&r,p=2&r,g=24&r,m=512&r,w=p?e:Bi(t);return function s(){for(var y=arguments.length,b=Ae(y),v=y;v--;)b[v]=arguments[v];if(g)var A=ss(s),x=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(b,A);if(i&&(b=_i(b,i,o,g)),a&&(b=ki(b,a,c,g)),y-=x,g&&y<h){var E=ir(b,A);return Wi(t,r,Di,s.placeholder,n,b,E,l,u,h-y)}var C=f?n:this,_=p?C[t]:t;return y=b.length,l?b=function(t,r){for(var n=t.length,i=wr(r.length,n),s=Si(t);i--;){var o=r[i];t[i]=ms(o,n)?s[o]:e}return t}(b,l):m&&y>1&&b.reverse(),d&&u<y&&(b.length=u),this&&this!==lt&&this instanceof s&&(_=w||Bi(_)),_.apply(C,b)}}function ji(e,t){return function(r,n){return function(e,t,r,n){return bn(e,(function(e,i,s){t(n,r(e),i,s)})),n}(r,e,t(n),{})}}function Fi(t,r){return function(n,i){var s;if(n===e&&i===e)return r;if(n!==e&&(s=n),i!==e){if(s===e)return i;"string"==typeof n||"string"==typeof i?(n=ai(n),i=ai(i)):(n=oi(n),i=oi(i)),s=t(n,i)}return s}}function $i(e){return es((function(t){return t=Tt(t,Gt(os())),Zn((function(r){var n=this;return e(t,(function(e){return At(e,n,r)}))}))}))}function qi(t,r){var n=(r=r===e?" ":ai(r)).length;if(n<2)return n?Gn(r,t):r;var i=Gn(r,Ot(t/or(r)));return tr(r)?bi(ar(i),0,t).join(""):i.slice(0,t)}function Hi(t){return function(r,n,i){return i&&"number"!=typeof i&&ws(r,n,i)&&(n=i=e),r=fa(r),n===e?(n=r,r=0):n=fa(n),function(e,t,r,n){for(var i=-1,s=mr(Ot((t-e)/(r||1)),0),o=Ae(s);s--;)o[n?s:++i]=e,e+=r;return o}(r,n,i=i===e?r<n?1:-1:fa(i),t)}}function zi(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ma(t),r=ma(r)),e(t,r)}}function Wi(t,r,n,s,o,a,c,l,u,h){var d=8&r;r|=d?i:64,4&(r&=~(d?64:i))||(r&=-4);var f=[t,r,o,d?a:e,d?c:e,d?e:a,d?e:c,l,u,h],p=n.apply(e,f);return bs(t)&&Ss(p,f),p.placeholder=s,Ps(p,t,r)}function Vi(e){var t=_e[e];return function(e,r){if(e=ma(e),(r=null==r?0:wr(pa(r),292))&&fr(e)){var n=(ya(e)+"e").split("e");return+((n=(ya(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Gi=_r&&1/sr(new _r([,-0]))[1]==o?function(e){return new _r(e)}:cc;function Zi(e){return function(t){var r=ds(t);return r==v?rr(t):r==_?function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}(t):function(e,t){return Tt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Ki(r,o,a,c,l,u,h,d){var f=2&o;if(!f&&"function"!=typeof r)throw new Te(t);var p=c?c.length:0;if(p||(o&=-97,c=l=e),h=h===e?h:mr(pa(h),0),d=d===e?d:pa(d),p-=l?l.length:0,64&o){var g=c,m=l;c=l=e}var w=f?e:ns(r),y=[r,o,a,c,l,g,m,u,h,d];if(w&&function(e,t){var r=e[1],i=t[1],o=r|i,a=o<131,c=i==s&&8==r||i==s&&256==r&&e[7].length<=t[8]||384==i&&t[7].length<=t[8]&&8==r;if(!a&&!c)return e;1&i&&(e[2]=t[2],o|=1&r?0:4);var l=t[3];if(l){var u=e[3];e[3]=u?_i(u,l,t[4]):l,e[4]=u?ir(e[3],n):t[4]}(l=t[5])&&(u=e[5],e[5]=u?ki(u,l,t[6]):l,e[6]=u?ir(e[5],n):t[6]),(l=t[7])&&(e[7]=l),i&s&&(e[8]=null==e[8]?t[8]:wr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=o}(y,w),r=y[0],o=y[1],a=y[2],c=y[3],l=y[4],!(d=y[9]=y[9]===e?f?0:r.length:mr(y[9]-p,0))&&24&o&&(o&=-25),o&&1!=o)b=8==o||16==o?function(t,r,n){var i=Bi(t);return function s(){for(var o=arguments.length,a=Ae(o),c=o,l=ss(s);c--;)a[c]=arguments[c];var u=o<3&&a[0]!==l&&a[o-1]!==l?[]:ir(a,l);return(o-=u.length)<n?Wi(t,r,Di,s.placeholder,e,a,u,e,e,n-o):At(this&&this!==lt&&this instanceof s?i:t,this,a)}}(r,o,d):o!=i&&33!=o||l.length?Di.apply(e,y):function(e,t,r,n){var i=1&t,s=Bi(e);return function t(){for(var o=-1,a=arguments.length,c=-1,l=n.length,u=Ae(l+a),h=this&&this!==lt&&this instanceof t?s:e;++c<l;)u[c]=n[c];for(;a--;)u[c++]=arguments[++o];return At(h,i?r:this,u)}}(r,o,a,c);else var b=function(e,t,r){var n=1&t,i=Bi(e);return function t(){return(this&&this!==lt&&this instanceof t?i:e).apply(n?r:this,arguments)}}(r,o,a);return Ps((w?Yn:Ss)(b,y),r,o)}function Ji(t,r,n,i){return t===e||Fo(t,Ne[n])&&!Be.call(i,n)?r:t}function Qi(t,r,n,i,s,o){return ea(t)&&ea(r)&&(o.set(r,t),Fn(t,r,e,Qi,o),o.delete(r)),t}function Yi(t){return ia(t)?e:t}function Xi(t,r,n,i,s,o){var a=1&n,c=t.length,l=r.length;if(c!=l&&!(a&&l>c))return!1;var u=o.get(t),h=o.get(r);if(u&&h)return u==r&&h==t;var d=-1,f=!0,p=2&n?new Vr:e;for(o.set(t,r),o.set(r,t);++d<c;){var g=t[d],m=r[d];if(i)var w=a?i(m,g,d,r,t,o):i(g,m,d,t,r,o);if(w!==e){if(w)continue;f=!1;break}if(p){if(!Rt(r,(function(e,t){if(!Kt(p,t)&&(g===e||s(g,e,n,i,o)))return p.push(t)}))){f=!1;break}}else if(g!==m&&!s(g,m,n,i,o)){f=!1;break}}return o.delete(t),o.delete(r),f}function es(t){return Ts(Cs(t,e,zs),t+"")}function ts(e){return En(e,Ma,us)}function rs(e){return En(e,Na,hs)}var ns=Ir?function(e){return Ir.get(e)}:cc;function is(e){for(var t=e.name+"",r=Tr[t],n=Be.call(Tr,t)?r.length:0;n--;){var i=r[n],s=i.func;if(null==s||s==e)return i.name}return t}function ss(e){return(Be.call(Dr,"placeholder")?Dr:e).placeholder}function os(){var e=Dr.iteratee||ic;return e=e===ic?On:e,arguments.length?e(arguments[0],arguments[1]):e}function as(e,t){var r=e.__data__;return function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?r["string"==typeof t?"string":"hash"]:r.map}function cs(e){for(var t=Ma(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,xs(i)]}return t}function ls(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return Rn(n)?n:e}var us=hr?function(e){return null==e?[]:(e=ke(e),kt(hr(e),(function(t){return Je.call(e,t)})))}:gc,hs=hr?function(e){for(var t=[];e;)Pt(t,us(e)),e=Ve(e);return t}:gc,ds=Cn;function fs(e,t,r){for(var n=-1,i=(t=wi(t,e)).length,s=!1;++n<i;){var o=Ls(t[n]);if(!(s=null!=e&&r(e,o)))break;e=e[o]}return s||++n!=i?s:!!(i=null==e?0:e.length)&&Xo(i)&&ms(o,i)&&(zo(e)||Ho(e))}function ps(e){return"function"!=typeof e.constructor||As(e)?{}:jr(Ve(e))}function gs(e){return zo(e)||Ho(e)||!!(it&&e&&e[it])}function ms(e,t){var r=typeof e;return!!(t=t??a)&&("number"==r||"symbol"!=r&&ge.test(e))&&e>-1&&e%1==0&&e<t}function ws(e,t,r){if(!ea(r))return!1;var n=typeof t;return!!("number"==n?Vo(r)&&ms(t,r.length):"string"==n&&t in r)&&Fo(r[t],e)}function ys(e,t){if(zo(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ca(e))||Q.test(e)||!J.test(e)||null!=t&&e in ke(t)}function bs(e){var t=is(e),r=Dr[t];if("function"!=typeof r||!(t in qr.prototype))return!1;if(e===r)return!0;var n=ns(r);return!!n&&e===n[0]}(xr&&ds(new xr(new ArrayBuffer(1)))!=P||Er&&ds(new Er)!=v||Cr&&ds(Cr.resolve())!=E||_r&&ds(new _r)!=_||kr&&ds(new kr)!=I)&&(ds=function(t){var r=Cn(t),n=r==x?t.constructor:e,i=n?Us(n):"";if(i)switch(i){case Pr:return P;case Mr:return v;case Nr:return E;case Rr:return _;case Or:return I}return r});var vs=Re?Qo:mc;function As(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ne)}function xs(e){return e==e&&!ea(e)}function Es(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in ke(n))}}function Cs(t,r,n){return r=mr(r===e?t.length-1:r,0),function(){for(var e=arguments,i=-1,s=mr(e.length-r,0),o=Ae(s);++i<s;)o[i]=e[r+i];i=-1;for(var a=Ae(r+1);++i<r;)a[i]=e[i];return a[r]=n(o),At(t,this,a)}}function _s(e,t){return t.length<2?e:xn(e,ti(t,0,-1))}function ks(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Ss=Ms(Yn),Is=pt||function(e,t){return lt.setTimeout(e,t)},Ts=Ms(Xn);function Ps(e,t,r){var n=t+"";return Ts(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(ne,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return Et(d,(function(r){var n="_."+r[0];t&r[1]&&!St(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ie);return t?t[1].split(se):[]}(n),r)))}function Ms(t){var r=0,n=0;return function(){var i=yr(),s=16-(i-n);if(n=i,s>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function Ns(t,r){var n=-1,i=t.length,s=i-1;for(r=r===e?i:r;++n<r;){var o=Vn(n,s),a=t[o];t[o]=t[n],t[n]=a}return t.length=r,t}var Rs,Os,Bs=(Rs=Oo((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Y,(function(e,r,n,i){t.push(n?i.replace(ce,"$1"):r||e)})),t}),(function(e){return 500===Os.size&&Os.clear(),e})),Os=Rs.cache,Rs);function Ls(e){if("string"==typeof e||ca(e))return e;var t=e+"";return"0"==t&&1/e==-o?"-0":t}function Us(e){if(null!=e){try{return Oe.call(e)}catch{}try{return e+""}catch{}}return""}function Ds(e){if(e instanceof qr)return e.clone();var t=new $r(e.__wrapped__,e.__chain__);return t.__actions__=Si(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var js=Zn((function(e,t){return Go(e)?un(e,mn(t,1,Go,!0)):[]})),Fs=Zn((function(t,r){var n=Ks(r);return Go(n)&&(n=e),Go(t)?un(t,mn(r,1,Go,!0),os(n,2)):[]})),$s=Zn((function(t,r){var n=Ks(r);return Go(n)&&(n=e),Go(t)?un(t,mn(r,1,Go,!0),e,n):[]}));function qs(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:pa(r);return i<0&&(i=mr(n+i,0)),Lt(e,os(t,3),i)}function Hs(t,r,n){var i=null==t?0:t.length;if(!i)return-1;var s=i-1;return n!==e&&(s=pa(n),s=n<0?mr(i+s,0):wr(s,i-1)),Lt(t,os(r,3),s,!0)}function zs(e){return null!=e&&e.length?mn(e,1):[]}function Ws(t){return t&&t.length?t[0]:e}var Vs=Zn((function(e){var t=Tt(e,gi);return t.length&&t[0]===e[0]?In(t):[]})),Gs=Zn((function(t){var r=Ks(t),n=Tt(t,gi);return r===Ks(n)?r=e:n.pop(),n.length&&n[0]===t[0]?In(n,os(r,2)):[]})),Zs=Zn((function(t){var r=Ks(t),n=Tt(t,gi);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?In(n,e,r):[]}));function Ks(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Js=Zn(Qs);function Qs(e,t){return e&&e.length&&t&&t.length?zn(e,t):e}var Ys=es((function(e,t){var r=null==e?0:e.length,n=sn(e,t);return Wn(e,Tt(t,(function(e){return ms(e,r)?+e:e})).sort(Ci)),n}));function Xs(e){return null==e?e:Ar.call(e)}var eo=Zn((function(e){return ci(mn(e,1,Go,!0))})),to=Zn((function(t){var r=Ks(t);return Go(r)&&(r=e),ci(mn(t,1,Go,!0),os(r,2))})),ro=Zn((function(t){var r=Ks(t);return r="function"==typeof r?r:e,ci(mn(t,1,Go,!0),e,r)}));function no(e){if(!e||!e.length)return[];var t=0;return e=kt(e,(function(e){if(Go(e))return t=mr(e.length,t),!0})),Wt(t,(function(t){return Tt(e,$t(t))}))}function io(t,r){if(!t||!t.length)return[];var n=no(t);return null==r?n:Tt(n,(function(t){return At(r,e,t)}))}var so=Zn((function(e,t){return Go(e)?un(e,t):[]})),oo=Zn((function(e){return fi(kt(e,Go))})),ao=Zn((function(t){var r=Ks(t);return Go(r)&&(r=e),fi(kt(t,Go),os(r,2))})),co=Zn((function(t){var r=Ks(t);return r="function"==typeof r?r:e,fi(kt(t,Go),e,r)})),lo=Zn(no),uo=Zn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,io(t,n)}));function ho(e){var t=Dr(e);return t.__chain__=!0,t}function fo(e,t){return t(e)}var po=es((function(t){var r=t.length,n=r?t[0]:0,i=this.__wrapped__,s=function(e){return sn(e,t)};return!(r>1||this.__actions__.length)&&i instanceof qr&&ms(n)?((i=i.slice(n,+n+(r?1:0))).__actions__.push({func:fo,args:[s],thisArg:e}),new $r(i,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(s)})),go=Ti((function(e,t,r){Be.call(e,r)?++e[r]:nn(e,r,1)})),mo=Li(qs),wo=Li(Hs);function yo(e,t){return(zo(e)?Et:hn)(e,os(t,3))}function bo(e,t){return(zo(e)?Ct:dn)(e,os(t,3))}var vo=Ti((function(e,t,r){Be.call(e,r)?e[r].push(t):nn(e,r,[t])})),Ao=Zn((function(e,t,r){var n=-1,i="function"==typeof t,s=Vo(e)?Ae(e.length):[];return hn(e,(function(e){s[++n]=i?At(t,e,r):Tn(e,t,r)})),s})),xo=Ti((function(e,t,r){nn(e,r,t)}));function Eo(e,t){return(zo(e)?Tt:Un)(e,os(t,3))}var Co=Ti((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),_o=Zn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&ws(e,t[0],t[1])?t=[]:r>2&&ws(t[0],t[1],t[2])&&(t=[t[0]]),qn(e,mn(t,1),[])})),ko=ft||function(){return lt.Date.now()};function So(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Ki(t,s,e,e,e,e,r)}function Io(r,n){var i;if("function"!=typeof n)throw new Te(t);return r=pa(r),function(){return--r>0&&(i=n.apply(this,arguments)),r<=1&&(n=e),i}}var To=Zn((function(e,t,r){var n=1;if(r.length){var s=ir(r,ss(To));n|=i}return Ki(e,n,t,r,s)})),Po=Zn((function(e,t,r){var n=3;if(r.length){var s=ir(r,ss(Po));n|=i}return Ki(t,n,e,r,s)}));function Mo(r,n,i){var s,o,a,c,l,u,h=0,d=!1,f=!1,p=!0;if("function"!=typeof r)throw new Te(t);function g(t){var n=s,i=o;return s=o=e,h=t,c=r.apply(i,n)}function m(t){var r=t-u;return u===e||r>=n||r<0||f&&t-h>=a}function w(){var e=ko();if(m(e))return y(e);l=Is(w,function(e){var t=n-(e-u);return f?wr(t,a-(e-h)):t}(e))}function y(t){return l=e,p&&s?g(t):(s=o=e,c)}function b(){var t=ko(),r=m(t);if(s=arguments,o=this,u=t,r){if(l===e)return function(e){return h=e,l=Is(w,n),d?g(e):c}(u);if(f)return vi(l),l=Is(w,n),g(u)}return l===e&&(l=Is(w,n)),c}return n=ma(n)||0,ea(i)&&(d=!!i.leading,a=(f="maxWait"in i)?mr(ma(i.maxWait)||0,n):a,p="trailing"in i?!!i.trailing:p),b.cancel=function(){l!==e&&vi(l),h=0,s=u=o=l=e},b.flush=function(){return l===e?c:y(ko())},b}var No=Zn((function(e,t){return ln(e,1,t)})),Ro=Zn((function(e,t,r){return ln(e,ma(t)||0,r)}));function Oo(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new Te(t);var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],s=n.cache;if(s.has(i))return s.get(i);var o=e.apply(this,t);return n.cache=s.set(i,o)||s,o};return n.cache=new(Oo.Cache||Wr),n}function Bo(e){if("function"!=typeof e)throw new Te(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Oo.Cache=Wr;var Lo=yi((function(e,t){var r=(t=1==t.length&&zo(t[0])?Tt(t[0],Gt(os())):Tt(mn(t,1),Gt(os()))).length;return Zn((function(n){for(var i=-1,s=wr(n.length,r);++i<s;)n[i]=t[i].call(this,n[i]);return At(e,this,n)}))})),Uo=Zn((function(t,r){var n=ir(r,ss(Uo));return Ki(t,i,e,r,n)})),Do=Zn((function(t,r){var n=ir(r,ss(Do));return Ki(t,64,e,r,n)})),jo=es((function(t,r){return Ki(t,256,e,e,e,r)}));function Fo(e,t){return e===t||e!=e&&t!=t}var $o=zi(_n),qo=zi((function(e,t){return e>=t})),Ho=Pn(function(){return arguments}())?Pn:function(e){return ta(e)&&Be.call(e,"callee")&&!Je.call(e,"callee")},zo=Ae.isArray,Wo=gt?Gt(gt):function(e){return ta(e)&&Cn(e)==T};function Vo(e){return null!=e&&Xo(e.length)&&!Qo(e)}function Go(e){return ta(e)&&Vo(e)}var Zo=dr||mc,Ko=mt?Gt(mt):function(e){return ta(e)&&Cn(e)==m};function Jo(e){if(!ta(e))return!1;var t=Cn(e);return t==w||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!ia(e)}function Qo(e){if(!ea(e))return!1;var t=Cn(e);return t==y||t==b||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Yo(e){return"number"==typeof e&&e==pa(e)}function Xo(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function ea(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ta(e){return null!=e&&"object"==typeof e}var ra=wt?Gt(wt):function(e){return ta(e)&&ds(e)==v};function na(e){return"number"==typeof e||ta(e)&&Cn(e)==A}function ia(e){if(!ta(e)||Cn(e)!=x)return!1;var t=Ve(e);if(null===t)return!0;var r=Be.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Oe.call(r)==je}var sa=yt?Gt(yt):function(e){return ta(e)&&Cn(e)==C},oa=bt?Gt(bt):function(e){return ta(e)&&ds(e)==_};function aa(e){return"string"==typeof e||!zo(e)&&ta(e)&&Cn(e)==k}function ca(e){return"symbol"==typeof e||ta(e)&&Cn(e)==S}var la=vt?Gt(vt):function(e){return ta(e)&&Xo(e.length)&&!!rt[Cn(e)]},ua=zi(Ln),ha=zi((function(e,t){return e<=t}));function da(e){if(!e)return[];if(Vo(e))return aa(e)?ar(e):Si(e);if(at&&e[at])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[at]());var t=ds(e);return(t==v?rr:t==_?sr:Fa)(e)}function fa(e){return e?(e=ma(e))===o||e===-o?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function pa(e){var t=fa(e),r=t%1;return t==t?r?t-r:t:0}function ga(e){return e?on(pa(e),0,l):0}function ma(e){if("number"==typeof e)return e;if(ca(e))return c;if(ea(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ea(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Vt(e);var r=de.test(e);return r||pe.test(e)?ot(e.slice(2),r?2:8):he.test(e)?c:+e}function wa(e){return Ii(e,Na(e))}function ya(e){return null==e?"":ai(e)}var ba=Pi((function(e,t){if(As(t)||Vo(t))Ii(t,Ma(t),e);else for(var r in t)Be.call(t,r)&&Xr(e,r,t[r])})),va=Pi((function(e,t){Ii(t,Na(t),e)})),Aa=Pi((function(e,t,r,n){Ii(t,Na(t),e,n)})),xa=Pi((function(e,t,r,n){Ii(t,Ma(t),e,n)})),Ea=es(sn),Ca=Zn((function(t,r){t=ke(t);var n=-1,i=r.length,s=i>2?r[2]:e;for(s&&ws(r[0],r[1],s)&&(i=1);++n<i;)for(var o=r[n],a=Na(o),c=-1,l=a.length;++c<l;){var u=a[c],h=t[u];(h===e||Fo(h,Ne[u])&&!Be.call(t,u))&&(t[u]=o[u])}return t})),_a=Zn((function(t){return t.push(e,Qi),At(Oa,e,t)}));function ka(t,r,n){var i=null==t?e:xn(t,r);return i===e?n:i}function Sa(e,t){return null!=e&&fs(e,t,Sn)}var Ia=ji((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=De.call(t)),e[t]=r}),ec(nc)),Ta=ji((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=De.call(t)),Be.call(e,t)?e[t].push(r):e[t]=[r]}),os),Pa=Zn(Tn);function Ma(e){return Vo(e)?Zr(e):Bn(e)}function Na(e){return Vo(e)?Zr(e,!0):function(e){if(!ea(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=As(e),r=[];for(var n in e)"constructor"==n&&(t||!Be.call(e,n))||r.push(n);return r}(e)}var Ra=Pi((function(e,t,r){Fn(e,t,r)})),Oa=Pi((function(e,t,r,n){Fn(e,t,r,n)})),Ba=es((function(e,t){var r={};if(null==e)return r;var n=!1;t=Tt(t,(function(t){return t=wi(t,e),n||(n=t.length>1),t})),Ii(e,rs(e),r),n&&(r=an(r,7,Yi));for(var i=t.length;i--;)li(r,t[i]);return r})),La=es((function(e,t){return null==e?{}:function(e,t){return Hn(e,t,(function(t,r){return Sa(e,r)}))}(e,t)}));function Ua(e,t){if(null==e)return{};var r=Tt(rs(e),(function(e){return[e]}));return t=os(t),Hn(e,r,(function(e,r){return t(e,r[0])}))}var Da=Zi(Ma),ja=Zi(Na);function Fa(e){return null==e?[]:Zt(e,Ma(e))}var $a=Oi((function(e,t,r){return t=t.toLowerCase(),e+(r?qa(t):t)}));function qa(e){return Ja(ya(e).toLowerCase())}function Ha(e){return(e=ya(e))&&e.replace(me,Yt).replace(Ke,"")}var za=Oi((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Wa=Oi((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Va=Ri("toLowerCase"),Ga=Oi((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),Za=Oi((function(e,t,r){return e+(r?" ":"")+Ja(t)})),Ka=Oi((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Ja=Ri("toUpperCase");function Qa(t,r,n){return t=ya(t),(r=n?e:r)===e?function(e){return Xe.test(e)}(t)?function(e){return e.match(Qe)||[]}(t):function(e){return e.match(oe)||[]}(t):t.match(r)||[]}var Ya=Zn((function(t,r){try{return At(t,e,r)}catch(e){return Jo(e)?e:new Ee(e)}})),Xa=es((function(e,t){return Et(t,(function(t){t=Ls(t),nn(e,t,To(e[t],e))})),e}));function ec(e){return function(){return e}}var tc=Ui(),rc=Ui(!0);function nc(e){return e}function ic(e){return On("function"==typeof e?e:an(e,1))}var sc=Zn((function(e,t){return function(r){return Tn(r,e,t)}})),oc=Zn((function(e,t){return function(r){return Tn(e,r,t)}}));function ac(e,t,r){var n=Ma(t),i=An(t,n);null==r&&(!ea(t)||!i.length&&n.length)&&(r=t,t=e,e=this,i=An(t,Ma(t)));var s=!(ea(r)&&"chain"in r&&!r.chain),o=Qo(e);return Et(i,(function(r){var n=t[r];e[r]=n,o&&(e.prototype[r]=function(){var t=this.__chain__;if(s||t){var r=e(this.__wrapped__);return(r.__actions__=Si(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Pt([this.value()],arguments))})})),e}function cc(){}var lc=$i(Tt),uc=$i(_t),hc=$i(Rt);function dc(e){return ys(e)?$t(Ls(e)):function(e){return function(t){return xn(t,e)}}(e)}var fc=Hi(),pc=Hi(!0);function gc(){return[]}function mc(){return!1}var wc=Fi((function(e,t){return e+t}),0),yc=Vi("ceil"),bc=Fi((function(e,t){return e/t}),1),vc=Vi("floor"),Ac=Fi((function(e,t){return e*t}),1),xc=Vi("round"),Ec=Fi((function(e,t){return e-t}),0);return Dr.after=function(e,r){if("function"!=typeof r)throw new Te(t);return e=pa(e),function(){if(--e<1)return r.apply(this,arguments)}},Dr.ary=So,Dr.assign=ba,Dr.assignIn=va,Dr.assignInWith=Aa,Dr.assignWith=xa,Dr.at=Ea,Dr.before=Io,Dr.bind=To,Dr.bindAll=Xa,Dr.bindKey=Po,Dr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return zo(e)?e:[e]},Dr.chain=ho,Dr.chunk=function(t,r,n){r=(n?ws(t,r,n):r===e)?1:mr(pa(r),0);var i=null==t?0:t.length;if(!i||r<1)return[];for(var s=0,o=0,a=Ae(Ot(i/r));s<i;)a[o++]=ti(t,s,s+=r);return a},Dr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,i=[];++t<r;){var s=e[t];s&&(i[n++]=s)}return i},Dr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=Ae(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Pt(zo(r)?Si(r):[r],mn(t,1))},Dr.cond=function(e){var r=null==e?0:e.length,n=os();return e=r?Tt(e,(function(e){if("function"!=typeof e[1])throw new Te(t);return[n(e[0]),e[1]]})):[],Zn((function(t){for(var n=-1;++n<r;){var i=e[n];if(At(i[0],this,t))return At(i[1],this,t)}}))},Dr.conforms=function(e){return function(e){var t=Ma(e);return function(r){return cn(r,e,t)}}(an(e,1))},Dr.constant=ec,Dr.countBy=go,Dr.create=function(e,t){var r=jr(e);return null==t?r:rn(r,t)},Dr.curry=function t(r,n,i){var s=Ki(r,8,e,e,e,e,e,n=i?e:n);return s.placeholder=t.placeholder,s},Dr.curryRight=function t(r,n,i){var s=Ki(r,16,e,e,e,e,e,n=i?e:n);return s.placeholder=t.placeholder,s},Dr.debounce=Mo,Dr.defaults=Ca,Dr.defaultsDeep=_a,Dr.defer=No,Dr.delay=Ro,Dr.difference=js,Dr.differenceBy=Fs,Dr.differenceWith=$s,Dr.drop=function(t,r,n){var i=null==t?0:t.length;return i?ti(t,(r=n||r===e?1:pa(r))<0?0:r,i):[]},Dr.dropRight=function(t,r,n){var i=null==t?0:t.length;return i?ti(t,0,(r=i-(r=n||r===e?1:pa(r)))<0?0:r):[]},Dr.dropRightWhile=function(e,t){return e&&e.length?hi(e,os(t,3),!0,!0):[]},Dr.dropWhile=function(e,t){return e&&e.length?hi(e,os(t,3),!0):[]},Dr.fill=function(t,r,n,i){var s=null==t?0:t.length;return s?(n&&"number"!=typeof n&&ws(t,r,n)&&(n=0,i=s),function(t,r,n,i){var s=t.length;for((n=pa(n))<0&&(n=-n>s?0:s+n),(i=i===e||i>s?s:pa(i))<0&&(i+=s),i=n>i?0:ga(i);n<i;)t[n++]=r;return t}(t,r,n,i)):[]},Dr.filter=function(e,t){return(zo(e)?kt:gn)(e,os(t,3))},Dr.flatMap=function(e,t){return mn(Eo(e,t),1)},Dr.flatMapDeep=function(e,t){return mn(Eo(e,t),o)},Dr.flatMapDepth=function(t,r,n){return n=n===e?1:pa(n),mn(Eo(t,r),n)},Dr.flatten=zs,Dr.flattenDeep=function(e){return null!=e&&e.length?mn(e,o):[]},Dr.flattenDepth=function(t,r){return null!=t&&t.length?mn(t,r=r===e?1:pa(r)):[]},Dr.flip=function(e){return Ki(e,512)},Dr.flow=tc,Dr.flowRight=rc,Dr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var i=e[t];n[i[0]]=i[1]}return n},Dr.functions=function(e){return null==e?[]:An(e,Ma(e))},Dr.functionsIn=function(e){return null==e?[]:An(e,Na(e))},Dr.groupBy=vo,Dr.initial=function(e){return null!=e&&e.length?ti(e,0,-1):[]},Dr.intersection=Vs,Dr.intersectionBy=Gs,Dr.intersectionWith=Zs,Dr.invert=Ia,Dr.invertBy=Ta,Dr.invokeMap=Ao,Dr.iteratee=ic,Dr.keyBy=xo,Dr.keys=Ma,Dr.keysIn=Na,Dr.map=Eo,Dr.mapKeys=function(e,t){var r={};return t=os(t,3),bn(e,(function(e,n,i){nn(r,t(e,n,i),e)})),r},Dr.mapValues=function(e,t){var r={};return t=os(t,3),bn(e,(function(e,n,i){nn(r,n,t(e,n,i))})),r},Dr.matches=function(e){return Dn(an(e,1))},Dr.matchesProperty=function(e,t){return jn(e,an(t,1))},Dr.memoize=Oo,Dr.merge=Ra,Dr.mergeWith=Oa,Dr.method=sc,Dr.methodOf=oc,Dr.mixin=ac,Dr.negate=Bo,Dr.nthArg=function(e){return e=pa(e),Zn((function(t){return $n(t,e)}))},Dr.omit=Ba,Dr.omitBy=function(e,t){return Ua(e,Bo(os(t)))},Dr.once=function(e){return Io(2,e)},Dr.orderBy=function(t,r,n,i){return null==t?[]:(zo(r)||(r=null==r?[]:[r]),zo(n=i?e:n)||(n=null==n?[]:[n]),qn(t,r,n))},Dr.over=lc,Dr.overArgs=Lo,Dr.overEvery=uc,Dr.overSome=hc,Dr.partial=Uo,Dr.partialRight=Do,Dr.partition=Co,Dr.pick=La,Dr.pickBy=Ua,Dr.property=dc,Dr.propertyOf=function(t){return function(r){return null==t?e:xn(t,r)}},Dr.pull=Js,Dr.pullAll=Qs,Dr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?zn(e,t,os(r,2)):e},Dr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?zn(t,r,e,n):t},Dr.pullAt=Ys,Dr.range=fc,Dr.rangeRight=pc,Dr.rearg=jo,Dr.reject=function(e,t){return(zo(e)?kt:gn)(e,Bo(os(t,3)))},Dr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,i=[],s=e.length;for(t=os(t,3);++n<s;){var o=e[n];t(o,n,e)&&(r.push(o),i.push(n))}return Wn(e,i),r},Dr.rest=function(r,n){if("function"!=typeof r)throw new Te(t);return Zn(r,n=n===e?n:pa(n))},Dr.reverse=Xs,Dr.sampleSize=function(t,r,n){return r=(n?ws(t,r,n):r===e)?1:pa(r),(zo(t)?Jr:Jn)(t,r)},Dr.set=function(e,t,r){return null==e?e:Qn(e,t,r)},Dr.setWith=function(t,r,n,i){return i="function"==typeof i?i:e,null==t?t:Qn(t,r,n,i)},Dr.shuffle=function(e){return(zo(e)?Qr:ei)(e)},Dr.slice=function(t,r,n){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&ws(t,r,n)?(r=0,n=i):(r=null==r?0:pa(r),n=n===e?i:pa(n)),ti(t,r,n)):[]},Dr.sortBy=_o,Dr.sortedUniq=function(e){return e&&e.length?si(e):[]},Dr.sortedUniqBy=function(e,t){return e&&e.length?si(e,os(t,2)):[]},Dr.split=function(t,r,n){return n&&"number"!=typeof n&&ws(t,r,n)&&(r=n=e),(n=n===e?l:n>>>0)?(t=ya(t))&&("string"==typeof r||null!=r&&!sa(r))&&!(r=ai(r))&&tr(t)?bi(ar(t),0,n):t.split(r,n):[]},Dr.spread=function(e,r){if("function"!=typeof e)throw new Te(t);return r=null==r?0:mr(pa(r),0),Zn((function(t){var n=t[r],i=bi(t,0,r);return n&&Pt(i,n),At(e,this,i)}))},Dr.tail=function(e){var t=null==e?0:e.length;return t?ti(e,1,t):[]},Dr.take=function(t,r,n){return t&&t.length?ti(t,0,(r=n||r===e?1:pa(r))<0?0:r):[]},Dr.takeRight=function(t,r,n){var i=null==t?0:t.length;return i?ti(t,(r=i-(r=n||r===e?1:pa(r)))<0?0:r,i):[]},Dr.takeRightWhile=function(e,t){return e&&e.length?hi(e,os(t,3),!1,!0):[]},Dr.takeWhile=function(e,t){return e&&e.length?hi(e,os(t,3)):[]},Dr.tap=function(e,t){return t(e),e},Dr.throttle=function(e,r,n){var i=!0,s=!0;if("function"!=typeof e)throw new Te(t);return ea(n)&&(i="leading"in n?!!n.leading:i,s="trailing"in n?!!n.trailing:s),Mo(e,r,{leading:i,maxWait:r,trailing:s})},Dr.thru=fo,Dr.toArray=da,Dr.toPairs=Da,Dr.toPairsIn=ja,Dr.toPath=function(e){return zo(e)?Tt(e,Ls):ca(e)?[e]:Si(Bs(ya(e)))},Dr.toPlainObject=wa,Dr.transform=function(e,t,r){var n=zo(e),i=n||Zo(e)||la(e);if(t=os(t,4),null==r){var s=e&&e.constructor;r=i?n?new s:[]:ea(e)&&Qo(s)?jr(Ve(e)):{}}return(i?Et:bn)(e,(function(e,n,i){return t(r,e,n,i)})),r},Dr.unary=function(e){return So(e,1)},Dr.union=eo,Dr.unionBy=to,Dr.unionWith=ro,Dr.uniq=function(e){return e&&e.length?ci(e):[]},Dr.uniqBy=function(e,t){return e&&e.length?ci(e,os(t,2)):[]},Dr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?ci(t,e,r):[]},Dr.unset=function(e,t){return null==e||li(e,t)},Dr.unzip=no,Dr.unzipWith=io,Dr.update=function(e,t,r){return null==e?e:ui(e,t,mi(r))},Dr.updateWith=function(t,r,n,i){return i="function"==typeof i?i:e,null==t?t:ui(t,r,mi(n),i)},Dr.values=Fa,Dr.valuesIn=function(e){return null==e?[]:Zt(e,Na(e))},Dr.without=so,Dr.words=Qa,Dr.wrap=function(e,t){return Uo(mi(t),e)},Dr.xor=oo,Dr.xorBy=ao,Dr.xorWith=co,Dr.zip=lo,Dr.zipObject=function(e,t){return pi(e||[],t||[],Xr)},Dr.zipObjectDeep=function(e,t){return pi(e||[],t||[],Qn)},Dr.zipWith=uo,Dr.entries=Da,Dr.entriesIn=ja,Dr.extend=va,Dr.extendWith=Aa,ac(Dr,Dr),Dr.add=wc,Dr.attempt=Ya,Dr.camelCase=$a,Dr.capitalize=qa,Dr.ceil=yc,Dr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ma(n))==n?n:0),r!==e&&(r=(r=ma(r))==r?r:0),on(ma(t),r,n)},Dr.clone=function(e){return an(e,4)},Dr.cloneDeep=function(e){return an(e,5)},Dr.cloneDeepWith=function(t,r){return an(t,5,r="function"==typeof r?r:e)},Dr.cloneWith=function(t,r){return an(t,4,r="function"==typeof r?r:e)},Dr.conformsTo=function(e,t){return null==t||cn(e,t,Ma(t))},Dr.deburr=Ha,Dr.defaultTo=function(e,t){return null==e||e!=e?t:e},Dr.divide=bc,Dr.endsWith=function(t,r,n){t=ya(t),r=ai(r);var i=t.length,s=n=n===e?i:on(pa(n),0,i);return(n-=r.length)>=0&&t.slice(n,s)==r},Dr.eq=Fo,Dr.escape=function(e){return(e=ya(e))&&V.test(e)?e.replace(z,Xt):e},Dr.escapeRegExp=function(e){return(e=ya(e))&&ee.test(e)?e.replace(X,"\\$&"):e},Dr.every=function(t,r,n){var i=zo(t)?_t:fn;return n&&ws(t,r,n)&&(r=e),i(t,os(r,3))},Dr.find=mo,Dr.findIndex=qs,Dr.findKey=function(e,t){return Bt(e,os(t,3),bn)},Dr.findLast=wo,Dr.findLastIndex=Hs,Dr.findLastKey=function(e,t){return Bt(e,os(t,3),vn)},Dr.floor=vc,Dr.forEach=yo,Dr.forEachRight=bo,Dr.forIn=function(e,t){return null==e?e:wn(e,os(t,3),Na)},Dr.forInRight=function(e,t){return null==e?e:yn(e,os(t,3),Na)},Dr.forOwn=function(e,t){return e&&bn(e,os(t,3))},Dr.forOwnRight=function(e,t){return e&&vn(e,os(t,3))},Dr.get=ka,Dr.gt=$o,Dr.gte=qo,Dr.has=function(e,t){return null!=e&&fs(e,t,kn)},Dr.hasIn=Sa,Dr.head=Ws,Dr.identity=nc,Dr.includes=function(e,t,r,n){e=Vo(e)?e:Fa(e),r=r&&!n?pa(r):0;var i=e.length;return r<0&&(r=mr(i+r,0)),aa(e)?r<=i&&e.indexOf(t,r)>-1:!!i&&Ut(e,t,r)>-1},Dr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:pa(r);return i<0&&(i=mr(n+i,0)),Ut(e,t,i)},Dr.inRange=function(t,r,n){return r=fa(r),n===e?(n=r,r=0):n=fa(n),function(e,t,r){return e>=wr(t,r)&&e<mr(t,r)}(t=ma(t),r,n)},Dr.invoke=Pa,Dr.isArguments=Ho,Dr.isArray=zo,Dr.isArrayBuffer=Wo,Dr.isArrayLike=Vo,Dr.isArrayLikeObject=Go,Dr.isBoolean=function(e){return!0===e||!1===e||ta(e)&&Cn(e)==g},Dr.isBuffer=Zo,Dr.isDate=Ko,Dr.isElement=function(e){return ta(e)&&1===e.nodeType&&!ia(e)},Dr.isEmpty=function(e){if(null==e)return!0;if(Vo(e)&&(zo(e)||"string"==typeof e||"function"==typeof e.splice||Zo(e)||la(e)||Ho(e)))return!e.length;var t=ds(e);if(t==v||t==_)return!e.size;if(As(e))return!Bn(e).length;for(var r in e)if(Be.call(e,r))return!1;return!0},Dr.isEqual=function(e,t){return Mn(e,t)},Dr.isEqualWith=function(t,r,n){var i=(n="function"==typeof n?n:e)?n(t,r):e;return i===e?Mn(t,r,e,n):!!i},Dr.isError=Jo,Dr.isFinite=function(e){return"number"==typeof e&&fr(e)},Dr.isFunction=Qo,Dr.isInteger=Yo,Dr.isLength=Xo,Dr.isMap=ra,Dr.isMatch=function(e,t){return e===t||Nn(e,t,cs(t))},Dr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,Nn(t,r,cs(r),n)},Dr.isNaN=function(e){return na(e)&&e!=+e},Dr.isNative=function(e){if(vs(e))throw new Ee("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Rn(e)},Dr.isNil=function(e){return null==e},Dr.isNull=function(e){return null===e},Dr.isNumber=na,Dr.isObject=ea,Dr.isObjectLike=ta,Dr.isPlainObject=ia,Dr.isRegExp=sa,Dr.isSafeInteger=function(e){return Yo(e)&&e>=-a&&e<=a},Dr.isSet=oa,Dr.isString=aa,Dr.isSymbol=ca,Dr.isTypedArray=la,Dr.isUndefined=function(t){return t===e},Dr.isWeakMap=function(e){return ta(e)&&ds(e)==I},Dr.isWeakSet=function(e){return ta(e)&&"[object WeakSet]"==Cn(e)},Dr.join=function(e,t){return null==e?"":pr.call(e,t)},Dr.kebabCase=za,Dr.last=Ks,Dr.lastIndexOf=function(t,r,n){var i=null==t?0:t.length;if(!i)return-1;var s=i;return n!==e&&(s=(s=pa(n))<0?mr(i+s,0):wr(s,i-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,s):Lt(t,jt,s,!0)},Dr.lowerCase=Wa,Dr.lowerFirst=Va,Dr.lt=ua,Dr.lte=ha,Dr.max=function(t){return t&&t.length?pn(t,nc,_n):e},Dr.maxBy=function(t,r){return t&&t.length?pn(t,os(r,2),_n):e},Dr.mean=function(e){return Ft(e,nc)},Dr.meanBy=function(e,t){return Ft(e,os(t,2))},Dr.min=function(t){return t&&t.length?pn(t,nc,Ln):e},Dr.minBy=function(t,r){return t&&t.length?pn(t,os(r,2),Ln):e},Dr.stubArray=gc,Dr.stubFalse=mc,Dr.stubObject=function(){return{}},Dr.stubString=function(){return""},Dr.stubTrue=function(){return!0},Dr.multiply=Ac,Dr.nth=function(t,r){return t&&t.length?$n(t,pa(r)):e},Dr.noConflict=function(){return lt._===this&&(lt._=Fe),this},Dr.noop=cc,Dr.now=ko,Dr.pad=function(e,t,r){e=ya(e);var n=(t=pa(t))?or(e):0;if(!t||n>=t)return e;var i=(t-n)/2;return qi(qt(i),r)+e+qi(Ot(i),r)},Dr.padEnd=function(e,t,r){e=ya(e);var n=(t=pa(t))?or(e):0;return t&&n<t?e+qi(t-n,r):e},Dr.padStart=function(e,t,r){e=ya(e);var n=(t=pa(t))?or(e):0;return t&&n<t?qi(t-n,r)+e:e},Dr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),br(ya(e).replace(te,""),t||0)},Dr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&ws(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=fa(t),r===e?(r=t,t=0):r=fa(r)),t>r){var i=t;t=r,r=i}if(n||t%1||r%1){var s=vr();return wr(t+s*(r-t+st("1e-"+((s+"").length-1))),r)}return Vn(t,r)},Dr.reduce=function(e,t,r){var n=zo(e)?Mt:Ht,i=arguments.length<3;return n(e,os(t,4),r,i,hn)},Dr.reduceRight=function(e,t,r){var n=zo(e)?Nt:Ht,i=arguments.length<3;return n(e,os(t,4),r,i,dn)},Dr.repeat=function(t,r,n){return r=(n?ws(t,r,n):r===e)?1:pa(r),Gn(ya(t),r)},Dr.replace=function(){var e=arguments,t=ya(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Dr.result=function(t,r,n){var i=-1,s=(r=wi(r,t)).length;for(s||(s=1,t=e);++i<s;){var o=null==t?e:t[Ls(r[i])];o===e&&(i=s,o=n),t=Qo(o)?o.call(t):o}return t},Dr.round=xc,Dr.runInContext=re,Dr.sample=function(e){return(zo(e)?Kr:Kn)(e)},Dr.size=function(e){if(null==e)return 0;if(Vo(e))return aa(e)?or(e):e.length;var t=ds(e);return t==v||t==_?e.size:Bn(e).length},Dr.snakeCase=Ga,Dr.some=function(t,r,n){var i=zo(t)?Rt:ri;return n&&ws(t,r,n)&&(r=e),i(t,os(r,3))},Dr.sortedIndex=function(e,t){return ni(e,t)},Dr.sortedIndexBy=function(e,t,r){return ii(e,t,os(r,2))},Dr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=ni(e,t);if(n<r&&Fo(e[n],t))return n}return-1},Dr.sortedLastIndex=function(e,t){return ni(e,t,!0)},Dr.sortedLastIndexBy=function(e,t,r){return ii(e,t,os(r,2),!0)},Dr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=ni(e,t,!0)-1;if(Fo(e[r],t))return r}return-1},Dr.startCase=Za,Dr.startsWith=function(e,t,r){return e=ya(e),r=null==r?0:on(pa(r),0,e.length),t=ai(t),e.slice(r,r+t.length)==t},Dr.subtract=Ec,Dr.sum=function(e){return e&&e.length?zt(e,nc):0},Dr.sumBy=function(e,t){return e&&e.length?zt(e,os(t,2)):0},Dr.template=function(t,r,n){var i=Dr.templateSettings;n&&ws(t,r,n)&&(r=e),t=ya(t),r=Aa({},r,i,Ji);var s,o,a=Aa({},r.imports,i.imports,Ji),c=Ma(a),l=Zt(a,c),u=0,h=r.interpolate||we,d="__p += '",f=Se((r.escape||we).source+"|"+h.source+"|"+(h===K?le:we).source+"|"+(r.evaluate||we).source+"|$","g"),p="//# sourceURL="+(Be.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++tt+"]")+"\n";t.replace(f,(function(e,r,n,i,a,c){return n||(n=i),d+=t.slice(u,c).replace(ye,er),r&&(s=!0,d+="' +\n__e("+r+") +\n'"),a&&(o=!0,d+="';\n"+a+";\n__p += '"),n&&(d+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),u=c+e.length,e})),d+="';\n";var g=Be.call(r,"variable")&&r.variable;if(g){if(ae.test(g))throw new Ee("Invalid `variable` option passed into `_.template`")}else d="with (obj) {\n"+d+"\n}\n";d=(o?d.replace(F,""):d).replace($,"$1").replace(q,"$1;"),d="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(s?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var m=Ya((function(){return Ce(c,p+"return "+d).apply(e,l)}));if(m.source=d,Jo(m))throw m;return m},Dr.times=function(e,t){if((e=pa(e))<1||e>a)return[];var r=l,n=wr(e,l);t=os(t),e-=l;for(var i=Wt(n,t);++r<e;)t(r);return i},Dr.toFinite=fa,Dr.toInteger=pa,Dr.toLength=ga,Dr.toLower=function(e){return ya(e).toLowerCase()},Dr.toNumber=ma,Dr.toSafeInteger=function(e){return e?on(pa(e),-a,a):0===e?e:0},Dr.toString=ya,Dr.toUpper=function(e){return ya(e).toUpperCase()},Dr.trim=function(t,r,n){if((t=ya(t))&&(n||r===e))return Vt(t);if(!t||!(r=ai(r)))return t;var i=ar(t),s=ar(r);return bi(i,Jt(i,s),Qt(i,s)+1).join("")},Dr.trimEnd=function(t,r,n){if((t=ya(t))&&(n||r===e))return t.slice(0,cr(t)+1);if(!t||!(r=ai(r)))return t;var i=ar(t);return bi(i,0,Qt(i,ar(r))+1).join("")},Dr.trimStart=function(t,r,n){if((t=ya(t))&&(n||r===e))return t.replace(te,"");if(!t||!(r=ai(r)))return t;var i=ar(t);return bi(i,Jt(i,ar(r))).join("")},Dr.truncate=function(t,r){var n=30,i="...";if(ea(r)){var s="separator"in r?r.separator:s;n="length"in r?pa(r.length):n,i="omission"in r?ai(r.omission):i}var o=(t=ya(t)).length;if(tr(t)){var a=ar(t);o=a.length}if(n>=o)return t;var c=n-or(i);if(c<1)return i;var l=a?bi(a,0,c).join(""):t.slice(0,c);if(s===e)return l+i;if(a&&(c+=l.length-c),sa(s)){if(t.slice(c).search(s)){var u,h=l;for(s.global||(s=Se(s.source,ya(ue.exec(s))+"g")),s.lastIndex=0;u=s.exec(h);)var d=u.index;l=l.slice(0,d===e?c:d)}}else if(t.indexOf(ai(s),c)!=c){var f=l.lastIndexOf(s);f>-1&&(l=l.slice(0,f))}return l+i},Dr.unescape=function(e){return(e=ya(e))&&W.test(e)?e.replace(H,lr):e},Dr.uniqueId=function(e){var t=++Le;return ya(e)+t},Dr.upperCase=Ka,Dr.upperFirst=Ja,Dr.each=yo,Dr.eachRight=bo,Dr.first=Ws,ac(Dr,function(){var e={};return bn(Dr,(function(t,r){Be.call(Dr.prototype,r)||(e[r]=t)})),e}(),{chain:!1}),Dr.VERSION="4.17.21",Et(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Dr[e].placeholder=Dr})),Et(["drop","take"],(function(t,r){qr.prototype[t]=function(n){n=n===e?1:mr(pa(n),0);var i=this.__filtered__&&!r?new qr(this):this.clone();return i.__filtered__?i.__takeCount__=wr(n,i.__takeCount__):i.__views__.push({size:wr(n,l),type:t+(i.__dir__<0?"Right":"")}),i},qr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),Et(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;qr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:os(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),Et(["head","last"],(function(e,t){var r="take"+(t?"Right":"");qr.prototype[e]=function(){return this[r](1).value()[0]}})),Et(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");qr.prototype[e]=function(){return this.__filtered__?new qr(this):this[r](1)}})),qr.prototype.compact=function(){return this.filter(nc)},qr.prototype.find=function(e){return this.filter(e).head()},qr.prototype.findLast=function(e){return this.reverse().find(e)},qr.prototype.invokeMap=Zn((function(e,t){return"function"==typeof e?new qr(this):this.map((function(r){return Tn(r,e,t)}))})),qr.prototype.reject=function(e){return this.filter(Bo(os(e)))},qr.prototype.slice=function(t,r){t=pa(t);var n=this;return n.__filtered__&&(t>0||r<0)?new qr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=pa(r))<0?n.dropRight(-r):n.take(r-t)),n)},qr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},qr.prototype.toArray=function(){return this.take(l)},bn(qr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),i=/^(?:head|last)$/.test(r),s=Dr[i?"take"+("last"==r?"Right":""):r],o=i||/^find/.test(r);s&&(Dr.prototype[r]=function(){var r=this.__wrapped__,a=i?[1]:arguments,c=r instanceof qr,l=a[0],u=c||zo(r),h=function(e){var t=s.apply(Dr,Pt([e],a));return i&&d?t[0]:t};u&&n&&"function"==typeof l&&1!=l.length&&(c=u=!1);var d=this.__chain__,f=!!this.__actions__.length,p=o&&!d,g=c&&!f;if(!o&&u){r=g?r:new qr(this);var m=t.apply(r,a);return m.__actions__.push({func:fo,args:[h],thisArg:e}),new $r(m,d)}return p&&g?t.apply(this,a):(m=this.thru(h),p?i?m.value()[0]:m.value():m)})})),Et(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Pe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Dr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var i=this.value();return t.apply(zo(i)?i:[],e)}return this[r]((function(r){return t.apply(zo(r)?r:[],e)}))}})),bn(qr.prototype,(function(e,t){var r=Dr[t];if(r){var n=r.name+"";Be.call(Tr,n)||(Tr[n]=[]),Tr[n].push({name:t,func:r})}})),Tr[Di(e,2).name]=[{name:"wrapper",func:e}],qr.prototype.clone=function(){var e=new qr(this.__wrapped__);return e.__actions__=Si(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Si(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Si(this.__views__),e},qr.prototype.reverse=function(){if(this.__filtered__){var e=new qr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},qr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=zo(e),n=t<0,i=r?e.length:0,s=function(e,t,r){for(var n=-1,i=r.length;++n<i;){var s=r[n],o=s.size;switch(s.type){case"drop":e+=o;break;case"dropRight":t-=o;break;case"take":t=wr(t,e+o);break;case"takeRight":e=mr(e,t-o)}}return{start:e,end:t}}(0,i,this.__views__),o=s.start,a=s.end,c=a-o,l=n?a:o-1,u=this.__iteratees__,h=u.length,d=0,f=wr(c,this.__takeCount__);if(!r||!n&&i==c&&f==c)return di(e,this.__actions__);var p=[];e:for(;c--&&d<f;){for(var g=-1,m=e[l+=t];++g<h;){var w=u[g],y=w.iteratee,b=w.type,v=y(m);if(2==b)m=v;else if(!v){if(1==b)continue e;break e}}p[d++]=m}return p},Dr.prototype.at=po,Dr.prototype.chain=function(){return ho(this)},Dr.prototype.commit=function(){return new $r(this.value(),this.__chain__)},Dr.prototype.next=function(){this.__values__===e&&(this.__values__=da(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Dr.prototype.plant=function(t){for(var r,n=this;n instanceof Fr;){var i=Ds(n);i.__index__=0,i.__values__=e,r?s.__wrapped__=i:r=i;var s=i;n=n.__wrapped__}return s.__wrapped__=t,r},Dr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof qr){var r=t;return this.__actions__.length&&(r=new qr(this)),(r=r.reverse()).__actions__.push({func:fo,args:[Xs],thisArg:e}),new $r(r,this.__chain__)}return this.thru(Xs)},Dr.prototype.toJSON=Dr.prototype.valueOf=Dr.prototype.value=function(){return di(this.__wrapped__,this.__actions__)},Dr.prototype.first=Dr.prototype.head,at&&(Dr.prototype[at]=function(){return this}),Dr}();ht?((ht.exports=ur)._=ur,ut._=ur):lt._=ur}.call(Gs);var Ks=Object.defineProperty,Js=Object.defineProperties,Qs=Object.getOwnPropertyDescriptors,Ys=Object.getOwnPropertySymbols,Xs=Object.prototype.hasOwnProperty,eo=Object.prototype.propertyIsEnumerable,to=(e,t,r)=>t in e?Ks(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ro=(e,t)=>{for(var r in t||(t={}))Xs.call(t,r)&&to(e,r,t[r]);if(Ys)for(var r of Ys(t))eo.call(t,r)&&to(e,r,t[r]);return e},no=(e,t)=>Js(e,Qs(t));function io(e,t,r){var n;const i=(0,ct._Yb)(e);return(null==(n=t.rpcMap)?void 0:n[i.reference])||`${$s}?chainId=${i.namespace}:${i.reference}&projectId=${r}`}function so(e){return e.includes(":")?e.split(":")[1]:e}function oo(e){return e.map((e=>`${e.split(":")[0]}:${e.split(":")[1]}`))}function ao(e={},t={}){const r=co(e),n=co(t);return Zs.exports.merge(r,n)}function co(e){var t,r,n,i;const s={};if(!(0,ct.aF0)(e))return s;for(const[o,a]of Object.entries(e)){const e=(0,ct.nWe)(o)?[o]:a.chains,c=a.methods||[],l=a.events||[],u=a.rpcMap||{},h=(0,ct.kob)(o);s[h]=no(ro(ro({},s[h]),a),{chains:(0,ct.TRk)(e,null==(t=s[h])?void 0:t.chains),methods:(0,ct.TRk)(c,null==(r=s[h])?void 0:r.methods),events:(0,ct.TRk)(l,null==(n=s[h])?void 0:n.events),rpcMap:ro(ro({},u),null==(i=s[h])?void 0:i.rpcMap)})}return s}function lo(e){return e.includes(":")?e.split(":")[2]:e}function uo(e){const t={};for(const[r,n]of Object.entries(e)){const e=n.methods||[],i=n.events||[],s=n.accounts||[],o=(0,ct.nWe)(r)?[r]:n.chains?n.chains:oo(n.accounts);t[r]={chains:o,methods:e,events:i,accounts:s}}return t}function ho(e){return"number"==typeof e?e:e.includes("0x")?parseInt(e,16):(e=e.includes(":")?e.split(":")[1]:e,isNaN(Number(e))?e:Number(e))}const fo={},po=e=>fo[e],go=(e,t)=>{fo[e]=t};class mo{constructor(e){this.name="polkadot",this.namespace=e.namespace,this.events=po("events"),this.client=po("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(zs,`${this.name}:${e}`)}getAccounts(){const e=this.namespace.accounts;return e&&e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2]))||[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var r;const n=so(t);e[n]=this.createHttpProvider(n,null==(r=this.namespace.rpcMap)?void 0:r[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProvider(e,t){const r=t||io(e,this.namespace,this.client.core.projectId);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);return new jt(new Ds(r,po("disableProviderPing")))}}var wo=Object.defineProperty,yo=Object.defineProperties,bo=Object.getOwnPropertyDescriptors,vo=Object.getOwnPropertySymbols,Ao=Object.prototype.hasOwnProperty,xo=Object.prototype.propertyIsEnumerable,Eo=(e,t,r)=>t in e?wo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Co=(e,t)=>{for(var r in t||(t={}))Ao.call(t,r)&&Eo(e,r,t[r]);if(vo)for(var r of vo(t))xo.call(t,r)&&Eo(e,r,t[r]);return e},_o=(e,t)=>yo(e,bo(t));class ko{constructor(e){this.name="eip155",this.namespace=e.namespace,this.events=po("events"),this.client=po("client"),this.httpProviders=this.createHttpProviders(),this.chainId=parseInt(this.getDefaultChain())}async request(e){switch(e.request.method){case"eth_requestAccounts":case"eth_accounts":return this.getAccounts();case"wallet_switchEthereumChain":return await this.handleSwitchChain(e);case"eth_chainId":return parseInt(this.getDefaultChain());case"wallet_getCapabilities":return await this.getCapabilities(e);case"wallet_getCallsStatus":return await this.getCallStatus(e)}return this.namespace.methods.includes(e.request.method)?await this.client.request(e):this.getHttpProvider().request(e.request)}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(parseInt(e),t),this.chainId=parseInt(e),this.events.emit(zs,`${this.name}:${e}`)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId.toString();if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}createHttpProvider(e,t){const r=t||io(`${this.name}:${e}`,this.namespace,this.client.core.projectId);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);return new jt(new Ds(r,po("disableProviderPing")))}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var r;const n=parseInt(so(t));e[n]=this.createHttpProvider(n,null==(r=this.namespace.rpcMap)?void 0:r[t])})),e}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}getHttpProvider(){const e=this.chainId,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}async handleSwitchChain(e){var t,r;let n=e.request.params?null==(t=e.request.params[0])?void 0:t.chainId:"0x0";n=n.startsWith("0x")?n:`0x${n}`;const i=parseInt(n,16);if(this.isChainApproved(i))this.setDefaultChain(`${i}`);else{if(!this.namespace.methods.includes("wallet_switchEthereumChain"))throw new Error(`Failed to switch to chain 'eip155:${i}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);await this.client.request({topic:e.topic,request:{method:e.request.method,params:[{chainId:n}]},chainId:null==(r=this.namespace.chains)?void 0:r[0]}),this.setDefaultChain(`${i}`)}return null}isChainApproved(e){return this.namespace.chains.includes(`${this.name}:${e}`)}async getCapabilities(e){var t,r,n;const i=null==(r=null==(t=e.request)?void 0:t.params)?void 0:r[0];if(!i)throw new Error("Missing address parameter in `wallet_getCapabilities` request");const s=this.client.session.get(e.topic),o=(null==(n=s?.sessionProperties)?void 0:n.capabilities)||{};if(null!=o&&o[i])return o?.[i];const a=await this.client.request(e);try{await this.client.session.update(e.topic,{sessionProperties:_o(Co({},s.sessionProperties||{}),{capabilities:_o(Co({},o||{}),{[i]:a})})})}catch(e){console.warn("Failed to update session with capabilities",e)}return a}async getCallStatus(e){var t,r;const n=this.client.session.get(e.topic),i=null==(t=n.sessionProperties)?void 0:t.bundler_name;if(i){const t=this.getBundlerUrl(e.chainId,i);try{return await this.getUserOperationReceipt(t,e)}catch(e){console.warn("Failed to fetch call status from bundler",e,t)}}const s=null==(r=n.sessionProperties)?void 0:r.bundler_url;if(s)try{return await this.getUserOperationReceipt(s,e)}catch(e){console.warn("Failed to fetch call status from custom bundler",e,s)}if(this.namespace.methods.includes(e.request.method))return await this.client.request(e);throw new Error("Fetching call status not approved by the wallet.")}async getUserOperationReceipt(e,t){var r;const n=new URL(e),i=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ct("eth_getUserOperationReceipt",[null==(r=t.request.params)?void 0:r[0]]))});if(!i.ok)throw new Error(`Failed to fetch user operation receipt - ${i.status}`);return await i.json()}getBundlerUrl(e,t){return`${Hs}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`}}class So{constructor(e){this.name="solana",this.namespace=e.namespace,this.events=po("events"),this.client=po("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(zs,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var r;const n=so(t);e[n]=this.createHttpProvider(n,null==(r=this.namespace.rpcMap)?void 0:r[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProvider(e,t){const r=t||io(e,this.namespace,this.client.core.projectId);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);return new jt(new Ds(r,po("disableProviderPing")))}}class Io{constructor(e){this.name="cosmos",this.namespace=e.namespace,this.events=po("events"),this.client=po("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(zs,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var r;const n=so(t);e[n]=this.createHttpProvider(n,null==(r=this.namespace.rpcMap)?void 0:r[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProvider(e,t){const r=t||io(e,this.namespace,this.client.core.projectId);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);return new jt(new Ds(r,po("disableProviderPing")))}}class To{constructor(e){this.name="algorand",this.namespace=e.namespace,this.events=po("events"),this.client=po("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){if(!this.httpProviders[e]){const r=t||io(`${this.name}:${e}`,this.namespace,this.client.core.projectId);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,r)}this.chainId=e,this.events.emit(zs,`${this.name}:${this.chainId}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var r;e[t]=this.createHttpProvider(t,null==(r=this.namespace.rpcMap)?void 0:r[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProvider(e,t){const r=t||io(e,this.namespace,this.client.core.projectId);return typeof r>"u"?void 0:new jt(new Ds(r,po("disableProviderPing")))}}class Po{constructor(e){this.name="cip34",this.namespace=e.namespace,this.events=po("events"),this.client=po("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(zs,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{const r=this.getCardanoRPCUrl(t),n=so(t);e[n]=this.createHttpProvider(n,r)})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}getCardanoRPCUrl(e){const t=this.namespace.rpcMap;if(t)return t[e]}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProvider(e,t){const r=t||this.getCardanoRPCUrl(e);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);return new jt(new Ds(r,po("disableProviderPing")))}}class Mo{constructor(e){this.name="elrond",this.namespace=e.namespace,this.events=po("events"),this.client=po("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(zs,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var r;const n=so(t);e[n]=this.createHttpProvider(n,null==(r=this.namespace.rpcMap)?void 0:r[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProvider(e,t){const r=t||io(e,this.namespace,this.client.core.projectId);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);return new jt(new Ds(r,po("disableProviderPing")))}}class No{constructor(e){this.name="multiversx",this.namespace=e.namespace,this.events=po("events"),this.client=po("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(zs,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var r;const n=so(t);e[n]=this.createHttpProvider(n,null==(r=this.namespace.rpcMap)?void 0:r[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProvider(e,t){const r=t||io(e,this.namespace,this.client.core.projectId);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);return new jt(new Ds(r,po("disableProviderPing")))}}class Ro{constructor(e){this.name="near",this.namespace=e.namespace,this.events=po("events"),this.client=po("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){if(this.chainId=e,!this.httpProviders[e]){const r=t||io(`${this.name}:${e}`,this.namespace);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,r)}this.events.emit(zs,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e&&e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2]))||[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var r;e[t]=this.createHttpProvider(t,null==(r=this.namespace.rpcMap)?void 0:r[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProvider(e,t){const r=t||io(e,this.namespace);return typeof r>"u"?void 0:new jt(new Ds(r,po("disableProviderPing")))}}class Oo{constructor(e){this.name=qs,this.namespace=e.namespace,this.events=po("events"),this.client=po("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace.chains=[...new Set((this.namespace.chains||[]).concat(e.chains||[]))],this.namespace.accounts=[...new Set((this.namespace.accounts||[]).concat(e.accounts||[]))],this.namespace.methods=[...new Set((this.namespace.methods||[]).concat(e.methods||[]))],this.namespace.events=[...new Set((this.namespace.events||[]).concat(e.events||[]))],this.httpProviders=this.createHttpProviders()}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider(e.chainId).request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(zs,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}createHttpProviders(){var e,t;const r={};return null==(t=null==(e=this.namespace)?void 0:e.accounts)||t.forEach((e=>{const t=(0,ct._Yb)(e);r[`${t.namespace}:${t.reference}`]=this.createHttpProvider(e)})),r}getHttpProvider(e){const t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProvider(e,t){const r=t||io(e,this.namespace,this.client.core.projectId);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);return new jt(new Ds(r,po("disableProviderPing")))}}var Bo=Object.defineProperty,Lo=Object.defineProperties,Uo=Object.getOwnPropertyDescriptors,Do=Object.getOwnPropertySymbols,jo=Object.prototype.hasOwnProperty,Fo=Object.prototype.propertyIsEnumerable,$o=(e,t,r)=>t in e?Bo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,qo=(e,t)=>{for(var r in t||(t={}))jo.call(t,r)&&$o(e,r,t[r]);if(Do)for(var r of Do(t))Fo.call(t,r)&&$o(e,r,t[r]);return e},Ho=(e,t)=>Lo(e,Uo(t));class zo{constructor(e){this.events=new(fe()),this.rpcProviders={},this.shouldAbortPairingAttempt=!1,this.maxPairingAttempts=10,this.disableProviderPing=!1,this.providerOpts=e,this.logger=typeof e?.logger<"u"&&"string"!=typeof e?.logger?e.logger:(0,b.h6)((0,b.iP)({level:e?.logger||js})),this.disableProviderPing=e?.disableProviderPing||!1}static async init(e){const t=new zo(e);return await t.initialize(),t}async request(e,t,r){const[n,i]=this.validateChain(t);if(!this.session)throw new Error("Please call connect() before request()");return await this.getProvider(n).request({request:qo({},e),chainId:`${n}:${i}`,topic:this.session.topic,expiry:r})}sendAsync(e,t,r,n){const i=(new Date).getTime();this.request(e,r,n).then((e=>t(null,_t(i,e)))).catch((e=>t(e,void 0)))}async enable(){if(!this.client)throw new Error("Sign Client not initialized");return this.session||await this.connect({namespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties}),await this.requestAccounts()}async disconnect(){var e;if(!this.session)throw new Error("Please call connect() before enable()");await this.client.disconnect({topic:null==(e=this.session)?void 0:e.topic,reason:(0,ct.Hjj)("USER_DISCONNECTED")}),await this.cleanup()}async connect(e){if(!this.client)throw new Error("Sign Client not initialized");if(this.setNamespaces(e),await this.cleanupPendingPairings(),!e.skipPairing)return await this.pair(e.pairingTopic)}async authenticate(e,t){if(!this.client)throw new Error("Sign Client not initialized");this.setNamespaces(e),await this.cleanupPendingPairings();const{uri:r,response:n}=await this.client.authenticate(e,t);r&&(this.uri=r,this.events.emit("display_uri",r));const i=await n();if(this.session=i.session,this.session){const e=uo(this.session.namespaces);this.namespaces=ao(this.namespaces,e),this.persist("namespaces",this.namespaces),this.onConnect()}return i}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}removeListener(e,t){this.events.removeListener(e,t)}off(e,t){this.events.off(e,t)}get isWalletConnect(){return!0}async pair(e){this.shouldAbortPairingAttempt=!1;let t=0;do{if(this.shouldAbortPairingAttempt)throw new Error("Pairing aborted");if(t>=this.maxPairingAttempts)throw new Error("Max auto pairing attempts reached");const{uri:r,approval:n}=await this.client.connect({pairingTopic:e,requiredNamespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties});r&&(this.uri=r,this.events.emit("display_uri",r)),await n().then((e=>{this.session=e;const t=uo(e.namespaces);this.namespaces=ao(this.namespaces,t),this.persist("namespaces",this.namespaces)})).catch((e=>{if(e.message!==Xi)throw e;t++}))}while(!this.session);return this.onConnect(),this.session}setDefaultChain(e,t){try{if(!this.session)return;const[r,n]=this.validateChain(e),i=this.getProvider(r);i.name===qs?i.setDefaultChain(`${r}:${n}`,t):i.setDefaultChain(n,t)}catch(e){if(!/Please call connect/.test(e.message))throw e}}async cleanupPendingPairings(e={}){this.logger.info("Cleaning up inactive pairings...");const t=this.client.pairing.getAll();if((0,ct.OP1)(t)){for(const r of t)e.deletePairings?this.client.core.expirer.set(r.topic,0):await this.client.core.relayer.subscriber.unsubscribe(r.topic);this.logger.info(`Inactive pairings cleared: ${t.length}`)}}abortPairingAttempt(){this.shouldAbortPairingAttempt=!0}async checkStorage(){if(this.namespaces=await this.getFromStore("namespaces"),this.optionalNamespaces=await this.getFromStore("optionalNamespaces")||{},this.client.session.length){const e=this.client.session.keys.length-1;this.session=this.client.session.get(this.client.session.keys[e]),this.createProviders()}}async initialize(){this.logger.trace("Initialized"),await this.createClient(),await this.checkStorage(),this.registerEventListeners()}async createClient(){this.client=this.providerOpts.client||await _s.init({core:this.providerOpts.core,logger:this.providerOpts.logger||js,relayUrl:this.providerOpts.relayUrl||"wss://relay.walletconnect.org",projectId:this.providerOpts.projectId,metadata:this.providerOpts.metadata,storageOptions:this.providerOpts.storageOptions,storage:this.providerOpts.storage,name:this.providerOpts.name,customStoragePrefix:this.providerOpts.customStoragePrefix,telemetryEnabled:this.providerOpts.telemetryEnabled}),this.logger.trace("SignClient Initialized")}createProviders(){if(!this.client)throw new Error("Sign Client not initialized");if(!this.session)throw new Error("Session not initialized. Please call connect() before enable()");const e=[...new Set(Object.keys(this.session.namespaces).map((e=>(0,ct.kob)(e))))];go("client",this.client),go("events",this.events),go("disableProviderPing",this.disableProviderPing),e.forEach((e=>{if(!this.session)return;const t=function(e,t){const r=Object.keys(t.namespaces).filter((t=>t.includes(e)));if(!r.length)return[];const n=[];return r.forEach((e=>{const r=t.namespaces[e].accounts;n.push(...r)})),n}(e,this.session),r=oo(t),n=ao(this.namespaces,this.optionalNamespaces),i=Ho(qo({},n[e]),{accounts:t,chains:r});switch(e){case"eip155":this.rpcProviders[e]=new ko({namespace:i});break;case"algorand":this.rpcProviders[e]=new To({namespace:i});break;case"solana":this.rpcProviders[e]=new So({namespace:i});break;case"cosmos":this.rpcProviders[e]=new Io({namespace:i});break;case"polkadot":this.rpcProviders[e]=new mo({namespace:i});break;case"cip34":this.rpcProviders[e]=new Po({namespace:i});break;case"elrond":this.rpcProviders[e]=new Mo({namespace:i});break;case"multiversx":this.rpcProviders[e]=new No({namespace:i});break;case"near":this.rpcProviders[e]=new Ro({namespace:i});break;default:this.rpcProviders[qs]?this.rpcProviders[qs].updateNamespace(i):this.rpcProviders[qs]=new Oo({namespace:i})}}))}registerEventListeners(){if(typeof this.client>"u")throw new Error("Sign Client is not initialized");this.client.on("session_ping",(e=>{this.events.emit("session_ping",e)})),this.client.on("session_event",(e=>{const{params:t}=e,{event:r}=t;if("accountsChanged"===r.name){const e=r.data;e&&(0,ct.OP1)(e)&&this.events.emit("accountsChanged",e.map(lo))}else if("chainChanged"===r.name){const e=t.chainId,r=t.event.data,n=(0,ct.kob)(e),i=ho(e)!==ho(r)?`${n}:${ho(r)}`:e;this.onChainChanged(i)}else this.events.emit(r.name,r.data);this.events.emit("session_event",e)})),this.client.on("session_update",(({topic:e,params:t})=>{var r;const{namespaces:n}=t,i=null==(r=this.client)?void 0:r.session.get(e);this.session=Ho(qo({},i),{namespaces:n}),this.onSessionUpdate(),this.events.emit("session_update",{topic:e,params:t})})),this.client.on("session_delete",(async e=>{await this.cleanup(),this.events.emit("session_delete",e),this.events.emit("disconnect",Ho(qo({},(0,ct.Hjj)("USER_DISCONNECTED")),{data:e.topic}))})),this.on(zs,(e=>{this.onChainChanged(e,!0)}))}getProvider(e){return this.rpcProviders[e]||this.rpcProviders[qs]}onSessionUpdate(){Object.keys(this.rpcProviders).forEach((e=>{var t;this.getProvider(e).updateNamespace(null==(t=this.session)?void 0:t.namespaces[e])}))}setNamespaces(e){const{namespaces:t,optionalNamespaces:r,sessionProperties:n}=e;t&&Object.keys(t).length&&(this.namespaces=t),r&&Object.keys(r).length&&(this.optionalNamespaces=r),this.sessionProperties=n,this.persist("namespaces",t),this.persist("optionalNamespaces",r)}validateChain(e){const[t,r]=e?.split(":")||["",""];if(!this.namespaces||!Object.keys(this.namespaces).length)return[t,r];if(t&&!Object.keys(this.namespaces||{}).map((e=>(0,ct.kob)(e))).includes(t))throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);if(t&&r)return[t,r];const n=(0,ct.kob)(Object.keys(this.namespaces)[0]);return[n,this.rpcProviders[n].getDefaultChain()]}async requestAccounts(){const[e]=this.validateChain();return await this.getProvider(e).requestAccounts()}onChainChanged(e,t=!1){if(!this.namespaces)return;const[r,n]=this.validateChain(e);n&&(t||this.getProvider(r).setDefaultChain(n),this.namespaces[r]?this.namespaces[r].defaultChain=n:this.namespaces[`${r}:${n}`]?this.namespaces[`${r}:${n}`].defaultChain=n:this.namespaces[`${r}:${n}`]={defaultChain:n},this.persist("namespaces",this.namespaces),this.events.emit("chainChanged",n))}onConnect(){this.createProviders(),this.events.emit("connect",{session:this.session})}async cleanup(){this.session=void 0,this.namespaces=void 0,this.optionalNamespaces=void 0,this.sessionProperties=void 0,this.persist("namespaces",void 0),this.persist("optionalNamespaces",void 0),this.persist("sessionProperties",void 0),await this.cleanupPendingPairings({deletePairings:!0})}persist(e,t){this.client.core.storage.setItem(`${Fs}/${e}`,t)}async getFromStore(e){return await this.client.core.storage.getItem(`${Fs}/${e}`)}}const Wo={getMethodsByChainNamespace(e){switch(e){case"solana":return["solana_signMessage","solana_signTransaction","solana_requestAccounts","solana_getAccounts","solana_signAllTransactions","solana_signAndSendTransaction"];case"eip155":return["personal_sign","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendRawTransaction","eth_sendTransaction","wallet_getCapabilities","wallet_sendCalls","wallet_showCallsStatus","wallet_getCallsStatus","wallet_grantPermissions","wallet_revokePermissions","wallet_switchEthereumChain"];default:return[]}},createNamespaces(e){return e.reduce(((e,t)=>{const{id:r,chainNamespace:n,rpcUrls:i}=t,s=i.default.http[0],o=this.getMethodsByChainNamespace(n);e[n]||(e[n]={methods:o,events:["accountsChanged","chainChanged"],chains:[],rpcMap:{}});const a=`${n}:${r}`,c=e[n];return c.chains.push(a),c?.rpcMap&&s&&(c.rpcMap[r]=s),e}),{})},getChainsFromNamespaces(e={}){return Object.values(e).flatMap((e=>{const t=e.chains||[],r=e.accounts.map((e=>{const[t,r]=e.split(":");return`${t}:${r}`}));return Array.from(new Set([...t,...r]))}))}};var Vo=i(29073),Go=i(4707);const Zo=(0,Vo.BX)({providers:{eip155:void 0,solana:void 0,polkadot:void 0},providerIds:{eip155:void 0,solana:void 0,polkadot:void 0}}),Ko={state:Zo,subscribeKey(e,t){return(0,Go.u$)(Zo,e,t)},subscribeProviders(e){return(0,Vo.B1)(Zo.providers,(()=>e(Zo.providers)))},setProvider(e,t){t&&(Zo.providers[e]=(0,Vo.KR)(t))},getProvider(e){return Zo.providers[e]},setProviderId(e,t){t&&(Zo.providerIds[e]=t)},getProviderId(e){return Zo.providerIds[e]},reset(){Zo.providers={eip155:void 0,solana:void 0,polkadot:void 0},Zo.providerIds={eip155:void 0,solana:void 0,polkadot:void 0}},resetChain(e){Zo.providers[e]=void 0,Zo.providerIds[e]=void 0}},Jo=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_getCallsStatus","wallet_sendCalls","wallet_getCapabilities","wallet_grantPermissions","wallet_revokePermissions"];class Qo{constructor(e){this.appKit=void 0,this.isUniversalAdapterClient=!0,this.options=void 0,this.adapterType="universal",this.reportErrors=!0;const{siweConfig:r,metadata:s}=e;this.caipNetworks=e.networks,this.chainNamespace=n.oU.CHAIN.EVM,this.metadata=s,this.networkControllerClient={switchCaipNetwork:e=>{e&&this.switchNetwork(e)},getApprovedCaipNetworksData:async()=>{const e=await this.getWalletConnectProvider();if(!e)return Promise.resolve({supportsAllNetworks:!1,approvedCaipNetworkIds:[]});const t=Wo.getChainsFromNamespaces(e.session?.namespaces);return Promise.resolve({supportsAllNetworks:!1,approvedCaipNetworkIds:t})}},this.connectionControllerClient={connectWalletConnect:async e=>{const s=await this.getWalletConnectProvider();if(!s)throw new Error("connectionControllerClient:getWalletConnectUri - provider is undefined");if(s.on("display_uri",(t=>{e(t)})),t.WB.state.activeChain&&"wagmi"===t.WB.state?.chains?.get(t.WB.state.activeChain)?.adapterType){const r=t.WB.state.chains.get(t.WB.state.activeChain);await(r?.connectionControllerClient?.connectWalletConnect?.(e)),this.setWalletConnectProvider()}else{const e=await(r?.getMessageParams?.()),o=r?.options?.enabled,a="function"==typeof s?.authenticate,c=e&&Object.keys(e||{}).length>0;if(r&&o&&e&&a&&c&&t.WB.state.activeChain===n.oU.CHAIN.EVM){const{SIWEController:t,getDidChainId:o,getDidAddress:a}=await Promise.resolve().then(i.bind(i,96652)),c=this.caipNetworks?.filter((e=>e.chainNamespace===n.oU.CHAIN.EVM)).map((e=>e.caipNetworkId));e.chains=this.caipNetworks?.filter((e=>e.chainNamespace===n.oU.CHAIN.EVM)).map((e=>e.id));const l=await s.authenticate({nonce:await(r?.getNonce?.()),methods:[...Jo],...e,chains:c}),u=l?.auths?.[0];if(u){const{p:e,s:r}=u,n=o(e.iss),i=a(e.iss);i&&n&&t.setSession({address:i,chainId:parseInt(n,10)});try{const n=s.client.formatAuthMessage({request:e,iss:e.iss});await t.verifyMessage({message:n,signature:r.s,cacao:u})}catch(e){throw console.error("Error verifying message",e),await s.disconnect().catch(console.error),await t.signOut().catch(console.error),e}}}else{const e=Wo.createNamespaces(this.caipNetworks);await s.connect({optionalNamespaces:e})}this.setWalletConnectProvider()}},disconnect:async()=>{if(n.Ud.removeItem(n.Ws.WALLET_ID),r?.options?.signOutOnDisconnect){const{SIWEController:e}=await Promise.resolve().then(i.bind(i,96652));await e.signOut()}await(this.walletConnectProvider?.disconnect()),this.appKit?.resetAccount(n.oU.CHAIN.EVM),this.appKit?.resetAccount(n.oU.CHAIN.SOLANA)},signMessage:async e=>{const r=await this.getWalletConnectProvider(),n=t.WB.state.activeCaipAddress,i=t.wE.getPlainAddress(n);if(!r)throw new Error("connectionControllerClient:signMessage - provider is undefined");return await r.request({method:"personal_sign",params:[e,i]})},estimateGas:async()=>await Promise.resolve(BigInt(0)),getEnsAvatar:async e=>await Promise.resolve(e),getEnsAddress:async e=>await Promise.resolve(e),writeContract:async()=>await Promise.resolve("0x"),getCapabilities:async e=>{const t=await this.getWalletConnectProvider();if(!t)throw new Error("connectionControllerClient:getCapabilities - provider is undefined");const r=t.session?.sessionProperties?.capabilities;if(r){const t=this.parseWalletCapabilities(r)[e];if(t)return t}return await t.request({method:"wallet_getCapabilities",params:[e]})},grantPermissions:async e=>{const t=await this.getWalletConnectProvider();if(!t)throw new Error("connectionControllerClient:grantPermissions - provider is undefined");return t.request({method:"wallet_grantPermissions",params:e})},revokePermissions:async e=>{const t=await this.getWalletConnectProvider();if(!t)throw new Error("connectionControllerClient:grantPermissions - provider is undefined");return t.request({method:"wallet_revokePermissions",params:[e]})},sendTransaction:async()=>await Promise.resolve("0x"),parseUnits:()=>BigInt(0),formatUnits:()=>""}}construct(e,t){this.appKit=e,this.options=t,this.createProvider(),this.syncRequestedNetworks(this.caipNetworks),this.syncConnectors()}switchNetwork(e){e&&this.walletConnectProvider&&this.walletConnectProvider.setDefaultChain(e.caipNetworkId)}async disconnect(){this.walletConnectProvider&&(await this.walletConnectProvider.disconnect(),this.appKit?.resetAccount(n.oU.CHAIN.EVM),this.appKit?.resetAccount(n.oU.CHAIN.SOLANA))}async getWalletConnectProvider(){if(!this.walletConnectProvider)try{await this.createProvider()}catch(e){throw new Error("EthereumAdapter:getWalletConnectProvider - Cannot create provider")}return this.walletConnectProvider}createProvider(){return!this.walletConnectProviderInitPromise&&"undefined"!=typeof window&&this.options?.projectId&&(this.walletConnectProviderInitPromise=this.initWalletConnectProvider(this.options?.projectId)),this.walletConnectProviderInitPromise}async initWalletConnectProvider(e){const r=v.createLogger(((e,...r)=>{e.message.includes(w.UniversalProviderErrors.UNAUTHORIZED_DOMAIN_NOT_ALLOWED)?this.reportErrors&&(t.hG.open(w.ALERT_ERRORS.INVALID_APP_CONFIGURATION,"error"),this.reportErrors=!1):console.error(...r)})),n={projectId:e,metadata:{name:this.metadata?this.metadata.name:"",description:this.metadata?this.metadata.description:"",url:this.metadata?this.metadata.url:"",icons:this.metadata?this.metadata.icons:[""]},logger:r};this.walletConnectProvider=await zo.init(n),await this.checkActiveWalletConnectProvider()}syncRequestedNetworks(e){[...new Set(e.map((e=>e.chainNamespace)))].filter((e=>Boolean(e))).forEach((t=>{this.appKit?.setRequestedCaipNetworks(e.filter((e=>e.chainNamespace===t)),t)}))}async checkActiveWalletConnectProvider(){const e=await this.getWalletConnectProvider(),t=n.Ud.getItem(n.Ws.WALLET_ID);e&&t===o&&this.setWalletConnectProvider()}setWalletConnectProvider(){n.Ud.setItem(n.Ws.WALLET_ID,o);const e=this.walletConnectProvider?.session?.namespaces;if(e){Object.keys(e).reverse().forEach((t=>{const r=e?.[t]?.accounts[0];Ko.setProvider(t,this.walletConnectProvider),Ko.setProviderId(t,"walletConnect"),this.appKit?.setApprovedCaipNetworksData(t),r&&this.appKit?.setCaipAddress(r,t)}));const r=t.iT.getStoredActiveCaipNetwork(),n=t.WB.state.activeCaipNetwork;try{r?t.WB.setActiveCaipNetwork(r):n&&t.WB.getAllApprovedCaipNetworkIds().includes(n.caipNetworkId)||this.setDefaultNetwork(e)}catch(e){console.warn(">>> Error setting active caip network",e)}}this.syncAccount(),this.watchWalletConnect()}setDefaultNetwork(e){const r=this.caipNetworks[0]?.chainNamespace;if(r){const n=e?.[r];if(n?.chains){const e=n.chains[0];if(e){const n=t.WB.getRequestedCaipNetworks(r);if(n){const r=n.find((t=>t.caipNetworkId===e));r&&t.WB.setActiveCaipNetwork(r)}}}}}async watchWalletConnect(){const e=await this.getWalletConnectProvider(),r=e?.session?.namespaces||{},i=e=>{e.length>0&&this.syncAccount()};e&&(e.on("disconnect",(function s(){Object.keys(r).forEach((e=>{t.Uj.resetAccount(e)})),t.x4.resetWcConnection(),n.Ud.removeItem(n.Ws.WALLET_ID),e?.removeListener("disconnect",s),e?.removeListener("accountsChanged",i)})),e.on("accountsChanged",i),e.on("chainChanged",(e=>{const r=this.caipNetworks.find((t=>t.id==e)),i=this.appKit?.getCaipNetwork();if(r)i&&i?.id===r?.id||this.appKit?.setCaipNetwork(r);else{const r=this.appKit?.getActiveChainNamespace()||n.oU.CHAIN.EVM;t.WB.setActiveCaipNetwork({id:e,caipNetworkId:`${r}:${e}`,name:"Unknown Network",chainNamespace:r,nativeCurrency:{name:"",decimals:0,symbol:""},rpcUrls:{default:{http:[]}}})}})))}getProviderData(){const e=this.walletConnectProvider?.session?.namespaces||{},t=this.appKit?.getIsConnectedState()||!1,r=this.appKit?.getPreferredAccountType()||"";return{provider:this.walletConnectProvider,namespaces:e,namespaceKeys:e?Object.keys(e):[],isConnected:t,preferredAccountType:r}}syncAccount(){const{namespaceKeys:e,namespaces:t}=this.getProviderData(),r=this.appKit?.getPreferredAccountType();this.appKit?.getIsConnectedState()?e.forEach((async e=>{const n=e,i=t?.[e]?.accounts[0],s=this.appKit?.getCaipAddress(n);s||(this.appKit?.setPreferredAccountType(r,n),this.appKit?.setCaipAddress(i,n),this.syncConnectedWalletInfo(),await Promise.all([this.appKit?.setApprovedCaipNetworksData(n)])),this.syncAccounts()})):(this.appKit?.resetWcConnection(),this.appKit?.resetNetwork(this.chainNamespace),this.syncAccounts(!0))}syncAccounts(e=!1){const{namespaces:t}=this.getProviderData();Object.keys(t).forEach((r=>{const n=t?.[r]?.accounts?.map((e=>{const[,,t]=e.split(":");return t})).filter(((e,t,r)=>r.indexOf(e)===t));e&&this.appKit?.setAllAccounts([],r),n&&this.appKit?.setAllAccounts(n.map((e=>({address:e,type:"eoa"}))),r)}))}syncConnectedWalletInfo(){const e=n.Ud.getItem(n.Ws.WALLET_ID),t=this.walletConnectProvider?.session?.namespaces||{};Object.keys(t).forEach((t=>{this.walletConnectProvider?.session?this.appKit?.setConnectedWalletInfo({...this.walletConnectProvider.session.peer.metadata,name:this.walletConnectProvider.session.peer.metadata.name,icon:this.walletConnectProvider.session.peer.metadata.icons?.[0]},t):e&&(this.appKit?.setConnectedWalletInfo({name:e},n.oU.CHAIN.EVM),this.appKit?.setConnectedWalletInfo({name:e},n.oU.CHAIN.SOLANA))}))}syncConnectors(){const e=[];e.push({id:o,explorerId:g.ConnectorExplorerIds[o],imageId:g.ConnectorImageIds[o],name:g.ConnectorNamesMap[o],type:"WALLET_CONNECT",chain:this.chainNamespace}),this.appKit?.setConnectors(e)}parseWalletCapabilities(e){try{return JSON.parse(e)}catch(e){throw new Error("Error parsing wallet capabilities")}}}let Yo=!1;class Xo{constructor(e){this.initPromise=void 0,this.setStatus=(e,r)=>{t.Uj.setStatus(e,r)},this.getIsConnectedState=()=>Boolean(t.WB.state.activeCaipAddress),this.setAllAccounts=(e,r)=>{t.Uj.setAllAccounts(e,r),t.Hd.setHasMultipleAddresses(e?.length>1)},this.addAddressLabel=(e,r,n)=>{t.Uj.addAddressLabel(e,r,n)},this.removeAddressLabel=(e,r)=>{t.Uj.removeAddressLabel(e,r)},this.getCaipAddress=e=>t.WB.state.activeChain!==e&&e?t.WB.getAccountProp("caipAddress",e):t.WB.state.activeCaipAddress,this.getAddress=e=>t.WB.state.activeChain!==e&&e?t.WB.getAccountProp("address",e):t.Uj.state.address,this.getProvider=()=>t.Uj.state.provider,this.getPreferredAccountType=()=>t.Uj.state.preferredAccountType,this.setCaipAddress=(e,r)=>{t.Uj.setCaipAddress(e,r)},this.setProvider=(e,r)=>{t.Uj.setProvider(e,r)},this.setBalance=(e,r,n)=>{t.Uj.setBalance(e,r,n)},this.setProfileName=(e,r)=>{t.Uj.setProfileName(e,r)},this.setProfileImage=(e,r)=>{t.Uj.setProfileImage(e,r)},this.resetAccount=e=>{t.Uj.resetAccount(e)},this.setCaipNetwork=e=>{t.WB.setActiveCaipNetwork(e)},this.getCaipNetwork=e=>e?t.WB.getRequestedCaipNetworks(e).filter((t=>t.chainNamespace===e))?.[0]:t.WB.state.activeCaipNetwork,this.getCaipNetworkId=()=>{const e=this.getCaipNetwork();if(e)return e.id},this.getCaipNetworks=e=>t.WB.getRequestedCaipNetworks(e),this.getActiveChainNamespace=()=>t.WB.state.activeChain,this.setRequestedCaipNetworks=(e,r)=>{t.WB.setRequestedCaipNetworks(e,r)},this.getApprovedCaipNetworkIds=()=>t.WB.getAllApprovedCaipNetworkIds(),this.setApprovedCaipNetworksData=e=>t.WB.setApprovedCaipNetworksData(e),this.resetNetwork=e=>{t.WB.resetNetwork(e)},this.setConnectors=e=>{const r=[...t.aK.getConnectors(),...e];t.aK.setConnectors(r)},this.addConnector=e=>{t.aK.addConnector(e)},this.getConnectors=()=>t.aK.getConnectors(),this.resetWcConnection=()=>{t.x4.resetWcConnection()},this.fetchIdentity=e=>t.TP.fetchIdentity(e),this.setAddressExplorerUrl=(e,r)=>{t.Uj.setAddressExplorerUrl(e,r)},this.setSmartAccountDeployed=(e,r)=>{t.Uj.setSmartAccountDeployed(e,r)},this.setConnectedWalletInfo=(e,r)=>{t.Uj.setConnectedWalletInfo(e,r)},this.setSmartAccountEnabledNetworks=(e,r)=>{t.WB.setSmartAccountEnabledNetworks(e,r)},this.setPreferredAccountType=(e,r)=>{t.Uj.setPreferredAccountType(e,r)},this.getReownName=e=>t.f.getNamesForAddress(e),this.resolveReownName=async e=>{const r=await t.f.resolveName(e),n=Object.values(r?.addresses)||[];return n[0]?.address||!1},this.setEIP6963Enabled=e=>{t.Hd.setEIP6963Enabled(e)},this.setClientId=e=>{t.TP.setClientId(e)},this.getConnectorImage=e=>t.$m.getConnectorImage(e),this.handleUnsafeRPCRequest=()=>{if(this.isOpen()){if(this.isTransactionStackEmpty())return;this.redirect("ApproveTransaction")}else this.open({view:"ApproveTransaction"})},this.adapter=e.adapters?.[0],this.caipNetworks=this.extendCaipNetworks(e),this.defaultCaipNetwork=this.extendDefaultCaipNetwork(e),this.initControllers(e),this.initOrContinue(),this.version=e.sdkVersion}static getInstance(){return this.instance}async open(e){await this.initOrContinue(),t.W3.open(e)}async close(){await this.initOrContinue(),t.W3.close()}setLoading(e){t.W3.setLoading(e)}getError(){return""}getChainId(){return t.WB.state.activeCaipNetwork?.id}switchNetwork(e){const r=this.caipNetworks.find((t=>t.id===e.id));r?t.WB.switchActiveNetwork(r):t.hG.open(w.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND,"error")}getWalletProvider(){return t.WB.state.activeChain?Ko.state.providers[t.WB.state.activeChain]:null}getWalletProviderType(){return t.WB.state.activeChain?Ko.state.providerIds[t.WB.state.activeChain]:null}subscribeProvider(){return null}getThemeMode(){return t.Wn.state.themeMode}getThemeVariables(){return t.Wn.state.themeVariables}setThemeMode(e){t.Wn.setThemeMode(e),(0,r.setColorTheme)(t.Wn.state.themeMode)}setThemeVariables(e){t.Wn.setThemeVariables(e),(0,r.setThemeVariables)(t.Wn.state.themeVariables)}subscribeTheme(e){return t.Wn.subscribe(e)}getWalletInfo(){return t.Uj.state.connectedWalletInfo}subscribeAccount(e){function r(){e({caipAddress:t.WB.state.activeCaipAddress,address:t.wE.getPlainAddress(t.WB.state.activeCaipAddress),isConnected:Boolean(t.WB.state.activeCaipAddress),status:t.Uj.state.status})}t.WB.subscribe(r),t.Uj.subscribe(r)}subscribeNetwork(e){return t.WB.subscribe((({activeCaipNetwork:t})=>{e({caipNetwork:t,chainId:t?.id,caipNetworkId:t?.caipNetworkId})}))}subscribeWalletInfo(e){return t.Uj.subscribeKey("connectedWalletInfo",e)}subscribeShouldUpdateToAddress(e){t.Uj.subscribeKey("shouldUpdateToAddress",e)}subscribeCaipNetworkChange(e){t.WB.subscribeKey("activeCaipNetwork",e)}getState(){return t.z3.state}subscribeState(e){return t.z3.subscribe(e)}showErrorMessage(e){t.Pt.showError(e)}showSuccessMessage(e){t.Pt.showSuccess(e)}getEvent(){return{...t.En.state}}subscribeEvents(e){return t.En.subscribe(e)}replace(e){t.IN.replace(e)}redirect(e){t.IN.push(e)}popTransactionStack(e){t.IN.popTransactionStack(e)}isOpen(){return t.W3.state.open}isTransactionStackEmpty(){return 0===t.IN.state.transactionStack.length}isTransactionShouldReplaceView(){return t.IN.state.transactionStack[t.IN.state.transactionStack.length-1]?.replace}async initControllers(e){if(t.Hd.setDebug(e.debug),t.Hd.setProjectId(e.projectId),t.Hd.setSdkVersion(e.sdkVersion),!e.projectId)return void t.hG.open(w.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED,"error");this.adapters=e.adapters;const r=this.getDefaultMetaData();!e.metadata&&r&&(e.metadata=r),this.initializeUniversalAdapter(e),this.initializeAdapters(e),this.setDefaultNetwork(),t.Hd.setAllWallets(e.allWallets),t.Hd.setIncludeWalletIds(e.includeWalletIds),t.Hd.setExcludeWalletIds(e.excludeWalletIds),e.excludeWalletIds&&t.Np.searchWalletByIds({ids:e.excludeWalletIds}),t.Hd.setFeaturedWalletIds(e.featuredWalletIds),t.Hd.setTokens(e.tokens),t.Hd.setTermsConditionsUrl(e.termsConditionsUrl),t.Hd.setPrivacyPolicyUrl(e.privacyPolicyUrl),t.Hd.setCustomWallets(e.customWallets),t.Hd.setFeatures(e.features),t.Hd.setEnableWalletConnect(!1!==e.enableWalletConnect),t.Hd.setEnableWallets(!1!==e.enableWallets),e.metadata&&t.Hd.setMetadata(e.metadata),e.themeMode&&t.Wn.setThemeMode(e.themeMode),e.themeVariables&&t.Wn.setThemeVariables(e.themeVariables),e.disableAppend&&t.Hd.setDisableAppend(Boolean(e.disableAppend)),e.siwx&&t.Hd.setSIWX(e.siwx);const s=e.adapters?.find((e=>e.chainNamespace===n.oU.CHAIN.EVM));if(s&&e.siweConfig){const{SIWEController:t}=await Promise.resolve().then(i.bind(i,96652));t.setSIWEClient(e.siweConfig)}}getDefaultMetaData(){return"undefined"!=typeof window&&"undefined"!=typeof document?{name:document.getElementsByTagName("title")[0]?.textContent||"",description:document.querySelector('meta[property="og:description"]')?.content||"",url:window.location.origin,icons:[document.querySelector('link[rel~="icon"]')?.href||""]}:null}extendCaipNetworks(e){return le.extendCaipNetworks(e.networks,{customNetworkImageUrls:e.chainImages,projectId:e.projectId})}extendDefaultCaipNetwork(e){const t=e.networks.find((t=>t.id===e.defaultNetwork?.id));return t?le.extendCaipNetwork(t,{customNetworkImageUrls:e.chainImages,projectId:e.projectId}):void 0}initializeUniversalAdapter(e){const r={...e,networks:this.caipNetworks,defaultNetwork:this.defaultCaipNetwork};this.universalAdapter=new Qo(r),t.WB.initializeUniversalAdapter(this.universalAdapter,e.adapters||[]),this.universalAdapter.construct?.(this,r)}initializeAdapters(e){const r={...e,networks:this.caipNetworks,defaultNetwork:this.defaultCaipNetwork};t.WB.initialize(e.adapters||[]),e.adapters?.forEach((e=>{e.construct?.(this,r)}))}setDefaultNetwork(){const e=n.Ud.getItem(n.Ws.ACTIVE_CAIP_NETWORK_ID),r=(e?this.caipNetworks.find((t=>t.caipNetworkId===e)):void 0)||this.defaultCaipNetwork||this.caipNetworks[0];t.WB.setActiveCaipNetwork(r)}async initOrContinue(){return this.initPromise||Yo||!t.wE.isClient()||(Yo=!0,this.initPromise=new Promise((async e=>{await Promise.all([Promise.resolve().then(i.bind(i,71294)),Promise.resolve().then(i.bind(i,7849))]);const r=document.createElement("w3m-modal");t.Hd.state.disableAppend||document.body.insertAdjacentElement("beforeend",r),e()}))),this.initPromise}}var ea=i(12618),ta=i(25707),ra=i(60031),na=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let ia=class extends ea.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.caipAddress=t.WB.state.activeCaipAddress,this.balanceVal=t.Uj.state.balance,this.balanceSymbol=t.Uj.state.balanceSymbol,this.profileName=t.Uj.state.profileName,this.profileImage=t.Uj.state.profileImage,this.network=t.WB.state.activeCaipNetwork,this.networkImage=t.$m.getNetworkImage(this.network),this.isSupported=!0,this.unsubscribe.push(t.jQ.subscribeNetworkImages((()=>{this.networkImage=t.$m.getNetworkImage(this.network)})),t.WB.subscribeKey("activeCaipAddress",(e=>this.caipAddress=e)),t.Uj.subscribeKey("balance",(e=>this.balanceVal=e)),t.Uj.subscribeKey("balanceSymbol",(e=>this.balanceSymbol=e)),t.Uj.subscribeKey("profileName",(e=>this.profileName=e)),t.Uj.subscribeKey("profileImage",(e=>this.profileImage=e)),t.WB.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=t.$m.getNetworkImage(e),this.isSupported=!e?.chainNamespace||t.WB.checkIfSupportedNetwork(e?.chainNamespace)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!t.WB.state.activeChain)return null;const e="show"===this.balance;return ea.qy`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${!this.isSupported}
        address=${(0,ra.J)(t.wE.getPlainAddress(this.caipAddress))}
        profileName=${(0,ra.J)(this.profileName)}
        networkSrc=${(0,ra.J)(this.networkImage)}
        avatarSrc=${(0,ra.J)(this.profileImage)}
        balance=${e?t.wE.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isSupported?t.W3.open():t.W3.open({view:"UnsupportedChain"})}};na([(0,ta.MZ)({type:Boolean})],ia.prototype,"disabled",void 0),na([(0,ta.MZ)()],ia.prototype,"balance",void 0),na([(0,ta.MZ)()],ia.prototype,"charsStart",void 0),na([(0,ta.MZ)()],ia.prototype,"charsEnd",void 0),na([(0,ta.wk)()],ia.prototype,"caipAddress",void 0),na([(0,ta.wk)()],ia.prototype,"balanceVal",void 0),na([(0,ta.wk)()],ia.prototype,"balanceSymbol",void 0),na([(0,ta.wk)()],ia.prototype,"profileName",void 0),na([(0,ta.wk)()],ia.prototype,"profileImage",void 0),na([(0,ta.wk)()],ia.prototype,"network",void 0),na([(0,ta.wk)()],ia.prototype,"networkImage",void 0),na([(0,ta.wk)()],ia.prototype,"isSupported",void 0),ia=na([(0,r.customElement)("w3m-account-button")],ia);var sa=ea.AH`
  :host {
    display: block;
    width: max-content;
  }
`,oa=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let aa=class extends ea.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.caipAddress=t.WB.state.activeCaipAddress,this.isLoading=t.W3.state.loading}firstUpdated(){this.unsubscribe.push(t.WB.subscribeKey("activeCaipAddress",(e=>this.caipAddress=e)),t.W3.subscribeKey("loading",(e=>this.isLoading=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.caipAddress&&!this.isLoading?ea.qy`
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${(0,ra.J)(this.balance)}
            .charsStart=${(0,ra.J)(this.charsStart)}
            .charsEnd=${(0,ra.J)(this.charsEnd)}
          >
          </w3m-account-button>
        `:ea.qy`
          <w3m-connect-button
            size=${(0,ra.J)(this.size)}
            label=${(0,ra.J)(this.label)}
            loadingLabel=${(0,ra.J)(this.loadingLabel)}
          ></w3m-connect-button>
        `}};aa.styles=sa,oa([(0,ta.MZ)({type:Boolean})],aa.prototype,"disabled",void 0),oa([(0,ta.MZ)()],aa.prototype,"balance",void 0),oa([(0,ta.MZ)()],aa.prototype,"size",void 0),oa([(0,ta.MZ)()],aa.prototype,"label",void 0),oa([(0,ta.MZ)()],aa.prototype,"loadingLabel",void 0),oa([(0,ta.MZ)()],aa.prototype,"charsStart",void 0),oa([(0,ta.MZ)()],aa.prototype,"charsEnd",void 0),oa([(0,ta.wk)()],aa.prototype,"caipAddress",void 0),oa([(0,ta.wk)()],aa.prototype,"isLoading",void 0),aa=oa([(0,r.customElement)("w3m-button")],aa);var ca=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let la=class extends ea.WF{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=t.W3.state.open,this.loading=t.W3.state.loading,this.unsubscribe.push(t.W3.subscribe((e=>{this.open=e.open,this.loading=e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.loading||this.open;return ea.qy`
      <wui-connect-button
        size=${(0,ra.J)(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?t.W3.close():this.loading||t.W3.open()}};ca([(0,ta.MZ)()],la.prototype,"size",void 0),ca([(0,ta.MZ)()],la.prototype,"label",void 0),ca([(0,ta.MZ)()],la.prototype,"loadingLabel",void 0),ca([(0,ta.wk)()],la.prototype,"open",void 0),ca([(0,ta.wk)()],la.prototype,"loading",void 0),la=ca([(0,r.customElement)("w3m-connect-button")],la);var ua=ea.AH`
  :host {
    display: block;
    width: max-content;
  }
`,ha=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let da=class extends ea.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=t.WB.state.activeCaipNetwork,this.networkImage=t.$m.getNetworkImage(this.network),this.caipAddress=t.WB.state.activeCaipAddress,this.loading=t.W3.state.loading,this.isSupported=!0,this.unsubscribe.push(t.jQ.subscribeNetworkImages((()=>{this.networkImage=t.$m.getNetworkImage(this.network)})),t.WB.subscribeKey("activeCaipAddress",(e=>{this.caipAddress=e})),t.WB.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=t.$m.getNetworkImage(e),this.isSupported=!e?.chainNamespace||t.WB.checkIfSupportedNetwork(e.chainNamespace)})),t.W3.subscribeKey("loading",(e=>this.loading=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=!this.network||t.WB.checkIfSupportedNetwork(this.network.chainNamespace);return ea.qy`
      <wui-network-button
        data-testid="wui-network-button"
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${!e}
        imageSrc=${(0,ra.J)(this.networkImage)}
        @click=${this.onClick.bind(this)}
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(t.En.sendEvent({type:"track",event:"CLICK_NETWORKS"}),t.W3.open({view:"Networks"}))}};da.styles=ua,ha([(0,ta.MZ)({type:Boolean})],da.prototype,"disabled",void 0),ha([(0,ta.MZ)({type:String})],da.prototype,"label",void 0),ha([(0,ta.wk)()],da.prototype,"network",void 0),ha([(0,ta.wk)()],da.prototype,"networkImage",void 0),ha([(0,ta.wk)()],da.prototype,"caipAddress",void 0),ha([(0,ta.wk)()],da.prototype,"loading",void 0),ha([(0,ta.wk)()],da.prototype,"isSupported",void 0),da=ha([(0,r.customElement)("w3m-network-button")],da);var fa=ea.AH`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;const pa=[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],ga=process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN||"https://secure.walletconnect.org",ma="next",wa="prev",ya=120,ba=150,va=150;var Aa=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let xa=class extends ea.WF{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=t.IN.state.view,this.viewDirection="",this.unsubscribe.push(t.IN.subscribeKey("view",(e=>this.onViewChange(e))))}firstUpdated(){this.resizeObserver=new ResizeObserver((([e])=>{const t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",t),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout((()=>{this.prevHeight=t,this.style.animation="unset"}),ba)})),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach((e=>e()))}render(){return ea.qy`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return ea.qy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return ea.qy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return ea.qy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return ea.qy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return ea.qy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return ea.qy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return ea.qy`<w3m-connect-view></w3m-connect-view>`;case"Create":return ea.qy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return ea.qy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return ea.qy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return ea.qy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return ea.qy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return ea.qy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return ea.qy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return ea.qy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return ea.qy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return ea.qy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return ea.qy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return ea.qy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return ea.qy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return ea.qy`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return ea.qy`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return ea.qy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return ea.qy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return ea.qy`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return ea.qy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return ea.qy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return ea.qy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return ea.qy`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return ea.qy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return ea.qy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return ea.qy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return ea.qy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return ea.qy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return ea.qy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return ea.qy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return ea.qy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return ea.qy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return ea.qy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return ea.qy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return ea.qy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return ea.qy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return ea.qy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return ea.qy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return ea.qy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return ea.qy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return ea.qy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return ea.qy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return ea.qy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return ea.qy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return ea.qy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return ea.qy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`}}onViewChange(e){t.Ib.hide();let r=ma;const{history:n}=t.IN.state;n.length<this.prevHistoryLength&&(r=wa),this.prevHistoryLength=n.length,this.viewDirection=r,setTimeout((()=>{this.view=e}),va)}getWrapper(){return this.shadowRoot?.querySelector("div")}};xa.styles=fa,Aa([(0,ta.wk)()],xa.prototype,"view",void 0),Aa([(0,ta.wk)()],xa.prototype,"viewDirection",void 0),xa=Aa([(0,r.customElement)("w3m-router")],xa);var Ea=ea.AH`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`,Ca=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};const _a={USD:"$",EUR:"€",GBP:"£"},ka=[100,250,500,1e3];let Sa=class extends ea.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=t.WB.state.activeCaipAddress,this.loading=t.W3.state.loading,this.paymentCurrency=t.aG.state.paymentCurrency,this.paymentAmount=t.aG.state.paymentAmount,this.purchaseAmount=t.aG.state.purchaseAmount,this.quoteLoading=t.aG.state.quotesLoading,this.unsubscribe.push(t.WB.subscribeKey("activeCaipAddress",(e=>this.caipAddress=e)),t.W3.subscribeKey("loading",(e=>{this.loading=e})),t.aG.subscribe((e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return ea.qy`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${ka.map((e=>ea.qy`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${_a[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`))}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?ea.qy`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:ea.qy`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||t.W3.open({view:"OnRampProviders"})}openModal(){t.W3.open({view:"Connect"})}async onPaymentAmountChange(e){t.aG.setPaymentAmount(Number(e.detail)),await t.aG.getQuote()}async selectPresetAmount(e){t.aG.setPaymentAmount(e),await t.aG.getQuote()}};Sa.styles=Ea,Ca([(0,ta.MZ)({type:Boolean})],Sa.prototype,"disabled",void 0),Ca([(0,ta.wk)()],Sa.prototype,"caipAddress",void 0),Ca([(0,ta.wk)()],Sa.prototype,"loading",void 0),Ca([(0,ta.wk)()],Sa.prototype,"paymentCurrency",void 0),Ca([(0,ta.wk)()],Sa.prototype,"paymentAmount",void 0),Ca([(0,ta.wk)()],Sa.prototype,"purchaseAmount",void 0),Ca([(0,ta.wk)()],Sa.prototype,"quoteLoading",void 0),Sa=Ca([(0,r.customElement)("w3m-onramp-widget")],Sa);var Ia=i(44039),Ta=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Pa=class extends ea.WF{constructor(){super(),this.usubscribe=[],this.networkImages=t.jQ.state.networkImages,this.address=t.Uj.state.address,this.profileImage=t.Uj.state.profileImage,this.profileName=t.Uj.state.profileName,this.network=t.WB.state.activeCaipNetwork,this.preferredAccountType=t.Uj.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(t.Uj.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):t.W3.close()})),t.Uj.subscribeKey("preferredAccountType",(e=>this.preferredAccountType=e)),t.WB.subscribeKey("activeCaipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[this.network?.assets?.imageId??""];return ea.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,ra.J)(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${r.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${(0,ra.J)(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const e=t.iT.getConnectedConnector(),r=t.aK.getAuthConnector();return t.WB.checkIfNamesSupported()&&r&&"AUTH"===e&&!this.profileName?ea.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=t.iT.getConnectedConnector(),r=t.aK.getAuthConnector(),{origin:n}=location;return!r||"AUTH"!==e||n.includes(t.oU.SECURE_SITE)?null:ea.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=t.WB.getAllRequestedCaipNetworks(),r=!!e&&e.length>1,n=e?.find((({id:e})=>e===this.network?.id));return r||!n}onCopyAddress(){try{this.address&&(t.wE.copyToClopboard(this.address),t.Pt.showSuccess("Address copied"))}catch{t.Pt.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const e=t.WB.checkIfSmartAccountEnabled(),r=t.iT.getConnectedConnector();return t.aK.getAuthConnector()&&"AUTH"===r&&e?(this.switched||(this.text=this.preferredAccountType===Ia.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),ea.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){t.IN.push("ChooseAccountName")}async changePreferredAccountType(){const e=t.WB.checkIfSmartAccountEnabled(),r=this.preferredAccountType!==Ia.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&e?Ia.Vl.ACCOUNT_TYPES.SMART_ACCOUNT:Ia.Vl.ACCOUNT_TYPES.EOA;t.aK.getAuthConnector()&&(this.loading=!0,await t.x4.setPreferredAccountType(r),this.text=r===Ia.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,t.Rv.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&t.IN.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await t.x4.disconnect(),t.En.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),t.W3.close()}catch{t.En.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),t.Pt.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){t.En.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),t.IN.push("UpgradeEmailWallet")}};Ta([(0,ta.wk)()],Pa.prototype,"address",void 0),Ta([(0,ta.wk)()],Pa.prototype,"profileImage",void 0),Ta([(0,ta.wk)()],Pa.prototype,"profileName",void 0),Ta([(0,ta.wk)()],Pa.prototype,"network",void 0),Ta([(0,ta.wk)()],Pa.prototype,"preferredAccountType",void 0),Ta([(0,ta.wk)()],Pa.prototype,"disconnecting",void 0),Ta([(0,ta.wk)()],Pa.prototype,"loading",void 0),Ta([(0,ta.wk)()],Pa.prototype,"switched",void 0),Ta([(0,ta.wk)()],Pa.prototype,"text",void 0),Pa=Ta([(0,r.customElement)("w3m-account-settings-view")],Pa);let Ma=class extends ea.WF{render(){const e=t.iT.getConnectedConnector(),r=t.aK.getAuthConnector();return ea.qy`
      ${r&&"AUTH"===e?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return ea.qy`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return ea.qy`<w3m-account-default-widget></w3m-account-default-widget>`}};Ma=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,r.customElement)("w3m-account-view")],Ma);var Na=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Ra=class extends ea.WF{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=t.wE.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return ea.qy`
      <wui-flex .padding=${["0","s","s","s"]} gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?ea.qy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:ea.qy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return t.wE.isMobile()?ea.qy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){t.IN.push("ConnectingWalletConnect")}};Na([(0,ta.wk)()],Ra.prototype,"search",void 0),Ra=Na([(0,r.customElement)("w3m-all-wallets-view")],Ra);var Oa=ea.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`,Ba=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let La=class extends ea.WF{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=t.aG.state.selectedProvider,this.uri=t.x4.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(t.aG.subscribeKey("selectedProvider",(e=>{this.selectedOnRampProvider=e}))),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);const t=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return ea.qy`
      <wui-flex
        data-error=${(0,ra.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0,ra.J)(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){this.selectedOnRampProvider&&"coinbase"===this.selectedOnRampProvider.name&&(this.startTime=Date.now(),this.initializeCoinbaseTransactions())}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval((()=>this.watchCoinbaseTransactions()),4e3)}async watchCoinbaseTransactions(){try{const e=t.Uj.state.address,r=t.Hd.state.projectId;if(!e)throw new Error("No address found");(await t.TP.fetchTransactions({account:e,onramp:"coinbase",projectId:r})).data.filter((e=>new Date(e.metadata.minedAt)>new Date(this.startTime)||"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status)).length?(clearInterval(this.intervalId),t.IN.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){t.Pt.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,t.wE.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?ea.qy`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=t.Wn.state.themeVariables["--w3m-border-radius-master"],r=e?parseInt(e.replace("px",""),10):4;return ea.qy`<wui-loading-thumbnail radius=${9*r}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url)return t.Pt.showError("No link found"),void t.IN.goBack();try{t.wE.copyToClopboard(this.selectedOnRampProvider.url),t.Pt.showSuccess("Link copied")}catch{t.Pt.showError("Failed to copy")}}};La.styles=Oa,Ba([(0,ta.wk)()],La.prototype,"intervalId",void 0),Ba([(0,ta.wk)()],La.prototype,"selectedOnRampProvider",void 0),Ba([(0,ta.wk)()],La.prototype,"uri",void 0),Ba([(0,ta.wk)()],La.prototype,"ready",void 0),Ba([(0,ta.wk)()],La.prototype,"showRetry",void 0),Ba([(0,ta.wk)()],La.prototype,"buffering",void 0),Ba([(0,ta.wk)()],La.prototype,"error",void 0),Ba([(0,ta.wk)()],La.prototype,"startTime",void 0),Ba([(0,ta.MZ)({type:Boolean})],La.prototype,"isMobile",void 0),Ba([(0,ta.MZ)()],La.prototype,"onRetry",void 0),La=Ba([(0,r.customElement)("w3m-buy-in-progress-view")],La);var Ua=ea.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }
`,Da=i(44290),ja=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Fa=class extends ea.WF{constructor(){super(),this.unsubscribe=[],this.connectors=t.aK.state.connectors,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.features=t.Hd.state.features,this.walletGuide="get-started",this.unsubscribe.push(t.aK.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type))})),t.Hd.subscribeKey("features",(e=>this.features=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.features?.socials,r=t.Hd.state.enableWallets,n=e&&e.length||this.authConnector;return ea.qy`
      <wui-flex
        flexDirection="column"
        .padding=${n&&r&&"get-started"===this.walletGuide?["3xs","s","0","s"]:["3xs","s","s","s"]}
      >
        <w3m-email-login-widget walletGuide=${this.walletGuide}></w3m-email-login-widget>
        <w3m-social-login-widget></w3m-social-login-widget>
        ${this.walletListTemplate()}
      </wui-flex>
      ${this.guideTemplate()}
      <w3m-legal-footer></w3m-legal-footer>
    `}walletListTemplate(){const e=this.features?.socials,r=this.features?.emailShowWallets;return t.Hd.state.enableWallets?(t.wE.isTelegram()&&t.wE.isIos()&&t.x4.connectWalletConnect().catch((e=>({}))),"explore"===this.walletGuide?null:this.authConnector&&e?this.authConnector&&r?ea.qy`
          <wui-flex flexDirection="column" gap="xs" .margin=${["xs","0","0","0"]}>
            <w3m-connector-list></w3m-connector-list>
            <wui-flex class="all-wallets">
              <w3m-all-wallets-widget></w3m-all-wallets-widget>
            </wui-flex>
          </wui-flex>
        `:ea.qy`<wui-list-button
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:ea.qy`<w3m-wallet-login-list></w3m-wallet-login-list>`):null}guideTemplate(){const e=this.features?.socials,r=t.Hd.state.enableWallets,n=e&&e.length;return(this.authConnector||n)&&r?"explore"===this.walletGuide?ea.qy`
        <wui-flex flexDirection="column" .padding=${["0","0","xl","0"]}>
          <w3m-wallet-guide walletGuide=${this.walletGuide}></w3m-wallet-guide>
        </wui-flex>
      `:ea.qy`
      <wui-flex flexDirection="column" .padding=${["xl","0","xl","0"]}>
        <w3m-wallet-guide walletGuide=${this.walletGuide}></w3m-wallet-guide>
      </wui-flex>
    `:null}onContinueWalletClick(){t.IN.push("ConnectWallets")}};Fa.styles=Ua,ja([(0,Da.w)()],Fa.prototype,"connectors",void 0),ja([(0,Da.w)()],Fa.prototype,"authConnector",void 0),ja([(0,Da.w)()],Fa.prototype,"features",void 0),ja([(0,ta.MZ)()],Fa.prototype,"walletGuide",void 0),Fa=ja([(0,r.customElement)("w3m-connect-view")],Fa);var $a=ea.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,qa=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};class Ha extends ea.WF{constructor(){super(),this.wallet=t.IN.state.data?.wallet,this.connector=t.IN.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=t.$m.getWalletImage(this.wallet)??t.$m.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=t.x4.state.wcUri,this.error=t.x4.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(t.x4.subscribeKey("wcUri",(e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())})),t.x4.subscribeKey("wcError",(e=>this.error=e)),t.x4.subscribeKey("buffering",(e=>this.buffering=e))),t.wE.isTelegram()&&t.wE.isIos()&&t.x4.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),ea.qy`
      <wui-flex
        data-error=${(0,ra.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,ra.J)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?ea.qy`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||!this.error&&this.buffering}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?ea.qy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(t.x4.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const e=t.Wn.state.themeVariables["--w3m-border-radius-master"],r=e?parseInt(e.replace("px",""),10):4;return ea.qy`<wui-loading-thumbnail radius=${9*r}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(t.wE.copyToClopboard(this.uri),t.Pt.showSuccess("Link copied"))}catch{t.Pt.showError("Failed to copy")}}}Ha.styles=$a,qa([(0,ta.wk)()],Ha.prototype,"isRetrying",void 0),qa([(0,ta.wk)()],Ha.prototype,"uri",void 0),qa([(0,ta.wk)()],Ha.prototype,"error",void 0),qa([(0,ta.wk)()],Ha.prototype,"ready",void 0),qa([(0,ta.wk)()],Ha.prototype,"showRetry",void 0),qa([(0,ta.wk)()],Ha.prototype,"secondaryBtnLabel",void 0),qa([(0,ta.wk)()],Ha.prototype,"secondaryLabel",void 0),qa([(0,ta.wk)()],Ha.prototype,"buffering",void 0),qa([(0,ta.MZ)({type:Boolean})],Ha.prototype,"isMobile",void 0),qa([(0,ta.MZ)()],Ha.prototype,"onRetry",void 0);let za=class extends Ha{constructor(){if(super(),this.externalViewUnsubscribe=[],!this.connector)throw new Error("w3m-connecting-view: No connector provided");t.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(t.WB.subscribeKey("activeCaipAddress",(e=>{e&&t.W3.close()})))}disconnectedCallback(){this.externalViewUnsubscribe.forEach((e=>e()))}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.id===l&&this.error||(await t.x4.connectExternal(this.connector,this.connector.chain),t.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}})))}catch(e){t.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};za=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,r.customElement)("w3m-connecting-external-view")],za);var Wa=ea.AH`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`,Va=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Ga=class extends ea.WF{constructor(){super(),this.unsubscribe=[],this.activeConnector=t.WB.state.activeConnector,this.unsubscribe.push(t.WB.subscribeKey("activeConnector",(e=>this.activeConnector=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return ea.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0,ra.J)(t.$m.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map((e=>e.name?ea.qy`
            <wui-list-wallet
              imageSrc=${(0,ra.J)(t.$m.getChainImage(e.chain))}
              name=${n.oU.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
            ></wui-list-wallet>
          `:null))}onConnector(e){const r=this.activeConnector?.connectors?.find((t=>t.chain===e.chain));r?"walletConnect"===r.id?t.wE.isMobile()?t.IN.push("AllWallets"):t.IN.push("ConnectingWalletConnect"):t.IN.push("ConnectingExternal",{connector:r}):t.Pt.showError("Failed to find connector")}};Ga.styles=Wa,Va([(0,ta.wk)()],Ga.prototype,"activeConnector",void 0),Ga=Va([(0,r.customElement)("w3m-connecting-multi-chain-view")],Ga);var Za=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Ka=class extends ea.WF{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=t.IN.state.data?.wallet,this.platform=void 0,this.platforms=[],this.isSiweEnabled=t.Hd.state.isSiweEnabled,this.determinePlatforms(),this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),t.oU.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?ea.qy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `:ea.qy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){if("browser"!==this.platform)try{const{wcPairingExpiry:r,status:n}=t.x4.state;(e||t.wE.isPairingExpired(r)||"connecting"===n)&&(await t.x4.connectWalletConnect(),this.finalizeConnection(),this.isSiweEnabled||t.W3.close())}catch(e){t.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),t.x4.setWcError(!0),t.wE.isAllowedRetry(this.lastRetry)&&(t.Pt.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:r}=t.x4.state;e&&t.iT.setWalletConnectDeepLink(e),r&&t.iT.setAppKitRecent(r),t.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:this.wallet?.name||"Unknown"}})}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:r,webapp_link:n,injected:i,rdns:s,name:o}=this.wallet,a=i?.map((({injected_id:e})=>e)).filter(Boolean),c=[...s?[s]:a??[],o],l=!t.Hd.state.isUniversalProvider&&c.length,u=e,h=n,d=t.x4.checkInstalled(c),f=l&&d,p=r&&!t.wE.isMobile();f&&this.platforms.push("browser"),u&&this.platforms.push(t.wE.isMobile()?"mobile":"qrcode"),h&&this.platforms.push("web"),p&&this.platforms.push("desktop"),!f&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return ea.qy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return ea.qy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return ea.qy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return ea.qy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return ea.qy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return ea.qy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?ea.qy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Za([(0,ta.wk)()],Ka.prototype,"platform",void 0),Za([(0,ta.wk)()],Ka.prototype,"platforms",void 0),Za([(0,ta.wk)()],Ka.prototype,"isSiweEnabled",void 0),Ka=Za([(0,r.customElement)("w3m-connecting-wc-view")],Ka);var Ja=ea.AH`
  .continue-button-container {
    width: 100%;
  }
`,Qa=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Ya=class extends ea.WF{constructor(){super(...arguments),this.loading=!1}render(){return ea.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{t.wE.openHref(n.TC.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return ea.qy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return ea.qy`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){t.IN.push("RegisterAccountName"),t.En.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:t.Uj.state.preferredAccountType===Ia.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}};Ya.styles=Ja,Qa([(0,ta.wk)()],Ya.prototype,"loading",void 0),Ya=Qa([(0,r.customElement)("w3m-choose-account-name-view")],Ya);let Xa=class extends ea.WF{constructor(){super(...arguments),this.wallet=t.IN.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return ea.qy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?ea.qy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?ea.qy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?ea.qy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?ea.qy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&t.wE.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&t.wE.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&t.wE.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&t.wE.openHref(this.wallet.homepage,"_blank")}};Xa=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,r.customElement)("w3m-downloads-view")],Xa);let ec=class extends ea.WF{render(){return ea.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{t.wE.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:r}=t.Np.state,{customWallets:n}=t.Hd.state;return[...r,...n??[],...e].slice(0,4).map((e=>ea.qy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,ra.J)(t.$m.getWalletImage(e))}
          @click=${()=>{t.wE.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `))}};ec=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,r.customElement)("w3m-get-wallet-view")],ec);var tc=ea.AH`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`,rc=i(68342),nc=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let ic=class extends ea.WF{constructor(){super(),this.formRef=(0,rc._)(),this.usubscribe=[],this.name="",this.error="",this.loading=t.f.state.loading,this.suggestions=t.f.state.suggestions,this.registered=!1,this.profileName=t.Uj.state.profileName,this.onDebouncedNameInputChange=t.wE.debounce((e=>{t.f.validateName(e)?(this.error="",this.name=e,t.f.getSuggestions(e),t.f.isNameRegistered(e).then((e=>{this.registered=e}))):e.length<4?this.error="Name must be at least 4 characters long":this.error="Can only contain letters, numbers and - characters"})),this.usubscribe.push(t.f.subscribe((e=>{this.suggestions=e.suggestions,this.loading=e.loading})),t.Uj.subscribeKey("profileName",(e=>{this.profileName=e,e&&(this.error="You already own a name")})))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach((e=>e())),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return ea.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${(0,rc.K)(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){return this.isAllowedToSubmit()?ea.qy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        `:null}onSelectSuggestion(e){return()=>{this.name=e,this.registered=!1,this.requestUpdate()}}onNameInputChange(e){this.onDebouncedNameInputChange(e.detail)}nameSuggestionTagTemplate(){return this.loading?ea.qy`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`:this.registered?ea.qy`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:ea.qy`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){if(!this.name||this.name.length<4||this.error)return null;const e=this.registered?this.suggestions.filter((e=>e.name!==this.name)):[];return ea.qy`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        data-testid="account-name-suggestion"
        .padding=${["m","m","m","m"]}
        justifyContent="space-between"
        class="suggestion"
        @click=${this.onSubmitName.bind(this)}
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${e.map((e=>this.availableNameTemplate(e.name)))}
    </wui-flex>`}availableNameTemplate(e){return ea.qy` <wui-flex
      data-testid="account-name-suggestion"
      .padding=${["m","m","m","m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(e)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${e}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`}isAllowedToSubmit(){return!this.loading&&!this.registered&&!this.error&&!this.profileName&&t.f.validateName(this.name)}async onSubmitName(){try{if(!this.isAllowedToSubmit())return;const e=`${this.name}${n.oU.WC_NAME_SUFFIX}`;t.En.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:t.Uj.state.preferredAccountType===Ia.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}}),await t.f.registerName(e),t.En.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:t.Uj.state.preferredAccountType===Ia.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}})}catch(e){t.Pt.showError(e.message),t.En.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:t.Uj.state.preferredAccountType===Ia.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:`${this.name}${n.oU.WC_NAME_SUFFIX}`,error:e?.message||"Unknown error"}})}}onEnterKey(e){"Enter"===e.key&&this.isAllowedToSubmit()&&this.onSubmitName()}};ic.styles=tc,nc([(0,ta.MZ)()],ic.prototype,"errorMessage",void 0),nc([(0,ta.wk)()],ic.prototype,"name",void 0),nc([(0,ta.wk)()],ic.prototype,"error",void 0),nc([(0,ta.wk)()],ic.prototype,"loading",void 0),nc([(0,ta.wk)()],ic.prototype,"suggestions",void 0),nc([(0,ta.wk)()],ic.prototype,"registered",void 0),nc([(0,ta.wk)()],ic.prototype,"profileName",void 0),ic=nc([(0,r.customElement)("w3m-register-account-name-view")],ic);var sc=ea.AH`
  .continue-button-container {
    width: 100%;
  }
`;let oc=class extends ea.WF{render(){return ea.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{t.wE.openHref(n.TC.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return ea.qy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return ea.qy`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){t.IN.replace("Account")}};oc.styles=sc,oc=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,r.customElement)("w3m-register-account-name-success-view")],oc);var ac=ea.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,cc=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let lc=class extends ea.WF{constructor(){super(),this.network=t.IN.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),r=this.getSubLabel();return ea.qy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,ra.J)(t.$m.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:ea.qy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${r}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=t.iT.getConnectedConnector();return t.aK.getAuthConnector()&&"AUTH"===e?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){const e=t.iT.getConnectedConnector();return t.aK.getAuthConnector()&&"AUTH"===e?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&await t.WB.switchActiveNetwork(this.network)}catch{this.error=!0}}};lc.styles=ac,cc([(0,ta.wk)()],lc.prototype,"showRetry",void 0),cc([(0,ta.wk)()],lc.prototype,"error",void 0),lc=cc([(0,r.customElement)("w3m-network-switch-view")],lc);var uc=ea.AH`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`,hc=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let dc=class extends ea.WF{constructor(){super(),this.unsubscribe=[],this.network=t.WB.state.activeCaipNetwork,this.requestedCaipNetworks=t.WB.getAllRequestedCaipNetworks(),this.search="",this.onDebouncedSearch=t.wE.debounce((e=>{this.search=e}),100),this.unsubscribe.push(t.WB.subscribeKey("activeCaipNetwork",(e=>this.network=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return ea.qy`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return ea.qy`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){t.En.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),t.IN.push("WhatIsANetwork")}networksTemplate(){const e=t.WB.getAllRequestedCaipNetworks(),r=t.WB.getAllApprovedCaipNetworkIds(),n=t.wE.sortRequestedNetworks(r,e);return this.search?this.filteredNetworks=n?.filter((e=>e?.name?.toLowerCase().includes(this.search.toLowerCase()))):this.filteredNetworks=n,this.filteredNetworks?.map((e=>ea.qy`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${(0,ra.J)(t.$m.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${this.getNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `))}getNetworkDisabled(e){const r=e.chainNamespace,n=t.Uj.getCaipAddress(r),i=t.WB.getAllApprovedCaipNetworkIds(),s=!1!==t.WB.getNetworkProp("supportsAllNetworks",r),o=t.iT.getConnectedConnector(),a=t.aK.getAuthConnector();return!(!n||s||"AUTH"===o&&a||i?.includes(e.caipNetworkId))}onSwitchNetwork(e){const r=t.IN.state.data;if(e.id===this.network?.id)return;const n=e.chainNamespace!==t.WB.state.activeChain,i=t.WB.getAccountProp("caipAddress",e.chainNamespace),s=t.Uj.state.caipAddress,o="AUTH"===t.iT.getConnectedConnector();n&&s&&!i&&!o?t.IN.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):t.IN.push("SwitchNetwork",{...r,network:e})}};dc.styles=uc,hc([(0,ta.wk)()],dc.prototype,"network",void 0),hc([(0,ta.wk)()],dc.prototype,"requestedCaipNetworks",void 0),hc([(0,ta.wk)()],dc.prototype,"filteredNetworks",void 0),hc([(0,ta.wk)()],dc.prototype,"search",void 0),dc=hc([(0,r.customElement)("w3m-networks-view")],dc);var fc=ea.AH`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`,pc=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let gc=class extends ea.WF{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=t.aG.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=t.WC.state.coinbaseTransactions,this.tokenImages=t.jQ.state.tokenImages,this.unsubscribe.push(t.aG.subscribeKey("selectedProvider",(e=>{this.selectedOnRampProvider=e})),t.jQ.subscribeKey("tokenImages",(e=>this.tokenImages=e)),(()=>{clearTimeout(this.refetchTimeout)}),t.WC.subscribe((e=>{this.coinbaseTransactions={...e.coinbaseTransactions}}))),t.WC.clearCursor(),this.fetchTransactions()}render(){return ea.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e?.map((e=>{const t=n.rL.formatDate(e?.metadata?.minedAt),r=e.transfers[0],i=r?.fungible_info;if(!i)return null;const s=i?.icon?.url||this.tokenImages?.[i.symbol||""];return ea.qy`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${"ONRAMP_TRANSACTION_STATUS_SUCCESS"===e.metadata.status}
          .inProgress=${"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status}
          .failed=${"ONRAMP_TRANSACTION_STATUS_FAILED"===e.metadata.status}
          purchaseCurrency=${(0,ra.J)(i.symbol)}
          purchaseValue=${r.quantity.numeric}
          date=${t}
          icon=${(0,ra.J)(s)}
          symbol=${(0,ra.J)(i.symbol)}
        ></w3m-onramp-activity-item>
      `}))}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map((e=>{const t=parseInt(e,10);return new Array(12).fill(null).map(((e,t)=>t)).reverse().map((e=>{const n=r.TransactionUtil.getTransactionGroupTitle(t,e),i=this.coinbaseTransactions[t]?.[e];return i?ea.qy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${n}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(i)}
            </wui-flex>
          </wui-flex>
        `:null}))}))}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=t.Uj.state.address,r=t.Hd.state.projectId;if(!e)throw new Error("No address found");if(!r)throw new Error("No projectId found");this.loading=!0,await t.WC.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){const e=new Date;0!==(this.coinbaseTransactions[e.getFullYear()]?.[e.getMonth()]||[]).filter((e=>"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status)).length?this.refetchTimeout=setTimeout((async()=>{const e=t.Uj.state.address;await t.WC.fetchTransactions(e,"coinbase"),this.refetchLoadingTransactions()}),3e3):clearTimeout(this.refetchTimeout)}templateLoading(){return Array(7).fill(ea.qy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((e=>e))}};gc.styles=fc,pc([(0,ta.wk)()],gc.prototype,"selectedOnRampProvider",void 0),pc([(0,ta.wk)()],gc.prototype,"loading",void 0),pc([(0,ta.wk)()],gc.prototype,"coinbaseTransactions",void 0),pc([(0,ta.wk)()],gc.prototype,"tokenImages",void 0),gc=pc([(0,r.customElement)("w3m-onramp-activity-view")],gc);var mc=ea.AH`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,wc=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let yc=class extends ea.WF{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=t.aG.state.paymentCurrency,this.currencies=t.aG.state.paymentCurrencies,this.currencyImages=t.jQ.state.currencyImages,this.unsubscribe.push(t.aG.subscribe((e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies})),t.jQ.subscribeKey("currencyImages",(e=>this.currencyImages=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return ea.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map((e=>ea.qy`
        <wui-list-item
          imageSrc=${(0,ra.J)(this.currencyImages?.[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `))}selectCurrency(e){e&&(t.aG.setPaymentCurrency(e),t.W3.close())}};yc.styles=mc,wc([(0,ta.wk)()],yc.prototype,"selectedCurrency",void 0),wc([(0,ta.wk)()],yc.prototype,"currencies",void 0),wc([(0,ta.wk)()],yc.prototype,"currencyImages",void 0),yc=wc([(0,r.customElement)("w3m-onramp-fiat-select-view")],yc);var bc=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let vc=class extends ea.WF{constructor(){super(),this.unsubscribe=[],this.providers=t.aG.state.providers,this.unsubscribe.push(t.aG.subscribeKey("providers",(e=>{this.providers=e})))}firstUpdated(){const e=this.providers.map((async e=>"coinbase"===e.name?await this.getCoinbaseOnRampURL():Promise.resolve(e?.url)));Promise.all(e).then((e=>{this.providers=this.providers.map(((t,r)=>({...t,url:e[r]||""})))}))}render(){return ea.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.filter((e=>e.supportedChains.includes(t.WB.state.activeChain??"eip155"))).map((e=>ea.qy`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
          ></w3m-onramp-provider-item>
        `))}onClickProvider(e){t.aG.setSelectedProvider(e),t.IN.push("BuyInProgress"),t.wE.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes"),t.En.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:t.Uj.state.preferredAccountType===Ia.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}async getCoinbaseOnRampURL(){const e=t.Uj.state.address,r=t.WB.state.activeCaipNetwork;if(!e)throw new Error("No address found");if(!r?.name)throw new Error("No network found");const n=t.oU.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[r.name]??t.oU.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,i=t.aG.state.purchaseCurrency,s=i?[i.symbol]:t.aG.state.purchaseCurrencies.map((e=>e.symbol));return await t.TP.generateOnRampURL({defaultNetwork:n,destinationWallets:[{address:e,blockchains:t.oU.WC_COINBASE_PAY_SDK_CHAINS,assets:s}],partnerUserId:e,purchaseAmount:t.aG.state.purchaseAmount})}};bc([(0,ta.wk)()],vc.prototype,"providers",void 0),vc=bc([(0,r.customElement)("w3m-onramp-providers-view")],vc);var Ac=ea.AH`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,xc=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Ec=class extends ea.WF{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=t.aG.state.purchaseCurrencies,this.tokens=t.aG.state.purchaseCurrencies,this.tokenImages=t.jQ.state.tokenImages,this.unsubscribe.push(t.aG.subscribe((e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies})),t.jQ.subscribeKey("tokenImages",(e=>this.tokenImages=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return ea.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map((e=>ea.qy`
        <wui-list-item
          imageSrc=${(0,ra.J)(this.tokenImages?.[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `))}selectToken(e){e&&(t.aG.setPurchaseCurrency(e),t.W3.close())}};Ec.styles=Ac,xc([(0,ta.wk)()],Ec.prototype,"selectedCurrency",void 0),xc([(0,ta.wk)()],Ec.prototype,"tokens",void 0),xc([(0,ta.wk)()],Ec.prototype,"tokenImages",void 0),Ec=xc([(0,r.customElement)("w3m-onramp-token-select-view")],Ec);var Cc=ea.AH`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`,_c=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let kc=class extends ea.WF{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!1,this.caipNetworkId=t.WB.state.activeCaipNetwork?.caipNetworkId,this.initialized=t.GN.state.initialized,this.loadingQuote=t.GN.state.loadingQuote,this.loadingPrices=t.GN.state.loadingPrices,this.loadingTransaction=t.GN.state.loadingTransaction,this.sourceToken=t.GN.state.sourceToken,this.sourceTokenAmount=t.GN.state.sourceTokenAmount,this.sourceTokenPriceInUSD=t.GN.state.sourceTokenPriceInUSD,this.toToken=t.GN.state.toToken,this.toTokenAmount=t.GN.state.toTokenAmount,this.toTokenPriceInUSD=t.GN.state.toTokenPriceInUSD,this.inputError=t.GN.state.inputError,this.gasPriceInUSD=t.GN.state.gasPriceInUSD,this.fetchError=t.GN.state.fetchError,this.onDebouncedGetSwapCalldata=t.wE.debounce((async()=>{await t.GN.swapTokens()}),200),t.WB.subscribeKey("activeCaipNetwork",(e=>{this.caipNetworkId!==e?.caipNetworkId&&(this.caipNetworkId=e?.caipNetworkId,t.GN.resetState(),t.GN.initializeState())})),this.unsubscribe.push(t.W3.subscribeKey("open",(e=>{e||t.GN.resetState()})),t.IN.subscribeKey("view",(e=>{e.includes("Swap")||t.GN.resetValues()})),t.GN.subscribe((e=>{this.initialized=e.initialized,this.loadingQuote=e.loadingQuote,this.loadingPrices=e.loadingPrices,this.loadingTransaction=e.loadingTransaction,this.sourceToken=e.sourceToken,this.sourceTokenAmount=e.sourceTokenAmount,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError,this.gasPriceInUSD=e.gasPriceInUSD,this.fetchError=e.fetchError})))}firstUpdated(){t.GN.initializeState(),this.watchTokensAndValues()}disconnectedCallback(){this.unsubscribe.forEach((e=>e?.())),clearInterval(this.interval)}render(){return ea.qy`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval((()=>{t.GN.getNetworkTokenPrice(),t.GN.getMyTokensWithBalance(),t.GN.swapTokens()}),1e4)}templateSwap(){return ea.qy`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":this.sourceToken&&this.toToken?this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount":"Select token"}templateReplaceTokensButton(){return ea.qy`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return ea.qy`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(e,r){const n=t.GN.state.myTokensWithBalance?.find((e=>e?.address===r?.address)),i="toToken"===e?this.toTokenAmount:this.sourceTokenAmount,s="toToken"===e?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD;let o=parseFloat(i)*s;return"toToken"===e&&(o-=this.gasPriceInUSD||0),ea.qy`<w3m-swap-input
      .value=${"toToken"===e?this.toTokenAmount:this.sourceTokenAmount}
      ?disabled=${this.loadingQuote&&"toToken"===e}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${e}
      .token=${r}
      .balance=${n?.quantity?.numeric}
      .price=${n?.price}
      .marketValue=${o}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(e,r){const i="sourceToken"===e?this.sourceToken:this.toToken,s=i?.address===t.WB.getActiveNetworkTokenAddress();let o="0";if(!r)return o="0",void this.handleChangeAmount(e,o);if(!this.gasPriceInUSD)return o=r,void this.handleChangeAmount(e,o);const a=n.Se.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.sourceTokenPriceInUSD),c=s?n.Se.bigNumber(r).minus(a):n.Se.bigNumber(r);this.handleChangeAmount(e,c.isGreaterThan(0)?c.toFixed(20):"0")}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?ea.qy`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}handleChangeAmount(e,r){t.GN.clearError(),"sourceToken"===e?t.GN.setSourceTokenAmount(r):t.GN.setToTokenAmount(r),this.onDebouncedGetSwapCalldata()}templateActionButton(){const e=!this.toToken||!this.sourceToken,t=!this.sourceTokenAmount,r=this.loadingQuote||this.loadingPrices||this.loadingTransaction,n=r||e||t||this.inputError;return ea.qy` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${e?"neutral":"main"}
        .loading=${r}
        .disabled=${n}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){t.GN.switchTokens()}onSwapPreview(){this.fetchError?t.GN.swapTokens():(t.En.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:this.sourceToken?.symbol||"",swapToToken:this.toToken?.symbol||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:t.Uj.state.preferredAccountType===Ia.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),t.IN.push("SwapPreview"))}};kc.styles=Cc,_c([(0,ta.wk)()],kc.prototype,"interval",void 0),_c([(0,ta.wk)()],kc.prototype,"detailsOpen",void 0),_c([(0,ta.wk)()],kc.prototype,"caipNetworkId",void 0),_c([(0,ta.wk)()],kc.prototype,"initialized",void 0),_c([(0,ta.wk)()],kc.prototype,"loadingQuote",void 0),_c([(0,ta.wk)()],kc.prototype,"loadingPrices",void 0),_c([(0,ta.wk)()],kc.prototype,"loadingTransaction",void 0),_c([(0,ta.wk)()],kc.prototype,"sourceToken",void 0),_c([(0,ta.wk)()],kc.prototype,"sourceTokenAmount",void 0),_c([(0,ta.wk)()],kc.prototype,"sourceTokenPriceInUSD",void 0),_c([(0,ta.wk)()],kc.prototype,"toToken",void 0),_c([(0,ta.wk)()],kc.prototype,"toTokenAmount",void 0),_c([(0,ta.wk)()],kc.prototype,"toTokenPriceInUSD",void 0),_c([(0,ta.wk)()],kc.prototype,"inputError",void 0),_c([(0,ta.wk)()],kc.prototype,"gasPriceInUSD",void 0),_c([(0,ta.wk)()],kc.prototype,"fetchError",void 0),kc=_c([(0,r.customElement)("w3m-swap-view")],kc);var Sc=ea.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual
            name=${"eip155"===this.switchToChain?"eth":this.switchToChain}
          ></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${t}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${t}</span></wui-text
          >
  }

  }

