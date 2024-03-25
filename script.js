let linkAdded = false;
let countdownStarted = false;

//this function shows instructions
function startProcess() {
    alert("follow these instructions:\n1. Follow me in tiktok.\n2. return to this page to proceed with the download.");
    if (!countdownStarted) {
        startCountdown();
        countdownStarted = true;
    }
}

//This function performs the countdown
function startCountdown() {
    const countdownText = document.getElementById('countdown-text');
    countdownText.style.display = 'block';
    let secondsLeft = 30;
    const countdownInterval = setInterval(() => {
        secondsLeft--;
        countdownText.textContent = `checking, please wait. (${secondsLeft}s)`;
        if (secondsLeft === 0) {
            clearInterval(countdownInterval);
            addLink();
        }
    }, 1000);
}

//this function determines the download of the file
function addLink() {
    if (!linkAdded) {
        const linkArea = document.querySelector('.download-area');
        const link = document.createElement('a');
        link.href = 'mods/ChevroletSilverado.zip';
        link.textContent = 'download!';
        link.id = 'btn-download';
        link.download = 'mods/ChevroletSilverado.zip';
        linkArea.appendChild(link);
        linkAdded = true;
    }
}