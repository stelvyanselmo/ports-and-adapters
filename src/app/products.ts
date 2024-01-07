import { randomUUID } from "node:crypto";

//interfaces  

interface Ireader {
    reader(id: string): PropsProduct;
}

interface IWriter {
    save(props: PropsProduct, id: string): void;
}

export interface IProductPersistence extends Ireader, IWriter {}

//core 

interface IProducts {

    IsValid(): string;
    Enable(): string; 
    Disable(): string; 

}

interface PropsProduct {
 
    name: string;
    price: number;
    status: string;

}

export class Product implements IProducts {

    private _id: string;
    private _props: PropsProduct;

    constructor(props: PropsProduct,id?:string) {

        this._id = id ?? randomUUID();
        this._props = props;

    }

    public get id(): string {

        return this._id;

    }

    public get props(): PropsProduct {

        return this._props;

    }

    public IsValid(): string {
        
        if (this._props.status === 'desativado') {

           return this._props.status = "ativado";

        }

        throw new Error("Falha ao validar dados do produto");

    }

    public Enable(): string {
        
        if (this._props.price > 0) {

            return this._props.status = "ativado";

        }
        
        throw new Error("O preço precisa ser maior que o produto para activar o produto");

    }

    public Disable(): string {

        if (this._props.price == 0) {

            return this._props.status = "desativado";

        }

        throw new Error("O preço precisa ser igual a zero para que o produto seja desativado");

    }

}
