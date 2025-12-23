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
let StoreHistory = JSON.parse(localStorage.getItem("Lists")) || []

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
    document.body.classList.add("sidebarHide");
    
    if (sidebar.classList.contains("open")) {
        sidebarControllerIcon.classList.remove("fa-bars-staggered");
        sidebarControllerIcon.classList.add("fa-xmark");
        document.body.classList.add("sidebarHide");
        overly1Add();
    } else {
        sidebarControllerIcon.classList.remove("fa-xmark");
        sidebarControllerIcon.classList.add("fa-bars-staggered");
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
                break;
            case "Expense":
                LoadDataInputExpense.classList.add("show");
                LoadDataInputIncome.classList.remove("show");
                TopIcon.classList.remove("fa-circle-plus");
                TopIcon.classList.add("fa-circle-minus");
                break;
            case "Wallet":
                LoadDataInputExpense.classList.remove("show");
                LoadDataInputIncome.classList.remove("show");
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
    
    if (!InputAmmoutIncomeValue || InputAmmoutIncomeValue <= 0) {
        alert("Please enter a valid amount");
        return;
    }
    
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
    
    if (!ExpenseAmmountValue || ExpenseAmmountValue <= 0) {
        alert("Please enter a valid amount");
        return;
    }
    
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