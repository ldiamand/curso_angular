import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  logMessage(msg) {
    console.log(msg)
  }
  
  logError(msg) {
    console.error(msg);
  }
  
  logUser(user, msg) {
    console.log('el usuario ' + user.name + ' ha tenido el siguiente evento: ' + msg)
  }
  
  logUserError(user, msg) {
    console.error('Error para ' + user.name + ': ' + msg)
  }
  
}
