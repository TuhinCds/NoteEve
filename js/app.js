
import { audiosData, LinksTypeIcons } from  "./data.js"

const sidebar = document.getElementById("sidebar");
const sidebarController = document.getElementById("sidebarController");
const HideSidebarMenu = document.getElementById("HideSidebarMenu")
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
const filterNoteBtn = document.getElementById("filterNoteBtn")
const FilterListMenu = document.querySelector(".FilterListMenu")
const CloseMenu = FilterListMenu.querySelector(".CloseMenu")
const ShowNotesDisplay = document.getElementById("ShowNotesDisplay")
const leftSideHeader = document.querySelector(".leftSideHeader")

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
const threeDot = document.getElementById("threeDot")


// create note 
const createTime = document.getElementById("createTime")
const NoteCreatetorWraper = document.querySelector(".NoteCreatetorWraper")
const CreateNoteBtn = document.getElementById("CreateNoteBtn")
const CreateNoteBtnTwo = document.getElementById("CreateNoteBtnTwo")
const createNote = document.getElementById("createNote")
const backTohome = document.getElementById("backTohome")
const AddNoteBtn = document.getElementById("AddNoteBtn")
const noteTitle = document.getElementById("noteTitle")
const NoteBodyData = document.getElementById("NoteBodyData")
const SaveNote = document.getElementById("SaveNote")
const SearchNote = document.getElementById("SearchNote")
const countListLength = document.getElementById("countListLength")
const noteLenght = document.getElementById("noteLenght")
const filterListMenuBtns = document.querySelector(".filterListMenuBtns")
const noteCreatetorMenu = document.querySelector(".noteCreatetorMenu")
const hideNoteCreatorMenu = document.getElementById("hideNoteCreatorMenu")
const CreateListbtnEmpty = document.getElementById("CreateListbtnEmpty")
const ShowEmptyNotes = document.querySelector(".ShowEmptyNotes")
const CreateNewNoteBtn = document.getElementById("CreateNewNoteBtn")


// create links 
const LinkInputWraper = document.querySelector(".LinkInputWraper")
const LinkNameInputWraper = document.querySelector(".LinkNameInputWraper")
const LinkInput = document.getElementById("LinkInput")
const LinkNameInput = document.getElementById("LinkNameInput")
const TargetLinksBtns = document.querySelector(".TargetLinksBtns")
const linkCreateBtn = document.getElementById("linkCreateBtn")
const HideCreateLinkMenu = document.getElementById("HideCreateLinkMenu")
const HR3Dropdowns = document.querySelector(".HR3Dropdowns")
const CreateLinkBtn = document.getElementById("CreateLinkBtn")
const linkCreateBtnSpan = document.querySelector(".linkCreateBtnSpan")
const loadingWraper = document.querySelector(".loadingWraper")
const NoteLinksIn = document.getElementById("NoteLinksIn")


// share notes 

// calculator 
const calculatorBtn = document.querySelector(".calculatorBtn")
const adddatainner = document.querySelector(".adddatainner")
const Calculator = document.querySelector(".Calculator")
const calculatorAllbtns = document.querySelector(".calculatorAllbtns")
const Calculatordisplay = document.getElementById("Calculatordisplay")
// fullScreenOverly
const fullScreenOverly = document.getElementById("fullScreenOverly")

// Alert
const Alert = document.getElementById("Alert")
const alertHead = document.querySelector(".alertHead")
const alertHeadText = alertHead.querySelector("span")
const alertHeadRemove = alertHead.querySelector(".RemoveAlert")
const alertSummarizetitle = document.querySelector(".alertSummarizetitle")
const alertSummarizeBody = document.querySelector(".alertSummarizeBody")
const CancelAlert = document.getElementById("CancelAlert")
const ConfirmAlert = document.getElementById("ConfirmAlert")
const AlertContainer  = document.querySelector(".AlertContainer")


// Open first link 
let OpenFirstLink = document.getElementById("OpenFirstLink")


// history show
const historyShow = document.querySelector(".historyShow")
const ShowHistory = document.getElementById('ShowHistory')
const closeHistory = document.getElementById('closeHistory')
const historyAllSearchShow = document.querySelector(".historyAllSearchShow")
const DeleteInputTexts = document.getElementById("DeleteInputTexts")



// Initialize StoreLists from localStorage
let StoreLists = JSON.parse(localStorage.getItem("Lists")) || [];
// let StoreHistory = JSON.parse(localStorage.getItem("ListsHistory")) || []
// All Wallet add money btns 
let AddMoneyStore = JSON.parse(localStorage.getItem("AddMoneyBtns")) || []
let UserWallet = parseFloat(localStorage.getItem("UserWallet")) || 0

// totalIncome 
let totalIncomeShow = 0



