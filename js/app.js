import { audiosData } from  "./data.js"


const sidebar = document.getElementById("sidebar");
const sidebarController = document.getElementById("sidebarController");
const sidebarControllerIcon = sidebarController.querySelector("i");
const adddatainnerWraper = document.querySelector(".adddatainnerWraper");
const addDataBtn = document.getElementById("addDataBtn");
const LoadDataPage = document.querySelector(".LoadDataPage");
const SidebarBtns = document.getElementById("SidebarBtns");
const SidebarBtn = SidebarBtns.querySelectorAll("li button");
const ShowEmpty = document.querySelector(".ShowEmpty");
const adddata = document.querySelector(".adddata")
const main_wraper_two = document.querySelector(".main_wraper_two")
const QuickOpenBtn = document.getElementById("QuickOpenBtn")
const QuickBtns = document.getElementById("QuickBtns")
const QuickbtnsWraper = document.querySelector(".QuickbtnsWraper")

// music 
const MusicMenu = document.querySelector(".MusicMenu")
const MusicBtn = document.getElementById("MusicBtn")
const MusicmenuClose = document.getElementById("MusicmenuClose")
const showAudioLength = document.getElementById("showAudioLength")
const resetAudioTime = document.getElementById("resetAudioTime")
const AudioCurrentTimeInto = document.getElementById("AudioCurrentTimeInto")
const reduceAudioLength = document.querySelector(".reduceAudioLength")
const increaseAudioLength = document.querySelector(".increaseAudioLength")
const musicName = document.getElementById("musicName")
const audioLength = document.getElementById("audioLength")
const musicActiveShowerBtn = document.getElementById("musicActiveShowerBtn")
const musicActiveShower = document.querySelector(".musicActiveShower")

// create note 

const NoteCreatetorWraper = document.querySelector(".NoteCreatetorWraper")
const CreateNoteBtn = document.getElementById("CreateNoteBtn")
const CreateNoteBtnTwo = document.getElementById("CreateNoteBtnTwo")
const createNote = document.getElementById("createNote")
const backTohome = document.getElementById("backTohome")
const AddNoteBtn = document.getElementById("AddNoteBtn")


// calculator 
const calculatorBtn = document.querySelector(".calculatorBtn")
const adddatainner = document.querySelector(".adddatainner")
const Calculator = document.querySelector(".Calculator")

// Initialize StoreLists from localStorage
let StoreLists = JSON.parse(localStorage.getItem("Lists")) || [];
// let StoreHistory = JSON.parse(localStorage.getItem("ListsHistory")) || []
// All Wallet add money btns 
let AddMoneyStore = JSON.parse(localStorage.getItem("AddMoneyBtns")) || []
let UserWallet = parseFloat(localStorage.getItem("UserWallet")) || 0

// totalIncome 
let totalIncomeShow = 0



function UserWalletStore(wallet, controll) {

   if (controll === "+") {
     UserWallet += wallet
   } else if (controll === "-") {
     UserWallet -= wallet
   } else if (controll === "/") {
     UserWallet /= wallet
   }
   localStorage.setItem("UserWallet", UserWallet)
   if (ShowWallet) ShowWallet.innerText = UserWallet
   return UserWallet
}
// for note page 
let isNotePage = localStorage.getItem("isNotePage")

// SidebarBtns

const HomeBtn = SidebarBtns.querySelector(".HomeBtn")
const createNewBtn = SidebarBtns.querySelector(".createNewBtn")
const NoteBtn = SidebarBtns.querySelector(".NoteBtn")
const historyBtn = SidebarBtns.querySelector(".historyBtn")
const learningBtn = SidebarBtns.querySelector(".learningBtn")
const PrivacyPolicyBtn = SidebarBtns.querySelector(".PrivacyPolicyBtn")


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
const ShowWallet = document.getElementById("ShowWallet");

