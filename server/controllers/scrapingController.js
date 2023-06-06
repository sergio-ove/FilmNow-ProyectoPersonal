const puppeteer = require("puppeteer");




Scrap = {

    insertScrap: async (req, res) => {

        const { dates } = req.body;
        const user = dates
        console.log(user)

        try {

            (async () => {

                // Si headless esta en true, se oculta el chromium
                const browser = await puppeteer.launch({ headless: false });

                // Es como abrir una nueva página/pestaña en el navegador
                const page = await browser.newPage();

                // Para ir a una página en concreto.
                await page.goto("https://www.imdb.com");

                await page.type("#suggestion-search", user);

                const searchResultSelector = '#react-autowhatever-1--item-0';

                await page.waitForSelector(searchResultSelector);

                await page.click(searchResultSelector);

                await page.keyboard.press('Enter');

                await page.waitForNavigation();


                const imagenes = await page.$$eval("img.ipc-image", (imgs) =>
                    imgs.map((img) => img.src)
                );

                const sinopsis = await page.$$eval("span.sc-6cc92269-0.iNItSZ", (sinopsis) =>
                    sinopsis.map((sin) => sin.innerHTML)
                );

                const titles = await page.$$eval("h1.sc-b73cd867-0.cEmnhL", (title) =>
                    title.map((tit) => tit.innerHTML)
                );

                const plataforma = await page.$$eval("div.sc-ae5af1cd-3.bYtHFq", (plataform) =>
                    plataform.map((plt) => plt.innerHTML)
                );



                const arrayPelis = [];
                for (let i = 0; i < 1; i++) {
                    const datosPeli = {

                        img: imagenes[i],
                        sin: sinopsis[i],
                        tit: titles[i],
                        plt: plataforma[i]

                    };
                    arrayPelis.push(datosPeli);
                }

                res.json({
                    arrayPelis
                })

                console.log(arrayPelis)
                // await browser.close();
            })();

        } catch (error) {
            console.log(error)
            res.status(500)
            res.send(error.message)
        }
    }


}


module.exports = Scrap