function UserWalletStore(wallet, controll) {
    wallet = Math.floor(wallet)
   if (controll === "+") {
     UserWallet += wallet
   } else if (controll === "-") {
     UserWallet -= wallet
   } else if (controll === "/") {
     UserWallet /= wallet
   } else {
    UserWallet = 0
   }
   localStorage.setItem("UserWallet", UserWallet)
    ShowWallet.innerText = UserWallet
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
    let InputMoneyValue = Math.floor(Number(InputMoney.value))
    if (InputMoneyValue < 0) return
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
HideSidebarMenu.addEventListener("click", () => {
    document.body.classList.add("sidebarHide");
    sidebar.classList.remove("open");
    leftSideHeader.classList.add("showDis")
    overly1Remove();
})
function sidebarControll() {
    sidebar.classList.toggle("open");
    document.body.classList.toggle("sidebarHide");
    
    if (sidebar.classList.contains("open")) {
        document.body.classList.remove("sidebarHide");
        leftSideHeader.classList.remove("showDis")
        overly1Add();
    } else {
        document.body.classList.add("sidebarHide");
        leftSideHeader.classList.add("showDis")
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

                calculatorBtn.classList.remove("active")
                Calculator.classList.add("hide")
                break;
            case "Create new":
                CreateNewbtnClick()
                //
                // btns[0].classList.add("active")
                // btns[1].classList.remove("active")
                // btns[2].classList.remove("active")
                // btns[3].classList.remove("active")
                break;
            case "Calculator":
                LoadDataPage.classList.remove("hide");
                adddatainnerWraper.classList.add("hide");
                localStorage.setItem("isNotePage", "false")
                main_wraper_two.classList.add("hide")
                NoteBtn.classList.remove("active")
                HomeBtn.classList.remove("active")
                localStorage.setItem("AddNotePageActive", "false")
                localStorage.setItem("isOpenCalculator", "true")
                adddata.classList.add("hide")
                 calculatorBtn.classList.add("active")
                Calculator.classList.remove("hide")
                break
            
        }

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

function CreateNewbtnClick() {
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





                 LoadDataInputIncome.classList.add("show");
                LoadDataInputExpense.classList.remove("show");
                TopIcon.classList.remove("fa-eraser");
                TopIcon.classList.add("fa-notes-medical");
                topShowLoadType.classList.remove("close")
                LoadDataInputWallet.classList.add("hide")



                calculatorBtn.classList.remove("active")
                Calculator.classList.add("hide")
}

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
                                <button class="delateList" data-id="${item.id}"><i class="fa-solid fa-trash"></i> Delete</button>
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
                                    <p class="details1">${item.AddType === "expense" ? `<i class="fa-solid fa-sack-dollar"></i>` : `<i class="fa-solid fa-wallet"></i>`}${item.AddType.charAt(0).toUpperCase() + item.AddType.slice(1)} ${item.ammount} taka</p>
                                    <p class="hr-1px-wbg7"></p>
                                    <p class="details2">${item.AddType === "expense" ? `<i class="fa-solid fa-circle-down"></i>` : `<i class="fa-solid fa-chart-simple"></i>`} balance ${UserWallet} taka ${item.AddType === "expense" ? `couse  ( ${(UserWallet + item.ammount)} - ${item.ammount} )`: ``}</p>
                                    ${item.AddType ? `<p class="hr-1px-wbg7"></p>` : ""}
                                    ${item.Type ? `<p class="details3"><i class="fa-brands fa-buffer"></i> reason ${item.Type}</p>` : ""}
                                    ${item.Type ? `<p class="hr-1px-wbg7"></p>` : ""}
                                    ${item.description ? `<p class="details3"><i class="fa-solid fa-arrow-up-a-z"></i> <span>description -</span> <span>${item.description}</span></p>` : ""}
                                     ${item.description ? `<p class="hr-1px-wbg7"></p>`: ""}
                                    <p class="${item.Type ? `details4` : "details3" || item.description == "" && item.Type == "" ? "details5" : "details4"}"><i class="fa-solid fa-clock"></i> Create time is ${formatTime(item.createAt)}</p>
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



ShowData.addEventListener("click", (e) => {
    const btn = e.target.closest('.delateList')
    if(!btn) return 

    let id = Number(btn.dataset.id)
    StoreLists = StoreLists.filter(item => item.id !== id)

    localStorage.setItem("Lists", JSON.stringify(StoreLists))
    ShowListLength();
    applyCurrentFilter();
    FilterAll();
    ShowEmptyPage();
})

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
    if (day > 6 && day < 30) return `${Math.floor(day/7) + " week"} ${day%7 !== 0 ? " ago" : `${Math.floor(day%7) ? Math.floor(day%7) + " day ago" : "ago"}`}`
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
        AlertAdd(`<i class="fa-regular fa-trash-can"></i>Delete All data`, "You're sure delete your all data ?", `Your all data has permanently delete to click confirm button`, `Calcel`, `Confirm`, 'delete', 'delete all data')
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
    if (ShowWallet.innerText !== "0") {
        AlertAdd(`<i class="fa-regular fa-trash-can"></i>Delete balance`, "You're sure delete your wallet ?", `Your wallet have ${ShowWallet.innerHTML} taka , this is parmanently delete to click delete button !`, `Calcel`, `Delete`, 'delete', 'delete wallet')
    }

})

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
    RenderNote(NoteLists)
    RenderNoteListLength(NoteLists)
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
 
  btns[0].classList.remove("active")
  btns[1].classList.remove("active")
  btns[3].classList.remove("active")
  localStorage.setItem("isNotePage", "false")

  main_wraper_two.classList.add("hide")
    calculatorBtn.classList.remove("active")
    Calculator.classList.add("hide")
  addDataBtnClick()
     localStorage.setItem("isgetCreateNote", "false")
     localStorage.setItem("AddNotePageActive", "false")
     AddDataChilds.forEach(btnAll => btnAll.classList.remove("active"))
     NoteBtn.classList.add("active")
    btns[2].classList.add("active")
    NoteBtn.classList.remove("active")
})
// addDataBtn.addEventListener('click',() => {
    
// })

QuickOpenBtn.addEventListener("click", () => {
   QueckbtnToggler()
})

function QueckbtnToggler() {
     QuickbtnsWraper.classList.toggle("open")
    if (QuickbtnsWraper.classList.contains("open")) {
        QuickOpenBtn.querySelector("i").classList.remove("fa-pen-to-square")
        QuickOpenBtn.querySelector("i").classList.add("fa-chevron-down")
    } else {
        QuickOpenBtn.querySelector("i").classList.add("fa-pen-to-square")
        QuickOpenBtn.querySelector("i").classList.remove("fa-chevron-down")
        removeMenuClick()
    }
}

function QueckbtnTogglerRemove() {
     QuickOpenBtn.querySelector("i").classList.add("fa-pen-to-square")
     QuickOpenBtn.querySelector("i").classList.remove("fa-chevron-down")
     QuickbtnsWraper.classList.remove("open")
     removeMenuClick()
}

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
     BackToHomeLet()
})

function BackToHomeLet() {
     localStorage.setItem("isgetCreateNote", "false")
     localStorage.setItem("AddNotePageActive", "false")
     AddDataChilds.forEach(btnAll => btnAll.classList.remove("active"))
     NoteBtn.classList.add("active")
     isNotepageIn()
     SaveNotedta()
     LinkLengthDisplay()
}
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

function fullScreenOverlyAdd() {
    fullScreenOverly.classList.add("active")
}
function fullScreenOverlyRemove() {
    fullScreenOverly.classList.remove("active")
}
function fullScreenOverlyClick() {
    fullScreenOverlyRemove()
    removeAlert()
    RemoveLinkMenu()
}   

fullScreenOverly.addEventListener("click", () => {
    fullScreenOverlyClick()
})
let workNameStore = ""

function AlertAdd(alertHeadTextValue, alertSummarizetitleValue, alertSummarizeBodyValue, CancelAlertBtnName, ConfirmAlertBtnName, ConfirmAlertBtnClass, workName) {
    if ( !alertHeadTextValue && !alertSummarizetitleValue && !alertSummarizeBodyValue && !CancelAlertBtnName && !ConfirmAlertBtnName) return
    fullScreenOverlyAdd()
    Alert.classList.add("show")
    AlertContainer.classList.add("active")
    alertHeadText.innerHTML = alertHeadTextValue
    alertSummarizetitle.innerHTML = alertSummarizetitleValue
    alertSummarizeBody.innerHTML = alertSummarizeBodyValue
    CancelAlert.innerHTML = CancelAlertBtnName
    ConfirmAlert.innerHTML = ConfirmAlertBtnName
    ConfirmAlert.classList.add(ConfirmAlertBtnClass)
    workNameStore = workName
}
function removeAlert() {
    fullScreenOverlyRemove()
    
    Alert.classList.remove("show")
    let y = setTimeout(() => {
        AlertContainer.classList.remove("active")
        clearTimeout(y)
    }, 100)
    alertHeadText.innerHTML = ""
}
alertHeadRemove.addEventListener("click", () => {
    removeAlert()
})
CancelAlert.addEventListener("click", () => {
    removeAlert()
})
AlertContainer.addEventListener("click", (e) => {
    if (!e.target.closest(".alertF")){
        fullScreenOverlyClick()
    }
})
ConfirmAlert.addEventListener("click", () => {
    switch (workNameStore) {
        case "delete wallet":
            DeleteWallet()
            break
        case "delete all data":
            DeleteAllData()
            break
    }
    removeAlert()
})

function DeleteWallet() {
    localStorage.removeItem("UserWallet")
    ShowWallet.innerHTML = 0
    UserWalletStore(0, "0")

}

