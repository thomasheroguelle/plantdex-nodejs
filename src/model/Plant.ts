export interface Plant {
  id: number;
  nom: string;
  soleil: SoleilEnum;
  arrosage: number;
  categorie: CategorieEnum;
  image: string;
}

export enum SoleilEnum {
  "beaucoup",
  "moyen",
  "peu",
}

export enum CategorieEnum {
  "cactus et plantes grasses",
  "plantes fleuries",
  "orchidés",
}
