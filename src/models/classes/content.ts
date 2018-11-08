import * as $ from "jquery";

export class Content {

    constructor() {

    }

    getContent(url: string, callback: Function, param?: number | string) {
        $.ajax({
            url: url,
            type: "GET",
            dataType: "text",
            crossDomain: true,
            success: function (this, response) {
                $("#dynamicContent").html(response);

                if (param != undefined) {
                    callback(param);
                } else {
                    callback();
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}