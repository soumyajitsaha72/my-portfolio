import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class MyInfo {
    firstName = "Soumyajit";
    lastName = "Saha";
    designation = "Web Developer / Full-Stack / Angular";
    introBio = "Hi! I am Soumyajit, a developer from Adra, India, who loves to create and explore new things. Currently, I'm working in EY (Ernst & Young).";
    resumeDownload = {
        downloadLink: "/assets/resume/resume.pdf",
        downloadFile: "resume.pdf"
    }



    skills: string[] = ["HTML", "CSS", "Javascript", "TypeScript", "Angular", "Java", "Spring Boot", "MySQL"];
    skillsUsedBefore: string[] = ["MongoDb", "React", "Express"];
    skillsWantToLearn: string[] = ["Vue", "GraphQL", "MongoDb", "React"];

    projects = [
        {
            id: 1,
            name: "My Portfolio",
            img: "/assets/projects/portfolio.png",
            year: 2022,
            info: "This is my portfolio. I have built it using Angular and hosted it in firebase.",
            links: {
                github: "https://github.com/soumyajitsaha72/my-portfolio",
                live: "https://my-portfolio-6ef17.web.app/"
            }
        },
        {
            id: 2,
            name: "News App",
            img: "/assets/projects/portfolio.png",
            year: 2022,
            info: "This is a simple news app, which provides the news articles in 60 words. I have built it using Angular, inshorts API and hosted it in firebase.",
            links: {
                github: "https://github.com/soumyajitsaha72/news-app",
                live: "https://latestnewsapp-84458.web.app/"
            }
        },
        {
            id: 3,
            name: "PokeDex",
            img: "/assets/projects/pokedex.png",
            year: 2021,
            info: "This is a Pokemon database app, which provides the details about all the pokemons. I have built it using Angular, Poke API and hosted it in firebase.",
            links: {
                github: "https://github.com/soumyajitsaha72/pokedex",
                live: "https://pokedex-soumyajit.web.app/"
            }
        },
        {
            id: 4,
            name: "Weather App",
            img: "/assets/projects/weather-app.png",
            year: 2021,
            info: "This is a weather app. It takes geolocation and gives the current weather situation. I have built it using Angular, Open Weather Map API and hosted it in firebase.",
            links: {
                github: "https://github.com/soumyajitsaha72/weather-app",
                live: "https://weatherapp-361c8.web.app/"
            }
        }
    ];
}