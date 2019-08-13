"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const thumbnail = async function (imageUrl) {
    const imageThumbnail = require('image-thumbnail');
    let options = { percentage: 25, responseType: 'base64' };
    const thumbnail = await imageThumbnail({ uri: imageUrl }, options);
    return thumbnail;
};
exports.default = thumbnail;
//# sourceMappingURL=thumbnail.js.map