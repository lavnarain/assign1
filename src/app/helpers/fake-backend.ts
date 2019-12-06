import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
 
export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {

  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVzdFVzZXIifQ.lJmYkTRzS_iUBLPvAf_mvYZlWpnRLon06sE0b1aO2EU';

  backend.connections.subscribe((connection: MockConnection) => {
    setTimeout(() => {
      // Fake implementation of /api/authenticate
      if (connection.request.url.endsWith('/fake/auth') && connection.request.method === RequestMethod.Post) {
        let body = JSON.parse(connection.request.getBody());
        if (body.emailId === 'test@gmail.com' && body.password === 'Test12'){
          connection.mockRespond(new Response(
            new ResponseOptions({ 
              status: 200, 
              body: { token: token }
            })
          ));
        }
        else{
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200 })
          ));
        }
      } 
    }, 1000);
    });
    return new Http(backend, options);
}

export let fakeBackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};