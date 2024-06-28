const API = "https://api.themoviedb.org/3";

export function get(path){
   return fetch(API + path, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWZkNTc0MTA0MGFkYWY0MmY1YmJjMjNiYjcxYTc5MiIsInN1YiI6IjY1OTVjMTNlYTY5OGNmNDg5YjQzYTAwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v1Yaogjqaeyl9ypPelBsPi_yjF1M5CdG4gHYUsf6rRs",
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then((result) => result.json());
}