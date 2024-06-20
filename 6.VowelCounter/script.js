function countVowels() {
    let name = document.getElementById('nameInput').value.trim().toLowerCase();
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = 0; i < name.length; i++) {
      if (vowels.includes(name[i])) {
        vowelCount++;
      }
    }
  
    document.getElementById('vowelCount').textContent = vowelCount;
  }
  