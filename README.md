# etch-a-sketch

An app that allows the user to draw in the browser window!

![Etch a Sketch page animagted gif](https://github.com/sashavining/etch-a-sketch/blob/main/Etch-a-sketch%20(5).gif?raw=true)

## How It's Made:

I first designed the canvas, using Javascript in conjunction with CSS Grid to draw a grid of divs. The first two features I added were the black pen and the resizing tool. Initially, I had been using classes (.blackBackground, .redBackground, etc.) along with .classList.add to change the colors of the divs. Then I had to change my methodology when I added the color picker, instead using JavaScript to add inline CSS with .style.background. 

All of the pen tools use some variation on this method to work. The eraser removes the attribute "style" from any element on hover. Reset removes all the style attributes at once.

**Tech used:** JavaScript, HTML, CSS (Grid)

## Optimizations

I would have read more about how to style the bottom slider. I am not completely happy with how that, and other elements of the GUI, turned out, and may come back and fiddle with some CSS and HTML.

## Lessons Learned:

That re-making a feature for a project from the ground up does not mean that I am going backwards. Often times this is the only way forward.

I have loved how each project I completed has forced me to go back and change something that I initially tried one way to make all of my planned features work. I feel that this has made me understand the nuances of choices I make (e.g. to add a class or inline CSS) much better, and sets me up to make better choices at the start of my next project.


(Created 1/12/2022)
