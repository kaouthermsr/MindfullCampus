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


/////////my doing//////////////////
const questions = [
  {
    question: "1. Battements de coeur", // Question: 1. Pounding heart
    score: 0,
  },
  {
    question: "2. Transpirations", // Question: 2. Sweating
    score: 0,
  },
  {
    question: "3. Tremblements ou secousses", // Question: 3. Trembling or shaking
    score: 0,
  },
  {
    question: "4. Essoufflement", // Question: 4. Shortness of breath
    score: 0,
  },
  {
    question: "5. Effrayé ou apeuré", // Question: 5. Afraid or scared
    score: 0,
  },
  {
    question: "6. Douleur thoracique ou inconfort", // Question: 6. Chest pain or discomfort
    score: 0,
  },
  {
    question: "7. Nausées ou troubles abdominaux", // Question: 7. Nausea or abdominal distress
    score: 0,
  },
  {
    question: "8. Sensation d'étourdissement ou d'instabilité", // Question: 8. Feeling dizzy or unsteady
    score: 0,
  },
  {
    question: "9. Peur de perdre le contrôle ou de devenir fou", // Question: 9. Fear of losing control or going crazy
    score: 0,
  },
  {
    question: "10. Engourdissements ou sensations de picotement", // Question: 10. Numbness or tingling sensations
    score: 0,
  },
  {
    question: "11. Frissons ou bouffées de chaleur", // Question: 11. Chills or hot flashes
    score: 0,
  },
  {
    question: "12. Peur de mourir", // Question: 12. Fear of dying
    score: 0,
  },
  {
    question: "13. Souci constant ou persistant", // Question: 13. Constant or persistent worry
    score: 0,
  },
  {
    question: "14. Sensation d'étouffement", // Question: 14. Feeling of choking
    score: 0,
  },
  {
    question: "15. Incapable de se détendre", // Question: 15. Unable to relax
    score: 0,
  },
  {
    question: "16. Sentiment d'irréalité", // Question: 16. Feeling of being unreal
    score: 0,
  },
  {
    question: "17. Nerveux", // Question: 17. Nervous
    score: 0,
  },
  {
    question: "18. Sentiment de tremblement ou d'instabilité", // Question: 18. Feeling shaky or wobbly
    score: 0,
  },
  {
    question: "19. Irritable ou difficulté à dormir", // Question: 19. Irritable or difficulty sleeping
    score: 0,
  },
  {
    question: "20. Mains tremblantes", // Question: 20. Trembling Hands
    score: 0,
  },
  {
    question: "21. J'évite les situations à cause de l'anxiété", // Question: 21. I avoid situations because of anxiety
    score: 0,
  },
  {
    question: "22. Sensation d'étourdissement ou d'évanouissement", // Question: 22. Feeling lightheaded or faint
    score: 0,
  }
]
const questions2 = [
  {
    question: "1. Parfois, j'ai l'impression d'aller au ralenti, mais je n'arrive toujours pas à suivre.", // Question: 1. Sometimes it feels like I’m moving in slow motion, yet I still can’t keep up.
    score: 0,
  },
  {
    question: "2. Je me sens parfois désespéré - comme si je ne pouvais rien faire pour aller mieux.", // Question: 2. I sometimes feel hopeless — like there’s nothing I can do to feel better.
    score: 0,
  },
  {
    question: "3. J'ai du mal à me concentrer et à me fixer sur les tâches.", // Question: 3. I have difficulty concentrating and focusing on tasks.
    score: 0,
  },
  {
    question: "4. J'avais l'habitude d'aimer aller au travail ou même faire des tâches ménagères. Mais maintenant, tout cela me semble inutile.", // Question: 4. I used to enjoy going to work or even doing household chores. But now it all seems pointless.
    score: 0,
  },
  {
    question: "5. J'ai du mal à prendre des décisions, même simples.", // Question: 5. I have trouble making even simple decisions.
    score: 0,
  },
  {
    question: "6. J'adorais peindre, faire de longues promenades ou déjeuner avec des amis. Maintenant, je n'ai plus envie de rien faire.", // Question: 6. I used to love painting, going for long walks, or meeting up with friends for lunch. Now, I just don’t want to do anything.
    score: 0,
  },
  {
    question: "7. Je me sens triste tout le temps - c'est un sentiment constant que je n'arrive pas à oublier.", // Question: 7. i feel sad all the time — it’s a constant feeling that I just can’t shake.
    score: 0,
  },
  {
    question: "8. Parfois, je me sens agité, comme si je ne pouvais pas m'arrêter de bouger.", // Question: 8. I feel restless sometimes, like I can’t stop moving.
    score: 0,
  },
  {
    question: "9. Parfois, je me sens simplement 'fatigué jusqu'aux os' peu importe combien je dors.", // Question: 9. Sometimes I just feel “bone tired” no matter how much sleep I get.
    score: 0,
  },
  {
    question: "10. Certains jours, il est difficile de trouver l'énergie ou le désir de faire quoi que ce soit.", // Question: 10. Some days it’s hard to muster up the energy or the desire to do anything.
    score: 0,
  },
  {
    question: "11. Parfois, j'ai l'impression d'être une personne horrible et de mériter tout ce qui m'arrive.", // Question: 11. Sometimes I feel like I’m a horrible person and deserve whatever happens to me.
    score: 0,
  },
  {
    question: "12. Certains jours, j'ai l'impression de ne rien pouvoir faire correctement.", // Question: 12. Some days I feel like I just can’t do anything right.
    score: 0,
  },
  {
    question: "13. Je me sens juste vide à l'intérieur et engourdi.", // Question: 13. I just feel empty inside and numb.
    score: 0,
  },
  {
    question: "14. J'ai du mal à m'endormir la nuit, et quand je dors, je me réveille plusieurs fois par nuit.", // Question: 14. I have trouble falling asleep at night, and when I do sleep, I wake up several times throughout the night.
    score: 0,
  },
  {
    question: "15. Certains jours, tout ce que je veux faire, c'est manger et je ne peux pas m'arrêter.", // Question: 15. Some days all I want to do is eat and I just can’t stop.
    score: 0,
  },
  {
    question: "16.J'ai l'impression de ne pas avoir d'autre choix que de céder ou de faire ce qu'on attend de moi.",
    score: 0,
  },
  {
    question: "17. Je n'arrive pas à ressentir d'émotions, peu importe ce qui m'arrive, que ce soit bon ou mauvais.",
    score: 0,
  },
  {
    question: "18. Certains jours, je n'ai pas envie de manger - rien ne me tente. Finalement, je vais me coucher sans rien manger du tout.",
    score: 0,
  }
]

