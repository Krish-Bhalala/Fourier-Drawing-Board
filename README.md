# Fourier Drawing Machine

## Description

The Fourier Drawing Machine is an interactive web application that allows users to draw shapes and then recreates them using Fourier series. This project demonstrates the power of the Discrete Fourier Transform (DFT) in decomposing and reconstructing complex shapes.

## Learning Outcomes

- Applying Fourier series to decompose complex shapes
- Creative coding in JavaScript and p5.js
- Implementing the Discrete Fourier Transform (DFT) algorithm
- Designing intuitive user interfaces

## Features

- User-friendly drawing interface
- Real-time conversion of drawings into Fourier series
- Visualization of epicycles used in the Fourier reconstruction
- Smooth animation of the drawing process

## Technologies Used

- HTML5
- CSS3
- JavaScript
- p5.js library

## How It Works

1. **User Drawing**: Users can draw shapes on the canvas using their mouse.
2. **Fourier Transform**: The application applies the Discrete Fourier Transform to the user's drawing.
3. **Epicycle Visualization**: The drawing is reconstructed using a series of rotating circles (epicycles).
4. **Animation**: The reconstruction process is animated, showing how the Fourier series approximates the original drawing.

## Files

- `index.html`: The main HTML file that structures the web page.
- `sketch.js`: Contains the main p5.js setup and draw functions, as well as user interaction logic.
- `discreteFourier.js`: Implements the Discrete Fourier Transform algorithm.
- `drawingPoints.js`: (Not provided in the snippet, but referenced) Likely contains data or functions related to storing drawing points.

## Setup and Running

1. Ensure you have a web server set up to serve the files.
2. Open `index.html` in a modern web browser.
3. Start drawing on the canvas with your mouse.
4. Release the mouse button to see the Fourier reconstruction of your drawing.

## Dependencies

- p5.js (version 1.10.0)

## Future Improvements

- Add color options for drawings
- Implement save and load functionality for drawings
- Optimize the DFT algorithm for better performance with complex shapes

## Credits

This project was inspired by the Fourier series and its applications in signal processing and computer graphics.

**References:**

- Fourier Series: **[https://en.wikipedia.org/wiki/Fourier...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqblZoeDJxVG9iZ3UtTl9qUzlmQlJSdDR5cXFEQXxBQ3Jtc0tsaVAwRG9BbEVZSjExWWliZzh6ZGNjR3lSUGg3dkdmeGltOTYyRFdRRnhyRHhZSlgwUm55bXpqaVk2WE12SFdqams1anpIYnRYQzU5VXFhQktpUnc5bUFVMWNNUmsyUUlnLWRPT0xEejdES0tLQjJ4cw&q=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFourier_series&v=Mm2eYfj0SgA)
- Purrier Series (Meow) and Making Images Speak: [http://bilimneguzellan.net/purrier-se...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbGJUN2xteG04eDRCR0lBWVppTVJZMWN0UU8yd3xBQ3Jtc0tubWxkTW9zV0dlWG81YUhtTjEzQTc5VENXVXE0Yk1oUWFOV1RqaFZWRHh0OGdVLXVaV3BjTVlUeHMxLWprV0I3azRoRXZjQ2xTdTNDVUx3ZmppdTZTc3BoTF9vX2pDaEJUTF9FTlh3LXVnelVhTzVaUQ&q=http%3A%2F%2Fbilimneguzellan.net%2Fpurrier-series-meow-and-making-images-speak%2F&v=Mm2eYfj0SgA)
- An Interactive Guide To The Fourier Transform by Better Explained: [https://betterexplained.com/articles/...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbEozRFVEbjBhNEM1bmdVMUV6REdxZk5KU1pYZ3xBQ3Jtc0tsWnVCYUVJSTBPTTVLUGE4V0trVi04QUpFcm5GWmIwdlhsd1N6Slh4NC12c0JraHBTMGs3cHlRYTV5eVJBZGQ3dTFjLXp5TGdiREZtcDNyMVFuMmVxaDdTaWNyaTh6Uk96Q1hMbDh0MmJSNk1GeDVDZw&q=https%3A%2F%2Fbetterexplained.com%2Farticles%2Fan-interactive-guide-to-the-fourier-transform%2F&v=Mm2eYfj0SgA)**
