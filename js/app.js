const sidebar = document.getElementById("sidebar");
const sidebarController = document.getElementById("sidebarController");
const sidebarControllerIcon = sidebarController.querySelector("i");
const adddatainnerWraper = document.querySelector(".adddatainnerWraper");
const addDataBtn = document.getElementById("addDataBtn");
const LoadDataPage = document.querySelector(".LoadDataPage");
const SidebarBtns = document.getElementById("SidebarBtns");
const SidebarBtn = SidebarBtns.querySelectorAll("li button");
const ShowEmpty = document.querySelector(".ShowEmpty");

// Initialize StoreLists from localStorage
let StoreLists = JSON.parse(localStorage.getItem("Lists")) || [];
let StoreHistory = JSON.parse(localStorage.getItem("ListsHistory")) || []
// All Wallet add money btns 
let AddMoneyStore = JSON.parse(localStorage.getItem("AddMoneyBtns")) || []
let UserWallet = parseFloat(localStorage.getItem("UserWallet")) || 0

// DOM elements for income/expense
const AddData = document.getElementById("AddData");
const btns = AddData.querySelectorAll("button");
const LoadDataInputIncome = document.querySelector(".LoadDataInputIncome");
const LoadDataInputExpense = document.querySelector(".LoadDataInputExpense");
const TopIcon = document.querySelector(".topShowLoadType i");

// Income form elements
const LoadDataInputIncomeSelectType = document.getElementById("LoadDataInputIncomeSelectType");
const InputAmmoutIncome = document.getElementById("InputAmmoutIncome");
const DescriptionIncome = document.getElementById("DescriptionIncome");
const AddIncomeBtn = document.getElementById("AddIncomeBtn");

// Expense form elements
const LoadDataInputExpenseSelect = document.getElementById("LoadDataInputExpenseSelect");
const AddExpenseBtn = document.getElementById("AddExpenseBtn");
const ExpenseAmmount = document.getElementById("ExpenseAmmount");
const ExpenseDescription = document.getElementById("ExpenseDescription");

// Summary elements
const TotalIncome = document.getElementById("TotalIncome");
const Totalexpense = document.getElementById("Totalexpense");
const ListLength = document.getElementById("ListLength");

// Search elements
const searchContainer = document.querySelector(".search-container-wraper");
const searchBtnToggler = document.getElementById("searchBtnToggler");
const searchBtnTogglericon = searchBtnToggler.querySelector("i");
const adddatainnerHeader = document.querySelector(".adddatainnerHeader");
const SearchInput = document.getElementById("SearchInput");

// List display
const ShowData = document.getElementById("ShowData");
const createNewBtn = document.querySelector(".createNewBtn");
const Home = document.querySelector(".Home");
const overlyMobile = document.getElementById("overlyMobile");

// Filter buttons
const ListControllBtnsWraper = document.querySelector(".list-control-btns-wraper");
const ListControllBtns = ListControllBtnsWraper.querySelectorAll("button");


const topShowLoadType = document.querySelector(".topShowLoadType")
const LoadDataInputWallet = document.querySelector(".LoadDataInputWallet")


// Add wallet 
const SelectWalletMoney = document.getElementById("SelectWalletMoney")
const InputMoney = document.getElementById("InputMoney")
const AddMoney = document.getElementById("AddMoney")
const ShowWallet = document.getElementById("ShowWallet")

const showListLength = document.getElementById("showListLength")

function AddWallet() {
    let InputMoneyValue = Number(InputMoney.value)
    if (!InputMoneyValue) return 
   let userWv1 = UserWallet += InputMoneyValue
    localStorage.setItem("UserWallet", userWv1.toString())
    ShowWallet.innerText = userWv1
    InputMoney.value = "" 

}
AddMoney.addEventListener("click", () => {
    AddWallet()
})
InputMoney.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        AddWallet()
    }   
})
    ShowWallet.innerText = UserWallet


