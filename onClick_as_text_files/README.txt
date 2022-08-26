# Convert JSON Data to HTML Table

The original idea for this code example can be found at: [YouTube: Dennis Ivy](https://youtu.be/XmdOZ5NSqb8).

This application takes a JSON array of static cryptocurrency data and converts it to a table view. When the 'Show More' button is clicked, the buildTable() method inside bootstrap.js is called to create the innerHTML element information necessary to render the view.

A CSS transition effect is used to increase or decrease the viewable area where the cryptocurrency table will be built. When the 'Show More' button is clicked, the view area will increase and the button will change to 'Show Less'.

### REDUCED VIEW AREA

![Hidden View](./images_md/hidden_view.png)

### ENLARGED VIEW AREA

![Expanded View](./images_md/expanded_view.png)

## BootstrapCDN Styling

[BootstrapCDN Homepage](https://www.bootstrapcdn.com/) has a few different links than the one we are using. The following script link is used for the page and table styling.

```html
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
```
