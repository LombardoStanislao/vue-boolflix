// MILESTONE 2
// La seconda milestone è a sua volta suddivisa in 3 punti:
//
// 1- sostituire il voto numerico su base 10 in un voto su base 5 e visualizzare in totale 5 stelline, di cui tante piene quanto è il voto arrotondato (non gestiamo stelline a metà). Ad esempio, se il voto è 8.2, dobbiamo visualizzare 4 stelline piene e 1 stellina vuota (in totale sempre 5)

var app = new Vue({
    el: '#root',

        data: {
            userSearch: '',
            arraySearchedMovies: [],
            noMovieFound: false,
        

        },

        methods: {

            searchMovies() {

                if (this.usearSearch != '') {

                    axios.get('https://api.themoviedb.org/3/search/movie', {
                        params: {
                            api_key: '567c8d726bbaa8119557c0173dda861b',
                            query: this.userSearch,
                        }
                    }).then((results) => {

                        console.log(results.data.results);

                        this.arraySearchedMovies = results.data.results

// FACCIO UN CICLO FOR EACH PER PRENDER SOLO IL VOTO DEL FILM E DIVIDERLO PER DUE

                        this.arraySearchedMovies.forEach((movie, i) => {

                            console.log(Math.round(movie.vote_average/2));

                            Math.round(movie.vote_average/2);



                        });


                        if (this.arraySearchedMovies.length == 0) {

                            this.noMovieFound = true;
                        }

                    });

                }
            }



        },

        mounted() {



        },


});