// show message 
const messages = document.getElementById("messages")
const timeParcent = messages.querySelector(".timeParcent")
const InnerContent = messages.querySelector(".InnerContent")
// Variables for active menu and search filtering
let activeMenu = null;
let SearchVals = [...StoreLists]; // Copy of StoreLists for search filtering
let currentFilter = "all"; // Track current filter



// Initialize
ShowListLength();
FilterAll();
ShowEmptyPage();
renderLists(StoreLists);

// Show list length
function ShowListLength() {
    ListLength.innerHTML = StoreLists.length;
}

// Sidebar control functions
sidebarController.addEventListener("click", () => {
    sidebarControll();
});

const sidebarControll = () => {
    sidebar.classList.toggle("open");
    document.body.classList.toggle("sidebarHide");
    
    if (sidebar.classList.contains("open")) {
        document.body.classList.add("sidebarHide");
        overly1Add();
    } else {
        document.body.classList.remove("sidebarHide");
        overly1Remove();
    }
};

const overly1Add = () => {
    overlyMobile.classList.add('active');
};

const overly1Remove = () => {
    overlyMobile.classList.remove("active");
};

const ClickOverly = () => {
    sidebar.classList.remove("open");
    overly1Remove();
    sidebarControllerIcon.classList.remove("fa-xmark");
    sidebarControllerIcon.classList.add("fa-bars-staggered");
};

overlyMobile.addEventListener("click", ClickOverly);

// Search toggle
searchBtnToggler.addEventListener("click", SearchToggler);

function SearchToggler() {
    searchContainer.classList.toggle("open");
    if (searchContainer.classList.contains("open")) {
        adddatainnerHeader.classList.add("noBorder");
        searchBtnTogglericon.classList.remove("fa-magnifying-glass");
        searchBtnTogglericon.classList.add("fa-xmark");
    } else {
        adddatainnerHeader.classList.remove("noBorder");
        searchBtnTogglericon.classList.remove("fa-xmark");
        searchBtnTogglericon.classList.add("fa-magnifying-glass");
        SearchInput.value = ""; // Clear search when closing
        applyCurrentFilter(); // Reapply current filter
    }
}

// Income/Expense type toggle
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btns.forEach(btnOth => {
            btnOth.classList.remove("active");
        });
        btn.classList.add("active");
        
        switch (btn.innerText) {
            case "Income":
                LoadDataInputIncome.classList.add("show");
                LoadDataInputExpense.classList.remove("show");
                TopIcon.classList.remove("fa-circle-minus");
                TopIcon.classList.add("fa-circle-plus");
                topShowLoadType.classList.remove("close")
                LoadDataInputWallet.classList.add("hide")
                break;
            case "Expense":
                LoadDataInputExpense.classList.add("show");
                LoadDataInputIncome.classList.remove("show");
                TopIcon.classList.remove("fa-circle-plus");
                TopIcon.classList.add("fa-circle-minus");
                topShowLoadType.classList.remove("close")
                LoadDataInputWallet.classList.add("hide")
                break;
            case "Wallet":
                LoadDataInputExpense.classList.remove("show");
                LoadDataInputIncome.classList.remove("show");
                topShowLoadType.classList.add("close")
                LoadDataInputWallet.classList.remove("hide")
                break;
        }
    });
});

// Navigation
addDataBtn.addEventListener("click", () => {
    LoadDataPage.classList.remove("hide");
    adddatainnerWraper.classList.add("hide");
    createNewBtn.classList.add("active");
    Home.classList.remove("active");
});

SidebarBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        SidebarBtn.forEach(offBtn => {
            offBtn.classList.remove("active");
        });
        btn.classList.add("active");
        
        // Close sidebar on mobile
        sidebar.classList.remove("open");
        overly1Remove();
        sidebarControllerIcon.classList.remove("fa-xmark");
        sidebarControllerIcon.classList.add("fa-bars-staggered");
        
        switch (btn.innerText) {
            case "Home":
                LoadDataPage.classList.add("hide");
                adddatainnerWraper.classList.remove("hide");
                break;
            case "Create new":
                LoadDataPage.classList.remove("hide");
                adddatainnerWraper.classList.add("hide");
                break;
        }
    });
});

