import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class MyInfo {
    firstName = "Soumyajit";
    lastName = "Saha";
    designation = "Web Developer / Angular";
    introBio = "Hi! I am Soumyajit, a developer from Adra, India, who loves to create and explore new things. Currently, I'm working in EY.";
    resumeDownload = {
        downloadLink: "/assets/angular.png",
        downloadFile: "angular.png"
    }



    skills: string[] = ["HTML", "CSS", "Javascript", "TypeScript", "Angular", "Java", "Spring Boot", "MySQL"];
    skillsUsedBefore: string[] = ["MongoDb", "React", "Express"];
    skillsWantToLearn: string[] = ["Vue", "GraphQL", "MongoDb", "React"];

    projects = [
        {
            id: 1,
            name: "Super Mario",
            img: "https://valenguerra.github.io/valenguerra/assets/4f5018670ff292fe8876684a69e5df44.jpeg",
            year: 2019,
            info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
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
            info: "This is a beautifull project",
            links: {
                github: "https://www.google.com/",
                live: "https://valenguerra.github.io/valenguerra/assets/4f5018670ff292fe8876684a69e5df44.jpeg"
            }
        }
    ];
}