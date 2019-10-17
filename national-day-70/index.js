const package = require('./package.json');
//console.log(package.version);
const images = require('images');
const bg_image = images('./images/love.jpg');
console.log(bg_image);
const gq_image = images('./images/flag.jpg');
console.log(gq_image);
const offset = {x: 5, y: 5};
console.log(gq_image.width(),gq_image.height());
const foreground_image = images(gq_image.width() + offset.x, gq_image.height() + offset.y).fill(0xff,0xff,0xff,1).draw(gq_image,offset.x,offset.y);
const pos = {
    x: bg_image.width() - gq_image.width(),
    y: bg_image.height() - gq_image.height()
}
bg_image.draw(foreground_image, pos.x, pos.y).save('./images/result.jpg',{quality: 100})