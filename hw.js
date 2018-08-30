// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    
    document.getElementById("numeric-display").textContent = timerValue
  },
  drawProgressBars: function(timerValue){
  /*	I sussed out how to get this to run about 75% of the way but 
  		got stuck on how to align the width expansion to the timer, so I 
  		plugged in the rest from hw-solution.js. Questions:
  			1. 	why an index position after getElementsByClassName()?
  			2.	why is '%' a literal string? JS can interpret variable names
  				representationally...but modifiers like % must be concat'd?? 
  				Very confusing exception(s) to remember!	*/

  		var progressBarExpand = 100 - timerValue
  		document.getElementsByClassName("progress-bar")[0].style.width = progressBarExpand + '%'

  },
  drawLitFuses: function(timerValue){
    // Your Code Here
  },
  drawCrawlers: function(timerValue){
    // Your Code Here
  }
};
