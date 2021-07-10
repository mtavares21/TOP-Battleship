(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{116:function(e,t,r){e.exports={board:"board_board__3mzXK"}},118:function(e,t,r){e.exports={shipCell:"ship_shipCell__2M7LC"}},119:function(e,t,r){e.exports={wrapper:"situationRoom_wrapper__2OAnn",multiplayerRoom:"situationRoom_multiplayerRoom__2z8LS"}},13:function(e,t,r){e.exports={gameWrapper:"app_gameWrapper__3SBKJ",boardWrapper:"app_boardWrapper__1Zq1d",background:"app_background__3Ad_6",lifebuoy:"app_lifebuoy__Dn2hZ",buttonWrapper:"app_buttonWrapper__2PKim",buttonFormat:"app_buttonFormat__FEBOM"}},15:function(e,t,r){e.exports={header:"header_header__3No9B",title:"header_title__j6glg",buttonWrapper:"header_buttonWrapper__1cDIY",flowControlWrapper:"header_flowControlWrapper__2jb04"}},16:function(e,t,r){e.exports={wrapper:"striped_wrapper__1h5Mv",stripe:"striped_stripe__24sEc",anchor:"striped_anchor__W_ZEh",win:"striped_win__3QpI6",wrapperWin:"striped_wrapperWin__3xOln"}},251:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(115),o=r.n(c),i=r(5),l=r(257),s=r(121),u=r(15),p=r.n(u),f=r(40),d=r.n(f),A=r(1);var b=function(e){var t=e.message,r=e.winEffect;return Object(A.jsx)("div",{className:r?d.a.win:d.a.wrapper,children:Object(A.jsx)("p",{className:d.a.title,children:t})})};function h(e){var t=e.value,r=e.onClick;return Object(A.jsx)("input",{type:"button",value:t,onClick:r,style:{width:"120px",height:"30px",backgroundColor:"white",fontFamily:"Lobster, cursive",fontSize:"15px",color:"#757575",marginLeft:"20px",border:"none",padding:"5px",textAlign:"center"}})}function j(e){var t=e.gameState,r=e.handleSinglePlayer,n=e.handleMultiplayer,a=e.handleNewGame,c=e.winEffect;return Object(A.jsxs)("div",{className:p.a.header,children:[Object(A.jsx)("h1",{className:p.a.title,children:" BattleShip "}),Object(A.jsxs)("div",{className:p.a.flowControlWrapper,children:[Object(A.jsx)(b,{message:t,winEffect:c}),"Game mode"===t?Object(A.jsxs)("div",{className:p.a.buttonWrapper,children:[Object(A.jsx)(h,{value:"Single Player",onClick:r}),Object(A.jsx)(h,{value:"Multiplayer",onClick:n})]}):Object(A.jsx)("div",{className:p.a.buttonWrapper,children:Object(A.jsx)(h,{value:"New Game",onClick:a})})]})]})}var m=r(116),y=r.n(m),g=r(24),O=r(258),x=function(e){var t={damage:e,length:e&&e>0&&e<=5?e:null};return Object.assign(t,function(e){return{hit:function(){e.damage--}}}(t),function(e){return{isSunk:function(){return 0===e.damage}}}(t))},v={P1SHIP:"p1ship",P2SHIP:"p2ship",NOSHIPS:"noships"};function w(e,t){var r=e.rotate?Array(Number(e.length)).fill(0).map((function(e,t){return t})):Array(Number(e.length)).fill(0),n=e.rotate?Array(Number(e.length)).fill(0):Array(Number(e.length)).fill(0).map((function(e,t){return t}));return{lin:r.map((function(e){return e+t.lin})),col:n.map((function(e){return e+t.col}))}}function k(e){var t=e.color,r=e.attack,n=e.coord,a=e.player,c=e.setBoard,o=e.itemType,l=e.setDock,s=Object(O.a)((function(){return{accept:"P1"===o?v.P1SHIP:"P2"===o?v.P2SHIP:v.NOSHIPS,collect:function(e){return{isOver:!!e.isOver(),canDrop:!!e.canDrop()}},canDrop:function(e,t){return!!t.isOver()&&Math.max.apply(Math,Object(g.a)(w(e,n).lin))<=9&&Math.max.apply(Math,Object(g.a)(w(e,n).col))<=9&&Math.min.apply(Math,Object(g.a)(w(e,n).lin))>=0&&Math.min.apply(Math,Object(g.a)(w(e,n).col))>=0},drop:function(e){l((function(t){return t.filter((function(t){return t.key!==e.id}))})),a.board.placeShip(w(e,n),x(e.length)),c()}}}),[n,a]),u=Object(i.a)(s,2),p=u[0],f=p.isOver,d=(p.canDrop,u[1]);return Object(A.jsx)("div",{ref:d,onClick:r,style:{width:"25px",height:"25px",backgroundColor:f?"#195570":t}})}function B(e){var t=e.board,r=e.setBoard,n=e.showBoats,a=e.attack,c=e.placeShip,o=e.player,i=e.itemType,l=e.setDock,s=function(e){var t="white";return e.missed?t="#757575":e.ship&&!e.wasHit&&n?t="#195570":e.wasHit&&(t="#d86307"),t};return Object(A.jsx)("div",{className:y.a.board,children:t.flatMap((function(e){return e})).map((function(e){return Object(A.jsx)(k,{setBoard:r,player:o,placeShip:c,attack:function(){return a(e.coord)},color:s(e),coord:e.coord,itemType:i,setDock:l},JSON.stringify(e.coord))}))})}var P=function(e){var t=e.children;return Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{style:{color:"white",textAlign:"center"},children:"dock"}),Object(A.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",alignItems:"center",alignSelf:"center",width:"200px",height:"260px",backgroundColor:"white"},children:t})]})},N=r(118),S=r.n(N),D=r(259),M=r(256);function C(e){for(var t=e.id,r=e.length,a=e.itemType,c=Object(n.useState)(0),o=Object(i.a)(c,2),l=o[0],s=o[1],u=Object(D.a)((function(){return{type:"P1"===a?v.P1SHIP:v.P2SHIP,item:{length:r,rotate:l,id:t},collect:function(e){return{isDragging:!!e.isDragging()}}}}),[l,a,v]),p=Object(i.a)(u,3),f=(p[0],p[1]),d=p[2],b=Array(Number(r)),h=0;h<=r;h++)b.push(h);return Object(A.jsxs)("div",{style:{width:"100%"},children:[Object(A.jsx)(M.a,{connect:d,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACqNX6+AAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAGSgAwAEAAAAAQAAADIAAAAAa9KJKQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KGV7hBwAABsJJREFUeAHtmFvo32Mcx2dsjI3JDg47ZA7bZMgci5jDJIqbLRElczGJC7WUlNtdKbmQRtklN24mXGhN1IiQJmlrDEM0h40xxuv1+/3e/5599/v9f/8jtj2fev2e5/k85/fneZ7f7/+fMKFaVaAqUBWoClQFqgJVgapAVaAqUBWoClQFqgJVgcNJgaMOp83UvVQFxlyB6WM54sSxHOwIHGsee74H8mwlHbEUNSDDk069Ivrx5JfDFvi74zcdldWADE++/UXzP8hPg9thBhiMY+EYiKlv1ThqjHF6HOOdXox5NPmN4A05C7TZoF9rBqbt7fNZo9dHIKrzRJ1K/sGi+cXk98DH8FPhT0D+xDcHFoI3K+OQ7W01IL21adYotDcgmim2N0axp3T8J5A+BWfANbAJXoOTwSctwSLb3TJ499rqVYGc7F3k94IB8LtDfoCLYDLo/xm8MctgI5wJ8+FtMHh/waCal+8cbas1FDAYnmz/1lgOPk2KfBssAAOyBFaCwdoNO+Fc0PaB/RfBUvgaDIjBqzYCBfLErKavwm6DraDw38DvoL/ke8o7Oj6F99eY9Y+ANqmdDNy8TrF/4k+4Qa9X/yEO2RbeDE0N1sNXUIpe5hXdL3DxSUqdfvMJyDrymmNm/KStCj+6CZ5Gfml1qx/oPMqMpy9zNYeybjznbs7XLCuka/MGTAXf/zw/ETrC2871Zj/WS/aWdDE+LbfKwGSeVoUfDtI0hbDhneBgX0J8ZMfMnEPLgtuldjmb7jav7fWbBvsmbzoW5ver63gPHgLn1LrN3a7pvoasaxaNDMJ5cBf4hG2EHyFzDUyC7yDzp9u8jjeLOajRMB0Ry5+JT4O/UAxMxrfe8v1wAyhI6si2RLdef4m+ksyDe8TmeNqMdjLiT9fic2YwroZf4RX4BZ4Eg2F963JYMOPkdvBa+hep9jnYqXkiFELLpu1rmwjSrLMcS9vfcMwH39fSXIuL83rnjy3HTmAy99n4XOtk8Le/z8B3cAr43vsHm+tzPq1ca5lv1x74mX5p5wkereVQecgvh3PgOvCXmUFZA2oy0YD4RaRNA6N3GbwBBkNRFMGNK0AEdQKF0yaBdVqewIyZYFuXjUbcBNu6LDgCKq6/VjTHchzTOfAc+FfzTNDnT0lx/M3gE/M6pI9j207LaTSftTqn2N+1mU8d2QlX+YHpzzpbjmF82M/+HiR5AnwlrgT/+r8C1H2/C7wUFsIlYEBsuBrs+AL4887I+kePInkCXfj18CHo898I2vvtpLU5A2yfpvkb/k2wn4vUEtwIoX8uuBF9CbjCOu8GuBs+A9fm/N62l8H1axnTPifBMrDePfuf2ubanPMOeAt2gOb8j7Vyo/8w4M7herwhz4NzrQK1dz/rXdxacLE2tlNpvvFeKa11pUh9+z+BlaAgr8K1YDB97nbDClgCa2A2KI5jL4Cb4ESwfhZoiqnwBtEn4jS4AO6FPbAdNPPfggIr6i1g21vBg3IhTIUvYCO4Fsf1cN0IH8ED4LyPw1zwNvrkuT7XZPt3wKdwOnggncMnfbSmxmq+CTbDOtgGD8NSWO8ijM67kOuqz7zpxE5KMqgp0qROC/squEHwFvjcGShxMYo6BWz/KRgMMRiKIfZXdNt3M8dOnQfB4DTNoFinsLZ3PA+V4zu3efvtBM01yV5w7/tgJrguzX6jNQOifQAe5GfB9d0MM+BRJ9aM1H1QblR/Bijz+gxUWWe5lxmgZr19M7f1EoHJtizje8XT1grzYh/TrCXj4GqNVfbRp7k/b4OHQ4Ht4/g5TGTH3Qz0VtgOHlhv4S7w8KzNohdR8BlygU3xcA1qEa5XI+fo1qb0J592WVfSXmPrt0+znb6MZRvNNmW7BFRfM+i215p92t7x+9xVLnAL8yyG5i0Zv+n/m5G7BfDfXomHIYcmB8KnfbsFb4QN5sEGOB98R8s3swwcVQPWzd/NN9ChkxlKm2af4ZYzRxmAMl+Op3+8bChj+4z5o2FDFm10/GJdAS/CoWhD2Xi/fUWPfu3Gq35Vvkh9pjR/9TwDlo2YX3ZJbWs5eIOS95ZZtk2Iz01aJ/q6YRv9poNBdU+z33ibQQ95dpxTX8qmIf6U/a6SsuztcO874aVyE+YdYLTmOKXoKRuQ5Mt68wlW6k2TT7/4eqV0OSCYlkuzn1buMXnTkDYpN9OImTT1KY8kdc6WZZEpR5yUnay0lJNal3zSsn3ND12BViyaARl6994tBxtzsLqMOJQ2aft/SId6EPu161f/f9hrXUNVoCpQFagKVAWqAlWBqkBVoCpQFagKVAWOMAX+AboPnR+rnmJvAAAAAElFTkSuQmCC"}),Object(A.jsxs)("div",{ref:d,onDoubleClick:function(){s((function(e){return 0===e?90:0}))},style:{width:25*r+"px",height:"25px",display:"flex",flexWrap:"nowrap",alignItems:"center",transform:"rotate(".concat(l,"deg)"),margin:"5px"},children:[Object(A.jsxs)("div",{ref:f,style:{position:"absolute",zIndex:1e3,fontSize:"15px",marginLeft:"4px"},children:[" ","\u2316"," "]}),b.map((function(e){return Object(A.jsx)("div",{className:S.a.shipCell},e)}))]})]})}var I=r(119),_=r.n(I);function E(e){var t=e.setBoard,r=e.player,n=e.playerBoard,a=e.enemyBoard,c=e.attack,o=e.itemType,i=e.showRoom,l=e.shipsOnDock,s=e.setShipsOnDock,u=e.useGameFlow,p=e.turn;return u(!l.length&&p),Object(A.jsxs)("div",{className:_.a.wrapper,style:{display:i?"flex":"none"},children:[l.length?Object(A.jsx)(P,{children:l.map((function(e){return Object(A.jsx)(C,{id:e.key,length:e.length,itemType:o},e.key)}))}):null,Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{style:{color:"white",textAlign:"center"},children:"you"}),Object(A.jsx)(B,{board:n,setBoard:t,showBoats:!0,player:r,itemType:o,setDock:s,attack:function(){}})]}),l.length?null:Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{style:{color:"white",textAlign:"center"},children:"enemy"}),Object(A.jsx)(B,{board:a,attack:c})]})]})}var W=r.p+"static/media/anchor.a5fd9676.png",G=r(16),z=r.n(G);function F(e){var t=e.winEffect;return Object(A.jsxs)("div",{className:t?z.a.wrapperWin:z.a.wrapper,children:[[0,1,2,3,4,5,6].map((function(e,t){return Object(A.jsx)("img",{src:W,className:z.a.anchor,alt:"anchor",style:{left:200*t+"px"}},e)})),[0,1,2,3,4,5,6].map((function(e){return Object(A.jsx)("div",{className:t?z.a.win:z.a.stripe},e)}))]})}var R=r(13),L=r.n(R),T=r(10),H=r(120),X=function(e,t){return e.board.receiveAttack(t)},J=r.n(H)()((function(e){return e[Math.floor(Math.random()*e.length)]}),(function(e){return e.board.getBoard.flatMap((function(e){return e})).filter((function(e){return!e.missed&&!e.wasHit})).map((function(e){return e.coord}))})),Z=function(e){return X(e,J(e))},Y=function(e){return Object.assign({},{board:e,attack:X,play:Z})};var K=function(){var e=t();function t(){for(var e=[],t=0;t<10;t++)e.push(Array(10).fill(null));return e=e.map((function(e,t){return e.map((function(e,r){return Object.assign({coord:{lin:t,col:r},ship:null,missed:!1,wasHit:!1})}))}))}return{get getBoard(){return e},placeShip:function(t,r){for(var n=0;n<t.col.length;n++)e[t.lin[n]][t.col[n]].ship=r;return e},receiveAttack:function(t){!function(t){return null===e[t.lin][t.col].ship}(t)?(e[t.lin][t.col].ship.hit(),e[t.lin][t.col].wasHit=!0):e[t.lin][t.col].missed=!0},allSunk:function(){var t=e.flatMap((function(e){return e})).filter((function(e){return null!==e.ship})),r=t.map((function(e){return e.ship.damage})).reduce((function(e,t){return e+t}),0);return t.length>0&&0===r},reset:function(){e=t()}}},q=Y(K()),Q=Y(K()),U=function(){return Q.board.allSunk()||q.board.allSunk()},V=function(){return q.board.allSunk()&&U()?"Player2 wins!":Q.board.allSunk()&&U()?"Player1 wins!":"No winner."};var $=function(e,t){var r=T.cloneDeep(e.board.getBoard);t((function(e){return r}))};var ee=function(){var e=Object(n.useRef)(T.cloneDeep(q.board.getBoard)),t=Object(n.useRef)(T.cloneDeep(Q.board.getBoard)),r=[{key:"P1destroyer",length:4}],a=Object(n.useState)(e.current),c=Object(i.a)(a,2),o=c[0],u=c[1],p=Object(n.useState)(t.current),f=Object(i.a)(p,2),d=f[0],b=f[1],m=Object(n.useState)(r),y=Object(i.a)(m,2),g=y[0],O=y[1],v=Object(n.useState)(r),w=Object(i.a)(v,2),k=w[0],B=w[1],P=Object(n.useState)("Game mode"),N=Object(i.a)(P,2),S=N[0],D=N[1],M=Object(n.useState)(null),C=Object(i.a)(M,2),I=C[0],_=C[1],W=Object(n.useState)(!1),G=Object(i.a)(W,2),z=G[0],R=G[1],H=Object(n.useState)(!1),X=Object(i.a)(H,2),J=X[0],Z=X[1],Y=function(e){Q.attack(q,e);var t=U()?V():"Player1's turn";$(q,u),D((function(e){return t})),U()&&"multiplayer"===I?R((function(e){return!0})):R((function(e){return!1})),U()&&Z(!0)},K=function(e){q.attack(Q,e);var t=U()?V():"Player2's turn";$(Q,b),D((function(e){return t})),U()&&"multiplayer"===I?R((function(e){return!0})):R((function(e){return!1})),"multiplayer"===I&&U()?R((function(e){return!0})):R((function(e){return!1})),U()&&Z(!0)};!function(e,t){var r=Object(n.useRef)();Object(n.useEffect)((function(){r.current=e})),Object(n.useEffect)((function(){var e=setInterval((function(){r.current()}),t);return function(){return clearInterval(e)}}),[t])}((function(){if("Player2's turn"===S&&"single player"===I){var e;Q.play(q),"Player1's turn",e=T.cloneDeep(q.board.getBoard),u((function(t){return e})),D((function(e){return"Player1's turn"}))}}),2e3);var ee="Place your ships!"===S||"Player1, place your ships!"===S||"Player2, place your ships!"===S;function te(e){var t=S;console.log(e),e&&("single player"===I&&ee&&(t="Player1's turn"),"multiplayer"===I&&ee&&("Player1, place your ships!"===S?(t="Player2, place your ships!",R((function(e){return!1}))):"Player2, place your ships!"===S&&(t="Player1's turn",R((function(e){return!1}))))),Object(n.useEffect)((function(){return D((function(e){return t}))}),[t])}return console.log(J),Object(A.jsx)(l.a,{backend:s.a,children:Object(A.jsxs)("div",{className:L.a.gameWrapper,children:[Object(A.jsx)(j,{gameState:S,handleSinglePlayer:function(){Q.board.placeShip({lin:[9,9],col:[6,7]},x(2)),$(Q,b),_((function(e){return"single player"})),D((function(e){return"Place your ships!"})),R((function(e){return!0}))},handleMultiplayer:function(){_((function(e){return"multiplayer"})),D((function(e){return"Player1, place your ships!"}))},handleNewGame:function(){q.board.reset(),Q.board.reset(),u((function(e){return T.cloneDeep(q.board.getBoard)})),b((function(e){return T.cloneDeep(Q.board.getBoard)})),D((function(e){return"Game mode"})),_((function(e){return null})),R((function(e){return!1})),O((function(e){return r})),B((function(e){return r})),Z(!1)},winEffect:J}),Object(A.jsx)(F,{winEffect:J}),Object(A.jsxs)("div",{className:L.a.background,children:[z||"multiplayer"!==I||"Game mode"===S?null:Object(A.jsxs)("div",{className:L.a.lifebuoy,children:[Object(A.jsxs)("svg",{width:"200",height:"200",children:[Object(A.jsx)("circle",{r:"70",cx:"100",cy:"100",fill:"none",stroke:"#195570","stroke-width":"55"}),Object(A.jsx)("circle",{r:"70",cx:"100",cy:"100",fill:"none",stroke:"#d86307","stroke-width":"50"}),Object(A.jsx)("circle",{r:"70",cx:"100",cy:"100",fill:"none",stroke:"white","stroke-width":"50","stroke-dasharray":"20 90","stroke-dashoffset":"10"})]}),Object(A.jsx)("div",{className:L.a.buttonWrapper,onClick:function(){return R((function(e){return!0}))},children:Object(A.jsx)("div",{className:L.a.buttonFormat,children:Object(A.jsx)(h,{value:"Show Board",onClick:function(){return R((function(e){return!0}))}})})})]}),"multiplayer"===I?Object(A.jsxs)("div",{className:L.a.background,children:[Object(A.jsx)(E,{itemType:"P1",setBoard:function(){return $(q,u)},player:q,attack:"Player1's turn"===S?K:function(){},playerBoard:o,enemyBoard:d,useGameFlow:te,setGameState:D,showRoom:z&&("Player1, place your ships!"===S||"Player1's turn"===S||"Player2 wins!"===S),shipsOnDock:g,setShipsOnDock:O,turn:"Player1's turn"===S||"Player1, place your ships!"===S}),Object(A.jsx)(E,{itemType:"P2",setBoard:function(){return $(Q,b)},player:Q,attack:"Player2's turn"===S?Y:function(){},playerBoard:d,enemyBoard:o,useGameFlow:te,showRoom:z&&("Player2, place your ships!"===S||"Player2's turn"===S||"Player1 wins"===S),shipsOnDock:k,setShipsOnDock:B,turn:"Player2's turn"===S||"Player2, place your ships!"===S})]}):"single player"===I?Object(A.jsx)(E,{itemType:"P1",setBoard:function(){return $(q,u)},player:q,attack:"Player1's turn"===S?K:function(){},playerBoard:o,enemyBoard:d,useGameFlow:te,showRoom:!0,shipsOnDock:g,setShipsOnDock:O,turn:"Player1's turn"===S||"Place your ships!"===S}):void 0]})]})})};o.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(ee,{})}),document.getElementById("root"))},40:function(e,t,r){e.exports={wrapper:"messageboard_wrapper__1Rgyx",title:"messageboard_title__2dwke",win:"messageboard_win__1cb4j"}}},[[251,1,2]]]);
//# sourceMappingURL=main.240ceb95.chunk.js.map