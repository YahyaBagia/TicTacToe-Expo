(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{106:function(e,t,n){e.exports=n(141)},118:function(e,t,n){e.exports=n.p+"./fonts/Kanit-Bold.ttf"},119:function(e,t,n){e.exports=n.p+"static/media/ForkOnGithub.0c95a7c5.png"},120:function(e,t,n){e.exports=n.p+"static/media/Move_Sound.3e2b8a36.wav"},121:function(e,t,n){e.exports=n.p+"static/media/Game_Draw.183e2b8a.wav"},122:function(e,t,n){e.exports=n.p+"static/media/Game_Won.9b5b1a62.wav"},98:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(6),c=n.n(i),a=n(12),s=n.n(a),u=n(1),l=n(147),O=n(97),f=n(66),b={FontName:"Kanit-Bold",FontFile:n(118)},d={ForkOnGithub:n(119)},j={Move_Sound:n(120),Game_Draw:n(121),Game_Won:n(122)},p=n(29),y=n.n(p),h=n(7),x=n(19),g=n(11),m=n.n(g),v=n(15),w=n(99),S=function e(){m()(this,e)};S.Sleep=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t,n){setTimeout((function(){t()}),1e3*e)}))},S.PlaySound=function(e){var t,n;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.awrap(w.a.Sound.createAsync(e));case 2:return t=r.sent,n=t.sound,r.next=6,o.a.awrap(n.playAsync());case 6:case"end":return r.stop()}}),null,null,null,Promise)},S.IsOnWeb=function(){return"web"===v.a.OS};var P=n(90),F=n(100),D=n(23),C=n(91),R=n(3);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(e){var t=e.children,n=e.style;return Object(R.jsxs)(h.a,{style:{backgroundColor:"#373d57",flex:1,alignItems:"center"},children:[Object(R.jsx)(P.a,{style:k({backgroundColor:"212845",flex:1,width:"100%",maxWidth:480,padding:15},n),children:t}),S.IsOnWeb()&&Object(R.jsx)(D.a,{style:{position:"absolute",top:0,right:0},onPress:function(){C.a.openURL("https://github.com/YahyaBagia/TicTacToe-Expo")},children:Object(R.jsx)(F.a,{source:d.ForkOnGithub,style:{width:130,height:130}})})]})};function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(e){var t=e.title,n=e.onPress,r=e.style;return Object(R.jsx)(D.a,{onPress:n,style:B({height:60,backgroundColor:"#F8D332",borderRadius:5,alignItems:"center",justifyContent:"center",marginVertical:10,marginHorizontal:10,flex:1},r),children:Object(R.jsx)(x.a,{style:{fontFamily:b.FontName,fontSize:25,color:"#333027",textAlign:"center"},children:t})})},A=function(){return Object(R.jsx)(h.a,{style:{backgroundColor:"#F8D332",height:2,marginVertical:10}})},_=function(e){var t=e.state,n=e.index,r=e.onPress,o=e.isWinningIndex;return Object(R.jsx)(D.a,{onPress:function(){return r(n)},style:{backgroundColor:"#2c3045",height:98,width:98,margin:1,borderRadius:6,alignItems:"center",justifyContent:"center"},activeOpacity:1,children:void 0!==t?Object(R.jsx)(x.a,{style:{width:"100%",textAlign:"center",fontSize:o?65:55,fontFamily:b.FontName,color:"#F8D332",textShadowColor:o?"#F8D332":void 0,textShadowOffset:o?{width:-1,height:1}:void 0,textShadowRadius:o?15:void 0},children:"CROSS"===t?"X":"O"}):Object(R.jsx)(R.Fragment,{})})};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){var t=e.title,n=e.onPress,r=e.isSelected,o=e.disabled,i=e.style;return Object(R.jsx)(D.a,{onPress:n,style:z({height:44,backgroundColor:r?"#F8D332":"transparent",borderRadius:5,borderWidth:2,borderColor:"#F8D332",alignItems:"center",justifyContent:"center",marginVertical:8,marginHorizontal:4,flex:1},i),disabled:o,children:Object(R.jsx)(x.a,{style:{fontFamily:b.FontName,fontSize:22,color:r?"#333027":"#F8D332",textAlign:"center"},children:t})})},M=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],V=function(){var e=Object(u.useState)("Bot"),t=s()(e,2),n=t[0],r=t[1],i=Object(u.useState)("CROSS"),c=s()(i,2),a=c[0],l=c[1],O=Object(u.useState)(y()(new Array(9))),f=s()(O,2),d=f[0],p=f[1],g=Object(u.useState)(""),m=s()(g,2),v=m[0],w=m[1],P=Object(u.useState)(void 0),F=s()(P,2),D=F[0],C=F[1],E=Object(u.useState)([]),k=s()(E,2),W=k[0],B=k[1];Object(u.useEffect)((function(){if(!1!==d.includes("CROSS")||!1!==d.includes("ZERO")){var e=z();e?w("Game Over"):!1===e&&!1===d.includes(void 0)?w("Game Draw"):l("CROSS"===a?"ZERO":"CROSS")}}),[d]),Object(u.useEffect)((function(){"ZERO"===a&&"Bot"===n&&T()}),[a]),Object(u.useEffect)((function(){"Game Over"===v?S.PlaySound(j.Game_Won):"Game Draw"===v&&S.PlaySound(j.Game_Draw)}),[v]);var T=function(){var e,t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(S.Sleep());case 2:e=[],d.map((function(t,n){void 0===t&&e.push(n)})),t=Math.floor(Math.random()*e.length),V(e[t],!0);case 6:case"end":return n.stop()}}),null,null,null,Promise)},z=function(){var e=M.find((function(e){var t=s()(e,3),n=t[0],r=t[1],o=t[2];if(void 0!==d[n]&&d[n]===d[r]&&d[r]===d[o])return e}));if(void 0!==e){var t=s()(e,1)[0],n=d[t];return C(n),B(e),!0}return!1},V=function(e,t){var r=0===v.length,o=!0;if("Bot"!==n||"ZERO"!==a||t||(o=!1),r&&o&&void 0===d[e]){var i=y()(d);i[e]=a,p(y()(i)),S.PlaySound(j.Move_Sound)}},Z=function(){return 0!==d.filter((function(e){return void 0!==e})).length};return Object(R.jsxs)(G,{style:{justifyContent:"center"},children:[Object(R.jsxs)(h.a,{children:[Object(R.jsx)(x.a,{style:{fontFamily:b.FontName,fontSize:26,color:"#F8D332",textAlign:"center"},children:"Opponent"}),Object(R.jsxs)(h.a,{style:{flexDirection:"row",alignItems:"center"},children:[Object(R.jsx)(N,{title:"Friend",onPress:function(){return r("Player")},isSelected:"Player"===n,disabled:Z()}),Object(R.jsx)(N,{title:"Bot",onPress:function(){return r("Bot")},isSelected:"Bot"===n,disabled:Z()})]}),Object(R.jsx)(A,{})]}),Object(R.jsx)(x.a,{style:{fontFamily:b.FontName,fontSize:40,color:"#F8D332",textAlign:"center"},children:function(){var e="",t="";return""===v?t="CROSS"===a?"Bot"===n?"Your Turn":"X's Turn":"Bot"===n?"Bot's Turn":"O's Turn":"Game Over"===v?(e="\u2b50",t="CROSS"===D?" X Won ":" O Won "):(e="\ud83d\ude11",t=" Draw "),""+e+t+e}()}),Object(R.jsx)(h.a,{style:{marginVertical:12,justifyContent:"center",alignItems:"center"},children:Object(R.jsx)(h.a,{style:{width:300,height:300,backgroundColor:"#2369EE",borderRadius:6},children:[[0,1,2],[3,4,5],[6,7,8]].map((function(e,t){var n=s()(e,3),r=n[0],o=n[1],i=n[2];return Object(R.jsxs)(h.a,{style:{flexDirection:"row"},children:[Object(R.jsx)(_,{index:r,onPress:V,state:d[r],isWinningIndex:W.includes(r)}),Object(R.jsx)(_,{index:o,onPress:V,state:d[o],isWinningIndex:W.includes(o)}),Object(R.jsx)(_,{index:i,onPress:V,state:d[i],isWinningIndex:W.includes(i)})]},""+t)}))})}),Object(R.jsx)(A,{}),Object(R.jsx)(h.a,{style:{flexDirection:"row"},children:Object(R.jsx)(I,{title:"Reset",onPress:function(){l("CROSS"),p(y()(new Array(9))),w(""),C(void 0),B([])}})})]})};t.a=function(){var e=Object(u.useState)(!1),t=s()(e,2),n=t[0],r=t[1];return Object(u.useEffect)((function(){o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(f.b());case 2:return e.next=4,o.a.awrap(l.a(c()({},b.FontName,b.FontFile)));case 4:return r(!0),e.next=7,o.a.awrap(f.a());case 7:case"end":return e.stop()}}),null,null,null,Promise)}),[]),n?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(V,{}),Object(R.jsx)(O.a,{style:"light"})]}):Object(R.jsx)(R.Fragment,{})}}},[[106,1,2]]]);
//# sourceMappingURL=app.3e81004a.chunk.js.map