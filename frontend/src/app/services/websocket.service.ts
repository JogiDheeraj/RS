import {Injectable} from '@angular/core';

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Injectable()
export class WebSocketService {

  private stompClient;

  initializeWebSocketConnection(serverUrl: string, calback: Function) {
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/chat", (message) => {
        if (message.body) {
          console.log(message.body);
          calback(message.body);
        }
      });
    });
  }

}
