import { useState, useEffect } from "react";
import BlogList from "./BlogLIst";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState('mario');


  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setBlogs(data);
    });
  },[]);
  return ( 
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
      <button onClick={()=> setName('luigi')}>change name</button>
      <p>{name}</p>
    </div>
   );
}
 
export default Home;