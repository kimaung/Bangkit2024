const employees = [
  {
    name: "Fulan",
    email: "fulan@dicoding.com",
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
  // Membuat objek employee baru
  const newEmployee = {
    name: name,
    email: email,
    joinYear: joinYear,
  };

  // Menambahkan employee baru ke dalam array employees
  employees.push(newEmployee);
}

// Penggunaan fungsi addEmployee
addEmployee("Aes Saputra", "aessaputra@dicoding.com", 2022);
console.log(employees);
