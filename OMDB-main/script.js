

async function getMovies() {
    try {
        // 1. Get the search term from the search box, 
        //          send a request to the ombd (USING YOUR API KEY)
        //          decode the response as JSON

        

        const movieHolder = document.getElementById("movieHolder");

        for (movie of json.Search) {
            //  Create a div to hold each image and title 
            //  Give the div the css class of CARD


            // Create an image element
            //      point it to the image from this movie            


            // Create a CONTAINER div to hold the title and year.
            // Give the CONTAINER div the style of container

            // Add the CONTAINER to the CARD
            // Add all the elements to the movieHolder element
        }


    }
    catch (error) {
        console.log(error)
    }
}