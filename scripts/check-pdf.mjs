import {writeFile,readFile,mkdir} from 'node:fs/promises';
import {makePdf} from '../web/pdf.mjs';
import {calculate} from '../web/calculator.mjs';
import {initialTariffs} from '../web/tariffs.mjs';
import {quote} from '../tests/fixture.mjs';
const r=calculate(quote,initialTariffs),q={...quote,includes:r.includes,excludes:r.excludes};
const logo='data:image/png;base64,'+(await readFile('web/cabecera-alisios.png')).toString('base64');
await mkdir('tmp/pdfs',{recursive:true});
for(const [name,offer] of [['sample',q],['long',{...q,includes:(q.includes+' ').repeat(10)}]]){
  const pdf=makePdf(offer,r,'ASL-2026-EJEMPLO',logo);
  await writeFile('tmp/pdfs/'+name+'.pdf',Buffer.from(pdf.output('arraybuffer')));
  console.log(name,pdf.getNumberOfPages(),'page(s)');
}
