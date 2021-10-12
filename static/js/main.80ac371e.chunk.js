(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{116:function(e,t,n){e.exports={button:"button_button__2TaGT"}},117:function(e,t,n){e.exports={board:"board_board__3mzXK"}},119:function(e,t,n){e.exports={shipCell:"ship_shipCell__2M7LC"}},12:function(e,t,n){e.exports={gameWrapper:"app_gameWrapper__3SBKJ",boardWrapper:"app_boardWrapper__1Zq1d",background:"app_background__3Ad_6",lifebuoy:"app_lifebuoy__Dn2hZ",buttonWrapper:"app_buttonWrapper__2PKim",buttonFormat:"app_buttonFormat__FEBOM"}},120:function(e,t,n){e.exports={wrapper:"situationRoom_wrapper__2OAnn",multiplayerRoom:"situationRoom_multiplayerRoom__2z8LS"}},15:function(e,t,n){e.exports={header:"header_header__3No9B",title:"header_title__j6glg",buttonWrapper:"header_buttonWrapper__1cDIY",flowControlWrapper:"header_flowControlWrapper__2jb04"}},16:function(e,t,n){e.exports={wrapper:"striped_wrapper__1h5Mv",stripe:"striped_stripe__24sEc",anchor:"striped_anchor__W_ZEh",win:"striped_win__3QpI6",wrapperWin:"striped_wrapperWin__3xOln"}},252:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(115),i=n.n(c),o=n(5),l=n(258),s=n(122),u=n(15),p=n.n(u),d=n(40),f=n.n(d),A=n(0);var b=function(e){var t=e.message,n=e.winEffect;return Object(A.jsx)("div",{className:n?f.a.win:f.a.wrapper,children:Object(A.jsx)("p",{className:f.a.title,children:t})})},h=n(116),j=n.n(h);function m(e){var t=e.value,n=e.onClick;return Object(A.jsx)("input",{className:j.a.button,type:"button",value:t,onClick:n})}function y(e){var t=e.gameState,n=e.handleSinglePlayer,r=e.handleMultiplayer,a=e.handleNewGame,c=e.winEffect;return Object(A.jsxs)("div",{className:p.a.header,children:[Object(A.jsx)("h1",{className:p.a.title,children:" BattleShip "}),Object(A.jsxs)("div",{className:p.a.flowControlWrapper,children:[Object(A.jsx)(b,{message:t,winEffect:c}),"Game mode"===t?Object(A.jsxs)("div",{className:p.a.buttonWrapper,children:[Object(A.jsx)(m,{value:"Single Player",onClick:n}),Object(A.jsx)(m,{value:"Multiplayer",onClick:r})]}):Object(A.jsx)("div",{className:p.a.buttonWrapper,children:Object(A.jsx)(m,{value:"New Game",onClick:a})})]})]})}var g=n(117),O=n.n(g),v=n(24),x=n(259),w=function(e){var t={damage:e,length:e&&e>0&&e<=5?e:null};return Object.assign(t,function(e){return{hit:function(){e.damage--}}}(t),function(e){return{isSunk:function(){return 0===e.damage}}}(t))},k={P1SHIP:"p1ship",P2SHIP:"p2ship",NOSHIPS:"noships"};function P(e,t){var n=e.rotate?Array(Number(e.length)).fill(0).map((function(e,t){return t})):Array(Number(e.length)).fill(0),r=e.rotate?Array(Number(e.length)).fill(0):Array(Number(e.length)).fill(0).map((function(e,t){return t}));return{lin:n.map((function(e){return e+t.lin})),col:r.map((function(e){return e+t.col}))}}function B(e){var t=e.color,n=e.attack,r=e.coord,a=e.player,c=e.setBoard,i=e.itemType,l=e.setDock,s=Object(x.a)((function(){return{accept:"P1"===i?k.P1SHIP:"P2"===i?k.P2SHIP:k.NOSHIPS,collect:function(e){return{isOver:!!e.isOver(),canDrop:!!e.canDrop()}},canDrop:function(e,t){return!!t.isOver()&&Math.max.apply(Math,Object(v.a)(P(e,r).lin))<=9&&Math.max.apply(Math,Object(v.a)(P(e,r).col))<=9&&Math.min.apply(Math,Object(v.a)(P(e,r).lin))>=0&&Math.min.apply(Math,Object(v.a)(P(e,r).col))>=0},drop:function(e){l((function(t){return t.filter((function(t){return t.key!==e.id}))})),a.board.placeShip(P(e,r),w(e.length)),c()}}}),[r,a]),u=Object(o.a)(s,2),p=u[0],d=p.isOver,f=(p.canDrop,u[1]);return Object(A.jsx)("div",{ref:f,onClick:n,style:{width:"25px",height:"25px",backgroundColor:d?"#195570":t}})}function S(e){var t=e.board,n=e.setBoard,r=e.showBoats,a=e.attack,c=e.placeShip,i=e.player,o=e.itemType,l=e.setDock,s=function(e){var t="white";return e.missed?t="#757575":e.ship&&!e.wasHit&&r?t="#195570":e.wasHit&&(t="#d86307"),t};return Object(A.jsx)("div",{className:O.a.board,children:t.flatMap((function(e){return e})).map((function(e){return Object(A.jsx)(B,{setBoard:n,player:i,placeShip:c,attack:function(){return a(e.coord)},color:s(e),coord:e.coord,itemType:o,setDock:l},JSON.stringify(e.coord))}))})}var N=function(e){var t=e.children;return Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{style:{color:"white",textAlign:"center"},children:"dock"}),Object(A.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",alignItems:"center",alignSelf:"center",width:"200px",height:"260px",backgroundColor:"white"},children:t})]})},D=n(119),I=n.n(D),M=n(260),C=n(257);function _(e){for(var t=e.id,n=e.length,a=e.itemType,c=Object(r.useState)(0),i=Object(o.a)(c,2),l=i[0],s=i[1],u=Object(M.a)((function(){return{type:"P1"===a?k.P1SHIP:k.P2SHIP,item:{length:n,rotate:l,id:t},collect:function(e){return{isDragging:!!e.isDragging()}}}}),[l,a,k]),p=Object(o.a)(u,3),d=(p[0],p[1]),f=p[2],b=Array(Number(n)),h=0;h<=n;h++)b.push(h);return Object(A.jsxs)("div",{style:{width:"100%"},children:[Object(A.jsx)(C.a,{connect:f,src:"data:image/png;base64,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"}),Object(A.jsxs)("div",{ref:f,onDoubleClick:function(){s((function(e){return 0===e?90:0}))},style:{width:25*n+"px",height:"25px",display:"flex",flexWrap:"nowrap",alignItems:"center",transform:"rotate(".concat(l,"deg)"),margin:"5px"},children:[Object(A.jsxs)("div",{ref:d,style:{position:"absolute",zIndex:1e3,fontSize:"15px",marginLeft:"4px"},children:[" ","\u2316"," "]}),b.map((function(e){return Object(A.jsx)("div",{className:I.a.shipCell},e)}))]})]})}var E=n(120),W=n.n(E);function G(e){var t=e.setBoard,n=e.player,r=e.playerBoard,a=e.enemyBoard,c=e.attack,i=e.itemType,o=e.showRoom,l=e.shipsOnDock,s=e.setShipsOnDock,u=e.useGameFlow,p=e.turn;return u(!l.length&&p),Object(A.jsxs)("div",{className:W.a.wrapper,style:{display:o?"flex":"none"},children:[l.length?Object(A.jsx)(N,{children:l.map((function(e){return Object(A.jsx)(_,{id:e.key,length:e.length,itemType:i},e.key)}))}):null,Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{style:{color:"white",textAlign:"center"},children:"you"}),Object(A.jsx)(S,{board:r,setBoard:t,showBoats:!0,player:n,itemType:i,setDock:s,attack:function(){}})]}),l.length?null:Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{style:{color:"white",textAlign:"center"},children:"enemy"}),Object(A.jsx)(S,{board:a,attack:c})]})]})}var z=n.p+"static/media/anchor.a5fd9676.png",F=n(16),R=n.n(F);function T(e){var t=e.winEffect,n=parseInt(window.innerWidth/110),r=Array(n).fill(0);return Object(A.jsxs)("div",{className:t?R.a.wrapperWin:R.a.wrapper,children:[Object(A.jsx)("div",{style:{position:"absolute",height:"15vw",width:"100%",overflow:"hidden"},children:r.map((function(e,t){return Object(A.jsx)("img",{src:z,className:R.a.anchor,alt:"anchor",style:{left:200*t+"px"}},t)}))}),[0,1,2,3,4,5,6].map((function(e){return Object(A.jsx)("div",{className:t?R.a.win:R.a.stripe},e)}))]})}function H(){return Object(A.jsxs)("svg",{width:"200",height:"200",children:[Object(A.jsx)("circle",{r:"70",cx:"100",cy:"100",fill:"none",stroke:"#195570","stroke-width":"55"}),Object(A.jsx)("circle",{r:"70",cx:"100",cy:"100",fill:"none",stroke:"#d86307","stroke-width":"50"}),Object(A.jsx)("circle",{r:"70",cx:"100",cy:"100",fill:"none",stroke:"white","stroke-width":"50","stroke-dasharray":"20 90","stroke-dashoffset":"10"})]})}var L=n(12),X=n.n(L),J=n(13),Z=n(121),Y=function(e,t){return e.board.receiveAttack(t)},K=n.n(Z)()((function(e){return e[Math.floor(Math.random()*e.length)]}),(function(e){return e.board.getBoard.flatMap((function(e){return e})).filter((function(e){return!e.missed&&!e.wasHit})).map((function(e){return e.coord}))})),q=function(e){return Y(e,K(e))},Q=function(e){return Object.assign({},{board:e,attack:Y,play:q})};var U=function(){var e=t();function t(){for(var e=[],t=0;t<10;t++)e.push(Array(10).fill(null));return e=e.map((function(e,t){return e.map((function(e,n){return Object.assign({coord:{lin:t,col:n},ship:null,missed:!1,wasHit:!1})}))}))}return{get getBoard(){return e},placeShip:function(t,n){for(var r=0;r<t.col.length;r++)e[t.lin[r]][t.col[r]].ship=n;return e},receiveAttack:function(t){!function(t){return null===e[t.lin][t.col].ship}(t)?(e[t.lin][t.col].ship.hit(),e[t.lin][t.col].wasHit=!0):e[t.lin][t.col].missed=!0},allSunk:function(){var t=e.flatMap((function(e){return e})).filter((function(e){return null!==e.ship})),n=t.map((function(e){return e.ship.damage})).reduce((function(e,t){return e+t}),0);return t.length>0&&0===n},reset:function(){e=t()}}},V=Q(U()),$=Q(U()),ee=function(){return $.board.allSunk()||V.board.allSunk()},te=function(){return V.board.allSunk()&&ee()?"Player2 wins!":$.board.allSunk()&&ee()?"Player1 wins!":"No winner."};var ne=function(e,t){var n=J.cloneDeep(e.board.getBoard);t((function(e){return n}))},re=[{key:"P1destroyer",length:4},{key:"P1submarine1",length:3},{key:"P1submarine2",length:3},{key:"P1submarine3",length:3},{key:"P1submarine4",length:3},{key:"P1patrolBoat1",length:2},{key:"P1patrolBoat2",length:2}];var ae=function(){var e=Object(r.useRef)(J.cloneDeep(V.board.getBoard)),t=Object(r.useRef)(J.cloneDeep($.board.getBoard)),n=Object(r.useState)(e.current),a=Object(o.a)(n,2),c=a[0],i=a[1],u=Object(r.useState)(t.current),p=Object(o.a)(u,2),d=p[0],f=p[1],b=Object(r.useState)(re),h=Object(o.a)(b,2),j=h[0],g=h[1],O=Object(r.useState)(re),v=Object(o.a)(O,2),x=v[0],k=v[1],P=Object(r.useState)("Game mode"),B=Object(o.a)(P,2),S=B[0],N=B[1],D=Object(r.useState)(null),I=Object(o.a)(D,2),M=I[0],C=I[1],_=Object(r.useState)(!1),E=Object(o.a)(_,2),W=E[0],z=E[1],F=Object(r.useState)(!1),R=Object(o.a)(F,2),L=R[0],Z=R[1],Y=function(e){$.attack(V,e);var t=ee()?te():"Player1's turn";ne(V,i),N((function(e){return t})),ee()&&"multiplayer"===M?z((function(e){return!0})):z((function(e){return!1})),ee()&&Z(!0)},K=function(e){V.attack($,e);var t=ee()?te():"Player2's turn";ne($,f),N((function(e){return t})),ee()&&"multiplayer"===M?z((function(e){return!0})):z((function(e){return!1})),"multiplayer"===M&&ee()?z((function(e){return!0})):z((function(e){return!1})),ee()&&Z(!0)};!function(e,t){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=e})),Object(r.useEffect)((function(){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}),[t])}((function(){if("Player2's turn"===S&&"single player"===M){var e;$.play(V),"Player1's turn",e=J.cloneDeep(V.board.getBoard),i((function(t){return e})),N((function(e){return"Player1's turn"}))}}),2e3);var q="Place your ships!"===S||"Player1, place your ships!"===S||"Player2, place your ships!"===S;function Q(e){var t=S;e&&("single player"===M&&q&&(t="Player1's turn"),"multiplayer"===M&&q&&("Player1, place your ships!"===S?(t="Player2, place your ships!",z((function(e){return!1}))):"Player2, place your ships!"===S&&(t="Player1's turn",z((function(e){return!1}))))),Object(r.useEffect)((function(){return N((function(e){return t}))}),[t])}return Object(A.jsx)(l.a,{backend:s.a,children:Object(A.jsxs)("div",{className:X.a.gameWrapper,children:[Object(A.jsx)(y,{gameState:S,handleSinglePlayer:function(){$.board.placeShip({lin:[4,4,4,4],col:[5,6,7,8]},w(4)),$.board.placeShip({lin:[9,9,9],col:[1,2,3]},w(3)),$.board.placeShip({lin:[1,2,3],col:[1,1,1]},w(3)),$.board.placeShip({lin:[1,1,1],col:[4,5,6]},w(3)),$.board.placeShip({lin:[0,0,0],col:[7,8,9]},w(3)),$.board.placeShip({lin:[7,7],col:[8,9]},w(2)),$.board.placeShip({lin:[9,9],col:[6,7]},w(2)),ne($,f),C((function(e){return"single player"})),N((function(e){return"Place your ships!"})),z((function(e){return!0}))},handleMultiplayer:function(){C((function(e){return"multiplayer"})),N((function(e){return"Player1, place your ships!"}))},handleNewGame:function(){V.board.reset(),$.board.reset(),i((function(e){return J.cloneDeep(V.board.getBoard)})),f((function(e){return J.cloneDeep($.board.getBoard)})),N((function(e){return"Game mode"})),C((function(e){return null})),z((function(e){return!1})),g((function(e){return re})),k((function(e){return re})),Z(!1)},winEffect:L}),Object(A.jsx)(T,{winEffect:L}),Object(A.jsxs)("div",{className:X.a.background,children:[W||"multiplayer"!==M||"Game mode"===S?null:Object(A.jsxs)("div",{className:X.a.lifebuoy,children:[Object(A.jsx)(H,{}),Object(A.jsx)("div",{className:X.a.buttonWrapper,onClick:function(){return z((function(e){return!0}))},children:Object(A.jsx)("div",{className:X.a.buttonFormat,children:Object(A.jsx)(m,{value:"Show Board",onClick:function(){return z((function(e){return!0}))}})})})]}),"multiplayer"===M?Object(A.jsxs)("div",{className:X.a.background,children:[Object(A.jsx)(G,{itemType:"P1",setBoard:function(){return ne(V,i)},player:V,attack:"Player1's turn"===S?K:function(){},playerBoard:c,enemyBoard:d,useGameFlow:Q,setGameState:N,showRoom:W&&("Player1, place your ships!"===S||"Player1's turn"===S||"Player2 wins!"===S),shipsOnDock:j,setShipsOnDock:g,turn:"Player1's turn"===S||"Player1, place your ships!"===S}),Object(A.jsx)(G,{itemType:"P2",setBoard:function(){return ne($,f)},player:$,attack:"Player2's turn"===S?Y:function(){},playerBoard:d,enemyBoard:c,useGameFlow:Q,showRoom:W&&("Player2, place your ships!"===S||"Player2's turn"===S||"Player1 wins"===S),shipsOnDock:x,setShipsOnDock:k,turn:"Player2's turn"===S||"Player2, place your ships!"===S})]}):"single player"===M?Object(A.jsx)(G,{itemType:"P1",setBoard:function(){return ne(V,i)},player:V,attack:"Player1's turn"===S?K:function(){},playerBoard:c,enemyBoard:d,useGameFlow:Q,showRoom:!0,shipsOnDock:j,setShipsOnDock:g,turn:"Player1's turn"===S||"Place your ships!"===S}):void 0]})]})})};i.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(ae,{})}),document.getElementById("root"))},40:function(e,t,n){e.exports={wrapper:"messageboard_wrapper__1Rgyx",title:"messageboard_title__2dwke",win:"messageboard_win__1cb4j"}}},[[252,1,2]]]);
//# sourceMappingURL=main.80ac371e.chunk.js.map