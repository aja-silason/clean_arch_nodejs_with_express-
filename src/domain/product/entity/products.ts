export type ProductProps = {
    id: string;
    name: string;
    price: number;
    quandity: number
}

export class Product {

    private constructor(private props: ProductProps){}

    public static create(name: string, price: number){
        return new Product({
            id: crypto.randomUUID.toString(),
            name,
            price,
            quandity: 0
        });
    }

    public static with(props: ProductProps){
        return new Product(props);
    }

    public get id() {
        return this.props.id;
    }

    public get name(){
        return this.props.name;
    }
    
    public get price(){
        return this.props.price;
    }

    public get quantity(){
        return this.props.quandity;
    }

    public increaseQuantity(quandity: number){
        this.props.quandity += quandity;
    }

    public decreaseQuantity(quandity: number){
        this.props.quandity -= quandity;
    }

}
