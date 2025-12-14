import {Router} from "express";
import {Film} from "../types";

const films: Film[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160,
    description: "Un voleur infiltre les rêves pour y implanter une idée.",
    imageUrl: "https://image.tmdb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
  },
  {
    id: 2,
    title: "Le Parrain",
    director: "Francis Ford Coppola",
    duration: 175,
    budget: 6,
    description: "L’ascension et la chute de la famille mafieuse Corleone.",
    imageUrl: "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
    budget: 165,
    imageUrl: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
  },
  {
    id: 4,
    title: "Fight Club",
    director: "David Fincher",
    duration: 139
  }
];

const router = Router();



router.get("/:id", (req,res) =>{
  const idCorrecte = req.params.id;
  const idReq = parseInt(idCorrecte);

  const indexOfFilm = films.findIndex(
  (film:Film) => film.id === idReq
  );

  if(indexOfFilm < 0){
    return res.sendStatus(404);
  }
  return res.json(films[indexOfFilm]);

})


router.get("/", (req,res) =>{

  const minDuration = req.query.minDuration as string;
  let filterFilms = films;



  if (minDuration) {
    const minDurationNum = parseInt(minDuration,10);
    
    if (isNaN(minDurationNum)) {
      return res.status(400).json({ 
        error: 'minDuration must be a valid number' 
      });
    }
  

  filterFilms = filterFilms.filter(films => films.duration>=minDurationNum);
  }


  return res.json({
    count: filterFilms.length,
    films: filterFilms
  });

});

router.post("/", (req,res) =>{
  let body =req.body;
  if(!body.title || !body.director || !body.duration){
    return res.sendStatus(400);
  }
  body.duration = parseInt(body.duration);
  if(isNaN(body.duration)){
    return res.sendStatus(400);
  }
  
  const newFilm: Film = {
    id: films.length + 1,
    title: body.title,
    director: body.director,
    duration: body.duration,
    budget: body.budget,
    description: body.description,}
  films.push(newFilm);
  return res.status(201).json(newFilm);
});
export default router;