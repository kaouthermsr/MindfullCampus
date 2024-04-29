var score = 0
var questionSet0 = $('.fillerQuestion');
var questionSet1 = $('.firstQuestion');
var questionSet2 = $('.secondQuestion');
var resultsBtn = $('.Results');
var resultsShow = $('.Results-show');

var choice1 = $("#btn1");
var choice2 = $("#btn2");
var choice3 = $("#btn3");
var choice4 = $("#btn4");
var choice5 = $("#btn5");

var choice6 = $("#btn6");
var choice7 = $("#btn7");
var choice8 = $("#btn8");
var choice9 = $('#btn9');
var choice10 = $('#btn10');

var choice11 = $('#btn11');
var choice12 = $('#btn12');
var choice13 = $('#btn13');

var choice_checker = 0;

const optionsAnxiety = document.querySelectorAll('.options');


var scoreDepression = 0; // Déclaration de la variable scoreDepression en dehors de la fonction pour qu'elle soit accessible globalement

function fetchScoreDepression() {
  const answers = document.querySelectorAll('.active');
  // Réinitialisation du score à chaque appel de la fonction
  scoreDepression = 0; 
  answers.forEach(add);
  
  function add(value) {
    if (value.innerText === 'Juste un peu') { // Correction de la logique des conditions
      scoreDepression += 1;
    } else if (value.innerText === 'Parfois') {
      scoreDepression += 2;
    } else if (value.innerText === 'Souvent') {
      scoreDepression += 3; // Utilisation du score correct pour 'Souvent'
    } else if (value.innerText === 'Toujours') { // Correction de la valeur 'Toujours' à 'Souvent'
      scoreDepression += 4;
    }
  }
  // Appel de la fonction pour cacher le test de dépression une fois le score calculé
  hideDepressionTest();
}
/*Fonction pour cacher le test de dépression
function hideDepressionTest() {
  const test = document.querySelector(".test");
  if (test) {
    test.style.display = "none";
  }
}
*/

