import React from 'react';

const Project =()=>{
    return(
        <div className="container mb-4 mt-4">


        <div className="row">
          <div className="col">
            <div className="card">
              <img src="images/homepage.PNG" class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Favorite Recipes</h5>
                <p className="card-text">This was a group project that was completed with a team</p>
              </div>
            </div>
            <div className="card-body">
              <a href="https://github.com/JaredWilliam97/Favorite-Recipes" class="card-link">GitHub Link</a>
                  <a href ="https://murmuring-river-43433.herokuapp.com/" class ="card-link">Deployed Link</a>
          </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="images/dayplanner.PNG" class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Day-Planner</h5>
                <p className="card-text">This is an easy to use day planner</p>
              </div>
              <div className="card-body">
                <a href="https://lisabarton23.github.io/Day-Planner/" class="card-link">GitHub Link</a>
                <a href ="https://lisabarton23.github.io/Day-Planner/" class ="card-link">Deployed Link</a> 
            </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card">
              <img src="images/landing.PNG" class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Food Truck Locator</h5>
                <p className="card-text">This was a group project that was completed with a team</p>
              </div>
              <div className="card-body">
                <a href="https://rgeisreiter.github.io/FoodTruckLocator/" class="card-link">GitHub Link</a>
                <a href ="https://rgeisreiter.github.io/FoodTruckLocator/" class ="card-link">Deployed Link</a>
            </div>
          </div>
        </div>
    
        </div>
        </div>
        
    
        
    );



}
export default Project;