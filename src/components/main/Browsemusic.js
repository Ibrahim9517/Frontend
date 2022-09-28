import React, { useEffect } from 'react'
import { useState } from 'react';

const Browsemusic = () => {
  const [musicList, setMusicList] = useState([])
  const [name, setName] = useState("")



  const getDataFromBackend=async(cd)=>{
    const response= await fetch('http://localhost:5000/music/getall')
    .then(res=>res.json())
    .then(data=>{
      cd(data);
    })
  }

  useEffect(() => {
    getDataFromBackend((data)=>{
      console.log(data);
      setMusicList(data)
    })
}, [])

        const searchByName=() => { 
        getDataFromBackend((data)=>{ 
          const filteredData = data.filter((item)=>item.title.toLowerCase().includes(name.toLowerCase())); 
          console.log(filteredData); 
          setMusicList(filteredData); 
        }) 
        }
  

  
  const displayMusic=()=>{ 
   return <div className="row">
    <div className='d-flex justify-content-center mt-5 mb-4 outline '>
      <input type="search" className='w-50 rounded-5' value={name} onChange={e => setName(e.target.value)} />
      <button className='btn btn-primary' onClick={searchByName}>Search</button>
    </div>
      {musicList.map(({_id,thumbnail,file,title,artist})=>(
      <div className="col-md-3 mt-5 mx-5 " >
        <div className="card " key={_id}>
            <h1 className='text-center'>{title}</h1>
            <img src={'http://localhost:5000/'+thumbnail} alt={thumbnail} className="image-fluid  rounded "/>
            <audio controls>
              <source src={'http://localhost:5000/'+file }></source>
            </audio>
         </div>
         </div> 
      ))}
    </div>
  }

  return (

    <div className='container-fluid'>
          {displayMusic()}
    </div>
  )
}

export default Browsemusic