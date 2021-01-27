import flights from '../../public/flights.json';

export default (req, res) => {
  res.statusCode = 200;
  res.json(flights);
}