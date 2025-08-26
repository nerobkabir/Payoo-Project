const valid_pin = 1234;

function short(num) {
    const value_p = document.getElementById(num).value;
    const value_int = parseInt(value_p);
    return value_int;
}

let save_data = [];

// Add Money

document.getElementById("add-btn").addEventListener('click', function (e) {
    e.preventDefault();

    const bank = document.getElementById("add-bank").value;
    const account = document.getElementById("add-account").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("add-pin").value);

    if (account.length < 11) {
        alert("Please Give Correct Account Number");
        return;
    }

    if (pin !== valid_pin) {
        alert("Please Give Correct PIN Number");
        return;
    }
    const total = parseInt(document.getElementById("total-balance").innerText);

    const ans = amount + total;

    document.getElementById("total-balance").innerText = ans;

    // extra code

    const data = {
        name: "Add Money",
        amount: amount,
        date: new Date().toLocaleTimeString()
    };

    save_data.push(data);

    // also render immediately
    const transactionPart = document.getElementById("transaction-part");
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mb-3">
            <div class="flex items-center gap-2">
                <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./images/wallet1.png" alt="" class="mx-auto">
                </div>
                <div>
                    <h1>${data.name}</h1>
                    <p>${data.amount} ৳ — ${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    `;
    transactionPart.prepend(div);
})

// Cash Out

document.getElementById("add-batton").addEventListener('click', function (e) {
    e.preventDefault();

    const account = document.getElementById("adds-account").value;
    const amount = parseInt(document.getElementById("adds-amount").value);
    const pin = parseInt(document.getElementById("adds-pin").value);

    if (account.length < 11) {
        alert("Please Give Correct Account Number");
        return;
    }

    if (pin !== valid_pin) {
        alert("Please Give Correct PIN Number");
        return;
    }
    const total = parseInt(document.getElementById("total-balance").innerText);

    const ans = total - amount;

    document.getElementById("total-balance").innerText = ans;

    // extra code

    const data = {
        name: "Cash Out",
        amount: amount,
        date: new Date().toLocaleTimeString()
    };

    save_data.push(data);

    // also render immediately
    const transactionPart = document.getElementById("transaction-part");
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mb-3">
            <div class="flex items-center gap-2">
                <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./images/send1.png" alt="" class="mx-auto">
                </div>
                <div>
                    <h1>${data.name}</h1>
                    <p>${data.amount} ৳ — ${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    `;
    transactionPart.prepend(div);
})

// Transfer Money

document.getElementById("add-transfer").addEventListener('click', function (e) {
    e.preventDefault();

    const account = document.getElementById("addss-account").value;
    const amount = parseInt(document.getElementById("addss-amount").value);
    const pin = parseInt(document.getElementById("addss-pin").value);

    if (account.length < 11) {
        alert("Please Give Correct Account Number");
        return;
    }

    if (pin !== valid_pin) {
        alert("Please Give Correct PIN Number");
        return;
    }
    const total = parseInt(document.getElementById("total-balance").innerText);

    const ans = total - amount;

    document.getElementById("total-balance").innerText = ans;

    // extra code

    const data = {
        name: "Transfer Money",
        amount: amount,
        date: new Date().toLocaleTimeString()
    };

    save_data.push(data);

    // also render immediately
    const transactionPart = document.getElementById("transaction-part");
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mb-3">
            <div class="flex items-center gap-2">
                <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./images/money1.png" alt="" class="mx-auto">
                </div>
                <div>
                    <h1>${data.name}</h1>
                    <p>${data.amount} ৳ — ${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    `;
    transactionPart.prepend(div);
})

// get bonus

document.getElementById("add-bonus").addEventListener('click', function (e) {
    e.preventDefault();

    const ans = short("add-account-number");

    const total = parseInt(document.getElementById("total-balance").innerText);

    const total_ans = total + ans;
    document.getElementById("total-balance").innerText = total_ans;

    // extra code

    const data = {
        name: "Get Bonus",
        amount: amount,
        date: new Date().toLocaleTimeString()
    };

    save_data.push(data);

    // also render immediately
    const transactionPart = document.getElementById("transaction-part");
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mb-3">
            <div class="flex items-center gap-2">
                <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./images/bonus1.png" alt="" class="mx-auto">
                </div>
                <div>
                    <h1>${data.name}</h1>
                    <p>${data.amount} ৳ — ${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    `;
    transactionPart.prepend(div);



})

// Pay Bill

document.getElementById("add-btn-number").addEventListener('click', function (e) {
    e.preventDefault();

    const bank = document.getElementById("add-bill").value;
    const account = document.getElementById("add-account-number").value;
    const amount = parseInt(document.getElementById("add-amount-price").value);
    const pin = parseInt(document.getElementById("add-pin-number").value);

    // if (account.length < 8) {
    //     alert("Please Give Correct Account Number");
    //     return;
    // }

    if (pin !== valid_pin) {
        alert("Please Give Correct PIN Number");
        return;
    }
    const total = parseInt(document.getElementById("total-balance").innerText);

    const ans = total - amount;

    document.getElementById("total-balance").innerText = ans;

    // extra code

    const data = {
        name: "Pay Bill",
        amount: amount,
        date: new Date().toLocaleTimeString()
    };

    save_data.push(data);

    // also render immediately
    const transactionPart = document.getElementById("transaction-part");
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mb-3">
            <div class="flex items-center gap-2">
                <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./images/purse1.png" alt="" class="mx-auto">
                </div>
                <div>
                    <h1>${data.name}</h1>
                    <p>${data.amount} ৳ — ${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    `;
    transactionPart.prepend(div);
})

// transetion bill

document.getElementById("part").addEventListener('click', function (e) {
    e.preventDefault();

    const data = {
        name: "Add Money",
        amount: amount,
        date: new Date().toLocaleTimeString()
    };

    save_data.push(data);

    // also render immediately
    const transactionPart = document.getElementById("transaction-part");
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center">
            <div class="flex items-center gap-2">
                <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./images/wallet1.png" alt="" class="mx-auto">
                </div>
                <div>
                    <h1>${data.name}</h1>
                    <p>${data.amount} ৳ — ${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    `;
    transactionPart.prepend(div); // newest first
});



// Toggle

// add money
document.getElementById("add-money").addEventListener('click', function () {
    document.getElementById("cash-out-2").style.display = 'none';
    document.getElementById("from-section").style.display = 'block';
    document.getElementById("transfer-money").style.display = 'none';
    document.getElementById("get-bonus").style.display = 'none';
    document.getElementById("pay-bill").style.display = 'none';
    document.getElementById("part").style.display = 'none';

    // button hover
    const form_value = document.getElementsByClassName("form-name");
    for (const btn of form_value) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }

    document.getElementById("add-money").classList.remove("border-gray-300");
    document.getElementById("add-money").classList.add("border-[#0874f2]", "bg-[#0874f20d]");
})

// cash out
document.getElementById("cash-out").addEventListener('click', function () {
    document.getElementById("from-section").style.display = 'none';
    document.getElementById("cash-out-2").style.display = 'block';
    document.getElementById("transfer-money").style.display = 'none';
    document.getElementById("get-bonus").style.display = 'none';
    document.getElementById("pay-bill").style.display = 'none';
    document.getElementById("part").style.display = 'none';

    // button hover
    const form_value = document.getElementsByClassName("form-name");
    for (const btn of form_value) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }

    document.getElementById("cash-out").classList.remove("border-gray-300");
    document.getElementById("cash-out").classList.add("border-[#0874f2]", "bg-[#0874f20d]");

})

