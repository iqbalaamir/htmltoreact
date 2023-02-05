import React from 'react'
import './App.css'
import Cards from './Cards'

const App = () => {
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
          <Cards/>
          </div>
        </div>
      </section>
    </>
  );
};

export default App