let i = 0;
const nextButton = document.querySelector('#nextQuestion');
const previousButton = document.querySelector('#previousQuestion');
let question = document.querySelector('.question');
const testanxiete = document.querySelector(".test");
var container1 = $(".wid-main");
let checkResult = document.querySelector('#checkResult');
let progressBar = document.querySelector('.progress-bar-fill');
const selector=document.querySelector('.wid-main');
var set;
var flag;
if(selector.classList.contains('depression')){
   set=questions2;
   flag=1;
}
else{
   set=questions;
   flag=0;
}

questionGenerator(i);


nextButton.addEventListener('click', () => {

  optionsAnxiety.forEach(function (el) {

    if (el.classList.contains("active")) {
      el.classList.remove("active");
      if (i < set.length - 1) {
        i++;
        questionGenerator(i);
      }
    }

  });


})

function questionGenerator(i) {
  progressBar.style.width = (i + 1) * (100 / set.length) + '%';
  question.innerText = set[i].question;
  console.log(set[i].question);
  if (i == set.length - 1) {
    checkResult.classList.remove('hidden');
    nextButton.classList.add('hidden');
  }
}

optionsAnxiety.forEach(function (el, key) {
  el.addEventListener('click', function (e) {
    let value = e.target.textContent;

    if (value == "Habituellement ") {
      set[i].score = 4;
    } else if (value == "Parfois") {
      set[i].score = 2;
    } else if (value == "Un peu") {
      set[i].score = 1;
    } else if (value == "Souvent") {
      set[i].score = 3;
    } else {
      set[i].score = 0;
    }
    el.classList.toggle("active");
    optionsAnxiety.forEach(function (ell, els) {
      if (key !== els) {
        ell.classList.remove('active');
      }
    });
  });
});

