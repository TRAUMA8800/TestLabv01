<?

    $name = $_POST['name'];
    $tel = $_POST['tel'];

    $dbh = new PDO('mysql:host=localhost;dbname=cb97717_db', 'cb97717_db', 'cb97717_pass');
    $stmt = $dbh->prepare("INSERT INTO `order`(`time`), name, tel)
        VALUES (NOW(), :name, :tel)");
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':tel', $tel);
    $stmt->execute();