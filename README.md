# UFOs
Javascript analysis for coding bootcamp

# Analysis Overview

This project was focused around being able to take data stored as a Javscript array, and being able to use that data to build out a webpage with a table that can be filtered based on user's input. 
The data for this project was a list of UFO exposures, and the data included exposure date, city, country, and ufo shape. 

# Results

The webpage created for this project **[UFO Sightings](http://tbrech4.github.io/UFOs/)** allows users to filter the list of UFO exposures based on a number of criteria.

![filter](https://github.com/tbrech4/UFOs/blob/main/images/filters.png)

Here is where the user can add in a specfifc city, state, etc. to the filter and modify the table.

To update the table, the user doesn't need to fill out each input - just whatever they are hoping to filter for.

For example, if the user wants to see all sightings that occured in California and have a "light" shape, then ca needs to be in the Enter State box, and light needs to be in the enter shape box.

# Summary

## One Drawback

Unfortunately, the inputs are case sensitive i.e. entering "CA" in the state form will cause the table to return no information.


## Additional reccomendations

* Incorporate map data so that the user can click on a specific sighting and locate exactly where that occured via Google Maps

* Add a live data feed that scrubs Twitter for additional UFO sightings and includes them in an additional table that the user can search.



