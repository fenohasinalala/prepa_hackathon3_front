
import { book } from "../interfaces/book";
import { category } from "../interfaces/category";

export const variant: string = "info";
export const APIUrl: string = "https://virtserver.swaggerhub.com/fenohasinalala/library/1.0.0";
export const ProjectUrl: string = "http://localhost:3000";
export const backgroundColor: string = "bg-"+variant;








export const newBook:book={
  "idBook": 1,
  "title": "Solo Leveling EX",
  "author": "Chugong",
  "pages": 1248,
  "synopsis": "In a world where hunters — humans who possess magical abilities — must battle deadly monsters to protect the human race from certain annihilation, a notoriously weak hunter named Sung Jinwoo finds himself in a seemingly endless struggle for survival. One day, after narrowly surviving an overwhelmingly powerful double dungeon that nearly wipes out his entire party, a mysterious program called the System chooses him as its sole player and in turn, gives him the extremely rare ability to level up in strength, possibly beyond any known limits. Jinwoo then sets out on a journey as he fights against all kinds of enemies, both man and monster, to discover the secrets of the dungeons and the true source of his powers. ",
  "category": {
    "idCategory": 1,
    "nameCategory": "Webtoon"
  },
  "status": "Disponible",
  "numberBooking": 100,
  "rankBooking": 2
}



  export const newCategory:category={
    "idCategory": 1,
    "nameCategory": "string"
  }

  