import { IRoute } from "../interfaces/route";
import { Content } from "./content";

export class Router {

    routes: IRoute[];
    content: Content;

    constructor(routes: IRoute[], content: Content) {
        this.content = content;
        this.routes = routes;
    }

    routing(location: Location) {
        let self = this;
        let loc = location;

        self.routes.map(function (data) {
            let url = loc.hash.slice(1) || '/';
            let parts;
            let param;

            parts = url.substr(1).split('/');

            if (url == "/" && data.path === "/") {
                self.content.getContent(`./components/${data.component}`, data.controller);
            } else if (data.path.match(/:id/g)) {

                let mod = data.path.split('/:id')[0].slice(1);

                while (parts.length) {
                    if (parts.shift() == mod) {
                        param = parts.shift();
                        self.content.getContent(`./components/${data.component}`, data.controller, param);
                    } else {
                        parts.shift();
                    }
                }
            } else {
                let mod = data.path.slice(1);

                while (parts.length) {
                    if (parts.shift() == mod) {
                        self.content.getContent(`./components/${data.component}`, data.controller);
                    } else {
                        parts.shift();
                    }
                }                
            }
        });
    }
    
}