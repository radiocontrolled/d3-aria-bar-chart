# Barchart

Uses d3-fetch to load JSON data; transforms that data into an array of objects with ratio and date keys. Renders a bar chart using this data using scaleBand for the y-axis and scaleLinear for the x-axis.

Features: 
* uses scaleBand instead of scaleTime for the y axis
* calls resize, throttled using a debounce function for performance

To-do: 
* no-JS, a11y
* prettier colours: http://alignedleft.com/content/03-tutorials/01-d3/130-making-a-bar-chart/10.html