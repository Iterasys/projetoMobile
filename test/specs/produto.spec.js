describe("Compra ate Pagina do Produto", () => {
    before(async () => {
        
        // Mapeia e espera a palavra Products na home
        const tituloProdutos = '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.view.ViewGroup/android.widget.TextView';
        await $(tituloProdutos).waitForDisplayed();

    }); // fecha before

    it("Seleciona o produto Mochila", async() => {
        // Mapeia e clica na foto da mochila
        const produto = '//android.widget.ImageView[@content-desc="Sauce Lab Back Packs"]';
        await $(produto).click();

        // Mapeia e valida o nome do produto
        const nomeProduto = '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView';
        expect(await $(nomeProduto).getText()).toEqual("Sauce Lab Back Packs");

        // Mapeia e valida o preço do produto
        const precoProduto = '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.LinearLayout/android.widget.TextView';
        expect(await $(precoProduto).getText()).toEqual("$ 29.99");

    }); // fecha it

}); // fecha describe