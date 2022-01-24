import React, { useState } from 'react';
import './APIIntegrationVideo.css';
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  FormGroup,
  Label,
  Spinner
} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import VideoCard from './VideoCard.js';
function App() {
  // States
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  // Handle Search
  const handleSubmit = () => {
    setLoading(true);
   
      axios
        .get(
          `https://imdb-api.com/API/AdvancedSearch/k_vwog5du2/?title=${query}`
        )
        .then(res => {
           
            if (res.data.results.length > 0) {
              setCards(res.data.results);
              setLoading(false);
            }
          
        })
        .catch(err => {
          setLoading(true);
          console.log(err.response);
        });
    
  };
  // Main Show Case
  const mainHeader = () => {
    return (
      <div className='main-image1 d-flex justify-content-center align-items-center flex-column'>
        {/* Overlay */}
        <div className='filter'></div>
        <h1
          className='display-2 text-center text-white mb-3'
          style={{ zIndex: 2 }}
        >
          Search Video
        </h1>
        <div style={{ width: '60%', zIndex: 2 }}>
          <InputGroup size='lg' className='mb-3'>
            <Input
              placeholder='Video Search'
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            
              <Button color='secondary' onClick={handleSubmit} style={{ backgroundColor:'blue' }}>
                <i className='fas fa-search'></i>
              </Button>
            
          </InputGroup>
    
        </div>
      </div>
    );
  };

  const handleCards = () => {
    if (loading) {
      return (
        <div className='d-flex justify-content-center mt-3'>
          <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>
      );
    } else {
      const items = cards.map((item, i) => {
        let thumbnail = '';
        if (item.image) {
          thumbnail = item.image.thumbnail;
        }

        return (
          <div className='col-lg-4 mb-3' key={item.id}>
            <VideoCard
              thumbnail={item.image}
              title={item.title}
              pageCount={item.description}
              language={item.runtimeStr}
              authors={item.genres}
              publisher={item.imDbRating}
              description={item.stars}
              previewLink={item.title}
              infoLink={item.title}
            />
          </div>
        );
      });
      return (
        <div className='container my-5'>
          <div class='cards__items1234'>{items}</div>
        </div>
      );
    }
  };
  return (
    <div className='w-100 h-100' style={{ backgroundColor:'white' }}>
      {mainHeader()}
      {handleCards()}
      <ToastContainer />
    </div>
  );
}

export default App;
 



