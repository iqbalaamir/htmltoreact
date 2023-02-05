import React from 'react'
import './App.css'
import Cards from './Cards'
import data from './data'

const App = () => {
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map(plan => (
              <Cards key={plan.title} title={plan.title} cost={plan.cost} user={plan.user} storage={plan.storage} projects={plan.projects} access={plan.access} support={plan.support} domain={plan.domain} report={plan.report} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default App
