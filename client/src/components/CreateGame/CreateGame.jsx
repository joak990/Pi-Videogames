import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import {getGenres} from "../Redux/Actions"
import axios from 'axios';

function CreateGame() {
    const dispatch = useDispatch();
    const { allGenres } = useSelector((state) => state);
  
    const [form, setForm] = useState({
        name: "",
        image: "",
        description: "",
        platforms: [],
        released: "",
        rating: "",
        Descripción: "",
        genre: []
    });
    const [errors, setErrors] = useState({
        name: "",
        image: "",
        description: "",
        platforms: "",
        released: "",
        rating: "",
        Descripción: "",
        genre: ""
    });
    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])
    
    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
     
        
    }

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/videogames", form)
            .then(res => alert(res))
            .catch(err=> alert(err))

    }
    return (
        <form className="form-container" onSubmit={submitHandler}>

        <div className="form-containerBig">
            <NavLink to="/home">
                <button className="selectfont3">Go home!</button>
            </NavLink>
            <h3 className="name2">CREATE NEW VIDEOGAME</h3>
            <br></br>
        </div>
        <div>
            <label className="form-label">Name: </label>
            <input type="text" value={form.name} name="name" onChange={changeHandler}></input>
            <span className="errors">{errors.name}</span>
        </div>
        <div>
            <label className="form-label">Image</label>
            <input type="url" value={form.background_image} name="background_image" onChange={changeHandler}></input>
            <span className="errors">{errors.background_image}</span>
        </div>

        <div>
            <label className="form-label">Description: </label>
            <textarea type="text" value={form.description} name="description" onChange={changeHandler}></textarea>
            <span className="errors">{errors.description}</span>
        </div>


        <div>
            <label className="form-label">Released</label>
            <input className="released" type="date" value={form.released} name="released" onChange={changeHandler}></input>
            <span className="errors">{errors.released}</span>
        </div>

        <div>
            <label className="form-label">Rating: </label>
            <input type="number" value={form.rating} name="rating" onChange={changeHandler}></input>
            <span className="errors">{errors.rating}</span>
        </div>

        <div>
            <label className="form-label">Platforms: </label>
            <input type="text" value={form.platforms} name="platforms" onChange={changeHandler}></input>
            <span className="errors">{errors.platforms}</span>

        </div>

        <div className="form-genres"> </div>
        <div className="divGenres">
            <label className="name2">Genres: </label>
            {allGenres.map((genre) => (
                <div  key={genre.id}>
                    <input
                        type="checkbox"
                        name="genre"
                        value={genre.id}  />
                    
                    <label className="genres">{genre.name}</label>
                    <span className="errors">{errors.genre}</span>
                </div>
            ))}
       </div>

        <button  className="selectfont3" type="submit">Create</button>

    </form>

)
}
  

export default CreateGame
