(function(){"use strict";var t={8209:function(t,e,i){var a=i(7195),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"min-h-vh flex flex-column align-center bg-page h-full gap-10 pt-6",attrs:{id:"app"}},[e("MainHeader"),e("StandingTable",{on:{onCelebrate:t.toggleCelebrate}}),e("MainFooter"),e("CelebrateWinner",{attrs:{winner:t.winner},on:{toggleCelebrate:t.toggleCelebrate}})],1)},s=[],r=function(){var t=this;t._self._c;return t._m(0)},o=[function(){var t=this,e=t._self._c;return e("header",{staticClass:"flex align-center justify-center bg-white box-3d-shadow-default page-content-width p-4"},[e("img",{attrs:{src:i(8831),alt:"Premier League Logo"}})])}],g={name:"MainHeader"},d=g,l=i(1001),m=(0,l.Z)(d,r,o,!1,null,"a9bece36",null),c=m.exports,u=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"w-full bg-primary"})},p=[],h={name:"MainFooter"},L=h,w=(0,l.Z)(L,u,p,!1,null,"70b5dace",null),b=w.exports,A=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-grow w-full flex flex-column align-center"},[e("div",{staticClass:"box-3d-shadow-default page-content-width w-full"},[e("div",{staticClass:"overflow-x-auto"},[e("table",{staticClass:"w-full"},[t._m(0),e("tbody",t._l(t.tableData,(function(i,a){return e("tr",{key:a,staticClass:"h-7",class:{skeleton:t.isLoading,"trophy-cursor":0===a&&!t.isLoading},on:{click:function(e){0===a&&t.$emit("onCelebrate",i)}}},[e("td",{staticClass:"text-center p-2"},[t._v(t._s(i.intRank))]),e("td",[t.isLoading?t._e():e("div",{staticClass:"flex align-center p-2 w-full"},[i.strTeamBadge?e("img",{staticClass:"mr-3",attrs:{src:i.strTeamBadge,alt:"Team Badge",width:"30px"}}):t._e(),t._v(" "+t._s(i.strTeam)+" ")])]),e("td",{staticClass:"text-center hide-max-md p-2"},[e("div",t._l(i.strForm?.split(""),(function(i,a){return e("img",{key:a,staticClass:"ml-1",attrs:{src:t.getResultBadge(i),alt:t.getResultBadgeAlt(i),width:"20px"}})})),0)]),e("td",{staticClass:"text-center p-2"},[t._v(t._s(i.intPlayed))]),e("td",{staticClass:"text-center p-2"},[t._v(t._s(i.intWin))]),e("td",{staticClass:"text-center p-2"},[t._v(t._s(i.intDraw))]),e("td",{staticClass:"text-center p-2"},[t._v(t._s(i.intLoss))]),e("td",{staticClass:"text-center p-2"},[t._v(t._s(i.intGoalsFor))]),e("td",{staticClass:"text-center p-2"},[t._v(t._s(i.intGoalsAgainst))]),e("td",{staticClass:"text-center p-2"},[t._v(t._s(i.intGoalDifference))]),e("td",{staticClass:"text-center p-2"},[t._v(t._s(i.intPoints))])])})),0)]),e("div",{staticClass:"flex align-center justify-center p-4"},[e("PrimaryButton",{attrs:{disabled:!t.hasMorePages||t.isLoadingNextPage},on:{click:t.loadNextPage}},[t._v(" "+t._s(t.isLoadingNextPage?"Loading...":t.hasMorePages?"Load More":"No more items :)")+" ")])],1)])])])},f=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",{staticClass:"bg-primary c-white"},[e("th",{staticClass:"p-2"},[t._v("#")]),e("th",{staticClass:"p-2 text-left max-w-full min-w-180"},[t._v("Club")]),e("th",{staticClass:"p-2 w-200 hide-max-md"},[t._v("Form")]),e("th",{staticClass:"p-2"},[t._v("GP")]),e("th",{staticClass:"p-2"},[t._v("W")]),e("th",{staticClass:"p-2"},[t._v("D")]),e("th",{staticClass:"p-2"},[t._v("L")]),e("th",{staticClass:"p-2"},[t._v("GF")]),e("th",{staticClass:"p-2"},[t._v("GA")]),e("th",{staticClass:"p-2"},[t._v("GD")]),e("th",{staticClass:"p-2"},[t._v("Pts")])])])}],I=JSON.parse('{"K":[{"idStanding":"322876","intRank":"1","idTeam":"133613","strTeam":"Manchester City","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/vwpvry1467462651.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"WLWLW","strDescription":"Promotion - Champions League (Group Stage)","intPlayed":"38","intWin":"27","intLoss":"6","intDraw":"5","intGoalsFor":"83","intGoalsAgainst":"32","intGoalDifference":"51","intPoints":"86","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322877","intRank":"2","idTeam":"133612","strTeam":"Manchester United","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/xzqdr11517660252.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"WDLLW","strDescription":"Promotion - Champions League (Group Stage)","intPlayed":"38","intWin":"21","intLoss":"6","intDraw":"11","intGoalsFor":"73","intGoalsAgainst":"44","intGoalDifference":"29","intPoints":"74","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322878","intRank":"3","idTeam":"133602","strTeam":"Liverpool","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/uvxuqq1448813372.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"WWWWW","strDescription":"Promotion - Champions League (Group Stage)","intPlayed":"38","intWin":"20","intLoss":"9","intDraw":"9","intGoalsFor":"68","intGoalsAgainst":"42","intGoalDifference":"26","intPoints":"69","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322879","intRank":"4","idTeam":"133610","strTeam":"Chelsea","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"LWLWW","strDescription":"Promotion - Champions League (Group Stage)","intPlayed":"38","intWin":"19","intLoss":"9","intDraw":"10","intGoalsFor":"58","intGoalsAgainst":"36","intGoalDifference":"22","intPoints":"67","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322880","intRank":"5","idTeam":"133626","strTeam":"Leicester","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/xtxwtu1448813356.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"LLWLD","strDescription":"Promotion - Europa League (Group Stage)","intPlayed":"38","intWin":"20","intLoss":"12","intDraw":"6","intGoalsFor":"68","intGoalsAgainst":"50","intGoalDifference":"18","intPoints":"66","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322881","intRank":"6","idTeam":"133636","strTeam":"West Ham","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/yutyxs1467459956.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"WWDLW","strDescription":"Promotion - Europa League (Group Stage)","intPlayed":"38","intWin":"19","intLoss":"11","intDraw":"8","intGoalsFor":"62","intGoalsAgainst":"47","intGoalDifference":"15","intPoints":"65","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322882","intRank":"7","idTeam":"133616","strTeam":"Tottenham","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/dfyfhl1604094109.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"WLWLW","strDescription":"Promotion - Europa Conference League (Qualification)","intPlayed":"38","intWin":"18","intLoss":"12","intDraw":"8","intGoalsFor":"68","intGoalsAgainst":"45","intGoalDifference":"23","intPoints":"62","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322883","intRank":"8","idTeam":"133604","strTeam":"Arsenal","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/uyhbfe1612467038.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"WWWWW","strDescription":"","intPlayed":"38","intWin":"18","intLoss":"13","intDraw":"7","intGoalsFor":"55","intGoalsAgainst":"39","intGoalDifference":"16","intPoints":"61","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322884","intRank":"9","idTeam":"133635","strTeam":"Leeds","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/g0eqzw1598804097.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"WWWWL","strDescription":"","intPlayed":"38","intWin":"18","intLoss":"15","intDraw":"5","intGoalsFor":"62","intGoalsAgainst":"54","intGoalDifference":"8","intPoints":"59","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322885","intRank":"10","idTeam":"133615","strTeam":"Everton","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/eqayrf1523184794.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"LWLDW","strDescription":"","intPlayed":"38","intWin":"17","intLoss":"13","intDraw":"8","intGoalsFor":"47","intGoalsAgainst":"48","intGoalDifference":"-1","intPoints":"59","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322886","intRank":"11","idTeam":"133601","strTeam":"Aston Villa","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/aofmzk1565427581.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"WWLDL","strDescription":"","intPlayed":"38","intWin":"16","intLoss":"15","intDraw":"7","intGoalsFor":"55","intGoalsAgainst":"46","intGoalDifference":"9","intPoints":"55","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322887","intRank":"12","idTeam":"134777","strTeam":"Newcastle","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/lhwuiz1621593302.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"WWLWL","strDescription":"","intPlayed":"38","intWin":"12","intLoss":"17","intDraw":"9","intGoalsFor":"46","intGoalsAgainst":"62","intGoalDifference":"-16","intPoints":"45","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322888","intRank":"13","idTeam":"133599","strTeam":"Wolves","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/u9qr031621593327.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"LLLWD","strDescription":"","intPlayed":"38","intWin":"12","intLoss":"17","intDraw":"9","intGoalsFor":"36","intGoalsAgainst":"52","intGoalDifference":"-16","intPoints":"45","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322889","intRank":"14","idTeam":"133632","strTeam":"Crystal Palace","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/rytxyw1448813222.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"LLWLW","strDescription":"","intPlayed":"38","intWin":"12","intLoss":"18","intDraw":"8","intGoalsFor":"41","intGoalsAgainst":"66","intGoalDifference":"-25","intPoints":"44","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322890","intRank":"15","idTeam":"134778","strTeam":"Southampton","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/ggqtd01621593274.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"LLWWL","strDescription":"","intPlayed":"38","intWin":"12","intLoss":"19","intDraw":"7","intGoalsFor":"47","intGoalsAgainst":"68","intGoalDifference":"-21","intPoints":"43","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322891","intRank":"16","idTeam":"133619","strTeam":"Brighton","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/ywypts1448810904.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"LWDLW","strDescription":"","intPlayed":"38","intWin":"9","intLoss":"15","intDraw":"14","intGoalsFor":"40","intGoalsAgainst":"46","intGoalDifference":"-6","intPoints":"41","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322892","intRank":"17","idTeam":"133623","strTeam":"Burnley","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/sqrttx1448811003.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"LLLWL","strDescription":"","intPlayed":"38","intWin":"10","intLoss":"19","intDraw":"9","intGoalsFor":"33","intGoalsAgainst":"55","intGoalDifference":"-22","intPoints":"39","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322893","intRank":"18","idTeam":"133600","strTeam":"Fulham","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/xwwvyt1448811086.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"LDLLL","strDescription":"Relegation - Championship","intPlayed":"38","intWin":"5","intLoss":"20","intDraw":"13","intGoalsFor":"27","intGoalsAgainst":"53","intGoalDifference":"-26","intPoints":"28","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322894","intRank":"19","idTeam":"133611","strTeam":"West Brom","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/rsvuxw1448813527.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"LLLLD","strDescription":"Relegation - Championship","intPlayed":"38","intWin":"5","intLoss":"22","intDraw":"11","intGoalsFor":"35","intGoalsAgainst":"76","intGoalDifference":"-41","intPoints":"26","dateUpdated":"2021-06-17 23:00:11"},{"idStanding":"322895","intRank":"20","idTeam":"133811","strTeam":"Sheffield United","strTeamBadge":"https://www.thesportsdb.com/images/media/team/badge/qutsut1424032614.png/tiny","idLeague":"4328","strLeague":"English Premier League","strSeason":"2020-2021","strForm":"WLWLL","strDescription":"Relegation - Championship","intPlayed":"38","intWin":"7","intLoss":"29","intDraw":"2","intGoalsFor":"20","intGoalsAgainst":"63","intGoalDifference":"-43","intPoints":"23","dateUpdated":"2021-06-17 23:00:11"}]}');async function G(t=0,e=5){const i=t+e,a=i<I.K.length;return new Promise((e=>{setTimeout((()=>{e({table:I.K.slice(t,i),hasMorePages:a})}),1e3)}))}var P=function(){var t=this,e=t._self._c;return e("button",{staticClass:"fs-1 bg-primary c-white pt-2 pb-2 pl-4 pr-4",attrs:{disabled:t.isDisabled},on:{click:t.handleClick}},[t._t("default")],2)},D=[],C={props:{isDisabled:Boolean},methods:{handleClick(){this.isDisabled||this.$emit("click")}}},v=C,y=(0,l.Z)(v,P,D,!1,null,"4ceb3c7c",null),T=y.exports;const W="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iTG9zcyI+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiNFQTQzMzUiIGN4PSI4IiBjeT0iOCIgcj0iOCI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjAwMDAwMCwgOC4wMDAwMDApIHJvdGF0ZSgtMzE1LjAwMDAwMCkgdHJhbnNsYXRlKC04LjAwMDAwMCwgLTguMDAwMDAwKSAiIHBvaW50cz0iMTIgOC44IDguOCA4LjggOC44IDEyIDcuMiAxMiA3LjIgOC44IDQgOC44IDQgNy4yIDcuMiA3LjIgNy4yIDQgOC44IDQgOC44IDcuMiAxMiA3LjIiPjwvcG9seWdvbj4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=",S="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iRHJhdyI+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiM5QUEwQTYiIGN4PSI4IiBjeT0iOCIgcj0iOCI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjUgNyAxMSA3IDExIDkgNSA5Ij48L3BvbHlnb24+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K",x="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2luIj4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzNBQTc1NyIgY3g9IjgiIGN5PSI4IiByPSI4Ij48L2NpcmNsZT4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSI2LjQgOS43NiA0LjMyIDcuNjggMy4yIDguOCA2LjQgMTIgMTIuOCA1LjYgMTEuNjggNC40OCI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==",Z={W:{img:W,alt:"Win"},D:{img:S,alt:"Draw"},L:{img:x,alt:"Loss"}};var N={components:{PrimaryButton:T},data(){return{data:[],isLoading:!1,itemsOnFirstLoad:5,hasMorePages:!0,isLoadingNextPage:!1}},async created(){this.isLoading=!0,await this.getNextStandingData(this.itemsOnFirstLoad),this.isLoading=!1},computed:{tableData:function(){const t=Array(this.itemsOnFirstLoad).fill({});return this.isLoading?t:this.data}},methods:{getResultBadge(t){return Z[t].img},getResultBadgeAlt(t){return Z[t].alt},async getNextStandingData(t){const e=await G(this.data.length,t);this.data=[...this.data,...e.table],this.hasMorePages=e.hasMorePages},async loadNextPage(){this.isLoadingNextPage=!0,await this.getNextStandingData(3),this.isLoadingNextPage=!1},celebrate(){alert("You are the champion!")}}},B=N,R=(0,l.Z)(B,A,f,!1,null,"45bf14ae",null),j=R.exports,M=function(){var t=this,e=t._self._c;return t.winner?e("div",{staticClass:"fixed inset-0 flex flex-column align-center justify-center"},[e("div",{staticClass:"bg-white flex flex-column align-center justify-center animation p-3",class:{animate:t.animationOn}},[e("h1",{staticClass:"text-center fs-7 fs-sm-7"},[t._v("🏆 Celebrate the Winner! 🏆")]),e("div",{staticClass:"flex flex-column align-center text-center mt-5"},[t.winner.strTeamBadge?e("img",{attrs:{src:t.winner.strTeamBadge,alt:"Team Badge",width:"50px",height:"50px"}}):t._e(),e("h1",{staticClass:"p-2 fs-7 fs-sm-7"},[t._v(t._s(t.winner.strTeam))])])])]):t._e()},H=[];const k=5e3;var F={components:{},data(){return{animationOn:!1}},props:{winner:Object},watch:{winner:{async handler(t){t&&(setTimeout((()=>{this.animationOn=t}),100),setTimeout((()=>{this.$emit("toggleCelebrate",null)}),k))}}}},z=F,O=(0,l.Z)(z,M,H,!1,null,"1b54382c",null),K=O.exports,J={name:"App",components:{MainHeader:c,MainFooter:b,StandingTable:j,CelebrateWinner:K},data(){return{winner:null}},methods:{async toggleCelebrate(t){this.winner=t}}},U=J,q=(0,l.Z)(U,n,s,!1,null,null,null),X=q.exports;a.ZP.config.productionTip=!1,new a.ZP({render:t=>t(X)}).$mount("#app")},8831:function(t){t.exports="data:image/png;base64,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"}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,a,n,s){if(!a){var r=1/0;for(l=0;l<t.length;l++){a=t[l][0],n=t[l][1],s=t[l][2];for(var o=!0,g=0;g<a.length;g++)(!1&s||r>=s)&&Object.keys(i.O).every((function(t){return i.O[t](a[g])}))?a.splice(g--,1):(o=!1,s<r&&(r=s));if(o){t.splice(l--,1);var d=n();void 0!==d&&(e=d)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[a,n,s]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,s,r=a[0],o=a[1],g=a[2],d=0;if(r.some((function(e){return 0!==t[e]}))){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(g)var l=g(i)}for(e&&e(a);d<r.length;d++)s=r[d],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(l)},a=self["webpackChunkraketech_test_standing_table"]=self["webpackChunkraketech_test_standing_table"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(8209)}));a=i.O(a)})();
//# sourceMappingURL=app.64d3c51b.js.map