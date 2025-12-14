interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;

export type { Pizza, NewPizza, PizzaToUpdate };


interface Drink {
  id:number;
  title: string;
  image: string;
  volume: number;
  price: number;
}

export type {Drink};