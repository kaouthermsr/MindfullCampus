document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector("#form-habits");
    if (form) { // Check if form exists to avoid null errors
        const nlwSetup = new NLWSetup(form);
        const button = document.querySelector('header button');

        button.addEventListener('click', function() {
            add(nlwSetup);
        });
        form.addEventListener("change", function() {
            save(nlwSetup);
        });

        function add(nlwSetup) {
            const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
            const dayExists = nlwSetup.dayExists(today);

            if (dayExists) {
                alert('Ce jour est déjà ajouté 🚫');
                return;
            }

            alert("Ajouté avec succès ✅");
            nlwSetup.addDay(today);
        }

        function save(nlwSetup) {
            localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
        }

        // Load data from localStorage if available
        const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};
        nlwSetup.setData(data);
        nlwSetup.load();
    } else {
        console.error("Form not found. Ensure the form ID is correct and the script is placed appropriately in the HTML document.");
    }
});
