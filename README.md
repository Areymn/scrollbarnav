# Navigation Bar on Scroll

This project demonstrates how to create a navigation bar that slides down when the user scrolls down the page. The implementation is done using **HTML, CSS, and JavaScript**.

## Features

- A **fixed navigation bar** that appears when the user scrolls down.
- Smooth **sliding animation** for the navigation bar.
- Fully **responsive design**.

## Technologies Used

- **HTML** for structure
- **CSS** for styling
- **JavaScript** for scroll detection and animation

## Project Structure

```
├── index.html   # Main HTML file
├── style.css    # Stylesheet
├── script.js    # JavaScript functionality
├── README.md    # Project documentation
```

## Installation & Setup

1. **Clone the repository** (or download the files):

   ```sh
   git clone https://github.com/yourusername/navbar-scroll.git
   ```

2. **Navigate to the project folder**:

   ```sh
   cd navbar-scroll
   ```

3. **Open `index.html` in a browser**:
   - You can double-click `index.html` or use a live server extension in VS Code.

## How It Works

1. The navigation bar is **initially hidden** at the top of the screen.
2. When the user **scrolls down 20px**, JavaScript sets the `top` property to `0`, making the navbar slide down.
3. When the user **scrolls back up**, the navbar hides again.

## Code Explanation

### **HTML (`index.html`)**

- Contains an `<article>` with some sample text.
- Includes a `<div>` with `id="navlist"` for the navigation bar.
- A `<div class="scrollable">` with extra height to enable scrolling.

### **CSS (`styles.css`)**

- The `#navlist` is positioned **fixed** at the top with a `top: -60px` by default.
- It has a **transition effect** to slide down smoothly.
- The `.scrollable` div ensures the page has enough content to scroll.

### **JavaScript (`script.js`)**

- Uses `window.onscroll` to detect scrolling.
- If `scrollTop > 20`, the navbar's `top` is set to `0`.
- If `scrollTop <= 20`, the navbar's `top` is set to `-60px`.

## Demo

To see this project in action, scroll down the page and watch the navbar slide in!