// transfer money
document.getElementById("transfer").addEventListener('click', function () {
    document.getElementById("from-section").style.display = 'none';
    document.getElementById("cash-out-2").style.display = 'none';
    document.getElementById("transfer-money").style.display = 'block';
    document.getElementById("get-bonus").style.display = 'none';
    document.getElementById("pay-bill").style.display = 'none';
    document.getElementById("part").style.display = 'none';

    // button hover
    const form_value = document.getElementsByClassName("form-name");
    for (const btn of form_value) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }

    document.getElementById("transfer").classList.remove("border-gray-300");
    document.getElementById("transfer").classList.add("border-[#0874f2]", "bg-[#0874f20d]");
})

// get bonus 

document.getElementById("get").addEventListener('click', function () {
    document.getElementById("from-section").style.display = 'none';
    document.getElementById("cash-out-2").style.display = 'none';
    document.getElementById("transfer-money").style.display = 'none';
    document.getElementById("get-bonus").style.display = 'block';
    document.getElementById("pay-bill").style.display = 'none';
    document.getElementById("part").style.display = 'none';

    // button hover
    const form_value = document.getElementsByClassName("form-name");
    for (const btn of form_value) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }

    document.getElementById("get").classList.remove("border-gray-300");
    document.getElementById("get").classList.add("border-[#0874f2]", "bg-[#0874f20d]");
})

// Pay bill

document.getElementById("pay").addEventListener('click', function () {
    document.getElementById("from-section").style.display = 'none';
    document.getElementById("cash-out-2").style.display = 'none';
    document.getElementById("transfer-money").style.display = 'none';
    document.getElementById("get-bonus").style.display = 'none';
    document.getElementById("pay-bill").style.display = 'block';
    document.getElementById("part").style.display = 'none';

    // button hover
    const form_value = document.getElementsByClassName("form-name");
    for (const btn of form_value) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }

    document.getElementById("pay").classList.remove("border-gray-300");
    document.getElementById("pay").classList.add("border-[#0874f2]", "bg-[#0874f20d]");
})

// Transetion 

document.getElementById("tran").addEventListener('click', function () {
    document.getElementById("from-section").style.display = 'none';
    document.getElementById("cash-out-2").style.display = 'none';
    document.getElementById("transfer-money").style.display = 'none';
    document.getElementById("get-bonus").style.display = 'none';
    document.getElementById("pay-bill").style.display = 'none';
    document.getElementById("part").style.display = 'block';

    // button hover
    const form_value = document.getElementsByClassName("form-name");
    for (const btn of form_value) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }

    document.getElementById("tran").classList.remove("border-gray-300");
    document.getElementById("tran").classList.add("border-[#0874f2]", "bg-[#0874f20d]");
})