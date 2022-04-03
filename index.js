const openGoogleButton = document.getElementById('openGoogleButton');
openGoogleButton.addEventListener('click', () => {
    document.location.href = 'https://www.google.com/search?q=cat&tbm=isch';
});

const linkOne = document.getElementById('linkOne');
const linkThree = document.getElementById('linkThree');
linkThree.addEventListener('keydown', (e)=>{
    if (e.key === 'Tab') {
        linkOne.focus();
    }
});