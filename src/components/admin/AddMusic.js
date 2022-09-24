import { Formik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const AddMusic = () => {
  const [selFile, setSelFile] = useState("")
  const thumbnail=selFile;
    const musicSubmit=(formdata)=>{
        console.log(formdata);
    }
  
    const uploadFile = (e) => {
      const file = e.target.files[0];
      setSelFile(file.name);
      const fd = new FormData();
      fd.append("myfile", file);
      fetch(  "http://localhost:5000/util/uploadfile", {
        method: "POST",
        body: fd,
      }).then((res) => {
        if (res.status === 200) {
          toast.success("Image Uploaded!!", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      });
    };



  return (
    <div className='container'>
        <div className="col-md-5 col-lg-5">
    <div className='card'>
        <Formik initialValues={{
            title :'', description:'', genre:'',artist:'',year:Number,
            lyrics:'',album:'', createAt:new Date()
        }} onSubmit={musicSubmit}>
            {({values,handleChange,handleSubmit})=>(
                <form onSubmit={handleSubmit}>
                  <h1>Song Upload</h1>
                <label htmlFor='title'>Title</label>
                <input id="title"  value={values.title} onChange={handleChange} className='form-control mb-3' required/>            
                 <label htmlFor='description'>Description</label> 
                 <input id="description" value={values.description} onChange={handleChange} className='form-control mb-3' required/>
                 <label htmlFor='genre'>Genre</label>
                 <input id="genre" value={values.genre} onChange={handleChange} className='form-control mb-3' required/>
                 <label htmlFor='artist'>Artist</label>
                 <input id="artist" value={values.artist} onChange={handleChange} className='form-control mb-3' required/>
                 <label htmlFor='lyrics'>Lyrics</label>
                 <textarea id="lyrics" value={values.lyrics} onChange={handleChange} className='form-control mb-3' required/>
                 <label htmlFor='album'>Album</label>
                 <input id="album" value={values.album} onChange={handleChange} className='form-control mb-3' required/>
                 <label htmlFor='year'>Year</label>
                 <input type="year" value={values.Number} onChange={handleChange} className='form-control mb-3' required/>
                 <label htmlFor='year'>Year</label>
                 <input type="year" value={values.Number} onChange={handleChange} className='form-control mb-3' required/>
                 <label htmlFor='thumbnail'>Year</label>
                 <input type="file" id="thumbnail"  onChange={uploadFile} className='form-control mb-3' accept='.jpg' required/>
                 <button className='btn btn-primary'>Upload</button>
              </form>
            )}
        </Formik>
   
      </div>
        </div>
        </div>
  )
}

export default AddMusic;