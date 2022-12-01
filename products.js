var produtos = [
    {
        nomeProduto: 'Siena',
        categoria: 'carro'
    },
    {
        nomeProduto: 'Hornet',
        categoria: 'moto'
    },
    {
        nomeProduto: 'daily 35s14',
        categoria: 'caminhao'
    },
    {
        nomeProduto: 'C3',
        categoria: 'carro'
    },
    {
        nomeProduto: 'Kawasaki',
        categoria: 'moto'
    },
    {
        nomeProduto: 'tector',
        categoria: 'caminhao'
    }
]

function listarPorCategoria(categoria) {
    let filtrarPorProduto = []
    filtrarPorProduto = produtos.filter(produto => (produto.categoria === categoria));
    return filtrarPorProduto;
}