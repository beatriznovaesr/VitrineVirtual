import './PagProduto.css';
import CEP from './cep.js'

function Revelacachos(){
    return(
        <div className='PagProduto'>
            <head>

            </head>
            <body>
            <section id='informacoes'>
                <div id="borda">
                    <img src="https://m.media-amazon.com/images/I/6181VfwfzBL.__AC_SX300_SY300_QL70_ML2_.jpg"  alt=""></img>
                </div>
                <div id="detalhes">
                    <div>
                        <h5 id="nomeProduto">Revela os cachos</h5>
                        <h6>Descrição: </h6>
                        <p>O Creme Para Pentear Siàge Revela Os Cachos é um tratamento ideal para cabelos cacheados :ondulados, crespos e em transição. 
                            Possui fórmula inteligente que reconhece os pontos de torção do fio, fornecendo cachos maravilhosos! Fórmulas com Elastina , 
                            combinada à Manteiga de Karité , que garantem alta definição, força, elasticidade e 3X menos frizz . Este creme para pentear hidrata 
                            imediatamente e proporciona o máximo da definição para os cachos. Multibenefícios: -Cabelos fáceis de modelar; 
                            -Definição por até 2 dias; -Balanço natural; -Proteção térmica 230°C; -Frizz bloqueado até a próxima lavagem.
                            O resultado são Cachos impecáveis, ultra hidratados e definidos até a última volta. Nenhum produto Eudora é testado em animais, 
                            ou seja, este item possui selo Cruelty Free.</p>
                        <h6>Como usar: </h6>
                        <p>Aplique no comprimento dos cabelos úmidos. Modele do seu jeito. Não enxágue. Produto ideal para fazer fitagem.</p>
                        <h6>Quantidade: 500g</h6>
                        <h6>Valor: R$ 64,99</h6>
                    </div>
                </div>
            </section>
            <section id="cep"><CEP></CEP></section>
            </body>
            
        </div>
    );

}
export default Revelacachos;