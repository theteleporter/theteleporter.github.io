import React from 'react';
import Xsmbtnred from './components/Buttons'

const Header = () => {
  return(
      <div className='flex justify-between w-full'>
      <i className='flex w-36 h-12 md:w-52 md:h-16 logo mx-5 my-3'></i>
      <h1 className='text-xl my-5 md:my-7 mx-5'>{new Date().toLocaleTimeString()}</h1>
  </div>
  )
}

const Footer = () =>{
  return (
    <div className='flex justify-between bottom-4 absolute right-4 text-base'>
      <h5>Powered By</h5> <pre> </pre> <i className='logo h-7 w-28 flex'></i>
    </div>
  )
}

const Body = () =>{
  return(
    <div>
      <Xsmbtnred />
    </div>
  )
}



class App extends React.Component{
render(){
  return(
    <div className='select-none'>
<Header />
<div className='text-center mt-16 text-2xl md:text-3xl font-semibold'>
Days To Launch
</div>
<div className='my-auto mx-auto'>
  <Body />
</div>
<Footer />
    </div>
  )
}
}

export default App;