function DeleteAllData() {
    StoreLists = []
    localStorage.setItem("Lists", JSON.stringify(StoreLists))
        UserWallet = 0
        localStorage.setItem("UserWallet", UserWallet)
        if (ShowWallet) ShowWallet.innerText = UserWallet
        renderLists(StoreLists)
        ShowListLength();
        applyCurrentFilter();
        FilterAll();
        ShowEmptyPage();
        DataXD = []
        localStorage.setItem("NoteLists", JSON.stringify(DataXD))
        RenderNote(NoteLists)
        RenderNoteListLength(NoteLists)
}

// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register("/NoteEve/sw.js")
//     .then(() => console.log("SW registered"))
//     .catch(err => console.log("SW error", err));
// }




function RemoveCalculator() {
        calculatorBtn.classList.remove("active")
        Calculator.classList.add("hide")
} 
const calculatorAllbtnsQuery = calculatorAllbtns.querySelectorAll("button")

calculatorAllbtnsQuery.forEach(btn => {
    btn.addEventListener("click", () => {

        let btnValue = btn.dataset.type
                if (btnValue === "=") {
                    Calculate()
                } else if (btnValue === "ac") {
                    Calculatordisplay.value = ""
                } else if (btnValue === "del") {
                    Calculatordisplay.value = Calculatordisplay.value.slice(0, -1) 
                }  else {
                    if ( Calculatordisplay.value === "Error") {
                        Calculatordisplay.value = Calculatordisplay.value.slice(5)
                    } else if (Calculatordisplay.value === undefined) {
                        Calculatordisplay.value = Calculatordisplay.value.slice(9)
                    } else if (btnValue === "+" && Calculatordisplay.value === "") {
                            Calculatordisplay.value = ""
                    } else if (btnValue === "+" && Calculatordisplay.value === "") {
                            Calculatordisplay.value = ""
                    } else if (btnValue === "-" && Calculatordisplay.value === "") {
                            Calculatordisplay.value = ""
                    } else if (btnValue === "*" && Calculatordisplay.value === "") {
                            Calculatordisplay.value = ""
                    } else if (btnValue === "/" && Calculatordisplay.value === "") {
                            Calculatordisplay.value = ""
                    } else if (btnValue === "%" && Calculatordisplay.value === "") {
                            Calculatordisplay.value = ""
                    } else if (btnValue === "00" && Calculatordisplay.value === "") {
                            Calculatordisplay.value = ""
                    } else if (btnValue === "0" && Calculatordisplay.value === "") {
                            Calculatordisplay.value = ""
                    } else if (btnValue === "add") {
                                try {
                                     UserWalletStore(Number(Calculatordisplay.value), "+")
                                } catch(err) {
                                    console.log(err)
                                }
                            Calculatordisplay.value = ""
                    } else {        
                        Calculatordisplay.value += btnValue
                    }
            } 
    })
})

function Calculate() {
    try {
        Calculatordisplay.value = eval(Calculatordisplay.value) || ""
    }
    catch (err) {
        console.warn(err)
        Calculatordisplay.value = `Error`
    }
}

Calculator.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
        Calculatordisplay.value += e.key
    } else if ((e.key === "+" || e.key === "-" || e.key === "*" || e.key === "%" || e.key === "/" || e.key === "(" || e.key === ")" )&& Calculatordisplay.value !== "") {
        Calculatordisplay.value += e.key
    } else if (e.key === "=") {
        Calculate()
    } else if (e.key === "Backspace") {
        Calculatordisplay.value = Calculatordisplay.value.slice(0, -1)
    } else if (e.key === "Enter") {
        Calculate()
    }
    else {
        console.log(e.key)
    }
})

// Note text save in localStorage 
let NoteTitle = localStorage.getItem("NoteTitle")
let NoteBody = localStorage.getItem("NoteBody")
let DataXD = JSON.parse(localStorage.getItem("NoteLists")) || []
let NoteLists = [...DataXD]
  .sort((a, b) => Date.parse(b.NoteCreateTime) - Date.parse(a.NoteCreateTime))
let CurrentAllLinksSaved = JSON.parse(localStorage.getItem("CurrentAllLinksSaved")) || []

NoteBodyData.value = NoteBody
noteTitle.value = NoteTitle

noteTitle.addEventListener("input", () => {
    let noteTitleVal = noteTitle.value
    localStorage.setItem("NoteTitle", noteTitleVal)
    noteTitle.value = noteTitleVal
})
NoteBodyData.addEventListener("input", () => {
    let noteBodyVal = NoteBodyData.value
    localStorage.setItem("NoteBody", noteBodyVal)
    NoteBodyData.value = noteBodyVal
    noteLenght.innerHTML = noteBodyVal.length
})
SaveNote.addEventListener("click", () => {
    if (noteTitle.value !== "" || NoteBodyData.value !== "") {
        BackToHomeLet()
        SaveNotedta()
    }
    
})
function LinkLengthDisplay() {
    if (localStorage.getItem("NoteBody").length > 0) {
    noteLenght.innerHTML = NoteBody.length
} else {
    noteLenght.innerHTML = "0"
}
}
LinkLengthDisplay()
// Create links 
LinkInputWraper.addEventListener("click", () => {
    LinkInput.focus()
     WhiceActive("link")
})
 
LinkNameInputWraper.addEventListener("click", () => {
    LinkNameInput.focus()
     WhiceActive("linkname")

})

function WhiceActive(active) {
    let borthFilled = LinkInput.value !== "" && LinkNameInput.value !== ""
    if (borthFilled) {
        LinkNameInputWraper.querySelector("span").classList.add("tapInput")
        LinkInputWraper.querySelector("span").classList.add("tapInput")
        if (active === "link") {
             LinkInput.classList.add("inputBorder2")
            LinkNameInput.classList.remove("inputBorder2")
            LinkInputWraper.querySelector("span").classList.add("tapInput")
            if (LinkNameInput.value !== "") {
                LinkNameInputWraper.querySelector("span").classList.add("tapInput")
            } else {
                LinkNameInputWraper.querySelector("span").classList.remove("tapInput")
            }
        } else {
            LinkNameInput.classList.add("inputBorder2")
            LinkInput.classList.remove("inputBorder2")
            LinkNameInputWraper.querySelector("span").classList.add("tapInput")
            if (LinkInput.value !== "") {
                LinkInputWraper.querySelector("span").classList.add("tapInput")
            } else {
                LinkInputWraper.querySelector("span").classList.remove("tapInput")
            }
        }
    } else {
        if (active === "link") {
            LinkInput.classList.add("inputBorder2")
            LinkNameInput.classList.remove("inputBorder2")
            LinkInputWraper.querySelector("span").classList.add("tapInput")
            if (LinkNameInput.value !== "") {
                LinkNameInputWraper.querySelector("span").classList.add("tapInput")
            } else {
                LinkNameInputWraper.querySelector("span").classList.remove("tapInput")
            }
        } else {
            LinkNameInput.classList.add("inputBorder2")
            LinkInput.classList.remove("inputBorder2")
            LinkNameInputWraper.querySelector("span").classList.add("tapInput")
            if (LinkInput.value !== "") {
                LinkInputWraper.querySelector("span").classList.add("tapInput")
            } else {
                LinkInputWraper.querySelector("span").classList.remove("tapInput")
            }
        }
    }
}

LinkInput.addEventListener("input", () => {
    WhiceActive("link")
})
LinkNameInput.addEventListener("input", () => {
    WhiceActive("linkname")
})

