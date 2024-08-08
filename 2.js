
    //нашли кнопку
    const addButton = document.querySelector('.button');
    //нашли input
    
  
    addButton.addEventListener('click', () => {
        const commentInput = document.getElementById("commentInput");
      const enteredValue = commentInput.value;
      console.log(enteredValue.length);
      try {
        if (enteredValue.length <= 50 || enteredValue.length >= 500) {
          throw new Error("Неподходящая длина отзыва.");
        } 
        
        const outputContainer = document.getElementById('output-container');
        const comment = document.createElement('p'); // Создаем новый параграф
        comment.classList.add('comment');  // Добавляем класс 'comment'
       
        comment.textContent = enteredValue; // Устанавливаем текст параграфа
        outputContainer.appendChild(comment); // Добавляем параграф на страницу
        commentInput.value = ''; // Очищаем input field
  
      } catch (error) {
        console.error("Ошибка:", error.message);
        
        // Можно добавить вывод сообщения об ошибке пользователю
      }
    });
  
  


// addButton.addEventListener('click', () => {
//     const enteredValue = commentInput.value;// Получаем текст из input
//     const comment = document.querySelector('.comment'); // Находим параграф
//     comment.textContent = enteredValue; // Устанавливаем текст параграфа
//     outputContainer.appendChild(comment); // Добавляем параграф на страницу
//     inputField.value = ''; // Очищаем input field
//   });