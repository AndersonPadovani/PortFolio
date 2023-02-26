import { useEffect, useState } from 'react';
import './index.css';
import './media.css'

import Logo from '../../img/logo.svg';
import Foto from '../../img/foto-apresentacao.svg';
import FotoUser from '../../img/foto.jpg';

import empresas from '../../componente/expUser/userExp';

import curriculo from '../../files/curriculo.pdf';

import Cards from '../../componente/cardUser/cardUser';

import axios from 'axios';

function Index() {
  let myInfo = "Bom o que estou procurando é uma oportunidade para que possa ingressar na área de desenvolvedor, "+
                "estes aqui do lado são alguns dos meus últimos contratos profissionais, e nelas apresento algumas informações é so clicar.";
  const [info, setInfo] = useState("");
  const [card, setCard] = useState();

   async function getCardInfo (){
    const formData = new FormData();
    formData.append('appQuery', 'projetos');
    formData.append('typeSql', 'selectAllprojetos');
    await axios("https://andersonpadovani.com.br/crudSql/api.php", {
      method: 'POST',
      data: formData
    }).then(({data}) => {
      if(data.status && data.infoData !== []){
        setCard(data.infoData);
      }
    })
  }

  useEffect(() => {
    getCardInfo();
  },[])

  return (
    <div className="App">

      <div className='container'>
       
        <div className='menu'>

          <img src={Logo} alt='Logo marca do author'></img>

          <div className='menu-bar-2'>
            <button>X</button>
            <ul>
              <li key="1"><a href='/'>Home</a></li>
              <li key="2"><a href='#sobre'>Quem sou</a></li>
              <li key="3"><a href='#experiencias'>Experiência</a></li>
              <li key="4"><a href='#projetos'>Projetos</a></li>
            </ul>
          </div>

          <div className='menu-bar'>
            <ul>
              <li key="5"><a href='/'>Home</a></li>
              <li key="6"><a href='#sobre'>Quem sou</a></li>
              <li key="7"><a href='#experiencias'>Experiência</a></li>
              <li key="8"><a href='#projetos'>Projetos</a></li>
            </ul>
          </div>
    
        </div>
        
        <hr></hr>

        <div className='apresentacao'>
          
          <div className='card'>
            <img src={Foto} alt='Foto ilustrativa programadores'></img>            
            <p>Olá, me chamo <span>Anderson Ramos Padovani</span> e esta é minha página de portifólio profissional pessoal.</p>
          </div>
          
          <button><a href='#sobre'>More ↓</a></button>

        </div>

        <div id='sobre' className='quem-sou'>
          <div className='caixa-foto-botao'>
          
            <img className='foto' src={FotoUser} alt='Foto Pessoal do author'></img>

            <div className='btn-ctn'>
              <div className='contato'>
                <a href='https://www.linkedin.com/in/anderson-padovani-047266180/' target={"_blank"} rel="noreferrer" ><img src={require('../../img/linkedin.png')} alt="linkedin"></img></a>
                <a href='https://github.com/AndersonPadovani' target={"_blank"} rel="noreferrer" ><img src={require('../../img/github.png')} alt="github"></img></a>
                <a href='https://www.instagram.com/anderson_r_padovani/' target={"_blank"} rel="noreferrer" ><img src={require('../../img/instagram.png')} alt="instagram"></img></a>
                <a href='https://www.facebook.com/AndersonR.Padovani' target={"_blank"} rel="noreferrer" ><img src={require('../../img/facebook.png')} alt="facebook"></img></a>
                <a href='(45) 9 9953-0893' target={"_blank"} ><img src={require('../../img/whatsapp.png')} alt="whatsapp"></img></a>
              </div>

              <input className='button-sobre' id='download' type='submit' value='Curriculo' onClick={(e) => {
                e.preventDefault();
                window.open(curriculo);
              }}></input>
            </div>

          </div>

          <div className='sobre'>
            <h1>SOBRE MIM</h1>

            <h3>Cascavel, Paraná</h3>

            <p>   &emsp;Olá, meu nome é Anderson, e sou um profissional em transição de carreira, anteriormente trabalhei como montador de veículos, 
                mas recentemente decidi mudar para a área de programação.<br/>
                  &emsp;Desde então, tenho dedicado muito tempo e esforço para adquirir as habilidades e conhecimentos necessários para se tornar um programador de sucesso.
                Tenho uma paixão por resolver problemas e criar soluções e acredito que a programação é a ferramenta ideal para fazê-lo.<br/>
                  &emsp;Com a minha experiência anterior em montagem de veículos, eu trazia uma forte capacidade de trabalhar com precisão e atenção aos detalhes, 
                habilidades que tenho aplicado na minha jornada de aprendizado de programação. 
                Já tenho experiência com linguagens de programação como Python, HTML, CSS e JavaScript, 
                e estou sempre buscando ampliar meus conhecimentos e habilidades.<br/>
                  &emsp;Meu objetivo é seguir crescendo como programador, trabalhando em projetos interessantes e desafiadores, 
                e continuar a aprender e aprimorar minhas habilidades. Se você estiver procurando por um programador dedicado e apaixonado, 
                por favor, não hesite em me contactar.
            </p>
          </div>

        </div>

        <div id='experiencias' className='experiencias'>
          <h2>Experiencias Profissionais</h2>

          <div className='exps'>
            <div className='empresas'>
              <ul>
                {
                   Object.keys(empresas).map(work => <button onClick={() => setInfo(work)}><li key={Math.random() * (10, 100).toString()} >{work}</li></button> )
                }
              </ul>
            </div>

            <div className='infoCargo'>
              <p>{info ? empresas[info] : myInfo}</p>
            </div>
          </div>

        </div>

        <div id='projetos' className='projetos'>
          { 
            card 
            ? Object.keys(card).map((k, i) => {
                return  <Cards 
                          title={card[k]['title']} 
                          // image={require('../../img/'+card[k]['img'])} 
                          image={window.location.origin + "/_img/" + card[k]['img']} 
                          info={card[k]['info']}
                          url={card[k]['url']} 
                          ver={card[k]['visible']} 
                          linkShow={card[k]['workStart']}/>
                })
            : <p>Desculpe, não foram encontrado nenhum projeto em nosso banco de dados.</p>
          }
                                 
        </div>

        <footer className='footer'>
          <span>Esta pagina foi criada e desenvolvido por Anderson Ramos Padovani 2022 &copy;</span>
          <span>Projeto OpenSource- GITHUB <a href='https://github.com/AndersonPadovani/PortFolio' target='_blank' rel="noreferrer"><strong>VISITAR</strong></a></span>
        </footer>

      </div>

    </div>
  );
}

export default Index;
