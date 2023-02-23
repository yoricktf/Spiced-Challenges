import Chance from 'chance'


const chance = Chance()
const firstName = chance.first()
const lastName = chance.last()
const twitter = chance.twitter()
const geohash = chance.geohash()

const character = {
  firstName,
  lastName,
  twitter,
  geohash
}



export default function Handler(req, res) {
  res.status(200).json(character)
}