window.addEventListener("load", () => {
    LinkInput.value = ""
    LinkNameInput.value = ""
})



CreateLinkBtn.addEventListener("click", () => {
     LinkMenu()
})

function LinkMenu() {
    HR3Dropdowns.classList.toggle("open")
    if (HR3Dropdowns.classList.contains("open")) {
        fullScreenOverlyAdd()
    } else {
        fullScreenOverlyRemove()
    }
}
function RemoveLinkMenu() {
    HR3Dropdowns.classList.remove("open")
    fullScreenOverlyRemove()
}
HideCreateLinkMenu.addEventListener("click", () => {
    RemoveLinkMenu()
})


const TargetLinksBtnsBtns = TargetLinksBtns.querySelectorAll("button")
let targetStore = "_blank"
TargetLinksBtnsBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        TargetLinksBtnsBtns.forEach(allBtn => allBtn.classList.remove("active"))
        btn.classList.add("active")
        targetStore = btn.dataset.target
    })
})


function CreateLinks() {
    let IconLink = ""
    let LinkInputValue = LinkInput.value
    let LinkNameInputValue = LinkNameInput.value
    
    if (!LinkInputValue && !LinkNameInputValue) return linkCreateBtnSpan.innerHTML = `<span>Enter Link </span>`
    if (!LinkInputValue) linkCreateBtnSpan.innerHTML = `<span>Enter Link</span>`
    if (!LinkNameInputValue) linkCreateBtnSpan.innerHTML = `<span>Enter link name</span>`
    if (!LinkInputValue.toLowerCase().startsWith("https://") && !LinkInputValue.toLowerCase().startsWith("http://") &&!LinkInputValue.toLowerCase().startsWith("www.")) {
       return linkCreateBtnSpan.innerHTML = `<span>Wrong link</span>`
    } 
    if (LinkInputValue || LinkNameInputValue) {
         let filteredLinkIcon = LinksTypeIcons.filter(k => k.keyword.some( l => LinkInputValue.toLowerCase().includes(l.toLowerCase()) ||  LinkNameInputValue.toLowerCase().includes(l.toLowerCase())))

        let AllLinkIcon = LinksTypeIcons.filter(linkIcon => linkIcon.keyword.includes("link"))
        let LinkIconFound = LinksTypeIcons.filter(icon => icon.keyword.includes(LinkInputValue.toLowerCase()) || icon.keyword.includes(LinkNameInputValue.toLowerCase()))

        let LinkIconF2

        if (filteredLinkIcon.length > 0) {
            LinkIconF2 = filteredLinkIcon
        } else {
            if (LinkIconFound.length > 0) {
                LinkIconF2 = LinkIconFound
            } else {
                LinkIconF2 = AllLinkIcon
            }
        }


        // filteredLinkIcon.length <= 0 ? LinkIconFound.length <= 0  ? AllLinkIcon : LinkIconFound : filteredLinkIcon

        
        if (LinkIconF2.length > 1) {
           let index = Math.floor(Math.random() * LinkIconF2.length)
            IconLink = LinkIconF2[index].icon
        } else {
            IconLink = LinkIconF2[0].icon
        }

    }     
    
    let currentNotesLink = {

        link: LinkInputValue,
        linkName: LinkNameInputValue,
        target: targetStore,
        icon: IconLink
    }

    CurrentAllLinksSaved.push(currentNotesLink)
    localStorage.setItem("CurrentAllLinksSaved", JSON.stringify(CurrentAllLinksSaved))
    renderNoteLinkInfo(CurrentAllLinksSaved)
    linkCreateBtn.disabled = true
    linkCreateBtn.style.cursor = "not-allowed"
    linkCreateBtnSpan.innerHTML = `<span>Creating</span>`
    loadingWraper.style.display = "flex"
    linkCreateBtn.classList.add("click")
    setTimeout(() => {
        loadingWraper.style.display = "none"
        linkCreateBtnSpan.innerHTML = `<i class="fa-regular fa-circle-check"></i><span>Saved</span>`
        
    }, 1200)
   
    setTimeout(() => {
        // other code
         linkCreateBtnSpan.innerHTML = `<i class="fa-solid fa-plus"></i>Create Link </span>`
         loadingWraper.style.display = "none"
         linkCreateBtn.classList.remove("click")
         linkCreateBtn.style.cursor = "pointer"
         linkCreateBtn.disabled = false
        let yT = setInterval(() => {
            if (LinkInput.value.length === 0 && LinkNameInput.value.length === 0) {
                clearInterval(yT)
                return
            }
            LinkNameInput.value = LinkNameInput.value.slice(0, -1)
            LinkInput.value = LinkInput.value.slice(0, -1)
         }, 6)
         
    }, 1900)

}
linkCreateBtn.addEventListener("click", () => {
    CreateLinks()
})

LinkInput.addEventListener("keydown",(e) => {
    if (e.key === "Enter") {
        CreateLinks()
    }
})  
LinkNameInput.addEventListener("keydown",(e) => {
    if (e.key === "Enter") {
        CreateLinks()
    }
})  

const months = [
  { full: "January",   short: "Jan" },
  { full: "February",  short: "Feb" },
  { full: "March",     short: "Mar" },
  { full: "April",     short: "Apr" },
  { full: "May",       short: "May" },
  { full: "June",      short: "Jun" },
  { full: "July",      short: "Jul" },
  { full: "August",    short: "Aug" },
  { full: "September", short: "Sep" },
  { full: "October",   short: "Oct" },
  { full: "November",  short: "Nov" },
  { full: "December",  short: "Dec" }
];


function DateShowDisplay() {
    let newDate = new Date()
    let year = newDate.getFullYear()
    let month = newDate.getMonth()
    let day = newDate.getDate()

    createTime.innerHTML = `<span>${year}</span>/<span>${month + 1}</span>/<span>${months[month].short}</span><span>${day}</span>`
}

DateShowDisplay()

function SaveNotedta() {
    let NoteBodyValue = NoteBodyData.value 
    let NoteTitleValue = noteTitle.value
    if (NoteBodyValue === "" && NoteTitleValue === "") return

    let NoteListsData = {
        id: Date.now(),
        noteTitle: NoteTitleValue,
        noteBody: NoteBodyValue,
        NoteAllLinks: [...CurrentAllLinksSaved],
        NoteCreateTime: new Date(),
    }
    DataXD.push(NoteListsData)
    localStorage.setItem("NoteLists", JSON.stringify(DataXD))
    let reverseNotes = [...DataXD].sort(
        (a, b) => Date.parse(b.NoteCreateTime) - Date.parse(a.NoteCreateTime)
    )
     RenderNote(reverseNotes)
    let noteBodyVal = ""
    let noteTitleVal = ""
    CurrentAllLinksSaved = []
    localStorage.setItem("CurrentAllLinksSaved", JSON.stringify(CurrentAllLinksSaved))
    renderNoteLinkInfo(CurrentAllLinksSaved)
    LinkLengthDisplay()
    localStorage.setItem("NoteBody", noteBodyVal)
    NoteBodyData.value = ""
    localStorage.setItem("NoteTitle", noteTitleVal)
    noteTitle.value = ""
    RenderNoteListLength(DataXD)
}

