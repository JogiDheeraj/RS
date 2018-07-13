import {Injectable} from '@angular/core';

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Injectable()
export class WebSocketService {

  private stompClient: Stomp;
  
  private url = "http://localhost:8080/webSocket";

  public initConnection(
    subscripteUrl: string, 
    calback: Function,
    owner
  ) {
    const ws = new SockJS(this.url);
    this.stompClient = Stomp.over(ws);
    this.stompClient.debug = true;
    const that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe(subscripteUrl , (message) => {
        if (message.body) {
          calback(JSON.parse(message.body), owner);
        }
      });
    });
  }

}
