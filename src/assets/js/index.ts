import "../css/style.css"

import { IRoute } from "../../models/interfaces/route";
import { Content } from "../../models/classes/content";
import { Router } from "../../models/classes/router";

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


$(document).ready(function () {

    // MENU ACTIONS
    $(".toggle-sidebar").click(function (event) {
        event.preventDefault();
        if (!$(".left-aside").hasClass("aside-close")) {
            $(".left-aside").toggleClass("aside-close");
            $(".left-aside").animate({
                flex: "0 0 50px"
            }, function () {
                $(".main-section").toggleClass("col-11");
            });
        } else {
            $(".main-section").toggleClass("col-11");
            $(".left-aside").animate({
                flex: "0 0 25%"
            }, function () {
                $(this).toggleClass("aside-close");
            });
        }
    });

});

// ROUTER
let content = new Content();
let myRouter = new Router(routes, content);

$(window).on("load", function (evt) {
    let event = evt.originalEvent;
    
    myRouter.routing(event.target["location"]);
});

$(window).on("hashchange", function (evt) {
    let event = evt.originalEvent;
    
    myRouter.routing(event.target["location"]);
});