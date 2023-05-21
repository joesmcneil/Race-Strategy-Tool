# Race-Strategy-App  

## Introduction

Race-Strategy-App is a web application that simulations a race based on inputs from the user.

## Setup and startup

Run the npm i command to install all necessary packages.

Run npm start to start the web application, which should be accessible on localhost port 8080.

## Design

The User Interface was initially sketched on paper as part of a low fidelity prototyping process. It was then expanded upon in the high fidelity prototyping process. It consists of a simple, dark-themed overlay that provides user input fields in order to configure a race. In additon, an equally dark race simulation page is displayed, which displays a race track and a leaderboard to watch the race.

## Implementation

The web application was planned to be built incrementally. However, it ended up being built by following the iterative model with some elements of the agile manifesto being followed.

Coding the project using a combination of canvas and the NextJS framework proved to be a struggle initially. I only knew vanilla JavaScript prior to the project and had limited experience using canvas. The circle maths and trigonometry involved in the process proved to be difficult.

The canvas element was used to draw the track and racers on the page. Drawing racers simultaneously was a challenge, with object-oriented programming being implemented to update racer positions independently. Again, this was an area of programming I previously had limited experience in.

The leaderboard utilises some of the data captured within the canvas through the use of props to distinguish time deltas between the racers. Identifying time gaps was difficult with the way the project was programmed. I had to find a total distance racers had travelled to determine their positions on the leaderboard. Whilst the intervals between them involved comparing distances between the racers and the speed at which they were travelling.

## Features

1. The user can add a track length to the race configuration.

2. The user can add a number of laps to the race configuration.

3. The user can add racer details to the race configuration, such as an alias, colour and number.

4. The user can submit the configuration to start a simulation.

5. The user can view the racers going around the configured track.

6. The user can view the racers overtaking each other as a result of their independently manipulated speeds.

7. The user can see which car is in the lead.

8. The user can view the time intervals between the cars during the race simulation.

## Known issues

1. The lack of input validation means that users can mistype colours, or use capitalised letters which results in black circles being displayed on the screen. 

2. The lack of input validation also means users could input really long aliases. In reality, the users should only be able to insert 3 letter aliases. It results in a messy leaderboard.

3. The web application appears to use a lot of memory, there could be a memory leak somewhere, this requires further investigation before coming to conclusion.

4. When the race finishes, the leaderboard can change at the end of the race. The racers who finished last tend to appear at the top of the leaderboard at the end, which is incorrect.

5. The web application supports a limited screen size, which means anything outside this is not supported and it does not work as aspected. Compatibility is an issue that has been identified in the future works.

## Future/unfinished work

1. Adding a database to improve the potential of a data-driven web application in future.

2. Adding compatibility for a more screen sizes.

3. Re-writing the race simulation code to ensure a more efficient display of racers on a track.

4. Adding more functionality to manipulate racer speeds more efficiently.

5. Adding input validation within the config overlay.

6. Switching necessary inputs to dropdown menus where approrpriate.

7. Adding cloud-based server hosting