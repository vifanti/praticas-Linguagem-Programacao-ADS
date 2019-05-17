const thumbnail: any = async function (imageUrl: string): Promise<string> {

    const imageThumbnail = require('image-thumbnail');
    let options = { percentage: 25, responseType: 'base64' }

    const thumbnail = await imageThumbnail({ uri: imageUrl }, options);
    return thumbnail;
    
};

export default thumbnail;