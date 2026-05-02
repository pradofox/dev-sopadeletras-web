export type Member = {
  name: string;
  role: string;
  quote: string;
  instagram?: string;
  linkedin?: string;
};

export const team: Member[] = [
  {
    name: 'Lilian Balderas',
    role: 'directora creativa',
    quote: 'creo que la creatividad debe de implementarse respaldada con estrategia',
    instagram: 'https://www.instagram.com/balderez.21/',
    linkedin: 'https://www.linkedin.com/in/lilianbalderas/',
  },
  {
    name: 'Roberto Prado',
    role: 'director creativo',
    quote: 'el arte, el diseño y la innovación siempre encuentran su lugar en nuestro trabajo',
    instagram: 'https://www.instagram.com/pradofox/',
    linkedin: 'https://www.linkedin.com/in/robertopradogonzalez/',
  },
];
