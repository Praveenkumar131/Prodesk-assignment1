const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
});


const questions = {
  html: [
    { q: 'What does HTML stand for?', options: ['Hyper Trainer Marking Language', 'Hyper Text Markup Language', 'Hyper Text Marketing Language', 'None'], answer: 'Hyper Text Markup Language' },
    { q: 'Which HTML tag is used to define a hhyperlink?', options: ['<a>', '<url>', '<href>', '<link>'], answer: '<a>' },
    { q: 'Which HTML attribute is used to specify the URL of an image?', options: ['title', 'alt', 'href', 'src'], answer: 'src' },
    { q: 'Which HTML tag is used to define a table?', options: ['<td>', '<table>', '<td>', '<th>'], answer: '<table>' }
  ],
  css: [
    { q: 'What does CSS stand for?', options: ['Colorful Style Sheets', 'Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets'], answer: 'Cascading Style Sheets' },
    { q: 'Which CSS property is used to set the color of text?', options: ['font-style', 'text-decoration', 'color', 'text-style'], answer: 'color' },
    { q: 'How do you apply a background color in CSS?', options: ['background-color', 'bg-color', 'color-bg', 'background'], answer: 'background-color' },
    { q: 'Which CSS selector is used to select an element by its ID?', options: ['*', '.', '#', '/'], answer: '#' }
  ],
  js: [
    { q: 'Which company developed JavaScript?', options: ['Microsoft', 'Netscape', 'Sun Microsystems', 'Oracle'], answer: 'Netscape' },
    { q: 'Which keyword is used to declare a constant in JavaScript?', options: ['const', 'var', 'let', 'constant'], answer: 'const' },
    { q: 'Which method is used to parse a JSON string?', options: ['JSON.decode()', 'JSON.parse()', 'JSON.convert()', 'JSON.stringify()'], answer: 'JSON.parse()' },
    { q: 'What does DOM stand for?', options: ['Document Object Model', 'Data Object Model', 'Digital Object Method', 'Desktop Object Management'], answer: 'Document Object Model' }
  ],
  accessibility: [
    { q: 'What does WCAG stand for?', options: ['Web Content Accessibility Guidelines', 'Wide Color Accessibility Guidelines', 'Web Code Accessibility Group', 'None'], answer: 'Web Content Accessibility Guidelines' },
    { q: 'Which attribute is used to improve accessibility in images?', options: ['src', 'alt', 'title', 'href'], answer: 'alt' },
    { q: 'Which HTML tag is used to define important text?', options: ['<strong>', '<important>', '<b>', '<mark>'], answer: '<strong>' },
    { q: 'What role does the <nav> element serve?', options: ['Defines navigation links', 'Adds style', 'Wraps footers', 'Acts as container'], answer: 'Defines navigation links' }
  ]
};

function loadQuiz(topic) {
  let score = 0;
  let total = questions[topic].length;

  document.getElementById('home').style.display = 'none';
  const quizDiv = document.getElementById('quiz');
  quizDiv.style.display = 'flex';
  quizDiv.innerHTML = `<h2>${topic.toUpperCase()} Quiz</h2>`;

  questions[topic].forEach((item, index) => {
    const questionBlock = document.createElement('div');
    questionBlock.className = 'question';

    const q = document.createElement('p');
    q.textContent = `${index + 1}. ${item.q}`;
    questionBlock.appendChild(q);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';

    item.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.onclick = () => {
        if (btn.classList.contains('correct') || btn.classList.contains('wrong')) return;
        if (option === item.answer) {
          btn.classList.add('correct');
          score++;
        } else {
          btn.classList.add('wrong');
        }

        const answered = quizDiv.querySelectorAll('button.correct, button.wrong').length;
        if (answered === total) {
          const scoreDisplay = document.createElement('div');
          scoreDisplay.className = 'score';
          scoreDisplay.textContent = `You scored ${score} out of ${total}`;
          quizDiv.appendChild(scoreDisplay);
        }
      };
      optionsDiv.appendChild(btn);
    });

    questionBlock.appendChild(optionsDiv);
    quizDiv.appendChild(questionBlock);
  });

  const backBtn = document.createElement('button');
  backBtn.textContent = '← Back to Home';
  backBtn.id = 'backBtn';
  backBtn.onclick = () => {
    quizDiv.style.display = 'none';
    document.getElementById('home').style.display = 'flex';
  };
  quizDiv.appendChild(backBtn);
}
