import './PagProduto.css';
import CEP from './cep.js'

function DevaCurl(){
    return(
        <div className='PagProduto'>
            <head>

            </head>
            <body>
            <section id='informacoes'>
                <div id="borda">
                    <img src="https://mail.google.com/mail/u/0?ui=2&ik=5a510d9821&attid=0.4&permmsgid=msg-f:1818428820059225876&th=193c5b609cf67f14&view=att&zw&disp=safe"  alt=""></img>
                </div>
                <div id="detalhes">
                    <div>
                        <h5 id="nomeProduto">Match Ciência das Curvas </h5>
                        <h6>Descrição: </h6>
                        <p>O Blend de 7 Óleos de origem 99,6% natural, que fornecem nutrição, hidratação, brilho e definição + Blend hidratantes,
                            com ingredientes mais reconhecidos do mercado com potencial de osmorregulação da fibra, regulando os níveis de água. </p>
                        <h6>Como usar: </h6>
                        <p>Com os cabelos molhados ou úmidos, aplique uma pequena quantidade de produto em pequenas mechas, 
                            do comprimento em direção às pontas, modele e finalize como desejar. Pode ser usado diariamente.</p>
                        <h6>Quantidade: 450ml</h6>
                        <h6>Valor: R$ 59,90</h6>
                    </div>
                </div>
            </section>
            <section id="cep"><CEP></CEP></section>
            </body>
            
        </div>
    );

}
export default DevaCurl;