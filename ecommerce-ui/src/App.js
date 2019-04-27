import React from 'react';
import Card from './components/card';
import airbnbs from './components/airbnbs';
import './App.css';

function App() {
  return (
    <div id="cardHolder">
      {
        Object.keys(airbnbs).map((item, index) => (
          <Card 
            key={index}
            title={airbnbs[item].title}
            city={airbnbs[item].location.city}
            country={airbnbs[item].location.country}
            image={airbnbs[item].image}
            hostname={airbnbs[item].hostname}
            isSuperHost={airbnbs[item].isSuperHost}
            cost={airbnbs[item].payment.cost}
            cancellation={airbnbs[item].payment.description}
            starCount={airbnbs[item].rating.stars}
            reviewCount={airbnbs[item].rating.reviews}>
          </Card>
        ))
      }
    </div>
  );
}

export default App;
