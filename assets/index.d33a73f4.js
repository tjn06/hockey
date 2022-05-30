import{r as y,o as i,c as r,a as e,b as p,w as m,F as g,d as v,p as b,e as I,f as u,t as n,g as R,h as G,i as A,j as N,k as T,l as $,m as B}from"./vendor.44856b5c.js";const E=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function d(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(o){if(o.ep)return;o.ep=!0;const s=d(o);fetch(o.href,s)}};E();var w=(t,a)=>{const d=t.__vccOpts||t;for(const[f,o]of a)d[f]=o;return d};const x={components:{},created(){this.$watch(()=>this.$route.fullPath,(t,a)=>{a==="undefined"?this.$store.commit("setLastRoute","/"):this.$store.commit("setLastRoute",a)},{immediate:!0})},data(){return{propNr:10}},computed:{cFromState:function(){return this.$store.state.counter},visitedPlayers:function(){return this.$store.state.visitedPlayers.slice(0,9)},visitedSwedishPlayers:function(){return this.$store.state.visitedSwedishPlayers.slice(0,4)}},methods:{increment(){this.propNr++}}},P=t=>(b("data-v-012144d8"),t=t(),I(),t),C=P(()=>e("h3",null,[e("span",{class:"yellow"},"JUST"),u("NHL"),e("span",{class:"gray"},"STATS")],-1)),M=u("HOME"),H={class:"router-container"},W={class:"aside-container"},D=P(()=>e("header",null,[e("h2",null,"VISITED")],-1)),F={class:"aside-border"},Y=P(()=>e("h3",null,"ALL PLAYERS >",-1)),O=P(()=>e("h4",null,"LAST 10",-1)),U={class:"aside-border"},K=P(()=>e("h3",null,"SWEDISH PLAYERS >",-1)),j=P(()=>e("h4",null,"LAST 5",-1));function q(t,a,d,f,o,s){const c=y("RouterLink"),h=y("RouterView"),l=y("Router-Link");return i(),r(g,null,[e("nav",null,[C,e("button",null,[p(c,{to:"/"},{default:m(()=>[M]),_:1})])]),e("main",null,[e("div",H,[p(h)]),e("div",W,[D,e("section",null,[e("aside",F,[p(l,{to:"/visitedplayers/all"},{default:m(()=>[Y,O]),_:1}),e("ul",null,[(i(!0),r(g,null,v(s.visitedPlayers,_=>(i(),r("li",{key:_.id},[p(l,{to:`/playerstats/${_.id}`},{default:m(()=>[u(n(_.playerName)+", "+n(_.currentTeam),1)]),_:2},1032,["to"])]))),128))])]),e("aside",U,[p(l,{to:"/visitedplayers/swe"},{default:m(()=>[K,j]),_:1}),e("ul",null,[(i(!0),r(g,null,v(s.visitedSwedishPlayers,_=>(i(),r("li",{key:_.id},[p(l,{to:`/playerstats/${_.id}`},{default:m(()=>[u(n(_.playerName)+", "+n(_.currentTeam),1)]),_:2},1032,["to"])]))),128))])])])])])],64)}var J=w(x,[["render",q],["__scopeId","data-v-012144d8"]]);const z={created(){this.getConferences()},methods:{getConferences(){R.get("https://statsapi.web.nhl.com/api/v1/conferences").then(t=>{this.conferences=t.data.conferences}).catch(t=>{console.log(t)})}},data(){return{conferences:[]}}},Q=t=>(b("data-v-6590af8c"),t=t(),I(),t),X=Q(()=>e("header",null,[e("h1",null,[e("span",{class:"yellow"},"I "),u("CONFERENCES")])],-1));function Z(t,a,d,f,o,s){const c=y("Router-Link");return i(),r(g,null,[X,e("section",null,[(i(!0),r(g,null,v(o.conferences,h=>(i(),r("button",{key:h.id},[p(c,{to:`/teams/${h.name}`},{default:m(()=>[u(n(h.name.toUpperCase()),1)]),_:2},1032,["to"])]))),128))])],64)}var tt=w(z,[["render",Z],["__scopeId","data-v-6590af8c"]]);const et={computed:{lastRoute:function(){return this.$store.state.lastRoute}},props:{routeProp:{type:String,default:null}}},st=u(" Button ");function at(t,a,d,f,o,s){return s.lastRoute?(i(),r("button",{key:0,type:"button",onClick:a[0]||(a[0]=c=>t.$router.push(d.routeProp?d.routeProp:s.lastRoute))},[G(t.$slots,"default",{},()=>[st],!0)])):A("",!0)}var k=w(et,[["render",at],["__scopeId","data-v-251a2026"]]);const lt={components:{RouterBackButton:k},data(){return{error:null,teams:null,firstColumn:null,secondColumn:null,loading:!1}},created(){this.$watch(()=>this.$route.params.conference,(t,a)=>{t&&this.getTeams(this.$route.params.teamId)},{immediate:!0})},computed:{oppositeVisitedRoute:function(){return this.oppositeConfernece()?"/teams/Western":"/teams/Eastern"},oppositeVisitedName:function(){return this.oppositeConfernece()?"WESTERN":"EASTERN"},splitIndexes:function(){if(this.teams){let t=this.teams.length%2,a=this.teams.length/2;return this.teams.length===1?{fa:1,fb:2}:t===0?{fa:a,fb:a}:{fa:Math.ceil(a),fb:-Math.floor(a)}}return null}},methods:{oppositeConfernece(){return this.$route.params.conference==="Eastern"},filterConferenceTeams(t){return t.filter(a=>a.conference.name===this.$route.params.conference)},getTeams(){this.error=this.teams=null,this.loading=!0,R.get("https://statsapi.web.nhl.com/api/v1/teams").then(t=>{console.log("Teams",t),this.teams=this.filterConferenceTeams(t.data.teams)}).catch(t=>{console.log(t)})}}},nt=t=>(b("data-v-6c7bc92c"),t=t(),I(),t),ot=nt(()=>e("h1",null,[e("span",{class:"yellow"},"I "),u("TEAMS")],-1)),it=u(" BACK "),rt={key:0};function ut(t,a,d,f,o,s){const c=y("RouterBackButton"),h=y("Router-Link");return i(),r(g,null,[e("header",null,[ot,e("div",null,[p(c,{"route-prop":s.oppositeVisitedRoute},{default:m(()=>[u(n(s.oppositeVisitedName),1)]),_:1},8,["route-prop"]),p(c,null,{default:m(()=>[it]),_:1})])]),e("h3",null,n(t.$route.params.conference.toUpperCase())+" "+n(Object.keys(t.$route.params)[0].toUpperCase()),1),o.teams?(i(),r("ul",rt,[e("section",null,[(i(!0),r(g,null,v(o.teams.slice(0,s.splitIndexes.fa),l=>(i(),r("li",{key:l.id},[p(h,{to:`/team/${l.id}`},{default:m(()=>[u(n(l.name),1)]),_:2},1032,["to"])]))),128))]),e("section",null,[(i(!0),r(g,null,v(o.teams.slice(s.splitIndexes.fb),l=>(i(),r("li",{key:l.id},[p(h,{to:`/team/${l.id}`},{default:m(()=>[u(n(l.name),1)]),_:2},1032,["to"])]))),128))])])):A("",!0)],64)}var ct=w(lt,[["render",ut],["__scopeId","data-v-6c7bc92c"]]);const dt={components:{RouterBackButton:k},data(){return{error:null,teamName:null,players:null,loading:!1}},created(){this.$watch(()=>this.$route.params.teamId,(t,a)=>{t&&this.getTeam(this.$route.params.teamId)},{immediate:!0})},computed:{splitIndexes:function(){if(this.players){let t=this.players.length%2,a=this.players.length/2;return this.players.length===1?{fa:1,fb:2}:t===0?{fa:a,fb:a}:{fa:Math.ceil(a),fb:-Math.floor(a)}}return null}},methods:{getTeam(t){this.error=this.players=null,this.loading=!0,R.get(`https://statsapi.web.nhl.com/api/v1/teams/${t}?expand=team.roster`).then(a=>{console.log("Playersroster",a),this.teamName=a.data.teams[0].name.toUpperCase(),this.players=a.data.teams[0].roster.roster}).catch(a=>{console.log(a)})}}},ht=t=>(b("data-v-99325bc0"),t=t(),I(),t),_t=ht(()=>e("h1",null,[e("span",{class:"yellow"},"I "),u("TEAM")],-1)),pt=u(" BACK "),ft={key:0};function mt(t,a,d,f,o,s){const c=y("RouterBackButton"),h=y("Router-Link");return i(),r(g,null,[e("header",null,[_t,p(c,null,{default:m(()=>[pt]),_:1})]),e("h3",null,n(this.teamName)+" PLAYERS",1),o.players?(i(),r("ul",ft,[e("section",null,[(i(!0),r(g,null,v(o.players.slice(0,s.splitIndexes.fa),l=>(i(),r("li",{key:l.person.id},[p(h,{to:`/playerstats/${l.person.id}`},{default:m(()=>[u(n(l.person.fullName)+", ",1),e("strong",null,n(l.position.name),1)]),_:2},1032,["to"])]))),128))]),e("section",null,[(i(!0),r(g,null,v(o.players.slice(s.splitIndexes.fb),l=>(i(),r("li",{key:l.person.id},[p(h,{to:`/playerstats/${l.person.id}`},{default:m(()=>[u(n(l.person.fullName)+", ",1),e("strong",null,n(l.position.name),1)]),_:2},1032,["to"])]))),128))])])):A("",!0)],64)}var gt=w(dt,[["render",mt],["__scopeId","data-v-99325bc0"]]);const yt={components:{RouterBackButton:k},computed:{playerHeight:function(){if(this.info.height){let t=this.info.height.replace(/['"]+/g,"").split(" ");return(t[0]/.032808+t[1]/.3937).toFixed(0)+"cm"}else return null},playerWeight:function(){return this.info.weight?(this.info.weight/2.20462262185).toFixed(0)+"kg":null},isGoalie:function(){return this.info.primaryPosition.code?this.info.primaryPosition.code==="G":null},totalStats:function(){if(this.stats){let t={season:"All seasons",games:0,goals:0,assists:0,points:0,plusMinus:0,pim:0,shots:0};for(let a=0;a<this.stats.length;a++)t.games+=this.stats[a][0].stat.games,t.goals+=this.stats[a][0].stat.goals,t.assists+=this.stats[a][0].stat.assists,t.points+=this.stats[a][0].stat.points,t.plusMinus+=this.stats[a][0].stat.plusMinus,t.pim+=this.stats[a][0].stat.pim,t.shots+=this.stats[a][0].stat.shots;return t}else return null},totalStatsGoalie:function(){if(this.stats){let t={season:"All seasons",games:0,wins:0,losses:0,shotsAgainst:0,goalsAgainst:0,goalAgainstAverage:0,saves:0};for(let a=0;a<this.stats.length;a++)t.games+=this.stats[a][0].stat.games,t.wins+=this.stats[a][0].stat.wins,t.losses+=this.stats[a][0].stat.losses,t.shotsAgainst+=this.stats[a][0].stat.shotsAgainst,t.goalsAgainst+=this.stats[a][0].stat.goalsAgainst,this.stats[a][0].stat.goalAgainstAverage?t.goalAgainstAverage+=this.stats[a][0].stat.goalAgainstAverage:t.goalAgainstAverage+=0,t.saves+=this.stats[a][0].stat.saves;return t.goalAgainstAverage=t.goalAgainstAverage/this.stats.length,console.log("stats in gaa "+t.goalAgainstAverage+"gaatype "+typeof t.goalAgainstAverage),t}else return null}},data(){return{error:null,loading:!1,stats:null,info:null}},created(){this.$watch(()=>this.$route.params.playerId,(t,a)=>{t&&this.getPlayerStats(this.$route.params.playerId)},{immediate:!0})},methods:{redoSeasonYears(t){return t.substring(0,4)+"-"+t.substring(4,8)},getPlayerStats(t){let a=`https://statsapi.web.nhl.com/api/v1/people/${t}`,d="/stats/?stats=statsSingleSeason&season=";const f=[a],o=1997,s=Number(new Date().getFullYear().toString().substring(2))+(2e3-o);for(let l=0;l<s;l++){let _=o+l,L=_+1;f.push(a+d+_+""+L)}let c={playerInfo:null,allSeasonsStats:[]},h=[];f.forEach(function(l){h.push(R.get(l))}),Promise.all(h).then(l=>{l.forEach((_,L)=>{if(L===0){const V=_.data.people[0];c.playerInfo=V}else{const V=_.data.stats[0].splits;c.allSeasonsStats.unshift(V)}}),this.info=c.playerInfo,this.stats=c.allSeasonsStats.filter(_=>_.length!==0),this.$store.dispatch({type:"addVisitedPlayers",id:this.info.id,playerName:this.info.fullName,currentTeam:this.info.currentTeam.name,isSwedish:this.info.nationality=="SWE"})})}}},S=t=>(b("data-v-7721c49d"),t=t(),I(),t),vt=S(()=>e("h1",null,[e("span",{class:"yellow"},"I "),u(" PLAYERSTATS")],-1)),St=u(" BACK "),At={key:0},wt=S(()=>e("span",{class:"yellow-abel"}," | ",-1)),bt=S(()=>e("span",{class:"yellow-abel"}," | ",-1)),It={key:0},Pt={key:0,class:"player-info"},Rt={class:"row-info"},kt={class:"spacing-info"},Lt=S(()=>e("span",null,"Born:",-1)),Vt={class:"spacing-info"},Gt=S(()=>e("span",null,"Birthplace:",-1)),Nt={class:"row-info"},Tt={class:"spacing-info"},$t=S(()=>e("span",null,"Weight:",-1)),Bt={class:"spacing-info"},Et=S(()=>e("span",null,"Height:",-1)),xt={key:0},Ct={id:"tb-head"},Mt=S(()=>e("th",null,"Season",-1)),Ht=S(()=>e("th",null,"GP",-1)),Wt={id:"tb-total-stats"};function Dt(t,a,d,f,o,s){var h;const c=y("RouterBackButton");return i(),r(g,null,[e("header",null,[vt,p(c,null,{default:m(()=>[St]),_:1})]),o.info?(i(),r("section",At,[e("h3",null,[u(n(o.info.fullName)+" ",1),wt,u(" #"+n(o.info.primaryNumber)+" ",1),bt,u(" "+n(o.info.primaryPosition.name)+" ",1),o.info.captain?(i(),r("span",It," | Captain")):A("",!0)]),o.info?(i(),r("article",Pt,[e("div",Rt,[e("div",kt,[Lt,e("span",null,n(o.info.birthDate),1)]),e("div",Vt,[Gt,e("span",null,n(o.info.nationality)+", "+n(o.info.birthStateProvince)+n(o.info.birthStateProvince?", ":null)+n(o.info.birthCity),1)])]),e("div",Nt,[e("div",Tt,[$t,e("span",null,n(s.playerWeight),1)]),e("div",Bt,[Et,e("span",null,n(s.playerHeight),1)])])])):A("",!0)])):A("",!0),e("div",null,[o.stats?(i(),r("table",xt,[e("tr",Ct,[Mt,Ht,e("th",null,n(s.isGoalie?"W":"G"),1),e("th",null,n(s.isGoalie?"L":"A"),1),e("th",null,n(s.isGoalie?"SA":"PTS"),1),e("th",null,n(s.isGoalie?"GA":"+/-"),1),e("th",null,n(s.isGoalie?"GAA":"PIM"),1),e("th",null,n(s.isGoalie?"S":"Shots"),1)]),(i(!0),r(g,null,v(o.stats,l=>{var _;return i(),r("tr",{class:"tb-stats",key:l.season},[e("td",null,n(s.redoSeasonYears(l[0].season)),1),e("td",null,n(l[0].stat.games),1),e("td",null,n(s.isGoalie?l[0].stat.wins:l[0].stat.goals),1),e("td",null,n(s.isGoalie?l[0].stat.losses:l[0].stat.assists),1),e("td",null,n(s.isGoalie?l[0].stat.shotsAgainst:l[0].stat.points),1),e("td",null,n(s.isGoalie?l[0].stat.goalsAgainst:l[0].stat.plusMinus),1),e("td",null,n(s.isGoalie?(_=l[0].stat.goalAgainstAverage)==null?void 0:_.toFixed(2):l[0].stat.pim),1),e("td",null,n(s.isGoalie?l[0].stat.saves:l[0].stat.shots),1)])}),128)),e("tr",Wt,[e("td",null,n(s.isGoalie?s.totalStatsGoalie.season:s.totalStats.season),1),e("td",null,n(s.isGoalie?s.totalStatsGoalie.games:s.totalStats.games),1),e("td",null,n(s.isGoalie?s.totalStatsGoalie.wins:s.totalStats.goals),1),e("td",null,n(s.isGoalie?s.totalStatsGoalie.losses:s.totalStats.assists),1),e("td",null,n(s.isGoalie?s.totalStatsGoalie.shotsAgainst:s.totalStats.points),1),e("td",null,n(s.isGoalie?s.totalStatsGoalie.goalsAgainst:s.totalStats.plusMinus),1),e("td",null,n(s.isGoalie?(h=s.totalStatsGoalie.goalAgainstAverage)==null?void 0:h.toFixed(2):s.totalStats.pim),1),e("td",null,n(s.isGoalie?s.totalStatsGoalie.saves:s.totalStats.shots),1)])])):A("",!0)])],64)}var Ft=w(yt,[["render",Dt],["__scopeId","data-v-7721c49d"]]);const Yt={components:{RouterBackButton:k},data(){return{error:null,teamName:null,loading:!1}},computed:{oppositeVisitedRoute:function(){return this.oppositeCategory()?"/visitedplayers/swe":"/visitedplayers/all"},oppositeVisitedName:function(){return this.oppositeCategory()?"SWEDISH":"ALL"},splitIndexes:function(){if(this.players){let t=this.players.length%2,a=this.players.length/2;return this.players.length===1?{fa:1,fb:2}:t===0?{fa:a,fb:a}:{fa:Math.ceil(a),fb:-Math.floor(a)}}return null},playersHeader:function(){return this.$route.params.category==="all"?"ALL PLAYERS":this.$route.params.category==="swe"?"VISTED SWEDISH PLAYERS":"ALL PLAYERS"},players:function(){return this.$route.params.category==="all"?this.$store.state.visitedPlayers:this.$route.params.category==="swe"?this.$store.state.visitedSwedishPlayers:this.$store.state.visitedPlayers}},created(){},methods:{oppositeCategory(){return this.$route.params.category==="all"}}},Ot=t=>(b("data-v-0adbfb70"),t=t(),I(),t),Ut=Ot(()=>e("h1",null,[e("span",{class:"yellow"},"I "),u("VISITED")],-1)),Kt=u(" BACK "),jt={key:0};function qt(t,a,d,f,o,s){const c=y("RouterBackButton"),h=y("Router-Link");return i(),r(g,null,[e("header",null,[Ut,e("div",null,[p(c,null,{default:m(()=>[Kt]),_:1}),p(c,{"route-prop":s.oppositeVisitedRoute},{default:m(()=>[u(n(s.oppositeVisitedName),1)]),_:1},8,["route-prop"])])]),e("div",null,[e("h3",null,n(s.playersHeader),1)]),s.players?(i(),r("ul",jt,[e("section",null,[(i(!0),r(g,null,v(s.players.slice(0,s.splitIndexes.fa),l=>(i(),r("li",{key:l.id},[p(h,{to:`/playerstats/${l.id}`},{default:m(()=>[u(n(l.playerName)+", ",1),e("strong",null,n(l.currentTeam),1)]),_:2},1032,["to"])]))),128))]),e("section",null,[(i(!0),r(g,null,v(s.players.slice(s.splitIndexes.fb),l=>(i(),r("li",{key:l.id},[p(h,{to:`/playerstats/${l.id}`},{default:m(()=>[u(n(l.playerName)+", ",1),e("strong",null,n(l.currentTeam),1)]),_:2},1032,["to"])]))),128))])])):A("",!0)],64)}var Jt=w(Yt,[["render",qt],["__scopeId","data-v-0adbfb70"]]),zt=N({history:T(),routes:[{component:ct,path:"/teams/:conference"},{component:gt,path:"/team/:teamId"},{component:Ft,path:"/playerstats/:playerId"},{component:Jt,path:"/visitedplayers/:category"},{component:tt,path:"/"}]});const Qt={setVisitedPlayer(t,a){t.visitedPlayers.unshift(a)},setVisitedSwedishPlayer(t,a){t.visitedSwedishPlayers.unshift(a)},setLastRoute(t,a){t.lastRoute=a}},Xt={counter:2,lastRoute:"/",visitedPlayers:[],visitedSwedishPlayers:[]},Zt={addVisitedPlayers({commit:t,state:a},d){if(d.isSwedish){if(a.visitedSwedishPlayers.some(f=>f.id===d.id))return;t("setVisitedSwedishPlayer",d)}else{if(a.visitedPlayers.some(f=>f.id===d.id))return;t("setVisitedPlayer",d)}}};var te=$({mutations:Qt,state:Xt,actions:Zt,strict:!0});B(J).use(zt).use(te).mount("#app");