import React from 'react';
class Hero extends React.Component {
render(){
    return (
        <div className='bg-black text-white w-full'>
<First />
        </div>
    )
}
}

class First extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='flex justify-center text-2xl'>
              <div className='max-w-md'>
                <h1 className='text-4xl font-bold'>
                    {this.props.heading}
                </h1>
                <p>
                    {this.props.description}
                </p>
              </div>  
              <div>
              <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' alt='' loading='lazy' />
              </div>  
            </div>
        )
    }
    }

export default Hero;