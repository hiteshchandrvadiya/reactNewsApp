import React from 'react'
import {Container} from '@material-ui/core'
import NewsCard from '../NewsCard/NewsCard'
import './NewsContent.css'


const NewsContent = ({newsArray,newsResults,loadMore,setLoadMore}) => {
    return(
        <Container maxWidth="md">
            <div className="content">
                <div className="downloadMessage">
                    <span className="downloadText">
                        For the better experience use news app on your smartphone
                    </span>
                    <a id='image-downloader' href="https://drive.google.com/file/d/1jU5I3RiYV3DCt6ZiLzBdr398ElRYqRlf/view?usp=drivesdk" height="80%">
                        <img
                            alt="play store"
                            height="80%"
                            src="https://assets.inshorts.com/website_assets/images/playstore.png"
                        />
                    </a>
                </div>
                {newsArray.map((newsItem)=>(
                        <NewsCard newsItem={newsItem} key={newsItem.title}/>
                    ))
                }
                {
                    loadMore<=newsResults && (
                        <>
                            <hr/>
                            <button className='loadMore' onClick={()=>setLoadMore(loadMore+20)}>
                                Load More
                            </button>
                        </>
                    )
                }
            </div>
        </Container>
    );
}
export default NewsContent;