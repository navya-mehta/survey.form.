<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting normally
      
      // Collect form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("number").value,
        favoritePlace: document.getElementById("dropdown").value,
        majorMissing: document.querySelector('input[name="food"]:checked').value,
        eitherOr: getSelectedCheckboxes("checkbox"),
        meri tarif kerdo: document.getElementById("textarea").value,
      };

      // You can choose how to handle the data here
      // For example, log it to the console and store it in Local Storage
      console.log(formData);
      localStorage.setItem("surveyResponse", JSON.stringify(formData));

      // Display a thank you message or perform any other action
      alert("Thank you for your response!");
    });

    // Helper function to get selected checkboxes
    function getSelectedCheckboxes(name) {
      const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
      const values = [];
      checkboxes.forEach(checkbox => values.push(checkbox.value));
      return values;
    }
  });
</script>