function RenderNoteListLength(NoteListsL) {
    countListLength.innerHTML = `${NoteListsL.length} list`
    if (NoteListsL.length < 1) {
        ShowEmptyNotes.classList.add("show")
    } else {
        ShowEmptyNotes.classList.remove("show")
    }
}
RenderNoteListLength(NoteLists)

function RenderNote(noteListsD) {
    ShowNotesDisplay.innerHTML = ""
    noteListsD.forEach((item, index) => {
        let createNote = document.createElement("div")

        let titleDisplay = ""
        let descriptionDisplay = ""
        if (item.noteTitle && item.noteBody) {
            if (item.noteTitle.length > 12) {
                titleDisplay = item.noteTitle.slice(0, 10)
            } else {
                titleDisplay = item.noteTitle
            }

            if (item.noteBody.length > 17) {
                descriptionDisplay = item.noteBody.slice(0, 16)
            } else {
                descriptionDisplay = item.noteBody
            }
        } else if (item.noteTitle) {
            if (item.noteTitle.length > 12) {
                titleDisplay = item.noteTitle.slice(0, 10)
            } else {
                titleDisplay = item.noteTitle
            }

        } else {
            if (item.noteBody) {
                if (item.noteBody.length > 12) {
                    titleDisplay = item.noteBody.slice(0, 10)
                } else {
                    titleDisplay = item.noteBody
                }
            }
        }


        createNote.classList.add("noteParent")
        createNote.innerHTML = `<div class="note normal">
                                <header class="noteHeader">
                                    <div class="noteTitleContainer">
                                        <div class="noteTitle">
                                            ${titleDisplay}
                                        </div>
                                        <div class="showTime" data-time="${item.NoteCreateTime}">${FormatTime(item.NoteCreateTime)}</div>
                                    </div>
                                    <div class="noteDescription">
                                        ${descriptionDisplay}
                                    </div>
                                </header>
                                <div class="noteBody">
                                    <div class="leftSidenoteBody">
                                        <div class="LinksDataInfo">
                                            <div class="showLink"><i class="fa-solid fa-paperclip"></i>${item.NoteAllLinks.length > 200 ? String(item.NoteAllLinks.length).slice(0, 200) + "+": item.NoteAllLinks.length} links</div>
                                            <button><i class="fa-regular fa-copy"></i></button>
                                        </div>
                                    </div>
                                    <div class="rightNoteBody">
                                       <div class="NotemenuToggler">
                                             <button class="NoteMenuShowBtn"><i class="fa-solid fa-bars-staggered"></i></button>
                                             <div class="NoteMenu scale0">
                                                <div class="NoteMenuWraper">
                                                    <div class="NoteMenuBody">
                                                        <button class="deleteNoteBtn" data-id="${item.id}"><i class="fa-regular fa-trash-can"></i>Delete</button>
                                                        <div class="hr-1px-wbg10"></div>
                                                        ${item.NoteAllLinks.length > 0 ? `<button class="ShowLinkBtn" data-index="${index}"><span><i class="fa-solid fa-paperclip"></i>Links</span><span class="showLinkLength ${item.NoteAllLinks.length > 0 ? "show" : "hide"}">${item.NoteAllLinks.length > 0 ? item.NoteAllLinks.length : ""}</span></button>
                                                        <div class="hr-1px-wbg10"></div>` : ""}
                                                        <button class="shareNote"><i class="fa-solid fa-arrow-up-from-bracket"></i> Share</button>
                                                    </div>
                                                </div>
                                                <div class="noteMenus">
                                                        <div class="NotesLinksShow">
                                                            <div class="NotesLinksShowWraper">
                                                                <div class="NotesLinksHead">
                                                                    <span><i class="fa-solid fa-paperclip"></i>${item.NoteAllLinks.length} link${item.NoteAllLinks.length > 1 ? 's' : ""}</span>
                                                                    <button class="NotesLinksShowCloseBtn"><i class="fa-solid fa-xmark"></i></button>
                                                                </div>
                                                                <div class=".hr-1px-wbg5"></div>
                                                                <div class="showFullLinkCon">
                                                                <div class="showFullLink"></div>
                                                                <button class="CopyLink"><i class="fa-regular fa-copy"></i></button>
                                                                </div>
                                                                <div class="NotesLinksBody">
                                                                    <div class="NotesLinksBodybtns">
                                                                    
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="NoteShareMenu">
                                                        <div class="NoteShareMenuWraper">
                                                            <div class="NoteShareMenuHead">
                                                                <span class="NoteShareMenuHeadLeft">
                                                                <i class="fa-solid fa-share"></i>
                                                                    Share
                                                                </span>
                                                                <button class="NoteShareMenuHeadRight">
                                                                    <i class="fa-solid fa-xmark"></i>
                                                                </button>
                                                            </div>
                                                            <div class="NoteShareMenuBody">
                                                                <div class="appsMenu">
                                                                    <div class="appsMenuBtns">
                                                                        <button><i class="fa-brands fa-whatsapp"></i></button>
                                                                        <button><i class="fa-brands fa-facebook-messenger"></i></button>
                                                                        <button><i class="fa-brands fa-telegram"></i></button>
                                                                    </div>
                                                                </div>
                                                                <div class="ShareTextInAppContainer">   
                                                                    <div class="ShareTextInApp">
                                                                        <div class="ShareTextInAppHead"></div>
                                                                        <div class="ShareTextInAppBody">
                                                                            <div class="ShareTextInAppInput">
                                                                                <div class="shareTextInCon">
                                                                                    <input type="text">
                                                                                    <span class="inputPlaceholder">Text here (optional)</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="chatSharebtnCon">
                                                                                <button><i class="fa-solid fa-arrow-up-from-bracket"></i> Share chatgpt</button>
                                                                                <button class="ShareTextInAppBtn"><i class="fa-solid fa-arrow-up-from-bracket"></i></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                             </div>
                                       </div>

                                    </div>
                                </div>
                            </div>`

        ShowNotesDisplay.appendChild(createNote)


            const CopyLink = createNote.querySelector(".CopyLink")
            const showFullLinkValue = createNote.querySelector(".showFullLink")
            CopyLink.addEventListener('click', () => {
                let CopyText = showFullLinkValue.innerText
                let textarea = document.createElement("textarea")
                textarea.value = CopyText
                textarea.style.position = "fixed"
                textarea.style.opacity = "0"

                document.body.appendChild(textarea)
                textarea.focus()
                textarea.select()

                try {
                    document.execCommand("copy")
                    CopyLink.innerHTML = `<i class="fa-solid fa-check"></i>`
                } catch (err) {
                    CopyLink.innerHTML = `<i class="fa-regular fa-copy"></i>`
                }
                setTimeout(() => {
                    CopyLink.innerHTML = `<i class="fa-regular fa-copy"></i>`
                }, 1200)
                document.body.removeChild(textarea)
            })

            const NoteShareMenu = createNote.querySelector(".NoteShareMenu")
            const shareNoteBtn = createNote.querySelector(".shareNote")
            const note = createNote.querySelector(".note")
            const NotesLinksShow = createNote.querySelector(".NotesLinksShow")

         createNote.addEventListener("click", () => {
            ShowLinkDisplayRemove(note)
        })
        let NoteMenuShowBtn = createNote.querySelector(".NoteMenuShowBtn")
        let NoteMenu = createNote.querySelector(".NoteMenu")
        
        NoteMenuShowBtn.addEventListener("click", (e) => {
            e.stopPropagation()
           NoteConfigToggler(NoteMenu)
           QueckbtnTogglerRemove()
           NoteShareMenuRemove(NoteShareMenu)
           ShowLinkDisplayRemove(note)
        })



        NoteMenu.addEventListener("click", (e) => {
            e.stopPropagation()
            let note = e.target.closest(".note")

            if (e.target.closest(".deleteNoteBtn")) {
                DeleteNote(item.id)
            } else if (e.target.closest(".ShowLinkBtn")) {
                ShowLinkDisplay(note)
                NoteShareMenuRemove(NoteShareMenu)
            }
        })
         let showFullLink = createNote.querySelector(".showFullLink")
        // share 
        let shareTextInputValueData = 0

        const shareTextInCon = createNote.querySelector(".shareTextInCon")
             let shareTextInput = createNote.querySelector(".shareTextInCon input")
        shareTextInput.addEventListener("input", () => {
            let shareTextInputValue = shareTextInput.value.trim()
            shareTextInputValueData = shareTextInputValue.length
            if (shareTextInputValue.value.length > 0) {
                ShareTextInputActiveAdd(shareTextInCon)
            } else {
                ShareTextInputActiveRemove(shareTextInCon)
            }
        })
        shareTextInCon.addEventListener("click", (e) => {
            e.stopPropagation()
           ShareTextInputActiveAdd(shareTextInCon)
        })
      
        document.addEventListener("click", (e) => {
            let shareTextInputValueData = shareTextInput.value.trim()

             if (!e.target.closest(".shareTextInCon")) {
                 if (shareTextInputValueData <= 0) {
                    ShareTextInputActiveRemove(shareTextInCon)
                 }
             }

             if (!e.target.closest(".NoteShareMenu")) {
                NoteShareMenuRemove(NoteShareMenu)
                 
             } 
             if (!e.target.closest(".NotesLinksShow")) {
                 ShowLinkDisplayRemove(note)
             }
             


        })

         shareNoteBtn.addEventListener("click", (e) => {
            e.stopPropagation()
            NoteShareMenuToggler(NoteShareMenu)
            ShowLinkDisplayRemove(note)
         })
         const NoteShareMenuHeadRight = createNote.querySelector(".NoteShareMenuHeadRight")
         NoteShareMenuHeadRight.addEventListener("click", () => {
            NoteShareMenuRemove(NoteShareMenu)
         })

         const NotesLinksShowCloseBtn = createNote.querySelector(".NotesLinksShowCloseBtn")
         NotesLinksShowCloseBtn.addEventListener("click", () => {
            ShowLinkDisplayRemove(note)

         })


        const NotesLinksBodybtns = createNote.querySelector(".NotesLinksBodybtns")
        item.NoteAllLinks.forEach((noteLink, index) => {
            let createLinkButton = document.createElement("button")
            let noteLinkDetails = ""

            if (noteLink.linkName) {
                if (noteLink.linkName.length > 10) {
                    if (noteLink.linkName.startsWith("https://www.")) {
                        noteLinkDetails = `${noteLink.linkName.slice(11, 19) + '...'}`
                    } else if (noteLink.linkName.startsWith("https://")) {
                        noteLinkDetails = `${noteLink.linkName.slice(8, 16) + '...'}`
                    } else if (noteLink.linkName.startsWith("http://")) {
                        noteLinkDetails = `${noteLink.linkName.slice(7, 16) + '...'}`
                    } else if (noteLink.linkName.startsWith("www.")) {
                        noteLinkDetails = `${noteLink.linkName.slice(4, 12) + '...'}`
                    } else {
                        noteLinkDetails = `${noteLink.linkName.slice(0, 8) + '...'}`
                    }
                } else {
                    noteLinkDetails = noteLink.linkName
                }
            } else {
                if (noteLink.link.length > 10) {
                    if (noteLink.link.startsWith("https://www.")) {
                        noteLinkDetails = `${noteLink.link.slice(12, 19) + '...'}`
                    } else if (noteLink.link.startsWith("https://")) {
                        noteLinkDetails = `${noteLink.link.slice(8, 16) + '...'}`
                    } else if (noteLink.link.startsWith("http://")) {
                        noteLinkDetails = `${noteLink.link.slice(7, 16) + '...'}`
                    } else if (noteLink.link.startsWith("www.")) {
                        noteLinkDetails = `${noteLink.link.slice(4, 12) + '...'}`
                    } else {
                        noteLinkDetails = `${noteLink.link.slice(0, 8) + '...'}`
                    }
                } else {
                    noteLinkDetails = noteLink.link
                }
            }
            createLinkButton.innerHTML =   `
            <span>${noteLink.icon}</span><span>${noteLinkDetails}</span>
            `
            createLinkButton.addEventListener("click", () => {
                window.open(noteLink.link, noteLink.target)
            })
            NotesLinksBodybtns.appendChild(createLinkButton)
            let lastChild = index === item.NoteAllLinks.length - 1
            let LinkLen = item.NoteAllLinks.length
            let isValidLength = LinkLen >= 4 && (LinkLen - 4) % 3 === 0
            

            let To2set5 = LinkLen >= 2 && (LinkLen - 2) % 3 === 0
            if (LinkLen <= 1) {
                createLinkButton.style.borderRadius = "10px"
            } else if (lastChild && To2set5) {
                createLinkButton.style.borderRadius = "0 10px 10px 0"
            } else if (lastChild && isValidLength) {
                createLinkButton.style.borderRadius = "10px"
           } else {
             if ((index + 1 - 2) % 3 === 0) {
                createLinkButton.style.borderRadius = "0px"
            } else if ((index + 1 - 3) % 3 === 0) {
                createLinkButton.style.borderRadius = "0 10px 10px 0"
            } else if ((index + 1 - 1) % 4 === 0) {
                 createLinkButton.style.borderRadius = "10px 0 0 10px"
            } 
           } 


           let xdata = ""

           if (item.NoteAllLinks.length > 0) {
                xdata = item.NoteAllLinks[0].link
                 showFullLink.innerHTML = xdata
           }
           
            createLinkButton.addEventListener("mouseover", () => {
                xdata = noteLink.link
                showFullLink.innerHTML = xdata
            })
          


        })

            const noteItem = createNote.querySelector(".note")
            const ThisNoteMenu = noteItem.querySelector(".NoteMenu")
            const ThisNotesLinksShow = noteItem.querySelector(".NotesLinksShow")

        let lastChild = index === (noteListsD.length - 1) 
        let lastM1Child = index === (noteListsD.length - 1) - 1
        let lastValidLen = noteListsD.length >= 10 && noteListsD.length % 2 === 0
         if (noteListsD.length >= 10) {
            if (lastChild && lastValidLen) {
                ThisNoteMenu.style.bottom = "0px"
                ThisNoteMenu.style.right = "80px"
                ThisNotesLinksShow.style.top = "-280px"
                ThisNotesLinksShow.style.right = "-30px"
                NoteShareMenu.style.bottom = "120px"

        } else if (lastM1Child) {
           ThisNotesLinksShow.style.top = "-240px"
           ThisNoteMenu.style.bottom = "30px"
        }
         else if (lastM1Child || lastChild) {
           ThisNotesLinksShow.style.top = "-240px"
           ThisNoteMenu.style.bottom = "0px"
        }
         }

         if (item.noteTitle && item.noteBody) {
           const noteBodyContent = noteItem.querySelector(".noteBody")
           
         }
         
       
    })
}
RenderNote(NoteLists)




    function NoteShareMenuToggler(NoteShareMenu) {
        NoteShareMenu.classList.add("show")
    }
   function NoteShareMenuRemove(NoteShareMenu) {
        NoteShareMenu.classList.remove("show")
   }




  function ShareTextInputActiveAdd(shareTextInCon) {
            let shareTextInput = shareTextInCon.querySelector(".shareTextInCon input")
            let inputPlaceholder = shareTextInCon.querySelector(".inputPlaceholder")
             shareTextInput.classList.add("active")
             inputPlaceholder.classList.add("active")
        }
        
  function ShareTextInputActiveRemove(shareTextInCon) {
            let shareTextInput = shareTextInCon.querySelector(".shareTextInCon input")
            let inputPlaceholder = shareTextInCon.querySelector(".inputPlaceholder")
             shareTextInput.classList.remove("active")
             inputPlaceholder.classList.remove("active")
        }