// Add income
AddIncomeBtn.addEventListener("click", AddIncomeInList);

function AddIncomeInList() {
    let InputAmmoutIncomeValue = Number(InputAmmoutIncome.value.trim());
    let DescriptionIncomeValue = DescriptionIncome.value.trim();
    let LoadDataInputIncomeSelectTypeVal = LoadDataInputIncomeSelectType.value;
    let AddTypeData = 'Income'
    if (!InputAmmoutIncomeValue || InputAmmoutIncomeValue <= 0) {
        alert("Please enter a valid amount");
        return;
    }
        MaxCountWalletBtns()
        // In Wallet algaridom
        AddMoneyStore.push({
            WalletBtn: InputAmmoutIncomeValue
        })
        localStorage.setItem("AddMoneyBtns", JSON.stringify(AddMoneyStore))
        
        GetMessage(`Successfully added ${AddTypeData}`, `added ${InputAmmoutIncomeValue}tk in ${AddTypeData.toLocaleLowerCase()} list checkout in list total ${AddTypeData.toLocaleLowerCase()} is <span class="red-mark">0tk</span>`, `<i class="fa-solid fa-circle-check"></i>`, "green")
        messageOn(20)
    let pushList = {
        id: Date.now(), // Add unique ID for better management
        ammount: InputAmmoutIncomeValue,
        description: DescriptionIncomeValue,
        Type: LoadDataInputIncomeSelectTypeVal,
        AddType: "income",
        createAt: new Date()
    };
    
    StoreLists.push(pushList);
    localStorage.setItem("Lists", JSON.stringify(StoreLists));
    
    // Clear form
    InputAmmoutIncome.value = "";
    DescriptionIncome.value = "";
    
    // Update UI
    ShowListLength();
    applyCurrentFilter();
    FilterAll();
    ShowEmptyPage();
}

// Add expense
AddExpenseBtn.addEventListener("click", AddExpense);

function AddExpense() {
    let ExpenseAmmountValue = Number(ExpenseAmmount.value.trim());
    let ExpenseDescriptionValue = ExpenseDescription.value.trim();
    let LoadDataInputExpenseSelectVal = LoadDataInputExpenseSelect.value;
    let AddTypeData = "Expense"
    if (!ExpenseAmmountValue || ExpenseAmmountValue <= 0) {
        alert("Please enter a valid amount");
        return;
    }
        // In Wallet algaridom


        let b = UserWallet - ExpenseAmmountValue
        localStorage.setItem("UserWallet", b.toString())
        ShowWallet.innerText = b
        MaxCountWalletBtns()
        AddMoneyStore.push({
            WalletBtn: ExpenseAmmountValue
        })
        localStorage.setItem("AddMoneyBtns", JSON.stringify(AddMoneyStore))
        GetMessage(`Successfully added ${AddTypeData}`, `added ${ExpenseAmmountValue}tk in ${AddTypeData.toLocaleLowerCase()} list checkout in list total ${AddTypeData.toLocaleLowerCase()} is <span class="red-mark">tk</span>`, `<i class="fa-solid fa-circle-check"></i>`, "red")
        messageOn(20)

    let pushList = {
        id: Date.now(), // Add unique ID
        ammount: ExpenseAmmountValue,
        description: ExpenseDescriptionValue,
        Type: LoadDataInputExpenseSelectVal,
        AddType: "expense",
        createAt: new Date(),
    };
    
    StoreLists.push(pushList);
    localStorage.setItem("Lists", JSON.stringify(StoreLists));
    
    // Clear form
    ExpenseAmmount.value = "";
    ExpenseDescription.value = "";
    
    // Update UI
    ShowListLength();
    applyCurrentFilter();
    FilterAll();
    ShowEmptyPage();
}


