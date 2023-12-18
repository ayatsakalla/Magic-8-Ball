function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8 Ball a Question:');

    if (question === null) {
        document.querySelector('#response-text').innerText = 'Please ask a question!';
        document.querySelector('#response-text').classList = 'display-4 text-danger';
        document.querySelector('#response-image').src = '#BAD/BROKENIMG';
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
        color: "text-success";
        break;

        case 1:
        answer = "No";
        image = "yes-img.jpg";
        color: "text-success";
        break;

        case 2:
        answer = "Maybe";
        image = "yes-img.jpg";
        color: "text-success";
        break;

        case 3:
        answer = "I don't like you";
        image = "yes-img.jpg";
        color: "text-success";
        break;

        case 4:
        answer = "Don't talk to me";
        image = "yes-img.jpg";
        color: "text-success";
        break;

        case 5:
        answer = "Hopeless";
        image = "yes-img.jpg";
        color: "text-success";
        break;

        case 6:
        answer = "Possibly yes";
        image = "yes-img.jpg";
        color: "text-success";
        break;

        case 7:
        answer = "Possibly no";
        image = "yes-img.jpg";
        color: "text-success";
        break;
    }

    const responseText = document.querySelector('#response-text')
    responseText.innerText = answer
    responseText.classList = `display-4 ${color}`
    document.querySelector('response-image').src = image
}