// Search elements
const searchContainer = document.querySelector(".search-container-wraper");
const searchBtnToggler = document.getElementById("searchBtnToggler");
const searchBtnTogglericon = searchBtnToggler.querySelector("i");
const adddatainnerHeader = document.querySelector(".adddatainnerHeader");
const SearchInput = document.getElementById("SearchInput");

// List display
const ShowData = document.getElementById("ShowData");
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
const addMoneyBtnWallet = document.getElementById("addMoneyBtnWallet")

// BlackOverly
const BlackOverly = document.getElementById("BlackOverly")



const showListLength = document.getElementById("showListLength")

function AddWallet() {
    let InputMoneyValue = Number(InputMoney.value)
    if (!InputMoneyValue) return 
   let userWv1 = UserWallet += InputMoneyValue
   localStorage.setItem("UserWallet", userWv1.toString())
   if (ShowWallet) ShowWallet.innerText = userWv1
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
    if (ShowWallet) ShowWallet.innerText = UserWallet


// show message 
const messages = document.getElementById("messages")
const timeParcent = messages.querySelector(".timeParcent")
const InnerContent = messages.querySelector(".InnerContent")
// Variables for active menu and search filtering
let activeMenu = null;
let SearchVals = [...StoreLists]; // Copy of StoreLists for search filtering
let currentFilter = "all"; // Track current filter
let activeDetailsMenu = null


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
                TopIcon.classList.remove("fa-eraser");
                TopIcon.classList.add("fa-notes-medical");
                topShowLoadType.classList.remove("close")
                LoadDataInputWallet.classList.add("hide")
                break;
            case "Expense":
                LoadDataInputExpense.classList.add("show");
                LoadDataInputIncome.classList.remove("show");
                TopIcon.classList.remove("fa-notes-medical");
                TopIcon.classList.add("fa-eraser");
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
   addDataBtnClick()
});

