class HomePage {

    // consultar o que está escrito no frame da seção / cabeçalho
    get productsTitle() {
        return $('//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.view.ViewGroup/android.widget.TextView')
    }

    // clicar no produto mochila
    async clickProduct() {
        $('//android.widget.ImageView[@content-desc="Sauce Lab Back Packs"]').click()
    }

    // espera pela seção / cabeçalho onde deve estar escrito "Products"
    async waitLoading() {
        await this.productsTitle.waitForDisplayed()
    }
}

module.exports = new HomePage()