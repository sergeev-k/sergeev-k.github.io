<?php 
if (!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['message'])){
  
  $headers = 'From: Сергеев Константин\r\n'.
             'Reply-To: KonstantinSergeevJob@gmail.com\r\n'.
              'X-Mailer: PHP/'. phpversion();
             
  $theme = 'Новое сообщение';

  $letter = 'Данные сообщения:\r\n';
  $letter .='Имя: '.$_POST['name'].'\r\n';
  $letter .='Email: '.$_POST['email'].'\r\n';
  $letter .='Предмет: '.$_POST['subject'].'\r\n';
  $letter .='Сообщение: '.$_POST['message'].'\r\n';
  
  if (mail('KonstantinSergeevJob@gmail.com', $theme, $letter, $headers)){
    echo "Сообщение отправлено!";
  } else {
    echo "Ошибка при отправке!";
  }
} else {
  echo "Ошибка: Заполните все поля!";
}