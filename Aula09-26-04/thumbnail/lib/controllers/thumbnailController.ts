import { Request, Response } from 'express';
import * as thumbnail from '../shared/thumbnail';

export class ThumbnailController{
    
    public async gerarThumbnail (req: Request, res: Response) {                
        
        try {
            
            const result = await thumbnail.default(req.body.url);
            res.send(result);
        } catch (err) {
            console.error(err);
        }
        
    }
}