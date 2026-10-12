const contactForm = document.getElementById("contact-form");

if(contactForm){
    contactForm.onsubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const result = document.getElementById("result");
        const button = document.getElementById("btn-send-message");

        formData.append("access_key", "9a67f152-2479-40a4-9ab3-3e1165dcdbb8");

        result.classList.remove("success", "error");
        result.innerHTML = "Sending...";
        button.disabled = true;

        try{
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if(response.ok && data.success){
                result.classList.add("success");
                result.innerHTML = "Message sent!";
                e.target.reset();
            } else{
                result.classList.add("error");
                result.innerHTML = "Error: " + data.message;
            }
        } catch(error){
            result.classList.add("error");
            result.innerHTML = "Sorry, your message could not be sent.";
        } finally{
            button.disabled = false;

            setTimeout(() => {
                result.innerHTML = "";
                result.classList.remove("success", "error");
            }, 1500);
        }
    };
}