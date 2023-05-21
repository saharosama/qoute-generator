function randomQuote(){
    
        const quotes = [
          
          {
            quote:
              "But theres no such thing as free. There are only different and more horrible ways to be enslaved.",
            author: "Lauren DeStefano"
          },
          {
            quote:
              "Freedom is more than just a patriotic concept; it is the purest intent of our design. Be you. Be free. Be nice.",
            author: "Steve Maraboli "
          },
          {
            quote: "The price of anything is the amount of life you exchange for it.",
            author: "David Thoreau"
          },
          {
            quote:
              "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
            author: "Charles Lindbergh"
          },
          {
            quote:
              "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
            author: " Tyne Daly"
          }
          ,
          {
            quote:
              "Even when you lost everything you thought there was to lose, somebody came along and gave you something for free.",
            author: "Jenny Valentine"
          }
          ,
          {
            quote:
              "Life calls the tune, we dance.",
            author: "John Galsworthy"
          }
          ,
          {
            quote:
              "Stars are the souls of old sailors. They plot the skies and guide the wayward home.",
            author: " Brian Rathbone"
          }
          ,
          {
            quote:
              "do not underestimate your dreams. It's your inner child screaming what you should do.",
            author: "Alan Maiccon"
          }
        ];
      let randomNum=Math.floor(Math.random()*quotes.length);
      document.getElementById("quote").innerText = quotes[randomNum].quote;
      document.querySelector(".author").innerHTML = quotes[randomNum].author;
       
      }
      
