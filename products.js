var produtos = [
    {
        nomeProduto: 'Siena',
        categoria: 'carro',
        valor: "20000"
    },
    {
        nomeProduto: 'Hornet',
        categoria: 'moto',
        valor: "44000"
    },
    {
        nomeProduto: 'daily 35s14',
        categoria: 'caminhao',
        valor: "140000"
    },
    {
        nomeProduto: 'C3',
        categoria: 'carro',
        valor: "68000"
    },
    {
        nomeProduto: 'Kawasaki',
        categoria: 'moto',
        valor: "37000"
    },
    {
        nomeProduto: 'tector',
        categoria: 'caminhao',
        valor: "350000"
    }
]

function listarPorCategoria(categoria) {
    let filtrarPorProduto = []
    filtrarPorProduto = produtos.filter(produto => (produto.categoria === categoria));
    return filtrarPorProduto;
}

function listarPorValor(valorMinimo, valorMaximo) {
    let filtrarPorProduto = [];
    filtrarPorProduto = produtos.filter(produto => (produto.valorMinimo >= valorMinimo && produto.valorMaximo <= valorMaximo));
    return filtrarPorProduto;
}