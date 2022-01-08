(function(){"use strict";var e={5906:function(e,t,s){s.d(t,{L:function(){return Vt}});s(7727);var n=s(9963),o=s(6252),r=s(3577),a=s.p+"img/logo.svg";const i={key:0,class:"container container-xs relative mx-auto xl:rounded xl:border xl:shadow-xl xl:my-5 p-5 pb-12 xl:pb-5 text-left dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500",id:"global"},l={class:"mb-2"},g={class:"flex flex-wrap"},d={class:"w-3/4 text-left my-auto"},h={class:"text-3xl xl:text-5xl lg:text-4xl font-light"},u={class:"w-1/4 flex justify-end"},p=["href"],c=["src"],m={key:1,src:a,alt:"Gatus",class:"object-scale-down",style:{"max-width":"100px","min-width":"50px","min-height":"50px"}},A={key:0,class:"text-red-500 text-center my-2"},f={class:"text-xl"},v={key:0,class:"text-red-500"},w={key:1,class:"text-red-500"},y={key:1},x=["href"];function T(e,t,s,n,a,T){const k=(0,o.up)("router-view"),b=(0,o.up)("Tooltip"),R=(0,o.up)("Social");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a.retrievedConfig?((0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",l,[(0,o._)("div",g,[(0,o._)("div",d,[(0,o._)("div",h,(0,r.zw)(T.header),1)]),(0,o._)("div",u,[(0,o._)("a",{href:T.link,target:"_blank",style:{width:"100px"}},[T.logo?((0,o.wg)(),(0,o.iD)("img",{key:0,src:T.logo,alt:"Gatus",class:"object-scale-down",style:{"max-width":"100px","min-width":"50px","min-height":"50px"}},null,8,c)):((0,o.wg)(),(0,o.iD)("img",m))],8,p)])])]),e.$route&&e.$route.query.error?((0,o.wg)(),(0,o.iD)("div",A,[(0,o._)("div",f,["access_denied"===e.$route.query.error?((0,o.wg)(),(0,o.iD)("span",v,"You do not have access to this status page")):((0,o.wg)(),(0,o.iD)("span",w,(0,r.zw)(e.$route.query.error),1))])])):(0,o.kq)("",!0),a.config&&a.config.oidc&&!a.config.authenticated?((0,o.wg)(),(0,o.iD)("div",y,[(0,o._)("a",{href:`${a.SERVER_URL}/oidc/login`,class:"max-w-lg mx-auto w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-white bg-green-700 hover:bg-green-800"}," Login with OIDC ",8,x)])):(0,o.kq)("",!0),(0,o.Wm)(k,{onShowTooltip:T.showTooltip},null,8,["onShowTooltip"])])):(0,o.kq)("",!0),(0,o.Wm)(b,{result:a.tooltip.result,event:a.tooltip.event},null,8,["result","event"]),(0,o.Wm)(R)],64)}const k=e=>((0,o.dD)("data-v-a4b3d200"),e=e(),(0,o.Cn)(),e),b={id:"social"},R=k((()=>(0,o._)("a",{href:"https://github.com/TwiN/gatus",target:"_blank",title:"Gatus on GitHub"},[(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 16 16",class:"hover:scale-110"},[(0,o._)("path",{fill:"gray",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})])],-1))),I=[R];function D(e,t,s,n,r,a){return(0,o.wg)(),(0,o.iD)("div",b,I)}var C={name:"Social"},S=s(3744);const B=(0,S.Z)(C,[["render",D],["__scopeId","data-v-a4b3d200"]]);var E=B;const P=(0,o._)("div",{class:"tooltip-title"},"Timestamp:",-1),U={id:"tooltip-timestamp"},O=(0,o._)("div",{class:"tooltip-title"},"Response time:",-1),H={id:"tooltip-response-time"},z=(0,o._)("div",{class:"tooltip-title"},"Conditions:",-1),M={id:"tooltip-conditions"},Q=(0,o._)("br",null,null,-1),W={key:0,id:"tooltip-errors-container"},q=(0,o._)("div",{class:"tooltip-title"},"Errors:",-1),X={id:"tooltip-errors"},Y=(0,o._)("br",null,null,-1);function K(e,t,s,n,a,i){return(0,o.wg)(),(0,o.iD)("div",{id:"tooltip",ref:"tooltip",class:(0,r.C_)(a.hidden?"invisible":""),style:(0,r.j5)("top:"+a.top+"px; left:"+a.left+"px")},[s.result?(0,o.WI)(e.$slots,"default",{key:0},(()=>[P,(0,o._)("code",U,(0,r.zw)(i.prettifyTimestamp(s.result.timestamp)),1),O,(0,o._)("code",H,(0,r.zw)((s.result.duration/1e6).toFixed(0))+"ms",1),z,(0,o._)("code",M,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.result.conditionResults,(t=>(0,o.WI)(e.$slots,"default",{key:t},(()=>[(0,o.Uk)((0,r.zw)(t.success?"✓":"X")+" ~ "+(0,r.zw)(t.condition),1),Q])))),128))]),s.result.errors&&s.result.errors.length?((0,o.wg)(),(0,o.iD)("div",W,[q,(0,o._)("code",X,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.result.errors,(t=>(0,o.WI)(e.$slots,"default",{key:t},(()=>[(0,o.Uk)(" - "+(0,r.zw)(t),1),Y])))),128))])])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)],6)}s(5306);var F={name:"Endpoints",props:{event:Event,result:Object},methods:{prettifyTimestamp(e){let t=new Date(e),s=t.getFullYear(),n=(t.getMonth()+1<10?"0":"")+(t.getMonth()+1),o=(t.getDate()<10?"0":"")+t.getDate(),r=(t.getHours()<10?"0":"")+t.getHours(),a=(t.getMinutes()<10?"0":"")+t.getMinutes(),i=(t.getSeconds()<10?"0":"")+t.getSeconds();return s+"-"+n+"-"+o+" "+r+":"+a+":"+i},htmlEntities(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},reposition(){if(this.event&&this.event.type)if("mouseenter"===this.event.type){let e=this.event.target.getBoundingClientRect().y+30,t=this.event.target.getBoundingClientRect().x,s=this.$refs.tooltip.getBoundingClientRect();t+window.scrollX+s.width+50>document.body.getBoundingClientRect().width&&(t=this.event.target.getBoundingClientRect().x-s.width+this.event.target.getBoundingClientRect().width,t<0&&(t+=-t)),e+window.scrollY+s.height+50>document.body.getBoundingClientRect().height&&e>=0&&(e=this.event.target.getBoundingClientRect().y-(s.height+10),e<0&&(e=this.event.target.getBoundingClientRect().y+30)),this.top=e,this.left=t}else"mouseleave"===this.event.type&&(this.hidden=!0)}},watch:{event:function(e){e&&e.type&&("mouseenter"===e.type?this.hidden=!1:"mouseleave"===e.type&&(this.hidden=!0))}},updated(){this.reposition()},created(){this.reposition()},data(){return{hidden:!0,top:0,left:0}}};const G=(0,S.Z)(F,[["render",K]]);var Z=G,j={name:"App",components:{Social:E,Tooltip:Z},methods:{fetchConfig(){fetch(`${Vt}/api/v1/config`,{credentials:"include"}).then((e=>{this.retrievedConfig=!0,200===e.status&&e.json().then((e=>{this.config=e}))}))},showTooltip(e,t){this.tooltip={result:e,event:t}}},computed:{logo(){return window.config&&window.config.logo&&"{{ .Logo }}"!==window.config.logo?window.config.logo:""},header(){return window.config&&window.config.header&&"{{ .Header }}"!==window.config.header?window.config.header:"Health Status"},link(){return window.config&&window.config.link&&"{{ .Link }}"!==window.config.link?window.config.link:null}},data(){return{error:"",retrievedConfig:!1,config:{oidc:!1,authenticated:!0},tooltip:{},SERVER_URL:Vt}},created(){this.fetchConfig()}};const L=(0,S.Z)(j,[["render",T]]);var N=L,J=s(2119);function V(e,t,s,n,r,a){const i=(0,o.up)("Endpoints"),l=(0,o.up)("Pagination"),g=(0,o.up)("Settings");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i,{endpointStatuses:r.endpointStatuses,showStatusOnHover:!0,onShowTooltip:a.showTooltip,onToggleShowAverageResponseTime:a.toggleShowAverageResponseTime,showAverageResponseTime:r.showAverageResponseTime},null,8,["endpointStatuses","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"]),(0,o.Wm)(l,{onPage:a.changePage},null,8,["onPage"]),(0,o.Wm)(g,{onRefreshData:a.fetchData},null,8,["onRefreshData"])],64)}s(3948);const _={id:"settings",class:"flex bg-gray-200 border-gray-300 rounded border shadow dark:text-gray-200 dark:bg-gray-800 dark:border-gray-500"},$=(0,o._)("div",{class:"text-xs text-gray-600 rounded-xl py-1 px-2 dark:text-gray-200"}," ↻ ",-1),ee=["selected"],te=["selected"],se=["selected"],ne=["selected"],oe=["selected"],re=["selected"],ae=(0,o.Uk)("☀"),ie=(0,o.Uk)("🌙");function le(e,t,s,n,r,a){return(0,o.wg)(),(0,o.iD)("div",_,[$,(0,o._)("select",{class:"text-center text-gray-500 text-xs dark:text-gray-200 dark:bg-gray-800 border-r border-l border-gray-300 dark:border-gray-500",id:"refresh-rate",ref:"refreshInterval",onChange:t[0]||(t[0]=(...e)=>a.handleChangeRefreshInterval&&a.handleChangeRefreshInterval(...e))},[(0,o._)("option",{value:"10",selected:10===r.refreshInterval},"10s",8,ee),(0,o._)("option",{value:"30",selected:30===r.refreshInterval},"30s",8,te),(0,o._)("option",{value:"60",selected:60===r.refreshInterval},"1m",8,se),(0,o._)("option",{value:"120",selected:120===r.refreshInterval},"2m",8,ne),(0,o._)("option",{value:"300",selected:300===r.refreshInterval},"5m",8,oe),(0,o._)("option",{value:"600",selected:600===r.refreshInterval},"10m",8,re)],544),(0,o._)("button",{onClick:t[1]||(t[1]=(...e)=>a.toggleDarkMode&&a.toggleDarkMode(...e)),class:"text-xs p-1"},[r.darkMode?(0,o.WI)(e.$slots,"default",{key:0},(()=>[ae])):(0,o.WI)(e.$slots,"default",{key:1},(()=>[ie]))])])}var ge={name:"Settings",props:{},methods:{setRefreshInterval(e){sessionStorage.setItem("gatus:refresh-interval",e);let t=this;this.refreshIntervalHandler=setInterval((function(){t.refreshData()}),1e3*e)},refreshData(){this.$emit("refreshData")},handleChangeRefreshInterval(){this.refreshData(),clearInterval(this.refreshIntervalHandler),this.setRefreshInterval(this.$refs.refreshInterval.value)},toggleDarkMode(){"dark"===localStorage.theme?localStorage.theme="light":localStorage.theme="dark",this.applyTheme()},applyTheme(){"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(this.darkMode=!0,document.documentElement.classList.add("dark")):(this.darkMode=!1,document.documentElement.classList.remove("dark"))}},created(){10!==this.refreshInterval&&30!==this.refreshInterval&&60!==this.refreshInterval&&120!==this.refreshInterval&&300!==this.refreshInterval&&600!==this.refreshInterval&&(this.refreshInterval=60),this.setRefreshInterval(this.refreshInterval),this.applyTheme()},unmounted(){clearInterval(this.refreshIntervalHandler)},data(){return{refreshInterval:sessionStorage.getItem("gatus:refresh-interval")<10?60:parseInt(sessionStorage.getItem("gatus:refresh-interval")),refreshIntervalHandler:0,darkMode:!0}}};const de=(0,S.Z)(ge,[["render",le]]);var he=de;const ue={id:"results"};function pe(e,t,s,n,r,a){const i=(0,o.up)("EndpointGroup");return(0,o.wg)(),(0,o.iD)("div",ue,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.endpointGroups,(t=>(0,o.WI)(e.$slots,"default",{key:t},(()=>[(0,o.Wm)(i,{endpoints:t.endpoints,name:t.name,onShowTooltip:a.showTooltip,onToggleShowAverageResponseTime:a.toggleShowAverageResponseTime,showAverageResponseTime:s.showAverageResponseTime},null,8,["endpoints","name","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"])])))),128))])}const ce={class:"font-mono text-gray-400 text-xl font-medium pb-2 px-3 dark:text-gray-200 dark:hover:text-gray-500 dark:border-gray-500"},me={key:0,class:"text-green-600"},Ae={key:1,class:"text-yellow-400"},fe={class:"float-right endpoint-group-arrow"};function ve(e,t,s,n,a,i){const l=(0,o.up)("Endpoint");return(0,o.wg)(),(0,o.iD)("div",{class:(0,r.C_)(0===s.endpoints.length?"mt-3":"mt-4")},["undefined"!==s.name?(0,o.WI)(e.$slots,"default",{key:0},(()=>[(0,o._)("div",{class:"endpoint-group pt-2 border dark:bg-gray-800 dark:border-gray-500",onClick:t[0]||(t[0]=(...e)=>i.toggleGroup&&i.toggleGroup(...e))},[(0,o._)("h5",ce,[a.healthy?((0,o.wg)(),(0,o.iD)("span",me,"✓")):((0,o.wg)(),(0,o.iD)("span",Ae,"~")),(0,o.Uk)(" "+(0,r.zw)(s.name)+" ",1),(0,o._)("span",fe,(0,r.zw)(a.collapsed?"▼":"▲"),1)])])])):(0,o.kq)("",!0),a.collapsed?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",{key:1,class:(0,r.C_)("undefined"===s.name?"":"endpoint-group-content")},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.endpoints,((t,n)=>(0,o.WI)(e.$slots,"default",{key:n},(()=>[(0,o.Wm)(l,{data:t,maximumNumberOfResults:20,onShowTooltip:i.showTooltip,onToggleShowAverageResponseTime:i.toggleShowAverageResponseTime,showAverageResponseTime:s.showAverageResponseTime},null,8,["data","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"])])))),128))],2))],2)}const we={key:0,class:"endpoint px-3 py-3 border-l border-r border-t rounded-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-500"},ye={class:"flex flex-wrap mb-2"},xe={class:"w-3/4"},Te={key:0,class:"text-gray-500 font-light"},ke={class:"w-1/4 text-right"},be=["title"],Re={class:"status-over-time flex flex-row"},Ie=["onMouseenter"],De=["onMouseenter"],Ce={class:"flex flex-wrap status-time-ago"},Se={class:"w-1/2"},Be={class:"w-1/2 text-right"},Ee=(0,o._)("div",{class:"w-1/2"},"   ",-1);function Pe(e,t,s,n,a,i){const l=(0,o.up)("router-link");return s.data?((0,o.wg)(),(0,o.iD)("div",we,[(0,o._)("div",ye,[(0,o._)("div",xe,[(0,o.Wm)(l,{to:i.generatePath(),class:"font-bold hover:text-blue-800 hover:underline dark:hover:text-blue-400",title:"View detailed endpoint health"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(s.data.name),1)])),_:1},8,["to"]),s.data.results&&s.data.results.length&&s.data.results[s.data.results.length-1].hostname?((0,o.wg)(),(0,o.iD)("span",Te," | "+(0,r.zw)(s.data.results[s.data.results.length-1].hostname),1)):(0,o.kq)("",!0)]),(0,o._)("div",ke,[s.data.results&&s.data.results.length?((0,o.wg)(),(0,o.iD)("span",{key:0,class:"font-light overflow-x-hidden cursor-pointer select-none",onClick:t[0]||(t[0]=(...e)=>i.toggleShowAverageResponseTime&&i.toggleShowAverageResponseTime(...e)),title:s.showAverageResponseTime?"Average response time":"Minimum and maximum response time"},[s.showAverageResponseTime?(0,o.WI)(e.$slots,"default",{key:0},(()=>[(0,o.Uk)(" ~"+(0,r.zw)(a.averageResponseTime)+"ms ",1)])):(0,o.WI)(e.$slots,"default",{key:1},(()=>[(0,o.Uk)((0,r.zw)(a.minResponseTime===a.maxResponseTime?a.minResponseTime:a.minResponseTime+"-"+a.maxResponseTime)+"ms ",1)]))],8,be)):(0,o.kq)("",!0)])]),(0,o._)("div",null,[(0,o._)("div",Re,[s.data.results&&s.data.results.length?(0,o.WI)(e.$slots,"default",{key:0},(()=>[s.data.results.length<s.maximumNumberOfResults?(0,o.WI)(e.$slots,"default",{key:0},(()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.maximumNumberOfResults-s.data.results.length,(e=>((0,o.wg)(),(0,o.iD)("span",{key:e,class:"status rounded border border-dashed border-gray-400"}," ")))),128))])):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.data.results,(s=>(0,o.WI)(e.$slots,"default",{key:s},(()=>[s.success?((0,o.wg)(),(0,o.iD)("span",{key:0,class:"status status-success rounded bg-success",onMouseenter:e=>i.showTooltip(s,e),onMouseleave:t[1]||(t[1]=e=>i.showTooltip(null,e))},null,40,Ie)):((0,o.wg)(),(0,o.iD)("span",{key:1,class:"status status-failure rounded bg-red-600",onMouseenter:e=>i.showTooltip(s,e),onMouseleave:t[2]||(t[2]=e=>i.showTooltip(null,e))},null,40,De))])))),128))])):(0,o.WI)(e.$slots,"default",{key:1},(()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.maximumNumberOfResults,(e=>((0,o.wg)(),(0,o.iD)("span",{key:e,class:"status rounded border border-dashed border-gray-400"}," ")))),128))]))])]),(0,o._)("div",Ce,[s.data.results&&s.data.results.length?(0,o.WI)(e.$slots,"default",{key:0},(()=>[(0,o._)("div",Se,(0,r.zw)(e.generatePrettyTimeAgo(s.data.results[0].timestamp)),1),(0,o._)("div",Be,(0,r.zw)(e.generatePrettyTimeAgo(s.data.results[s.data.results.length-1].timestamp)),1)])):(0,o.WI)(e.$slots,"default",{key:1},(()=>[Ee]))])])):(0,o.kq)("",!0)}const Ue={methods:{generatePrettyTimeAgo(e){let t=(new Date).getTime()-new Date(e).getTime();if(t>2592e5){let e=(t/864e5).toFixed(0);return e+" day"+("1"!==e?"s":"")+" ago"}if(t>36e5){let e=(t/36e5).toFixed(0);return e+" hour"+("1"!==e?"s":"")+" ago"}if(t>6e4){let e=(t/6e4).toFixed(0);return e+" minute"+("1"!==e?"s":"")+" ago"}return(t/1e3).toFixed(0)+" seconds ago"}}};var Oe={name:"Endpoint",props:{maximumNumberOfResults:Number,data:Object,showAverageResponseTime:Boolean},emits:["showTooltip","toggleShowAverageResponseTime"],mixins:[Ue],methods:{updateMinAndMaxResponseTimes(){let e=null,t=null,s=0;for(let n in this.data.results){const o=parseInt((this.data.results[n].duration/1e6).toFixed(0));s+=o,(null==e||e>o)&&(e=o),(null==t||t<o)&&(t=o)}this.minResponseTime!==e&&(this.minResponseTime=e),this.maxResponseTime!==t&&(this.maxResponseTime=t),this.data.results&&this.data.results.length&&(this.averageResponseTime=(s/this.data.results.length).toFixed(0))},generatePath(){return this.data?`/endpoints/${this.data.key}`:"/"},showTooltip(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime(){this.$emit("toggleShowAverageResponseTime")}},watch:{data:function(){this.updateMinAndMaxResponseTimes()}},created(){this.updateMinAndMaxResponseTimes()},data(){return{minResponseTime:0,maxResponseTime:0,averageResponseTime:0}}};const He=(0,S.Z)(Oe,[["render",Pe]]);var ze=He,Me={name:"EndpointGroup",components:{Endpoint:ze},props:{name:String,endpoints:Array,showAverageResponseTime:Boolean},emits:["showTooltip","toggleShowAverageResponseTime"],methods:{healthCheck(){if(this.endpoints)for(let e in this.endpoints)for(let t in this.endpoints[e].results)if(!this.endpoints[e].results[t].success)return void(this.healthy&&(this.healthy=!1));this.healthy||(this.healthy=!0)},toggleGroup(){this.collapsed=!this.collapsed,sessionStorage.setItem(`gatus:endpoint-group:${this.name}:collapsed`,this.collapsed)},showTooltip(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime(){this.$emit("toggleShowAverageResponseTime")}},watch:{endpoints:function(){this.healthCheck()}},created(){this.healthCheck()},data(){return{healthy:!0,collapsed:"true"===sessionStorage.getItem(`gatus:endpoint-group:${this.name}:collapsed`)}}};const Qe=(0,S.Z)(Me,[["render",ve]]);var We=Qe,qe={name:"Endpoints",components:{EndpointGroup:We},props:{showStatusOnHover:Boolean,endpointStatuses:Object,showAverageResponseTime:Boolean},emits:["showTooltip","toggleShowAverageResponseTime"],methods:{process(){let e={};for(let s in this.endpointStatuses){let t=this.endpointStatuses[s];e[t.group]&&0!==e[t.group].length||(e[t.group]=[]),e[t.group].push(t)}let t=[];for(let s in e)"undefined"!==s&&t.push({name:s,endpoints:e[s]});e["undefined"]&&t.push({name:"undefined",endpoints:e["undefined"]}),this.endpointGroups=t},showTooltip(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime(){this.$emit("toggleShowAverageResponseTime")}},watch:{endpointStatuses:function(){this.process()}},data(){return{userClickedStatus:!1,endpointGroups:[]}}};const Xe=(0,S.Z)(qe,[["render",pe]]);var Ye=Xe;const Ke={class:"mt-3 flex"},Fe={class:"flex-1"},Ge={class:"flex-1 text-right"};function Ze(e,t,s,n,r,a){return(0,o.wg)(),(0,o.iD)("div",Ke,[(0,o._)("div",Fe,[r.currentPage<5?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>a.nextPage&&a.nextPage(...e)),class:"bg-gray-100 hover:bg-gray-200 text-gray-500 border border-gray-200 px-2 rounded font-mono dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"},"<")):(0,o.kq)("",!0)]),(0,o._)("div",Ge,[r.currentPage>1?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:t[1]||(t[1]=(...e)=>a.previousPage&&a.previousPage(...e)),class:"bg-gray-100 hover:bg-gray-200 text-gray-500 border border-gray-200 px-2 rounded font-mono dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"},">")):(0,o.kq)("",!0)])])}var je={name:"Pagination",components:{},emits:["page"],methods:{nextPage(){this.currentPage++,this.$emit("page",this.currentPage)},previousPage(){this.currentPage--,this.$emit("page",this.currentPage)}},data(){return{currentPage:1}}};const Le=(0,S.Z)(je,[["render",Ze]]);var Ne=Le,Je={name:"Home",components:{Pagination:Ne,Endpoints:Ye,Settings:he},emits:["showTooltip","toggleShowAverageResponseTime"],methods:{fetchData(){fetch(`${Vt}/api/v1/endpoints/statuses?page=${this.currentPage}`,{credentials:"include"}).then((e=>e.json())).then((e=>{JSON.stringify(this.endpointStatuses)!==JSON.stringify(e)&&(this.endpointStatuses=e)}))},changePage(e){this.currentPage=e,this.fetchData()},showTooltip(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime(){this.showAverageResponseTime=!this.showAverageResponseTime}},data(){return{endpointStatuses:[],currentPage:1,showAverageResponseTime:!0}},created(){this.fetchData()}};const Ve=(0,S.Z)(Je,[["render",V]]);var _e=Ve,$e="data:image/png;base64,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",et="data:image/png;base64,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",tt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAFXnpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja7VdRkhwnDP3nFDkCSAiJ4wgEVblBjp9HT+94dm3Hdq2/kgzVTQ/QQnpPEuq0/vpzpz/wI5acqqi13lrGr/bayfFg+fHr173ket2vX7un8P/deHpOEIYYPT/+qt/rHePy5YW3Pcp4P57sniG7BZWn4OvHZ+fzHK9KYpwe46Xegvq6Ve6mr6qOW9C8F16q3Fd9qvXozv/0bkCBUgg2YqLFhfN1t4cGfK7Cjv7cmQs9Rs9zTugK0y0MgLwz763P+RWgdyC/PaWP6D+fPoBPfo/zByxvthIevjlR5MM4P7eh1435qRG9n9iW9Stz7mvvsL3XwzqvDYi226MusMubGCwcgJyv1xqa4pJ8RJ/W0Sx7nqA88swDbZZeCKzsVGqJ4mWXdfWzTKhYaZGiJ5og6owZK3WaF2P1tLJJuXOwgblJK4G6yvTUpVz79mu/WQw7R8FSKhAGdr/f0j9N/kpLe88DUcn2xAp60fEsqHGYO3esAiFl37zJBfBbu+nPL/4DVwWDcsFsMNDzeIgYUr74Fl88M9YJ+kcIlaRxCwBE2FugTGEwkFthKa1kJdJSgKOBIIfmxJUGGCgiFFCSKnOjpGR09sY7Wq61JNToDCM3gQjhxgpuOjvIqlXgP1oNPuTCUkWkiYol6eKNW23SWtN2kpwra1XRpqqmXd3Yqok1UzPr5p06IwdKb1279d7dKTk2cshyrHeMDBo86pDRhg4bffiE+8w6Zbap02afHhQcSBPRQsOih6+SFjLFqktWW7ps9eUbvrZ51y27bd22+/YnazerX7VfYK3crNHF1FmnT9YwmlTfRJSTTuRwBsaoFjCuhwE4NB3OspVa6TB3OMudEBRCUFIONynKYQwU1lVIdnly94W5n+Itif0Ub/Qj5tKh7ncwl0Dd17x9g7U459y8GHtE4cE0M6IP88s8kfk51Pyz/f+C/gOCfImvPlhiUqsWqCgQem3PmereJsIeeRRkKASaOU5EioCboWhihrfF7CSmyPmjaV7DVkXgWNlzryF9qLRUKJyy9oJTFMl5I4T2wlGKmP4l+9JvAMhDxk4bGXkvxFRFsErzQFjhPEYM6dgup0JFvgnkzRUnlKlPvOIeFXMyess2TiZMyyRk5omEgzjcq0ZTjPgIZARiZEnAg2wyBw4fmXaAbRkJwqbKynq2lGWo2MoBs+41p61VlJvPmY3n7q44hTVoEBZmv0z5bp9+tODHPSzT7ekdQg0l0hmOtVcHc9Rax/p6Q9tPDT3hS3nVRj5HTIdH6cItGWquEsh/41i7Rki9XhxMkIVE7hCMbF02qinuMBb7ITGaIyvn86FQgH5IsutY2B1wxmo0DMhHv4C3HVjLBJKGADy+XK69uhzy/m1l+hQ8L/1D0IDaMMz7E7CAAZc3vUCWl38ALD8HenoIpRlDANBAnY9qJR+f6xUlY+zRFkrKMrVMfAbYEU7NTUqfcEkcg23tFpTw3UBeYffGcVYcxaWiLDIcpQvfBHEiE6+GetPd1OtCMTTnPFMzYEC+Azv570lInmaFWEcyGbGDEBliNhBufe872NhtBsn5noI9J3AOOPWW0G/AE0YquKxBN6CkwA9FuHBHakIB2H+KufTzkYD64jVVbOGpD2PgvpFgD/w+LpWvELiCAlU8DDn2BM3r60tR8U/Cad/aMfQYxf1p4O9P/q52Etqp3g/CqLK4Hr1xZTkVW4V6qMHOYvEK4utZx7lPfOuyjZVax6IHI5/q048X1tnfdJMctBYPbbvNhXgta8aD2sSo4I6rn7c+06fPCvhf0L9JEI5gFN9/A6IdWtX8PTLmAAABhGlDQ1BJQ0MgcHJvZmlsZQAAeJx9kT1Iw1AUhU9TpSIVBzuIOmSoThZERRwlikWwUNoKrTqYvPQPmjQkKS6OgmvBwZ/FqoOLs64OroIg+APi5uak6CIl3pcUWsR4wyMf591zeO8+QGhUmGZ1TQCabpupuCRmc6ti6BUCAvQNQ5CZZSTSixn41tc9dVLdxXiWf9+f1afmLQYEROI5Zpg28QbxzKZtcN4njrCSrBKfE4+bdEDiR64rHr9xLros8MyImUnNE0eIxWIHKx3MSqZGPE0cVTWd8oWsxyrnLc5apcZa5+Q3DOf1lTTXaY0gjiUkkIQIBTWUUYGNGP11UiykaF/y8Q+5/iS5FHKVwcixgCo0yK4f/A1+z9YqTE16SWEJ6H5xnI9RILQLNOuO833sOM0TIPgMXOltf7UBzH6SXm9r0SOgfxu4uG5ryh5wuQMMPhmyKbtSkJZQKADvZ/RMOWDgFuhd8+bW2sfpA5ChWS3fAAeHwFiRstd97t3TObd/e1rz+wHfFXJs353W5AAAAAZiS0dEAAEAdAAAl9tSQwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+UCAQEeDnoabHsAAAWCSURBVHja7Zvfa1tlHMaf0/zsiWkZJAtrTZejpWMXKmyOgT/YhSAyxM0NUVH8J/wTvPJOmBfTTWEMQfwBIjhERHDsQmTKFDfnZO2srk3amCbn7CQn57zn/XrhCb52zdauTXpO8v1AoLwpJX2e932ec75JAIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGGZL0UL6WmhYDIiFRPjYgQMHnigUCs1yueyEbGMMvAExALFEIvEmgNcNw7DT6fTsysqKYAP6tPsBpFKp1PFGo3Go1WodHh8fPzg1NfXHwsLCIhvQW0YAxAGkM5nMMSHEHtd1Y5ZlPeB53ouGYTy4Y8eOH6rVqs0G9O4ExAGkdV1/XggxAwBEhHa7nTBN85FkMvna9PS0OzY2drVarXqD1g9hiaC0rutHfd+fUZ+UUqLZbI6apvl0JpN5tlgsLrfb7XnHcXw2YIs7QNf1I6oBRP9difq+D8uy8u12+7lCofDQ5OTkzXK5XB6Ey9VQGqCKrxoS9MMe3/ePlUqliXw+f2VpaemW8reIDdikAd3EV392HCdlmuajiUTiuGEYyUwmc6VWq7lRPAEjYXoxdxNfXRNCoFKpTM7Nzb2hado3+/btewZAKjB0JCplHdoOWK8hvu9rpmnudBzn5VKptH/Xrl2XK5VKLYgjjQ3YghJez5rruqjX69NE9KphGPfl8/nrSj+wAZvpgI0Y0mq1kqZpPh6LxY6VSiXKZrPXwtwPoTKgcyO2mW7o3D/Ytj1m2/ZTuq4/uXv37pVyuTwXxquk0BiQTqdv64CNiL8WnueNWJZVdBznyNTU1P5CofDL8vKy2g/EBgQGjI6O3lMJr8cU13XjpmnOENErhmHsHBsb+7lWq7X4BHQxYKMir8coKSVarVaqXq8fTKVSLxmGsZxMJm80Gg3BBigG9EL81Tdytm1nbds+ms1mD01MTNwkooVmsymH3oCNlPBm+oGI4HkeGo3G/Z7nvZDL5YxcLjdXrVb/Vn9t6DtgK8S/myHtdjtmmubDmqYdLxaLO3O53K/9fP8htAb0Ioq6rQVjb92yrIPxePxwqVRyAVy2bVv2+iSEaha0HeKra57naeVyeWZ2dvaErusX9u7d+1iv50rxKAjfD/HVNcdx5Pz8/F/pdNoMTij16iTEWfz/rfkAfpdSviWlPGfbtoUeD/TiCDF97oGbmqadFUJ8DmAJgAtAAOhpD8SHXXwisjRNOwfgrBDiBoBm8GgB8AIDhucEbDSKNmGIJKJvieikEOKqIrwDoB2I7w/VCdiKXb8e8YnoNynlSSnlBQBmsNtbivBq9NBQnYBeik9EDQDvCSE+CoTvRI2jCO/3Q/iB64A7iU9EtzRN+0IIcQbAn6vixlWEl+jziDryHXCXdY+ILhLRO0KISwDsNeJG3fF9f38gPoi7/t9lukpE7wshzgNoKHHT95yP9I3YPUTOCoAPiOgTIcSSsuNXx822Ch/ZDriD8B6AzzzPOwVgcY2c71zTS4ToveFIdUCX5wUR/SSlfNv3/R+VqOnEjVqwMmz/bzziu/4GEb0rhPgKwK2w5vzA3QcQ0RKAj4noUyFEZdX1fOhyfmA6gIgcIvqSiM74vn+9S85vy/X8oHcAEdF3UsrTvu9fAmCtMbcRgegSESI0Bkgpu42JF6WUJ6SUXyvCrx4fyCjETdQiyATwYTA+qEc556NgACnCN4noPBGd9n3/Gm4fE2/b3GagDSAiQUTfAzglhLjYZW4TyZy/E9v9BYbO94T1TCaz37btRSXbOzveDXZ85OMmjAZ0PheUDB7xQGAP2zSfHzYDOqcgFjw6HxlXM15igAnLd6jUDz/RIO943hAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzBMH/gH4sBnDNMGrTEAAAAASUVORK5CYII=";const st=e=>((0,o.dD)("data-v-1c590266"),e=e(),(0,o.Cn)(),e),nt=(0,o.Uk)(" ← "),ot=st((()=>(0,o._)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400"},"RECENT CHECKS",-1))),rt=st((()=>(0,o._)("hr",{class:"mb-4"},null,-1))),at={key:1,class:"mt-12"},it=st((()=>(0,o._)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400"},"UPTIME",-1))),lt=st((()=>(0,o._)("hr",null,null,-1))),gt={class:"flex space-x-4 text-center text-2xl mt-6 relative bottom-2 mb-10"},dt={class:"flex-1"},ht=st((()=>(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last 7 days",-1))),ut=["src"],pt={class:"flex-1"},ct=st((()=>(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last 24 hours",-1))),mt=["src"],At={class:"flex-1"},ft=st((()=>(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last hour",-1))),vt=["src"],wt={key:2,class:"mt-12"},yt=st((()=>(0,o._)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400"},"RESPONSE TIME",-1))),xt=st((()=>(0,o._)("hr",null,null,-1))),Tt=["src"],kt={class:"flex space-x-4 text-center text-2xl mt-6 relative bottom-2 mb-10"},bt={class:"flex-1"},Rt=st((()=>(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last 7 days",-1))),It=["src"],Dt={class:"flex-1"},Ct=st((()=>(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last 24 hours",-1))),St=["src"],Bt={class:"flex-1"},Et=st((()=>(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last hour",-1))),Pt=["src"],Ut={key:3},Ot=st((()=>(0,o._)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400 mt-4"},"EVENTS",-1))),Ht=st((()=>(0,o._)("hr",{class:"mb-4"},null,-1))),zt={class:"p-3 my-4"},Mt={class:"text-lg"},Qt={key:0,src:$e,alt:"Healthy",class:"border border-green-600 rounded-full opacity-75 bg-green-100 mr-2 inline",width:"26"},Wt={key:1,src:et,alt:"Unhealthy",class:"border border-red-500 rounded-full opacity-75 bg-red-100 mr-2 inline",width:"26"},qt={key:2,src:tt,alt:"Start",class:"border border-gray-500 rounded-full opacity-75 bg-gray-100 mr-2 inline",width:"26"},Xt={class:"flex mt-1 text-sm text-gray-400"},Yt={class:"flex-1 text-left pl-10"},Kt={class:"flex-1 text-right"};function Ft(e,t,s,n,a,i){const l=(0,o.up)("router-link"),g=(0,o.up)("Endpoint"),d=(0,o.up)("Pagination"),h=(0,o.up)("Settings");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l,{to:"../",class:"absolute top-2 left-2 inline-block px-2 pb-0.5 text-lg text-black bg-gray-100 rounded hover:bg-gray-200 focus:outline-none border border-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"},{default:(0,o.w5)((()=>[nt])),_:1}),(0,o._)("div",null,[a.endpointStatus?(0,o.WI)(e.$slots,"default",{key:0},(()=>[ot,rt,(0,o.Wm)(g,{data:a.endpointStatus,maximumNumberOfResults:20,onShowTooltip:i.showTooltip,onToggleShowAverageResponseTime:i.toggleShowAverageResponseTime,showAverageResponseTime:a.showAverageResponseTime},null,8,["data","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"]),(0,o.Wm)(d,{onPage:i.changePage},null,8,["onPage"])]),!0):(0,o.kq)("",!0),a.endpointStatus&&a.endpointStatus.key?((0,o.wg)(),(0,o.iD)("div",at,[it,lt,(0,o._)("div",gt,[(0,o._)("div",dt,[ht,(0,o._)("img",{src:i.generateUptimeBadgeImageURL("7d"),alt:"7d uptime badge",class:"mx-auto"},null,8,ut)]),(0,o._)("div",pt,[ct,(0,o._)("img",{src:i.generateUptimeBadgeImageURL("24h"),alt:"24h uptime badge",class:"mx-auto"},null,8,mt)]),(0,o._)("div",At,[ft,(0,o._)("img",{src:i.generateUptimeBadgeImageURL("1h"),alt:"1h uptime badge",class:"mx-auto"},null,8,vt)])])])):(0,o.kq)("",!0),a.endpointStatus&&a.endpointStatus.key?((0,o.wg)(),(0,o.iD)("div",wt,[yt,xt,(0,o._)("img",{src:i.generateResponseTimeChartImageURL(),alt:"response time chart",class:"mt-6"},null,8,Tt),(0,o._)("div",kt,[(0,o._)("div",bt,[Rt,(0,o._)("img",{src:i.generateResponseTimeBadgeImageURL("7d"),alt:"7d response time badge",class:"mx-auto mt-2"},null,8,It)]),(0,o._)("div",Dt,[Ct,(0,o._)("img",{src:i.generateResponseTimeBadgeImageURL("24h"),alt:"24h response time badge",class:"mx-auto mt-2"},null,8,St)]),(0,o._)("div",Bt,[Et,(0,o._)("img",{src:i.generateResponseTimeBadgeImageURL("1h"),alt:"1h response time badge",class:"mx-auto mt-2"},null,8,Pt)])])])):(0,o.kq)("",!0),a.endpointStatus&&a.endpointStatus.key?((0,o.wg)(),(0,o.iD)("div",Ut,[Ot,Ht,(0,o._)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.events,(t=>(0,o.WI)(e.$slots,"default",{key:t},(()=>[(0,o._)("div",zt,[(0,o._)("h2",Mt,["HEALTHY"===t.type?((0,o.wg)(),(0,o.iD)("img",Qt)):"UNHEALTHY"===t.type?((0,o.wg)(),(0,o.iD)("img",Wt)):"START"===t.type?((0,o.wg)(),(0,o.iD)("img",qt)):(0,o.kq)("",!0),(0,o.Uk)(" "+(0,r.zw)(t.fancyText),1)]),(0,o._)("div",Xt,[(0,o._)("div",Yt,(0,r.zw)(new Date(t.timestamp).toISOString()),1),(0,o._)("div",Kt,(0,r.zw)(t.fancyTimeAgo),1)])])]),!0))),128))])])):(0,o.kq)("",!0)]),(0,o.Wm)(h,{onRefreshData:i.fetchData},null,8,["onRefreshData"])],64)}var Gt={name:"Details",components:{Pagination:Ne,Endpoint:ze,Settings:he},emits:["showTooltip"],mixins:[Ue],methods:{fetchData(){fetch(`${this.serverUrl}/api/v1/endpoints/${this.$route.params.key}/statuses?page=${this.currentPage}`,{credentials:"include"}).then((e=>e.json())).then((e=>{if(JSON.stringify(this.endpointStatus)!==JSON.stringify(e)){this.endpointStatus=e,this.uptime=e.uptime;let t=[];for(let s=e.events.length-1;s>=0;s--){let n=e.events[s];if(s===e.events.length-1)"UNHEALTHY"===n.type?n.fancyText="Endpoint is unhealthy":"HEALTHY"===n.type?n.fancyText="Endpoint is healthy":"START"===n.type&&(n.fancyText="Monitoring started");else{let t=e.events[s+1];"HEALTHY"===n.type?n.fancyText="Endpoint became healthy":"UNHEALTHY"===n.type?n.fancyText=t?"Endpoint was unhealthy for "+this.prettifyTimeDifference(t.timestamp,n.timestamp):"Endpoint became unhealthy":"START"===n.type&&(n.fancyText="Monitoring started")}n.fancyTimeAgo=this.generatePrettyTimeAgo(n.timestamp),t.push(n)}this.events=t}}))},generateUptimeBadgeImageURL(e){return`${this.serverUrl}/api/v1/endpoints/${this.endpointStatus.key}/uptimes/${e}/badge.svg`},generateResponseTimeBadgeImageURL(e){return`${this.serverUrl}/api/v1/endpoints/${this.endpointStatus.key}/response-times/${e}/badge.svg`},generateResponseTimeChartImageURL(){return`${this.serverUrl}/api/v1/endpoints/${this.endpointStatus.key}/response-times/24h/chart.svg`},prettifyUptime(e){return e?(100*e).toFixed(2)+"%":"0%"},prettifyTimeDifference(e,t){let s=Math.ceil((new Date(e)-new Date(t))/1e3/60);return s+(1===s?" minute":" minutes")},changePage(e){this.currentPage=e,this.fetchData()},showTooltip(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime(){this.showAverageResponseTime=!this.showAverageResponseTime}},data(){return{endpointStatus:{},uptime:{},events:[],hourlyAverageResponseTime:{},serverUrl:"."===Vt?"..":Vt,currentPage:1,showAverageResponseTime:!0,chartLabels:[],chartValues:[]}},created(){this.fetchData()}};const Zt=(0,S.Z)(Gt,[["render",Ft],["__scopeId","data-v-1c590266"]]);var jt=Zt;const Lt=[{path:"/",name:"Home",component:_e},{path:"/endpoints/:key",name:"Details",component:jt},{path:"/services/:key",redirect:{name:"Details"}}],Nt=(0,J.p7)({history:(0,J.PO)("/"),routes:Lt});var Jt=Nt;const Vt="";(0,n.ri)(N).use(Jt).mount("#app")}},t={};function s(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,n,o,r){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],r=e[d][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(s.O).every((function(e){return s.O[e](n[l])}))?n.splice(l--,1):(i=!1,r<a&&(a=r));if(i){e.splice(d--,1);var g=o();void 0!==g&&(t=g)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,o,r]}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,a=n[0],i=n[1],l=n[2],g=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(l)var d=l(s)}for(t&&t(n);g<a.length;g++)r=a[g],s.o(e,r)&&e[r]&&e[r][0](),e[a[g]]=0;return s.O(d)},n=self["webpackChunkgatus"]=self["webpackChunkgatus"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(5906)}));n=s.O(n)})();