var Pet = require('../models/pet');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//operations with mongodb made easy like a driver
mongoose.connect('localhost:27017/adoptameco');
//because we need to seed our db with the sample data, 
// I just need to connect manually with the database
// Asynchronus

var petdatalist = [
    new Pet({
        urlimg: 'http://orig07.deviantart.net/20c9/f/2010/311/6/5/street_cat__by_inbrainstorm-d32d91j.jpg',
        name: 'Pelusita',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id turpis a enim rutrum fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id pulvinar sapien. Morbi finibus tellus nec malesuada varius. Duis sed libero sollicitudin, viverra lacus quis, rutrum ipsum. Vivamus laoreet lectus nec libero accumsan faucibus.',
        numbervacuns: 2,
        vacunslist: '',
        age: 2,
        sex: 'Macho'
    }),
    new Pet({
        urlimg: 'https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-9/18485987_10154855035904317_3183131754204030387_n.jpg?oh=9b2abca21ad31aff763a91b18b51ab0b&oe=59B2598B',
        name: 'Ary',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id turpis a enim rutrum fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id pulvinar sapien. Morbi finibus tellus nec malesuada varius. Duis sed libero sollicitudin, viverra lacus quis, rutrum ipsum. Vivamus laoreet lectus nec libero accumsan faucibus.',
        numbervacuns: 4,
        vacunslist: '5',
        age: 3,
        sex: 'Macho'
    }),
    new Pet({
        urlimg: 'http://i.dailymail.co.uk/i/pix/2013/08/30/article-2406121-1B851905000005DC-884_634x422.jpg',
        name: 'Toñito',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id turpis a enim rutrum fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id pulvinar sapien. Morbi finibus tellus nec malesuada varius. Duis sed libero sollicitudin, viverra lacus quis, rutrum ipsum. Vivamus laoreet lectus nec libero accumsan faucibus.',
        numbervacuns: 3,
        vacunslist: 'Perolta Laika',
        age: 2.5,
        sex: 'Hembra'
    }),
    new Pet({
        urlimg: 'https://c1.staticflickr.com/3/2352/2390355787_ffc32babf1_b.jpg',
        name: 'Krot',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id turpis a enim rutrum fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id pulvinar sapien. Morbi finibus tellus nec malesuada varius. Duis sed libero sollicitudin, viverra lacus quis, rutrum ipsum. Vivamus laoreet lectus nec libero accumsan faucibus.',
        numbervacuns: 4,
        vacunslist: '',
        age: .8,
        sex: 'Macho'
    }),
    new Pet({
        urlimg: 'http://cr00.epimg.net/radio/imagenes/2013/06/08/regional/1370695260_912772_1370699160_noticia_normal.jpg',
        name: 'Bobby',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id turpis a enim rutrum fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id pulvinar sapien. Morbi finibus tellus nec malesuada varius. Duis sed libero sollicitudin, viverra lacus quis, rutrum ipsum. Vivamus laoreet lectus nec libero accumsan faucibus.',
        numbervacuns: 3,
        vacunslist: '',
        age: 2.3,
        sex: 'Macho'
    }),
    new Pet({
        urlimg: 'https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-9/18486102_599387680257323_3531952224746065930_n.jpg?oh=90d3f8e7be10efd76f2751c6dc721c0f&oe=59B3BA7D',
        name: 'Mago',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id turpis a enim rutrum fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id pulvinar sapien. Morbi finibus tellus nec malesuada varius. Duis sed libero sollicitudin, viverra lacus quis, rutrum ipsum. Vivamus laoreet lectus nec libero accumsan faucibus.',
        numbervacuns: 3,
        vacunslist: '',
        age: 4,
        sex: 'Macho'
    }),
    new Pet({
        urlimg: 'https://c1.staticflickr.com/1/51/118452803_0e88a2ae5c.jpg',
        name: 'Bongo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id turpis a enim rutrum fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id pulvinar sapien. Morbi finibus tellus nec malesuada varius. Duis sed libero sollicitudin, viverra lacus quis, rutrum ipsum. Vivamus laoreet lectus nec libero accumsan faucibus.',
        numbervacuns: 5,
        vacunslist: '',
        age: 7,
        sex: 'Macho'
    }),
    new Pet({
        urlimg: 'https://c1.staticflickr.com/4/3035/2355899484_010b75d5ff.jpg',
        name: 'Felton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id turpis a enim rutrum fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id pulvinar sapien. Morbi finibus tellus nec malesuada varius. Duis sed libero sollicitudin, viverra lacus quis, rutrum ipsum. Vivamus laoreet lectus nec libero accumsan faucibus.',
        numbervacuns: 4,
        vacunslist: '',
        age: 4,
        sex: 'Macho'
    }),
    new Pet({
        urlimg: 'https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-0/s480x480/18342285_596391187223639_4977205186533428184_n.jpg?oh=13fb8ea56feefa416c78cfd5326d81d1&oe=59A0A9A5',
        name: 'Bernie',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id turpis a enim rutrum fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id pulvinar sapien. Morbi finibus tellus nec malesuada varius. Duis sed libero sollicitudin, viverra lacus quis, rutrum ipsum. Vivamus laoreet lectus nec libero accumsan faucibus.',
        numbervacuns: 4,
        vacunslist: '',
        age: 3,
        sex: 'Macho'
    }),
    new Pet({
        urlimg: 'https://c1.staticflickr.com/3/2352/2390355787_ffc32babf1_b.jpg',
        name: 'Cotton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id turpis a enim rutrum fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id pulvinar sapien. Morbi finibus tellus nec malesuada varius. Duis sed libero sollicitudin, viverra lacus quis, rutrum ipsum. Vivamus laoreet lectus nec libero accumsan faucibus.',
        numbervacuns: 6,
        vacunslist: '',
        age: 4,
        sex: 'Hembra'
    }),
    new Pet({
        urlimg: 'https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-9/18557367_599387610257330_6773185456351009478_n.jpg?oh=ee629643df79a973f5dbd39e982dd995&oe=59BA796C',
        name: 'Chat',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id turpis a enim rutrum fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id pulvinar sapien. Morbi finibus tellus nec malesuada varius. Duis sed libero sollicitudin, viverra lacus quis, rutrum ipsum. Vivamus laoreet lectus nec libero accumsan faucibus.',
        numbervacuns: 5,
        vacunslist: '',
        age: 2.2,
        sex: 'Macho'
    }),
    new Pet({
        urlimg: 'http://4.bp.blogspot.com/-vxLK5jlhFBE/UCIAZh6sUHI/AAAAAAAAABs/wORhW6Iqny4/s1600/cat,cute,cute,ce,cats,kitten,sweet-8949720a29a68d3f81092377520304e8_h.jpg',
        name: 'Bolitas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id turpis a enim rutrum fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id pulvinar sapien. Morbi finibus tellus nec malesuada varius. Duis sed libero sollicitudin, viverra lacus quis, rutrum ipsum. Vivamus laoreet lectus nec libero accumsan faucibus.',
        numbervacuns: 3,
        vacunslist: '',
        age: 1.2,
        sex: 'Macho'
    })];

var done = 0;
for (var i = 0; i < petdatalist.length; i++) {
    petdatalist[i].save(function(err, result) {
        done++;
        if (done === petdatalist.lenght) {
            dis();
        }
    });
}

function dis() {
    mongoose.disconnect();
}
//Want to check the seed results in the database
// show dbs 
// use adoptameco
// db.pets.find()

//May be you' re w