checkResult.addEventListener('click', () => {
  let score = 0;
  for (let i = 0; i < set.length; i++) {
    score += set[i].score;
  }
  checkResult.classList.add('hidden');
  console.log(score);
  testanxiete.style.display = "none";
  if (!flag) {
    if (score >= -1 && score <= 5) {
      container1.innerHTML = `
        <h1>Pas d'anxiété</h1>
        <h2>Score : ${score}</h2>
        <h3>Résultats de votre questionnaire de dépistage de l'anxiété</h3>
        <p>Vos réponses à ce questionnaire de dépistage de l'anxiété suggèrent que vous ne souffrez probablement pas d'un trouble anxieux à l'heure actuelle. Cependant, ce faible degré d'anxiété peut en fait être un signe d'anxiété dans votre vie. Les personnes qui obtiennent un score aussi bas indiquent parfois qu'elles peuvent être détachées d'elles-mêmes, des autres ou de leur environnement. En général, ce n'est pas sain pour la plupart des gens et devrait être évité. Vous pouvez vous aider en faisant un effort plus concerté pour vous rattacher à vos proches et à votre environnement. </p>
      `;
    } else if (score >= 6 && score <= 22) {
      container1.innerHTML = `
        <h1>Anxiété légère à modérée</h1>
        <h2>Score : ${score}</h2>
        <h3>Résultats de votre questionnaire de dépistage de l'anxiété</h3>
        <p>Vos réponses à ce questionnaire de dépistage de l'anxiété suggèrent que vous ne souffrez probablement pas d'un trouble anxieux à l'heure actuelle. N'oubliez pas qu'un peu d'anxiété dans la vie quotidienne normale est à prévoir et est une bonne chose. Personne ne devrait être totalement exempt d'anxiété, car l'anxiété est la façon dont notre corps nous dit que nous devrions prêter une attention plus particulière à une situation, un événement ou une personne dans notre vie (même si cette personne est nous-mêmes). Un score dans cette fourchette suggère que vous avez ce niveau normal d'anxiété, mais que vous ne seriez probablement pas admissible à un diagnostic de trouble anxieux. </p>
      `;
    } else if (score >= 23 && score <= 37) {
      container1.innerHTML = `
        <h1>Anxiété modérée</h1>
        <h2>Votre score est ${score}</h2>
        <h3>Résultats de votre questionnaire de dépistage de l'anxiété</h3>
        <p>En fonction de vos réponses à cet outil de dépistage de l'anxiété, il semble que vous souffriez peut-être d'une anxiété modérée, des symptômes qui pourraient généralement vous qualifier pour le diagnostic d'un trouble anxieux.<br><br>
        Parfois, les personnes qui ressentent de tels symptômes d'anxiété ne réalisent pas que leur corps essaie peut-être de leur dire quelque chose. Recherchez des modèles dans votre comportement, tels que quand et dans quelles circonstances vous ressentez les symptômes que vous avez décrits. Par exemple, si cela se produit avant de parler en public et que votre travail nécessite beaucoup de présentations, vous voudrez peut-être trouver des moyens de vous calmer avant de parler ou de laisser d'autres personnes faire certaines présentations. </p>
      `;
    } else if (score >= 38) {
      container1.innerHTML = `
        <h1>Anxiété sévère</h1>
        <h2>Score : ${score}</h2>
        <h3>Résultats de votre questionnaire de dépistage de l'anxiété</h3>
        <p>En fonction de vos réponses à cet outil de dépistage, vos réponses sont similaires à celles d'autres personnes qui souffrent de symptômes d'anxiété sévère.<br>Nous vous recommandons d'envisager de contacter un professionnel qualifié pour parler de vos symptômes. </p>
      `;
    } else {
      if (score >= 0 && score <= 9) {
        container1.innerHTML = `
          <h1>Pas de dépression</h1>
          <h2>Score : ${score}</h2>
          <h3>Résultats de votre questionnaire de dépistage de la dépression</h3>
          <p>Vous avez répondu à ce test de dépression d'une manière qui suggère que, même si vous ressentez parfois des symptômes dépressifs de temps en temps, vous ne souffrez probablement pas d'un épisode dépressif majeur à l'heure actuelle. La plupart des gens éprouvent des sentiments dépressifs de temps en temps dans leur vie - c'est normal et attendu.
          <br><br>
          Cependant, si vous ressentez des symptômes dépressifs suffisamment forts pour qu'ils interfèrent avec votre fonctionnement quotidien, il est fortement conseillé de consulter un professionnel de la santé mentale qualifié pour une consultation plus approfondie. Seul un professionnel de la santé mentale pourra poser un diagnostic réel et valide. </p>
        `;
      } else if (score >= 10 && score <= 17) {
        container1.innerHTML = `
          <h1>Dépression légère possible</h1>
          <h2>Score : ${score}</h2>
          <h3>Résultats de votre questionnaire de dépistage de la dépression</h3>
          <p>En se basant sur vos réponses à ce test de dépression, vous ne présentez que quelques-uns des symptômes associés à la dépression clinique. Pour la plupart des gens, ce type de réponse est probablement une indication des hauts et des bas normaux associés à la vie. Il est peu probable qu'une personne dans cette fourchette de réponses puisse être diagnostiquée de dépression clinique.
          <br><br>
          Cela ne doit pas être considéré comme un diagnostic quelconque, ni comme une recommandation de traitement. Cependant, certaines personnes peuvent bénéficier d'une consultation avec un professionnel de la santé mentale qualifié si elles éprouvent des difficultés dans leur fonctionnement quotidien. </p>
        `;
      } else if (score >= 18 && score <= 21) {
        container1.innerHTML = `
          <h1>Dépression limite</h1>
          <h2>Votre score est ${score}</h2>
          <h3>Résultats de votre questionnaire de dépistage de la dépression</h3>
          <p>En se basant sur vos réponses à ce test de dépression, vous présentez certains symptômes associés à la dépression clinique. Les personnes qui obtiennent un score dans cette fourchette se plaignent parfois de manquer de motivation, de manquer d'énergie et d'avoir des problèmes de sommeil. Elles se sentent seules de temps en temps, mais se sentent rarement désespérées ou complètement seules.
          <br><br>
          Cela ne doit pas être considéré comme un diagnostic quelconque, ni comme une recommandation de traitement. Cependant, certaines personnes peuvent bénéficier d'une consultation avec un professionnel de la santé mentale qualifié si elles éprouvent des difficultés dans leur fonctionnement quotidien. </p>
        `;
      } else if (score >= 22 && score <= 35) {
        container1.innerHTML = `
          <h1>Dépression légère à modérée</h1>
          <h2>Score : ${score}</h2>
          <h3>Résultats de votre questionnaire de dépistage de la dépression</h3>
          <p>En se basant sur vos réponses à ce test de dépression, vous présentez certains symptômes associés à la dépression clinique. Les personnes qui obtiennent un score dans cette fourchette se plaignent parfois de manquer de motivation, de manquer d'énergie et d'avoir des problèmes de sommeil. Elles se sentent seules de temps en temps, mais se sentent rarement désespérées ou complètement seules.<br><br>
          Cela ne doit pas être considéré comme un diagnostic quelconque, ni comme une recommandation de traitement. Cependant, certaines personnes peuvent bénéficier d'une consultation avec un professionnel de la santé mentale qualifié si elles éprouvent des difficultés dans leur fonctionnement quotidien. </p>
        `;
      } else if (score >= 36 && score <= 53) {
        container1.innerHTML = `
          <h1>Dépression modérée à sévère</h1>
          <h2>Score : ${score}</h2>
          <h3>Résultats de votre questionnaire de dépistage de la dépression</h3>
          <p>En se basant sur vos réponses à ce test de dépression, vous présentez certains symptômes associés à la dépression clinique. Les personnes qui obtiennent un score dans cette fourchette se plaignent parfois de manquer de motivation, de manquer d'énergie et d'avoir des problèmes de sommeil. Elles se sentent seules de temps en temps, mais se sentent rarement désespérées ou complètement seules.<br><br>
          Vous ne devez pas considérer cela comme un diagnostic quelconque, ni comme une recommandation de traitement. Cependant, certaines personnes peuvent bénéficier d'une consultation avec un professionnel de la santé mentale qualifié si elles éprouvent des difficultés dans leur fonctionnement quotidien. </p>
        `;
      } else if (score >= 54) {
        container1.innerHTML = `
          <h1>Dépression sévère</h1>
          <h2>Score : ${score}</h2>
          <h3>Résultats de votre questionnaire de dépistage de la dépression</h3>
          <p>En se basant sur vos réponses à ce test de dépression, vous présentez certains symptômes associés à la dépression clinique. Les personnes qui obtiennent un score dans cette fourchette se plaignent parfois de manquer de motivation, de manquer d'énergie et d'avoir des problèmes de sommeil. Elles se sentent seules de temps en temps, mais se sentent rarement désespérées ou complètement seules.<br><br>
          Cela ne doit pas être considéré comme un diagnostic quelconque, ni comme une recommandation de traitement. Cependant, certaines personnes peuvent bénéficier d'une consultation avec un professionnel de la santé mentale qualifié si elles éprouvent des difficultés dans leur fonctionnement quotidien. </p>
        `;
      }
    }
  }
});




