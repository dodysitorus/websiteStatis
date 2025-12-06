const userList = document.getElementById("user-list");
const userDetails = document.getElementById("user-details");

const apiKey = 'reqres_b895b2a05cb64a688d5ed6abae7f8d80';  

fetch('https://reqres.in/api/users?page=1', {
  method: 'GET',
  headers: {
    'x-api-key': apiKey, 
  }
})
  .then(response => response.json())
  .then(data => {
    // Menampilkan daftar pengguna
    data.data.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');
      
      userCard.innerHTML = `
        <img src="${user.avatar}" alt="${user.first_name}">
        <h3>${user.first_name} ${user.last_name}</h3>
        <p>${user.email}</p>
      `;

      // Event click untuk melihat detail pengguna
      userCard.addEventListener('click', () => {
        showUserDetails(user);
      });

      userList.appendChild(userCard);
    });
  })
  .catch(error => console.error('Error:', error));

// Menampilkan detail pengguna
function showUserDetails(user) {
  userDetails.style.display = 'block';
  userDetails.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img src="${user.avatar}" alt="${user.first_name}">
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Job:</strong> ${user.job || 'Not Available'}</p>
  `;
}
