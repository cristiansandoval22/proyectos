let clickCount = 0;
        const container = document.getElementById('container');
        const result = document.getElementById('result');

        const frasesGraciosas = [
            "¿Seguro que no? ¡Piénsalo mejor!",
            "¡Vamos, da una oportunidad!",
            "No tengas vergüenza, ¡di que si!",
            "¿Y si es tu destino decir que sí?",
            "Rechazar puede ser fácil, ¡pero aceptar es más divertido!",
            "Una oportunidad, ¡no se niega!",
            "¡Decir 'sí' podría ser el comienzo de algo maravilloso!"
        ];

        document.getElementById('noButton').addEventListener('click', () => {
            clickCount++;
            noButton.style.filter = `blur(${clickCount / 3}px)`;

            let fontSize = parseInt(window.getComputedStyle(siButton).fontSize);
            let paddingVert = parseInt(window.getComputedStyle(siButton).paddingTop);
            let paddingHoriz = parseInt(window.getComputedStyle(siButton).paddingRight);

            siButton.style.fontSize = `${fontSize + 1}px`;
            siButton.style.padding = `${paddingVert + 1}px ${paddingHoriz + 5}px`;

            let randomNumber = Math.floor(Math.random() * frasesGraciosas.length);
            let randomNumberImg = Math.floor(Math.random() * 10 + 1);
            result.innerHTML = `<p>${frasesGraciosas[randomNumber]}</p><img src="images/${randomNumberImg}.jpg" width="200px" height="100px">`;
        });

        document.getElementById('siButton').addEventListener('click', () => {

            siButton.style.padding = `15px 30px`;
            siButton.style.fontSize = `18px`;

            noButton.style.filter = 'none';
            clickCount = 0;

            result.innerHTML = `<p>Siempre supe que dirías que sí </p><img src="images/happy.jpg" width="200px" height="100px">`;
            for (let i = 0; i < 300; i++) {
                createHeart();
            }
        });

        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            document.body.appendChild(heart);
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duración entre 3-5s
            heart.addEventListener('animationend', function () {
                heart.remove();
            });
        }