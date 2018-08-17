https://github.com/aendrew/learning-d3-v4

branches: 
    master (chapter1)
        bar graph
    table (chapter2)


Notes: 

Scales
"decide how D3 maps data values to pixel values. Put another way, a scale is simply a function that maps an input range to an output domain”

Scott Murray:
“When I say "input," you say "domain." Then I say "output," and you say "range." Ready? Okay:
Input! Domain!”


Selections are the core of everything we do with D3--d3.select is used to select a single element, while d3.selectAll creates an array-like selection with multiple elements.


“This might seem like a lot of work for such a simple table, but the advantages of doing it this way are huge. Instead of wasting a bunch of time typing out a totally static table that you'll never use again, you've effectively created a basic JavaScript library that will produce a basic table for you whenever you need it. You could even extend your tableFactory function to do different things than it does now, without ever altering the code you just wrote.”

Concept: 
  factory component
    build a component, pull it in using module loading syntax.


To join data with a selection, we use the .data() function. It takes a data argument in the form of a function or array, and optionally a key function, telling D3 how to differentiate between various parts of the data.

    When you join data to a selection, one of the following three things will happen:

        There is more data than there are selected elements (the length of the data is longer than the length of a selection). You can reference the new entries with the .enter() function

        There is exactly the same amount of data as before. You can use the selection returned by .data() itself to update element states
        
        There is less data than before. You can reference these using the .exit() function
        
        New in D3 v4 is the .merge() function, which allows you to to perform operations on selections containing both new and updating elements
        
You can't chain .enter() and .exit() because they are just references and don't create a new selection, but you can chain .enter() and .merge(). This means that you will usually want to focus on .enter() and .exit() and handle the three cases separately.