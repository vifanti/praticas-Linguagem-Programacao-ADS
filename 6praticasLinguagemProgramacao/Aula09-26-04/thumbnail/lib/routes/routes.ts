import {Request, Response} from "express";
import { ThumbnailController } from "../controllers/thumbnailController";

export class Routes {   
    
    public thumbnailController: ThumbnailController = new ThumbnailController() 

    public routes(app): void {    

        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })

        app.route('/gerathumbnails')
        // POST endpoint
        .post(this.thumbnailController.gerarThumbnail);
    }
}