const { Given, When, Then } = require('@wdio/cucumber-framework')

const HomePage = require("../pageobjects/HomePage")
const ProductPage = require("../pageobjects/ProductPage")

Given(/^que acesso a pagina inicial do app$/, async () =>{
    // como já abre e acessa automaticamente, apenas
    // esperar o carregamento da página
    await HomePage.waitLoading()
})

When(/^clico em "([^"]*)?"$/, async (produto) =>{
    await HomePage.clickProduct(produto)
})

Then(/^aparece a pagina com o produto "([^"]*)?" por "([^"]*)?"$/, async (produto, preco) =>{
    // validar o nome do produto
    expect(await ProductPage.titulo.getText()).toEqual(produto)
    // arrasta para cima
    await ProductPage.arrastaParaCima()
    // validar o preco
    expect(await ProductPage.preco.getText()).toEqual(preco)

})