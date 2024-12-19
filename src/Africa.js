import './PagProduto.css';
import CEP from './cep.js'

function Africa(){
    return(
        <div className='PagProduto'>
            <head>

            </head>
            <body>
            <section id='informacoes'>
                <div id="borda">
                    <img src="https://mail.google.com/mail/u/0?ui=2&ik=5a510d9821&attid=0.7&permmsgid=msg-f:1818428820059225876&th=193c5b609cf67f14&view=att&zw&disp=safe"  alt=""></img>
                </div>
                <div id="detalhes">
                    <div>
                        <h5 id="nomeProduto">Africa Baobá</h5>
                        <h6>Descrição: </h6>
                        <p>O Creme de Pentear Apse Cosmetics África Baobá é ideal para a sua rotina diária de cuidados com os fios. Além disso, confere brilho, maciez e deixam as madeixas com mais vida.</p>
                        <h6>Como usar: </h6>
                        <p>Após lavar e condicionar os cabelos com a linha África, aplique nos cabelos úmidos o Creme de Pentear com o auxílio de pente ou utilizando sua 
                            técnica de aplicação favorita. Não é necessário enxaguar.</p>
                        <h6>Quantidade: 500g</h6>
                        <h6>Valor: R$ 49,90</h6>
                    </div>
                </div>
            </section>
            <section id="cep"><CEP></CEP></section>
            </body>
            
        </div>
    );

}
export default Africa;