function addDataBtnClick() {
    LoadDataPage.classList.remove("hide");
    adddatainnerWraper.classList.add("hide");
    createNewBtn.classList.add("active");
    HomeBtn.classList.remove("active");
    NoteBtn.classList.remove("active")

}
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
                adddata.classList.remove("hide")
                localStorage.setItem("isNotePage", "false")
                main_wraper_two.classList.add("hide")
                HomeBtn.classList.add("active")
                localStorage.setItem("AddNotePageActive", "false")
                calculatorBtn.classList.remove("active")
                Calculator.classList.add("hide")
                break;
            case "Create new":
                LoadDataPage.classList.remove("hide");
                adddata.classList.remove("hide")
                adddatainnerWraper.classList.add("hide");
                localStorage.setItem("isNotePage", "false")
                main_wraper_two.classList.add("hide")
                 NoteBtn.classList.remove("active")
                HomeBtn.classList.remove("active")
                localStorage.setItem("AddNotePageActive", "false")
                calculatorBtn.classList.remove("active")
                Calculator.classList.add("hide")
                // btns[0].classList.add("active")
                // btns[1].classList.remove("active")
                // btns[2].classList.remove("active")
                // btns[3].classList.remove("active")
                break;
            case "Calculator":
                LoadDataPage.classList.remove("hide");
                adddata.classList.remove("hide")
                adddatainnerWraper.classList.add("hide");
                localStorage.setItem("isNotePage", "false")
                main_wraper_two.classList.add("hide")
                NoteBtn.classList.remove("active")
                HomeBtn.classList.remove("active")
                localStorage.setItem("AddNotePageActive", "false")
                calculatorBtn.classList.add("active")
                Calculator.classList.remove("hide")
                calculatorBtn.classList.add("active")
                break
            
        }
        RemoveCalculator()

        if (btn.innerText !== "Note") {
             NoteBtn.classList.remove("active")
            localStorage.setItem("AddNotePageActive", "false")
            localStorage.setItem("isgetCreateNote", "false")
            
        } else {
            localStorage.setItem("AddNotePageActive", "true")
            localStorage.setItem("isgetCreateNote", "false")
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
         // Clear form
        InputAmmoutIncome.value = "";
        DescriptionIncome.value = "";

       let incomeBalance =  UserWalletStore(InputAmmoutIncomeValue, "+")
        MaxCountWalletBtns()
        
        let incomeData = StoreLists.filter(item => item.AddType === "income")
        let totalIncome = incomeData.map(income => income.ammount).reduce((sum, num) => sum + num, 0)
        // In Wallet algaridom
        AddMoneyStore.push({
            WalletBtn: InputAmmoutIncomeValue
        })
        localStorage.setItem("AddMoneyBtns", JSON.stringify(AddMoneyStore))
        
        GetMessage(`Successfully added ${AddTypeData}`, `added ${InputAmmoutIncomeValue}tk in ${AddTypeData.toLocaleLowerCase()} list checkout in list total ${AddTypeData.toLocaleLowerCase()} is <span class="red-mark">${totalIncome + InputAmmoutIncomeValue}tk</span>`, `<i class="fa-solid fa-circle-check"></i>`, "green")
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

    // Clear form
        ExpenseAmmount.value = "";
        ExpenseDescription.value = "";

       let ExpenseBalance = UserWalletStore(ExpenseAmmountValue, "-")
        MaxCountWalletBtns()
        AddMoneyStore.push({
            WalletBtn: ExpenseAmmountValue
        })
        localStorage.setItem("AddMoneyBtns", JSON.stringify(AddMoneyStore))
        GetMessage(`Successfully added ${AddTypeData}`, `added ${ExpenseAmmountValue}tk in ${AddTypeData.toLocaleLowerCase()} list checkout in list total ${AddTypeData.toLocaleLowerCase()} is <span class="red-mark">${ExpenseBalance}tk</span>`, `<i class="fa-solid fa-circle-check"></i>`, "red")
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
                        
                    </div>
                    <div class="RightSideList">
                        <div class="showTaka"><span class="expense${item.AddType === "expense" ? "M" : "P"}"><i class="fa-solid fa-${item.AddType === "expense" ? "minus" : "plus"}"></i></span><i class="fa-solid fa-bangladeshi-taka-sign"></i>${item.ammount}</div>
                        <div class="list-cuz">
                            <button class="listSetting"><i class="fa-solid fa-list-ul"></i></button>
                            <div class="showMenu">
                                <button onclick="DelateList(${item.id})" class="delateList"><i class="fa-solid fa-trash"></i> Delete</button>
                                <button class="detailsBtn"><i class="fa-solid fa-window-restore"></i>Details</button>
                            </div>
                            <div class="detailsMenu">
                                <header class="detailsMenuHeader">
                                    <div>Details</div>
                                    <button class="removeDetailsMenu">
                                        <i class="fa-solid fa-xmark"></i>
                                    </button>
                                </header>
                                <div class="detailsMain">
                                    <p class="details1">1. ${item.AddType.charAt(0).toUpperCase() + item.AddType.slice(1)} ${item.ammount} taka</p>
                                    <p class="details2">2. balance ${UserWallet} taka couse ${item.AddType === "expense" ? `( ${(UserWallet + item.ammount)} - ${item.ammount} )`: ``}</p>
                                    ${item.Type ? `<p class="details3">3. reason ${item.Type}</p>` : ""}
                                    ${item.description ? `<p class="details3">${item.Type ? "4" : "3"}. <span>description -</span> <span>${item.description}</span></p>` : ""}
                                </div>
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


        let detailsBtn = createData.querySelector(".detailsBtn")
    let detailsMenu = createData.querySelector(".detailsMenu")
    detailsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        getDetailsMenu(detailsMenu)
        
    })
    const removeDetailsMenu = createData.querySelector(".removeDetailsMenu")
    removeDetailsMenu.addEventListener("click", () => {
       detailsMenu.classList.remove("show") 
        activeDetailsMenu = null
    })

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

