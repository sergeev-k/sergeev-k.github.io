<?php 
if (!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['message'])){
  
  $headers = 'From: Сергеев Константин'.PHP_EOL.
             'Reply-To: tyrist268@gmail.com'.PHP_EOL.
              'X-Mailer: PHP/'. phpversion();
             
  $theme = 'Новое сообщение';

  $letter = 'Данные сообщения:'.PHP_EOL;
  $letter .='Имя: '.$_POST['name'].PHP_EOL;
  $letter .='Email: '.$_POST['email'].PHP_EOL;
  $letter .='Предмет: '.$_POST['subject'].PHP_EOL;
  $letter .='Сообщение: '.$_POST['message'].PHP_EOL;
  
  if (mail('KonstantinSergeevJob@gmail.com', $theme, $letter, $headers)){
    echo "Сообщение отправлено!";
  } else {
    echo "Ошибка при отправке!";
  }
} else {
  echo "Ошибка: Заполните все поля!";
}