// MILESTONE 2
// La seconda milestone è a sua volta suddivisa in 3 punti:
//
// 3- aggiungere ai risultati anche le serie tv. Attenzione che alcune chiavi per le serie tv sono diverse da quelle dei film, come ad esempio "title" per i film e "name" per le serie


var app = new Vue({
    el: '#root',

        data: {
            userSearch: '',
            arraySearchedMovies: [],
            arraySearchedSeries: [],
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

                        if (this.arraySearchedMovies.length == 0) {

                            this.noMovieFound = true;
                        }

                    });
                    axios.get('https://api.themoviedb.org/3/search/tv', {
                        params: {
                            api_key: '567c8d726bbaa8119557c0173dda861b',
                            query: this.userSearch,

                        }
                    }).then((results) => {

                        console.log(results.data.results);

                        this.arraySearchedSeries = results.data.results

                        if (this.arraySearchedSeries.length == 0) {

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