// Note menu 
let activeNoteMenu = null

function NoteConfigToggler(noteMenu) {
    if (activeNoteMenu && activeNoteMenu !== noteMenu) {
        activeNoteMenu.classList.add("scale0")
    }
   noteMenu.classList.toggle("scale0")
   if (noteMenu.classList.contains("scale")) {
        activeNoteMenu = null
   } else {
        activeNoteMenu = noteMenu
   }

}

// const NoteMenuAll = document.querySelectorAll(".NoteMenu")
// NoteMenuAll.forEach(menu => {
//     menu.addEventListner("click", (e) => {
//         e.stopPropagation()
//     })
// })

document.addEventListener("click", (e) => {
    if (activeNoteMenu && !e.target.closest(".NoteMenu")) {
        activeNoteMenu.classList.add("scale0")
    }
})
function renderNoteLinkInfo(LinkInfo) {
    NoteLinksIn.innerHTML = ""

    if (LinkInfo && LinkInfo.length > 0) {
        LinkInfo.forEach((item, index) => {
        let LinkDisplay = ""
        
        if (item.linkName) {
            if (item.linkName.length > 13 ) {
                LinkDisplay = item.linkName.slice(0, 10) + "..."
            } else {
                LinkDisplay = item.linkName
            }
        } else {
            if (item.link.length > 13) {
                if (item.link.toLowerCase().startsWith("https://www.")) {
                    LinkDisplay = item.link.slice(12, 20) + "..."
                } else if (item.link.toLowerCase().startsWith("http://www.")) {
                    LinkDisplay = item.link.slice(11, 20) + "..."
                } else if (item.link.toLowerCase().startsWith("https")) {
                    LinkDisplay = item.link.slice(8, 15) + "..."
                } else if (item.link.toLowerCase().startsWith("http")) {
                   LinkDisplay = item.link.slice(7, 16) + "..."
                } else if (item.link.toLowerCase().startsWith("www.")) {
                    LinkDisplay = item.link.slice(4, 15) + "..."
                } else {
                    LinkDisplay = item.link.slice(0, 10) + "..."
                }
            } else {
                LinkDisplay = item.link
            }
        }



        let createBtn = document.createElement("span")
    createBtn.innerHTML = `
    <a target="${item.target}" href="${item.link}">
        <span>${item.icon}</span>
        <span>${LinkDisplay}</span>
    </a>`
    NoteLinksIn.appendChild(createBtn)
    })
    } else {
       NoteLinksIn.innerHTML = `<div class="emptyNoteLink"><i class="fa-solid fa-paperclip"></i>empty link</div>`
    }
}

