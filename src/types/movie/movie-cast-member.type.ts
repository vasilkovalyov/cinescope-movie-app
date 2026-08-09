import { MoviePerson } from './movie-person.type';

export interface MovieCastMember extends MoviePerson {
  cast_id: number;
  character: string;
  order: number;
}
