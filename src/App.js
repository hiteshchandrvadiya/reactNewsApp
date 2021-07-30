import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import NavNews from './components/NavNews';
import NewsContent from './components/NewsContent/NewsContent';

function App() {
  const [category,setCategory] = useState("general");
  const [newsArray,setNewsArray] =  useState([]);
  const [newsResults,setNewsResults] = useState();
  const [loadMore,setLoadMore] = useState(20);

  const newsApi = async() => {
     try{
      // const proxyUrl = "https://cors-anywhere.herokuapp.com/"
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
     }catch(error){
       console.log(error);
     }
  }

  useEffect(()=>{
    newsApi(); 
    // eslint-disable-next-line
  },[newsResults, category,loadMore]);


  return (
    <div className="App">
        <NavNews setCategory={setCategory}/>
        <NewsContent 
          loadMore={loadMore}
          setLoadMore={setLoadMore}
          newsArray={newsArray} 
          newsResults={newsResults}
        />
        <Footer/>
    </div>
  );
}
export default App;
