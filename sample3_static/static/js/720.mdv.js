onmessage=function(t){const e=[];for(let n of t.data[3])e.push("int32"===n[1]?new Int32Array(n[0]):new Float32Array(n[0]));const n=e.length,o=new Uint8Array(t.data[2]),r=t.data[4],a=o.length;let l=r.values.length;const f=r.scaleVals,s=new Uint8Array(t.data[0]),i=new Uint8Array(t.data[1]);let c=new Array(n);for(let t=0;t<n;t++){const e=new Array(l);for(let t=0;t<l;t++)e[t]="mean"===r.method?[0,0]:[0,0,0];c[t]=e,c[t]._id=t}const u=new Array(l).fill(0);"mean"===r.method?function(t,e,n,o,r,a,l,f,s,i){for(let s=0;s<n;s++){if(0!==r[s]&&r[s]!==a[s])continue;let n=l[s];f[n]++;for(let r=0;r<o;r++){if(isNaN(e[r][s]))continue;const o=t[r][n];o[0]+=e[r][s],o[1]++}}for(let e=0;e<o;e++){const n=i[e][1]-i[e][0];for(let o=0;o<s;o++){let r=t[e][o],a=r[0]/r[1];a=(a-i[e][0])/n,t[e][o]=a<0?0:a>1?1:a}}}(c,e,a,n,i,s,o,u,l,f):function(t,e,n,o,r,a,l,f,s,i){performance.now();for(let s=0;s<n;s++){if(0!==r[s]&&r[s]!==a[s])continue;let n=l[s];f[n]++;for(let r=0;r<o;r++)isNaN(e[r][s])||t[r][n][0]++}for(let e=0;e<o;e++)for(let n=0;n<s;n++)t[e][n][0]&&(t[e][n][1]=new Float32Array(t[e][n][0]));for(let f=0;f<n;f++){if(0!==r[f]&&r[f]!==a[f])continue;let n=l[f];for(let r=0;r<o;r++){if(isNaN(e[r][f]))continue;const o=t[r][n];o[1][o[2]++]=e[r][f]}}for(let e=0;e<o;e++){const n=i[e][1]-i[e][0];for(let o=0;o<s;o++){const r=t[e][o][1];if(!r){t[e][o]=NaN;continue}r.sort();let a=r[Math.floor(r.length/2)];a=(a-i[e][0])/n,t[e][o]=a<0?0:a>1?1:a}}}(c,e,a,n,i,s,o,u,l,f);const w=[];for(let t=0;t<l;t++)0!==u[t]&&w.push(t);for(let t=0;t<n;t++)c[t]=c[t].filter(((t,e)=>0!==u[e])),c[t]._id=t;l=w.length;const y=new Array(l);for(let t=0;t<l;t++){y[t]=new Array(n),y[t]._id=w[t];for(let e=0;e<n;e++)y[t][e]=isNaN(c[e][t])?0:c[e][t]}postMessage({averages:c,transpose:y,catTotals:u})};