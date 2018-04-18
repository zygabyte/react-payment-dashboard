import React, { Component } from 'react'
// import { Animated } from 'react-animated-css'

import Welcome from './welcome/welcome'
import cardContents from '../utilities/app-utilities'
import Card from './card/card'
// import logo from '../img'

class App extends Component {
    constructor(props){
        super(props);
        
        console.log('cards are');
        console.log(cardContents);
    }

    render() {
        return (
            <div className="tc">
                <div>
                    <Welcome />
                </div>

                {cardContents.map((cardContent, index)=> {
                    return  (
                        <div className='fl w-25-ns pa2' key={index}>
                            <Card
                                icon={cardContent.icon}
                                title={cardContent.title}
                                desc={cardContent.desc}
                            />
                        </div>
                        
                    )
                    
                })}
            </div>
        )
    }
}

export default App