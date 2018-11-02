import { IRoute } from "../../models/interfaces/route";

var routes: IRoute[];

routes = [
    {
        "path": "/",
        "component": "list.html",
        "controller": function () {
            $.getJSON("./data/books.json")
                .done(function (response) {
                    let items = response.items;

                    var ract = new Ractive({
                        el: "#books",
                        template: "#templateCards",
                        data: { items: items }
                    });

                });
        }
    },
    {
        "path": "/detail/:id",
        "component": "detail.html",
        "controller": function (id) {

            $.getJSON("./data/books.json")
                .done(function (response) {
                    let items = response.items;

                    let item = items.find(function (elem) {
                        return elem.id === id
                    });

                    let ract = new Ractive({
                        el: "#book",
                        template: "#templateBook",
                        data: item.volumeInfo
                    });

                });
        }
    }
];
