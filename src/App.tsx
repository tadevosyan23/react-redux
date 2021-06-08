import React, { FC, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { getCuratedPhotos, getPhotos, setError } from './store/actions/photosActions';
import { RootState } from './store'
import Intro from './components/Intro/Intro';
import { LoopCircleLoading } from "react-loadingg";

const App: FC = () => {
  const dispacth = useDispatch();
  const {photos, total_results, error} = useSelector((state: RootState)=> state.photos);
  const [mode, setMode] = useState('trending');
  const [loading,setLoading] = useState(false);
  const [searchFor, setSearchFor] = useState('');
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState('Trending')


  const searchPhotohandler = (query:string) => {
    if(error) {
      setError('')
    }
    setMode('search');
    setLoading(true);
    setSearchFor(query);
    setPage(1);
    dispacth(getPhotos(1, query,()=>setLoading(false),()=>setLoading(false)));
    setTitle(`Search results for '${query}'`);
  }

  let content = null;

  if(loading) {
    content = <div className='loading-box'>
                <LoopCircleLoading color="white" />
              </div> 
  }else {
    content = (
      error
        ? <div className='notification is-danger'>{error}</div>
        : <Fragment>
            <h2 className='name'>{title}</h2>
              {photos.length > 0   
              ?  <div className='main-box'>
                    {photos.map(photo=>(
                      <figure key={photo.id} className='box'>
                          <img src={photo.src.large} alt='img' className='box-item' />
                      </figure>
                    ))}
                  </div>
                : <p className='no-results'>No Results</p>
                }
          </Fragment>
    );
  }

  return (
    <div >
      <Intro onSearch={searchPhotohandler} />
      <div className='main-content'>
        { content }
      </div>
    </div>
  );
}

export default App;
