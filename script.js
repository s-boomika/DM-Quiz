//Le quiz prend un form de id"quiz-form" et des qu'on appui sur le bouton "submit", la fonction event s'execute
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // permet d'éviter de rafrachir page quand appuie "submit"
  
    //on défini quelles sont les bonnes reponses
    const correctReponse = {
      'reponse-1': 'true',
      'reponse-2': 'true',
      'reponse-3': 'true'
    };
  //Puis, on prend les reponses de l'utilisateur
    const userReponse = {};
    //il prend tout les elements de class"reponse", soit les réponses possibles des questions
    const reponseInputs = document.getElementsByClassName('reponse');
  
    //Boucle pour aller dans toutes les reponses et tous ceux selectionnés "checked", il les ajoute à userReponse
    for (var i = 0; i < reponseInputs.length; i++) {
      const input = reponseInputs[i];
      if (input.checked) {
        userReponse[input.name] = input.value;
      }
    }
  
    //boucle pour aller dans les reponses données par l'utilisateur pour chaque question
    for (var questionId in userReponse) {
      //il va chercher les reponses avec l'attribut name qui est lié a la question
      const reponseElement = document.querySelector('input[name="' + questionId + '"]');
      //il cherche le closest-parent element de class "question-item", soit la question corresponadnt
      const listItem = reponseElement.closest('.question-item');
  //ensuite on compare si la reponse donné pour la question est la meme que la bonne reponse defini pour cette question dans "correctReponse"
      if (userReponse[questionId] === correctReponse[questionId]) {
        //si correct, alors ajouter la class"correct" à la question-item associé
        listItem.classList.add('correct');
      } else { //sinon ajouter la class"incorrect" a la question-item
        listItem.classList.add('incorrect');
      }
    }
  
    checkAllReponse();
  });
  
  function checkAllReponse() {
    //on associe le variable allReponse a toutes les questions
    var allQuestions = document.querySelectorAll('.question-item');
    //Et si toutes les questions ont la class"correct", on met true
    var allCorrect = true;
  
    //Sinon pour chaque question si la class n'est pas "correct" alors false
    for(var i=0; i<allQuestions.length; i++){
      if(!allQuestions[i].classList.contains('correct')){
        allCorrect = false;
        break;//on sort de la boucle des qu'on a une reponse fausse car on a plus la condition toutes les reponses correct pour afficher l'alert
      }
    }
  //Ainsi si on a la variable allCorrect=true, on montre un alerte, en bloquant le display qui de base n'affiche rien
    if (allCorrect) {
      document.getElementById('alert').style.display = 'block';
    }
  }
