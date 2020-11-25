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

                }
            },

            searchSeries() {

                if (this.userSearch != '') {

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

            posterNotFound(element) {

                if (element.poster_path == 'null') {
                    element.poster_path = 'locandina.jpg'
                } else {
                    element.poster_path = 'https://image.tmdb.org/t/p/' + 'w342' + element.poster_path
                }
            },

            countingStars(vote) {

                return Math.round(vote/2);

            }

        },

        mounted() {



        },


});
