var l = document.querySelectorAll('a.title');

for (i = 0; i < l.length; i++) {
    window.open(l[i].href);
}