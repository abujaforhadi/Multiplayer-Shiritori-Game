# Multiplayer Shiritori Game

A simple two-player Shiritori game built using the MERN stack. Players take turns entering words, where each new word must begin with the last letter of the previous word. Words must be valid English words and cannot be repeated.

## Features
- **Turn-Based Gameplay**: Players take turns automatically.
- **Word Validation**: Words are checked using [DictionaryAPI](https://dictionaryapi.dev/).
- **Word Structure Validation**: Ensures words start with the last letter of the previous word, have at least 4 letters, and are not repeated.
- **Countdown Timer**: Each player has a limited time to submit a word.
- **Score Tracking**: Players earn or lose points based on word validity and timeouts.
- **Word History Display**: Previously used words are shown to avoid repetition.
- **Hosting**: Deployed on Vercel.

## Live Demo
Play the game here: [Shiritori Game](https://shiritori20.vercel.app/)

## Repository
GitHub: [Multiplayer Shiritori Game](https://github.com/abujaforhadi/Multiplayer-Shiritori-Game)

## Setup Instructions
### Prerequisites
- Node.js installed
- Git installed
- Package manager (npm or yarn)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/abujaforhadi/Multiplayer-Shiritori-Game.git
   cd Multiplayer-Shiritori-Game
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Usage
1. Open the game in the browser (default: `http://localhost:3000`).
2. Player 1 enters a valid word.
3. Player 2 must enter a word that starts with the last letter of the previous word.
4. If a player enters an invalid word or runs out of time, they lose a point.
5. The game continues until players decide to stop.

## Deployment
To deploy the game, use Netlify or Vercel:
- **Vercel:**
  - Install Vercel CLI: `npm install -g vercel`
  - Deploy: `vercel`

## Technologies Used
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express (if applicable)
- **Validation:** DictionaryAPI

## Contribution
If you'd like to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License
This project is licensed under the MIT License.

---

Enjoy playing the Shiritori Game! 🚀

