document.querySelectorAll(".card button")
.forEach(button=>{

button.addEventListener("click",()=>{

alert("🍦 Added to your favorites!");

});

});

document.querySelector(".explore-btn")
.addEventListener("click",()=>{

document.querySelector(".signature")
.scrollIntoView({
behavior:"smooth"
});

});

const form = document.getElementById("orderForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const orderData = {

    customerName:
      document.getElementById("customerName").value,

    phone:
      document.getElementById("phone").value,

    flavor:
      document.getElementById("flavor").value,

    quantity:
      document.getElementById("quantity").value,

    address:
      document.getElementById("address").value
  };

  try {

    const response = await fetch(
      "http://localhost:5000/api/orders",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(orderData)
      }
    );

    const data = await response.json();

    alert(data.message);

    form.reset();

  } catch (error) {

    alert("Unable to place order");

  }

});