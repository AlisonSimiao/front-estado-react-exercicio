import './style.css';
import cards from '../../cards';
import Card from '../../components/Card';
import React from 'react';
import ganhou from "./../../assets/congrats.png";

function Main() {
  const [cartas, setcartas] = React.useState(cards);
  
  React.useEffect(() => {
    
    let array = cartas;
    const [first, second]  = cartas.filter((card)=>{ return card.turned });
    if( second ){
      if( first.slug === second.slug ){
        array = cartas.filter((card)=>{ return card.slug !== first.slug });
      }
      else{
        first.turned = false;
        second.turned = false;
      }
      setTimeout(() => {
        setcartas([...array]);
      }, 1000);  
    }
   
  }, [cartas])
  
  function Grid(){
    return (
      <div className="grid-cards">
        {cartas.map( (card)=>{
          return <Card  key={card.id} 
                        onClick={()=> {
                          const array = cartas;
                          card.turned = !card.turned;
                          setcartas( [...array] );
                        }}
                        elementos={cartas} setcartas={setcartas} card={card} />
                      } ) 
            }
        </div>
    )
  }

  return (
    <div className='container'>
      <section className='menu'>
        <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Puzzle.svg/2048px-Puzzle.svg.png" 
              alt="logo imagem" 
            />
            <p>cubos puzzle</p>
        </div>
        <div className="reset">
          <button
            onClick={_=> setcartas(cards) }
          >reset</button>
        </div>
      </section>
      <section className='tela'>
      { !cartas.length? 
        <img src={ganhou} alt="ganhou"/>
          :
        <Grid />
        }
              
      </section>
    </div>
  );
}

export default Main;
