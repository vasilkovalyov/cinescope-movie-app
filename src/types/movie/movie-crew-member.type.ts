import { MoviePerson } from './movie-person.type';

export interface MovieCrewMember extends MoviePerson {
  job: string;
  department: string;
}
