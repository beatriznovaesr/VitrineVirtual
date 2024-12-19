import './PagProduto.css';
import CEP from './cep.js'

function Curlycrush(){
    return(
        <div className='PagProduto'>
            <head>

            </head>
            <body>
            <section id='informacoes'>
                <div id="borda">
                    <img src="https://magicbeautypro.fbitsstatic.net/img/p/magic-beauty-curly-crush-creme-para-pentear-e-ativador-300ml-150145/336656.jpg?w=882&h=882&v=no-value"  alt=""></img>
                </div>
                <div id="detalhes">
                    <div>
                        <h5 id="nomeProduto">Curly Crush</h5>
                        <h6>Descrição: </h6>
                        <p>Creme para pentear e ativador de cachos para cabelos ondulados, cacheados e crespos. Define, nutre e desembaraça os fios, além de proporcionar 
                            brilho e ação antifrizz. Proteção térmica e contra os raios UV. Sem enxágue.A linha Curly Crush Proporciona nutrição, definição e brilho para 
                            cabelos ondulados, cacheados e crespos. Sua fórmula com óleo de coco, manteiga de karité e extrato e acácia promove reposição lipídica, 
                            fornece nutrientes essenciais e reativa a memória dos cachos, deixando os fios saudáveis e macios.</p>
                        <h6>Como usar: </h6>
                        <p>Aplique nos cabelos limpos e úmidos, no comprimento e pontas. Não enxágue. Finalize como preferir ou deixe secar naturalmente.</p>
                        <h6>Quantidade: 300ml</h6>
                        <h6>Valor: R$ 51,92</h6>
                    </div>
                </div>
            </section>
            <section id="cep"><CEP></CEP></section>
            </body>
            
        </div>
    );

}
export default Curlycrush;