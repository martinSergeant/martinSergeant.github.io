(()=>{function t(t,n){let e=t.length-1;e=0===e?1:e;let r=t.reduce(((t,e)=>t+Math.pow(e-n,2)),0);return Math.sqrt(r/e)}onmessage=function(n){const e=n.data[3],r=new("multitext"==e.datatype?Uint16Array:Uint8Array)(n.data[2]),a=new Uint8Array(n.data[0]),o=new Uint8Array(n.data[1]);let s=null;s="sankey"===e.method?function(t,n,e,r,a){const o=a.values.length,s=a.values2.length,l=e.length,i=new Array(o),c=a.values.map(((t,n)=>"A"+n)),u=a.values2.map(((t,n)=>"B"+n));for(let t=0;t<o;t++)i[t]=new Array(s).fill(0);const f=[];let h=0;for(let a=0;a<l;a++)0!==n[a]&&n[a]!==t[a]||(i[e[a]][r[a]]++,h++);const d=new Set,g=new Set,m=Math.round(h/300);for(let t=0;t<o;t++)for(let n=0;n<s;n++){const e=i[t][n];0!==e&&(d.add(c[t]),g.add(u[n]),f.push({source:c[t],target:u[n],value:e<m?m:e,trueValue:e}))}const p=Math.min(d.size,g.size),y=Array.from(d).map((t=>({id:t,ind:t.substring(1),param:0}))),w=Array.from(g).map((t=>({id:t,ind:t.substring(1),param:1})));return{links:f,nodes:y.concat(w),minNodes:p}}(a,o,r,new Uint8Array(n.data[4]),e):"venn"===e.method?function(t,n,e,r){const a=performance.now(),o=e.length/r.stringLength,s=new Map,l=r.stringLength;for(let r=0;r<o;r++){if(0!==n[r]&&n[r]!==t[r])continue;const a=r*l;let o=e.slice(a,a+l).toString();const i=s.get(o);i?s.set(o,i+1):s.set(o,1)}const i=[];for(const[t,n]of s.entries(s)){const e=t.split(",").map((t=>r.values[t])).filter((t=>void 0!==t));i.push({sets:e,size:n})}return console.log("calc ven : "+(performance.now()-a)),i}(a,o,r,e):"proportion"===e.method?function(n,e,r,a,o){const s=o.values.length,l=o.values2.length,i=o.cats?new Uint8Array(o.cats):null,c=r.length,u=new Array(s),f=o.diviser?o.diviser:new Array(s);for(let t=0;t<s;t++)u[t]=new Array(l).fill(0),f[t]=new Array(l).fill(0);const h=o.category;for(let t=0;t<c;t++)if(f[r[t]][a[t]]++,0===e[t]){if(i&&i[t]!==h)continue;u[r[t]][a[t]]++}let d=0,g=1e7;for(let n=0;n<f.length;n++){const e=f[n],r=u[n],a=[],s=[];let l=0,i=0,c=1e7;for(let t=0;t<e.length;t++){if(0===e[t])continue;const u=o.denominators?r[t]/o.denominators[t]:r[t]/e[t]*100;a.push([u,n,t,Math.floor(6*Math.random())]),s.push(u),l+=u,i=Math.max(i,u),c=Math.min(c,u)}a.av=l/a.length,a.std=t(s,a.av),a.max=i,a.min=c,u[n]=a,d=Math.max(d,i),g=Math.min(g,c)}return u.max=d,u.min=g,u}(0,o,r,new Uint8Array(n.data[4]),e):function(t,n,e,r){const a="multitext"===r.datatype?e.length/r.stringLength:e.length,o=new Array(r.values.length).fill(0);if("multitext"===r.datatype){const s=r.stringLength;for(let r=0;r<a;r++){if(0!==n[r]&&n[r]!==t[r])continue;const a=r*s;for(let t=a;t<a+s&&65535!==e[t];t++)o[e[t]]++}}else for(let r=0;r<a;r++)0!==n[r]&&n[r]!==t[r]||o[e[r]]++;return o}(a,o,r,e),postMessage(s)}})();