# SCSS Lab 

## Prerequisites

Before starting, make sure you have `sass` installed in your project to compile SCSS files. Follow these steps to set it up:

### Installation

1. **Install Sass**: Run the following command in your terminal to install Sass as a development dependency:
   ```bash
   npm install -D sass
   ```

2. **Restart Your Server**: Make sure to restart your development server after installation to allow the changes to take effect:
   ```bash
   npm run dev
   ```

## Lab Tasks Overview

1. **Variables**: Use SCSS variables to centralize values like colors and sizes.
2. **Nesting**: Use nesting to improve the structure of your styles.
3. **`&` Symbol**: Use the `&` symbol to reference the parent selector.
4. **Mixins**: Create reusable code snippets for styling buttons.
5. **Extend/Inheritance**: Reuse styles by extending shared attributes.
6. **Full CSS Refactor**: Convert all existing CSS to SCSS, using the SCSS features we've learned.

## Tasks 

### Task 1: Variables

#### Objective
Create variables to store commonly used colors and sizes to make your styles more maintainable.

#### Needed Values
- `$primary-color: #ff6a6a`
- `$verified-color: #4caf50`
- `$button-size: 60px`
- `$border-radius: 15px`
- `$box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15)`
- `$font-family: "Arial", sans-serif`

#### Example
```scss
$primary-color: #ff6a6a;
$verified-color: #4caf50;
$button-size: 60px;

.action-btn {
  background-color: $primary-color;
  width: $button-size;
  height: $button-size;
}

.verified-icon {
  color: $verified-color;
}
```

### Task 2: Nesting

#### Objective
Use nesting to keep related styles organized, improving readability. Nesting allows you to group styles together logically and makes it easier to understand the structure of your component.

#### Task
1. In `Card.scss`, nest styles that belong to elements within `.card`.
2. Nest the styles for `.profile-image`, `.profile-info`, `.header`, `.location-info`, `.distance-info`, `.looking-for-info`, `.interests`, `.actions`, and `.interest` within `.card`.
3. Ensure all nested elements maintain the same styles as before.

#### Example
```scss
.card {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: 20px;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  font-family: $font-family;
  max-height: 90vh;
  overflow-y: auto;
  padding-bottom: 20px;

  .profile-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }
}
```

### Task 3: `&` Symbol

#### Objective
Use the `&` symbol to refer to the parent selector, especially for pseudo-classes and modifiers. This helps avoid repetition and keeps your code DRY (Don't Repeat Yourself).

#### Task
1. In `Card.scss`, use the `&` symbol to apply pseudo-classes for `.card` and `.action-btn`.
2. Add styles for hover, focus, and active states to `.action-btn` using the `&` symbol.
3. Add styles for hiding scrollbars using the `&` symbol.

#### Example
```scss
.action-btn {
  border: 2px solid black;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    border-color: $button-hover-color;
  }
}
```

### Task 4: Mixins

#### Objective
Create reusable mixins for common styling patterns, such as buttons, to reduce redundancy. Mixins make it easy to apply consistent styles across multiple elements by defining a block of reusable code.

#### Task
1. Create a mixin called `button-style` that takes parameters for color, width, and height.
2. Use this mixin for styling `.action-btn`, `.like`, `.dislike`, and `.star` buttons.
3. Refactor the existing button styles to make use of the mixin.

#### Example
```scss
@mixin button-style($color, $width: $button-size, $height: $button-size) {
  border: 2px solid $color;
  background: none;
  border-radius: 50%;
  width: $width;
  height: $height;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0;
  transition: transform 0.2s ease;

  &:hover {
    border-color: $button-hover-color;
    transform: scale(1.1);
  }
}
.action-btn {
  @include button-style(black);
  font-size: 1.5em;

  &.like {
    color: $verified-color;
  }
}
```
