$(document).ready(function () {
  const quotes = ["A man's mind, stretched by new ideas, may never return to its original dimensions \n-Oliver Wendell Holmes Jr.", "Anyone who has never made a mistake has never tried anything new \n-Albert Einstein", "Education is the passport to the future, for tomorrow belongs to those who prepare for it today \n-Malcolm X", "If you think education is expensive, try ignorance \n-Andy McIntyre", "The only person who is educated is the one who has learned how to learn …and change \n-Carl Rogers", "Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life. Remember that fear always lurks behind perfectionism \n-David M. Burns", "Education is a progressive discovery of our own ignorance \n-Will Durant", "If you don’t like something, change it.  If you can’t change it, change your attitude \n–Maya Angelou", "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world –Harriet Tubman", "The secret of life is to have no fear; it’s the only way to function \n -Stokely Carmichael", "I have discovered in life that there are ways of getting almost anywhere you want to go, if you really want to go \n-Langston Hughes", "The progress of the world will call for the best that all of us have to give \n–Mary McLeod Bethune"];
  const randQuote = quotes[Math.floor(Math.random() * quotes.length)];
  $(".quote").text(randQuote);
});