function GetMessage (messageTitle, messageDescription, MessageIcon, Wcolor) {
     InnerContent.innerHTML = `
    <div class="Messageleft">
                <p class="IconLeft color-${Wcolor}-80">${MessageIcon}</p>
                <div class="messageLeftContent">
                    <h4 class="messageTitle">${messageTitle}</h4>
                    <p class="messageDiscription">${messageDescription}</p>
                </div>
            </div>`
}


// Render lists

function renderLists(StoreListsData) {
    ShowData.innerHTML = "";
    
    if (StoreListsData.length === 0) {
        ShowEmpty.style.display = "block";
        return;
        
    }
    StoreListsData.forEach((item, index) => {

        let createData = document.createElement("div");
        createData.innerHTML = `
            <div class="list ${item.AddType}">
                <div class="list-body">
                    <div class="LeftSideList">
                        <div class="LeftSideListWraper1">
                            <div class="CostAddType">
                                <i class="fa-solid fa-circle-notch"></i>
                                ${item.AddType.charAt(0).toUpperCase() + item.AddType.slice(1)}
                            </div>
                            <div class="createAtData">
                                <p><p class="ShowTime"><i class="fa-solid fa-circle"></i><span class="getShowTime">${formatTime(item.createAt)}</span></p></p>
                            </div>
                        </div>
                        <div class="reasonShow">
                            ${item.Type ? item.Type : ""}
                        </div>
                    </div>
                    <div class="RightSideList">
                        <div class="showTaka"><span class="expense${item.AddType === "expense" ? "M" : "P"}"><i class="fa-solid fa-${item.AddType === "expense" ? "minus" : "plus"}"></i></span><i class="fa-solid fa-bangladeshi-taka-sign"></i>${item.ammount}</div>
                        <div class="list-cuz">
                            <button class="listSetting"><i class="fa-solid fa-list-ul"></i></button>
                            <div class="showMenu">
                                <button onclick="DelateList(${item.id})" class="delateList"><i class="fa-solid fa-trash"></i> Delete</button>
                                <button class="detailsBtn"><i class="fa-solid fa-window-restore"></i>Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        
        ShowData.appendChild(createData);
        
        let listSettingBtn = createData.querySelector(".listSetting");
        let showMenu = createData.querySelector(".showMenu");
        
        listSettingBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            ListSettingToggle(showMenu);
        });
    });
    
    ShowEmpty.style.display = "none";
}

// Toggle list settings menu
function ListSettingToggle(menu) {
    if (activeMenu && activeMenu !== menu) {
        activeMenu.classList.remove("show");
    }
    
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        activeMenu = null;
    } else {
        menu.classList.add("show");
        activeMenu = menu;
    }
}

// Close menu when clicking elsewhere
document.addEventListener('click', (e) => {
    if (activeMenu && !e.target.closest('.list-cuz')) {
        activeMenu.classList.remove("show");
        activeMenu = null;
    }
});


// Delete list item
function DelateList(id) {
    StoreLists = StoreLists.filter(item => item.id !== id);
    localStorage.setItem("Lists", JSON.stringify(StoreLists));
    
    ShowListLength();
    applyCurrentFilter();
    FilterAll();
    ShowEmptyPage();
}

// Show empty page
function ShowEmptyPage() {
    if (StoreLists.length < 1) {
        ShowEmpty.style.display = "block";
    } else {
        ShowEmpty.style.display = "none";
    }
}

// Calculate and display totals
function FilterAll() {
    let filterIncome = StoreLists.filter(items => items.AddType === "income");
    let filterExpense = StoreLists.filter(items => items.AddType === "expense");
    let TotalIncomeSum = filterIncome.reduce((sum, num) => sum + num.ammount, 0);
    let TotalExpenseSum = filterExpense.reduce((sum, num) => sum + num.ammount, 0);
    
    TotalIncome.innerHTML = TotalIncomeSum;
    Totalexpense.innerHTML = TotalExpenseSum;
    
}



// Format time display
function formatTime(timeData) {
    let past = new Date(timeData)
    let now = new Date()

    // Get Time
    let diffMiliSeconds = now - past
    let minutes = Math.floor(diffMiliSeconds / (1000 * 60))
    let hours = Math.floor(diffMiliSeconds / (1000 * 60 * 60))
    let day = Math.floor(diffMiliSeconds / ( 1000 * 60 * 60 * 24))

    if (minutes < 1) return "Just now"
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago` 
    if (day < 7 ) return `${day}day${day > 1 ? "'s" : ''} ago`
    return date.toLocaleDateString()
}
setInterval(() => {
    renderLists(StoreLists)
}, 60000)
// Apply current filter
function applyCurrentFilter() {
    switch (currentFilter) {
        case "income":
            filterIncome();
            break;
        case "expense":
            filterExpense();
            break;
        default:
            filterAll();
            break;
    }
}

// Filter functions
function filterAll() {
    SearchVals = [...StoreLists];
    renderLists(StoreLists);
    ListLength.innerHTML = StoreLists.length;
    currentFilter = "all";
}

function filterIncome() {
    let filtered = StoreLists.filter(item => item.AddType === "income");
    SearchVals = filtered;
    renderLists(filtered);
    ListLength.innerHTML = filtered.length;
    currentFilter = "income";
}

function filterExpense() {
    let filtered = StoreLists.filter(item => item.AddType === "expense");
    SearchVals = filtered;
    renderLists(filtered);
    ListLength.innerHTML = filtered.length;
    currentFilter = "expense";
}

// Filter button events
ListControllBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        ListControllBtns.forEach((offBtn) => {
            offBtn.classList.remove("active");
        });
        btn.classList.add("active");
        
        switch (btn.innerText.toLowerCase()) {
            case "all":
                filterAll();
                break;
            case "income":
                filterIncome();
                break;
            case "expense":
                filterExpense();
                break;
        }
    });
});