renderNoteLinkInfo(CurrentAllLinksSaved)
SearchNote.addEventListener("input", () => {
    setTimeout(() => {
        SearchNotes()
    }, 300)
})

let searchFirstEleLink = ""
let searchFirstEletarget = ""
let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || []

function SearchNotes() {
    let SearchNoteValue = SearchNote.value.toLowerCase()

    if (SearchNoteValue !== "") {
        DeleteInputTexts.classList.add("showXmark")
        ShowHistory.classList.add("hideThis")
    } else {
        ShowHistory.classList.remove("hideThis")
        DeleteInputTexts.classList.remove("showXmark")
    }
    hideSearchHistory()
    if (SearchNoteValue == "") return
    let filtredSearchNotes = NoteLists.filter(note => note.noteTitle.toLowerCase().includes(SearchNoteValue) || note.noteBody.toLowerCase().includes(SearchNoteValue) || note.NoteAllLinks.some(l => l.link.toLowerCase().includes(SearchNoteValue)))
    RenderNote(filtredSearchNotes)
    RenderNoteListLength(filtredSearchNotes)
    if (filtredSearchNotes.length > 0 && filtredSearchNotes[0].NoteAllLinks.length > 0) {
        searchFirstEleLink = filtredSearchNotes[0].NoteAllLinks[0].link
        searchFirstEletarget = filtredSearchNotes[0].NoteAllLinks[0].target
    } else {
        searchFirstEleLink = ""
        searchFirstEletarget = ""
    }
}

function FirstLinkOpen() {
    
    if (searchFirstEleLink) {
        window.open(searchFirstEleLink, searchFirstEletarget)
    }
    //.NoteAllLinks[0].link
}

OpenFirstLink.addEventListener("click", () => {
    FirstLinkOpen()
})


function FormatTime(old) {
    let now = new Date()
    let past = new Date(old)
    let diff = now - past
    let s = Math.floor(diff / 1000)
    let m = Math.floor(s / 60)
    let h = Math.floor(m / 60)
    let day = Math.floor(h / 24)
    let month = Math.floor(day / 30)
    let years = Math.floor(month / 12)
    

    if (s < 60) return `Just now`
    if (m < 60) return `${m}m ago`
    if (h < 24) return `${h}h ago`
    if (day < 30) return `${day % 7 ? `${day / 7}` : `${day}day ago`}`
    if (month < 12) return `${month}month ago`
    if (years) return `${years}year ago` 

    return past.toLocaleDateString()
}

function AutoUpdateTime() {
    const showTimeAll = document.querySelectorAll(".showTime")
    showTimeAll.forEach(timecon => {
        let time = timecon.dataset.time
        timecon.innerText = formatTime(time)
    })
}
setInterval(() => {
    AutoUpdateTime()
}, 1000)


let filterListMenuBtnsAll = filterListMenuBtns.querySelectorAll("button")
let currentNoteFilter = "All"
let nowTime = new Date()
filterListMenuBtnsAll.forEach(filterbtn => {
    filterbtn.addEventListener("click", () => {
        filterListMenuBtnsAll.forEach(bBtn => {
            bBtn.classList.remove("active")
            })

            
        filterbtn.classList.add("active")
        switch (filterbtn.innerText) {
            case "All":
              currentNoteFilter = "All"
              RenderNote(NoteLists)
              RenderNoteListLength(NoteLists)
              break
            case "10 day":
              currentNoteFilter = "10 day"
              let filter10day = NoteLists.filter(item => nowTime - (new Date(item.NoteCreateTime).getTime()) <= 864000000)
              RenderNote(filter10day)
              RenderNoteListLength(filter10day)
              break
            case "1 hours":
                currentNoteFilter = "1 hours"
                let filter1h = NoteLists.filter(item => nowTime - (new Date(item.NoteCreateTime).getTime()) <= 360000)
              RenderNote(filter1h)
              RenderNoteListLength(filter1h)
                break
            case "1 month":
                currentNoteFilter = "1 month"
                let filter1Month = NoteLists.filter(item => nowTime - (new Date(item.NoteCreateTime).getTime()) <= 2592000000)
                RenderNote(filter1Month)
                RenderNoteListLength(filter1Month)
                break
        }
    })
})

