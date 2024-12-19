import './Home.css';
import { Link } from "react-router-dom";

function Home() {

  return (
    <body>
       <div class="row" id="cardsrow1">
      <h1>Finalizadores</h1>
      <div class="col-sm-3 mb-2 mb-sm-0">
        <div class="card">
          <Link to="/devacurl">
          <img src="https://mail.google.com/mail/u/0?ui=2&ik=5a510d9821&attid=0.4&permmsgid=msg-f:1818428820059225876&th=193c5b609cf67f14&view=att&zw&disp=safe" alt="creme"></img>
          </Link>
        <div class="card-body">
            <h5 class="card-title">Match Ciência das Curvas Cachos - Creme Para Pentear 450ml</h5>
            <p class="card-text">R$ 59,90</p>
          </div>
          
        
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <Link to='/nutbuttercream'>
          <img src="https://mail.google.com/mail/u/0?ui=2&ik=5a510d9821&attid=0.0&permmsgid=msg-f:1818428820059225876&th=193c5b609cf67f14&view=att&zw&disp=safe"  alt=""></img>
          </Link>
          <div class="card-body">
            <h5 class="card-title">Lola Cosmetics Plot Twist Nut Butter Cream - Manteiga 480g</h5>
            <p class="card-text">R$ 69,90</p>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <Link to='/curlycrush'>
          <img src="https://magicbeautypro.fbitsstatic.net/img/p/magic-beauty-curly-crush-creme-para-pentear-e-ativador-300ml-150145/336656.jpg?w=882&h=882&v=no-value"  alt=""></img>
          </Link>
          <div class="card-body">
            <h5 class="card-title">Magic Beauty Curly Crush - Creme Para Pentear e Ativador 300ml</h5>
            <p class="card-text">R$ 51,92</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="cardsrow2">
      <div class="col-sm-3 mb-3 mb-sm-0">
        <div class="card">
          <Link to='/revelacachos'>
          <img src="https://m.media-amazon.com/images/I/6181VfwfzBL.__AC_SX300_SY300_QL70_ML2_.jpg"  alt=""></img>
          </Link>
          <div class="card-body">
            <h5 class="card-title">Siàge Revela Os Cachos - Creme Para Pentear 500g</h5>
            <p class="card-text">R$ 64,99</p>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <Link to='/widicare'>
          <img src="https://mail.google.com/mail/u/0?ui=2&ik=5a510d9821&attid=0.2&permmsgid=msg-f:1818428820059225876&th=193c5b609cf67f14&view=att&zw&disp=safe"  alt=""></img>
          </Link>
          <div class="card-body">
            <h5 class="card-title">Widi Care Encaracolando a Juba - Creme de Pentear 1L</h5>
            <p class="card-text">R$ 98,90</p>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <Link to='/africa'>
          <img src="https://mail.google.com/mail/u/0?ui=2&ik=5a510d9821&attid=0.7&permmsgid=msg-f:1818428820059225876&th=193c5b609cf67f14&view=att&zw&disp=safe"  alt=""></img>
          </Link>
          <div class="card-body">
            <h5 class="card-title">Apse Africa Baobá - Creme de Pentear 500g</h5>
            <p class="card-text">R$ 49,90</p>
          </div>
        </div>
      </div>
    </div>

    </body>
  );
}

export default Home;
