const quiz = [
  {
    question: 'ゲーム史上、最も売れたゲームは次のうちどれ？',
    answers : [
      'スーパーファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct : 'ニンテンドーDS'
  },{
    question: '糸井重里が企画にかかわった、任天堂の看板ゲームといえば？',
    answers : [
      'MOTHER2',
      'スーパーマリオブラザーズ',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct : 'MOTHER2'

  },{
    question: 'ファイナルファンタジーⅣの主人公の名前は？',
    answers : [
      'フリオニール',
      'クラウド',
      'ティーダ',
      'セシル'
    ],
    correct : 'セシル'

  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName( 'button' );
const buttonLength = $button.length;

//クイズの問題文を定義
const setupQuiz = () => {
  document.getElementById( 'js-question').textContent= quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    //ここに命令
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }  else{
    window.alert('不正解！'); 
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else{
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

let handleIndex = 0;
while(handleIndex < buttonLength){
  $button[handleIndex].addEventListener('click',(e) => {
    clickHandler(e);
  });
  handleIndex++;
}
