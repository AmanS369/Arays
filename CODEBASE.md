# App Directory

The `app` directory contains subdirectories and files responsible for different image conversion functionalities and the homepage layout.

## bg Directory (Black & White Image Conversion)

- **BlackAndWhite.css**: Defines the styling for the page where the B/W image conversion is displayed.
- **main.css**: Common styling used across the B/W image conversion page.
- **page.js**: Handles the preview of the image that has been converted to black and white.
- **upload.js**: Manages the image upload functionality specifically for converting the image to black and white.

## image Directory (Image Manipulation: Invert, Grayscale, Format Conversion)

- **ImageForm.css**: Contains the styles for the image upload form where users can upload images for inversion, grayscale, or PNG to JPEG conversion.
- **main.css**: General styling applied to the image conversion pages.
- **imageUploadForm.js**: Handles the image upload process for inversion, grayscale, and format conversion.
- **page.js**: Manages the preview display of the converted image.

## General Files in the App Directory

- **globals.css**: Global CSS styles applied across the entire application.
- **layout.js**: Defines the parent layout structure for pages. It is the main layout component that wraps around other components or pages.
- **page.js**: Represents the homepage of the application where users can navigate to different image conversion functionalities.
- **page.module.css**: CSS module for the specific styling of the homepage.

# Components Directory

The `components` directory contains reusable components such as headers and footers that can be used across various pages.

- **Headers.js**: JavaScript file responsible for rendering the header and its functionalities (e.g., navigation).
- **Headers.css**: CSS file for styling the header component.
- **Footers.js**: JavaScript file for rendering the footer with necessary information and links.
- **Footers.css**: CSS file for styling the footer component.
- **Layout.js**: The parent layout component that can wrap other components, similar to the `layout.js` in the `app` directory but focused on individual components.

# Public Directory

The `public` directory contains images and other static assets.

### images/:
- **edit.jpg**: An example image used in image conversion.
- **bw.png**: Another example image related to black and white conversion.

# Features

## Black & White Image Conversion

- Users can upload an image and convert it to black and white.
- The converted image is shown in a preview before being downloaded.
- Styles for this feature are managed in `BlackAndWhite.css` and functionality in `upload.js` and `page.js`.

## Image Inversion, Grayscale, and Format Conversion

- Users can upload images and choose to invert colors, apply a grayscale filter, or convert PNG images to JPEG.
- The preview functionality is handled in `page.js`, while `imageUploadForm.js` manages the upload process.
- The styles are managed via `ImageForm.css` and `main.css`.