/////end of my work/////////////

// function fetchScore() {
//   var scoreAnxiety = 0;
//   const answers = document.querySelectorAll('.active');
//   answers.forEach(add);
//   function add(value) {
//     if (value.innerText == 'Sometimes') {
//       scoreAnxiety += 2;
//     }
//     else if (value.innerText == 'Usually') {
//       scoreAnxiety += 4;
//     }
//     else if (value.innerText == 'Just a little') {
//       scoreAnxiety += 1;
//     }
//     else if (value.innerText == 'Often') {
//       scoreAnxiety += 3;
//     }
//   }

//   const test = document.querySelector(".test");
//   test.style.display = "none";
//   var container1 = $(".wid-main");
//   if (scoreAnxiety >= 0 && scoreAnxiety <= 5) {
//     container1.append(`
//     <h1>No Anxiety</h1>
//     <h2>Score is ${scoreAnxiety}</h2>
//     <h3>Results of Your Anxiety Screening Quiz </h3>
//     <p>You have answered this anxiety screening in such a way as to suggest that you are not likely currently suffering from an anxiety disorder. However, this little degree of anxiety may actually be a sign of anxiety in your life. Individuals who score in this low range sometimes indicate that they may be detached from themselves, others, or their environment. Typically this is not healthy for most and should be avoided. You can help yourself by making a more concerted effort to become reattached to significant others and your environment. </p>
//     `)
//   }
//   else if (scoreAnxiety >= 6 && scoreAnxiety <= 22) {
//     container1.append(`
//     <h1>Mid to little anxiety</h1>
//     <h2>Score is ${scoreAnxiety}</h2>
//     <h3>Results of Your Anxiety Screening Quiz </h3>
//     <p>You have answered this anxiety screening in such a way as to suggest that you are not likely currently suffering from an anxiety disorder. Remember that a little anxiety in normal, everyday life is to be expected and is a good thing. Nobody should be without any anxiety whatsoever, as anxiety is our body's way of telling us that we should pay closer attention to a situation, event or person in our lives (even if that person is ourselves). Scoring in this range suggests you have that normal level of anxiety but would not likely qualify for an anxiety disorder diagnosis. </p>
//     `)
//   }
//   else if (scoreAnxiety >= 23 && scoreAnxiety <= 37) {
//     container1.append(`
//     <h1>Moderate Anxiety</h1>
//     <h2>Your Score is ${scoreAnxiety}</h2>
//     <h3>Results of Your Anxiety Screening Quiz </h3>
//     <p>Based upon your responses to this anxiety screening measure, it appears that you may be suffering from moderate anxiety, symptoms that might typically qualify you for the diagnosis of an anxiety disorder.<br><br>
//     Sometimes people who feel such anxiety symptoms don't realize that their body may be trying to tell them something. Look for patterns in your behavior, such as when and what circumstances under which you experience the symptoms you've described. For example, if it occurs prior to public speaking and your job requires a lot of presentations you may want to find ways to calm yourself before speaking or let others do some of the presentations. </p>    
//     `)
//   }
//   else if (scoreAnxiety >= 38) {
//     container1.append(`
//     <h1>Severe Anxiety</h1>
//     <h2>Score is ${scoreAnxiety}</h2>
//     <h3>Results of Your Anxiety Screening Quiz </h3>
//     <p>Based upon your responses to this screening measure , Your responses are similar to others who experience severe anxiety symptoms.<br>We recommend consider reaching out to a qualified professional about your symptoms. </p>
//     `)
//   }


