const Home = () => {
  const handleClick = (e) =>{
    console.log('hello, ninja', e)
  }
  const handleClicAgain =(name)=> {
    console.log('hello'+ name);
  }

  return ( 
    <div className="home">
      <h2>HomePage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={()=>{handleClicAgain('mario')}}>click me again</button>
    </div>
   );
}
 
export default Home;