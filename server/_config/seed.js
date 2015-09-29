var Announcement = require('../api/suggestion/suggestion.model');
Announcement.find({}).remove(function() {
    Announcement.create(
  {
    "title": "Officia amet dolor aliquip id.",
    "content": "Proident labore quis aliqua ut aliquip excepteur eu ut ex nostrud ex aliquip. Irure anim in sit anim minim eiusmod occaecat aliquip dolore veniam ullamco tempor. Qui veniam laboris deserunt occaecat pariatur tempor reprehenderit irure. Ullamco voluptate cupidatat do nulla consectetur eiusmod. Minim id eu ut eiusmod nisi qui cupidatat amet consectetur in culpa sint. Irure officia et deserunt ex commodo veniam esse in cupidatat esse incididunt veniam eu non. Sit proident officia ex enim tempor aute ipsum eiusmod amet deserunt.\r\n",
    "likes": 3,
    "tags": [
      "incididunt"
    ],
    "geometry": {
      "type": "Point",
      "coordinates": [
        -68.596554,
        125.701733
      ]
    },
    "status": 2,
    "mentions": []
  },
  {
    "title": "Anim et veniam exercitation officia duis.",
    "content": "Enim minim ipsum esse magna anim. Irure ullamco nostrud ut voluptate pariatur. Est ullamco sit irure minim anim deserunt non pariatur culpa consequat. Sit anim ut do nostrud non aliquip pariatur ex reprehenderit proident ad. Irure irure ex sint commodo veniam mollit laborum aliquip pariatur laborum. Aute pariatur incididunt proident sint est minim.\r\n",
    "likes": 6,
    "tags": [
      "Lorem",
      "laboris",
      "deserunt"
    ],
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.376171,
        104.976031
      ]
    },
    "status": 1,
    "mentions": [
      "RachelCallahan"
    ]
  },
  {
    "title": "Cupidatat amet veniam irure ullamco magna.",
    "content": "Adipisicing minim reprehenderit proident esse commodo pariatur ut mollit. Exercitation cupidatat eu elit excepteur deserunt. Pariatur tempor mollit esse enim exercitation fugiat irure cillum non commodo. Cillum consequat sint aliquip fugiat cupidatat ullamco aliqua ipsum duis.\r\n",
    "likes": 29,
    "tags": [
      "commodo",
      "duis",
      "amet",
      "excepteur"
    ],
    "geometry": {
      "type": "Point",
      "coordinates": [
        -51.645704,
        123.496899
      ]
    },
    "status": 3,
    "mentions": [
      "SonjaGeorge",
      "RachelCallahan"
    ]
  },
  {
    "title": "Eiusmod labore adipisicing id occaecat cillum magna aute incididunt.",
    "content": "Lorem ipsum ex occaecat nulla sint Lorem pariatur. Pariatur ex in pariatur tempor magna cupidatat veniam cupidatat. Occaecat elit laboris est qui veniam.\r\n",
    "likes": 17,
    "tags": [
      "consequat",
      "non"
    ],
    "geometry": {
      "type": "Point",
      "coordinates": [
        -40.062062,
        -151.835623
      ]
    },
    "status": 2,
    "mentions": [
      "TommieCarpenter",
      "MyrnaStephens",
      "RoblesJohnson"
    ]
  },
  {
    "title": "Adipisicing adipisicing mollit consequat occaecat.",
    "content": "Cillum sunt veniam deserunt eiusmod ea ipsum tempor sit deserunt ea. Laboris cupidatat ullamco quis dolore consectetur ipsum et laborum cillum labore consequat excepteur. Duis non irure incididunt culpa reprehenderit duis anim proident elit.\r\n",
    "likes": 15,
    "tags": [
      "nostrud",
      "consequat",
      "do",
      "exercitation",
      "id",
      "qui",
      "proident"
    ],
    "geometry": {
      "type": "Point",
      "coordinates": [
        -44.707912,
        137.932924
      ]
    },
    "status": 3,
    "mentions": [
      "MalindaPage",
      "RoblesJohnson"
    ]
  },
  {
    "title": "Laborum ea nostrud exercitation laborum labore ad mollit aute.",
    "content": "Nulla officia irure sint laboris. Ex anim consequat id consectetur duis nulla Lorem cupidatat ut mollit. Est aute voluptate aute fugiat sunt nisi quis.\r\n",
    "likes": 17,
    "tags": [
      "est",
      "do",
      "aliqua",
      "consequat",
      "voluptate"
    ],
    "geometry": {
      "type": "Point",
      "coordinates": [
        -4.919554,
        -85.052716
      ]
    },
    "status": 0,
    "mentions": [
      "JimenezHansen"
    ]
  }
    );
});