// }
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
// Fonction pour cacher le test de dépression
function hideDepressionTest() {
  const test = document.querySelector(".test");
  if (test) {
    test.style.display = "none";
  }
}


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

//music quizz
function filler1() {

  if (choice_checker == 0) {
    questionSet1.css('visibility', 'visible');
    choice11.addClass('selected');
    choice_checker = 1;
  }

}
function filler2() {
  if (choice_checker == 0) {

    questionSet1.css('visibility', 'visible');
    choice12.addClass('selected');
    choice_checker = 1;
  }
}
function filler3() {
  if (choice_checker == 0) {

    questionSet1.css('visibility', 'visible');
    choice13.addClass('selected');
    choice_checker = 1;
  }
}

function happy() {

  if (choice_checker == 1) {
    score = 1

    choice1.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;

  }
}

function sad() {
  if (choice_checker == 1) {
    score = 2

    choice2.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;
  }
}

function angry() {

  if (choice_checker == 1) {
    score = 3
    choice3.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;
  }

}

function nervous() {

  if (choice_checker == 1) {
    score = 4
    choice4.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;
  }

}

function sleepy() {

  if (choice_checker == 1) {

    score = 5
    choice5.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;

  }

}

function rock() {

  if (choice_checker == 2) {

    score = score * 7;
    choice6.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}
function rap() {

  if (choice_checker == 2) {

    score = score * 11;
    choice7.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}
function pop() {
  if (choice_checker == 2) {

    score = score * 13;
    choice8.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}
function alt() {

  if (choice_checker == 2) {

    score = score * 17;
    choice9.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}
function country() {

  if (choice_checker == 2) {

    score = score * 19;
    choice10.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}

function checkResults() {
  if (questionSet0.css('display') === "inline" && questionSet1.css('display') === "inline" && questionSet2.css('display') === "inline") {
    questionSet0.css('display', 'none')
    questionSet1.css('display', 'none')
    questionSet2.css('display', 'none')

  }
  else if (questionSet0.css('display') === "none" && questionSet1.css('display') === "none" && questionSet2.css('display') === "none") {
    resultsBtn.innerHTML = "Check My responses";
    questionSet0.css('display', 'inline')
    questionSet1.css('display', 'inline')
    questionSet2.css('display', 'inline')

  }
  if (score === 7) {
    // resultsBtn.css('background','#93A681');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
      <h4>Qu'il fasse beau dehors ou dedans, montez le son et dansez pour en profiter !</h4>
      <iframe src="https://open.spotify.com/embed/playlist/071qTrW2k22BfUqwpqVyFb" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `);
  } else if (score === 11) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
      <h4>Ravi que vous vous sentiez bien. Faites-vous plaisir aujourd'hui tout en appréciant ces rythmes entraînants. Vous le méritez :D</h4>
      <iframe src="https://open.spotify.com/embed/playlist/3NrmIll0DsfwYEQg2JNSPE" 
      width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `);
  } else if (score === 13) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
      <h4>Content que vous vous portiez bien aujourd'hui ! Appelez un ami et partagez quelque chose de cool avec lui (il pourrait également apprécier votre playlist)</h4>
      <iframe src="https://open.spotify.com/embed/playlist/6XXO0Xkyp1OhSqibqdtqNF" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `);
  } else if (score === 17) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
      <h4>Prenez un instant dans votre journée pour apprécier quelque chose de positif qui s'est produit aujourd'hui, peu importe sa taille ! N'oubliez pas ces moments.</h4>
      <iframe src="https://open.spotify.com/embed/playlist/5Yd7Q4JW3sHapDSSzS0nCx" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 19) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
      <h4>Il y a quelque chose de rafraîchissant à passer du temps dehors. Libérez votre côté aventurier et respirez l'air frais !</h4>
      <iframe src="https://open.spotify.com/embed/playlist/4C0I1PcvcNotVDfSXRRogI" 
      width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 14) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
      <h4>Il est normal de se sentir déprimé parfois. Prenez le temps de reconnaître ce que vous ressentez et laissez-vous aller. Vous en êtes capable :)</h4>
      <iframe src="https://open.spotify.com/embed/playlist/6dx08QdKiNd2F01AWilGSy" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 22) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>Il n'y a pas de honte à être contrarié. Quelque chose qui m'aide : les pires jours ne durent que 24 heures ! Nous croyons en vous <3 </h4>
       <iframe src="https://open.spotify.com/embed/playlist/7hkb1yqHpauYPoetJFyQJM" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 26) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>"Ceci est pour tous ceux qui traversent des moments difficiles, croyez-moi, j'ai été là, je l'ai fait, mais chaque jour au-dessus du sol est un grand jour. N'oubliez pas cela" - Le légendaire Pitbull Mr. Worldwide</h4><iframe src="https://open.spotify.com/embed/playlist/0642Z3mSc6R2cVlqGPxKz1" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 34) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>C'est normal si vous avez besoin de temps seul, mais il n'y a pas de honte à compter sur des amis, de la famille ou d'autres personnes si vous en avez besoin.</h4>
       <iframe src="https://open.spotify.com/embed/playlist/1wUaUuVOLXWnMfcmHr1doU" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 38) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>Même les cowboys ont le blues... si vous avez besoin de distraction, essayez des hobbies relaxants pour passer le temps.</h4>
      <iframe src="https://open.spotify.com/embed/playlist/1Ay0VQZXLOrkzqCyERcKA5" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 21) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>Écoutez quelque chose de fort et rapide ! Être en colère parfois est aussi normal.</h4>
       <iframe src="https://open.spotify.com/embed/playlist/1jmwNo7A5rq3dZKUenLmgf" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 33) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>Vos sentiments sont valides quoi qu'il arrive. Une façon de les exprimer est de faire de l'exercice (appréciez cette playlist pendant que vous le faites, haha).</h4>
       <iframe src="https://open.spotify.com/embed/playlist/5voJxVydB212pyb0v5CQ5x" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 39) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>N'ayez pas peur de vous éloigner d'une situation stressante si nécessaire. Votre santé mentale impacte beaucoup votre santé physique également.</h4>
      <iframe src="https://open.spotify.com/embed/playlist/1UqANNNyB2HqPQzdKWNkFD" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 51) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>Prenez une seconde pour respirer et faire une pause pour évaluer la situation. Parfois, prendre son temps est une bonne chose quand vous êtes en colère aussi.</h4>
       <iframe src="https://open.spotify.com/embed/playlist/6E5vzipZVkkdLDgKCrlsgn" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 57) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>Essayez d'écrire pourquoi vous êtes en colère dans une lettre ou un e-mail. Une fois que vous l'avez perfectionné et terminé, supprimez-le lorsque vous êtes prêt à laisser partir.</h4>
       <iframe src="https://open.spotify.com/embed/playlist/1x8oaRzFEgH4Bb8XwPrtQ7" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 28) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>Les frissons sont tout à fait normaux. Distraiez-vous avec quelque chose de rapide et fort !</h4>
       <iframe src="https://open.spotify.com/embed/playlist/1nh99Lsz8qJ02zjdH4GZQ0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 44) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>Si quelque chose a le potentiel de mal tourner, il a également le potentiel de très bien se passer. On ne sait jamais !</h4>
       <iframe src="https://open.spotify.com/embed/playlist/5yMOriqeGLjcC8ZfkGCuGe" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 52) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>N'oubliez pas de vous faire plaisir une fois que vous avez fini ce qui vous rend nerveux ou tendu. Réjouissez-vous pour cela !</h4>
       <iframe src="https://open.spotify.com/embed/playlist/67GiPoY4OEO5RzrigwDlBk" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 68) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>Parlez-en avec un ami ! Être nerveux ou tendu ensemble est mieux que de s'inquiéter seul.</h4>
       <iframe src="https://open.spotify.com/embed/playlist/16NnaEucp5u5GG5K9NwirB" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 76) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>Exprimez ce que vous ressentez de toutes les manières possibles. Faites des graphiques pour organiser vos pensées, ou écrivez des e-mails ou des lettres à vous-même. Cela peut vraiment aider !</h4>
       <iframe src="https://open.spotify.com/embed/playlist/3m8qdIVMIjqoye9qWVZnMP" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 19) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>Vous avez travaillé dur. Allez vous reposer ! Votre corps vous en remerciera.</h4>
       <iframe src="https://open.spotify.com/embed/playlist/0JROZmzXdpVRFkE7JeKEJJ" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 35) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>Vous devez dormir mais vous n'y arrivez pas ? Essayez de tendre vos muscles pendant quelques secondes, puis relâchez-les complètement. Répétez quelques fois, et vous serez endormi avant même de vous en rendre compte ! Bonne nuit~~</h4>
       <iframe src="https://open.spotify.com/embed/playlist/0JROZmzXdpVRFkE7JeKEJJ" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 55) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>Parfois, la vie interfère avec un bon horaire de sommeil. Petit à petit, prenez le temps de rendre la relaxation partie intégrante de votre journée.</h4>
       <iframe src="https://open.spotify.com/embed/playlist/13kyz1Ys4DMDmBmjwSZm85" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 65) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>Vous avez travaillé dur. Allez vous reposer ! Votre corps vous en remerciera.</h4>
       <iframe src="https://open.spotify.com/embed/playlist/2eWNBUoOeK5HJexGMVn0NG" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 85) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>Des études ont montré que les personnes qui dorment entre 8 et 9,5 heures par nuit ont tendance à se réveiller plus heureuses. Il faut commencer quelque part !</h4>
       <iframe src="https://open.spotify.com/embed/playlist/0TQnU4rbbrGNr2hdEDgtoO" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 95) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
      <h3>Voici vos résultats !</h3>
       <h4>Il est temps d'aller au lit... donnez à vos yeux une pause ! Vous verrez à quel point vous vous sentirez mieux :)</h4>
       <iframe src="https://open.spotify.com/embed/playlist/0fIY27i9Y2vzW5Tx79JB3o" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  }
}
var preloader = document.getElementById('loader');

function loaded() {
  preloader.style.display = 'none';
}

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}
cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}