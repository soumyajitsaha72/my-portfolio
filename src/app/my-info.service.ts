import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class MyInfo {
    firstName = "Soumyajit";
    lastName = "Saha";

    projects = [
        {
            id: 1,
            name: "Super Mario",
            img: "https://valenguerra.github.io/valenguerra/assets/4f5018670ff292fe8876684a69e5df44.jpeg",
            year: 2019,
            info: "This is a beautifull project.",
            links: {
                github: "https://www.google.com/",
                live: "https://www.google.com/"
            }
        },
        {
            id: 2,
            name: "figma",
            img: "https://valenguerra.github.io/valenguerra/assets/4f5018670ff292fe8876684a69e5df44.jpeg",
            year: 2022,
            info: "This is a beautifull project.",
            links: {
                github: "https://www.google.com/",
                live: "https://valenguerra.github.io/valenguerra/assets/4f5018670ff292fe8876684a69e5df44.jpeg"
            }
        }
    ];
}