class ProductPage {

    get titulo() {
        return $('//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView')
    }

    async arrastaParaCima() {
        await driver.touchAction([
            { action: "press", x: 350, y: 1100 },
            { action: "moveTo", x: 350, y: 300 },
            "release"
        ])
    }

    get preco() {
        $('//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.LinearLayout/android.widget.TextView')
    }
}

module.exports = new ProductPage()