// Search functionality
function Search(StoreListsVals) {
    let SearchInputValue = SearchInput.value.trim().toLowerCase();
    
    if (!SearchInputValue) {
        applyCurrentFilter();
        return;
    }
    let filterSearch = StoreListsVals.filter(searchItem => 
        String(searchItem.ammount).includes(SearchInputValue) ||
        searchItem.AddType.toLowerCase().includes(SearchInputValue) ||
        (searchItem.Type && searchItem.Type.toLowerCase().includes(SearchInputValue)) ||
        (searchItem.description && searchItem.description.toLowerCase().includes(SearchInputValue))
    );
    renderLists(filterSearch);
    ListLength.innerHTML = filterSearch.length;
}

SearchInput.addEventListener("input", () => {
    Search(SearchVals);
});

// Allow form submission with Enter key
InputAmmoutIncome.addEventListener("keypress", (e) => {
    if (e.key === "Enter") AddIncomeInList();
});

ExpenseAmmount.addEventListener("keypress", (e) => {
    if (e.key === "Enter") AddExpense();
});

DescriptionIncome.addEventListener("keypress", (e) => {
    if (e.key === "Enter") AddIncomeInList();
});

ExpenseDescription.addEventListener("keypress", (e) => {
    if (e.key === "Enter") AddExpense();
});

const resetAllData = document.getElementById("resetAllData")

resetAllData.addEventListener("click", () => {
    
    sidebarControll()

    setTimeout(() => {
        const confirmDelate = confirm("Are you sure you want delate all list ?")
    if (confirmDelate) {
    StoreLists = []
    localStorage.setItem("Lists", JSON.stringify(StoreLists))
        renderLists(StoreLists)
        ShowListLength();
        applyCurrentFilter();
        FilterAll();
        ShowEmptyPage();
    }
    }, 500)
})


function messageOn (time) {
    messages.classList.add("open")
    let count = 100
    let y = setInterval(() => {
        count = count - 1
        timeParcent.style.width = `${count}%`
            if (count < -50) {
                messages.classList.remove("open")
                count = 0
                clearInterval(y)
                return
            } else {
                 messages.classList.add("open")
            }
    }, time)

}


/// SelectWalletMoney


let frequancy = {}

