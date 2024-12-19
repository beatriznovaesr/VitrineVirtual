import './PagProduto.css';
import CEP from './cep.js'

function Nutbuttercream(){
    return(
        <div className='PagProduto'>
            <head>

            </head>
            <body>
            <section id='informacoes'>
                <div id="borda">
                    <img src="https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45399_plot-twist-nut-butter-cream-480g-ps-19629-148_s13_638621807397986615.webp"  alt=""></img>
                </div>
                <div id="detalhes">
                    <div>
                        <h5 id="nomeProduto">Plot Twist</h5>
                        <h6>Descrição: </h6>
                        <p>Com óleo de Castanha do Pará, Ucuuba, Hemisqualano e Suco de Batata Yacon. 
                            Forneço cuidados nutritivos aos fios para promover a retenção da umidade e estilização maravilhosa e versátil. 
                            Curiosidades sobre o Óleo de Castanha do Brasil, um ativo super poderoso: No norte do Brasil sou frequentemente 
                            utilizado por gestantes ou não gestantes, na prevenção de estrias, tal o meu poder proteico. Também faz parte da minha 
                            história ancestral que quando sou aplicado nos cabelos em exposicão solar, tenho poder de clarear e iluminar as madeixas. </p>
                        <h6>Como usar: </h6>
                        <p>Nos cabelos higienizados, condicionados e bem úmidos, distribua Nut ButterCream uniformemente mecha a mecha enquanto define o estilo desejado. 
                            Faça fitagem para estimular o desenho dos cachos. Não enxágue. Estilize como de costume. Solte a raiz com pente garfo quando estiver completamente 
                            seco para adicionar volume.</p>
                        <h6>Quantidade: 480g</h6>
                        <h6>Valor: R$ 69,90</h6>
                    </div>
                </div>
            </section>
            <section id="cep"><CEP></CEP></section>
            </body>
            
        </div>
    );

}
export default Nutbuttercream;