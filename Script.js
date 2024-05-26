document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("pr-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const name = document.getElementById("pr-name").value;
    const place = document.getElementById("pr-place").value;
    const salary = document.getElementById("pr-salary").value;

    // Save data (You can implement your saving logic here, e.g., send data to a backend server)
    saveData(name, place, salary);

    // Clear form fields
    form.reset();
  });

  function saveData(name, place, salary) {
    // Implement your data saving logic here (e.g., send data to a backend server)
    document.write("<h2>Saved Data:</h2>");
    document.write("<p>Name: " + name + "</p>");
    document.write("<p>Place: " + place + "</p>");
    document.write("<p>Salary: " + salary + "</p>");
    // You can replace the document.write statements with your actual saving logic
  }
})
