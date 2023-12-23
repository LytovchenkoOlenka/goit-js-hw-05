'use strict';

function slugify(title) {
  const titleLowerCase = title.toLowerCase();
  const arraySlug = titleLowerCase.split(' ');
  const slug = arraySlug.join('-');

  return slug;
}

console.log('_______________Task - 1_______________');
console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
