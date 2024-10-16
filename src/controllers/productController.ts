import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";

export const getAllProcuts = async (req: Request, res: Response) => {

    try{

        const productRepository = AppDataSource.getRepository(Product);
        const products = await productRepository.find();
        res.json(products);

    } catch (err) {

        if (err instanceof Error) {

            res.status(500).json({

                error: err.message
    
            });
            
        } else {

            console.log("Unknown error occurred");
          
        }

    }

};

export const createProcut = async (req: Request, res: Response) => {

    try {
        
        const productRepository = AppDataSource.getRepository(Product);
        const { name, price, stock } = req.body;
        const product = productRepository.create({ name, price, stock});
        await productRepository.save(product);
        res.status(201).json({

            message: "Producto creado", product 

        });

    } catch (err) {
        
        if (err instanceof Error) {

            res.status(500).json({

                error: err.message
    
            });

        } else {

            console.log("Unknown error occurred");
          
        }

    }

};

export const updateProduct = async (req: Request, res: Response) => {

    try {

        const productRepository = AppDataSource.getRepository(Product);
        const { id } = req.params;
        const { name, price, stock } = req.body;

        let product = await productRepository.findOneBy({

            id: Number(id)

        });

        if(!product){

            return res.status(404).json({

                message: "Producto no encontrado"

            });

        }

        product.name = name;
        product.price = price;
        product.stock = stock;

        await productRepository.save(product);

        res.json({

            message: "Producto actualizado", product

        });
        
    } catch (err) {
        
        if (err instanceof Error) {

            res.status(500).json({

                error: err.message
    
            });

        } else {

            console.log("Unknown error occurred");
          
        }

    }

};

export const deleteProduct = async (req: Request, res: Response) => {

    try {
        
        const productRepository = AppDataSource.getRepository(Product);
        const { id } = req.body;

        const product = await productRepository.findOneBy({

            id: Number(id)

        });

        if(!product){

            return res.status(404).json({

                message: "Producto no encontrado"

            });

        }

        await productRepository.remove(product);

        res.json({

            message: "Producto eliminado"

        });

    } catch (err) {

        if (err instanceof Error) {

            res.status(500).json({

                error: err.message
    
            });

        } else {

            console.log("Unknown error occurred");
          
        }

    }

}

