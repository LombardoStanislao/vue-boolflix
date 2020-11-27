// se uso .trim sull'userSearch non funziona


var app = new Vue({
    el: '#root',

        data: {
            userSearch: '',
            arrayTrendingNow: [],
            arrayTrendingSeries: [],
            arraySearchedMovies: [],
            arraySearchedSeries: [],
            listFlag:['it', 'en', 'de', 'es', 'fr', 'ru'],
            noMovieFound: false,
            showTrends: true,



        },

        methods: {

            searchMovies() {

                if (this.usearSearch != '') {

                    axios.get('https://api.themoviedb.org/3/search/movie', {
                        params: {
                            api_key: '567c8d726bbaa8119557c0173dda861b',
                            query: this.userSearch,
                            language: 'it',

                        }
                    }).then((results) => {

                        console.log(results.data.results);

                        this.arraySearchedMovies = results.data.results;

                        if (this.arrayTrendingNow.length >= 1) {
                            this.arrayTrendingNow.splice(0, this.arrayTrendingNow.length)
                        }

                        if (this.arrayTrendingSeries.length >= 1) {

                            this.arrayTrendingSeries.splice(0, this.arrayTrendingSeries.length)
                        }

                        if (this.arraySearchedMovies.length == 0) {

                            this.noMovieFound = true;
                        }

                        this.showTrends = false;
                    });

                }
            },

            searchSeries() {

                if (this.userSearch != '') {

                    axios.get('https://api.themoviedb.org/3/search/tv', {
                        params: {
                            api_key: '567c8d726bbaa8119557c0173dda861b',
                            query: this.userSearch,
                            language: 'it',

                        }
                    }).then((results) => {

                        console.log(results.data.results);

                        this.arraySearchedSeries = results.data.results;

                        if (this.arrayTrendingNow.length >= 1) {
                            this.arrayTrendingNow.splice(0, this.arrayTrendingNow.length)
                        }

                        if (this.arrayTrendingSeries.length >= 1) {

                            this.arrayTrendingSeries.splice(0, this.arrayTrendingSeries.length)
                        }

                        if (this.arraySearchedSeries.length == 0) {

                            this.noMovieFound = true;
                        }

                        this.showTrends = false;


                    });

                }
            },
        // Se uso questa funzione non mi cancella i trend
            switchTrendingSearch() {

                if (this.arrayTrendingNow.length >= 1) {
                    this.arrayTrendingNow.splice(0, this.arrayTrendingNow.length)
                }

                if (this.arrayTrendingSeries.length >= 1) {

                    this.arrayTrendingSeries.splice(0, this.arrayTrendingSeries.length)
                }

                if (this.arraySearchedSeries.length == 0) {

                    this.noMovieFound = true;
                }

                this.showTrends = false;


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

            },

            foundFlag(language) {
                return this.listFlag.includes(language);
            },

            trendingNowMovies() {

                if (this.arraySearchedMovies.length == 0  || this.arraySearchedSeries.length == 0) {

                    axios.get('https://api.themoviedb.org/3/discover/movie', {
                        params: {
                            api_key: '567c8d726bbaa8119557c0173dda861b',
                            language: 'it',

                        }
                    }).then((results) => {

                        console.log(results.data.results);

                        this.arrayTrendingNow = results.data.results;



                    });
                }

            },

            trendingNowSeries() {

                if (this.arraySearchedMovies.length == 0  || this.arraySearchedSeries.length == 0) {

                    axios.get('https://api.themoviedb.org/3/discover/tv', {
                        params: {
                            api_key: '567c8d726bbaa8119557c0173dda861b',
                            language: 'it',

                        }
                    }).then((results) => {

                        console.log(results.data.results);

                        this.arrayTrendingSeries = results.data.results;



                    });
                }

            }

            // tentativo di creare uno slider con scroll

            // sliderScrollLeft() {
            //     const sliders = document.getElementById('trending-box');
            //     let scrollPerClick = document.getElementById('trending-poster').clientWidth + 20;
            //     let imagePadding = 20;
            //     let scrollAmount = 0;
            //
            //       sliders.scrollTo({
            //         top: 0,
            //         left: (scrollAmount -= scrollPerClick),
            //         behavior: "smooth",
            //       });
            //
            //       if (scrollAmount < 0) {
            //         scrollAmount = 0;
            //       }
            //
            //       console.log("Scroll Amount: ", scrollAmount);
            //
            // },
            //
            // sliderScrollRight() {
            //
            //     const sliders = document.getElementById('trending-box');
            //     let scrollPerClick = document.getElementById('trending-poster').clientWidth + 20;
            //     let imagePadding = 20;
            //     let scrollAmount = 0;
            //
            //     if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
            //         sliders.scrollTo({
            //             top: 0,
            //             left: (scrollAmount += scrollPerClick),
            //             behavior: "smooth",
            //         });
            //       }
            //       console.log("Scroll Amount: ", scrollAmount);
            // }

        },

        mounted() {
            this.trendingNowMovies();
            this.trendingNowSeries();


        },


});
