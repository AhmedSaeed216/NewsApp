import React,{useState,useEffect} from 'react'
import NewsDetail from './NewsDetail'
import SportImg from '../assets/sport.jpg'
const Sport = () => {
    const [articles, setarticles] = useState([])

    useEffect(() => {
      const url=`https://newsapi.org/v2/everything?q=sports&apiKey=ca9ec3f42e9f498eba199024ba4934c4`

      fetch(url).then(response=>response.json()).then(data=>setarticles(data.articles || []))
     
    }, []);

    const sportcategory=(category)=>{
      const url=`https://newsapi.org/v2/everything?q=${category}&apiKey=ca9ec3f42e9f498eba199024ba4934c4`

      fetch(url)
      .then(response=>response.json())
      .then(data=>setarticles(data.articles||[]));
    };
    
useEffect(()=>{console.log(articles)},[articles]);


  return (
    <>
      <nav>
        <ul className='lg:flex lg:justify-center lg:gap-9 hidden lg:block md:hidden sm:hidden'>
          <li className='hover:underline cursor-pointer text-sm'><a href="/sport"> Home</a></li>

          <li className='hover:underline cursor-pointer text-sm 'onClick={()=>sportcategory('football')}>Football</li>
          <li className='hover:underline cursor-pointer text-sm 'onClick={()=>sportcategory('cricket')}>Cricket</li>
          <li className='hover:underline cursor-pointer text-sm 'onClick={()=>sportcategory('formula1')}>Formula 1</li>
          <li className='hover:underline cursor-pointer text-sm 'onClick={()=>sportcategory('rugby')}>Rugby</li>
          <li className='hover:underline cursor-pointer text-sm 'onClick={()=>sportcategory('paralympics')}>Paralympics</li>
          <li className='hover:underline cursor-pointer text-sm 'onClick={()=>sportcategory('golf')}>Golf</li>
          <li className='hover:underline cursor-pointer text-sm 'onClick={()=>sportcategory('tennis')}>Tennis</li>
        </ul>
      </nav>
      <hr className='m-2'/>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
      {articles.map((data,index)=>(
        data.title?(
          <NewsDetail
          key={index}
          title={data.title}
          description={data.description}
          url={data.url}
          src={data.src}
          altImg={SportImg}
          />
        ):(
          <p>Data Not found</p>
        )
      ))
      }
      </div>
    </>
  )
}

export default Sport
