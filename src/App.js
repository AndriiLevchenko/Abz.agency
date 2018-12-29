import React, { Component } from 'react';

import Navigation from './Navigation'
import Assignment from './Assignment'
import Manmobile from './Manmobile'
import Relationships from './Relationships'
import Requirement from './Requirement'
import Cheerful from './Cheerful'

class App extends Component {
  render() {
    return (
        <body>
             <Navigation/>  
             <Assignment/> 
             <Manmobile/>
             <Relationships/>
             <Requirement/>
             <Cheerful/>
        </body>     
       
)
}
}
export default App;
