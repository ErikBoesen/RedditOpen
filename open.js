// Make array of all post title links
var l = document.querySelectorAll('a.title');

// Go through array, and open each of the links in a new tab.
for (i = 0; i < l.length; i++) {
    window.open(l[i].href);
}