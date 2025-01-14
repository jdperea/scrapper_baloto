import { chromium } from 'playwright'
import fs from 'fs/promises' 

const browser = await chromium.launch({
    headless: true
})

const page = await browser.newPage()

await page.goto(
    'https://baloto.com/resultados'
)

const max_page = 78
let current_page = 1

let salida = []
let resultados

while (current_page <= max_page) {
    resultados = await page.$$eval(
        'tr',
        (results) => (
            results.map((el)=>{
                let title = null
                let fecha = ''
                let result = {}
                const titleimg = el
                    .querySelector('img')
                    ?.getAttribute('src')
                
                if (!titleimg) return null

                switch (titleimg) {
                    case null:
                        title = 'error'
                        break;
                    case 'https://www.codificatuidea.com/baloto/static/img/baloto-kind.png':
                        title = 'Baloto';
                        break;
                    case 'https://www.codificatuidea.com/baloto/static/img/revancha-kind.png':
                        title = 'Revancha';
                        break;
                    default:
                        break;
                }
                if (title != null){
                    los_results = el
                    .querySelectorAll('.creation-date-results')
                    fecha = los_results[0]?.innerText.replace("de ", "")
                    const numbers = los_results[1]?.innerText.replace(" ", "").split('-')
                    result = {
                        normal: [
                            numbers?.[0].trim(),
                            numbers?.[1].trim(),
                            numbers?.[2].trim(),
                            numbers?.[3].trim(),
                            numbers?.[4].trim()],
                        red: numbers?.[5].trim()
                    }
                }

                return {title, fecha, result}
            }).filter(item => item && item.title !== null)
        )
    )
    
    salida = [...salida, ...resultados]

    console.log(current_page, max_page)
    current_page++
    await page.goto(
        'https://baloto.com/resultados?page='+current_page
    )
}
const jsonData = JSON.stringify(salida, null, 2)
await fs.writeFile('resultados_baloto.json', jsonData)
console.log('Datos guardados en resultados_baloto.json')

await browser.close()