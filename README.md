 # Interactive Productivity Dashboard
 This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.
 ## TODO: Future Enhancements
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [X] Add a weekly task goal calculator

 ## Weekly Task Goals
 When the user enters their name, daily task goal, and number of bonus tasks, the program calculates a weekly goal by multiplying the daily goal by five workdays. It then adds any bonus tasks to determine the total weekly target. After the user clicks the button, the application displays a message showing both the weekly goal and the overall goal. 

 ## Imperial/Metric Converter
 The app converts Imperial units to Metric ones and vice versa. It can convert inches, feet, yards or miles to centimeters, meters or kilometers. This was created by using pseudocode to map out the logic before implementing it. 

 ### Logic and Pseudocode 
	BEGIN Converter
		DISPLAY “Select which operation you would like to do:” 
		DISPLAY “1. Inch to centimeter”
		DISPLAY “2. Foot to centimeter” 
		DISPLAY “3. Yard to meter” 
		DISPLAY “4. Mile to kilometer” 
		DISPLAY “5. Centimeter to inch” 
		DISPLAY “6. Centimeter to feet”
		DISPLAY “7. Meter to yard” 
		DISPLAY “8. Kilometer to mile” 
		INPUT choice 
		
		DISPLAY "Enter the numeric value to convert:" 
		INPUT inputValue 
		
		IF choice = 1 THEN
		        SET result TO inputValue * 2.54
		        DISPLAY inputValue + " inches is " + result + " centimeters."
		    ELSE IF choice = 2 THEN
		        SET result TO inputValue * 30.48
		        DISPLAY inputValue + " feet is " + result + " centimeters."
		    ELSE IF choice = 3 THEN
		        SET result TO inputValue * 0.91
		        DISPLAY inputValue + " yards is " + result + " meters."
		    ELSE IF choice = 4 THEN
		        SET result TO inputValue * 1.61
		        DISPLAY inputValue + " miles is " + result + " kilometers."
		    ELSE IF choice = 5 THEN
		        SET result TO inputValue * 0.39
		        DISPLAY inputValue + " centimeters is " + result + " inches."
		    ELSE IF choice = 6 THEN
		        SET result TO inputValue * 0.0328
		        DISPLAY inputValue + " centimeters is " + result + " feet."
		    ELSE IF choice = 7 THEN
		        SET result TO inputValue * 1.09
		        DISPLAY inputValue + " meters is " + result + " yards."
		    ELSE IF choice = 8 THEN
		        SET result TO inputValue * 0.62
		        DISPLAY inputValue + " kilometers is " + result + " miles."
		    ELSE DISPLAY "Error: Invalid choice selected." 
			END IF
	END Converter

 ## Magic 8 Ball
 This app answers any questions you ask it! Type a question in the box then click the 8 ball to recieve an answer. 