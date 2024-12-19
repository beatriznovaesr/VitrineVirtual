import './PagProduto.css';
import CEP from './cep.js'

function WidiCare(){
    return(
        <div className='PagProduto'>
            <head>

            </head>
            <body>
            <section id='informacoes'>
                <div id="borda">
                    <img src="https://mail.google.com/mail/u/0?ui=2&ik=5a510d9821&attid=0.2&permmsgid=msg-f:1818428820059225876&th=193c5b609cf67f14&view=att&zw&disp=safe"  alt=""></img>
                </div>
                <div id="detalhes">
                    <div>
                        <h5 id="nomeProduto">Encaracolando a Juba</h5>
                        <h6>Descrição: </h6>
                        <p>Cansados dessa história de controle dos cachos, Encaracolando a Juba Creme de Pentear traz para você que é cacheada e ama sua cabeleira
                            volumosa, a linha JUBA que define, nutre, hidrata e empodera suas madeixas com auxílio dos ativos: Manteiga de Murumuru Orgânica, 
                            Óleo de Linhaça Dourada e Extrato de Avelã.</p>
                        <h6>Como usar: </h6>
                        <p>Com o cabelo úmido, divida-o em mechas finas e inicie o processo pela parte da nuca para ficar mais fácil a aplicação. 
                            Coloque uma quantidade suficiente do Encaracolando a Juba Creme de Pentear nas mãos e aplique nos cabelos fazendo fitas (mechas finas). 
                            Repita esse processo por todo o cabelo e depois amasse as mechas de baixo para cima para ajudar na definição. Deixe secar naturalmente 
                            ou com ajuda de um difusor.</p>
                        <h6>Quantidade: 1L</h6>
                        <h6>Valor: R$ 98,90</h6>
                    </div>
                </div>
            </section>
            <section id="cep"><CEP></CEP></section>
            </body>
            
        </div>
    );

}
export default WidiCare;