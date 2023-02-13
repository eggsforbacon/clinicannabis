export interface CartItem {
    id : string,
    name : string,
    desc : string,
    price : number,
    quantity : number,
    discount? : number,

}

export interface CartState {
    itemCount : number
    items : CartItem[],
    checked : boolean
}