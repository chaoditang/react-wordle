import { Cell } from '../grid/Cell'
import FunTable from './FunTable'
import LangTable from './LangTable'
import LetterTable from './LetterTable'

export default function HeadDes() {
  return (
    <div>
      <div className="rounded-lg border border-2 border-gray-300 dark:border-white">
        <h1 className="m-4 text-3xl font-semibold">
          Wordle Games: The Most Popular Word Guess Game on the Internet
        </h1>
        <p className="m-4 text-xl">
          Wordle is a word guess game that challenges people to find a
          five-letter word in six guesses. It was founded by Josh Wardle for the
          reason of creating a fun and simple game for playing with his friends.
          The game has become popular after he shared it on the WhatsApp group.
          After that, this game has been played by millions of people around the
          world.
        </p>
      </div>
      <br />
      <div className="rounded-lg border border-2 border-gray-300 dark:border-white">
        <h2 className="m-4 text-2xl font-semibold">How to Play</h2>
        <p className="m-4 text-xl">
          Guess the word in 6 tries. After each guess, the color of the tiles
          will change to show how close your guess was to the word.
        </p>
        <div className="mb-1 mt-4 flex justify-center">
          <Cell
            isRevealing={true}
            isCompleted={true}
            value="T"
            status="correct"
          />
          <Cell value="I" isCompleted={true} />
          <Cell value="G" isCompleted={true} />
          <Cell value="E" isCompleted={true} />
          <Cell value="R" isCompleted={true} />
        </div>
        <p className="m-4 text-xl">
          The letter T in green color means it is in the word and in the correct
          spot.
        </p>
        <div className="mb-1 mt-4 flex justify-center">
          <Cell value="P" isCompleted={true} />
          <Cell value="I" isCompleted={true} />
          <Cell
            isRevealing={true}
            isCompleted={true}
            value="L"
            status="present"
          />
          <Cell value="O" isCompleted={true} />
          <Cell value="T" isCompleted={true} />
        </div>
        <p className="m-4 text-xl">
          The orange letter L means it is in the word but in the wrong spot.
        </p>
        <div className="mb-1 mt-4 flex justify-center">
          <Cell value="V" isCompleted={true} />
          <Cell value="A" isCompleted={true} />
          <Cell value="G" isCompleted={true} />
          <Cell
            isRevealing={true}
            isCompleted={true}
            value="U"
            status="absent"
          />
          <Cell value="E" isCompleted={true} />
        </div>
        <p className="m-4 text-xl">
          The gray letter U means it is not in the word in any spot.
        </p>
      </div>
      <br />
      <div className="rounded-lg border border-2 border-gray-300 dark:border-white">
        <h3 className="m-4 text-xl font-semibold">
          Various Number of Letters Wordle
        </h3>
        <LetterTable />
      </div>
      <br />
      <div className="rounded-lg border border-2 border-gray-300 dark:border-white">
        <h3 className="m-4 text-xl font-semibold">Different Language Wordls</h3>
        <LangTable />
      </div>
      <br />
      <div className="rounded-lg border border-2 border-gray-300 dark:border-white">
        <h3 className="m-4 text-xl font-semibold">Wordle with fun Themes</h3>
        <FunTable />
      </div>
    </div>
  )
}
