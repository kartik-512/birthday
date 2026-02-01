const form = document.getElementById('birthdayForm');
const formOverlay = document.getElementById('formOverlay');
const stage = document.getElementById('stage');
const boy = document.getElementById('boy');
const rightArm = document.getElementById('rightArm');
const handCake = document.getElementById('handCake');
const flyingCake = document.getElementById('flyingCake');
const flash = document.getElementById('flash');
const birthdayPage = document.getElementById('birthdayPage');
const displayName = document.getElementById('displayName');
const displayAge = document.getElementById('displayAge');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('userName').value;
    const age = document.getElementById('userAge').value;
    
    displayName.textContent = name;
    displayAge.textContent = age;
    
    // Hide form
    formOverlay.style.opacity = '0';
    setTimeout(() => {
        formOverlay.style.display = 'none';
        
        // Show 3D Stage
        stage.style.display = 'block';
        
        // Start animation sequence
        setTimeout(() => {
            // Wind up
            rightArm.style.transition = 'transform 0.5s';
            rightArm.style.transform = 'rotateZ(-60deg) rotateX(-30deg)';
            
            setTimeout(() => {
                // THROW!
                rightArm.classList.add('throwing');
                
                // Release cake from hand
                setTimeout(() => {
                    handCake.style.opacity = '0';
                    flyingCake.classList.add('fly');
                    
                    // Flash and transition
                    setTimeout(() => {
                        flash.classList.add('active');
                        
                        setTimeout(() => {
                            stage.style.display = 'none';
                            birthdayPage.style.display = 'flex';
                            // Trigger reflow
                            void birthdayPage.offsetWidth;
                            birthdayPage.classList.add('show');
                        }, 300);
                        
                    }, 1500); // Wait for cake to fill screen
                    
                }, 800); // Time when arm is forward
                
            }, 500); // Wind up time
            
        }, 1000); // Initial pause
        
    }, 500);
});