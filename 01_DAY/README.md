# DAY 01
 
## Project Name
### <i>Javascript Drum Kit</i>
#
## Learnings 
* Capturing key events 
    * Using event listner 'keydown' capturing key names and codes .
     ```
     e.code 
     <!-- returns Key name -->

     e.key
     <!-- returns Alphabet -->

     e.keyCode
     <!-- returns keycode -->
     ```

* Working with the audio tag
    * To start the audio from the begning 
    ```
    audio.currentTime = 0
    ```
    * To play the audio
    ```
    audio.play() 
    ```

* Handling and Tracking transitions of the elements 
    * using event listner "<code>transitionend</code>".
    This event gets triggered when the transitions or animations of the element ends.
    * This gives all the css properties applied to the element
    ```
    e.propertyName
    ``` 