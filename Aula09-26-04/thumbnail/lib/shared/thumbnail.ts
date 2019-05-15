export class Thumbnail {
    
    public async getThumbnail (url: any) {                
                
        
        const imageThumbnail = require('image-thumbnail');
        let options = { responseType: 'base64' }
        
        try {
            const thumbnail = await imageThumbnail({ uri: url }, options);
            return thumbnail;
        } catch (err) {
            console.error(err);
        }
        
    }
}