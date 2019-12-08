import {Http,BaseRequestOptions,Response,ResponseOptions,RequestMethod} from "@angular/http";
import { MockBackend, MockConnection } from "@angular/http/testing";
import { Users } from "../component/login/users/users";
import { User } from "../component/login/model/user";
import { Token_Generator } from "./token_generator";
import { ROUTE_CONST } from "../helpers/route_constant";

export function serverFactory(backend: MockBackend,options: BaseRequestOptions) {
  backend.connections.subscribe((connection: MockConnection) => {
    setTimeout(() => {
      // Fake implementation of /api/authenticate
      if (connection.request.url.endsWith(ROUTE_CONST.SERVER_PATH) && connection.request.method === RequestMethod.Post) {
        let body = JSON.parse(connection.request.getBody());
        let loginUser: User[] = Users.usersList.filter(usr => {
          if (body && usr.emailId === body.emailId && usr.password === body.password) {
            return usr;
          }
        });
        if (loginUser && loginUser.length > 0) {
          let token: string = Token_Generator.encryptData(loginUser[0].name);
          connection.mockRespond(new Response(new ResponseOptions({
                status: 200,
                body: { token: token }
              })
            ));
        }else {
          connection.mockRespond(
            new Response(new ResponseOptions({ status: 200 }))
          );
        }
      }
    }, 1000);
  });
  return new Http(backend, options);
}

export let serverProvider = {
  provide: Http,
  useFactory: serverFactory,
  deps: [MockBackend, BaseRequestOptions]
};
