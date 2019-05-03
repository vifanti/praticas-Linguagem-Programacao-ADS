import { Request, Response } from 'express';

export class ThumbnailController{
    
    public async gerarThumbnail (req: Request, res: Response) {                
                
        const imageThumbnail = require('image-thumbnail');
        let options = { responseType: 'base64' }
        
        try {
            const thumbnail = await imageThumbnail({ uri: req.body.url }, options);
            res.send(thumbnail);
        } catch (err) {
            console.error(err);
        }
        
    }
}