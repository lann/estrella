#!/usr/bin/env node
let e$=Object.defineProperty,f$=Object.hasOwnProperty,h$={},j$,k$=a$=>{let b$=h$[a$];return b$||(b$=h$[a$]={exports:{}},j$[a$](b$.exports,b$)),b$.exports},l$=a$=>{if(a$&&a$.__esModule)return a$;let b$={};for(let c$ in a$)f$.call(a$,c$)&&(b$[c$]=a$[c$]);return b$.default=a$,b$},p$=a$=>l$(k$(a$)),q$=(a$,b$)=>{e$(a$,"__esModule",{value:!0});for(let c$ in b$)e$(a$,c$,{get:b$[c$],enumerable:!0})};j$={6(i){q$(i,{clock:()=>l,findInPATH:()=>n,fmtDuration:()=>m,json:()=>k,jsonparse:()=>g,jsonparseFile:()=>o,tildePath:()=>p});const y=l$(require("fs")),z=l$(require("path")),A=l$(require("perf_hooks"));const k=JSON.stringify,l=()=>A.performance.now();function m(a){return a>=59500?(a/60000).toFixed(0)+"min":a>=999.5?(a/1000).toFixed(1)+"s":a.toFixed(2)+"ms"}function n(a){const b=process.platform.startsWith("win")&&!/\.exe$/i.test(a);for(let w of(process.env.PATH||"").split(z.delimiter)){let d=z.join(z.resolve(w),a);for(;;){try{let e=y.statSync(d);if(e.isSymbolicLink()){d=y.realpathSync.native(d);continue}else if(e.isFile()&&e.mode&y.constants.X_OK)return d}catch(e){}break}}return null}function g(a,b){returnrequire("vm").runInNewContext("(()=>("+a+"))()",{},{filename:b,displayErrors:!0})}function o(a){return g(y.readFileSync(a,"utf8"),a)}let c=null;function p(a){const b=z.resolve(a);return c||(c=require("os").homedir()),b.startsWith(c)?"~"+b.substr(c.length):b}},2(g){q$(g,{isMemoized:()=>d,memoize:()=>i});const m=p$(6);const b=new Map();const d=Symbol("isMemoized");function i(j){return function n(...e){let c=e.map(m.json).join("\0");if(!b.has(c)){const f=j(...e);return b.set(c,f),f}let a=b.get(c);return a&&typeof a=="object"&&(a[d]=!0),a}}},4(l){q$(l,{stderrStyle:()=>n,style:()=>m,termStyle:()=>e});function e(j,k){let c=0;if(k==!0){let b=process.env.TERM||"";c=b&&["xterm","screen","vt100"].some(d=>b.indexOf(d)!=-1)?b.indexOf("256color")!=-1?8:4:2}else k!==!1&&j.isTTY&&(c=j.getColorDepth());const a=c>=8?(b,d,f)=>{let g="["+d+"m",h="["+f+"m";return i=>g+i+h}:c>0?(b,d,f)=>{let g="["+b+"m",h="["+f+"m";return i=>g+i+h}:()=>b=>b;return{ncolors:c,reset:"e[0m",bold:a("1","1","22"),italic:a("3","3","23"),underline:a("4","4","24"),inverse:a("7","7","27"),white:a("37","38;2;255;255;255","39"),grey:a("90","38;5;244","39"),black:a("30","38;5;16","39"),blue:a("34","38;5;75","39"),cyan:a("36","38;5;87","39"),green:a("32","38;5;84","39"),magenta:a("35","38;5;213","39"),purple:a("35","38;5;141","39"),pink:a("35","38;5;211","39"),red:a("31","38;2;255;110;80","39"),yellow:a("33","38;5;227","39"),lightyellow:a("93","38;5;229","39"),orange:a("33","38;5;215","39")}}let m=e(process.stdout),n=e(process.stderr)},0(s){q$(s,{chmod:()=>u,editFileMode:()=>p});const z=l$(require("fs")),A=p$(6);const d=z.constants,B=d.S_IRUSR,C=d.S_IWUSR,D=d.S_IXUSR,E=d.S_IRGRP,F=d.S_IWGRP,G=d.S_IXGRP,H=d.S_IROTH,I=d.S_IWOTH,J=d.S_IXOTH,o=String.fromCharCode,t=(a,b)=>a.charCodeAt(b||0);function u(a,b){if(typeof b=="number")return z.chmodSync(a,b),b;let h=z.statSync(a).mode,e=p(h,b);return h!=e&&z.chmodSync(a,e),e}function p(a,b){const h="Expected format: [ugoa]*[+-=][rwx]+",e=(c,g)=>new Error(`${c} in modifier ${A.json(g)}. ${h}`);let m=[];for(let c of Array.isArray(b)?b:[b])m=m.concat(c.trim().split(/\s*,+\s*/));for(let c of m){let g=[],r=!1,k=0,f=0;for(let l=0;l<c.length;l++){let j=t(c,l);if(k==0)switch(j){case 117:case 103:case 111:r||g.push(j);break;case 97:g=[117,103,111],r=!0;break;case 43:case 45:case 61:k=j;break;default:if(k==0)throw e(`Invalid target or operation ${A.json(o(j))}`,c);break}else switch(j){case 114:f|=4;break;case 119:f|=2;break;case 120:f|=1;break;default:throw e(`Invalid permission ${A.json(o(j))}`,c)}}if(k==0)throw e("Missing operation",c);g.length==0&&(g=[117]),f==0&&(f=4|2|1);let i=0;for(let l of g)switch(l){case 117:i|=f<<6;break;case 103:i|=f<<3;break;case 111:i|=f;break}switch(k){case 43:a|=i;break;case 45:a&=~i;break;case 61:a=i;break}}return a}},3(e){q$(e,{screen:()=>b});const c=!!process.stdout.isTTY,f=!!process.stderr.isTTY;const b={width:60,height:20,clear(){},banner(a){return a||(a="-"),a.repeat(Math.floor((b.width-1)/a.length))}};if(c||f){const a=c&&process.stdout||process.stderr,d=()=>{b.width=a.columns,b.height=a.rows};a.on("resize",d),d(),b.clear=()=>{a.write("c")}}},7(p){q$(p,{scandir:()=>r,watchdir:()=>q});const v=l$(require("fs"));function q(f,c,a,d){d===void 0&&(a===void 0?(d=c,c=null):(d=a,a=null)),a||(a={});const n=a.latency===void 0?100:a.latency,i=!!a.recursive,g=new Set();let b=null;const j=(k,o)=>{if(c&&!c.test(o))return;g.add(o),b===null&&(b=setTimeout(()=>{b=null,d(Array.from(g)),g.clear()},n))};let m=(Array.isArray(f)?f:[f]).map(k=>v.watch(k,{recursive:i},j)),e=!1;const h=()=>{clearTimeout(b),e||(e=!0,m.map(k=>k.close()))};return h}async function r(f,c,a){a||(a={});if(!v.promises||!v.promises.opendir)throw new Error("not implemented for nodejs <12.12.0");const d=[],n=f,i=new Set();async function g(b,j){if(i.has(b))return;i.add(b);const m=await v.promises.opendir(b);for await(const e of m){let h=e.name;e.isDirectory()?a.recursive&&await g(Path.join(b,h),Path.join(j,h)):(e.isFile()||e.isSymbolicLink())&&(c&&c.test(h)&&d.push(Path.join(j,h)))}}return g(Path.resolve(f),".").then(()=>d.sort())}},5(R){q$(R,{defaultTSRules:()=>E,findTSConfigFile:()=>F,tslint:()=>X});const S=l$(require("path")),la=l$(require("fs")),ma=p$(6),na=p$(4);const{dirname:D,basename:oa}=S;const E={6031:"IGNORE",6194:"IGNORE",6133:"WARNING",2531:"WARNING",7006:"WARNING",7015:"WARNING",7053:"WARNING"};function V(a){let d="",e=process.cwd();a&&process.chdir(a);try{d=null.resolve("typescript")}catch(f){}finally{a&&process.chdir(e)}if(d){const f=S.sep+"node_modules"+S.sep;let p=d.indexOf(f);if(p!=-1)return S.join(d.substr(0,p+f.length-S.sep.length),".bin","tsc")}return"tsc"}function F(a){a=S.resolve(a);const d=S.parse(a).root;for(;;){let e=S.join(a,"tsconfig.json");if(la.existsSync(e))return e;a=D(a);if(a==d)break}return null}const G=0,H=1,I=2,W=3,J={IGNORE:G,INFO:H,WARNING:I,ERROR:W};function K(a,d){for(let e of Object.keys(d)){let f=J[String(d[e]).toUpperCase()];if(f===void 0)throw new Error(`Invalid value for TS rule ${e}: ${ma.json(f)} -- expected value to be one of: `+Object.keys(J).map(ma.json).join(", "));a[e]=f}}function X(a){a||(a={});let d={cancelled:!1,cancel(){}},e=new Promise((f,p)=>{if(a.mode=="off")return f(!0);const x=a.quiet?()=>{}:console.log.bind(console),k=a.cwd||process.cwd(),l=a.mode=="on"?null:F(a.srcdir?S.resolve(k,a.srcdir):k);if(a.mode!="on"&&!l)return f(!0);let j=V(a.cwd);if(j=="tsc"&&a.mode!="on"){if(!(j=ma.findInPATH(j)))return console.warn(na.stderrStyle.orange(prog+":")+" tsc not found in node_modules or PATH. However a tsconfig.json file was found in "+S.relative(process.cwd(),D(l))+"."` Set tslint options.tsc="off" or pass -no-diag on the command line.`),f(!0)}const m={};K(m,E),a.rules&&K(m,a.rules);let r=["--noEmit",a.colors&&"--pretty",a.watch&&"--watch"].concat(a.args||[]).filter(b=>b);const{spawn:ba}=require("child_process"),s=ba(j,r,{stdio:["inherit","pipe","inherit"],cwd:k}),N=()=>{try{s.kill()}catch(b){}};process.on("exit",N),d.cancel=()=>{s.kill()};const O=b=>b,y=na.style.orange,ca=na.style.red,da=na.style.green,ea=Buffer.from(" TS"),fa=Buffer.from("Found "),ga=Buffer.from("c"),ha=Buffer.from("Starting compilation"),o=[];let q=0,P=!1,h={errors:0,warnings:0,other:0,reset(){this.errors=0,this.warnings=0,this.other=0}},z=!1;function t(){if(!a.quiet||h.errors>=0){a.watch&&console.log(screen.banner("—"));let b=[];h.errors>0?b.push(ca("TS: "+A("$ error","$ errors",h.errors))):b.push(da("TS: OK")),h.warnings>0&&b.push(y(A("$ warning","$ warnings",h.warnings))),h.other>0&&b.push(A("$ message","$ messages",h.other)),console.log(b.join("   ")),a.watch&&console.log(screen.banner("—"))}P=h.errors>0,a.onEnd&&a.onEnd(h),h.reset(),z=!0}function u(b){const g=o.slice();o.length=0;if(q==0){const c=g[0];if(c.includes(ha))return h.reset(),b&&t();if(g.every(i=>i.length<=1))return b&&t()}else{const c=/(?:\x1b\[\d+m|)error(?:\x1b\[\d+m|)/g;let i=g.shift().toString("utf8");switch(m[q]){case G:return b&&t();case H:i=i.replace(c,O("info")),Q(g,O),h.other++;break;case I:i=i.replace(c,y("warning")),Q(g,y),h.warnings++;break;default:c.test(i)?h.errors++:h.other++;break}process.stdout.write(i)}g.forEach(c=>process.stdout.write(c)),b&&t()}function Q(b,g){for(let c=1;c<b.length;c++){let i=b[c];if(i.includes(126)){let n=i.toString("utf8");n=n.replace(/\x1b\[\d+m(\s*~+)/g,g("$1")),b[c]=n}}}function A(b,g,c){return(c==1?b:g).replace(/\$/g,c)}Z(s.stdout,(b,g)=>{a.clearScreen||(b=ja(b));if(g){b.length>0&&o.push(b),o.length>0&&u();return}z&&b.length>1&&(z=!1,a.onRestart&&a.onRestart());if(b.includes(fa)){let c=ia(b.toString("utf8"));if(/^(?:\[[^\]]+\] |[\d\:PAM \-]+|)Found \d+ error/.test(c)){u(!0),q=0;return}else u(!1);q=0}else if(b.includes(ea)){const c=b.toString("utf8"),i=/(?:\x1b\[\d+m|)error(?:\x1b\[\d+m\x1b\[\d+m|) TS(\d+)\:/.exec(c);let n=i?parseInt(i[1]):0;n>0&&!isNaN(n)&&(o.length>0&&u(),q=n)}o.push(b)}),s.on("close",b=>{process.removeListener("exit",N),f(!P)});function ia(b){return b.replace(/\x1b\[\d+m/g,"")}function ja(b){let g=b.indexOf(ga);return g==-1?b:g==0?b.subarray(3):Buffer.concat([b.subarray(0,g),b.subarray(g+3)],b.length-3)}});return e.cancel=()=>(d.cancelled||(d.cancelled=!0,d.cancel()),e),e}const Y=Buffer.allocUnsafe(0);function Z(a,d){let e=[],f=0;const p=k=>{let l=0;for(;;){let j=k.indexOf(10,l);if(j==-1){if(l<k.length-1){const r=k.subarray(l);e.push(r),f+=r.length}break}j++;let m=k.subarray(l,j);f>0&&(m=Buffer.concat(e.concat(m),f+m.length),e.length=0,f=0),d(m,!1),l=j}},x=()=>{e.length>0?d(Buffer.concat(e,f),!0):d(Y,!0)};a.on("data",p),a.on("close",x),a.on("end",x)}},1(Ga,K){const Ia=l$(require("esbuild")),Ja=l$(require("fs")),fa=l$(require("path")),Ka=p$(6),Ma=p$(2),Na=p$(4),Oa=p$(0),Pa=p$(3),Qa=p$(7),Ra=p$(5);const{dirname:A,basename:la}=fa,ma=`
usage: $0 [options]
options:
  -watch, -w          Watch source files for changes and rebuild.
  -debug, -g          Do not optimize and define DEBUG=true.
  -sourcemap          Generate sourcemap.
  -inline-sourcemap   Generate inline sourcemap.
  -color              Color terminal output, regardless of TTY status.
  -no-color           Disable use of colors.
  -no-clear           Disable clearing of the screen, regardless of TTY status.
  -no-diag            Disable TypeScript diagnostics.
  -diag               Only run TypeScript diagnostics (no esbuild.)
  -quiet              Only log warnings and errors but nothing else.
  -h, -help           Print help to stderr and exit 0.
  -debug-self         Enable debug logging of estrella itself.
`,S={w:!1,watch:!1,debug:!1,g:!1,color:!1,"no-color":!1,sourcemap:!1,"inline-sourcemap":!1,"no-clear":!1,"no-diag":!1,diag:!1,quiet:!1,"debug-self":!1},T={helpUsage:"usage: $0 [options] <srcfile> ...",helpExtraText:`
  -bundle             Bundle all dependencies into the output files.
  -minify             Simplify and compress generated code.
  -o, -outfile <file> Write output to <file> instead of stdout.
  -outdir <dir>       Write output to <dir> instead of stdout.
  `,extraOptions:{bundle:!1,minify:!1}},na=new Set(["cwd","debug","entry","onEnd","onStart","outfileMode","quiet","title","tsc","tsrules","watch"]),u=(process.env._||"/node").endsWith("/node")?process.argv[1]:process.env._;let U=!1;function H(b){if(!U){U=!0;let a=b||1;process.on("exit",f=>{process.exit(f||a)})}}function oa(b){b.entryPoints||(b.entryPoints=[]),b.entry&&(Array.isArray(b.entry)?b.entryPoints=b.entryPoints.concat(b.entry):b.entryPoints.push(b.entry)),delete b.entry;if(b.entryPoints.length==0)throw new Error("config.entryPoints is empty or not set");b.sourcemap?b.sourcemap!="inline"&&(b.sourcemap="external"):delete b.sourcemap}function pa(b){let a={};for(let f of Object.keys(b))na.has(f)||(a[f]=b[f]);return a}function B(b,a){b&&console.error(`${u}: ${b}`);let f=ma.trim();a&&(a.helpUsage&&(f=a.helpUsage+f.substr(f.indexOf(`
`))),a.helpExtraText&&(f+=a.helpExtraText)),f=f.replace(/\$0\b/g,u),console.error(f.trim()),process.exit(b?1:0)}function V(b,a,f){f&&(b={...b,...f.extraOptions});const c={...b},v=new Set();let n=[];function x(j,h,l){let p=b[j];const m=typeof p;if(typeof p=="boolean")c[j]=!p;else{const o=h?h:a[++i];o===void 0&&B(`missing value for option ${l}`,f),Array.isArray(p)?(c[j]||(c[j]=[])).push(o):c[j]=o}}for(let j=1;j<a.length;j++){let h=a[j];if(h=="--"){n=n.concat(a.slice(j+1));break}if(h.startsWith("-")&&h!="-"){const[l,p]=h.replace(/^\-+/,"").split("=");(l=="h"||l=="help")&&B(null,f);if(!(l in b)){if(h[1]!="-"&&!p){let m=l.split("");if(m.every(o=>typeof b[o]=="boolean")){m.map(o=>x(o,"",h));continue}}B(`unknown option ${h}`,f)}x(l,p,h)}else n.push(h)}return{opts:c,args:n}}const W=Symbol("IS_MAIN_CALL");async function X(b,a){let f=!1;a===W?(a={},f=!0):(a&&(a={...a}),oa(a));const{opts:c,args:v}=V(S,b,f?T:null);if(f){if(v.length==0){let d=null;try{d=jsonparseFile(Ra.findTSConfigFile(process.cwd()))}catch(e){}if(d){let e=d.files||d.include;if(e)if(!Array.isArray(e))v.push(e);else for(let k of e)v.push(k);c.outfile||(c.outfile=d.outFile),c.outfile||(c.outdir=d.outDir)}v.length==0&&B("missing <srcfile> argument",T)}a.entryPoints=v,a.outfile=c.o||c.outfile||void 0,a.outdir=c.outdir||void 0,a.bundle=c.bundle||void 0,a.minify=c.minify||void 0,a.cwd=process.cwd()}const n=a.watch=c.watch=!!(c.w||c.watch||a.watch),x=a.debug=c.debug=!!(c.debug||c.g||a.debug),j=a.quiet=c.quiet=!!(c.quiet||a.quiet);a.color!==void 0&&(a.color?c.color=!0:c["no-color"]=!0);const h=c.color||(c["no-color"]?!1:void 0);Na.style=Na.termStyle(process.stdout,h),Na.stderrStyle=Na.termStyle(process.stderr,h);const l=(...d)=>console.error(Na.stderrStyle.red(`${u}:`),...d),p=console.log.bind(console),m=j?()=>{}:console.log.bind(console),o=j?()=>{}:Ma.memoize(m),ya=c["debug-self"]?d=>{let e=d();Array.isArray(e)||(e=[e]),console.error(Na.stderrStyle.pink("[DEBUG]"),...e)}:()=>{},$=!!c.diag;let C=c["no-diag"]?"off":$?"on":"auto";a.tsc!==void 0&&a.tsc!=="auto"&&(C=a.tsc&&a.tsc!="off"?"on":"off");if($&&C=="off")return l("invalid configuration: diagnostics are disabled but only disagnostics was requested."),H(1),!1;const aa=c["inline-sourcemap"]?"inline":c.sourcemap?"external":a.sourcemap;process.stdout.isTTY||(c["no-clear"]=!0);const r=a.cwd?fa.resolve(a.cwd):process.mainModule&&A(process.mainModule.filename)||__dirname;if(r!=process.cwd()){let d=fa.relative(process.cwd(),r);d.startsWith(".."+fa.sep)&&(d=r),o(`Changing working directory to ${d}`)}a.cwd=r,a.title||(a.title=a.name||Ka.tildePath(a.cwd));let ba=0;function za(){Pa.screen.clear(),ba=Ka.clock()}let Aa=a.onStart||(()=>{}),D=a.onEnd?(d,e)=>{const k=a.onEnd(a,d),g=z=>z===void 0?e:z;return k instanceof Promise?k.then(g):g()}:(d,e)=>e;if(a.outfileMode){let d=D;D=(e,k)=>{try{Oa.chmod(a.outfile,a.outfileMode)}catch(g){l("configuration error: outfileMode: "+g.message),H(1)}return d(e,k)}}function Ba(d,{stderr:e,warnings:k}){Y(k);const g=a.outfile;if(!g)e=e.replace(/\n$/,""),e.length>0&&m(e);else{const z=/\(([^\)]+)\)\n/.exec(e),Ea=Ka.fmtDuration(Ka.clock()-d);let ea=g;if(aa=="external"){const J=fa.extname(g),Fa=fa.join(fa.dirname(g),fa.basename(g,J));ea=`${Fa}.{${J.substr(1)},${J.substr(1)}.map}`}m(Na.style.green(`Wrote ${ea}`)+` (${z?z[1]:"?B"}, ${Ea})`)}return D({warnings:k,errors:[]},!0)}function Ca(d,{stderr:e,warnings:k,errors:g}){return Y(k),console.error(e),g.length==0&&g.push({text:e.trim(),location:null}),/^error: must provide/i.test(e)&&(a||process.exit(1)),D({warnings:k,errors:g},!1)}async function ca(){n&&!c["no-clear"]&&za();const d={minify:!x,sourcemap:aa,color:Na.stderrStyle.ncolors>0,...pa(a),define:{DEBUG:x,...a.define||{}}},e=Aa(a);e instanceof Promise&&await e;const k=process.cwd();process.chdir(r);const g=Ia.build(d);return process.chdir(k),g.then(Ba.bind(null,Ka.clock()),Ca.bind(null,Ka.clock()))}const Da=c.diag?Promise.resolve():ca();let s=null,I=!1;if(C!="off"){const d=n&&c.diag&&!c["no-clear"];s=Ma.memoize(Ra.tslint)({watch:n,quiet:j,clearScreen:d,colors:Na.style.ncolors>0,cwd:r,mode:C,srcdir:A(a.entryPoints[0]),rules:a.tsrules,onRestart(){!c["no-clear"]&&Ka.clock()-ba>5000&&Pa.screen.clear()}}),I=Ma.isMemoized in s;if(c.diag)return d&&Pa.screen.clear(),s;I||s.catch(e=>(l(e.stack||String(e)),!1))}let y=await Da;if(!n){if(s){let d;y?(I||(d=setTimeout(()=>m("Waiting for TypeScript... (^C to skip)"),1000)),y=await s.catch(()=>!1)):s.cancel(),clearTimeout(d)}if(a)return y||H(),y;process.exit(y?0:1)}m("Watching files for changes...");const da=Array.from(new Set(a.entryPoints.map(d=>A(fa.resolve(fa.join(r,d))))));ya(()=>["watching dirs:",da]),Qa.watchdir(da,/\.[tj]s$/,{recursive:!0},d=>{m(d.length+" files changed:",d.join(", ")),ca()})}function Y(b){b.length>0&&console.log("[warn] "+b.map(a=>a.text).join(`
`))}function qa(){return X(process.argv.slice(1),W).catch(b=>{console.error(Na.stderrStyle.red(u+": "+(b.stack||b))),process.exit(1)}).then(()=>{process.exit(0)})}const{opts:q,args:ra}=V(S,process.argv.slice(1));q.watch=!!(q.watch||q.w),q.debug=!!(q.debug||q.g),K.exports={prog:u,cliopts:q,cliargs:ra,dirname:A,basename:la,watchdir:Qa.watchdir,scandir:Qa.scandir,tslint:Ra.tslint,defaultTSRules:Ra.defaultTSRules,termStyle:Na.termStyle,chmod:Oa.chmod,editFileMode:Oa.editFileMode,fmtDuration:Ka.fmtDuration,tildePath:Ka.tildePath,findInPATH:Ka.findInPATH,findTSConfigFile:Ra.findTSConfigFile,build(b){return X(process.argv.slice(1),b).catch(a=>{console.error(Na.stderrStyle.red(u+": "+(a.stack||a))),process.exit(1)})}},K.id=="."&&qa()}};module.exports=k$(1);
