


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

            posterFound(element) {

                let poster = 'locandina.jpg';

                if (element.poster_path != null) {

                    poster = 'https://image.tmdb.org/t/p/' + 'w342' + element.poster_path;

                }

                return poster;
            },

            countingStars(vote) {

                return Math.round(vote/2);

            }

        },

        mounted() {



        },


});
