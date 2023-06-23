function countUp(targetId, targetNumber, duration) {
    const target = document.getElementById(targetId);
    const increment = Math.ceil(targetNumber / (duration / 20)); 
    let currentNumber = 0;
    const interval = setInterval(() => 
    {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            target.textContent = targetNumber;
            clearInterval(interval);
        } else {
            target.textContent = currentNumber;
        }
    }, 20);
} 


countUp('likes', 2395, 2000); 

countUp('engagements', 32493, 2000);