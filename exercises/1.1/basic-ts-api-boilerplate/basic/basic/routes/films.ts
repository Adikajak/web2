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

router.get("/", (_req,res) =>{
    return res.json(films);
})

export default router;