import { Request, Response } from 'express';
import { Thumbnail } from '../shared/thumbnail'

export class ThumbnailController{
    
    public async gerarThumbnail (req: Request, res: Response) {                
                
        const imageThumbnail = require('image-thumbnail');
        let options = { responseType: 'base64' }
        
        try {
            let thumbnail: Thumbnail = new Thumbnail();

            //const thumbnail = await imageThumbnail({ uri: req.body.url }, options);
            const result = await thumbnail.getThumbnail(req.body.url);
            res.send(result);
        } catch (err) {
            console.error(err);
        }
        
    }
}