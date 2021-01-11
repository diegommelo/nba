new Vue({
  el: "#app",
  data: {
    five: [
      { name: "Steph Curry", price: 5, pic:'https://www.basketball-reference.com/req/202101021/images/players/curryst01.jpg' },
      { name: "Kobe Bryant", price: 5, pic:'https://www.basketball-reference.com/req/202101021/images/players/bryanko01.jpg' },
      { name: "LeBron James", price: 5, pic:'https://www.basketball-reference.com/req/202101021/images/players/jamesle01.jpg' },
      { name: "Tim Duncan", price:5, pic:'https://www.basketball-reference.com/req/202101021/images/players/duncati01.jpg'},
      { name: "Shaquille O'Neal", price: 5, pic:"https://www.basketball-reference.com/req/202101021/images/players/onealsh01.jpg"}
      ],
    four: [
      { name: "Chris Paul", price: 4, pic:"https://www.basketball-reference.com/req/202101021/images/players/paulch01.jpg"},
      { name: "Dwyane Wade", price: 4, pic: "https://www.basketball-reference.com/req/202101021/images/players/wadedw01.jpg"},
      { name: "Kevin Durant", price: 4, pic: "https://www.basketball-reference.com/req/202101021/images/players/duranke01.jpg"},
      { name: "Dirk Nowitzki", price: 4, pic:"https://www.basketball-reference.com/req/202101021/images/players/nowitdi01.jpg"},
      { name: "Dwight Howard", price: 4, pic: "https://www.basketball-reference.com/req/202101021/images/players/howardw01.jpg"}    
    ],
    three: [
      { name: "Steve Nash", price: 3, pic:"https://www.basketball-reference.com/req/202101021/images/players/nashst01.jpg"},
      { name: "James Harden", price: 3, pic: "https://www.basketball-reference.com/req/202101021/images/players/hardeja01.jpg"},
      { name: "Kawhi Leonard", price: 3, pic: "https://www.basketball-reference.com/req/202101021/images/players/leonaka01.jpg"},
      { name: "Kevin Garnett", price: 3, pic:"https://www.basketball-reference.com/req/202101021/images/players/garneke01.jpg"},
      { name: "Marc Gasol", price: 3, pic: "https://www.basketball-reference.com/req/202101021/images/players/gasolma01.jpg"}    
    ],
    two: [
      { name: "Russel Westbrook", price: 2, pic:"https://www.basketball-reference.com/req/202101021/images/players/westbru01.jpg"},
      { name: "Ray Alen", price: 2, pic: "https://www.basketball-reference.com/req/202101021/images/players/allenra02.jpg"},
      { name: "Gianis", price: 2, pic: "https://www.basketball-reference.com/req/202101021/images/players/antetgi01.jpg"},
      { name: "Anthony Davis", price: 2, pic:"https://www.basketball-reference.com/req/202101021/images/players/davisan02.jpg"},
      { name: "Yao Ming", price: 2, pic: "https://www.basketball-reference.com/req/202101021/images/players/mingya01.jpg"}    
    ],
    one: [
      { name: "Jason Kidd", price: 1, pic:"https://www.basketball-reference.com/req/202101021/images/players/kiddja01.jpg"},
      { name: "Allen Iverson", price: 1, pic: "https://www.basketball-reference.com/req/202101021/images/players/iversal01.jpg"},
      { name: "Paul Pierce", price: 1, pic: "https://www.basketball-reference.com/req/202101021/images/players/piercpa01.jpg"},
      { name: "Pau Gasol", price: 1, pic:"https://www.basketball-reference.com/req/202101021/images/players/gasolpa01.jpg"},
      { name: "Al Horford", price: 1, pic: "https://www.basketball-reference.com/req/202101021/images/players/horfoal01.jpg"}    
    ],    
    bank: {
    	balance: 15,
      players:[
          {name: 'Player #1', pic:'avatar.jpeg'},
          {name: 'Player #2', pic:'avatar.jpeg'},
          {name: 'Player #3', pic:'avatar.jpeg'},
          {name: 'Player #4', pic:'avatar.jpeg'},
          {name: 'Player #5', pic:'avatar.jpeg'},                                        
      ]
    },
    pick:0
  },
  methods: {
  	buyPlayer: function(player){
        let saldo = this.bank.balance - player.price
        if(saldo >= 0 && this.pick<5){
            this.bank.players[this.pick] = player;
            this.bank.balance = saldo;
            this.pick+=1;
        }
    },
    reset: function(){
        this.bank.players=[          
            {name: 'Player #1', pic:'avatar.jpeg'},
            {name: 'Player #2', pic:'avatar.jpeg'},
            {name: 'Player #3', pic:'avatar.jpeg'},
            {name: 'Player #4', pic:'avatar.jpeg'},
            {name: 'Player #5', pic:'avatar.jpeg'},    
      ];
        this.bank.balance=15;
        this.pick=0;
    }
  }
})
