class UserWallet {
    constructor(username, password, balance, phoneNumber) {
        this.balance = balance
        this.username = username
        this.password 
        this.phoneNumber = ""
        this.isLogin = false
        if (phoneNumber.length === 11) {
            this.phoneNumber = phoneNumber
        } else {
            console.log("Your number is wrong !")
        }
        if (password.length > 5) {
             this.password  = password
        } else {
            console.log(`hey ${this.username}, Your password[ "${password}" ] please thats password length make more then 5 !`)
        }
    }
    Login (username, password) {
        if (username && password) {
            if (username === this.username && password === this.password) {
                console.log(username + " successfully Login")
                console.log(`name is ${this.username} | avaliable balance is ${this.balance}`)
                this.isLogin = true
            } else if (username !== this.username) {
                console.log("Your username is wrong!")
            } else if (password !== this.password) {
                console.log("Your password is wrong!")
            } else {
                console.log("Your password and username has wrong !")
            }
        } else {
            console.log("login unsuccessfull !")
        }
    }
    cashIn (ammount, password, phoneNumber ) {
        if (password && phoneNumber && ammount && this.isLogin) {
            if (password === this.password && phoneNumber.length === 11 && phoneNumber === this.phoneNumber && ammount > 100) {
                this.balance  += Number(ammount)
                console.log(ammount + " cashIn in " + "successfull " + " cash out id is " + phoneNumber)
                console.log("your available balance is " + this.balance)
            } else if (password !== this.password ) {
                console.log("wrong password !")
            } else if (phoneNumber.length !== 11) {
                console.log( phoneNumber + " -- your id is wrong , please make the length of your id equal to 11 ! ")
            } else if (ammount < 100) {
                console.log("Make the Amount more then 100 !")
            } else {
                console.log("please give right info !")
            }
        } else if (!this.isLogin) {
            console.log("Please Login first, then try cashIn !")
        } else {
           console.log("please give all info !")
        }
    }
    cashOut (ammount, password, phoneNumber) {
        if (ammount && password && phoneNumber && this.balance && this.isLogin) {
            if (ammount > 200 && password === this.password && phoneNumber.length === 11 && this.balance > 200 && ammount < this.balance) {
                this.balance = this.balance - Number(ammount)
                console.log("Successfully cashout " + ammount + ", and cashout uid is " + phoneNumber)
                console.log("your available balance is " + this.balance)
            } else if (ammount < 200) {
                console.log("please your ammount make more then 200 !")
            } else if (password !== this.password) {
                console.log(password + " has wrong password !")
            } else if (phoneNumber.length !== 11) {
                console.log( phoneNumber + " ----> Your cashOutuid has wrong !")
            } else if (this.balance < 200) {
                console.log(`Your available balance is ${this.balance}, and your ammout is greter then balance so ${this.balance} < ${ammount}!`)
            } else if (ammount > this.balance) {
                console.log("your ballance is just " + this.balance + " not " + ammount)
            }  else {   
                console.log("Your info is wrong !")
            }
        } else if (!this.isLogin) {
            console.log("Please Login first, Then try cashout !")
        } else {
            console.log("Cash out field !")
        }
    }   
}

let user1 = new UserWallet("tuhin", "tuh12@3", 3400, "01234567891")
let user2 = new UserWallet("samia", "samw232", 3400, "01234567891")

user1.Login("tuhin", "tuh12@3")
user1.cashIn(490, "tuh12@3", "01234567891")

user1.cashOut(800, "tuh12@3", "01234567891")
user1.cashOut(300, "tuh12@3", "01234567891")