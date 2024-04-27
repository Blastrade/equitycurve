(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5842:function(e,a,r){Promise.resolve().then(r.bind(r,6359))},6359:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return o}});var t=r(7437),s=r(2265),l=e=>{let{simOptions:a,submitting:r,setSimOptions:s,setSubmitting:l,handleSubmit:n,messageText:i}=e;function d(e){return e.replace(/^0+(?=\d)/,"")}return(0,t.jsx)("div",{className:"font-semibold text-sm w-96 p-4 bg-card border border-card-border rounded-xl",children:(0,t.jsx)("form",{autoComplete:"off",className:"",onSubmit:n,children:(0,t.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,t.jsxs)("label",{className:"flex items-center justify-between",children:[(0,t.jsx)("span",{className:"whitespace-nowrap",children:"START EQUITY"}),(0,t.jsx)("input",{maxLength:"12",className:"py-3 px-5 w-36 rounded-xl text-sm bg-card-inside border border-card-border",id:"startequity",onClick:()=>startequity.select(),type:"text",value:"€"+a.startEquity,onChange:e=>{let r=e.target.value.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".");s({...a,startEquity:d(r)})}})]}),(0,t.jsxs)("label",{className:"flex items-center justify-between",children:[(0,t.jsx)("span",{className:"whitespace-nowrap",children:"WIN PROBABILITY"}),(0,t.jsx)("input",{maxLength:"3",id:"winrate",onClick:()=>winrate.select(),type:"text",className:"py-3 px-5 w-20 rounded-xl text-sm bg-card-inside border border-card-border",value:a.winRate+"%",onChange:e=>{let r=e.target.value;"deleteContentBackward"===e.nativeEvent.inputType&&(r=r.slice(0,-1)),r=r.replace(/\D/g,""),s({...a,winRate:d(r)})},placeholder:"",required:!0})]}),(0,t.jsxs)("label",{className:"flex items-center justify-between",children:[(0,t.jsx)("span",{className:"whitespace-nowrap",children:"WIN/LOSS RELATION"}),(0,t.jsxs)("div",{className:"flex items-center gap-x-4 rounded-xl text-sm border border-card-border overflow-hidden",children:[(0,t.jsx)("input",{maxLength:"4",id:"winlossrelation",onClick:()=>winlossrelation.select(),type:"text",className:"rounded-l-[10px] py-3 w-20 px-5 bg-card-inside",value:a.winLossRelation,onChange:e=>{let r=e.target.value;(r=(r=r.replace(/\./g,",")).replace(/[^\d,]/g,"")).split(",").length-1>1&&(r=r.replace(/,/g,(e,a)=>a===r.indexOf(",")?".":""));let t=parseFloat(r.replace(",","."));!isNaN(t)&&t>999&&(r="999"),s({...a,winLossRelation:d(r)})},placeholder:"",required:!0}),(0,t.jsx)("span",{className:"whitespace-nowrap pr-4 bg-card",children:": 1"})]})]}),(0,t.jsxs)("label",{className:"flex items-center justify-between",children:[(0,t.jsx)("span",{className:"whitespace-nowrap",children:"NUMBER OF TRADES"}),(0,t.jsx)("input",{maxLength:"3",id:"tradesnumber",onClick:()=>tradesnumber.select(),type:"text",className:"py-3 px-5 w-20 rounded-xl text-sm bg-card-inside border border-card-border",value:a.tradesNumber,onChange:e=>{let r=e.target.value;r=r.replace(/\D/g,""),s({...a,tradesNumber:d(r)})},placeholder:"",required:!0})]}),(0,t.jsxs)("label",{className:"flex items-center justify-between",children:[(0,t.jsx)("span",{className:"whitespace-nowrap",children:"NUMBER OF LINES"}),(0,t.jsx)("input",{maxLength:"2",id:"linesnumber",onClick:()=>linesnumber.select(),type:"text",className:"py-3 px-5 w-16 rounded-xl text-sm bg-card-inside border border-card-border",value:a.linesNumber,onChange:e=>{let r=e.target.value;r=r.replace(/\D/g,""),s({...a,linesNumber:d(r)})},placeholder:"",required:!0})]}),(0,t.jsxs)("label",{className:"flex items-center justify-between",children:[(0,t.jsx)("span",{className:"whitespace-nowrap",children:"RISK PER TRADE"}),(0,t.jsxs)("div",{className:"flex border border-card-border rounded-xl",children:[(0,t.jsx)("input",{maxLength:"percentage"===a.riskPerTrade.measure?"4":"11",id:"riskpertrade",onClick:()=>riskpertrade.select(),type:"text",className:"py-3 px-5 rounded-l-[10px] text-sm bg-card-inside "+("percentage"===a.riskPerTrade.measure?"w-20":"w-32"),value:a.riskPerTrade.value,onChange:e=>{let r=e.target.value;if("percentage"==a.riskPerTrade.measure){(r=(r=r.replace(/\./g,",")).replace(/[^\d,]/g,"")).split(",").length-1>1&&(r=r.replace(/,+/g,(e,a)=>a===r.indexOf(",")?",":""));let e=parseFloat(r.replace(",","."));!isNaN(e)&&e>=100&&(r="99")}else r=r.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".");s({...a,riskPerTrade:{...a.riskPerTrade,value:d(r)}})},placeholder:"",required:!0}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("select",{value:a.riskPerTrade.measure,className:"appearance-none py-3 px-5 w-16 rounded-r-xl text-sm bg-transparent",onChange:e=>{s({...a,riskPerTrade:{value:"0",measure:e.target.value}})},children:[(0,t.jsx)("option",{value:"percentage",children:"%"}),(0,t.jsx)("option",{value:"currency",children:"€"})]}),(0,t.jsx)("div",{className:"absolute inset-y-0 -right-2 flex items-center pr-4 pointer-events-none",children:(0,t.jsx)("svg",{className:"h-6 w-6 fill-current text-gray-500 transform transition-transform",viewBox:"0 0 20 20",children:(0,t.jsx)("path",{d:"M8 7l4 4 4-4"})})})]})]})]}),(0,t.jsxs)("div",{className:"flex justify-between items-center",children:[(0,t.jsx)("span",{className:"w-48 text-lime-300 text-center",children:i}),(0,t.jsx)("button",{className:"py-3 px-4 w-24 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#07ff11] text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800",type:"submit",children:r?"...":"Carica"})]})]})})})},n=r(1196),i=r(6136);i.kL.register(i.WV,i.uw,i.f$,i.od,i.jn,i.ST,i.u,i.De);var d=(0,s.memo)(e=>{let{scale:a,data:r}=e;return(0,t.jsx)(n.kL,{options:{plugins:{legend:{display:!1},tooltip:{enabled:!1}},scales:{x:{grid:{display:!1}},y:{grid:{color:"#4c4a5e"},type:a}},elements:{point:{}}},data:r})}),o=()=>{let[e,a]=(0,s.useState)(!1),[r,n]=(0,s.useState)(""),[i,o]=(0,s.useState)("linear"),[c,u]=(0,s.useState)({startEquity:"10.000",winRate:"50",winLossRelation:"1",tradesNumber:"20",linesNumber:"10",riskPerTrade:{value:"1",measure:"percentage"}}),[x,p]=(0,s.useState)({kelly:"",expected:"",maxDrawdown:"",avgMaxDrawdown:"",minEquity:"",maxEquity:"",avgPerformance:"",reomd:"",maxConsecutiveWin:"",maxConsecutiveLoss:""});class m{constructor(e,a){this.backgroundColor=e,this.borderColor=e,this.data=a,this.type="line",this.pointStyle=!1}}let[h,b]=(0,s.useState)({datasets:[new m("#fff",[])],labels:[]});(0,s.useEffect)(()=>{let e=()=>{let e=Math.floor(360*Math.random()),a=Math.floor(50*Math.random())+50,r=Math.floor(20*Math.random())+40;return"hsl(".concat(e,", ").concat(a,"%, ").concat(r,"%)")},r=()=>{let e=new Uint32Array(1);return window.crypto.getRandomValues(e),e[0]/4294967296},t=()=>{let e=()=>{let e;return(e="percentage"==c.riskPerTrade.measure?l/100*t:l,r()>=1-c.winRate/100)?(t=Math.round(t+e*i),1):(t=Math.round(t-e),0)},a=[],t=s,n=0,p=0,m=0,b=0,g=0;a.push(t);for(let r=0;r<parseInt(c.tradesNumber);r++){let r=e();a.push(t);let l=t/s*100-100;l<n&&(n=l),t<o?o=t:t>u&&(u=t),1==r?(++m>g&&(g=m),p=0):(++p>b&&(b=p),m=0)}return d.push(n),x.push(t/s*100-100),h.push(g),f.push(b),a},s=parseInt(c.startEquity.replaceAll(".","")),l=parseFloat(c.riskPerTrade.value.replace(/\./g,"").replace(/,/g,".")),i=parseFloat(c.winLossRelation.replace(/,/g,"."));switch(!0){case"currency"===c.riskPerTrade.measure&&l>s:n("NON PUOI RISCHIARE PI\xd9 DELLA TUA EQUITY");break;case 0==c.tradesNumber:n("NON PUOI FARE IL CALCOLO CON ZERO TRADES");break;case 0==c.linesNumber:n("NON PUOI FARE IL CALCOLO CON ZERO LINEE");break;default:n("")}let d=[],o=s,u=s,x=[],h=[],f=[],w=[];for(let e=0;e<parseInt(c.linesNumber);e++)w.push(t());let N=[],v=new m("#fff",(()=>{let e=[];for(let a=0;a<c.tradesNumber+1;a++){let r=0;for(let e=0;e<c.linesNumber;e++)r+=w[e][a];e.push(r/c.linesNumber)}return e})());v.borderWidth=5,v.order=-1,N.push(v),w.map(a=>{N.push(new m(e(),a))}),b({datasets:N,labels:[...Array(parseInt(c.tradesNumber)+1).keys()]});let y=(c.winRate/100*i-(1-c.winRate/100)).toFixed(2),j=Math.min.apply(Math,d).toFixed(2),k=Math.round(d.reduce((e,a)=>e+a,0)/d.length||0).toFixed(2),C=Math.round(x.reduce((e,a)=>e+a,0)/x.length||0).toFixed(2),E=0!=j?(C/j).toFixed(2):"",M=Math.max.apply(Math,h),R=Math.max.apply(Math,f);p({kelly:(()=>{let e=(c.winRate/100-(1-c.winRate/100)/i).toFixed(2);return isFinite(e)?e:""})(),expected:y,maxDrawdown:j+"%  | "+g(j/100*s),avgMaxDrawdown:k+"%",minEquity:g(o),maxEquity:g(u),avgPerformance:C+"%  | "+g(C/100*s),reomd:E,maxConsecutiveWin:M,maxConsecutiveLoss:R}),a(!1)},[e]),(0,s.useEffect)(()=>{Object.keys(c).forEach(e=>{if("riskPerTrade"==e&&""==c.riskPerTrade.value){u({...c,riskPerTrade:{...c.riskPerTrade,value:"0"}});return}""==c[e]&&u({...c,[e]:"0"})})},[c]);let g=e=>{if(!isFinite(e))return"Not Valid";let a=(e=Math.round(e)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");return e>=0?"€".concat(a):"-€".concat(a.slice(1))},f=async e=>{e.preventDefault(),a(!0)},w=[{label:"Kelly",value:x.kelly},{label:"Expected",value:x.expected},{label:"Biggest Max Drawdown",value:x.maxDrawdown},{label:"Average Max Drawdown",value:x.avgMaxDrawdown},{label:"Minimum Equity",value:x.minEquity},{label:"Maximum Equity",value:x.maxEquity},{label:"Average Performance",value:x.avgPerformance},{label:"Return on Max Drawdown",value:x.reomd},{label:"Max Consecutive Win",value:x.maxConsecutiveWin},{label:"Max Consecutive Loss",value:x.maxConsecutiveLoss}];return(0,t.jsx)("main",{children:(0,t.jsxs)("div",{className:"px-8 mt-8",children:[(0,t.jsx)("h1",{className:"text-4xl font-bold py-4",children:"Equity Curve Simulator"}),(0,t.jsxs)("div",{className:"flex gap-x-8 justify-center",children:[(0,t.jsx)("div",{children:(0,t.jsx)(l,{simOptions:c,submitting:e,setSimOptions:u,setSubmitting:a,handleSubmit:f,messageText:r})}),(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsx)("div",{className:"float-right",children:(0,t.jsxs)("div",{className:"flex border border-card-border rounded-lg overflow-hidden",children:[(0,t.jsx)("button",{onClick:()=>o("linear"),className:"align-middle select-none font-bold text-center transition-all text-xs py-3 px-6 "+("linear"==i?"bg-card-inside":"hover:shadow-inner-xl hover:shadow-card transition-shadows duration-300"),type:"button",children:"NORMAL"}),(0,t.jsx)("button",{onClick:()=>o("logarithmic"),className:"align-middle select-none font-bold text-center transition-all text-xs py-3 px-6 "+("logarithmic"==i?"bg-card-inside":"hover:shadow-inner-xl hover:shadow-card transition-shadows duration-300"),type:"button",children:"LOGARITHMIC"})]})}),(0,t.jsx)(d,{scale:i,data:h}),(0,t.jsx)("span",{className:"float-right font-bold text-3xl",children:"BLASTRADE.COM"})]})]}),(0,t.jsx)("div",{className:"py-8 text-sm font-semibold",children:(0,t.jsx)("div",{className:"bg-card border border-card-border rounded-lg w-full overflow-x-scroll",children:(0,t.jsx)("table",{className:"",children:(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{className:"border-b border-card-border",children:w.map((e,a)=>(0,t.jsx)("td",{className:"whitespace-nowrap px-6 py-4",children:e.label},a))}),(0,t.jsx)("tr",{className:"h-14",children:w.map((e,a)=>(0,t.jsx)("td",{className:"whitespace-nowrap px-6 py-4 font-medium",children:e.value},a))})]})})})})]})})}}},function(e){e.O(0,[674,796,971,69,744],function(){return e(e.s=5842)}),_N_E=e.O()}]);