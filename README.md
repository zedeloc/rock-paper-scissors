# rock-paper-scissors

This is an assignment from The Odin Project.

The goal is to write a version of R-P-S that works from the Chrome dev console. Later, this will be used to 
make an visual version in the form of a webpage with additional HTML and CSS (and likely js improvements).
In order for this version to be usable further down the line, functions need to return values that can be 
used later on.

<!--  -->

R-P-S essentials:

- 2 players simultaneously choose one of three choices -- Rock, Paper, or Scissors
    - 1 user, 1 computer

- Logic
    - Rock beats Scissors, Scissors beats Paper, Paper beats Rock

Pseudo code:

    Computer randomly chooses between R/P/S and stores in variable.
        Random selection from list.
    Get player's choice and store in playerChoice
        Prompt user
        Store lowercase version in variable 
    Evaluate playerChoice against computerChoice (find winner/loser) and return value


    Output whether player won or lost