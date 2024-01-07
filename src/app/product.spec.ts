import { describe, expect, it} from "vitest";
import { Product } from "./products"

describe("Create a product object",()=>{

    it("should create a product and generate the UUID if not informed",() => {

        const sut = new Product({

            name:"hello",
            price:7000,
            status:"desativado"

        });

        expect(sut.props.status).toEqual("desativado");
        expect(sut).toBeTruthy(); 

        console.info(sut);

    });

});