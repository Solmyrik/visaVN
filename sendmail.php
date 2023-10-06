<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "PHPMailer/src/Exception.php";
    require "PHPMailer/src/PHPMailer.php";

    $mail = new PHPMailer(true); 
    $mail->CharSet = "UTF-8"; 
    $mail->IsHTML(true);    


   //  Укажите здесь свою почту
    $mail->addAddress("VisaVezde@yandex.ru");

    $body = '<h1>Заявка с формы</h1>';

    if(trim(!empty($_POST['name']))){
      $body.= '<p><strong>Имя: </strong>' .$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['phone']))){
      $body.= '<p><strong>Номер телефона: </strong>' .$_POST['phone'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
      $body.= '<p><strong>email: </strong>' .$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['country']))){
      $body.= '<p><strong>Интересующая страна: </strong>' .$_POST['country'].'</p>';
    }
    if(trim(!empty($_POST['purpose']))){
      $body.= '<p><strong>Цель: </strong>' .$_POST['purpose'].'</p>';
    }
    

    // if(isset($_POST['name'])){
    //   $phone = $_POST["phone"]; 
    //   $name = $_POST["name"]; 
    //   $email = $_POST["email"]; 
    //   $country = $_POST["country"]; 
    //   $purpose = $_POST["purpose"]; 
    //   $id = $_POST["id"]; 
    //   $body = '[Имя]:' . ' ' . $name . "\r\n"
    //   . '[Номер телефона]:' . ' ' . $phone . "\r\n"
    //   . '[email]:' . ' ' . $email . "\r\n"
    //   . '[Страна]:' . ' ' . $country . "\r\n"
    //   . '[Цель]:' . ' ' . $purpose . ' ';
      $id = $_POST["id"]; 
      $theme = 'Заявка c формы #:' . ' ' . $id;
    //   }
      

   $mail->Subject = $theme;
   $mail->Body = $body;

   $mail->send();
