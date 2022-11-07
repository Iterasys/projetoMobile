Feature: Selecionar produto
    Scenario: Selecionar a mochila na loja
        Given que acesso a pagina inicial do app
        When clico em "Sauce Lab Back Packs"
        Then aparece a pagina com o produto "Sauce Lab Back Packs" por "$ 29.99"