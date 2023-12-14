const btn = document.getElementById('btn') as HTMLButtonElement;
// other way
// const btn =<HTMLElement> document.getElementById('btn');
// 3rd way !
// const btn = document.getElementById('btn')!;
console.log(btn)
btn.onclick;

const myImg = document.getElementById('my-img') as HTMLImageElement;
console.log(myImg)
// myImg.src

interface Customer {
    [key: string]: string
}

const customerOne: Customer = {
    name: 'salman',
    email: 'salman@gmail.com',
}

const getName = () => {
    return customerOne['name']
}

const getEmail = () => {
    return customerOne['email']
}

const getCustomerData = (key: keyof Customer):string => {
    return customerOne[key]
}