let isActiveMenu = false
threeDot.addEventListener("click", (e) => {
    e.stopPropagation()
    noteCreatorMenu()
})

function noteCreatorMenu() {
    noteCreatetorMenu.classList.toggle("scale0")
    isActiveMenu = !(noteCreatetorMenu.classList.contains("scale0"))
    if (noteCreatetorMenu.classList.contains("scale0")) {
        BlackOverlyRemove()
    } else {
        BlackOverlyAdd()
    }
}
function noteCreatorMenuRemove() {
    noteCreatetorMenu.classList.add("scale0")
    isActiveMenu = false
}
hideNoteCreatorMenu.addEventListener("click", (e) => {  
    e.stopPropagation()
    noteCreatorMenuRemove()
    BlackOverlyRemove()
})
noteCreatetorMenu.addEventListener("click", (e) => {
     e.stopPropagation()
})
document.addEventListener("click", (e) => {
    if (isActiveMenu && !e.target.closest(".noteCreatetorMenu")){
        noteCreatorMenuRemove()
    }
})


ShowNotesDisplay.addEventListener("click", (e) => {
    let deleteBtn = e.target.closest(".deleteNoteBtn")
    let ShowLinkBtn = e.target.closest(".ShowLinkBtn")
    let note = e.target.closest(".note")
    let shareNote = e.target.closest(".shareNote")
    let NoteShareMenuHeadRight = e.target.closest(".NoteShareMenuHeadRight")
    let NotesLinksShow = e.target.closest(".NotesLinksShow")
    if (deleteBtn){
         DeleteNote(deleteBtn.dataset.id)
    } else if (ShowLinkBtn){
         ShowLinkDisplay(note)
    } else if (NoteShareMenuHeadRight) {

    }
   
})

function ShowLinkDisplay(NotesLinksShow) {
   let noteToLinkMneu = NotesLinksShow.querySelector(".NotesLinksShow")
   let noteLinkMenuCloseBtn = NotesLinksShow.querySelector(".NotesLinksShowCloseBtn")
   noteToLinkMneu.classList.add("show")
    noteToLinkMneu.addEventListener("click", (e) => {
        e.stopPropagation()
    })
   noteLinkMenuCloseBtn.addEventListener("click", () => {
        ShowLinkDisplayRemove(NotesLinksShow)
   })
}


function ShowLinkDisplayRemove(noteToLinkMneu) {
    let noteToLinkMneuData = noteToLinkMneu.querySelector(".NotesLinksShow")
    noteToLinkMneuData.classList.remove("show")
}

function ShareNoteShow(thisShare) {
    thisShare.classList.add("show")
}
function ShareNoteRemove(thisShare) {
    thisShare.classList.remove("show")
}


function DeleteNote(noteId) {
    DataXD = NoteLists.filter(item => String(item.id) !== String(noteId))
    localStorage.setItem("NoteLists", JSON.stringify(DataXD))
    RenderNote(NoteLists)
    RenderNoteListLength(NoteLists)
}
CreateListbtnEmpty.addEventListener("click", () => {
    CreateNewbtnClick()
    addDataBtnClick()
})
CreateNewNoteBtn.addEventListener("click", () => {
    getCreateNote()
})

function ShowSearchHistory() {
    historyShow.classList.toggle("showHistory")
}
function hideSearchHistory() {
    historyShow.classList.remove("showHistory")
}
ShowHistory.addEventListener('click', () => {
    ShowSearchHistory()
})
closeHistory.addEventListener("click", () => {
    hideSearchHistory()
})


DeleteInputTexts.addEventListener("click", () => {
    RenderNoteListLength(NoteLists)
    RenderNote(NoteLists)
    ShowHistory.classList.remove("hideThis")
    DeleteInputTexts.classList.remove("showXmark")
    let SearchNoteValue = SearchNote.value.toLowerCase()
    searchHistory.push({
        history: SearchNoteValue,
        historyTime: new Date(),
        id: new Date().getTime()
    })
    SearchNote.value = ""
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory))
    RenderHistory(searchHistory)
    
})

let activeHistoriesBtn = null

function RenderHistory(searchHistoryData) {
    historyAllSearchShow.innerHTML = ""
    searchHistoryData.forEach(item => {
        let createHistory = document.createElement("div")
        createHistory.classList.add("historyLine")
        createHistory.innerHTML =  `           <button class="history_para">
                                                 ${item.history ? item.history.length > 20 ? item.history.slice(0, 17) + "..." : item.history : ""}
                                                <span class="ShowhistoryTime">
                                                    ${FormatTime(item.historyTime)}
                                                </span>
                                                    </button>
                                                <span class="HistoryConfigBtns">                                  
                                                <button class="dotBar">
                                                    <i class="fa-solid fa-ellipsis"></i>
                                                </button>
                                             <div class="configHostory">
                                                <div class="configHostoryWraper">           
                                                <button class="deletebtn" data-id="${item.id}"><i class="fa-regular fa-trash-can"></i>Delete</button>
                                             </div>
                                             </div>
                                            </span>`

        historyAllSearchShow.appendChild(createHistory)

        createHistory.addEventListener("click", () => {
            SearchNote.value = item.history
            SearchNotes()
        })

        let dotBar = createHistory.querySelector(".dotBar")
        let configHostory = createHistory.querySelector(".configHostory")

        dotBar.addEventListener('click', (e) => {
            e.stopPropagation()
            configHostoryCon(configHostory)
        })
    })  
    if (searchHistoryData.length < 1) {
        historyAllSearchShow.innerHTML = `<i class="fa-solid fa-magnifying-glass-arrow-right"></i> Empty note`
        historyAllSearchShow.classList.add("empty")
    }


}
RenderHistory(searchHistory)

historyAllSearchShow.addEventListener("click", (e) => {
    if (e.target.closest(".deletebtn")) {
        e.stopPropagation()
        let deleteBtn = e.target.closest(".deletebtn")
        let deleteId = deleteBtn.dataset.id
        DeleteHostoryItem(deleteId)
    } 
})

function configHostoryCon(menu) {
    if (activeHistoriesBtn && activeHistoriesBtn !== menu) {
        activeHistoriesBtn.classList.remove("showConfigHis")
        activeHistoriesBtn = null
    }

    menu.classList.toggle("showConfigHis")

    if (menu.classList.contains("showConfigHis")) {
        activeHistoriesBtn = menu
    } else {
        activeHistoriesBtn = null
    }
}

// localStorage.removeItem("searchHistory")

function DeleteHostoryItem(id) {
    let deleted = searchHistory.filter(item => item.id !== Number(id))
    localStorage.setItem("searchHistory", JSON.stringify(deleted))
    RenderHistory(deleted)
}