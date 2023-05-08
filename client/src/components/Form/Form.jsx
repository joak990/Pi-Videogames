import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPlatforms, postVideoGames } from "../Redux/Actions";
function Form() {
  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    platforms: [],
    release_date: "",
    rating: "",
    genre: [],
  });
  const [selectedGenres, setSelectedGenres] = useState([]);

  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const allPlatforms = useSelector((state) => state.platforms);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPlatforms());
  }, [dispatch]);

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    description: "",
    platforms: "",
    release_date: "",
    rating: "",
    Descripción: "",
    genre: "",
  });

  const plataforms = allPlatforms?.map((e) => e.platforms);
  const platformsFiltered = [].concat.apply([], plataforms);
  const repeatedPlatforms = {};

  for (let i = 0; i < platformsFiltered?.length; i++) {
    repeatedPlatforms[platformsFiltered[i]]
      ? (repeatedPlatforms[platformsFiltered[i]] += 1)
      : (repeatedPlatforms[platformsFiltered[i]] = 1);
  }
  const finalPlataforms = Object.keys(repeatedPlatforms);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    validate({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
  };

  function submitHandler(e, res) {
    try {
      e.preventDefault();
      dispatch(postVideoGames(form));
      alert("VideoGame created!!");
    } catch (error) {
      alert("Videogame failed to create");
    }
  }

  function handleSelectGenre(e) {
    const genre = e.target.value;
    const parsedGenres = [...form.genre];
    const currentGenres = [...parsedGenres];
    const genresNames = [...selectedGenres];

    if (!currentGenres.includes(genre)) {
      currentGenres.push(genre);
      setForm({ ...form, genre: currentGenres });
      genres?.forEach((cg) => {
        if (cg?.id === Number(genre)) {
          genresNames.push({
            id: cg?.id,
            name: cg?.name
          })
        }
      });
      setSelectedGenres(genresNames);
    }
  }

  function handleDeleteGenre(e) {
    const parsedGenres = [...form.genre];
    const currentGenres = [...parsedGenres];
    const newGenres = currentGenres?.filter((g) => { return !g?.includes(e) });
    const parsedSelectedGenres = [...selectedGenres]
    const parsedNewSelGen = parsedSelectedGenres?.filter((sg)=> { return newGenres?.includes(String(sg?.id)) })

    setForm({ ...form, genre: newGenres });
    setSelectedGenres(parsedNewSelGen);
  }

  function handleAddPlatform(p) {
    const currentPlatforms = [...form?.platforms];
    const parsedPlatforms = [...currentPlatforms];

    if (!parsedPlatforms?.includes(p)) {
      setForm({ ...form, platforms: [...parsedPlatforms, p] });
    } else {
      const filteredPlatforms = parsedPlatforms?.filter((plt) => {
        return !plt?.includes(p);
      });
      setForm({ ...form, platforms: filteredPlatforms });
    }
  }

  const validate = (form) => {
    let newErrors = {};
    //name verification
    if (!form.name.trim()) {
      newErrors.name = "name is required";
    }
    //image validation
    if (!form.image.trim()) {
      newErrors.image = "Image is Required";
    } else if (!/^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(form.image.trim())) {
      newErrors.image = "Invalid image URL";
    }
    //description validation

    if (!form.description.trim()) {
      newErrors.description = "description is required";
    } else if (form.description.length < 10 || form.description.length > 500) {
      newErrors.description =
        "Description must be between 10 and 500 characters";
    }
    // Genre validation
    if (!form.genre.length) {
      newErrors.genre = "At least one genre is required";
    }
    setErrors(newErrors);
  };
console.log("TEST", selectedGenres)
  return (
    <>
      <div className={style.card}>
        <div className={style.formdiv}>
          <h1 className={style.titleAdd}>Add your own videogame</h1>
          <form onSubmit={submitHandler} className={style.formarea}>
            <div className={style.detailsarea}>
              <label>Game Name:</label>
              <input
                value={form.name}
                type="text"
                onChange={changeHandler}
                name="name"
              />
              <p className={style.errors}>{errors.name}</p>
              <label>Released date:</label>
              <input
                value={form.release_date}
                onChange={changeHandler}
                type="date"
                name="release_date"
                placeholder="YYYY-MM-DD"
              />

              <label>Rating:</label>
              <input
                value={form.rating}
                onChange={changeHandler}
                type="text"
                name="rating"
                placeholder="ex 4.3"
              />

              <label className="form-label">Image</label>
              <input
                type="text"
                value={form.image}
                name="image"
                onChange={changeHandler}
              />
              <p className={style.errors}>{errors.image}</p>

              <label>Genres:</label>
              <select
                className="genres_input"
                onChange={(e) => handleSelectGenre(e)}
              >
                {genres.map((g) => (
                  <option key={g.name} value={g.id}>
                    {g.name}{" "}
                  </option>
                ))}
              </select>
              <p className={style.errors}>{errors.genre}</p>
              <div>
                {selectedGenres?.length
                  ? selectedGenres?.map((g, i) => {
                      return (
                        <div className={style.selectedGenresContainer}>
                          <div
                            className={style.deleteGenre}
                            onClick={() => handleDeleteGenre(g?.id)}
                          >
                            {" "}
                            X{" "}
                          </div>
                          <div key={i} className={style.selectedGenres}>
                            {g?.name}
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>

            <div className={style.msgarea}>
              <label>Description:</label>
              <textarea
                value={form.description}
                onChange={changeHandler}
                type="text"
                name="description"
              />
            </div>
            <p className={style.errors}>{errors.description}</p>
            <div className={style.platformsarea}>
              <label>Platforms:</label>
              <div className={style.platformsContainer}>
                {finalPlataforms.map((p) => {
                  return (
                    <div key={p} className={style.genreCont}>
                      <input
                        value={p}
                        type="checkbox"
                        name="platforms"
                        checked={form?.platforms?.includes(p)}
                        onChange={() => handleAddPlatform(p)}
                      />
                      <label>{p}</label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={style.buttonsContainer}>
              <button className={style.bot2}>Create Game</button>
              <Link to={"/home"}>
                <button className={style.bott}>Back</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