for (let x of AddMoneyStore) {
    frequancy[x.WalletBtn] = frequancy[x.WalletBtn] ? frequancy[x.WalletBtn] + 1 : 1
}

let maxCount = []

for (let obj of Object.values(frequancy)) {
    maxCount.push(obj)
}


let maxUseBtns = Object.keys(frequancy).find(btn => frequancy[btn] === (Math.max(...maxCount)))
// console.log(maxUseBtns)




console.log(maxUseBtns)

let WaletbtnsData = []

for (let l of AddMoneyStore){
    WaletbtnsData.push(l.WalletBtn)
}
WaletbtnsData.push(Number(maxUseBtns))
WaletbtnsData = [...new Set(WaletbtnsData)].filter(item => item > 10)


function MaxCountWalletBtns() {
    if (WaletbtnsData.length > 30) {
        localStorage.removeItem("AddMoneyBtns")
    } 
}
MaxCountWalletBtns() 

let suggestWalletBtns = `
 <div class="topHeaderLoadWallletTitle">
        Select wallet
 </div>
<div class="MainSuggestContainer">
    <div class="SuggestBtnsCon1Show"></div>
    <div class="btnSugestMoreBtns hide"></div>
    <button class="SeeMoreBtn">see more</button>
</div>
`




let suggestBtnsCon1 = {
   btnCon1: [
        {btn: 102},
        {btn: 17},
        {btn: 198},
        {btn: 312},
        {btn: 1927},
        {btn: 91},
        {btn: 66},
        {btn: 189}
   ],
   btnCon2: [
        {btn: 181},
        {btn: 171},
        {btn: 221},
        {btn: 111},
        {btn: 752},
        {btn: 108},
        {btn: 892},
        {btn: 179}
   ],
   btnCon3: [
        {btn: 1811},
        {btn: 172},
        {btn: 226},
        {btn: 1101},
        {btn: 1220},
        {btn: 67},
        {btn: 12},
        {btn: 1229}
   ]
}
SelectWalletMoney.innerHTML = suggestWalletBtns
let RandomWalletBtnsCon1 = suggestBtnsCon1.btnCon1[Math.floor(Math.random() * (suggestBtnsCon1.btnCon1.length - 1))]
let RandomWalletBtnsCon2 = suggestBtnsCon1.btnCon2[Math.floor(Math.random() * (suggestBtnsCon1.btnCon2.length - 1))]
let RandomWalletBtnsCon3 = suggestBtnsCon1.btnCon3[Math.floor(Math.random() * (suggestBtnsCon1.btnCon3.length - 1))]

let allWalletBtns = [RandomWalletBtnsCon1,RandomWalletBtnsCon2,RandomWalletBtnsCon3]


let btnsConTop = SelectWalletMoney.querySelector(".SuggestBtnsCon1Show")
let btnSugestMoreBtns = SelectWalletMoney.querySelector(".btnSugestMoreBtns")

allWalletBtns.forEach(btn => {
    let createWalletBtn = document.createElement("button")
    createWalletBtn.innerHTML = `${btn.btn}`
    btnsConTop.appendChild(createWalletBtn)
})
for(let b of WaletbtnsData) {
    let createBtn = document.createElement("button")
    createBtn.innerHTML = `${b}`
    btnSugestMoreBtns.appendChild(createBtn)
}
btnSugestMoreBtns.classList.add("hide")

let SeeMoreBtn = SelectWalletMoney.querySelector(".SeeMoreBtn")

SeeMoreBtn.addEventListener("click", () => {
    btnSugestMoreBtns.classList.toggle("hide")
    if ( btnSugestMoreBtns.classList.contains("hide")) {
        SeeMoreBtn.innerText = "see more"
    } else {
        SeeMoreBtn.innerText = "see less"
    }
})

showListLength.addEventListener("click", () => {
    let y = confirm("You are sure You delete your wallet balance ?")
    if (y) {
        localStorage.removeItem("UserWallet")
        ShowWallet.innerHTML = 0
    }
})