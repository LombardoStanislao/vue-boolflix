// MILESTONE 2
// La seconda milestone è a sua volta suddivisa in 3 punti:
//


var app = new Vue({
    el: '#root',

        data: {
            userSearch: '',
            arraySearchedMovies: [],
            noMovieFound: false,
            flags:[],

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




                        if (this.arraySearchedMovies.length == 0) {

                            this.noMovieFound = true;
                        }

                    });

                }
            },

            countingStars(vote) {

                return Math.round(vote/2);

            }

        },

        mounted() {



        },


});
