const output = document.getElementById("output");

        function display(num) {
            output.value += num;
        }

        function calculate() {
            try {
                output.value = eval(output.value);
            } catch (error) {
                alert("Error");
            }
        }

        function Clear() {
            output.value = "";
        }

        function del() {
            output.value = output.value.slice(0, -1);
        }

        // Add event listener for Enter key press
        document.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                calculate();
            }
        });
        