import { useState } from "react";

type QuoteType = {
  quote: string;
  character: string;
  movie: string;
};

const quotes: QuoteType[] = [
  {
    quote: "It’s not about how hard you hit. It’s about how hard you can get hit and keep moving forward.",
    character: "Rocky Balboa",
    movie: "Rocky Balboa (2006)"
  },
  {
    quote: "Don’t ever let somebody tell you you can’t do something. Not even me.",
    character: "Chris Gardner",
    movie: "The Pursuit of Happyness (2006)"
  },
  {
    quote: "All we have to decide is what to do with the time that is given to us.",
    character: "Gandalf",
    movie: "The Lord of the Rings: The Fellowship of the Ring (2001)"
  },
  {
    quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    character: "John Keating",
    movie: "Dead Poets Society (1989)"
  },
  {
    quote: "Our lives are defined by opportunities, even the ones we miss.",
    character: "Benjamin Button",
    movie: "The Curious Case of Benjamin Button (2008)"
  },
  {
    quote: "To me, it’s not about how far you fall. It’s how you get up.",
    character: "Leigh Anne Tuohy",
    movie: "The Blind Side (2009)"
  },
  {
    quote: "Sometimes it is the people who no one imagines anything of who do the things that no one can imagine.",
    character: "Alan Turing",
    movie: "The Imitation Game (2014)"
  },
  {
    quote: "Hope is a good thing, maybe the best of things, and no good thing ever dies.",
    character: "Andy Dufresne",
    movie: "The Shawshank Redemption (1994)"
  },
  {
    quote: "You mustn’t be afraid to dream a little bigger, darling.",
    character: "Eames",
    movie: "Inception (2010)"
  },
  {
    quote: "Great men are not born great, they grow great.",
    character: "Mario Puzo (narration)",
    movie: "The Godfather (1972)"
  },
  {
    quote: "Just keep swimming.",
    character: "Dory",
    movie: "Finding Nemo (2003)"
  },
  {
    quote: "It’s what you do right now that makes a difference.",
    character: "Sgt. Norm 'Hoot' Gibson",
    movie: "Black Hawk Down (2001)"
  },
  {
    quote: "After a while, you learn to ignore the names people call you and just trust who you are.",
    character: "Shrek",
    movie: "Shrek (2001)"
  },
  {
    quote: "The flower that blooms in adversity is the most rare and beautiful of all.",
    character: "The Emperor",
    movie: "Mulan (1998)"
  },
  {
    quote: "You have to do everything you can. You have to work your hardest. And if you stay positive, you have a shot at a silver lining.",
    character: "Pat Solitano",
    movie: "Silver Linings Playbook (2012)"
  },
  {
    quote: "Even miracles take a little time.",
    character: "Fairy Godmother",
    movie: "Cinderella (1950)"
  },
  {
    quote: "It’s only after we’ve lost everything that we’re free to do anything.",
    character: "Tyler Durden",
    movie: "Fight Club (1999)"
  },
  {
    quote: "Every man dies, not every man really lives.",
    character: "William Wallace",
    movie: "Braveheart (1995)"
  },
  {
    quote: "Why do we fall, sir? So that we can learn to pick ourselves up.",
    character: "Alfred Pennyworth",
    movie: "Batman Begins (2005)"
  },
  {
    quote: "You’re braver than you believe, stronger than you seem, and smarter than you think.",
    character: "Christopher Robin",
    movie: "Winnie the Pooh / Christopher Robin"
  }
];

function getRandomQuote() {
	const { random, floor } = Math
	const length = quotes.length
	return quotes[floor(random() * length)]
}

function quoteEl(quote: QuoteType) {
  return <>
    <h2 className="font-bold text-[3vw] text-center max-w-full leading-tight [text-wrap:balance]">
      {quote.quote}
    </h2>
    <span className="self-end text-lg">By {quote.character}, {quote.movie}</span>
  </>
}

export function Quote() {
	const [quote, setQuote] = useState(getRandomQuote())

	return <div 
		className="flex flex-col self-center items-center justify-center w-full p-[20%] h-full gap-4" 
		style={{fontFamily: 'DM Serif Display'}} onClick={() => setQuote(getRandomQuote())}
	>
    <span className="text-2xl text-gray-500 animate-pulse">Click to show a new quote</span>
		{quoteEl(quote)}
	</div>
}