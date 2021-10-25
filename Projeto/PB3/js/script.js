window.addEventListener ('focusout', () => {

    let valueCount = Number(document.getElementById('value').value);
    let percentage = Number(document.getElementById('tip').value);
    let people = document.getElementById('people').value;

    if(valueCount < 0 || percentage < 0 || people < 0) {
        
        let error = document.getElementById('error');

        error.innerHTML = 'Digite apenas números positivos';
        error.style.display = 'block';

    }
    else {

        function calculateTip() { 
            let totalTipFormat;  
            let totalTip = ( (valueCount * percentage) / 100);
            
            totalTipFormat = totalTip;

            totalTipFormat = totalTip.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                });

            function tipPeople() {

                let tipPeopleFormat; 
                let tipPeople = totalTip / people;

                tipPeopleFormat = tipPeople;
                
                tipPeopleFormat = tipPeople.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                });

                function totalPeople() {
                    let totalPeople = valueCount + tipPeople;
                    
                    totalPeople = totalPeople.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                    });

                    function total() {
                        let total = valueCount + totalTip;

                        total = total.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        });
                        
                    
                        if (valueCount == 0 || percentage == 0 || people == 0) {
                            document.getElementById('total-tip').value = "";
                            document.getElementById('tip-people').value = "";
                            document.getElementById('total-people').value = "";
                            document.getElementById('total').value = ""; 
                        }
                        else {
                            document.getElementById('total-tip').value = totalTipFormat;
                            document.getElementById('tip-people').value = tipPeopleFormat; 
                            document.getElementById('total-people').value = totalPeople; 
                            document.getElementById('total').value = total; 
                        }

                    }

                    total();
                }

                totalPeople();

            }

            tipPeople();
            
        }

        calculateTip();

        // document.getElementById('tip').value = percentage + "%";
        error.style.display = 'none';
    }

})
