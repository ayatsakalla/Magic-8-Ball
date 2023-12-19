function shakeMagic8Ball() {
    const question = prompt('Ask the Magic Egg a Question:');

    if (question === null) {
        document.querySelector('#response-text').innerText = 'Please ask a question!';
        document.querySelector('#response-text').classList = 'display-4 magic pink';
        document.querySelector('#response-image').src = 'question.png';
    }

    if (!question.trim()) {
        alert('Please enter a valid question!');
        return;
    }

    const randomNumber = Math.floor(Math.random() * 8);

    let answer, image, color; 

    switch(randomNumber) {
        case 0:
        answer = "Yes";
        image = "checkyay.webp";
        color = "text-success";
        break;

        case 1:
        answer = "No";
        image = "x.png";
        color = "text-danger";
        break;

        case 2:
        answer = "Maybe";
        image = "shrug.png";
        color = "text-warning";
        break;

        case 3:
        answer = "I don't like you";
        image = "ew.png";
        color = "text-info";
        break;

        case 4:
        answer = "Don't talk to me";
        image = "talktohand.png";
        color = "text-danger";
        break;

        case 5:
        answer = "Hopeless";
        image = "grim.png";
        color = "text-danger";
        break;

        case 6:
        answer = "Possibly yes";
        image = "oop.jpg";
        color = "text-success";
        break;

        case 7:
        answer = "Possibly no";
        image = "oop.jpg";
        color = "text-warning";
        break;
    }

    const responseText = document.querySelector('#response-text')
    responseText.innerText = answer;
    responseText.classList = `display-4 magic ${color}`;
    document.querySelector('#response-image').src = image;
}