function getDetailsMenu(menu) {
if (activeDetailsMenu && activeDetailsMenu !== menu) {
            activeDetailsMenu.classList.remove("show")
        }
        if (menu.classList.contains("show")) {
            menu.classList.remove("show")
            activeDetailsMenu = null
        } else {
            menu.classList.add("show")
            activeDetailsMenu = menu  
        }
}
// Close menu when clicking elsewhere
document.addEventListener('click', (e) => {
    if (activeDetailsMenu && activeMenu && !e.target.closest('.list-cuz')) {
            activeDetailsMenu.classList.remove("show")
            activeMenu.classList.add("show");
            activeDetailsMenu = null
    } else if (!activeDetailsMenu && activeMenu && !e.target.closest(".list-cuz")) {
             activeMenu.classList.remove("show");
             activeMenu = null
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
    let month = Math.floor(diffMiliSeconds / (1000 * (24 * 30) * 60 * 60))
    // let years = Math.floor(diffMiliSeconds / (1000 * ((30 * 3600) * 24 ) * 12))
    if (minutes < 1) return "Just now"
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago` 
    if (day < 7 ) return `${day}day${day > 1 ? "'s" : ''} ago`
    if (day > 6 && day < 30) return `${Math.floor(day/7) + " w"} ${day%7 !== 0 ? " ago" : `${Math.floor(day%7) ? Math.floor(day%7) + " day ago" : ""}`}`
    if (month < 12 ) return `${month} month ago`
    if (month > 11 ) return `${month / 12} year ago` 
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
    timeParcent.style.width = "100%"
    setTimeout(() => {
        let y = setInterval(() => {
        count = count - 1
            if (count < -50) {
                messages.classList.remove("open")
                clearInterval(y)
                count = 100
                return
            } else {
                 messages.classList.add("open")
            }
             timeParcent.style.width = `${count}%`
    }, time)
    }, 400)

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





let WaletbtnsData = []

for (let l of AddMoneyStore){
    WaletbtnsData.push(l.WalletBtn)
}
WaletbtnsData.push(Number(maxUseBtns))
WaletbtnsData = [...new Set(WaletbtnsData)].filter(item => item > 10)



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
    createWalletBtn.innerHTML = `${btn.btn}tk`
    btnsConTop.appendChild(createWalletBtn)

    createWalletBtn.addEventListener("click", () => {
        TakaAdd(btn.btn)
    })
})

for(let b of WaletbtnsData) {
    let createBtn = document.createElement("button")
    createBtn.innerHTML = `${b}tk`
    btnSugestMoreBtns.appendChild(createBtn)
    

    createBtn.addEventListener("click", () => {
        TakaAdd(b)
    })
}

function TakaAdd(num) {
        let sumNum = Number(num)
        UserWalletStore(sumNum, "+")
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
        if (ShowWallet) ShowWallet.innerHTML = 0
    }
})

console.log(WaletbtnsData.length)
function MaxCountWalletBtns() {
    if (WaletbtnsData.length > 30) {
        localStorage.removeItem("AddMoneyBtns")
        SeeMoreBtn.style.display = "none"
    } 
}
MaxCountWalletBtns() 

if (WaletbtnsData.length < 1) {
    SeeMoreBtn.style.display = "none"
} else {
    SeeMoreBtn.style.display = "flex"
}

NoteBtn.addEventListener("click", () => {
    adddata.classList.add("hide")
     main_wraper_two.classList.remove("hide")
    localStorage.setItem("isNotePage", "true")
    NoteBtn.classList.add("active")
    // deactive remove home and other btns 
    HomeBtn.classList.remove("active")
    createNewBtn.classList.remove("active")
    historyBtn.classList.remove("active")
    learningBtn.classList.remove("active")
    PrivacyPolicyBtn.classList.remove("active")
    // active btn
    NoteBtn.classList.add("active")
    localStorage.setItem("AddNotePageActive", "false")
    localStorage.setItem("isgetCreateNote", "false")
    NoteCreatetorWraper.classList.remove("hide")
    createNote.classList.add("hide")
    RemoveCalculator()
})

// Notes 

function isNotePageAdd() {
    if (isNotePage === "true") {
        adddata.classList.add("hide")
        NoteBtn.classList.add("active")
        HomeBtn.classList.remove("active")
        createNewBtn.classList.remove("active")
        historyBtn.classList.remove("active")
        learningBtn.classList.remove("active")
        PrivacyPolicyBtn.classList.remove("active")
        main_wraper_two.classList.remove("hide")
    } else {
        adddata.classList.remove("hide")
        main_wraper_two.classList.add("hide")
        NoteBtn.classList.remove("active")
    }
}

isNotePageAdd()

const filterNoteBtn = document.getElementById("filterNoteBtn")
const FilterListMenu = document.querySelector(".FilterListMenu")
const CloseMenu = FilterListMenu.querySelector(".CloseMenu")
const ShowNotesDisplay = document.getElementById("ShowNotesDisplay")

const shortFilterContainer = document.querySelector(".shortFilterContainer")
filterNoteBtn.addEventListener("click", () => {
    FilterNotesMenu()
})
CloseMenu.addEventListener("click", () => {
    FilterNotesMenu()
})

function FilterNotesMenu() {
    FilterListMenu.classList.toggle("scale0")
    if (FilterListMenu.classList.contains("scale0")) {
        BlackOverlyRemove()
    } else {
      BlackOverlyAdd() 
    }
}

document.addEventListener("click", (e) => {
    if (!e.target.closest('.shortFilterContainer')) {
        FilterListMenu.classList.add("scale0")
        BlackOverlyRemove()
    }
    
})

const createNoteElementL = document.querySelector(".createNoteElement .LeftElement")
const createNoteElementBtns = createNoteElementL.querySelectorAll("button")

// All btns 
const NoteViewModes = document.getElementById("NoteViewModes")

let currentNotesElementFilter = "All notes"
let noteisGrid = localStorage.getItem("isGrid")

createNoteElementBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        switch (btn.innerHTML.trim()) {
            case "All notes":
                currentNotesElementFilter = "All notes"
                break
            
               
        }
    })
})
NoteViewModes.addEventListener("click", () => {
    ShowNotesDisplay.classList.toggle("grid-display")

    if (ShowNotesDisplay.classList.contains("grid-display")) {
        NoteViewModes.innerHTML = `<i class="fa-solid fa-list"></i>List view`
        ShowNotesDisplay.classList.add("grid-display")
        localStorage.setItem("isGrid", "true")
    } else {
        NoteViewModes.innerHTML = `<i class="fa-solid fa-table-cells-large"></i>Grid view`
        ShowNotesDisplay.classList.remove("grid-display")
        localStorage.setItem("isGrid", "false")
    }
})
function isGridFound() {
    if (noteisGrid == "true") {
        NoteViewModes.innerHTML = `<i class="fa-solid fa-list"></i>List view`
        ShowNotesDisplay.classList.add("grid-display")
    } else {
        ShowNotesDisplay.classList.remove("grid-display")
         NoteViewModes.innerHTML = `<i class="fa-solid fa-table-cells-large"></i>Grid view`
    }
}
isGridFound()


function BlackOverlyAdd () {
    BlackOverly.classList.add("active")
}
function BlackOverlyRemove () {
    BlackOverly.classList.remove("active")
}

BlackOverly.addEventListener("click", () => {
    BlackOverlyClick()
})

function BlackOverlyClick () {
    BlackOverlyRemove()
}
addMoneyBtnWallet.addEventListener("click", () => {
    adddata.classList.remove("hide")
        main_wraper_two.classList.add("hide")
        NoteBtn.classList.remove("active")
  LoadDataInputExpense.classList.remove("show");
  LoadDataInputIncome.classList.remove("show");
  topShowLoadType.classList.add("close")
  LoadDataInputWallet.classList.remove("hide")
  HomeBtn.classList.remove("active")
  btns[2].classList.add("active")
  btns[0].classList.remove("active")
  btns[1].classList.remove("active")
  btns[3].classList.remove("active")
  localStorage.setItem("isNotePage", "false")
  NoteBtn.classList.remove("active")
  main_wraper_two.classList.add("hide")
 
  addDataBtnClick()
 

})
// addDataBtn.addEventListener('click',() => {
    
// })

QuickOpenBtn.addEventListener("click", () => {
    QuickbtnsWraper.classList.toggle("open")
    if (QuickbtnsWraper.classList.contains("open")) {
        QuickOpenBtn.querySelector("i").classList.remove("fa-pen-to-square")
        QuickOpenBtn.querySelector("i").classList.add("fa-chevron-down")
    } else {
        QuickOpenBtn.querySelector("i").classList.add("fa-pen-to-square")
        QuickOpenBtn.querySelector("i").classList.remove("fa-chevron-down")
        removeMenuClick()
    }
})

let x = null

MusicBtn.addEventListener("click", () => {
  MusicMenuClick()  
})
function MusicMenuClick() {
    MusicMenu.classList.toggle("close")
    if (MusicMenu.classList.contains("close")) {
        x = MusicMenu
    } else {
        x = null
    }
}
function addMenuClick() {
    MusicMenu.classList.add("close")
}
function removeMenuClick() {
    MusicMenu.classList.remove("close")
    x = null
}




document.addEventListener("click", (e) => {
    if (!x && !e.target.closest(".QuickBtnsN")) {
        QuickOpenBtn.querySelector("i").classList.add("fa-pen-to-square")
        QuickOpenBtn.querySelector("i").classList.remove("fa-chevron-down")
        QuickbtnsWraper.classList.remove("open")
        removeMenuClick()
    } else if (x && !e.target.closest(".QuickBtnsN")) {
        MusicMenu.classList.remove("close")
        x = null
    }
})

// MusicMenu



MusicmenuClose.addEventListener("click", () => {
    removeMenuClick()
    x = null
}) 

// play music 
const audiosIn = document.getElementById ("audiosIn")
const SongPlayBtn = document.getElementById("SongPlayBtn")
const SongPlayBtnIcon = SongPlayBtn.querySelector("i")
const RightSlideAudio = document.getElementById("RightSlideAudio")
const LeftSlideAudio = document.getElementById("LeftSlideAudio");

audiosData.audios.forEach((audio, index) => {
   let createAudio = document.createElement("div")
   createAudio.innerHTML = `<audio class="audio" src="${audio.audioSource}${audio.audio}" controls></audio>`
   audiosIn.appendChild(createAudio)
})

const audiosAll = audiosIn.querySelectorAll(".audio");

let countAudio = parseInt(localStorage.getItem("countAudio")) || 0
let audioLastTime = parseFloat(localStorage.getItem("currentTime")) || 0
let currentTime = 0


musicActiveShowerBtn.addEventListener("click", () => {
    musicActiveShowerBtn.querySelector("i").classList.toggle("fa-circle-play")
    if (musicActiveShowerBtn.querySelector("i").classList.contains("fa-circle-play")) {
        PauseSong()
        musicActiveShowerBtn.querySelector("i").classList.remove("fa-circle-stop")
    } else {
        PlaySong()
        musicActiveShowerBtn.querySelector("i").classList.add("fa-circle-stop")
    }
})


if (countAudio >= audiosAll.length) countAudio = 0

reduceAudioLength.addEventListener("click", () => {
    audiosAll[countAudio].currentTime -= 5
})
increaseAudioLength.addEventListener('click',() => {
    audiosAll[countAudio].currentTime += 5
})

audioLength.addEventListener('click', (e) => {
    const rect = audioLength.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const percent = clickX / rect.width
    audiosAll[countAudio].currentTime = percent * audiosAll[countAudio].duration
      showAudioLength.innerHTML = `<div class="currentTime">${audioTime(percent * audiosAll[countAudio].duration)}</div><span>/</span><div class="audioDuration">${audioTime(audiosAll[countAudio].duration)}</div>`
     AudioCurrentTimeInto.style.width = `${(audiosAll[countAudio].currentTime / audiosAll[countAudio].duration) * 100}%`
})



function resetAudioTimeData () {
    audioLastTime = 0
    localStorage.setItem("currentTime", audioLastTime)
    audiosAll[countAudio].currentTime = audioLastTime

    showAudioLength.innerHTML = `<div class="currentTime">
                      <span>00</span>
                      <span>:</span>
                       <span>00</span>
                       </div>
                       <span>/</span>
                        <div class="audioDuration">
                        <span>00</span>
                      <span>:</span>
                      <span>00</span>
                      </div>
            `
}
resetAudioTime.addEventListener("click", () => {
    resetAudioTimeData()
    AudioCurrentTimeInto.style.width = "0%"
})
audiosAll[countAudio].currentTime = audioLastTime

audiosAll.forEach((audio, index) => {
    audio.addEventListener("timeupdate", () => {
        if (!audio.paused && index === countAudio) {
            currentTime = audio.currentTime
            localStorage.setItem("currentTime", audio.currentTime)
            AudioLengthShow(audio.currentTime, audio.duration)
            showAudioLength.innerHTML = `<div class="currentTime">${audioTime(audio.currentTime)}</div><span>/</span><div class="audioDuration">${audioTime(audio.duration)}</div>`
        }
    })
})

function AudioLengthShow (currentTimeS, audioDuration) {
    AudioCurrentTimeInto.style.width = `${(currentTimeS / audioDuration) * 100}%`
}


function PlayCurrentAudio() {
    audiosAll.forEach(b => b.pause())
    audiosAll[countAudio].play()
    localStorage.setItem("countAudio", countAudio)
    soundNameDisplay()
}
function soundNameDisplay() {
    musicName.innerHTML = `${audiosData.audios[countAudio].song_name}`
}

soundNameDisplay()
function audioTime(seconds) {
    let hh = Math.floor(seconds / 3600).toString().padStart(2, "0")
    let mm = Math.floor((seconds % 3600 ) / 60).toString().padStart(2, "0")
    let ss = Math.floor((seconds % 60)).toString().padStart(2, "0")
    return `
        ${hh !== "00" ? `<span>${hh}</span>` : ""}
        ${hh !== "00" ? `<span>:</span>` : ""}
        ${mm !== "00" ? `<span>${mm}</span>` : "0"}
        <span>:</span>
        <span>${ss}</span>
    `

    
}
RightSlideAudio.addEventListener('click', () => {
    RightSlideAudioCon()
})

function RightSlideAudioCon() {
    countAudio++ 
    if (countAudio >= audiosAll.length) countAudio = 0 
    SongPlayBtnIcon.classList.add("fa-stop")
    SongPlayBtnIcon.classList.remove("fa-play")
    PlayCurrentAudio()
    soundNameDisplay()
}
LeftSlideAudio.addEventListener('click', () => {
    LeftSlideAudioCon()
})

function LeftSlideAudioCon() {
    countAudio--
    if (countAudio < 0) countAudio = (audiosAll.length - 1)
    SongPlayBtnIcon.classList.add("fa-stop")
    SongPlayBtnIcon.classList.remove("fa-play")
    PlayCurrentAudio()
    soundNameDisplay()
}
SongPlayBtn.addEventListener("click", () => {
    if (audiosAll[countAudio].paused) {
        PlaySong()
    } else {
        PauseSong()
        let timeX = setTimeout(() => {
            musicActiveShower.classList.remove("show")
            clearTimeout(timeX)
        }, 200)
    }

})


function PlaySong() {
        audiosAll[countAudio].play()
        SongPlayBtnIcon.classList.add("fa-stop")
        SongPlayBtnIcon.classList.remove("fa-play") 
        let timeX = setTimeout(() => {
            musicActiveShower.classList.add("show")
            clearTimeout(timeX)
        }, 200)
        musicActiveShowerBtn.querySelector("i").classList.add("fa-circle-stop")
}
function PauseSong() {
     audiosAll[countAudio].pause()
    SongPlayBtnIcon.classList.remove("fa-stop")
    SongPlayBtnIcon.classList.add("fa-play")
    
}







navigator.mediaSession.setActionHandler("pause", () => {
    PauseSong()
})
navigator.mediaSession.setActionHandler("play", () => {
    PlaySong()
})
navigator.mediaSession.setActionHandler("seekforward", () => {
    RightSlideAudioCon()
})
navigator.mediaSession.setActionHandler("seekbackward", () => {
    LeftSlideAudioCon()
})



function getCreateNote () {
    let isgetCreateNote = localStorage.getItem("isgetCreateNote")
    if (isgetCreateNote === "false") {
        localStorage.setItem("isgetCreateNote", "true")

        NoteCreatetorWraper.classList.add("hide")
        createNote.classList.remove("hide")
        console.log("true")
    } else {
        localStorage.setItem("isgetCreateNote", "false")
        NoteCreatetorWraper.classList.remove("hide")
        createNote.classList.add("hide")
           console.log("false")
    }
}

function isNotepageIn () {
    let isgetCreateNoteT = localStorage.getItem("isgetCreateNote")
    if (isgetCreateNoteT === "true") {
        NoteCreatetorWraper.classList.add("hide")
        createNote.classList.remove("hide")
} else {
        NoteCreatetorWraper.classList.remove("hide")
        createNote.classList.add("hide")
}
}

let AddDataChilds = AddData.querySelectorAll("button")

CreateNoteBtn.addEventListener("click", () => {
    getCreateNote()
})

CreateNoteBtnTwo.addEventListener("click", () => {
    getCreateNote()
})

backTohome.addEventListener("click", () => {
     localStorage.setItem("isgetCreateNote", "false")
     localStorage.setItem("AddNotePageActive", "false")
     AddDataChilds.forEach(btnAll => btnAll.classList.remove("active"))
     NoteBtn.classList.add("active")
     isNotepageIn()
})
let sidebarBtns = SidebarBtns.querySelectorAll("li button")
AddNoteBtn.addEventListener("click", () => {
    
    sidebarBtns.forEach(btn => btn.classList.remove("active"))
    NoteBtn.classList.add("active")
    getCreateNote()
    
})





AddDataChilds.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.textContent !== "Add Note") {
            sidebarBtns.forEach(allbtn => {
                allbtn.classList.remove("active")
                createNewBtn.classList.add("active")
            })
        } else {

                    AddDataChilds.forEach(btnAll => btnAll.classList.remove("active"))
                    LoadDataPage.classList.add("hide");
                    adddatainnerWraper.classList.add("hide");
                    adddata.classList.add("hide")
                    main_wraper_two.classList.remove("hide")
                    NoteBtn.classList.add("active")
                    NoteCreatetorWraper.classList.add("hide")
                    createNote.classList.remove("hide")
                    localStorage.setItem("AddNotePageActive", "true")
        }
    })
})
isNotepageIn()
let AddNotePageActive = localStorage.getItem("AddNotePageActive")

if (AddNotePageActive == "true") {
                    AddDataChilds.forEach(btnAll => btnAll.classList.remove("active"))
                    LoadDataPage.classList.add("hide");
                    adddatainnerWraper.classList.add("hide");
                    adddata.classList.add("hide")
                    main_wraper_two.classList.remove("hide")
                    NoteBtn.classList.add("active")
                    HomeBtn.classList.remove("active")
                    NoteCreatetorWraper.classList.add("hide")
                    createNote.classList.remove("hide")
                    localStorage.setItem("AddNotePageActive", "true")
} 









// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register("/NoteEve/sw.js")
//     .then(() => console.log("SW registered"))
//     .catch(err => console.log("SW error", err));
// }


calculatorBtn.addEventListener('click', () => {
        adddata.classList.add("hide")
        main_wraper_two.classList.add("hide")
        calculatorBtn.classList.add("active")
        Calculator.classList.remove("hide")
})

function RemoveCalculator() {
        calculatorBtn.classList.remove("active")
        Calculator.classList.add("hide")
}