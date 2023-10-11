<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="./css/login.css">
    <title>Exemplo de Dinamismo com JavaScript</title>
</head
  <body>
    <header>
        <nav>
            <ul>
                <li><i class="bi bi-list"></i></li>
                <li><i class="bi bi-geo-alt"></i></li>
                <li><p>Rio de Janeiro, RJ</p></li>
                <li><i class="bi bi-card-image"></i></li>
            </ul>
        </nav>
    </header>
    <section>
        <h1 id="dynamic-text">Clique no botão para mudar o texto!</h1>
        <button onclick="changeText()">Mudar Texto</button>
    </section>
    <footer>
        <ul>
            <li><a href=""><i class="bi bi-house"></i> <p>HOME</p></a></li>
            <li><a href=""><i class="bi bi-emoji-smile"></i> <p>PERFIL</p></a></li>
            <li><a href=""><i class="bi bi-receipt"></i> <p>CUPONS</p></a></li>
            <li><a href=""><i class="bi bi-star"></i> <p>PEDIDOS</p></a></li>
        </ul>
    </footer>
    
    <script>
        function changeText() {
            const element = document.getElementById('dynamic-text');
            element.textContent = 'Texto alterado com JavaScript!';
        }
    </script>
</body>
</html>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="./css/style.css">
    <title>Exemplo de Dinamismo com JavaScript</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><i class="bi bi-list"></i></li>
                <li><i class="bi bi-geo-alt"></i></li>
                <li><p>Rio de Janeiro, RJ</p></li>
                <li><i class="bi bi-card-image"></i></li>
            </ul>
        </nav>
    </header>
    <section>
        <h1 id="dynamic-text">Clique no botão para mudar o texto!</h1>
        <button onclick="changeText()">Mudar Texto</button>
    </section>
    <footer>
        <ul>
            <li><a href=""><i class="bi bi-house"></i> <p>HOME</p></a></li>
            <li><a href=""><i class="bi bi-emoji-smile"></i> <p>PERFIL</p></a></li>
            <li><a href=""><i class="bi bi-receipt"></i> <p>CUPONS</p></a></li>
            <li><a href=""><i class="bi bi-star"></i> <p>PEDIDOS</p></a></li>
        </ul>
    </footer>
    
    <script>
        function changeText() {
            const element = document.getElementById('dynamic-text');
            element.textContent = 'Texto alterado com JavaScript!';
        }
    </script>
</body>
</html>
