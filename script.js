const generateRandomNumber = (num) =>{
    return Math.floor(Math.random()* num)
}

const dataCollection = {
    inspirationalQuotes: [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
        "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
        "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
        "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
        "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer"
    ],
    programmingAdvice: [
        "Write code that is easy to delete, not easy to extend.",
        "Don't repeat yourself (DRY principle).",
        "Keep your functions small and focused on a single task.",
        "Comment your code to make it understandable for others (and yourself in the future).",
        "Test your code thoroughly to catch bugs early.",
        "Use meaningful variable and function names.",
        "Refactor your code regularly to keep it clean and efficient.",
        "Learn to use version control systems like Git.",
        "Understand the importance of algorithms and data structures.",
        "Stay curious and keep learning new technologies and best practices."
    ],
    funFacts: [
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
        "Bananas are berries, but strawberries are not.",
        "A group of flamingos is called a 'flamboyance'.",
        "Octopuses have three hearts and blue blood.",
        "A day on Venus is longer than a year on Venus.",
        "There are more stars in the universe than grains of sand on all the Earth's beaches.",
        "Humans share about 60% of their DNA with bananas.",
        "The Eiffel Tower can be 15 cm taller during the summer.",
        "An octopus has nine brains: one central brain and a small brain in each of its eight arms.",
        "A single strand of spaghetti is called a 'spaghetto'."
    ]
};

let luckyMessage = []

for (let prop in dataCollection){

let massageid = generateRandomNumber(dataCollection[prop].length)

switch (prop){
    case 'inspirationalQuotes':
        luckyMessage.push(`Your lucky qoute is "${dataCollection[prop][massageid]}". `)
        break
    case 'programmingAdvice': 
        luckyMessage.push(`Your programming advice is "${dataCollection[prop][massageid]}".`)
        break 
    case 'funFacts':
        luckyMessage.push(`Fun fact "${dataCollection[prop][massageid]}".`) 
        break
        default: 
            personalWisdom.push('There is not enough info.')        
}

}

const formatMessage = (messages) => {
    const formatted = messages.join('\n');
    console.log(formatted);
};

formatMessage(luckyMessage);