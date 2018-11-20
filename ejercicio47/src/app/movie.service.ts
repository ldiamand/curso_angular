import { Injectable } from '@angular/core';
import { ActorService } from './actor.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  castMembers = [];
  movieName: string;

  constructor() { }

  addCastMember(name: string, part: string, actorService: ActorService) {
    let dup = this.castMembers.some(member => {
      return member.name === name || member.part === part
    })
    
    let ok = actorService.canAddMovieToActor(name, this.movieName);
    
    if(!dup && ok) {
      this.castMembers.push({name: name, part: part});
      
    }
  }
}