const test = document.querySelector(".depression-test");
if (test) {
  test.style.display = "none";
}
// Fonction pour afficher les résultats en fonction du score
function showDepressionResults() {
var container1 = $(".wid-main");
if (scoreDepression >= 0 && scoreDepression <= 9) {
  container1.append(`
    <h1>Pas de dépression</h1>
    <h2>Score : ${scoreDepression}</h2>
    <h3>Résultats de votre questionnaire de dépistage de la dépression</h3>
    <p>Vous avez répondu à ce test de dépression d'une manière qui suggère que, même si vous ressentez parfois des symptômes dépressifs de temps en temps, vous ne souffrez probablement pas d'un épisode dépressif majeur à l'heure actuelle. La plupart des gens éprouvent des sentiments dépressifs de temps en temps dans leur vie - c'est normal et attendu.
    <br><br>
    Cependant, si vous ressentez des symptômes dépressifs suffisamment forts pour qu'ils interfèrent avec votre fonctionnement quotidien, il est fortement conseillé de consulter un professionnel de la santé mentale qualifié pour une consultation plus approfondie. Seul un professionnel de la santé mentale pourra poser un diagnostic réel et valide. </p>
  `);
} else if (scoreDepression >= 10 && scoreDepression <= 17) {
  container1.append(`
    <h1>Dépression légère possible</h1>
    <h2>Score : ${scoreDepression}</h2>
    <h3>Résultats de votre questionnaire de dépistage de la dépression</h3>
    <p>En se basant sur vos réponses à ce test de dépression, vous ne présentez que quelques-uns des symptômes associés à la dépression clinique. Pour la plupart des gens, ce type de réponse est probablement une indication des hauts et des bas normaux associés à la vie. Il est peu probable qu'une personne dans cette fourchette de réponses puisse être diagnostiquée de dépression clinique.
    <br><br>
    Cela ne doit pas être considéré comme un diagnostic quelconque, ni comme une recommandation de traitement. Cependant, certaines personnes peuvent bénéficier d'une consultation avec un professionnel de la santé mentale qualifié si elles éprouvent des difficultés dans leur fonctionnement quotidien. </p>
  `);
} else if (scoreDepression >= 18 && scoreDepression <= 21) {
  container1.append(`
    <h1>Dépression limite</h1>
    <h2>Votre score est ${scoreDepression}</h2>
    <h3>Résultats de votre questionnaire de dépistage de la dépression</h3>
    <p>En se basant sur vos réponses à ce test de dépression, vous présentez certains symptômes associés à la dépression clinique. Les personnes qui obtiennent un score dans cette fourchette se plaignent parfois de manquer de motivation, de manquer d'énergie et d'avoir des problèmes de sommeil. Elles se sentent seules de temps en temps, mais se sentent rarement désespérées ou complètement seules.
    <br><br>
    Cela ne doit pas être considéré comme un diagnostic quelconque, ni comme une recommandation de traitement. Cependant, certaines personnes peuvent bénéficier d'une consultation avec un professionnel de la santé mentale qualifié si elles éprouvent des difficultés dans leur fonctionnement quotidien. </p>
  `);
} else if (scoreDepression >= 22 && scoreDepression <= 35) {
  container1.append(`
    <h1>Dépression légère à modérée</h1>
    <h2>Score : ${scoreDepression}</h2>
    <h3>Résultats de votre questionnaire de dépistage de la dépression</h3>
    <p>En se basant sur vos réponses à ce test de dépression, vous présentez certains symptômes associés à la dépression clinique. Les personnes qui obtiennent un score dans cette fourchette se plaignent parfois de manquer de motivation, de manquer d'énergie et d'avoir des problèmes de sommeil. Elles se sentent seules de temps en temps, mais se sentent rarement désespérées ou complètement seules.
    <br><br>
    Cela ne doit pas être considéré comme un diagnostic quelconque, ni comme une recommandation de traitement. Cependant, certaines personnes peuvent bénéficier d'une consultation avec un professionnel de la santé mentale qualifié si elles éprouvent des difficultés dans leur fonctionnement quotidien. </p>
  `);
} else if (scoreDepression >= 36 && scoreDepression <= 53) {
  container1.append(`
    <h1>Dépression modérée à sévère</h1>
    <h2>Score : ${scoreDepression}</h2>
    <h3>Résultats de votre questionnaire de dépistage de la dépression</h3>
    <p>En se basant sur vos réponses à ce test de dépression, vous présentez certains symptômes associés à la dépression clinique. Les personnes qui obtiennent un score dans cette fourchette se plaignent parfois de manquer de motivation, de manquer d'énergie et d'avoir des problèmes de sommeil. Elles se sentent seules de temps en temps, mais se sentent rarement désespérées ou complètement seules.
    <br><br>
    Vous ne devez pas considérer cela comme un diagnostic quelconque, ni comme une recommandation de traitement. Cependant, certaines personnes peuvent bénéficier d'une consultation avec un professionnel de la santé mentale qualifié si elles éprouvent des difficultés dans leur fonctionnement quotidien. </p>
  `);
} else if (scoreDepression >= 54) {
  container1.append(`
    <h1>Dépression sévère</h1>
    <h2>Score : ${scoreDepression}</h2>
    <h3>Résultats de votre questionnaire de dépistage de la dépression</h3>
    <p>En se basant sur vos réponses à ce test de dépression, vous présentez certains symptômes associés à la dépression clinique. Les personnes qui obtiennent un score dans cette fourchette se plaignent parfois de manquer de motivation, de manquer d'énergie et d'avoir des problèmes de sommeil. Elles se sentent seules de temps en temps, mais se sentent rarement désespérées ou complètement seules.
    <br><br>
    Vous ne devez pas considérer cela comme un diagnostic quelconque, ni comme une recommandation de traitement. Cependant, certaines personnes peuvent bénéficier d'une consultation avec un professionnel de la santé mentale qualifié si elles éprouvent des difficultés dans leur fonctionnement quotidien. </p>
  `);
}
}
