import { build as bundle } from 'esbuild';
import {copyFile, mkdir, rm} from 'node:fs/promises';
import path from 'node:path';

const publicFiles=['index.html','styles.css','application.css','cabecera-alisios.png','favicon.svg'];
for(const file of publicFiles)await copyFile('web/'+file,file);
const root=process.cwd();
await bundle({absWorkingDir:root,entryPoints:[path.join(root,'web','app.js')],outfile:path.join(root,'app.js'),bundle:true,format:'iife',platform:'browser',target:'es2020',minify:true,loader:{'.png':'dataurl'}});
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
for(const file of [...publicFiles,'app.js'])await copyFile(file,'dist/'+file);
await copyFile('.nojekyll','dist/.nojekyll');
console.log('Versión web estática lista en la raíz y en dist/.');
